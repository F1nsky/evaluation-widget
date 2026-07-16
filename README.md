# Accessible Feedback Widget

A responsive article-rating component built with semantic HTML, modern CSS, and vanilla JavaScript. It demonstrates accessible interaction design without a UI framework.

## Features

- five-point rating control with radio semantics;
- keyboard-friendly native buttons and visible focus states;
- persistent rating using `localStorage`;
- accessible feedback dialog with Escape and focus return;
- polite status announcements for assistive technology;
- responsive layout and reduced-motion support;
- no dependencies or build step.

## Run locally

Open `index.html` in a browser, or start any static file server:

```bash
npx serve .
```

## Implementation notes

The component uses native interactive elements instead of clickable links, keeps visual state synchronized with `aria-checked`, and restores focus after the dialog closes. Submitted feedback is intentionally not sent to a backend; this repository focuses on the client-side interaction.
