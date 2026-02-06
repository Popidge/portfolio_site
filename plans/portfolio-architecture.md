# Jamie Taylor Portfolio - Architecture Plan

## Overview

This portfolio will feature **5 unique design variations** at routes `/1`, `/2`, `/3`, `/4`, and `/5`, each showcasing a distinct visual style while maintaining your personal brand and showcasing your AI/web development work.

---

## Project Structure

```
src/
├── content/
│   └── projects/
│       ├── ai-chatbot.md
│       ├── web-app.md
│       ├── automation-tool.md
│       ├── data-viz.md
│       └── vr-experience.md
├── components/
│   ├── ProjectCard.astro
│   ├── Navigation.astro
│   ├── Footer.astro
│   └── react/
│       └── ParticleCanvas.jsx
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro (redirects to /1 or serves as landing)
│   ├── 1.astro (Minimalist Typography)
│   ├── 2.astro (Cyberpunk Neon)
│   ├── 3.astro (Brutalist Raw)
│   ├── 4.astro (Glassmorphism)
│   └── 5.astro (Interactive Particles)
└── styles/
    └── global.css
```

---

## Design Concepts

### Design 1: Minimalist Typography (`/1`)
**Style**: Clean, editorial, sophisticated
- **Background**: Off-white / cream (#FAF9F6)
- **Typography**: Large serif headings (Playfair Display), clean sans-serif body (Inter)
- **Layout**: Single column, heavy use of whitespace
- **Accent**: Deep charcoal (#1A1A1A)
- **Animations**: Subtle fade-ins, smooth scrolling
- **Vibe**: Professional, refined, editorial

### Design 2: Cyberpunk Neon (`/2`)
**Style**: Futuristic, vibrant, electric
- **Background**: Dark (#0D0D0D) with grid overlay
- **Typography**: Monospace headers, futuristic sans-serif
- **Colors**: Neon pink (#FF00FF), cyan (#00FFFF), electric purple
- **Effects**: Glow effects, scanlines, glitch animations
- **Vibe**: AI-native, tech-forward, bold

### Design 3: Brutalist Raw (`/3`)
**Style**: Raw, unpolished, bold
- **Background**: Stark white or concrete gray
- **Typography**: Bold, oversized, system fonts
- **Layout**: Asymmetric grid, visible borders
- **Colors**: Black, white, raw accent (safety orange or yellow)
- **Effects**: Marquee text, raw hover states, visible layout lines
- **Vibe**: Unapologetic, technical, direct

### Design 4: Glassmorphism (`/4`)
**Style**: Modern, ethereal, sophisticated
- **Background**: Abstract gradient or mesh gradients
- **Elements**: Frosted glass cards with blur effects
- **Typography**: Modern sans-serif with good hierarchy
- **Colors**: Soft pastels, gradients, semi-transparent whites
- **Effects**: Background blur, subtle shadows, floating elements
- **Vibe**: Contemporary, dreamy, polished

### Design 5: Interactive Particles (`/5`)
**Style**: Dynamic, living, engaging
- **Background**: Dark with animated particle system
- **Typography**: Clean sans-serif, floating text effects
- **Interactive**: Particles respond to mouse movement
- **Colors**: Multi-color particles with glow effects
- **Effects**: Connecting lines, floating animations, smooth transitions
- **Vibe**: AI-powered, alive, cutting-edge

---

## Content Collection Schema

### Project Markdown Frontmatter

```yaml
---
title: "Project Name"
description: "Brief description of the project"
category: "AI" | "Web Dev" | "Automation" | "Data Viz"
technologies:
  - "React"
  - "Python"
  - "OpenAI API"
github: "https://github.com/..."
demo: "https://..."
image: "/images/project-thumbnail.jpg"
featured: true
accentColor: "#FF6B6B"
---
```

### Sample Projects (Placeholders)

1. **AI Chat Assistant** - LLM-powered conversational agent
2. **Smart Task Automator** - AI-driven workflow automation
3. **Data Visualization Dashboard** - Interactive analytics platform
4. **Web Scraper Pro** - Intelligent data extraction tool
5. **VR Experience** - Immersive virtual reality application

---

## Components

### ProjectCard.astro
Unified component that adapts to each design style via props:
- `design`: 1 | 2 | 3 | 4 | 5
- `project`: Project data object
- Renders differently based on design parameter

### Navigation.astro
- Simple links to each design: `/1`, `/2`, `/3`, `/4`, `/5`
- Design-appropriate styling per page

### Footer.astro
- Social links (GitHub, LinkedIn, Twitter)
- Location (Loughborough, UK)
- Copyright and signature

---

## Technical Approach

### Astro Features
- **Content Collections** for type-safe project data
- **Static Site Generation** for fast performance
- **View Transitions** for smooth navigation
- **Islands Architecture** for React particle component

### Tailwind v4
- CSS-first configuration
- Custom CSS variables for design tokens
- Responsive utilities for mobile-first design

### React Islands
- `ParticleCanvas.jsx` on Design 5 (interactive particles)
- Hydrated only when visible (`client:visible`)

---

## Design Differentiation

| Aspect | /1 Minimalist | /2 Cyberpunk | /3 Brutalist | /4 Glassmorphism | /5 Particles |
|--------|---------------|--------------|--------------|------------------|--------------|
| Primary Font | Serif | Monospace | System Bold | Sans Modern | Sans |
| Background | Cream | Dark Grid | White/Gray | Gradient | Dark |
| Cards | Simple border | Neon glow | Raw borders | Glass blur | Floating |
| Buttons | Outline | Glow | Blocky | Soft | Gradient |
| Animations | Subtle fade | Glitch/shock | Marquee | Smooth float | Particles |
| Icons | Outline | Pixel/Glow | None | Soft | Glowing |

---

## Implementation Order

1. Set up content collections and project data
2. Create ProjectCard component
3. Build Design 1 (Minimalist) - foundation
4. Build Design 2 (Cyberpunk) - styling variations
5. Build Design 3 (Brutalist) - layout variations
6. Build Design 4 (Glassmorphism) - CSS effects
7. Build Design 5 (Particles) - React island
8. Add navigation and footer
9. Polish animations and accessibility
10. Test and refine

---

## Ready to Proceed?

This plan creates a portfolio that:
- ✅ Showcases 5 distinctly different visual approaches
- ✅ Highlights your AI-native, tech-forward identity
- ✅ Uses Astro + Tailwind v4 as specified
- ✅ Features React for interactive elements
- ✅ Maintains consistent branding across variations
- ✅ Is fully responsive and accessible

Would you like me to proceed with this plan, or would you like to adjust any of the design concepts, color schemes, or project details?
