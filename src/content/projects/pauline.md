---
title: "Pauline"
description: "An AI-powered job search coach with persistent memory that chats naturally about your job search while handling applications, follow-ups, and tracking."
category: "AI"
technologies:
  - "FastAPI"
  - "LangGraph"
  - "React"
  - "Vite"
  - "OpenRouter"
  - "SQLite"
  - "shadcn/ui"
github: "https://github.com/popidge/pauline"
featured: false
accentColor: "#ec4899"
order: 6
---

## Overview

Pauline (Personal AI job search coach with memory) transforms the job search process into a conversational experience. Users can chat naturally about their job search goals, and Pauline handles the rest—tracking applications, preparing cover letters, following up on leads, and remembering preferences across sessions. The system uses LangGraph for agent logic with persistent memory, ensuring continuity between conversations.

The project implements a complete full-stack architecture with a Python FastAPI backend handling LLM orchestration through LangChain and LangGraph, while a React frontend provides a polished chat interface. Multiple personality options range from British sarcastic to cheerleader, drill sergeant, or zen master modes.

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
