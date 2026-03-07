/* 
   AuricPlay – visualizer.js
   Canvas-based audio visualizer.
 */

'use strict';

const Visualizer = (() => {

  /* ─── State ──────────────────────────────────── */
  let _canvas    = null;
  let _ctx       = null;
  let _rafId     = null;
  let _mode      = 'ring';    // 'bar' | 'ring'
  let _isRunning = false;

  /* ─── Color helpers ──────────────────────────── */
  const ACCENT   = '#ff3366';
  const ACCENT2  = '#00d4aa';
  const GOLD     = '#f5b700';

  function _lerp(a, b, t) { return a + (b - a) * t; }

  function _barColor(index, total, amplitude) {
    // Gradient: red (bass) → teal (treble), brighter at high amplitude
    const t = index / total;
    const r = Math.round(_lerp(255, 0,   t));
    const g = Math.round(_lerp(51,  212, t));
    const b = Math.round(_lerp(102, 170, t));
    const a = 0.4 + (amplitude / 255) * 0.6;
    return `rgba(${r},${g},${b},${a})`;
  }

  /* ─── BAR mode ───────────────────────────────── */
  function _drawBars(data) {
    const W = _canvas.width;
    const H = _canvas.height;
    _ctx.clearRect(0, 0, W, H);

    const numBars  = 48;
    const barW     = W / numBars - 2;
    const step     = Math.floor(data.length / numBars);
    const maxH     = H * 0.85;

    for (let i = 0; i < numBars; i++) {
      const val    = data[i * step] || 0;
      const barH   = (val / 255) * maxH;
      const x      = i * (barW + 2);
      const y      = H - barH;

      // Bar fill
      const grad   = _ctx.createLinearGradient(0, y, 0, H);
      grad.addColorStop(0, _barColor(i, numBars, val));
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      _ctx.fillStyle = grad;
      _ctx.beginPath();
      _ctx.roundRect(x, y, barW, barH, [3, 3, 0, 0]);
      _ctx.fill();

      // Mirror reflection
      _ctx.globalAlpha = 0.15;
      _ctx.fillStyle   = _barColor(i, numBars, val);
      _ctx.beginPath();
      _ctx.roundRect(x, H, barW, -(barH * 0.3), [0, 0, 3, 3]);
      _ctx.fill();
      _ctx.globalAlpha = 1;
    }
  }

  /* ─── RING mode ──────────────────────────────── */
  function _drawRing(data) {
    const W  = _canvas.width;
    const H  = _canvas.height;
    _ctx.clearRect(0, 0, W, H);

    const cx      = W / 2;
    const cy      = H / 2;
    const radius  = Math.min(W, H) * 0.3;
    const numBars = 80;
    const step    = Math.floor(data.length / numBars);
    const maxLen  = Math.min(W, H) * 0.18;

    // Base circle glow
    _ctx.beginPath();
    _ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    _ctx.strokeStyle = 'rgba(255,51,102,0.12)';
    _ctx.lineWidth   = 1;
    _ctx.stroke();

    // Frequency bars around ring
    for (let i = 0; i < numBars; i++) {
      const val    = data[i * step] || 0;
      const angle  = (i / numBars) * Math.PI * 2 - Math.PI / 2;
      const barLen = (val / 255) * maxLen;
      const t      = i / numBars;

      const x1 = cx + Math.cos(angle) * radius;
      const y1 = cy + Math.sin(angle) * radius;
      const x2 = cx + Math.cos(angle) * (radius + barLen);
      const y2 = cy + Math.sin(angle) * (radius + barLen);

      const r = Math.round(_lerp(255, 0,   t));
      const g = Math.round(_lerp(51,  212, t));
      const b = Math.round(_lerp(102, 170, t));
      const a = 0.5 + (val / 255) * 0.5;

      _ctx.beginPath();
      _ctx.moveTo(x1, y1);
      _ctx.lineTo(x2, y2);
      _ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
      _ctx.lineWidth   = 2.5;
      _ctx.lineCap     = 'round';
      _ctx.stroke();
    }

    // Center dot
    const avgVol = data.reduce((sum, v) => sum + v, 0) / data.length;
    const dotR   = 4 + (avgVol / 255) * 6;
    const grd    = _ctx.createRadialGradient(cx, cy, 0, cx, cy, dotR * 3);
    grd.addColorStop(0, ACCENT);
    grd.addColorStop(1, 'rgba(255,51,102,0)');
    _ctx.beginPath();
    _ctx.arc(cx, cy, dotR * 3, 0, Math.PI * 2);
    _ctx.fillStyle = grd;
    _ctx.fill();

    _ctx.beginPath();
    _ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
    _ctx.fillStyle = ACCENT;
    _ctx.fill();
  }

  /* ─── Animation loop ─────────────────────────── */
  function _loop() {
    if (!_isRunning) return;

    // Get frequency data: real or simulated
    let data = Player.getFrequencyData();
    if (!data && Player.isPlaying) {
      data = Player.getSimulatedFrequencyData(128);
    }
    if (!data) {
      // Silent state — draw quiet baseline
      data = new Uint8Array(128).fill(0);
    }

    if (_mode === 'bar')  _drawBars(data);
    else                  _drawRing(data);

    _rafId = requestAnimationFrame(_loop);
  }

  /* ─── Resize canvas to its display size ─────── */
  function _syncSize() {
    if (!_canvas) return;
    const rect = _canvas.getBoundingClientRect();
    _canvas.width  = rect.width  * (window.devicePixelRatio || 1);
    _canvas.height = rect.height * (window.devicePixelRatio || 1);
    _ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  /* ─── Init ───────────────────────────────────── */
  function init() {
    _canvas = document.getElementById('vizCanvas');
    if (!_canvas) return;
    _ctx = _canvas.getContext('2d');
    _syncSize();
    window.addEventListener('resize', _syncSize);
  }

  /* ─── Start / Stop ───────────────────────────── */
  function start() {
    if (_isRunning) return;
    _isRunning = true;
    _loop();
  }

  function stop() {
    _isRunning = false;
    if (_rafId) { cancelAnimationFrame(_rafId); _rafId = null; }
    if (_ctx && _canvas) _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
  }

  /* ─── Toggle mode ────────────────────────────── */
  function toggleMode() {
    _mode = _mode === 'bar' ? 'ring' : 'bar';
    const label = document.getElementById('fsVizLabel');
    if (label) label.textContent = _mode === 'bar' ? 'SPECTRUM' : 'FREQUENCY';
    App.toast(`Visualizer: ${_mode.toUpperCase()}`);
  }

  /* ─── Expose ─────────────────────────────────── */
  return {
    init,
    start,
    stop,
    toggleMode,
    get mode() { return _mode; },
  };

})();

