# Sufian Ahmed - Front-End Developer Portfolio

Welcome to the source code of my personal portfolio website! This project is a modern, highly interactive, and performant web application built to showcase my skills, experience, and projects as a Front-End Developer.

## 🚀 Live Demo

[View Live Portfolio](#) *(Replace with actual deployment link)*

## 🛠️ Tech Stack & Technologies Used

This project leverages the latest and greatest in the modern web development ecosystem:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (via `motion/react`)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** `next/font/google` (Inter & Space Grotesk)

## ✨ Key Features & Highlights

1. **Immersive Hero Section:**
   - Dynamic, animated entrance using Framer Motion.
   - Elegant typography pairing (Space Grotesk for display, Inter for body).
   - "Available for work" pulsing indicator.

2. **Horizontal Scroll Carousel (Selected Work):**
   - A custom-built horizontal scrolling experience tied to vertical scroll progress.
   - Displays 10 featured projects.
   - **"Learn More" Expansion:** Initially shows 5 projects. Clicking "Learn More" dynamically expands the scrollable area to reveal the remaining 5 projects without layout jumping or jarring scroll resets.
   - Hover effects with gradient overlays and staggered text reveals.

3. **Interactive "About Me" Section:**
   - Bento-box style grid layout.
   - Hover-responsive cards that scale slightly and reveal subtle borders.
   - Skill tags with hover animations.

4. **Experience Timeline:**
   - A clean, vertical timeline showcasing 3 years of professional experience.
   - Animated entry as the user scrolls down the page.

5. **Smooth Scrolling & Progress Bar:**
   - Custom smooth scrolling implementation using Lenis (via `@studio-freight/react-lenis`).
   - A fixed top progress bar that visually indicates scroll depth across the page.

6. **Custom Cursor:**
   - A custom, animated cursor that follows the mouse and expands when hovering over interactive elements (links, buttons).

7. **Responsive Design:**
   - Fully optimized for mobile, tablet, and desktop devices.
   - Touch-friendly interactions on mobile devices.

## 📂 Project Structure

```text
├── app/
│   ├── globals.css        # Global Tailwind styles and custom utilities
│   ├── layout.tsx         # Root layout, font configuration, and global providers
│   └── page.tsx           # Main landing page assembling all sections
├── components/
│   ├── CustomCursor.tsx           # Animated mouse cursor component
│   ├── Hero.tsx                   # Landing hero section
│   ├── HorizontalScrollCarousel.tsx # Project showcase carousel
│   ├── ProgressBar.tsx            # Scroll progress indicator
│   └── SmoothScroll.tsx           # Lenis smooth scrolling wrapper
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── tailwind.config.ts     # Tailwind configuration (if applicable)
```

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Testing & Verification

- **Linting:** The project is fully linted using `npm run lint` to ensure code quality and consistency.
- **Build:** Verified to compile successfully via `npm run build` with zero TypeScript or Next.js build errors.
- **Performance:** Optimized images using `next/image` and minimized client-side JavaScript where possible.

## 📬 Contact

- **Email:** sofyanahmed101@gmail.com
- **LinkedIn:** [linkedin.com/in/sufianahmed](#)
- **GitHub:** [github.com/sufianahmed](#)

---
*Designed and built with ❤️ by Sufian Ahmed.*
