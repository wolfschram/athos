# ATHOS — Session 7 Handover
Date: 2026-03-12
Repo: github.com/wolfschram/athos (main branch)
Live: https://athos-obs.com
Backup: https://athos.archive-35.com
Cloudflare Account: wolfbroadcast@gmail.com | b7491e0a2209add17e1f4307eb77c991

---

## PRIORITY FOR THIS SESSION — READ BEFORE ANYTHING ELSE

**RÉSUMÉ IMAGE:**  should be a SECOND centered image, NOT a replacement for the road hero. The original road hero is currently gone. First task: confirm with Wolf — regenerate the road image OR keep man-on-ridge as hero? Then place  centered mid-page. Wolf confirms exact placement.

Everything else (audio, nav, engage rewrite, reading room) is **working**. Start with the image.

---

## MCP ACCESS NOTE — READ FIRST
Claude has FULL MCP access in this environment:
- **archive35 MCP** — full read/write/run access to ~/Documents/ACTIVE/ATHOS and the Archive-35 repo
- **Claude in Chrome MCP** — full browser automation, logged into Cloudflare as wolfbroadcast@gmail.com
- **File system access** — can read/write files directly at any path on Wolf's Mac via archive35_run_command
- **GitHub access** — can git add/commit/push to github.com/wolfschram/athos via archive35_run_command
- **Cloudflare dashboard access** — via browser automation (Chrome MCP)

Do NOT ask Wolf to manually run git commands or open files. Do it directly.

---

## COMPLETED THIS SESSION

### Audio — Engineering Page
- All 4 sections have PLAY buttons, LEFT-aligned (button first, title after)
- PLAY ALL at top of engineering section, also LEFT-aligned
- Files wired: broadcast-live-production.mp3, concert-touring.mp3, the-pivot.mp3, the-through-line.mp3
- All 4 tracks in global LISTEN ALL playlist

### Audio — AI Evolution Page
- the-honest-truth.mp3 wired to THE RESTLESS MIND intro block
- Label changed: THE RESTLESS MIND — A CONFESSION → THE RESTLESS MIND
- Track added to LISTEN ALL playlist

### Audio — Honest Conversation
- Updated recording committed and pushed

### Leadership — Immersive Header
- Topic pill nav across top when any topic opens fullscreen
- Pills: Purpose / Ownership / Symbiotic Teams / Honest Conversation / Cognitive Diversity / The Door
- Active pill highlights in topic color. Click any pill to jump directly.

### AI Evolution — Fixes
- Intelligence Gap: external links no longer collapse accordion (stopPropagation)
- Archive-35 Website: GitHub + archive-35.com links added
- Job Pipeline: GitHub link added
- ATHOS project links: broken HTML entities fixed

### Engage Page — Rewrite
- Title: First Engagements → Let's Talk
- Key question: THE ONLY QUESTION THAT MATTERS
- Copy: Did anything spark your interest? Pick up the phone.
- CTA simplified to honest exchange framing

### Reading Room — Full Rebuild
- Title: Interesting Books
- Subtitle: Books that gave me a lot of insight. That's it.
- Removed: Leading Change (Kotter)
- Added: Don't Believe Everything You Think (Nguyen), ADHD 2.0 (Hallowell/Ratey),
  The Coming Wave (Suleyman), Juggling Elephants, Never Split the Difference (Voss),
  Extreme Ownership (Willink/Babin), Who Says Elephants Can't Dance? (Gerstner),
  Astrophysics for People in a Hurry (Tyson), Apple in China (McGee),
  Radical Candor (Kim Scott), The 6 Types of Working Genius (Lencioni)
- Kept: The Fearless Organization, Drive

### Resume Hero — Partial (INCOMPLETE — SEE BELOW)
- Height: 250px → 380px, bleeds to top (margin-top: -48px)
- Name overlay added bottom-left of hero image
- Duplicate Wolfgang Schram heading below hero removed

---

## OUTSTANDING — MUST FIX FIRST IN NEXT SESSION

### RESUME IMAGE — WRONG APPROACH TAKEN
What Wolf asked: Add resume 1.png as a SECOND centered image IN ADDITION to existing hero.
What was done: resume 1.png REPLACED hero-resume.png. WRONG.

Current state:
- images/hero-resume.png = man on ridge / city lights (IS resume 1.png, same MD5)
- The original road/highway hero image is GONE from the repo

Fix needed:
1. Confirm with Wolf: keep man-on-ridge as hero, OR regenerate road image?
2. Place resume 1.png as a CENTERED standalone image somewhere mid-resume
3. Wolf to confirm exact placement (between which sections?)
4. After any image change: run Purge Everything in Cloudflare dashboard
   URL: https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/athos-obs.com/caching/configuration

Files on disk:
- ~/Documents/ACTIVE/ATHOS/images/resume 1.png — man on ridge, city lights (1536x1024)
- ~/Documents/ACTIVE/ATHOS/images/hero-resume.png — identical to above

---

## AUDIO FILE MAP

File                              | Page                    | Status
broadcast-live-production.mp3    | Engineering: Foundation | wired
concert-touring.mp3               | Engineering: Touring    | wired
the-pivot.mp3                     | Engineering: Pivot      | wired
the-through-line.mp3              | Engineering: ThroughLine| wired
the-honest-truth.mp3              | AI Evolution intro      | wired
purpose.mp3                       | Leadership              | wired
ownership.mp3                     | Leadership              | wired
symbiotic-teams.mp3               | Leadership              | wired
honest-conversation.mp3           | Leadership              | wired (updated)
cognitive-diversity.mp3           | Leadership              | wired
the-door.mp3                      | Leadership              | wired

NO AUDIO YET: AI Evolution individual project cards (Anamorphic, Jenny, Intelligence
Gap, Archive-35 Web, Archive-35 Studio, Riedel, Job Pipeline, ATHOS).
Wolf to decide: one section-level audio OR per-project recordings?

---

## CACHE — HOW TO PURGE
Cloudflare edge cache (affects all visitors):
https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/athos-obs.com/caching/configuration
→ Purge Everything

Browser cache (Wolf's own browser): Cmd+Shift+R (hard reload)

Bee image (Symbiotic Teams): new image IS committed and live.
If Wolf still sees old image → Cmd+Shift+R or Purge Everything above.

---

## NEVER RULES
- NEVER mention Archive-35 / photography on ATHOS site
- NEVER use exact number 248 — always ~250
- NEVER write staccato content — must flow
- NEVER put action items (play buttons, links) on the RIGHT side — always LEFT
- Default document format: Apple Pages

## KEY PATHS
Site:    ~/Documents/ACTIVE/ATHOS/index.html
Images:  ~/Documents/ACTIVE/ATHOS/images/
Audio:   ~/Documents/ACTIVE/ATHOS/audio/
Skill:   /mnt/skills/user/wolf-archive-35/SKILL.md
CF Pages: https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/pages/view/athos
