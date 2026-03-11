# LESSONS_LEARNED.md — ATHOS
Last updated: 2026-03-10

## Lessons

### 2026-03-10 — Mind map positioning uses percentages
The mind map nodes are positioned using percentage-based coordinates relative to the container. This allows responsiveness but means exact positions will shift on different screen sizes. For production, consider absolute SVG positioning or a canvas-based approach.

### 2026-03-10 — Single HTML = fast feedback loop
Building as a single file makes it trivial to open locally, share via Cloudflare, and iterate. Don't break into components until the content and design are locked.
