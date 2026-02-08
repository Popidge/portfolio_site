---
title: "Web Share API Tester"
description: "An interactive developer tool for testing Web Share API implementations with realistic platform mockups for iOS, Android, macOS, and Windows, plus live interception capabilities."
category: "Automation"
technologies:
  - "JavaScript"
  - "Preact"
  - "Vite"
  - "Express"
  - "WebSocket"
  - "devices.css"
github: "https://github.com/popidge/web-share-tester"
featured: false
accentColor: "#3b82f6"
order: 5
---

## Overview

Web Share API Tester solves a common pain point for web developers: testing share functionality without deploying to actual devices or manually triggering the native OS share dialog. The tool provides two modes—manual testing with realistic platform mockups, and live interception testing that captures `navigator.share()` calls from your development app.

In manual testing mode, developers can explore share behavior across iOS, Android, macOS, and Windows platforms with authentic UI styling for share targets like Messages, Mail, Twitter, and WhatsApp. The live interception mode uses a client-side shim script that replaces `navigator.share()` with an intercepting version, sending share data to the testing interface via HTTP.

### Key Features

- Platform mockups with authentic UI for iOS, Android, macOS, and Windows
- Share target apps including Messages, Mail, Twitter, and WhatsApp
- Manual testing mode for exploring share flows
- Live interception mode with WebSocket communication
- Client-side shim script for capturing `navigator.share()` calls
- Runtime configuration via browser console
- Glassmorphism UI with dark/light theme support

### Technical Highlights

The testing interface uses Preact for a lightweight component-based architecture with Vite for fast builds. A custom Express server with WebSocket support handles real-time communication between the shim and the tester interface. The shim script performs client-side API replacement, validating share data according to Web Share API specifications.

### Origin Story

The creator needed a way to rapidly test Web Share API implementations during development without deploying to mobile devices or manually triggering share dialogs. Existing solutions were either too basic or too complex, leading to the creation of a purpose-built testing tool.
