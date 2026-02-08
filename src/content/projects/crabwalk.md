---
title: "Crabwalk"
description: "A real-time companion monitor for OpenClaw agents, visualizing agent sessions and action chains across WhatsApp, Telegram, Discord, and Slack in a live node graph."
category: "DevOps"
technologies:
  - "ReactFlow"
  - "Framer Motion"
  - "tRPC"
  - "TanStack DB"
  - "WebSocket"
github: "https://github.com/popidge/crabwalk"
featured: false
accentColor: "#ef4444"
order: 9
---

## Overview

Crabwalk provides visibility into OpenClaw (Clawdbot) agent activities across multiple messaging platforms simultaneously. The monitoring interface displays a live ReactFlow node graph of agent sessions, showing thinking states, tool calls, and response chains as they happen. Operators can filter by platform, search by recipient, and expand individual nodes to inspect tool arguments and payloads.

The system connects to the OpenClaw gateway via WebSocket for real-time streaming, enabling immediate observation of agent behavior. Multi-platform support aggregates activity from WhatsApp, Telegram, Discord, and Slack into a unified view.

### Key Features

- Live activity graph visualization using ReactFlow
- Real-time WebSocket connection to OpenClaw gateway
- Multi-platform monitoring across WhatsApp, Telegram, Discord, Slack
- Session filtering by platform and search by recipient
- Node expansion revealing tool arguments and payloads
- Smooth animations via Framer Motion

### Technical Highlights

The frontend uses ReactFlow for interactive node graph rendering with Framer Motion animations. TanStack Start with tRPC provides type-safe API communication, and TanStack DB handles data management. Docker deployment enables portable installation with proper network configuration for connecting to the OpenClaw gateway.

### Origin Story

OpenClaw agents operate across multiple platforms without built-in real-time monitoring. Crabwalk was created to provide operators with visibility into agent sessions, enabling debugging, pattern recognition, and confidence in agent behavior across the full communication ecosystem. The creator contributed major features, including a full OpenClaw workspace file viewer and editor.
