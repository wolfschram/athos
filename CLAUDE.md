# CLAUDE.md — ATHOS
Last updated: 2026-03-10

> Read this COMPLETELY before doing anything.
> If you skip this, you will break things or waste Wolf's time.

---

## What is this project?
ATHOS (Architecting Teams for High-performance Outcomes & Scale) — Wolf Schram's culture architecture practice website. A place of curiosity, not a consulting brochure.

## Problem it solves
Wolf needs a professional web presence for ATHOS that demonstrates his leadership philosophy through experience rather than explanation. The site IS the résumé.

## Stack
| Layer | Technology |
|-------|------------|
| Runtime | Static HTML/CSS/JS |
| Hosting | Cloudflare Pages (subdomain of archive-35.com) |
| Subdomain | athos.archive-35.com |
| Repo | GitHub (TBD — needs setup) |
| Fonts | Atkinson Hyperlegible (body), JetBrains Mono (labels), Fraunces (headings) |

## Is this live/production?
- [ ] YES — treat every change as production deployment
- [x] NO — development/staging (temporary Cloudflare Pages presentation)

## Three-Word Core
**People Own Outcomes.**

## Brand Identity
- **Full name:** Architecting Teams for High-performance Outcomes & Scale
- **Tagline:** The Human in Focus
- **Voice:** Short, direct, grounded. Sounds like Wolf, not a brochure.
- **Design:** Dark backgrounds (non-negotiable), amber/gold accent, cinematic, minimal

## Color Palette (Mockup 2)
| Role | Color |
|------|-------|
| Background | #0C0B0F (near-black) |
| Primary | #1B2A4A (deep navy) |
| Accent | #C8943A (amber/gold) |
| Text primary | #E8E5DF (off-white) |
| Text mid | #A8A29E (mid-grey) |
| Text light | #6B6660 (light grey) |
| AI/Cognitive | #5A9ABE (blue) |
| Symbiotic/Photo | #4AAD9E (teal) |
| Business/Comms | #D06A5A (red) |
| Growth/Door | #7AAD5A (green) |
| Complexity | #9A7ABF (purple) |

## Site Architecture — 9 Pages
1. Landing (Curiosity Hook) — rotating questions, animated logo
2. Leadership (The Human in Focus) — mind map + readable narrative
3. AI Evolution (The Restless Mind) — 6-stage proof-of-work timeline
4. Engineering (Foundation) — 25 years credibility
5. Photography (Seeing What Others Walk Past) — atmospheric, brief
6. First Engagements (Working with ATHOS) — PARKED placeholder
7. Reading Room (Science Behind Philosophy) — books + research
8. Voices (What Others Say) — placeholder for quotes
9. Wolf (Wolfgang Schram) — contact/handshake page

## NEVER do this
- NEVER mention Archive-35, The Restless Eye, or any photography business branding
- NEVER use exact number 248 — always ~250 or roughly 250
- NEVER use explicit language except ONE instance under Business Reality ("Let's talk about the fucking money")
- NEVER lead with touring stories — supporting credibility only
- NEVER use generic consulting aesthetic (stock photos, corporate blue, light backgrounds)
- NEVER replicate archive-35.com design — ATHOS has its own identity
- NEVER invent project details — ask Wolf
- NEVER write in a voice that isn't Wolf's
- NEVER use Wolf's former company name (Diversified) in public-facing content

## Before every change
1. grep/search the file — never guess paths
2. Read this CLAUDE.md and the build brief (ATHOS_Coworker_Build_Brief_v3.docx)
3. Make ONE change at a time
4. Verify visually before moving on
5. Show git diff before committing

## Definition of done
Full 9-page HTML website deployed to Cloudflare Pages at a shareable URL. Dark theme, amber accent, interactive elements, Wolf's voice throughout. Colleagues and friends can visit and give feedback.

## Key Brand Lines (Use Verbatim)
- People Own Outcomes.
- The Human in Focus.
- I don't drive people — I elevate them into who they need to be.
- A fool with a tool is still a fool.
- Does your culture fit your people's purpose — or do your people's purpose fit your culture?
- The same eye that finds light in a frame finds potential in a person.
- Open doors for people. Don't need them to come back.

## Owner
Wolf Schram | wolfbroadcast@gmail.com | ADHD/dyslexia — keep answers short and scannable

## Voice-to-Text Corrections
- "get up" = **GitHub** — autocorrect won't let Wolf say GitHub. Always silently correct.
- All voice-to-text errors should be silently corrected without commenting on them.

## ChatGPT Image Generation — Context Bleed Prevention
CRITICAL LEARNING: When generating multiple images in one ChatGPT session, previous image content BLEEDS into new generations. The context window accumulates instructions and they layer on top of each other — it's multiplication, not replacement.

### The Problem
- Each new image prompt in the same chat inherits context from ALL previous images
- ChatGPT doesn't replace previous instructions — it layers them
- By image 3-4, you get hybrid outputs mixing elements from earlier images
- This gets WORSE with each generation in the same session

### The Solution — "Fresh Session + Reference Image" Method
1. Generate the FIRST image in a chat with the full style description
2. SAVE that image
3. For EVERY subsequent image: START A NEW CHAT
4. In the new chat, UPLOAD the first image as a style reference
5. Say: "Match the exact visual style, colour palette, and aesthetic of this reference image. But generate COMPLETELY NEW content as described below. Do NOT include any elements, labels, text, or components from the reference — use it ONLY for style matching."
6. Then provide the specific prompt for that image
7. Repeat for each image

### Prompt Prefix for Every Generation (after first)
Add this to the TOP of every prompt when generating in the same session:
"IMPORTANT: This is a BRAND NEW image. Ignore ALL content from previous images in this conversation. Use ONLY the style and colour palette from previous images. The layout, text, labels, nodes, and components described below are the ONLY elements that should appear. Do not carry over ANY text, labels, or structural elements from previously generated images."

### For Series of Consistent Images
- Generate image 1 with full style description
- Save it as the "style anchor"
- New chat for each subsequent image
- Upload the style anchor + specific new prompt
- This prevents context bleed while maintaining visual consistency

## Voice-to-Text Corrections (Global)
- "get up" = **GitHub** — autocorrect won't let Wolf say GitHub
- All voice-to-text errors silently corrected, never flagged

## Voices System — Credentials

**Voices delete password:** `athos2026`
- Used to delete endorsements on the Voices page
- Each card has a small × button (top right)
- Clicking × prompts for this password before deleting
- To change it: search `VOICES_DELETE_PW` in index.html and update the value

---

## LESSONS LEARNED — Read This Every Session, Not Just at the Start

> These are hard-won. They cost Wolf time and frustration. Respect them.

### 1. READ THE FULL CODE STATE BEFORE TOUCHING ANYTHING
Before editing ANY section, run `sed -n 'LINE,LINEp'` to see exactly what is there right now.
Do NOT assume the file matches what was written in a previous turn — it may have accumulated bugs from prior edits.
Never layer a fix on top of unread code.

### 2. VERIFY THE LIVE SITE, NOT JUST THE REPO
A successful `git push` does NOT mean the live site updated.
Cloudflare Pages aggressively caches files — especially images and audio.
If a file was deployed once in a broken/stub state, renaming the file is the only reliable fix.
Always confirm with a `fetch HEAD` check on the live URL before telling Wolf it's fixed.

### 3. NEVER TELL WOLF SOMETHING IS FIXED UNTIL YOU HAVE SEEN IT WITH YOUR OWN EYES
Do not say "it's live" or "refresh and you'll see it" until you have navigated to the live URL and taken a screenshot yourself.
Wolf should never have to be the one who discovers it's still broken.

### 4. ONE CHANGE AT A TIME WHEN LAYOUT IS INVOLVED
When editing HTML layout (flex, grid, sticky, position), make ONE structural change, verify it renders correctly, then make the next.
Chaining multiple layout edits in one shot compounds errors and makes them hard to untangle.

### 5. PYTHON HEREDOC STRINGS WITH HTML ARE FRAGILE
Never use Python triple-quote strings inside bash heredocs to manipulate HTML.
They break on parentheses, quotes, and special characters.
Instead: use `sed -n` to identify exact line numbers, then use `python3 << 'PYEOF'` with line-by-line array replacement.

### 6. AFTER ANY EDIT, READ BACK THE CHANGED LINES
After every file edit, immediately run `sed -n` on the affected lines to confirm the result looks correct before committing.
Committing broken code and then fixing it creates noise and wastes deploys.

### 7. CLOUDFLARE CACHE PURGE IS NOT ENOUGH FOR BINARY FILES
Purging the Cloudflare cache does NOT reliably force new versions of images and audio files.
The only guaranteed fix: rename the file and update the HTML reference.
This has been proven multiple times. Do not attempt cache purge alone for binary assets.

### 8. MCP SERVER ROOT — ATHOS IS NOT IN THE archive-35 REPO
The `archive35` MCP tool is rooted in the **archive-35** repo (`~/Documents/ACTIVE/archive-35`).
ATHOS is a **separate repo** at `~/Documents/ACTIVE/ATHOS/` with its own git remote (`github.com/wolfschram/athos`).

**What this means at session start:**
- `archive35:archive35_read_file` with a path like `ATHOS/CLAUDE.md` will FAIL — that file is not in the archive-35 repo
- The correct method: use `archive35:archive35_run_command` with full absolute paths
  - Example: `cat /Users/wolfgangschram/Documents/ACTIVE/ATHOS/CLAUDE.md`
  - Example: `git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS status`
- All ATHOS file reads, edits, and git operations must use absolute paths via `run_command`
- Do NOT attempt relative paths via `archive35_read_file` for ATHOS files — they will 404

**Session startup sequence for ATHOS:**
1. Run `cat /Users/wolfgangschram/Documents/ACTIVE/ATHOS/ATHOS_HANDOVER_SESSION{N}.md`
2. Run `cat /Users/wolfgangschram/Documents/ACTIVE/ATHOS/CLAUDE.md`
3. Then ask Wolf for today's fix list — no code until both are read

### 8. THE ARCHIVE-35 MCP SERVER IS ROOTED IN THE ARCHIVE-35 REPO — NOT ATHOS
The `archive35` MCP tool is connected to the **archive-35.com** GitHub repo as its root.
It cannot use relative paths to reach the ATHOS project.

**What this means at session start:**
- `archive35_read_file` with a path like `ATHOS/CLAUDE.md` will FAIL — that path doesn't exist in the archive-35 repo
- `archive35_list_dir` and `archive35_git_*` operate on archive-35.com, not ATHOS
- ATHOS files must be accessed via `archive35_run_command` using **absolute paths**: `/Users/wolfgangschram/Documents/ACTIVE/ATHOS/`
- ATHOS git commands must use: `git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS <command>`

**The correct startup sequence for ATHOS sessions:**
1. Use `archive35_run_command` to `cat` the handover doc at its absolute path
2. Use `archive35_run_command` to `cat` CLAUDE.md at its absolute path
3. Use `git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS status` to check git state
4. Never try to use `archive35_read_file` for ATHOS files — it will always fail silently or error

**The correct pattern for ALL ATHOS file edits:**
```bash
# Read
cat /Users/wolfgangschram/Documents/ACTIVE/ATHOS/index.html | sed -n '100,120p'
# Edit (use python or sed — never heredoc)
# Commit
git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS add . && git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS commit -m "..."
# Push
git -C /Users/wolfgangschram/Documents/ACTIVE/ATHOS push
```
