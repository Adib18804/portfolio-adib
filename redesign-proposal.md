# Redesign Proposal: Cybersecurity & AI Portfolio

## 1. Executive Summary

This redesign aims to pivot the portfolio from a generalist Computer Science profile to a specialized **Cybersecurity, AI, and Blockchain** focused identity. The aesthetic will shift towards a "High-Tech/Cyberpunk" visual language, emphasizing professionalism, clarity, and modern design trends suitable for a tech-savvy audience.

## 2. Design Philosophy

- **Theme**: "Digital Fortress" meets "Neural Network".
- **Keywords**: Secure, Intelligent, Decentralized, Modern, Clean.
- **Visual Style**: Dark mode dominant, neon accents, terminal/code motifs, glassmorphism.

## 3. Color Palette Suggestions

To reflect the new themes, we will move away from generic colors to a specific "Cyber" palette:

- **Background**: `oklch(0.05 0 0)` (Deep Void Black) - Retained for contrast.
- **Primary (Cybersecurity)**: `oklch(0.65 0.25 145)` (Neon Green/Matrix Green) - Represents security, success, and code.
- **Secondary (AI/Innovation)**: `oklch(0.6 0.2 250)` (Electric Blue/Cyan) - Represents intelligence and future tech.
- **Accent (Blockchain/Crypto)**: `oklch(0.7 0.15 60)` (Tech Gold/Orange) - Subtle highlights for value and structure.
- **Text**: White for headings, Light Grey for body (high readability).

## 4. Typography

- **Headings**: `Inter` or `Space Grotesk` (Modern, clean sans-serif).
- **Code/Labels**: `JetBrains Mono` or `Fira Code` (Monospace for that "hacker" feel).

## 5. Layout & Container Suggestions

- **Professional Structure**: Use a consistent grid system.
- **Containers**:
  - **Glassmorphism**: Semi-transparent backgrounds with blur for cards (`backdrop-blur-md`).
  - **Borders**: Thin, glowing borders (`1px solid primary/20`) to define structure without clutter.
  - **Spacing**: Generous padding to avoid a "crowded" interface.

## 6. Section Specifics

- **Hero**:
  - Remove "Full Stack Developer" if it dilutes the niche.
  - Emphasize "Cybersecurity & AI".
  - Visual: Glitch text effect (already present), particle network background.
- **Experience/About**:
  - Highlight "Cybersecurity Club" and "CTF" achievements.
  - Remove specific mentions of "Data Analysis" or "Machine Learning" projects unless they directly support the AI theme.
- **Projects**:
  - Filter out old generalist projects (e.g., generic web apps) unless re-framed as "Secure Web Apps".
  - Showcase "Transport Management" only if relevant to system design, otherwise hide.
- **Skills**:
  - Group by "Security", "AI", "Development".

## 7. Proposed Content Changes

- **Remove**:
  - Explicit "Data Analysis" projects (e.g., SEM research).
  - "Machine Learning" as a standalone buzzword (fold into AI).
- **Enhance**:
  - "Cybersecurity" prominence.
  - "AI" applications.
  - "Blockchain" conceptual visuals or future projects.

---

_This proposal serves as a blueprint for the immediate code changes applied to the repository._
