# Personal Info

Jamie Taylor
Email: j.taylor.1990@gmail.com
Github: https://github.com/popidge
Twitter/X: @TweetsByJT
Linkedin: https://www.linkedin.com/in/jamie-taylor-52914950/


# Jamie Taylor's GitHub Project Portfolio

These project summaries showcase a diverse range of work from experimental AI applications to game development and developer tools. Each project demonstrates practical skills across multiple technology stacks.

---

## 1. Journal of AI Slop

**Description:** A satirical academic journal where papers co-authored by humans and LLMs undergo peer review by five random LLM reviewers, with surviving publications celebrated on a heroic landing page.

**Category:** AI & Satire

**Technologies:** ["TypeScript", "Convex", "OpenRouter", "Tailwind CSS", "Azure Content Safety", "KaTeX"]

**Github:** https://github.com/popidge/journal_of_ai_slop

**Website:** https://journalofaislop.com

**Featured:** true

**AccentColor:** #dc2626

**Order:** 1

---

## Overview

The Journal of AI Slop represents a brilliant intersection of cutting-edge AI technology and academic satire. The project accepts papers co-authored by humans and Large Language Models, then subjects them to a tribunal of five random LLM reviewers via OpenRouter's API. Surviving papers—those receiving at least 60% "publish_now" votes—earn a place on the public-facing journal with full reviewer notes and cost breakdowns. The project tackles the absurdity of modern academic publishing while actually implementing a sophisticated multi-agent review pipeline.

What makes this project particularly compelling is its commitment to the bit while maintaining serious engineering practices. The frontend renders papers with LaTeX typesetting support via KaTeX, sports a skeumorphic academic UI with tea-stained paper aesthetics, and even includes eco-mode sustainability tracking that converts token usage into mWh and CO₂ readings. The backend leverages Convex for serverless functions, scheduled crons for the review pipeline, and Azure Content Safety for automated moderation that blocks problematic submissions before they reach reviewers.

### Key Features

- Automated multi-LLM peer review with five-model panel (Claude Haiku, Grok-4, Gemini 2.0 Flash, GPT-5 Nano, Llama 3.3)
- Cost tracking per paper with $0.20 target budget and automatic rejection of non-compliant responses
- Azure AI Content Safety integration preventing harmful submissions from reaching reviewers
- LaTeX-ready typesetting with KaTeX rendering and automatic isolation of malformed equations
- SLOPBOT composes social media blurbs for accepted papers using Kimi K2 Thinking prompts
- Eco Mode toggle displaying environmental impact metrics alongside traditional cost tracking

### Technical Highlights

The project uses Convex for its backend with typed schema definitions, scheduled cron jobs that process the submission queue every ten minutes, and proper separation between queries, mutations, and actions. The review process runs all five LLM models concurrently, parses JSON-only responses, and applies the 60% acceptance threshold with strict validation. Environment variables manage API keys for OpenRouter, Azure Content Safety, and Resend for email notifications. The frontend employs Tailwind with custom serif-paper styling and gradient backgrounds, achieving a distinctive aesthetic that matches the satirical tone.

### Origin Story

This project emerged from observing the explosion of AI-generated content and the increasingly absurd state of academic publishing. The creator wanted to build a functioning system that could accept, review, and publish AI-human co-authored papers while satirizing the earnestness of the peer review process. The technical challenge of orchestrating multiple LLMs for a single decision pipeline while maintaining reliability and cost control proved irresistible.

### Ethical Considerations / Notes

The project includes robust content moderation to prevent misuse, treating "Publish After Edits" decisions as rejections for the MVP to emphasize the sting of failure. Cost controls ensure the system won't accidentally generate expensive outputs. The moderation system fails closed—if Azure returns an error, papers are blocked rather than risking harmful content slipping through.

---

## 2. Idle Vibe Code Quest

**Description:** A degenerate idle clicker game about vibe coding your way to a billion-dollar market cap, featuring automated upgrades, tech debt mechanics, offline progress, and prestige systems.

**Category:** Gaming

**Technologies:** ["Svelte 5", "TypeScript", "Vite", "pnpm", "CSS Grid"]

**Github:** https://github.com/popidge/idlevibecodequest

**Website:** https://idlevibecode.quest

**Featured:** true

**AccentColor:** #8b5cf6

**Order:** 2

---

## Overview

Idle Vibe Code Quest transforms the modern software development experience into an addictive incremental game. Players start with nothing but a keyboard and AI assistance, clicking to generate lines of code while shipping projects to earn money and credibility. The game satirizes startup culture through mechanics like accumulating tech debt that slows progress, hiring increasingly expensive help (interns, juniors, seniors, eventually AI), and prestige resetting when players hit walls. Random events inject chaos reminiscent of actual startup life.

The game demonstrates Svelte 5's new runes API for reactive state management, with a fully responsive mobile-first design and both dark and light themes. It's positioned as a meme game where TypeScript safety meets degenerate clicker mechanics, complete with offline gains so players can return later to accumulated progress. The balance tuning simulator helps ensure progression feels satisfying without being either too grindy or trivially easy.

### Key Features

- Click-based line generation with upgrades for more code per click (Vibe Code, Delegation, Tech Tree)
- Project shipping system earning money and cred with new projects unlocking as credibility grows
- Tech debt accumulation mechanic that actively slows progress as the player scales
- Prestige system with permanent meta-upgrades when hitting walls
- Offline progress gains when returning after time away
- Random events bringing chaos to the startup experience
- Dark/light themes and full mobile responsiveness

### Technical Highlights

Built on Svelte 5 with runes for state management, the project uses TypeScript throughout with proper type safety (no `any` allowed unless intentionally funny). Vite provides speedy builds, and pnpm handles package management efficiently. The architecture separates concerns between game logic in `src/lib/game/`, stores in `src/lib/stores/`, and components in `src/lib/components/`. The game state uses a tuning simulator to balance progression rates and employs proper state persistence for offline gains.

### Origin Story

The creator wanted to capture the absurdity of modern "vibe coding" culture—shipping products with AI assistance while pretending everything is fine—into a game format. The satirical elements (tech debt, hiring help, prestige resets) directly mock startup culture tropes. It serves as both entertainment and commentary on the current state of software development.

### Ethical Considerations / Notes

The project is designed as a hobby game for entertainment. The satirical nature means some mechanics intentionally don't reflect reality (like overnight success through prestige). The codebase explicitly encourages no `any` types, maintaining TypeScript discipline even in a meme project.

---

## 3. SmashADay

**Description:** A daily word puzzle game challenging players to identify portmanteau words ("smashes") formed from two source words, featuring fuzzy matching, archived challenges, and streak tracking.

**Category:** Gaming & Wordplay

**Technologies:** ["React", "Vite", "Tailwind CSS", "daisyUI", "Convex", "Clerk", "fastest-levenshtein"]

**Github:** https://github.com/popidge/smashaday

**Website:** https://smashaday.app

**Featured:** false

**AccentColor:** #059669

**Order:** 3

---

## Overview

SmashADay takes inspiration from puzzle games like Answer Smash to create a daily challenge format around identifying portmanteau words. Each day presents a fresh 10-question challenge where players must figure out what two source words combine to form a smash word using provided clues. The game supports fuzzy matching via Levenshtein distance, allowing minor spelling variations to be accepted while maintaining puzzle integrity.

The project implements a complete backend-frontend architecture with Convex handling database operations, scheduled jobs, and LLM-assisted word generation. Clerk provides authentication for saving scores and accessing the archive of past challenges. The frontend uses React with Tailwind and daisyUI for a clean, responsive interface. Streak tracking rewards consecutive daily play while archive mode lets logged-in users replay historical challenges.

### Key Features

- Daily 10-question challenges with automatic rotation
- Fuzzy matching accepting minor spelling variants via Levenshtein distance
- Per-user score saving with Clerk authentication
- Archive page with cursor-based pagination for browsing past challenges
- Streak tracking for consecutive calendar days of playing the current challenge
- LLM-assisted word and clue generation managed by Convex actions
- Responsive UI with Tailwind and daisyUI components

### Technical Highlights

The backend leverages Convex's typed schema with tables for smashes, daily challenges, users, word databases, scores, and streaks. Cron jobs manage daily challenge generation and LLM-based word creation using OpenRouter. The frontend uses Vite for fast development and builds, with HTMX-inspired patterns for dynamic updates. Client-side hash routing handles navigation between game, archive, and stats views without full page reloads.

### Origin Story

Inspired by word puzzle games like Answer Smash, this project was created to build a daily engagement habit around portmanteau identification. The technical challenge of generating fresh word pairs and clues daily while providing a polished user experience drove the architecture decisions.

### Ethical Considerations / Notes

Archive replays explicitly do not count toward streaks, enforcing a strict daily engagement model. The LLM-based word generation is configurable, allowing the creator to adjust quality/cost tradeoffs. All data remains in Convex with Clerk handling authentication securely.

---

## 4. AI Traitors V2

**Description:** A multi-agent AI social deduction experiment where players create agents with personalities who form memories, identify traitors, and navigate complex social dynamics.

**Category:** AI & Gaming

**Technologies:** ["FastAPI", "HTMX", "Tailwind CSS", "OpenRouter", "uv", "Pydantic V2"]

**Github:** https://github.com/popidge/ai-traitors-v2

**Featured:** false

**AccentColor:** #7c3aed

**Order:** 4

---

## Overview

AI Traitors V2 brings the social deduction format of TV's "The Traitors" into the world of multi-agent AI systems. Players act as producers, creating AI agents with detailed personas including Big Five personality traits, communication styles, and demographics. These agents are then assigned roles—Faithful or Traitor—and must navigate conversations while forming short-term memories of interactions. The experiment explores how AI agents with different personalities form trust networks, remember past interactions, and attempt to identify who's working against the group.

The project implements a complete agent architecture with persona management, memory systems, and conversation orchestration. Agents can engage in private 1-on-1 conversations or round-table broadcasts, with the system tracking what each agent remembers. Short-term memory updates automatically after each conversation turn, enabling agents to reference previous discussions while making deductions about who the traitors might be.

### Key Features

- Agent Persona System with Big Five personality traits, communication styles, and demographics
- Random traitor role assignment among created agents
- Short-term memory system with automatic updates after conversations
- Conversation orchestration supporting private and broadcast modes
- Memory inspection UI for viewing agent recollections
- Real-time streaming of conversation turns
- Session management with create, save, load, and delete functionality
- JSON-based storage for sessions, agents, conversations, and memories

### Technical Highlights

The backend uses FastAPI with async Python for handling concurrent conversations, integrated with OpenRouter API for LLM responses. The frontend leverages HTMX for dynamic updates without complex JavaScript frameworks, paired with Tailwind CSS for styling. Pydantic V2 provides strict type validation throughout. The architecture separates concerns into models, storage, agents, conversation orchestration, and API routes with clear boundaries.

### Origin Story

This project emerged from curiosity about how AI agents with different personalities would interact in social deduction scenarios. The challenge of implementing memory across multiple conversations while preventing information leakage between contexts drove the design. Phase 1 focuses on core foundation with short-term memory; Phase 2 will introduce episodic and semantic memory layers.

### Ethical Considerations / Notes

The project notes a known issue with context leakage—agents currently see all alive players regardless of who's actually present in conversations. Phase 2 will address this with participant filtering. The social deduction format explores AI behavior patterns without real-world harmful applications.

---

## 5. Web Share API Tester

**Description:** An interactive developer tool for testing Web Share API implementations with realistic platform mockups for iOS, Android, macOS, and Windows, plus live interception capabilities.

**Category:** Developer Tools

**Technologies:** ["JavaScript", "Preact", "Vite", "Express", "WebSocket", "devices.css"]

**Github:** https://github.com/popidge/web-share-tester

**Featured:** false

**AccentColor:** #3b82f6

**Order:** 5

---

## Overview

Web Share API Tester solves a common pain point for web developers: testing share functionality without deploying to actual devices or manually triggering the native OS share dialog. The tool provides two modes—manual testing with realistic platform mockups, and live interception testing that captures `navigator.share()` calls from your development app.

In manual testing mode, developers can explore share behavior across iOS, Android, macOS, and Windows platforms with authentic UI styling for share targets like Messages, Mail, Twitter, and WhatsApp. The live interception mode uses a client-side shim script that replaces `navigator.share()` with an intercepting version, sending share data to the testing interface via HTTP while optionally triggering the original OS dialog. This enables rapid iteration on share flows without constant device switching.

### Key Features

- Platform mockups with authentic UI for iOS, Android, macOS, and Windows
- Share target apps including Messages, Mail, Twitter, and WhatsApp
- Manual testing mode for exploring share flows
- Live interception mode with WebSocket communication
- Client-side shim script for capturing `navigator.share()` calls
- Runtime configuration via browser console
- Glassmorphism UI with dark/light theme support

### Technical Highlights

The testing interface uses Preact for a lightweight component-based architecture with Vite for fast builds. A custom Express server with WebSocket support handles real-time communication between the shim and the tester interface. The shim script performs client-side API replacement, validating share data according to Web Share API specifications. A Vite plugin enables seamless integration with existing development workflows.

### Origin Story

The creator needed a way to rapidly test Web Share API implementations during development without deploying to mobile devices or manually triggering share dialogs. Existing solutions were either too basic or too complex, leading to the creation of a purpose-built testing tool with both visual mockups and functional interception capabilities.

### Ethical Considerations / Notes

The shim script requires manual integration—it's not automatic, preventing unintended capture of shares. The tool is explicitly designed for development only and should never be included in production builds. Runtime configuration allows developers to toggle between tester-only and tester-plus-OS share modes.

---

## 6. Pauline

**Description:** An AI-powered job search coach with persistent memory that chats naturally about your job search while handling applications, follow-ups, and tracking.

**Category:** Productivity & AI

**Technologies:** ["FastAPI", "LangGraph", "React", "Vite", "OpenRouter", "SQLite", "shadcn/ui"]

**Github:** https://github.com/popidge/pauline

**Featured:** false

**AccentColor:** #ec4899

**Order:** 6

---

## Overview

Pauline (Personal AI job search coach with memory) transforms the job search process into a conversational experience. Users can chat naturally about their job search goals, and Pauline handles the rest—tracking applications, preparing cover letters, following up on leads, and remembering preferences across sessions. The system uses LangGraph for agent logic with persistent memory, ensuring continuity between conversations.

The project implements a complete full-stack architecture with a Python FastAPI backend handling LLM orchestration through LangChain and LangGraph, while a React frontend provides a polished chat interface. Multiple personality options range from British sarcastic to cheerleader, drill sergeant, or zen master modes. Thread management enables parallel job search tracks, and streaming responses provide real-time AI feedback through Server-Sent Events.

### Key Features

- Conversational interface for natural job search discussions
- Persistent memory across sessions for preferences, skills, and salary expectations
- Multiple personality modes (British sarcastic, cheerleader, drill sergeant, zen master)
- Thread management with full conversation history
- Streaming responses via SSE for real-time interaction
- SQLite for thread persistence, JSON for semantic memory backup
- Configurable primary and fallback models via OpenRouter

### Technical Highlights

The backend uses Python 3.11+ with FastAPI for async request handling, integrated with LangChain and LangGraph for structured agent workflows. OpenRouter provides access to multiple LLMs with automatic fallback between models. SQLite stores checkpoint data for thread persistence, while JSON provides semantic memory backup. The frontend uses React 19 with TypeScript, Vite for builds, and shadcn/ui for polished components.

### Origin Story

Job searching often involves repetitive conversations and tracking across multiple platforms. Pauline was built to consolidate this process into a single conversational interface that actually remembers what you've discussed. The multiple personality modes emerged from recognizing that different users need different motivational styles.

### Ethical Considerations / Notes

All data remains local through gitignored SQLite and JSON files. The system provides suggestions and drafts rather than automating applications entirely, maintaining human agency in the job search process.

---

## 7. CCG Joker Engine

**Description:** A PyTorch-based neural network training and evaluation system for the Triplecargo card game, implementing AlphaZero-style self-play, policy/value training, and promotion gating.

**Category:** Machine Learning & Gaming

**Technologies:** ["Python", "PyTorch", "uv", "Typer", "UMAP", "HDBSCAN"]

**Github:** https://github.com/popidge/ccg-joker-engine

**Featured:** false

**AccentColor:** #f59e0b

**Order:** 7

---

## Overview

The CCG Joker Engine serves as the machine learning companion to the Rust-based Triplecargo solver, providing a complete pipeline for training neural networks to play the Triplecargo collectible card game. The system loads JSONL training data exported from Triplecargo, encodes board states and hands into tensors, and trains policy/value networks using supervised learning, self-play generation, or reinforcement learning approaches.

This represents serious ML engineering with production-grade practices. The supervised training pipeline supports mixed loss functions handling both one-hot labels and MCTS distributions, while self-play generation implements AlphaZero-lite mechanics with Dirichlet noise exploration and temperature scheduling. The promotion gating system compares candidate models against baselines through head-to-head play, computing Elo deltas and determining whether models meet quality thresholds for deployment.

### Key Features

- Supervised training on JSONL data from Triplecargo exports
- Self-play generation with MCTS, Dirichlet exploration, and temperature scheduling
- Reinforcement learning fine-tuning from self-play data
- Promotion gating with head-to-head model comparison
- Elo-based evaluation metrics with threshold filtering
- GPU/CPU support with automatic mixed precision for CUDA
- CPU parallelism across multiple workers

### Technical Highlights

The project uses uv for Python package management with a pinned Python 3.12 environment. PyTorch provides the neural network framework with AMP support for GPU training. Typer exposes CLI commands for training, evaluation, self-play, and gating workflows. The MCTS implementation uses threaded workers for parallel game generation, with deterministic mirror play to mitigate start-side bias. Checkpoint loading supports model comparison workflows.

### Origin Story

The project emerged from competitive analysis of the Triplecargo card game, where the creator wanted to apply AlphaZero-style self-learning techniques. The Rust solver handles game state evaluation while Python provides the ML training infrastructure, combining high-performance game logic with flexible neural network training.

### Ethical Considerations / Notes

The system is designed for game AI research and competitive analysis. Self-play generation includes bias mitigation through deterministic mirror play and alternating starting sides. CPU parallelism requires careful thread tuning to avoid oversubscription.

---

## 8. GitHub Activity Cluster

**Description:** A tool analyzing GitHub exports to discover actual technology interests by parsing code imports, dependencies, and patterns, then clustering repositories by tech similarity.

**Category:** Developer Tools & Data Analysis

**Technologies:** ["Python", "sentence-transformers", "UMAP", "HDBSCAN", "GitPython"]

**Github:** https://github.com/popidge/github-activity-cluster

**Featured:** false

**AccentColor:** #10b981

**Order:** 8

---

## Overview

GitHub Activity Cluster addresses a fundamental problem with GitHub's native signals: stars and forks are weak indicators of actual technology usage. Someone might star a repository to "read later" or fork to submit a one-line PR. The real signal lies in code itself—what libraries you import, what languages you write, what dependencies you depend on. This tool performs deep code indexing on your GitHub archive export to surface your actual tech clusters.

The pipeline parses bare git repositories from GitHub exports, extracts imports from 10+ languages (Python, JS/TS, Rust, Go, Java, Ruby, C/C++, etc.), reads dependency manifests, embeds code context using sentence-transformers, and clusters repositories by similarity using UMAP dimensionality reduction and HDBSCAN density-based clustering. The output reveals tech interest clusters with weighted scores, top imports, languages, manifest dependencies, and representative repositories.

### Key Features

- Deep code indexing parsing imports from 10+ programming languages
- Dependency manifest extraction (package.json, requirements.txt, Cargo.toml, go.mod)
- Sentence transformer embedding for semantic code representation
- UMAP + HDBSCAN clustering by tech similarity
- 2D visualization of repository clusters
- Weighted interest scores based on code richness

### Technical Highlights

The architecture separates concerns between GitHub export parsing, code indexing, text representation building, and clustering. Code indexing uses `git ls-tree` and `git show` to extract content from bare repositories without full checkouts. Text representation weights imports 3x and dependencies 4x above base text for stronger tech signals. UMAP reduces to 5D for clustering, then projects to 2D for visualization. HDBSCAN handles noise detection automatically.

### Origin Story

The creator wanted to understand what technologies they were actually working with, not just what they bookmarked or forked. GitHub's native analytics don't differentiate between "interested in" and "actually using," leading to this deep code analysis approach for genuine technology interest discovery.

### Ethical Considerations / Notes

The tool works only with GitHub exports (bare repositories), not with checked-out code. Performance considerations limit scans to 100 files per repository by default. Import parsing uses regex patterns that may miss dynamic imports. The embedding model prioritizes speed over maximum quality.

---

## 9. Crabwalk

**Description:** A real-time companion monitor for OpenClaw agents, visualizing agent sessions and action chains across WhatsApp, Telegram, Discord, and Slack in a live node graph.

**Category:** DevOps & Monitoring

**Technologies:** ["ReactFlow", "Framer Motion", "tRPC", "TanStack DB", "WebSocket"]

**Github:** https://github.com/popidge/crabwalk

**Featured:** false

**AccentColor:** #ef4444

**Order:** 9

---

## Overview

Crabwalk provides visibility into OpenClaw (Clawdbot) agent activities across multiple messaging platforms simultaneously. The monitoring interface displays a live ReactFlow node graph of agent sessions, showing thinking states, tool calls, and response chains as they happen. Operators can filter by platform, search by recipient, and expand individual nodes to inspect tool arguments and payloads.

The system connects to the OpenClaw gateway via WebSocket for real-time streaming, enabling immediate observation of agent behavior. Multi-platform support aggregates activity from WhatsApp, Telegram, Discord, and Slack into a unified view. The TanStack Start framework with tRPC provides type-safe communication between frontend and backend, while Framer Motion handles smooth animations for node transitions and expansions.

### Key Features

- Live activity graph visualization using ReactFlow
- Real-time WebSocket connection to OpenClaw gateway
- Multi-platform monitoring across WhatsApp, Telegram, Discord, Slack
- Session filtering by platform and search by recipient
- Node expansion revealing tool arguments and payloads
- Smooth animations via Framer Motion

### Technical Highlights

The frontend uses ReactFlow for interactive node graph rendering with Framer Motion animations. TanStack Start with tRPC provides type-safe API communication, and TanStack DB handles data management. Docker deployment enables portable installation with proper network configuration for connecting to the OpenClaw gateway. Environment variables control API token and gateway URL configuration.

### Origin Story

OpenClaw agents operate across multiple platforms without built-in real-time monitoring. Crabwalk was created to provide operators with visibility into agent sessions, enabling debugging, pattern recognition, and confidence in agent behavior across the full communication ecosystem. I contributed major features, including a full OpenClaw workspace file viewer and editor.

### Ethical Considerations / Notes

Requires OpenClaw gateway running locally with proper authentication token configuration. Docker networking requires host network mode when the gateway binds to loopback only. The tool is for operational monitoring, not surveillance.


*Portfolio generated from GitHub analysis. Last updated: February 2026.*
