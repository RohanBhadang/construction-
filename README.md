# Akhilesh Construction — Company Website

React + Vite + TailwindCSS website banaya gaya hai Akhilesh Construction ki official firm profile document se, fully responsive (mobile, tablet, desktop) aur proper folder structure ke saath.

## 📁 Folder Structure

```
akhilesh-construction/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx           # App entry point (Router setup)
    ├── App.jsx            # Route definitions
    ├── index.css          # Tailwind directives + global styles
    ├── assets/
    │   └── images/         # Real work photos (extracted from firm profile PDF)
    ├── components/
    │   ├── Navbar.jsx         # Header with dropdown menu (desktop + mobile)
    │   ├── Footer.jsx         # Footer with address, phones, emails, map
    │   ├── Layout.jsx         # Navbar + Footer wrapper
    │   ├── HeroSlider.jsx     # Homepage auto-playing slider
    │   ├── ClientsSection.jsx # Reusable client badge grid
    │   ├── ExpertiseCard.jsx  # Small feature/point card
    │   └── ScrollToTop.jsx    # Scrolls to top / anchor on route change
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx          # Firm Profile, Nature of Business, Vision/Mission, HSE Policy
    │   ├── Projects.jsx       # Project categories + Jobs Executed + Machinery list
    │   ├── ProjectDetail.jsx  # Dynamic route: /projects/:slug
    │   ├── Gallery.jsx        # Masonry gallery of real work photos + lightbox
    │   ├── Clients.jsx
    │   └── Contact.jsx        # Contact form + address/phones/emails + map
    └── data/
        └── siteData.js     # All site content in one place — easy to edit
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Browser me `http://localhost:5173` khol lo.

Production build:

```bash
npm run build
npm run preview
```


## 📸 Photos & Logo (kaise kaam karta hai)

- **Logo**: `Navbar.jsx` me `import logo from '../assets/logo/logo.png'` hota hai aur `<img src={logo} />` me lagta hai. Vite build ke time file ko `dist/assets/logo-<hash>.png` bana deta hai. Footer me `logo-white.png` isi tarah. Favicon `public/` me hai aur `index.html` se direct `/favicon.png` link hota hai.
- **Photos**: `src/assets/photos/full` (1600px) + `thumb` (640px). Nayi photo add karne ke liye dono folders me same naam se `.jpg` rakho aur `src/data/photos.js` ki `list` me ek line add karo.
- **Clients**: `src/data/siteData.js` → `clients` (asli clients) aur `cgdSector` (India ke baaki CGD operators).

## Client logos
`src/assets/clients/` me official logo files daalo (naam = company code, e.g. `agl.png`, `iocl.png`). List `README.txt` me hai. Logo na ho to coloured code badge dikhta hai.
