---
name: pm-jd-intake
description: Decode a product-management JD, score Current Match separately from evidence-backed Tailored Match, show a Decision-first three-layer brief, and route to automatic changed-bullet discussion, user choice, Quick Apply, Skip, or KILL. Use for JD review, fit checks, and apply-or-tailor decisions.
---

# PM JD Intake

Determine whether truthful tailoring can materially improve résumé recognition. Match is résumé-to-JD evidence fit, not interview probability.

## Load inputs

Require the complete JD and current résumé. Optionally load a verified evidence file or facts the user confirms in the current conversation. Classify supplemental claims as `verified`, `user-confirmed`, or `unverified`; never score or write `unverified` evidence.

Read completely:

- `references/decode-patterns.md`
- `references/match-rubric.md`
- `references/output-template.md`

## Decode and score once

1. Translate the JD into the person, problem, capabilities, and deliverables the hiring manager needs.
2. Deduplicate requirements into 3–5 Core/Regular Must-haves, genuine Nice-to-haves, and 3–5 decisive Hidden Signals.
3. Reuse IDs `M1…`, `N1…`, and `H1…` across scoring and tailoring.
4. Separate true eligibility gates from preferences and opportunity-priority factors.
5. Score the same map twice using `1 / 0.5 / 0` and Core `1.5×` weighting:
   - Current Match uses only résumé-visible evidence.
   - Tailored Match adds only verified, slot-feasible evidence.

Do not award points for keyword swaps, planned learning, unclear ownership, or content that cannot fit the selected résumé format.

## Render Decision first, then all three layers

Follow `references/output-template.md` in this exact order:

1. `Suggested Decision` with Current Match, Tailored Match, one decisive reason, and next step.
2. `Layer 1 · JD Decode`: exact JD quote followed immediately by `【Capability】：` hiring translation; no list dash.
3. `Layer 2 · Requirement Scorecard`: one table for Core Must, Must, Nice, and Hidden; keep ID and Capability in separate columns and visibly mark every lost point.
4. `Layer 3 · Company & Product Research`: company context, PM product, users/growth/economics, responsibility, and why hire. For AI products, describe the application scenario, user workflow, and problem solved rather than only naming a model.

Always show all three layers, including Quick Apply, Skip, and KILL routes.

## Route

- `TAILOR & APPLY`: Tailored Match is Strong/Direct and at least one truthful evidence or keyword change improves recognition, Core coverage, or application quality. Continue automatically to the `resume-tailor` discussion.
- `APPLY CURRENT RÉSUMÉ`: Current is already strong and no useful change exists.
- `USER DECIDES`: Tailored Match remains Medium or upside is questionable. Stop after Layer 3; continue only if the user asks.
- `QUICK APPLY / SKIP`: Tailored Match remains Weak or the time investment is not justified.
- `KILL`: a true eligibility gate fails; wording cannot repair it.

For a durable or fresh-conversation handoff, copy `references/run-template.md` into a user-selected job directory, embed the exact JD, and set state `discussion-ready`. Intake never creates résumé derivatives, previews, or PDFs.
