---
name: pm-jd-intake
description: Decode a product-management job description, score the uploaded resume's Current Match separately from its evidence-backed Projected Achievable Match, and decide whether resume tailoring is worth the user's time. Use for JD review, fit checks, apply-or-skip decisions, and pre-tailoring intake. Never rewrite the resume without explicit authorization.
---

# PM JD Intake

Determine whether truthful tailoring can materially improve interview-relevant résumé fit. Treat Match as résumé-to-JD evidence fit, not interview probability.

## Load inputs

Require:

1. The complete JD, pasted or provided as an exact file path.
2. The current résumé, in PDF, DOCX, Markdown, text, or HTML.

Optionally load a separate evidence file or user statements. Classify every supplemental claim as:

- `verified`: supported by a source the user identifies as authoritative;
- `user-confirmed`: explicitly confirmed by the user for this application;
- `unverified`: inferred, uncertain, planned, or contradicted.

Use the visible current résumé for Current Match. Use only `verified` and `user-confirmed` evidence for Projected Achievable Match. Never use `unverified` evidence in a score or draft.

Read these references completely before scoring:

- `references/decode-patterns.md`
- `references/match-rubric.md`
- `references/output-template.md`

## Decode once

1. Translate the JD into the person, problem, and deliverables the hiring manager actually needs.
2. Deduplicate requirements. Create 3–5 Must-haves, genuine Nice-to-haves, and 3–5 decisive Hidden Signals.
3. Label Must-haves only `Core` or `Regular`. Use IDs `M1…`, `N1…`, and `H1…` throughout.
4. Separate legal or true eligibility gates from preferences and opportunity-priority factors.
5. Write the three questions a recruiter or hiring manager must answer “yes” to after reading the résumé.

## Score Current and Projected

Apply `references/match-rubric.md` to the same requirements and weights twice:

- **Current Match:** use only evidence visible in the uploaded résumé.
- **Projected Achievable Match:** add only verified evidence that can realistically fit the résumé's existing structure without harming readability or displacing more important proof.

Allocate projected evidence to a plausible bullet or skills slot before awarding points. Do not count keyword swaps, planned learning, unfinished work, or evidence with unclear ownership. Report a range, never a single-point percentage.

## Return the decision brief

Follow `references/output-template.md`. Lead with:

- what the JD actually seeks;
- route and decisive reason;
- Current Match range and component scores;
- Projected Achievable Match and Tailoring Leverage;
- up to three high-value tailoring opportunities;
- up to three decision-limiting gaps.

Then provide the compact five-layer decode and the reproducibility table. Keep Match separate from location, compensation, company preference, application cost, and other opportunity-priority factors.

## Use the selective evidence gate

Generate one Interactive Intake Card only when both central scores satisfy:

- Current Match is `50–69%`;
- Projected Achievable Match is `70%+`.

Ask at most one question, only when the answer can change Core coverage, Projected Match, or evidence allocation. After the Card, stop. New evidence may change Projected Match but never Current Match until it is actually written into the résumé.

For other outcomes:

- Current already Strong/Direct: give the compact result and offer `Start Resume Tailoring`.
- Projected is Medium: let the user choose whether the opportunity is worth tailoring.
- Projected remains Weak/No Match: recommend no tailoring; allow only a near-zero-cost quick-apply exception.
- A true eligibility gate fails: return `KILL` and stop.

## Persist only after authorization

Do not modify the résumé or write a run file during ordinary Intake. Only after the user says `Start Resume Tailoring` or directly requests a rewrite:

1. Copy `references/run-template.md` to a user-selected job directory as `run.md`.
2. Embed the complete JD body in `run.md`, even when the original source was a URL or pasted chat message; also save its source, score ranges, requirement map, user-confirmed corrections, and Compact Tailoring Handoff.
3. Set state to `tailoring-authorized`.
4. Stop before drafting if the user has not yet authorized résumé changes.

Use one run directory per JD. During Intake, `run.md` is the only allowed persisted file; never write a draft, personal source file, shared tracker, preview, or PDF.
