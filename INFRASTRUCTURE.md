# ATHOS — Infrastructure & Domain Registry
Last updated: 2026-03-11

---

## Domain — athos-obs.com

| Field | Value |
|-------|-------|
| Domain | athos-obs.com |
| Meaning | **OBS = Own it. Build it. Stand behind it.** |
| Registrar | Cloudflare Registrar |
| Account | wolfbroadcast@gmail.com |
| Cloudflare Account ID | b7491e0a2209add17e1f4307eb77c991 |
| Registered | 2026-03-11 |
| Expires | 2027-03-11 |
| Auto-renew | YES — 60 days before expiry |
| Annual cost | $10.46/year |
| Nameservers | Cloudflare (automatic) |
| WHOIS Privacy | Cloudflare redacts personal info |
| Registrant | Wolfgang Schram |
| Registrant email | wolfbroadcast@gmail.com |

---

## Domain — athos.archive-35.com (subdomain)

| Field | Value |
|-------|-------|
| Type | CNAME subdomain of archive-35.com |
| Points to | athos.pages.dev |
| Managed via | Cloudflare DNS (auto-created) |
| Cost | Free (subdomain of existing domain) |

---

## Hosting — Cloudflare Pages

| Field | Value |
|-------|-------|
| Project name | athos |
| Production URL | https://athos.pages.dev |
| Custom domain (subdomain) | https://athos.archive-35.com |
| Custom domain (primary) | https://athos-obs.com — PENDING WIRING |
| GitHub repo | https://github.com/wolfschram/athos |
| Branch | main |
| Build command | none (static HTML) |
| Deploy trigger | git push to main |
| SSL | Auto-provisioned by Cloudflare |
| CDN | Cloudflare global edge network |

---

## DNS Setup for athos-obs.com → Cloudflare Pages

To wire athos-obs.com to the ATHOS Pages project:
1. Go to: https://dash.cloudflare.com/b7491e0a2209add17e1f4307eb77c991/pages/view/athos
2. Settings → Custom domains → Add custom domain
3. Enter: athos-obs.com
4. Cloudflare auto-creates the CNAME: athos-obs.com → athos.pages.dev
5. Also add: www.athos-obs.com → redirect to athos-obs.com

---

## Bots / Crawlers

robots.txt is configured to explicitly welcome:
- GPTBot (ChatGPT)
- Claude-Web (Anthropic)
- anthropic-ai
- PerplexityBot
- Googlebot

llms.txt is live at: https://athos-obs.com/llms.txt
(AI agent discoverability standard)

---

## Cost Summary

| Item | Cost |
|------|------|
| athos-obs.com domain | $10.46/year |
| Cloudflare Pages hosting | Free |
| Cloudflare DNS | Free |
| SSL certificate | Free |
| **Total annual** | **$10.46/year** |

---

## Contacts

| Role | Name | Contact |
|------|------|---------|
| Owner | Wolfgang Schram | wolfbroadcast@gmail.com |
| Cloudflare account | wolfbroadcast@gmail.com | dash.cloudflare.com |
| GitHub | wolfschram | github.com/wolfschram/athos |
