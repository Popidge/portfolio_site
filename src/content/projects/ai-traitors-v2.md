---
title: "AI Traitors V2"
description: "A multi-agent AI social deduction experiment where players create agents with personalities who form memories, identify traitors, and navigate complex social dynamics."
category: "AI"
technologies:
  - "FastAPI"
  - "HTMX"
  - "Tailwind CSS"
  - "OpenRouter"
  - "uv"
  - "Pydantic V2"
github: "https://github.com/popidge/ai-traitors-v2"
featured: false
accentColor: "#7c3aed"
order: 4
---

## Overview

AI Traitors V2 brings the social deduction format of TV's "The Traitors" into the world of multi-agent AI systems. Players act as producers, creating AI agents with detailed personas including Big Five personality traits, communication styles, and demographics. These agents are then assigned roles—Faithful or Traitor—and must navigate conversations while forming short-term memories of interactions.

The project implements a complete agent architecture with persona management, memory systems, and conversation orchestration. Agents can engage in private 1-on-1 conversations or round-table broadcasts, with the system tracking what each agent remembers.

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

The backend uses FastAPI with async Python for handling concurrent conversations, integrated with OpenRouter API for LLM responses. The frontend leverages HTMX for dynamic updates without complex JavaScript frameworks, paired with Tailwind CSS for styling. Pydantic V2 provides strict type validation throughout.

### Origin Story

This project emerged from curiosity about how AI agents with different personalities would interact in social deduction scenarios. The challenge of implementing memory across multiple conversations while preventing information leakage between contexts drove the design.
