---
title: "GitHub Activity Cluster"
description: "A tool analyzing GitHub exports to discover actual technology interests by parsing code imports, dependencies, and patterns, then clustering repositories by tech similarity."
category: "Data Viz"
technologies:
  - "Python"
  - "sentence-transformers"
  - "UMAP"
  - "HDBSCAN"
  - "GitPython"
github: "https://github.com/popidge/github-activity-cluster"
featured: false
accentColor: "#10b981"
order: 8
---

## Overview

GitHub Activity Cluster addresses a fundamental problem with GitHub's native signals: stars and forks are weak indicators of actual technology usage. Someone might star a repository to "read later" or fork to submit a one-line PR. The real signal lies in code itself—what libraries you import, what languages you write, what dependencies you depend on. This tool performs deep code indexing on your GitHub archive export to surface your actual tech clusters.

The pipeline parses bare git repositories from GitHub exports, extracts imports from 10+ languages (Python, JS/TS, Rust, Go, Java, Ruby, C/C++, etc.), reads dependency manifests, embeds code context using sentence-transformers, and clusters repositories by similarity using UMAP dimensionality reduction and HDBSCAN density-based clustering.

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
