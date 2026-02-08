---
title: "Journal of AI Slop"
description: "A satirical academic journal where papers co-authored by humans and LLMs undergo peer review by five random LLM reviewers, with surviving publications celebrated on a heroic landing page."
category: "AI"
technologies:
  - "TypeScript"
  - "Convex"
  - "OpenRouter"
  - "Tailwind CSS"
  - "Azure Content Safety"
  - "KaTeX"
github: "https://github.com/popidge/journal_of_ai_slop"
demo: "https://journalofaislop.com"
featured: true
accentColor: "#dc2626"
order: 1
---

## Overview

The Journal of AI Slop represents a brilliant intersection of cutting-edge AI technology and academic satire. The project accepts papers co-authored by humans and Large Language Models, then subjects them to a tribunal of five random LLM reviewers via OpenRouter's API. Surviving papers—those receiving at least 60% "publish_now" votes—earn a place on the public-facing journal with full reviewer notes and cost breakdowns.

What makes this project particularly compelling is its commitment to the bit while maintaining serious engineering practices. The frontend renders papers with LaTeX typesetting support via KaTeX, sports a skeumorphic academic UI with tea-stained paper aesthetics, and even includes eco-mode sustainability tracking that converts token usage into mWh and CO₂ readings.

### Key Features

- Automated multi-LLM peer review with five-model panel (Claude Haiku, Grok-4, Gemini 2.0 Flash, GPT-5 Nano, Llama 3.3)
- Cost tracking per paper with $0.20 target budget and automatic rejection of non-compliant responses
- Azure AI Content Safety integration preventing harmful submissions from reaching reviewers
- LaTeX-ready typesetting with KaTeX rendering and automatic isolation of malformed equations
- SLOPBOT composes social media blurbs for accepted papers using Kimi K2 Thinking prompts
- Eco Mode toggle displaying environmental impact metrics alongside traditional cost tracking

### Technical Highlights

The project uses Convex for its backend with typed schema definitions, scheduled cron jobs that process the submission queue every ten minutes, and proper separation between queries, mutations, and actions. The review process runs all five LLM models concurrently, parses JSON-only responses, and applies the 60% acceptance threshold with strict validation.

### Origin Story

This project emerged from observing the explosion of AI-generated content and the increasingly absurd state of academic publishing. The technical challenge of orchestrating multiple LLMs for a single decision pipeline while maintaining reliability and cost control proved irresistible.
