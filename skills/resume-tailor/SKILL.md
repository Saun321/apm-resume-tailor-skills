---
name: resume-tailor
description: Tailor an uploaded product-management resume for an already-approved JD using a persisted Intake handoff and only verified evidence. Use after PM JD Intake when the user has explicitly authorized tailoring and wants a complete draft, HTML or image preview, and approval-gated PDF. Preserve truthful ownership and the uploaded structure by default.
---

# Resume Tailor

Move one approved application through **Evidence Allocation → Complete Draft → Preview → PDF**. Do not rescore the opportunity or restart Intake.

## Require the handoff

Load:

1. The current job's `run.md`, created from the PM JD Intake run template.
2. The exact JD or immutable snapshot named by the run.
3. The uploaded résumé named by the run.
4. Only the evidence sources named by the run.

Require state `tailoring-authorized` or later. If the handoff is missing, stale, or not authorized, stop and run `pm-jd-intake` first. In a fresh conversation, reconstruct state only from these files; do not depend on prior chat.

Read these references before drafting:

- `references/evidence-policy.md`
- `references/bullet-policy.md`
- `references/layout-policy.md`

Use one writer per run directory. At the start, run `node <this-skill>/scripts/run-lock.mjs claim <run-directory> <task-or-thread-id>`. If the exclusive `.active.lock` already exists, stop and report its owner; never overwrite or automatically clear a stale lock. Release it with the same owner ID after final completion or explicit cancellation. Treat the original résumé and evidence files as read-only.

## Allocate evidence

1. Map the 4–6 highest-value M/N/H requirements to existing résumé slots.
2. Use experience bullets as the primary Must-have proof. Use projects only when they fill a real gap and do not imply production ownership.
3. Give each bullet one main product claim. Avoid repeating the same PM category across multiple bullets.
4. Preserve the uploaded résumé's sections, order, page target, and bullet allocation by default. Propose a structural trade only when it materially improves Core coverage, and require explicit approval before applying it.
5. Ask at most one proactive question, only when the answer changes Core coverage or a material structure trade. If unanswered, use the safer supported claim and continue.

Apply the ownership and evidence rules in `references/evidence-policy.md`. Keep routine keyword, grammar, compression, skills-order, and bold changes silent. Surface only evidence additions, replacements, splits, merges, deletions, ownership/scope/causality changes, structural trades, or unresolved Core gaps.

## Deliver the Complete Draft

Return one whole-draft review in this order:

1. `Draft Strategy`: requirement allocation and any approved structure decision.
2. `Full Résumé Draft`: every section and bullet, not only changed lines.
3. `Material Change Log`: 2–4 important judgments with original, final, source locator, and rationale.
4. Optional `Remaining Core Gap`: only when it can still change the application decision.

Show the Complete Draft in chat. Before the user approves it, persist only `run.md` and `.active.lock`; do not create a draft file, change log, HTML, résumé snapshot, manifest, screenshot, or PDF. After approval, update `run.md` to `draft-approved`.

## Create the preview

After draft approval:

1. Create a job-specific derivative; never overwrite the uploaded résumé.
2. Reuse an uploaded HTML template when available. Otherwise create the simplest accessible print-ready HTML or document format supported by the environment.
3. Apply only the approved content. Do not change typography, margins, or spacing merely to hide overflow.
4. Render and inspect the actual preview using `references/layout-policy.md`.
5. Show the preview and state clearly that the final PDF has not been generated.

After preview approval, update `run.md` to `preview-approved` and record a build hash or exact artifact identity.

## Generate the PDF

Only after preview approval:

1. Generate the PDF from the approved build.
2. Re-run text, page, overflow, link, and visual checks.
3. Ensure the PDF contains selectable text and normal reading order; never use a full-page raster as the résumé.
4. Update `run.md` to `final` and record the final artifact paths.
5. Return the final preview and a clickable PDF link.
6. Release `.active.lock` with the same owner ID.

Never submit an application, upload the résumé to a job site, or imply submission without a separate explicit request.
