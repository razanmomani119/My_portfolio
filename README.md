# Project 04 — Personal Portfolio (Capstone)
## Developer: razan Momani (رزان المومني)
- **WhatsApp**: [0776492681](https://wa.me/962776492681)
- **Email**: [r0z0nmomani19@gmail.com](mailto:r0z0nmomani19@gmail.com)
- **Directory**: `ex00/`

---

### Project Overview (نظرة عامة على المشروع)
This project is an authentic, responsive personal developer portfolio website designed, architected, and coded completely from scratch. It synthesizes the full foundational web development stack:
- **Semantic HTML5** for structured, accessible markup.
- **Modern CSS3** for layouts (CSS Grid & Flexbox), CSS Custom Properties, smooth transitions, and bidirectional (LTR/RTL) design.
- **Dynamic JavaScript ES6+** for DOM manipulation, event lifecycles, and interactive features.
- **Strict Rule Adherence**: Zero external CSS/JS frameworks (no Bootstrap, Tailwind, jQuery, or WordPress) — 100% hand-crafted code.

---

### Key Features Implemented (الميزات المنجزة)
1. **Interactive Theme Switcher (Mandatory JS Feature)**:
   - Smoothly toggles between Dark Theme and Light Theme.
   - Mutates CSS variables dynamically on the `body` element.
   - Persists user preference via `localStorage`.

2. **Multi-Language Switcher (EN / AR)**:
   - One-click toggle between English and Arabic.
   - Organizes translated strings in a clean JavaScript translation dictionary.
   - Dynamically mutates root attributes: `dir="rtl"` and `lang="ar"` for Arabic, and `dir="ltr"` and `lang="en"` for English.
   - Automatically adapts layout direction, typography, and alignment.

3. **Dynamic Profile Photo Switcher**:
   - Interactive avatar switcher (👔 Professional vs 🚀 Creative Casual).
   - Dynamically mutates `element.src` and `element.alt` with a smooth CSS transition.
   - **Zero page reload** upon switching.

4. **Instant Direct Communication**:
   - One-click WhatsApp button opening direct chat to `0776492681` (`https://wa.me/962776492681`).
   - One-click Email button opening mail client to `r0z0nmomani19@gmail.com`.
   - Interactive contact form with input validation and no page refresh.

5. **Curriculum Project Showcase (Projects 00 — 03)**:
   - **Project 00**: Unix Shell & Workspace Automation.
   - **Project 01**: Semantic Web & Accessibility Standards (a11y).
   - **Project 02**: CSS3 Layout Engine & Responsive Matrix.
   - **Project 03**: Dynamic DOM Interactions & Event Engine.

6. **All Mandatory Sections**:
   - Header / Navbar (with responsive mobile menu)
   - About Me with photo & bio
   - Skills grid
   - Project Showcase (00-03)
   - Hobbies
   - Contact Form
   - Footer

---

### Complete Event Lifecycle Explanation (دورة حياة الحدث الكاملة)
As required by Chapter IV of the subject:

```
[ 1. User Action ] ──> [ 2. Event Firing ] ──> [ 3. JS Callback ] ──> [ 4. DOM/CSS Mutation ]
```

1. **User Action (إجراء المستخدم):**
   - The user physically clicks or taps on an interactive element (e.g. clicking `#themeToggle` or `#langToggle` or `#btnAvatarCasual`).
2. **Event Firing (إطلاق الحدث في المتصفح):**
   - The browser detects hardware input, constructs a `MouseEvent('click')` object, and dispatches it through the DOM event propagation hierarchy.
3. **JavaScript Callback (استدعاء دالة المعالجة):**
   - The event listener registered via `addEventListener('click', callback)` intercepts the dispatched event and executes the handler function.
4. **DOM/CSS Mutation (تعديل الـ DOM والأنماط):**
   - The JavaScript callback executes code that mutates DOM attributes or CSS classes (`document.body.classList.toggle('light-theme')`, `image.src = ...`, or `document.documentElement.setAttribute('dir', 'rtl')`).
   - The browser's rendering engine (Blink/Gecko) re-evaluates the Render Tree, performs Recalculate Style, Layout, and Repaint smoothly.

---

### Directory Structure (هيكلية المجلد)
```
ex00/
├── assets/
│   ├── avatar-professional.svg
│   ├── avatar-casual.svg
│   ├── project-00.svg
│   ├── project-01.svg
│   ├── project-02.svg
│   └── project-03.svg
├── index.html
├── style.css
├── script.js
└── README.md
```
