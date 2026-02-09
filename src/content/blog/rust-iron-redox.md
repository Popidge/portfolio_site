---
title: "Rust, Iron and Redox - Square Pegs, Round Holes and AI Code"
date: 2026-02-08
draft: false
tags: ["research", "ai", "code generation", "development"]
excerpt: "A post about some early-stage research into defining a natural languge superset of an existing programming language, to improve AI Code Gen."
---

## AI in research

If you've seen my [Journal of AI Slop](https://journalofaislop.com) project, you'll know I have **opinions** on the use of AI in academic research. Put your pitchforks down, I'm not about to get all old-fashioned on you.

I think AI in research is a powerful accelerator, but it's current misuse, lack of transparency and general attitude towards it needs a lot of work.

When I created the Journal, part of the idea behind it was to hold up a mirror to modern-day academia - tired grad students, overstretched supervisors, all using AI in a *hush-hush*, cloak-and-dagger way, spending more time trying to hide it than actually addressing how to use it **responsibly**. By simultaneously having a low bar to entry (anyone can publish), with one strict enforcement (your submission must credit an AI as an author/co-author), it made a ludicrous statement for transparency in the AI age. Having AI models then publicly peer-review the contributions, with the only real rigour being "is it AI Slop?" - that was just plain funny.

I finally had an opportunity to put my money where my mouth was with a recent bit of research into AI-generated code, leading to me [authoring a whitepaper](https://doi.org/10.5281/zenodo.18528387) and including the following statement:

```
AI Assistance Transparency Statement
This research was conducted as a collaboration between human insight and AI assistance.
The author (J.T.) conceived the core hypothesis, designed the experimental protocol, and
directed all research decisions. AI systems (including OpenCode, Kimi K2.5 (Moonshot AI) and
GPT-5.3-Codex (OpenAI) via API access) were employed as accelerators for:
• Software engineering: Implementation of the Redox transpiler, test harnesses, and data
processing pipelines
• Literature synthesis: Initial identification and summarization of related work (subse-
quently verified against primary sources)
• Technical writing: Drafting of LATEX structure, figure generation, and prose refinement
• Statistical analysis: Data visualization and tabulation of experimental results
All empirical claims, mathematical derivations, and cited works were verified by the author
against primary sources. The AI systems served as high-velocity research assistants, not primary
investigators. We disclose this methodology to advocate for transparent AI integration in
empirical research and to demonstrate that rigorous hypothesis testing remains fundamentally
human-directed, even when execution is AI-accelerated.
```

It was important to me that I acknowledged the tools I used, stated how I used them and why, but confirmed that I did so in a responsible, academically rigourous manner.

If you're an academic reading this, I encourage you to do the same. Reproducibility and rigour are core tenets of the scientific method - how is someone supposed to reproduce your results and validate your methods if you're not open and honest about the tools you used? It's getting harder and harder to spot hidden AI usage and models aren't perfect. That's okay, neither are humans. As long as we are **transparent** and **open** about what we use and when, it make it easier to defend your work and ideas, and opens you up to **valuable feedback** if someone spots issues in your methodology.


*Soapbox moment over, time for some real nerd stuff*

---

## Rust, Iron and Redox
### aKa "what if we turned all the punctuation into words?"

The research behind this whitepaper was inspired by various ideas I've had around the strengths an limitations of Large Language Models (LLMs). LLMs are primarly built for processing natural language, extracting semantic meaning behind words and phrases, and using that to "predict" the best next token in response to a user query. The fact that they can produce workable code at all is impressive, but is explained by the fact that programming languages are created as a way for human meat-brains like ours to go from vague thoughts of "I want the computer to take this number from there and this number from here and add them together" to a logical, parseable construct that tells a computer to do exactly that task. To make it easier and more optimal for the computer to translate into 1s and 0s, we enforce strict syntax, grammar, sigils (punctuation) and other ideas that don't quite map to natural language.

If you've ever met a guru-level coder, you'll be in awe when they look at a line of code like `fn evil<'a, T: Iterator<Item = &'a mut U>, U: Default>(x: T) -> impl FnOnce() -> Option<U> {
    || None
}` and say "oh yeah, that just says "Give me a complex machine that spits out mutable references to things that can be default-created, and I will give you back... a function.". *How did they get that from what looks to me like someone bashed various punctuation keys?". That's a **learned skill**, much like learning to speak another language (especially one with a different alphabet). Turns out big LLMs have learned that too - they've been trained on enough "here's some code, here's what it does" data to do a pretty competent job at creating this code, even though they "think" in natural language (well, naturall language split down into tokens and represented as massive vectors, but that's a whole different blog post!).

But what if they didn't need to? If you were to invent a brand new programming language that used an LLMs strongest feature, it's natural language skills, what would it look like?

That's what led me to trying out a new approach - a superset of a known language (which already has many features that make it good for AI-generated code) that 1:1 translates to the base language, but is written entirely in natural-language words and phrases. Enter **Iron**, and the transplier, **Redox**, which converts it to and from **Rust**.

### But Jamie, those aren't computer words...

Nope, they're inspired by Chemistry. Redox reactions are a type of chemical reaction where the oxidation state of the reactants change. Oxidation happens when the primary reactant loses or donates electrons to the other, and Reduction is the opposite (yes, it's counterintuitive - "Reduction" but it... gains electrons? Just roll with it). The process of Iron rusting over is one of the first examples you're taught about - Oxygen attacks Iron, reacting with it and taking it's electrons, which increases it's oxidation state. The resulting Iron Oxides are what we call Rust. *And here I thought I'd never use my degree in my work again!*

Of course, Rust is already a programming language, so a process that adds electrons to it (adds semantic meaning through verbosity) would naturally *reduce* it to Iron. Removing those "semantic electrons" would *Oxidise* it to Rust. The pun wrote itself. To me, at least.

### Back to the code...

I picked Rust because, firstly, I like it - it's relatively new, statically typed (every variable and function has to be given a data type it contains or returns, meaning your code won't randomly decide the number 11 is actually the written string "11"), memory-safe and enforces all of this at compile-time - this sort of strictness tends to work well with LLMs - if they hallucinate an incorrect type or leave a dangling pointer (oo-er missus), they get instant, clear feedback to correct themselves. 

Secondly, this strictness means you can do a good job of mapping all the low-probability punctuation and abbreviations in it's primitives to natural words, converting it to your super-wordy Iron, and turning it back to Rust, then checking you've done it correctly.

### How does it look?

The Rust snippet;

```rust
pub fn closure_shift_001(x: i32) -> i32 {
let f = |n| n + 3;
f(x)
}
```

in Iron;

```iron
function closure_shift_001
    takes x of i32
    returns i32
begin
    define f as closure with parameters n and body n
    plus 3
    call f with x
end function
```

### Does it work?

I finetuned a Qwen-3-4B-Instruct model with matching rust/iron synthetic datasets, and evaluated performance on identical coding problems.

From the whitepaper: "Across controlled experiments, a 4B parameter model trained on Iron achieved
96.7% compile rate and 96.7% test pass rate, versus 71.7% for equivalent Rust training—a
relative improvement of 35% in functional correctness."

So, from early testing - **yes**. There's still a lot more to look at - covering more of the Rust featureset, making sure the transpiler works properly with real-world code, improving the training data and making sure it maintains the improvement, seeing if larger models respond as well to it.

## Read the whitepaper.

A working preprint is [available on Zenodo](https://doi.org/10.5281/zenodo.18528387) now. I'm currently looking for endorsement from anyone able to on the cs.SE/cs.AI areas of arXiv - get in touch if you think you can help!

The code and pre-trained adapters are available on [github](https://github.com/popidge/redox). Contributions welcome!

---

<span class="font-['JetBrains_Mono'] text-xs text-[var(--text-muted)]">Written on 2026-02-08 • Tagged: #research #ai #codegeneration #development</span>
