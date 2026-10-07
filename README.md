<div align="center">

# VideoRedactor

### Your footage. Your timeline. Your final cut.

A powerful open source video editor for the browser and desktop.<br>
Cut clips, add captions, mix audio, and finish your video with multi-language support (**O'zbekcha**, **Русский**, **English**).

[![License: MIT](https://img.shields.io/badge/License-MIT-6366F1?style=flat-square)](LICENSE)

</div>

---

## Features

| What you want to do | What you can use |
| :--- | :--- |
| **Multi-Language UI** | Switch instantly between **O'zbekcha**, **Русский**, and **English** right from the left sidebar or settings. |
| **Get to the good part** | Trim, split, crop, ripple delete, rearrange clips, and change playback speed. |
| **Build your story** | Stack video, audio, text, and graphics on multiple tracks. Add transitions and animate with keyframes. |
| **Make every word readable** | Create and style captions, import SRT subtitles, and add animated titles. |
| **Make it sound right** | Mix music and dialogue with waveforms, volume controls, fades, EQ, compression, and audio ducking. |
| **Find your look** | Adjust color with wheels, curves, HSL controls, and LUTs. Add effects, masks, and chroma key. |
| **Fit the platform** | Work in landscape, portrait, or square, then choose export resolution, frame rate, and bitrate. |

---

## Run it locally

### Quick Start (Windows)
Simply double click `start.bat` in the project root folder.

### Manual Setup

Make sure you have [Node.js](https://nodejs.org/) (>= 18) and `pnpm` installed:

```bash
git clone https://github.com/maxmutov-nuriddin/VideoRedactor.git
cd VideoRedactor
pnpm install
pnpm dev
```

Open the local URL printed by Vite: `http://localhost:5173`.

```bash
# Build WASM modules
pnpm build:wasm

# Build for production
pnpm build

# Run tests
pnpm test
```

---

## Architecture

| Path | Purpose |
| :--- | :--- |
| [`apps/web`](apps/web) | Browser video editor with multi-language support |
| [`apps/desktop`](apps/desktop) | Desktop app and packaging |
| [`packages/core`](packages/core) | Timeline, audio, rendering, and export engines |
| [`packages/ui`](packages/ui) | UI components |
| [`packages/agent`](packages/agent) | AI editing assistant tools |

---

<div align="center">

Developed with ❤️ by [maxmutov-nuriddin](https://github.com/maxmutov-nuriddin).<br>
Released under the [MIT License](LICENSE).

</div>
