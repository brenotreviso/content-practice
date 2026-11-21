# The Content Practice

A beginner guide to making, posting and judging your own videos — without being driven by “the algorithm”, and **with no monetisation**.

Written for **complete beginners**: every term is defined ([glossary](docs/glossary.md)), every step is small, and every external claim links to a source checked on 20 Nov 2026, with additions on 21 Nov 2026 ([sources](docs/sources.md)). The worked example running through every chapter is **Maya Sen**, a fictional beginner ([meet her](docs/meet-maya.md)). Companion to [The Coded Motion Guide](https://github.com/brenotreviso/coded-motion) (how pictures move with code). You do not need coded motion to use this guide; a phone is enough.

## Start here

| If you want to… | Go to |
|---|---|
| Post your first video this week | [0 · Start here (7-day path)](docs/00-start-here.md) |
| Read the guide | [docs/index.md](docs/index.md) (also builds as a website, see below) |
| Work with an AI agent | [AGENTS.md](AGENTS.md) + [the skill](.agents/skills/content-practice/SKILL.md) |
| Check a fact that may have changed | [Platform snapshot](docs/platform-snapshot.md) (dated; refresh quarterly) |

## What's inside

```
content-practice/
├── README.md · AGENTS.md · CLAUDE.md · CHANGELOG.md
├── LICENSE (CC BY-NC-SA 4.0, text) · LICENSE-CODE (MIT, templates and scripts)
├── docs/                 15 chapters (00-14) + meet-maya, platform-snapshot, glossary, sources
├── templates/            brand sheet, pillars, idea tree, script templates, calendar, batching, analytics
├── checklists/           first video, before you post, 48-hour review, Trial Reels
├── scripts/              mkdocs_hooks.py
├── .agents/skills/content-practice/SKILL.md   (symlinked into .claude/skills and .grok/skills)
└── mkdocs.yml            docs website (Material for MkDocs)
```

## Run the docs site

```bash
pip install mkdocs-material
mkdocs serve        # http://127.0.0.1:8000
mkdocs build --strict
```

## Notes

- **Windows + symlinks:** the skill lives in `.agents/skills/content-practice/` and is symlinked into `.claude/skills/` and `.grok/skills/`; the docs website links `docs/templates` and `docs/checklists` the same way. On Windows, enable symlinks before cloning (`git config --global core.symlinks true` plus Developer Mode), or copy the folders.
- **Maya Sen** is made up for teaching. She is not a real person. Do not cite her as a creator, client or data point.
- **No monetisation.** This guide does not cover brand deals, Creator Rewards, CPM, affiliate or growth hacks. AIDA and PAS are taught as attention structures, not sales funnels.
- Links to `github.com/brenotreviso/content-practice` point to where this repo will be published; they return 404 until then.

## Licence

- Text, images and docs: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](LICENSE) (CC BY-NC-SA 4.0).
- Code, scripts and fill-in templates: [MIT](LICENSE-CODE).

© 2026 Breno Bergamin (Breno Treviso)
