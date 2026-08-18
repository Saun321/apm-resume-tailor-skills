# Intake, Tailor, and Bullet Library Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the public APM résumé skills, README, and English swimlane to show a decision-first Intake, human-reviewed bullet tailoring, PDF/ATS QA, and adopted-bullet reuse.

**Architecture:** Keep the existing two-skill boundary. Add one reusable Bullet Library reference owned by `resume-tailor`; update the public and friend-ready skills to search it before drafting and merge only final adopted wording after QA. Keep all examples synthetic and treat the library as wording memory rather than evidence.

**Tech Stack:** Markdown Agent Skills, Node.js test runner, draw.io XML, SVG, Git/GitHub CLI.

---

### Task 1: Lock the public behavior with focused tests

**Files:**
- Modify: `tests/friend-skill.test.mjs`

- [ ] Add assertions that README and skills explicitly cover JD Decode, Current Match, Tailored Match, bullet-centered human feedback, PDF generation, ATS QA, and adopted-bullet reuse.
- [ ] Add assertions that `skills/resume-tailor/references/bullet-library.md` exists, is loaded before drafting, is updated only after final adoption, and is never a fact source.
- [ ] Add assertions that public and friend examples contain no Saun-specific companies, products, project names, or metrics.
- [ ] Add diagram-label assertions for the Bullet Library search-and-save loop and ATS QA.
- [ ] Run `node --test tests/friend-skill.test.mjs` and verify the new assertions fail because the library loop and updated diagram are absent.

### Task 2: Implement the skills and Bullet Library design

**Files:**
- Create: `skills/resume-tailor/references/bullet-library.md`
- Modify: `skills/resume-tailor/SKILL.md`
- Modify: `skills/resume-tailor/references/evidence-policy.md`
- Modify: `skills/resume-tailor/references/bullet-policy.md`
- Modify: `skills/resume-tailor/references/layout-policy.md`
- Modify: `skills/pm-jd-intake/SKILL.md`
- Modify: `friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor/SKILL.md`
- Modify: `friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor/references/bullet-design.md`
- Create: `friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor/references/bullet-library.md`

- [ ] Add the compact Experience → Project → Tailor Focus / Approved Bullet table design and exact search/save rules.
- [ ] Require search-before-draft, evidence revalidation, human feedback, ATS/layout QA, and post-adoption narrow merge.
- [ ] Replace Saun-specific accepted examples with synthetic APM examples while preserving Delivery-, Decision-, Collaboration-, and Workstream-led teaching value.
- [ ] Keep `【Point Change】` adjacent to its bullet and one blank line between Core change blocks.
- [ ] Run the focused test and the Skill validator for both public skills; fix only failures caused by this update.

### Task 3: Improve README and English swimlane

**Files:**
- Modify: `README.md`
- Modify: `docs/apm-resume-tailor-flow.drawio`
- Modify: `docs/apm-resume-tailor-flow.svg`
- Modify: `friend-package/APM-Resume-Tailor-Friend/README.md`
- Modify: `friend-package/APM-Resume-Tailor-Friend/workflow.drawio`
- Modify: `friend-package/APM-Resume-Tailor-Friend/workflow.png`
- Regenerate: `dist/APM-Resume-Tailor-Friend.zip`

- [ ] Rewrite the README opening around the three approved strengths and add the Bullet Library format/reuse explanation.
- [ ] Update the editable English draw.io source with User, JD Intake AI, and Resume Tailor AI lanes and the complete feedback/library loop.
- [ ] Export the embedded editable SVG and update the friend-ready Chinese onboarding and simplified diagram consistently.
- [ ] Rebuild the friend ZIP from `friend-package/APM-Resume-Tailor-Friend/` so its README link remains valid.
- [ ] Run `node --test tests/friend-skill.test.mjs`, `git diff --check`, and a visual inspection of the exported diagram.

### Task 4: Publish with Git

**Files:**
- Stage only the files listed above plus the approved design and plan records.

- [ ] Inspect `git status -sb` and `git diff`; exclude unrelated files.
- [ ] Commit with a concise message such as `Strengthen intake-tailor library loop`.
- [ ] Push the current branch with `git push -u origin feat/apm-evidence-shape-router`.
- [ ] Create or update the branch's draft pull request and summarize tests and user impact.
