# Vedant Purkar 
 
 Personal portfolio website built with React + Vite, styled with Tailwind CSS and animated with Framer Motion. It includes a 3D hero (Spline), a Projects section with external project links, Skills + Achievements sliders, and a Contact form powered by EmailJS.
 
 ## Live Sections
 - **Hero**: 3D Spline scene (lazy-loaded)
 - **Skills**: scrolling skills row + two achievement rows (top/bottom)
 - **About**
 - **Services**
 - **Projects**: project cards with “View Project” button + image gallery
 - **Contact**: EmailJS form
 - **Footer**: social + contact links
 
 ## Tech Stack
 - **React 19**
 - **Vite**
 - **Tailwind CSS (v4)**
 - **Framer Motion**
 - **Spline** (`@splinetool/react-spline`)
 - **EmailJS** (`@emailjs/browser`)
 - **React Icons / Lucide**
 - **Cloudinary** (image delivery via URL transformations)
 
 ## Performance Notes
 - **Spline is lazy-loaded** to reduce initial bundle size.
 - Images are loaded with `loading="lazy"` and `decoding="async"`.
 - Cloudinary delivery is supported using the `cld:` prefix + URL transformations (`f_auto,q_auto,w_...`).
 
 ## Getting Started
 
 ### Install
 ```bash
 npm install
 ```
 
 ### Run locally
 ```bash
 npm run dev
 ```
 
 ### Build
 ```bash
 npm run build
 ```
 
 ### Preview production build
 ```bash
 npm run preview
 ```
 
 ## Customization
 
 ### Projects
 Edit:
 - `src/components/Projects.jsx`
 
 Update `projectList`:
 - `url`: external link opened by the “View Project” button
 - `images`: project screenshots
 
 #### Using Cloudinary images in Projects
 This project supports Cloudinary images by using:
 
 ```js
 images: [
   "cld:<public_id>",
   "cld:<public_id>"
 ]
 ```
 
 Example:
 ```js
 images: [
   "cld:Screenshot_2026-01-06_at_18.54.33_kxfd1n"
 ]
 ```
 
 The app converts `cld:<public_id>` into an optimized Cloudinary URL using:
 - `f_auto` (WebP/AVIF when supported)
 - `q_auto` (automatic compression)
 - `w_...` (responsive width)
 
 Cloud name currently used in code: `dh4xushgf`.
 
 ### Skills & Achievements
 Edit:
 - `src/components/Skills.jsx`
 
 Achievements are split into two different arrays:
 - `ACHIEVEMENTS_TOP`
 - `ACHIEVEMENTS_BOTTOM`
 
 Each achievement uses:
 - `img`: supports both normal URLs and `cld:<public_id>`
 - `title`, `desc`
 
 ### Footer Links
 Edit:
 - `src/components/Footer.jsx`
 
 Update the `socialLinks` array for LinkedIn/GitHub/Instagram.
 
 ## Contact Form (EmailJS)
 The contact form is implemented in:
 - `src/components/Contact.jsx`
 
 It currently uses EmailJS IDs/keys in code.
 For production, it’s recommended to move these values to environment variables (Vite uses `VITE_...` prefixed env vars) and reference them via `import.meta.env`.
 
 ## Deployment
 This is a standard Vite app, so you can deploy it to:
 - **Vercel**
 - **Netlify**
 - **Cloudflare Pages**
 - **GitHub Pages** (with a Vite base path configuration)
 
 Build command:
 ```bash
 npm run build
 ```
 Output directory:
 - `dist/`
