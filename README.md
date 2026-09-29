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

