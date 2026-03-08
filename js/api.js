/* 
   AuricPlay – api.js (Local Version)
   Serves local music files to the AuricPlay interface
 */

'use strict';

const API = (() => {

  /* ─── Curated home page genres ──────────────── */
  const GENRES = [
    { name: 'Afrobeat',   emoji: '🌍', query: 'afrobeat', color: 'linear-gradient(135deg,#ff8c00,#ff4500)' },
    { name: 'Amapiano',   emoji: '🎹', query: 'amapiano', color: 'linear-gradient(135deg,#8e44ad,#2980b9)' },
    { name: 'R&B',        emoji: '🎙️', query: 'rnb',      color: 'linear-gradient(135deg,#c0392b,#8e44ad)' },
    { name: 'Gospel',     emoji: '🙏', query: 'gospel',   color: 'linear-gradient(135deg,#f1c40f,#f39c12)' },
    { name: 'Highlife',   emoji: '🎸', query: 'highlife', color: 'linear-gradient(135deg,#2ecc71,#27ae60)' },
    { name: 'Bongo Flava',emoji: '🇹🇿', query: 'bongo',    color: 'linear-gradient(135deg,#3498db,#2980b9)' },
  ];

  /* ─── Local Database ────────────────────────── */
  const LOCAL_TRACKS = [
    {
      id: "track_1",
      title: "(Everything I Do) I Do It For You",
      artist: "Bryan Adams",
      album: "Local Mix",
      genre: "R&B",
      duration: 253000,
      previewUrl: "assets/music/(Everything I Do) I Do It For You (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_2",
      title: "Let Her Go",
      artist: "Passenger",
      album: "Local Mix",
      genre: "R&B",
      duration: 252000,
      previewUrl: "assets/music/04 - Passenger - Let Her Go.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_3",
      title: "In Da Club",
      artist: "50 Cent",
      album: "Hip-Hop Classic",
      genre: "Afrobeat",
      duration: 193000,
      previewUrl: "assets/music/50 Cent - In Da Club (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_4",
      title: "Closer",
      artist: "Abigail Chams ft. Harmonize",
      album: "Tanzania Vibes",
      genre: "Bongo Flava",
      duration: 215000,
      previewUrl: "assets/music/Abigail Chams _ Harmonize - Closer (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_5",
      title: "Bugatti",
      artist: "Ace Hood ft. Future",
      album: "Local Mix",
      genre: "Afrobeat",
      duration: 268000,
      previewUrl: "assets/music/Ace Hood - Bugatti (Official Music Video) (Explicit) ft. Future_ Rick Ross(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_6",
      title: "On My Way",
      artist: "Alan Walker",
      album: "Electronic Soul",
      genre: "Amapiano",
      duration: 213000,
      previewUrl: "assets/music/Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way_dhYOPzcsbGM.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_7",
      title: "Love Me Harder",
      artist: "Ariana Grande",
      album: "Sweetener",
      genre: "R&B",
      duration: 231000,
      previewUrl: "assets/music/Ariana Grande_ The Weeknd - Love Me Harder (Offici(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_8",
      title: "Rockabye Remix",
      artist: "Barnaba ft. Otile Brown",
      album: "Bongo Hot",
      genre: "Bongo Flava",
      duration: 204000,
      previewUrl: "assets/music/Barnaba ft Otile Brown - Rockabye Remix (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_9",
      title: "Lost Cause",
      artist: "Billie Eilish",
      album: "Modern R&B",
      genre: "R&B",
      duration: 212000,
      previewUrl: "assets/music/Billie Eilish - Lost Cause (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_10",
      title: "Love Is Wicked",
      artist: "Brick & Lace",
      album: "Dancehall Mix",
      genre: "Afrobeat",
      duration: 225000,
      previewUrl: "assets/music/Brick _ Lace - Love Is Wicked (Official Video)(MP3_160K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_11",
      title: "Call Me Maybe",
      artist: "Carly Rae Jepsen",
      album: "Pop Hits",
      genre: "Amapiano",
      duration: 193000,
      previewUrl: "assets/music/Carly Rae Jepsen - Call Me Maybe(MP3_160K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_12",
      title: "Residuals",
      artist: "Chris Brown",
      album: "R&B Hits",
      genre: "R&B",
      duration: 238000,
      previewUrl: "assets/music/Chris Brown  Residuals Official Video.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_13",
      title: "Landlord",
      artist: "Mejja",
      album: "Genge Soul",
      genre: "Highlife",
      duration: 242000,
      previewUrl: "assets/music/Mejja - Landlord (FULL HD) [Skiza 8540179 ](MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_14",
      title: "Fella",
      artist: "Navy Kenzo",
      album: "Afropop",
      genre: "Afrobeat",
      duration: 210000,
      previewUrl: "assets/music/Navy Kenzo - Fella (Official Music Video)(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_15",
      title: "You",
      artist: "Pascal Tokodi ft. King Kaka",
      album: "Bongo R&B",
      genre: "Bongo Flava",
      duration: 228000,
      previewUrl: "assets/music/Pascal Tokodi _ King Kaka _ You (Official Video) TO GET You As Your SKIZA SMS SKIZA 9370535 TO 811(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_16",
      title: "SOTA",
      artist: "Rekles x Mejja",
      album: "Gengetone",
      genre: "Highlife",
      duration: 245000,
      previewUrl: "assets/music/REKLES_X_MEJJA_-_SOTA_(OFFICIAL_VIDEO)(128k).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_17",
      title: "Still The One",
      artist: "Sauti Sol",
      album: "African Kings",
      genre: "Afrobeat",
      duration: 235000,
      previewUrl: "assets/music/Sauti Sol - Still The One (Official Music Video) SMS [Skiza 1063120] to 811(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_18",
      title: "Soledad",
      artist: "Westlife",
      album: "Classic R&B",
      genre: "R&B",
      duration: 237000,
      previewUrl: "assets/music/Soledad- Westlife (w_ lyrics)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_19",
      title: "Gospel Morning",
      artist: "Various Artists",
      album: "Praise Mix",
      genre: "Gospel",
      duration: 310000,
      previewUrl: "assets/music/track1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_20",
      title: "Sunday Vibe",
      artist: "Unknown",
      album: "Praise Mix",
      genre: "Gospel",
      duration: 295000,
      previewUrl: "assets/music/track2.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_21",
      title: "Blessed Day",
      artist: "Unknown",
      album: "Praise Mix",
      genre: "Gospel",
      duration: 320000,
      previewUrl: "assets/music/track3.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
  ];

  // Helper to simulate network delay
  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  /* ─── Public: Search Local ───────────────────── */
  async function search(query, limit = 20) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase();
    await delay(200); // Simulate network
    return LOCAL_TRACKS.filter(t => 
      t.title.toLowerCase().includes(q) || 
      t.artist.toLowerCase().includes(q) ||
      t.genre.toLowerCase().includes(q)
    ).slice(0, limit);
  }

  /* ─── Public: Get genre tracks ──────────────── */
  async function getGenreTracks(genreQuery, limit = 25) {
    await delay(300);
    return LOCAL_TRACKS; 
  }

  /* ─── Public: Get artist top tracks ─────────── */
  async function getArtistTracks(artist, limit = 10) {
    return search(artist, limit);
  }

  /* ─── Public: Getter for genres list ────────── */
  function getGenres() {
    return GENRES;
  }

  /* ─── Format milliseconds to m:ss ───────────── */
  function formatDuration(ms) {
    if (!ms || isNaN(ms)) return '0:00';
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${String(sec).padStart(2, '0')}`;
  }

  /* ─── Format seconds to m:ss ─────────────────── */
  function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  /* ─── Expose public API ───────────────────────── */
  return {
    search,
    getGenreTracks,
    getArtistTracks,
    getGenres,
    formatDuration,
    formatTime,
  };

})();


