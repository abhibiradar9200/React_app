# 🍽️ The Spice Table — Restaurant Website

A static, single-page restaurant website built with **React + Vite** and **plain CSS**.  
No backend, no database, no UI libraries, no Tailwind.

## Run Steps

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Loading Animations & Effect — File Locations

| #  | Animation / Effect         | File(s)                                    | How It Works                                                  |
|----|----------------------------|--------------------------------------------|---------------------------------------------------------------|
| 1  | Page preloader (0→100%)    | `src/components/Preloader.jsx` + `.css`    | `useState` + `setInterval` increments counter; progress bar width set inline |
| 2  | Spinner                    | `src/components/Preloader.jsx` + `.css`    | CSS `@keyframes spin` — rotating circle with gold border-top  |
| 3  | Skeleton loader            | `src/components/SkeletonCard.jsx` + `.css`, triggered in `Menu.jsx` | `isLoading` state + `setTimeout(2000)` + CSS shimmer gradient |
| 4  | Bouncing dots              | `src/components/Menu.jsx` + `Menu.css`     | `isSwitching` state + `setTimeout(500)` + CSS bounce keyframes |
| 5  | Button loading state       | `src/components/ReservationForm.jsx` + `.css` | `isSubmitting` state + disabled button + inline CSS spinner   |
| 6  | Fade / slide-in on load    | `src/components/Hero.jsx` + `Hero.css`     | `preloaderDone` prop → CSS class → `@keyframes fadeSlideUp`   |
| 7  | Image blur-up              | `src/components/MenuCard.jsx` + `MenuCard.css` | `imageLoaded` state + `img onLoad` + CSS `filter: blur()` transition |
| —  | **Scroll reveal** (effect) | `src/hooks/useInView.js`, used in `Menu.jsx`, `Specials.jsx`, `About.jsx` | `useRef` + `IntersectionObserver` → `.in-view` CSS class      |

---

## Folder Structure

```
src/
├── components/
│   ├── Preloader.jsx    + Preloader.css
│   ├── Navbar.jsx       + Navbar.css
│   ├── Hero.jsx         + Hero.css
│   ├── Menu.jsx         + Menu.css
│   ├── MenuCard.jsx     + MenuCard.css
│   ├── SkeletonCard.jsx + SkeletonCard.css
│   ├── Specials.jsx     + Specials.css
│   ├── About.jsx        + About.css
│   ├── ReservationForm.jsx + ReservationForm.css
│   ├── Footer.jsx       + Footer.css
│   └── BackToTop.jsx    + BackToTop.css
├── hooks/
│   └── useInView.js
├── data/
│   └── menu.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Tech Stack

- React 19 (functional components, `useState`, `useEffect`, `useRef`)
- Vite (build tool)
- Plain CSS with CSS variables
- Google Fonts (Playfair Display + Inter)

Submitted by: **Abhishek Biradar**
