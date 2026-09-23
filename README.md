# Dār al-Waḥī (دار الوحي)

> **A curated digital library dedicated to authentic Islamic translations, classical treatises, and narrations (āthār) of the Salaf aṣ-Ṣāliḥ.**

[![Live Website](https://img.shields.io/badge/Website-daralwahi.org-0E4924?style=for-the-badge)](https://daralwahi.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📖 About Dār al-Waḥī

**Dār al-Waḥī** is a digital platform and digital reader developed to present verified English translations of classical Islamic texts and āthār from the early generations (*Ahl as-Sunnah wal-Jamāʿah*). 

The platform features works and translations by:
- **Abū Mundhir ar-Ruwāndī**
- **Abū Ṭalḥah al-ʾAfġhānī**

Each work is paired with high-fidelity manuscript scans, scholarly footnotes, terminology definitions, and export tools to facilitate both serious study and reflection.

---

## ✨ Features

- **📜 Classical Library & Treatises**: 
  - *Kitāb Ṣarīḥ al-Sunnah* by Imām Ibn Jarīr aṭ-Ṭabarī (d. 310H)
  - *Kitāb al-Jannah* from *Muṣannaf Ibn Abī Shaybah* (d. 235H)
  - *Man ʿĀsha Baʿda al-Mawt* by Ibn Abī ad-Dunyā (d. 281H)

- **🌅 Athār of the Day (أثر اليوم)**:
  - Rotates daily at midnight with authentic narrations from the Companions (*Ṣaḥābah*) and early Imāms of the Tābiʿīn (*Mujāhid, Ibn Masʿūd, Al-Ḥasan al-Baṣrī, Imām Mālik, Sufyān ath-Thawrī, Al-Awzāʿī, Imām Aḥmad*).
  - Includes full vocalized Arabic text, verified English translations, and complete source citations.
  - Interactive social share card generator allowing custom styling and direct image download.

- **📖 Advanced Dual-Mode Reader**:
  - **Reading Mode**: Clean, distraction-free typography with adjustable font size, line height, Arabic script toggles, and scholarly footnotes.
  - **PDF / Manuscript Mode**: Canvas-rendered authentic manuscript scans with zoom and navigation controls.
  - Interactive terminology tooltips powered by an integrated scholarly glossary.

- **🔖 Global Reactive Bookmarking & Notes**:
  - Seamless, unlimited multi-item bookmarking synchronized across all views.
  - Personal note-taking system for recording reflections on individual chapters and passages.

- **📚 Interactive Glossary**:
  - Searchable glossary of foundational Islamic theological and creedal terms (*Sunnah, Bidʿah, Athar, Tawḥīd, Salaf, etc.*).

- **📱 Progressive Web App (PWA) & Offline Access**:
  - Fully responsive on mobile, and desktop viewports.
  - Offline-ready with cached reading materials.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Rendering**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **PWA**: [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- **Deployment**: Node.js / Express server bundle

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hissan1430/Dar-al-Wahi.git
   cd Dar-al-Wahi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Project Structure

```
├── public/                 # Static assets, PDFs, manuscript scans, icons & favicons
├── src/
│   ├── assets/            # App images and illustrations
│   ├── components/        # UI components (Header, Footer, Reader, DailyAthar, Cards)
│   ├── context/           # App state contexts (ReadingMode, etc.)
│   ├── data/              # Treatises text, Athār database, and Glossary entries
│   ├── hooks/             # Custom hooks (useBookmarks, useNotes, useGlossary, etc.)
│   ├── pages/             # Route pages (Home, Viewer, Search, Bookmarks, Notes, Glossary)
│   ├── utils/             # Card generator canvas utilities & PDF export helpers
│   ├── App.tsx            # Main application router
│   └── main.tsx           # Application entry point
├── server.ts              # Production server
├── vite.config.ts         # Vite & PWA build configuration
└── package.json
```

---

## ⚖️ License & Attribution

All classical Islamic texts and translations hosted on Dār al-Waḥī are presented for non-commercial educational and scholarly benefit. All rights for original translations belong to their respective translators.
