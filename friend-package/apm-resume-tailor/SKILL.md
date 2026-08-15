---
name: apm-resume-tailor
description: Decode a complete PM JD against a current résumé, show Current and Tailored Match in a Decision-first three-layer brief, discuss only changed bullets, and generate a PDF after one content approval. Use for APM fit checks, bullet improvement, ATS alignment, or JD-specific applications without a separate evidence archive.
---

# APM Resume Tailor

Require only:

1. a complete JD;
2. a current résumé in PDF, DOCX, HTML, Markdown, or text.

Optional inputs are user-confirmed evidence and an editable résumé template. Use résumé-visible evidence for Current Match. Use résumé-visible plus explicitly user-confirmed, slot-feasible evidence for Tailored Match. Treat inferred, uncertain, planned, contradicted, or example-derived claims as Unsupported.

Never invent or upgrade ownership, decision authority, delivery state, metrics, causality, scope, audience, technical depth, or product maturity.

## 1. Suggested Decision and three-layer Intake

Always output in this order:

```text
Suggested Decision: <TAILOR & APPLY / APPLY CURRENT RÉSUMÉ / USER DECIDES / QUICK APPLY / SKIP / KILL>
Current Match: <range and band>
Tailored Match: <range and band>
Reason: <one decisive sentence>
Next: <automatic discussion / wait / quick apply / stop>
```

### Layer 1 · JD Decode

Use 3–5 exact JD excerpts. Do not use list dashes. Put the capability decode directly below each quote:

```text
“<JD excerpt>”
【<Capability>】：<what the hiring manager needs and what it does not mean>.
```

### Layer 2 · Requirement Scorecard

Use IDs `Core M1`, `Must M2`, `Nice N1`, and `Hidden H1`. Keep ID and Capability in separate columns. Score `1 / 0.5 / 0`, weight Core Must-haves `1.5×`, and visibly mark every partial or missing score. Calculate the same requirement map for Current Match and Tailored Match.

### Layer 3 · Company & Product Research

Summarize company context, PM product and stage, users/growth/economics, PM responsibility, and why hire. For AI products, explain the application scenario, target user workflow, and problem solved rather than only naming a model.

After all three layers:

- Strong/Direct Tailored Match with real improvement → continue automatically to Tailoring Discussion.
- Medium or questionable upside → user decides.
- Weak → Quick Apply or Skip.
- true eligibility failure → KILL.

## 2. Tailoring Discussion

Show only changed content.

### Core Evidence Changes

```text
[M1 · H2] Experience #2 · Replace
M1【AI evaluation and release decisions】：0.5 → 1
H2【Decision-making under ambiguity】：0.5 → 1

调整方向：当前缺少 <missing capability>；改为 <truthful rewrite logic>。
Drop：<optional displaced bullet and justification>。
**【Point Change】**
• <final candidate bullet>
```

Omit Drop when nothing is removed. Put `**【Point Change】**` after the direction or optional Drop line, then put the candidate bullet on the immediately following line with no blank line. Leave one blank line before the next change.

### Keyword Match

Show keyword-only changed bullets and Skills adjustments. Enclose each changed phrase as visible `<keyword>` by emitting `&lt;keyword&gt;` in Markdown. Remove the angle-bracket wrappers from the final résumé while preserving their inner words.

```text
Experience #3：
• Led a product workstream using &lt;success criteria&gt; and &lt;release recommendations&gt;.

Skills：
Add：&lt;Product Roadmapping&gt;
Remove：&lt;low-value term&gt;
Reorder：move &lt;Experiment Design&gt; earlier.
```

The user may approve all, edit one bullet, reject a direction, or add evidence. Revise only affected blocks. Approval of every displayed change is final content approval.

## Bullet router

Start every achievement bullet with a concrete action verb. Never begin with `After`, `When`, `Because`, `Within`, or `Across`.

- **Delivery-led:** action → product delivery → problem solved → result. Use as the default.
- **Decision-led:** decision verb → chosen path over alternative → triggering problem → result. Use only for a verified choice or trade-off.
- **Collaboration-led:** led/partnered/aligned → collaborators → shared work or decision → effect.
- **Workstream-led:** ran/synthesized/analyzed/produced → bounded PM workstream → artifact or decision enabled → result.

When verified evidence exists, retain at least one truthful Decision-led bullet; one or two is a normal target. Also retain Collaboration-led and Workstream-led evidence when supported. These are directional goals, not quotas.

### Accepted examples

**Examples teach structure only. Never transfer their companies, products, facts, ownership, or metrics into another person's résumé.**

- **Delivery-led:** `Owned 0-to-1 development of **Creative Hook Refresh**, combining Seedance visual hooks and POV overlays to refresh live ads and combat creative fatigue, delivering ~5% advertiser-value uplift`
- **Decision-led:** `Prioritized **precision-first VLM rebuild** over URL parsing after wrong-product ad incident paused 30%+ of GenAI strategies; traded 20pp coverage for 95% Loose Accuracy and restored strategies in 3 weeks`
- **Collaboration-led:** `Led 20+ ML, Creative, and PM partners to calibrate evaluation across AI Video Remix’s product-understanding and storyline-planning models, improving information-quality and alignment SBS scores by 20pp`
- **Workstream-led:** `Ran customer interviews and competitive research for persona-driven post generation, synthesizing findings into **PRD and backlog updates** that increased draft adoption by 40%`

Shift emphasis without changing facts: foreground delivery for shipping-heavy JDs, chosen path for decision-heavy JDs, shared work for collaboration-heavy JDs, or bounded PM support for fundamentals-heavy roles.

## Bullet and bolding limits

- Target 22–28 English words. Maximum 30 English words.
- Target one to two rendered lines and never exceed two rendered lines.
- Keep one main product claim and one supported result.
- Use zero or one bold span, normally 3–8 words.
- Bold the key delivery, decision, capability, framework, or formal artifact—not the action verb, tool, collaborator count, or metric.
- Put the bold delivery in the first half when natural.

## 3. Internal Preview QA and PDF

After changed-content approval, create a derivative without overwriting the uploaded résumé. Remove discussion-only angle-bracket wrappers while preserving their inner words, render the actual preview, and perform internal Preview QA for page count, two-line bullets, bolding consistency, clipping, overlap, links, selectable text, and reading order.

If QA requires a material semantic change, return only the affected bullet. Otherwise generate the PDF directly and return a clickable link. If rendering tools are unavailable, state that limitation and return the approved changes without pretending a file exists.

Never submit or upload an application without a separate explicit request.

## Starter prompt

`Use $apm-resume-tailor. My current résumé is attached and the complete JD is below. Show Suggested Decision first, then the full three-layer Decode; continue automatically when tailoring can reach Strong or Direct.`
