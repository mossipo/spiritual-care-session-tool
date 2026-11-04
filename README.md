# Spiritual Care Session Tool

A pastoral instrument for spiritual care, discernment, and the steps of freedom. It walks a minister through intake, safety, triage, entry points, the seven tests of discernment, the steps of ministry, and a printable plan with Scripture and prayer to send home.

It is for the minister's own records. Each person has one file, locked with a passphrase, that carries their course of care from session to session.

## Open the tool

- **English:** `index.html`
- **German (Seelsorge-Werkzeug):** `de/index.html`

Once GitHub Pages is turned on for this repository, the tool opens at:

- English: https://mossipo.github.io/spiritual-care-session-tool/
- German: https://mossipo.github.io/spiritual-care-session-tool/de/

To use it with no internet at all, either install it or download `index.html` and open it in any browser.

## Installing on a device

- **iPhone or iPad:** open the web address in Safari, tap Share, then Add to Home Screen.
- **Android:** open it in Chrome, then tap Install app (or menu, then Add to Home Screen).
- **Laptop:** in Chrome or Edge, click the install icon in the address bar.

Installed copies work without signal and update themselves the next time they open with a connection.

## Confidentiality

The tool runs entirely in the browser. It sends nothing anywhere and stores nothing on the device. A session exists only on the screen until the minister saves it as a file.

Saved session files are **locked with a passphrase** (AES-256 encryption on the device). Without the passphrase a file is unreadable, and a forgotten passphrase cannot be recovered.

Recommended practice:
- Keep one file per person, named by initials or a code, in one private folder.
- Back the folder up (an encrypted drive, or a private cloud folder; the files are locked either way).
- Keep the passphrase somewhere safe and separate from the files.
- Print the full plan only if your policy requires a paper file, and keep it locked away.

**Saved session files (`.json`) must never be uploaded to this repository.** The `.gitignore` file blocks them.

## What is in it

| Area | What it does |
|---|---|
| Intake | Story, family of origin, spiritual status, and the family genogram |
| Family genogram | Three or more generations, pattern chips, pattern lens, relationship lines, blood-line findings, adoption, and a button to mark Generational Doors |
| Safety | Risk screen first, with your own referral resources |
| Triage | Natural, spiritual root, or demonic; and how deep |
| Doors | Entry points: occult, sexual, persistent sin, generational, wounds |
| Discernment | The seven tests, consolation and desolation, rebellion or captivity, pastoral assessment |
| Ministry | Listening prayer, the five steps, filling the house, homework |
| Plan | Full confidential record, plus a separate take-home handout |

## Files

| File | Purpose |
|---|---|
| `index.html` | The tool (English), one self-contained file |
| `de/index.html` | German version (Seelsorge-Werkzeug) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make it installable and available offline |

To publish an update: change the files, bump `CACHE` in `sw.js`, and push.

## Version history

See [CHANGELOG.md](CHANGELOG.md).

## Notes

The entry-point checklist adapts categories from Peter J. Bellini, *Unleashed: The C1-13 Integrative Deliverance Needs Assessment* (Wipf and Stock, 2018). This instrument supports pastoral discernment; it does not diagnose. Mental-health, medical, and safety concerns require qualified professionals.
