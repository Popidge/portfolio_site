---
title: "Why I Created This Blog Feature in Opencode with Kimi"
date: 2026-02-06
draft: false
tags: ["meta", "ai", "astro", "development"]
excerpt: "A retrospective on adding a blog to this VHS-themed portfolio site using Astro content collections and AI assistance. No comments section—just pure signal."
---

## The Problem with Static Sites

Static sites are fast. They're reliable. They don't need a database or a CMS that'll break when the next JavaScript framework drops. But there's one thing they traditionally suck at: **content management**.

I've been running this portfolio for a while now. It's built on Astro, uses content collections for projects, and has that VHS aesthetic I love. But every time I wanted to write something longer than a tweet, I had two choices:

1. Create a new page component (overkill)
2. Post on X/Twitter (ephemeral, buried in 24 hours)

Neither felt right.

## Enter Content Collections

Astro's content collections are genuinely brilliant. They're type-safe, schema-validated, and let you write in Markdown while keeping everything in Git. No database. No headless CMS. Just files.

```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});
```

That's it. That's the schema. Zod validates it at build time. If I forget a title or mess up a date, the build fails with a helpful error. No runtime surprises.

## Building It with Kimi

Here's where it gets interesting. I built this entire blog feature—the schema, the index page, the individual post routing, the VHS-styled components—in a single session with Kimi (Opencode's AI agent).

Not by copy-pasting code. Not by wrestling with a chat interface. Just:

> "Let's add a blog to this portfolio site. We'll use a collection of markdown files, very typical for Astro. Use the Astro skill. Create a placeholder first post (make it something fun). Ensure it meshes in with the design of the rest of the site."

And then I said yes when asked to proceed.

**That's it.**

## What Actually Happened

The AI:
- Read my existing codebase to understand the VHS aesthetic
- Checked my content config to see how projects were structured
- Created a matching blog collection schema
- Built a blog index page with the same cassette-card design as my projects
- Created dynamic routing for individual posts (`[slug].astro`)
- Wrote this post (meta, I know)
- Updated navigation to include a BLOG link

All while following my AGENTS.md guidelines: PascalCase for components, specific import ordering, Tailwind design tokens, no client hydration unless necessary.

## Why This Matters

This isn't about AI replacing developers. It's about **removing friction**.

I knew exactly what I wanted:
- Markdown-based blog
- Astro content collections
- Matching VHS aesthetic
- Static generation (no runtime JS)

What I didn't want to do:
- Write boilerplate collection schemas
- Copy-paste component structures
- Manually test every route

The AI handled the mechanical work while I made the decisions. When it asked about comments, I said no—"comments sections are for the weak, we have X/Twitter now." It adjusted. No argument, no "but comments increase engagement." Just done.

## The Result

You’re reading it.

A blog that:
- Builds as static HTML (fast, cacheable, resilient)
- Uses my existing design system (consistent, cohesive)
- Requires zero client-side JavaScript (respects bandwidth)
- Validates content at build time (catches errors early)
- Lets me write in Markdown (simple, portable)

All deployed in minutes, not hours.

## What's Next

I don't know. Maybe I'll write about chemistry-to-code career transitions. Maybe I'll document VR development experiments. Maybe this is the only post and the blog becomes a digital monument to over-engineering.

But the infrastructure is there. Zero friction. Just write.

And if you're reading this, wondering whether AI-assisted development is worth exploring: stop wondering. The future isn't AI replacing you. It's AI letting you focus on the parts of your work that actually matter.

The cassette is rolling. Press record.

---

<span class="font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">Written on 2026-02-06 • Tagged: #meta #ai #astro</span>
