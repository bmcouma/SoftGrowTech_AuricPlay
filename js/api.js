/* 
   AuricPlay – api.js (Local Version)
   Serves local music files to the AuricPlay interface
 */

'use strict';

const API = (() => {

  /* ─── Curated home page genres ──────────────── */
  const GENRES = [
    { name: 'Pop',       emoji: '🎤', query: 'pop',      color: 'linear-gradient(135deg,#ff3366,#ff8c69)' },
    { name: 'Hip-Hop',   emoji: '🎧', query: 'hiphop',   color: 'linear-gradient(135deg,#0d0d14,#2d1b50)' },
    { name: 'Electronic',emoji: '⚡', query: 'dance',    color: 'linear-gradient(135deg,#003a6a,#0070cc)' },
    { name: 'Indie',     emoji: '🌿', query: 'indie',    color: 'linear-gradient(135deg,#003a00,#006600)' },
    { name: 'Jazz',      emoji: '🎺', query: 'jazz',     color: 'linear-gradient(135deg,#1a0a00,#5a3000)' },
    { name: 'Classical', emoji: '🎻', query: 'classical',color: 'linear-gradient(135deg,#1a1a2e,#3a3a5e)' },
  ];

  /* ─── Local Database ────────────────────────── */
  const LOCAL_TRACKS = [
    {
      id: "track_1",
      title: "(Everything I Do) I Do It For You (Official Music Video)(MP3_128K)",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/(Everything I Do) I Do It For You (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_2",
      title: "Let Her Go",
      artist: "04 - Passenger",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/04 - Passenger - Let Her Go.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_3",
      title: "In Da Club (Official Music Video)(MP3_128K)",
      artist: "50 Cent",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/50 Cent - In Da Club (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_4",
      title: "Closer (Official Music Video)(MP3_128K)",
      artist: "Abigail Chams _ Harmonize",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Abigail Chams _ Harmonize - Closer (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_5",
      title: "Bugatti (Official Music Video) (Explicit) ft. Future_ Rick Ross(MP3_128K)",
      artist: "Ace Hood",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Ace Hood - Bugatti (Official Music Video) (Explicit) ft. Future_ Rick Ross(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_6",
      title: "Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way_dhYOPzcsbGM",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way_dhYOPzcsbGM.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_7",
      title: "Love Me Harder (Offici(MP3_128K)",
      artist: "Ariana Grande_ The Weeknd",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Ariana Grande_ The Weeknd - Love Me Harder (Offici(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_8",
      title: "Rockabye Remix (Official Music Video)(MP3_128K)",
      artist: "Barnaba ft Otile Brown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Barnaba ft Otile Brown - Rockabye Remix (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_9",
      title: "Lost Cause (Official Music Video)(MP3_128K)",
      artist: "Billie Eilish",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Billie Eilish - Lost Cause (Official Music Video)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_10",
      title: "Love Is Wicked (Official Video)(MP3_160K)",
      artist: "Brick _ Lace",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Brick _ Lace - Love Is Wicked (Official Video)(MP3_160K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_11",
      title: "Call Me Maybe(MP3_160K)",
      artist: "Carly Rae Jepsen",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Carly Rae Jepsen - Call Me Maybe(MP3_160K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_12",
      title: "Chris Brown  Residuals Official Video",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Chris Brown  Residuals Official Video.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_13",
      title: "Landlord (FULL HD) [Skiza 8540179 ](MP3_128K)_1",
      artist: "Mejja",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Mejja - Landlord (FULL HD) [Skiza 8540179 ](MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_14",
      title: "Fella (Official Music Video)(MP3_128K)_1",
      artist: "Navy Kenzo",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Navy Kenzo - Fella (Official Music Video)(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_15",
      title: "Pascal Tokodi _ King Kaka _ You (Official Video) TO GET You As Your SKIZA SMS SKIZA 9370535 TO 811(MP3_128K)_1",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Pascal Tokodi _ King Kaka _ You (Official Video) TO GET You As Your SKIZA SMS SKIZA 9370535 TO 811(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_16",
      title: "REKLES_X_MEJJA_-_SOTA_(OFFICIAL_VIDEO)(128k)",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/REKLES_X_MEJJA_-_SOTA_(OFFICIAL_VIDEO)(128k).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_17",
      title: "Still The One (Official Music Video) SMS [Skiza 1063120] to 811(MP3_128K)_1",
      artist: "Sauti Sol",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Sauti Sol - Still The One (Official Music Video) SMS [Skiza 1063120] to 811(MP3_128K)_1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_18",
      title: "Soledad- Westlife (w_ lyrics)(MP3_128K)",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/Soledad- Westlife (w_ lyrics)(MP3_128K).mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_19",
      title: "track1",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/track1.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_20",
      title: "track2",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
      previewUrl: "assets/music/track2.mp3",
      artwork: "assets/images/cover2.jpg",
      source: "local"
    },
    {
      id: "track_21",
      title: "track3",
      artist: "Unknown",
      album: "Asset Library",
      genre: "My Music",
      duration: 200000,
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


