# AGENTS.md — Portfolio Site Guidelines

Guidelines for AI coding agents working on this Astro 5.x portfolio site.

## Build Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production
pnpm preview

# Type check
pnpm astro check
```

## Tech Stack

- **Framework:** Astro 5.x (static site)
- **Styling:** Tailwind CSS 4.x with custom VHS theme
- **UI Framework:** React 19.x (hydrated components only)
- **Package Manager:** pnpm
- **TypeScript:** Strict mode

## Code Style

### Astro Components (`*.astro`)

```astro
---
// Imports: Astro → npm → local (alphabetical)
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import Footer from '../components/Footer.astro';
import BaseLayout from '../layouts/BaseLayout.astro';

// Props interface (always define)
interface Props {
  title: string;
  description?: string;
}

// Destructure with defaults
const { title, description = 'Default' } = Astro.props;

// Data fetching
const items = await getCollection('projects');
---

<BaseLayout title={title}>
  <div class="bg-[var(--bg-primary)]">{content}</div>
</BaseLayout>
```

### React Components (`*.jsx`)

```jsx
import { useState, useEffect, useRef } from 'react';

const CONSTANT_VALUE = 100;

export default function ComponentName() {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Always cleanup
    return () => {};
  }, []);

  return <div>{content}</div>;
}
```

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Component files | PascalCase | `ProjectCard.astro` |
| Utility files | camelCase | `formatDate.ts` |
| Components | PascalCase | `BaseLayout` |
| Props | camelCase | `project`, `isActive` |
| Constants | UPPER_SNAKE_CASE | `PARTICLE_COUNT` |
| CSS Variables | kebab-case | `--color-vhs-cinnabar` |

## Tailwind + Design Tokens

Use custom VHS color palette:
- `--color-vhs-cinnabar` (#F44336) — Primary accent
- `--color-vhs-shadow` (#221D23) — Dark background
- `--color-vhs-ocean` (#0094C6) — Secondary accent
- `--color-vhs-ghost` (#EDEDF4) — Light text
- `--color-vhs-gold` (#F3B61F) — Highlight

```astro
<!-- Good -->
<div class="bg-[var(--bg-primary)] text-[var(--text-primary)]">

<!-- Avoid inline styles -->
```

## Content Collections

```typescript
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['AI', 'Web Dev', 'Automation', 'Gaming', 'DevOps', 'ML']),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects: projectsCollection };
```

**Rules:**
- Use `z.coerce.date()` for dates
- Set defaults with `.default()`
- Use `.optional()` for non-required fields

## Client Hydration

```astro
<!-- Static - no JS shipped (default) -->
<Navigation />

<!-- Hydrate only when needed -->
<ParticleCanvas client:visible />

<!-- Directives: client:load (critical), client:idle (non-critical), 
     client:visible (below fold), client:media="..." (device specific) -->
```

**Rules:** Default to no hydration. Question every `client:` directive.

## Error Handling

```typescript
// Check for undefined entries
const project = await getEntry('projects', slug);
if (!project) {
  return Astro.redirect('/404');
}

// Handle async errors
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
}
```

## File Organization

```
src/
├── components/
│   ├── *.astro          # Astro components
│   └── react/
│       └── *.jsx        # React components (hydrated)
├── content/
│   ├── config.ts        # Collection schemas
│   └── projects/        # Project markdown files
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css       # Tailwind + design tokens
```

## Pre-commit Checklist

- [ ] `pnpm build` succeeds
- [ ] `pnpm astro check` passes
- [ ] No `console.log` in production code
- [ ] Images have alt text
- [ ] External links use `target="_blank" rel="noopener noreferrer"`

## Design System

**Theme:** VHS Analog aesthetic (retro tech)  
**Typography:** Inter (display), JetBrains Mono (mono), Noto Sans JP (accents)
