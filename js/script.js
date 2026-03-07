// Selectors
const coverWrapper = document.querySelector('.cover-wrapper');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music Array (Update paths to match your assets)
const musicFiles = [
  {
    name: 'Song Title 1',
    artist: 'Artist 1',
    path: 'assets/music/track1.mp3',
    cover: 'assets/images/cover1.jpg'
  },
  {
    name: 'Song Title 2',
    artist: 'Artist 2',
    path: 'assets/music/track2.mp3',
    cover: 'assets/images/cover2.jpg'
  },
  {
    name: 'Song Title 3',
    artist: 'Artist 3',
    path: 'assets/music/track3.mp3',
    cover: 'assets/images/cover3.jpg'
  }
];

let trackIndex = 0;
let isPlaying = false;

// Initialize
loadTrack(musicFiles[trackIndex]);

function loadTrack(track) {
  title.innerText = track.name;
  artist.innerText = track.artist;
  audio.src = track.path;
  cover.src = track.cover;
}

// Play & Pause
function togglePlay() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  isPlaying = true;
  coverWrapper.classList.add('play');
  playBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
  audio.play();
}

function pauseTrack() {
  isPlaying = false;
  coverWrapper.classList.remove('play');
  playBtn.innerHTML = '<ion-icon name="play"></ion-icon>';
  audio.pause();
}

// Prev & Next
function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = musicFiles.length - 1;
  }
  loadTrack(musicFiles[trackIndex]);
  if (isPlaying) playTrack();
}

function nextTrack() {
  trackIndex++;
  if (trackIndex > musicFiles.length - 1) {
    trackIndex = 0;
  }
  loadTrack(musicFiles[trackIndex]);
  if (isPlaying) playTrack();
}

// Update Progress Bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  
  if (isNaN(duration)) return;
  
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Format Time
  let cMin = Math.floor(currentTime / 60);
  let cSec = Math.floor(currentTime % 60);
  if (cSec < 10) cSec = `0${cSec}`;
  currentTimeEl.innerText = `${cMin}:${cSec}`;

  let dMin = Math.floor(duration / 60);
  let dSec = Math.floor(duration % 60);
  if (dSec < 10) dSec = `0${dSec}`;
  if (dMin || dSec) {
    durationEl.innerText = `${dMin}:${dSec}`;
  }
}

// Set Progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextTrack);

