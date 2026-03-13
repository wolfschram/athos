# ATHOS SESSION 9 HANDOVER
Date: 2026-03-12
Read this completely before touching anything.

## FIRST: READ LESSONS LEARNED in CLAUDE.md before any code change.

## Project
- Live: https://athos-obs.com
- Repo: github.com/wolfschram/athos (main)
- Local: /Users/wolfgangschram/Documents/ACTIVE/ATHOS/
- CF Pages: https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/pages/view/athos
- CF Cache: https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/athos-obs.com/caching/configuration
- Stack: Single index.html, no build step

## Latest commit: b5244b6 (main, clean, pushed)

## Nav (10 tabs)
APPROACH | LEADERSHIP | MY AI EVOLUTION | ENGINEERING | ENGAGE | VOICES | RESUME | READING | CONTACT
Page IDs: page-approach, page-leadership, page-ai, page-engineering, page-engage, page-voices, page-resume, page-reading, page-wolf

## Audio (all 200 OK, correct sizes)
audio/purpose.mp3 - Leadership index 0 - 1878KB
audio/ownership-v2.mp3 - Leadership index 1 - 2390KB (renamed from ownership.mp3 to bypass CF cache)
audio/symbiotic-teams.mp3 - Leadership index 2 - 699KB (small - verify with Wolf)
audio/honest-conversation.mp3 - Leadership index 3 - 2176KB
audio/cognitive-diversity.mp3 - Leadership index 4 - 1049KB
audio/the-door.mp3 - Leadership index 5 - 1912KB
audio/the-honest-truth.mp3 - AI Evolution index 6 - 1489KB
audio/broadcast-live-production.mp3 - Engineering index 7 - 3523KB
audio/concert-touring.mp3 - Engineering index 8 - 2723KB
audio/the-pivot.mp3 - Engineering index 9 - 1260KB
audio/the-through-line.mp3 - Engineering index 10 - 1240KB

## Images in use
images/wolf-portrait-v2.png - Contact page - AI portrait Wolf amber lighting
images/hero-wolf.png - NOT IN USE (old silhouette, orphaned)
images/resume-portrait.png - Resume hero (man on ridge)
images/hero-resume.png - Resume right column (road, sticky 45%)
images/hero-voices.png - Voices hero
images/hero-bridge.png - Leadership hero
images/hero-ai.png - AI Evolution hero
images/hero-engineering.png - Engineering hero
images/hero-reading.png - Reading hero
images/engage-blueprint/embedded/ai.png - Engage page

## Voices System
- Live endorsements, localStorage, instant publish, no approval needed
- LEAVE A VOICE button top right of Voices page
- DELETE PASSWORD: athos2026
- To change: search VOICES_DELETE_PW in index.html
- Cards show: Name (LinkedIn linked) > Title / Company > Message

## Resume Layout (CAUTION - broke twice this session)
- Hero: resume-portrait.png, 460px full bleed, fades to black
- Body flex two-column:
  LEFT (order:1): CV content, flex:1, padding 40/48/80/48px
  RIGHT (order:2): hero-resume.png, sticky, width:45%, min-width:420px, height:100vh
  Left edge fades via gradient into CV content
- BEFORE TOUCHING: always read lines 2824-2840 with sed -n first

## Contact Page
- Portrait: wolf-portrait-v2.png (amber cinematic AI portrait)
- Bio: 25 years across TWO continents. Germany > England > California.
- Phone: +1 310 997 8359
- ATHOS title on resume: Founder (only, no Culture Architect)

## CLOUDFLARE BINARY CACHE RULE (proven multiple times)
CF will NOT update images/audio after cache purge alone.
ONLY fix: rename file + update HTML ref + commit + push.
NEVER try cache purge alone for binary assets.

## Session 9 Completed
1. Voices live endorsement system (submit, display, delete with password)
2. Voices delete password in CLAUDE.md + memory
3. Voices modal generic placeholders
4. Nav: About renamed to Contact
5. Phone number added to Contact page
6. AI portrait wolf-portrait-v2.png deployed
7. Portrait frame: 420px tall, center top crop, 4-way edge fade
8. Bio: two continents, Germany > England > California
9. ATHOS resume title: Founder only
10. Ownership audio: ownership-v2.mp3 (CF cache bypass)
11. Resume road image: 45% width, deeper left fade
12. Resume layout repaired after duplicate div bugs (twice)
13. Culture Architect removed from resume hero subtitle
14. Full site audit: all 11 audio + all images 200 OK
15. LESSONS LEARNED added to CLAUDE.md
16. Joyce (Riedel) outreach email drafted

## Pending - Wolf has a fix list for next session
Ask Wolf for his list BEFORE writing any code.
Items to verify:
- Resume road rendering at 45% correctly?
- Contact portrait showing wolf-portrait-v2 (not old silhouette)?
- Ownership audio playing full track?
- symbiotic-teams.mp3 699KB - is this the full file?

## NEVER Rules
- NEVER mention Archive-35 / photography on ATHOS
- NEVER use 248 - always ~250
- NEVER buttons on RIGHT - always LEFT
- NEVER say fixed without live screenshot proof
- NEVER Python triple-quote heredocs for HTML
- NEVER edit without sed -n reading lines first
- NEVER commit without reading back changed lines
- NEVER Diversified in public content (CV excepted)
