---
title: "SmashADay"
description: "A daily word puzzle game challenging players to identify portmanteau words ('smashes') formed from two source words, featuring fuzzy matching, archived challenges, and streak tracking."
category: "Gaming"
technologies:
  - "React"
  - "Vite"
  - "Tailwind CSS"
  - "daisyUI"
  - "Convex"
  - "Clerk"
  - "fastest-levenshtein"
github: "https://github.com/popidge/smashaday"
demo: "https://smashaday.app"
featured: false
accentColor: "#059669"
order: 3
---

## Overview

SmashADay takes inspiration from puzzle games like Answer Smash to create a daily challenge format around identifying portmanteau words. Each day presents a fresh 10-question challenge where players must figure out what two source words combine to form a smash word using provided clues. The game supports fuzzy matching via Levenshtein distance, allowing minor spelling variations to be accepted while maintaining puzzle integrity.

The project implements a complete backend-frontend architecture with Convex handling database operations, scheduled jobs, and LLM-assisted word generation. Clerk provides authentication for saving scores and accessing the archive of past challenges.

### Key Features

- Daily 10-question challenges with automatic rotation
- Fuzzy matching accepting minor spelling variants via Levenshtein distance
- Per-user score saving with Clerk authentication
- Archive page with cursor-based pagination for browsing past challenges
- Streak tracking for consecutive calendar days of playing the current challenge
- LLM-assisted word and clue generation managed by Convex actions
- Responsive UI with Tailwind and daisyUI components

### Technical Highlights

The backend leverages Convex's typed schema with tables for smashes, daily challenges, users, word databases, scores, and streaks. Cron jobs manage daily challenge generation and LLM-based word creation using OpenRouter. The frontend uses Vite for fast development and builds, with HTMX-inspired patterns for dynamic updates.

### Origin Story

Inspired by word puzzle games like Answer Smash, this project was created to build a daily engagement habit around portmanteau identification. The technical challenge of generating fresh word pairs and clues daily while providing a polished user experience drove the architecture decisions.
