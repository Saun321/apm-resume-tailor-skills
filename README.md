# APM Resume Tailor Skills

> Decide whether tailoring is worth it before rewriting anything. Then build an evidence-safe résumé through complete-draft, preview, and PDF approval gates.

Two small Agent Skills for product managers and adjacent product roles:

| Skill | Question it answers | Output |
|---|---|---|
| `pm-jd-intake` | Is this role a real match, and can truthful tailoring move it up a level? | Current Match, Projected Achievable Match, gaps, and route |
| `resume-tailor` | How should the approved résumé change without inventing evidence? | Complete draft, change log, optional preview, approved PDF |

## Why split the workflow?

Most résumé workflows begin rewriting as soon as they see a JD. That spends time even when the fit is weak and makes it easy to confuse keyword coverage with evidence.

This project separates two decisions:

```text
Uploaded JD + current résumé
          │
          ▼
     PM JD Intake
          │
          ├── Weak / failed gate ──► Skip or quick apply
          │
          ├── Medium ──────────────► User decides
          │
          └── Strong / Direct ─────► User authorizes tailoring
                                           │
                                           ▼
                                     Resume Tailor
                                           │
                              Complete draft approval
                                           │
                                      Preview approval
                                           │
                                           ▼
                                      Downloadable PDF
```

Current Match only uses what a recruiter can see in the uploaded résumé. Projected Achievable Match may add verified evidence, but only when it can fit a real résumé slot. The user—not the agent—decides whether to begin tailoring.

## Quick install

Clone the repository, then copy both skills into your agent's skills directory.

```bash
git clone https://github.com/Saun321/apm-resume-tailor-skills.git
cd apm-resume-tailor-skills

# Codex
cp -R skills/pm-jd-intake ~/.codex/skills/
cp -R skills/resume-tailor ~/.codex/skills/

# Claude Code
cp -R skills/pm-jd-intake ~/.claude/skills/
cp -R skills/resume-tailor ~/.claude/skills/
```

For another Agent-Skills-compatible tool, copy both folders into that tool's skills directory.

## Use it

### 1. Intake a JD

Upload or provide paths to your résumé and the full JD, then prompt:

```text
Use $pm-jd-intake to compare my current resume with this job description.
Separate Current Match from Projected Achievable Match and tell me whether tailoring is worth it.
```

Intake does not rewrite the résumé. When the route is worth pursuing, reply:

```text
Start Resume Tailoring.
```

The skill creates a small `run.md` handoff containing the authorized JD decision and evidence boundaries.

### 2. Tailor in the same or a fresh conversation

```text
Use $resume-tailor with <path-to-run.md>.
Give me the complete resume draft first. Do not create a preview until I approve the draft, and do not create a PDF until I approve the preview.
```

Each JD should use a different run directory. Different JDs can be handled in parallel. A small exclusive `.active.lock` prevents two writers from modifying the same `run.md`.

## Inputs

| Input | Required? | Role |
|---|---|---|
| Full JD | Yes | Requirements and role context |
| Current résumé | Yes | Current recruiter-visible evidence and default structure |
| Verified evidence file | Optional | Additional facts that may support Projected Match |
| HTML/document template | Optional | Reused for preview and PDF when available |

Supplemental claims are classified as `verified`, `user-confirmed`, or `unverified`. Unverified evidence, planned learning, invented metrics, and upgraded ownership never enter the score or résumé.

## Core behavior

- Reproducible `1 / 0.5 / 0` requirement scoring with Core Must-haves weighted `1.5`.
- Current Match and Projected Achievable Match use the same requirements and caps.
- Tailoring is recommended when it can produce meaningful screening improvement—not merely insert keywords.
- One main product claim per bullet; ownership, scope, metrics, causality, and launch state stay protected.
- Preserve the uploaded résumé's structure by default.
- Full-draft approval precedes preview; preview approval precedes PDF.
- PDF acceptance requires readable layout and selectable text.

## Repository structure

```text
skills/
├── pm-jd-intake/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/
│       ├── decode-patterns.md
│       ├── match-rubric.md
│       ├── output-template.md
│       └── run-template.md
└── resume-tailor/
    ├── SKILL.md
    ├── agents/openai.yaml
    ├── scripts/run-lock.mjs
    └── references/
        ├── bullet-policy.md
        ├── evidence-policy.md
        └── layout-policy.md

examples/
├── sample-jd.md
├── sample-resume.md
└── sample-verified-evidence.md
```

## Privacy and limitations

The repository contains no résumé data and does not require a hosted service. Your agent may still use its configured model or tools, so follow that product's privacy settings. The skills do not submit applications or guarantee interviews.

PDF rendering depends on the document tools available in your agent environment. If rendering is unavailable, the skill must return the approved draft and explain the missing capability instead of pretending a PDF exists.

## Acknowledgment

The simple two-skill packaging was inspired by [vignzpie/resume-agent-skills](https://github.com/vignzpie/resume-agent-skills). This project adds a separate pre-tailoring decision gate, reproducible Current versus Projected scoring, and user-controlled draft/preview/PDF approvals.

## License

MIT
