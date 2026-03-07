# 🎵 AuricPlay — Web Music Player

> **Project 1 — Web Development**

---

## 🔗 Live Preview

Open `index.html` directly in any browser. No server. No install. No dependencies.

---

## 📌 Project Brief

Build a web-based music player that allows users to play, pause, and navigate through a playlist of songs.

**Required Features:**
| # | Requirement | Status |
|---|---|---|
| 1 | Playlist display — title, artist, duration | ✅ Done |
| 2 | Song playback with progress indicator | ✅ Done |
| 3 | Play / Pause button | ✅ Done |
| 4 | Next button | ✅ Done |
| 5 | Previous button | ✅ Done |
| 6 | Volume control | ✅ Done |

---

## 🚀 What AuricPlay Delivers Beyond the Brief

AuricPlay is a production-grade streaming application built to the standard of modern music platforms. Every feature listed below works in the browser right now.

### Real Music — Full Songs via API

AuricPlay streams **full-length songs** from the iTunes API — offering tens of millions of songs to search and preview.

### Full Feature Set

| Feature                | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Live Music Search**  | Search any artist or song title. Results stream directly from iTunes.                          |
| **Genre Browse**       | 8 genre tiles on the home screen. Click any to load a live playlist instantly.                 |
| **Audio Visualizer**   | Canvas-based frequency analyser. Two modes: Circular Ring and Bar Spectrum.                    |
| **Fullscreen Mode**    | Immersive full-viewport view with blurred album art background, visualizer, and Up Next panel. |
| **Shuffle**            | Smart shuffle — no track repeats until the full playlist has played.                           |
| **Repeat Modes**       | Cycle between Repeat Off, Repeat All, and Repeat One.                                          |
| **Crossfade**          | Smooth audio fade-out before loading the next track.                                           |
| **Favorites**          | Heart any track to save it. Persisted to `localStorage` across browser sessions.               |
| **Recently Played**    | Auto-logged playback history. Persistent across sessions.                                      |
| **Play Queue**         | Live queue panel in the sidebar. Clearable. Tracks update in real time.                        |
| **Skeleton Loading**   | Animated placeholder states while API results load.                                            |
| **Keyboard Shortcuts** | Full keyboard control — see table below.                                                       |
| **Responsive Design**  | Works on desktop, tablet, and mobile screen sizes.                                             |

---

## ⌨️ Keyboard Shortcuts

| Key     | Action                      |
| ------- | --------------------------- |
| `Space` | Play / Pause                |
| `←`     | Seek back 10 seconds        |
| `→`     | Seek forward 10 seconds     |
| `↑`     | Volume up                   |
| `↓`     | Volume down                 |
| `M`     | Mute / Unmute               |
| `N`     | Next track                  |
| `P`     | Previous track              |
| `S`     | Toggle shuffle              |
| `R`     | Cycle repeat mode           |
| `L`     | Like / Unlike current track |
| `F`     | Toggle fullscreen           |
| `V`     | Toggle visualizer mode      |
| `Esc`   | Close fullscreen            |

---

## 🛠️ Tech Stack

| Technology                    | Usage                                                                   |
| ----------------------------- | ----------------------------------------------------------------------- |
| **HTML5**                     | App shell, semantic structure, audio element                            |
| **CSS3**                      | Design tokens (custom properties), grid layout, animations, transitions |
| **Vanilla JavaScript (ES6+)** | Full application logic, state management, API integration               |
| **iTunes REST API**           | Free music streaming                                                    |
| **Web Audio API**             | Real-time frequency analysis for the visualizer                         |
| **Canvas 2D API**             | Visualizer rendering (ring and bar modes)                               |
| **localStorage**              | Persistent favorites, history, and settings                             |
| **Fetch API**                 | Asynchronous API requests                                               |

---

## 📁 File Structure

```
WebMusicPlayer/
├── index.html         ← Entry point
├── css/
│   ├── style.css      ← Main styles
│   └── animations.css ← Animation definitions
└── js/
    ├── app.js         ← Application core
    ├── player.js      ← Audio player logic
    ├── ui.js          ← UI rendering and events
    ├── api.js         ← API integration
    └── visualizer.js  ← Canvas audio visualization
```

---

## 🎧 API

AuricPlay uses the iTunes Search API, a legal and free music streaming API.

**Why iTunes:**

- High quality previews
- CORS-enabled — works directly from the browser
- Rich metadata: title, artist, album, artwork, genre, duration

---

## 🖥️ How to Run

**Option 1 — Direct open:**

```
Open index.html → Works directly in browser
```

**Option 2 — VS Code Live Server:**

```
Open folder in VS Code → Right-click index.html → Open with Live Server
```

**Option 3 — Any local server:**

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

> An internet connection is required to load fonts and stream music.
