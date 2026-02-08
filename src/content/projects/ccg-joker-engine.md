---
title: "CCG Joker Engine"
description: "A PyTorch-based neural network training and evaluation system for the Triplecargo card game, implementing AlphaZero-style self-play, policy/value training, and promotion gating."
category: "ML"
technologies:
  - "Python"
  - "PyTorch"
  - "uv"
  - "Typer"
  - "UMAP"
  - "HDBSCAN"
github: "https://github.com/popidge/ccg-joker-engine"
featured: false
accentColor: "#f59e0b"
order: 7
---

## Overview

The CCG Joker Engine serves as the machine learning companion to the Rust-based Triplecargo solver, providing a complete pipeline for training neural networks to play the Triplecargo collectible card game. The system loads JSONL training data exported from Triplecargo, encodes board states and hands into tensors, and trains policy/value networks using supervised learning, self-play generation, or reinforcement learning approaches.

This represents serious ML engineering with production-grade practices. The supervised training pipeline supports mixed loss functions handling both one-hot labels and MCTS distributions, while self-play generation implements AlphaZero-lite mechanics with Dirichlet noise exploration and temperature scheduling.

### Key Features

- Supervised training on JSONL data from Triplecargo exports
- Self-play generation with MCTS, Dirichlet exploration, and temperature scheduling
- Reinforcement learning fine-tuning from self-play data
- Promotion gating with head-to-head model comparison
- Elo-based evaluation metrics with threshold filtering
- GPU/CPU support with automatic mixed precision for CUDA
- CPU parallelism across multiple workers

### Technical Highlights

The project uses uv for Python package management with a pinned Python 3.12 environment. PyTorch provides the neural network framework with AMP support for GPU training. Typer exposes CLI commands for training, evaluation, self-play, and gating workflows. The MCTS implementation uses threaded workers for parallel game generation, with deterministic mirror play to mitigate start-side bias.

### Origin Story

The project emerged from competitive analysis of the Triplecargo card game, where the creator wanted to apply AlphaZero-style self-learning techniques. The Rust solver handles game state evaluation while Python provides the ML training infrastructure, combining high-performance game logic with flexible neural network training.
