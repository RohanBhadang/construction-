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

## 🎨 Content Source & Notes

- Saara text content (Firm Profile, Nature of Business, Mission, Vision, HSE Policy, Jobs Executed, Machinery list, Clients) directly Akhilesh Construction ki firm profile PDF se liya gaya hai.
- **Images**: Hero, gallery aur project images asli firm profile PDF me se extract kiye gaye real work photos hain (HDD machine, excavator, pipeline laying team, CNG station, terminal piping, trenching work) — `src/assets/images/` me stored hain.
- **Jaan-bujh kar exclude kiya gaya**: PAN Card, GST Certificate, ID proof, bank details, aur individual work-order/tender scanned documents — ye sensitive/private information hai jo public website par dikhana appropriate nahi hai. Agar future me "Certifications" ya "Downloads" section chahiye, unhe securely (password-protected ya sirf serious enquiries ke liye) share karna recommend karta hoon, poori public website par nahi.
- Client logos available nahi the (sirf naam), isliye name-based badges use kiye hain. Asli client logos mil jayein to `ClientsSection.jsx` aur `Clients.jsx` me easily image tags se replace kiya ja sakta hai.
- Colors: navy blue (`brand-navy`) + gold accent (`brand-gold`) — professional infrastructure/construction look, `tailwind.config.js` me define hai.
- Contact form abhi UI-level hai (backend attach nahi hai) — apna email service (Formspree, EmailJS, ya apna API) jodne ke liye `Contact.jsx` ke `handleSubmit` function me likh dena.
- Sab content ek hi jagah — `src/data/siteData.js` — me hai, isliye future me text/numbers/images update karna easy hai.
