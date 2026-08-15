---
name: apm-resume-tailor
description: Decode a complete PM JD against a current résumé, show Current and Tailored Match in a decision-first three-layer brief, discuss only changed bullets, and generate a PDF after one content approval. Use for APM fit checks, evidence-safe bullet improvement, ATS alignment, and JD-specific applications without requiring a prior experience library.
---

# APM Resume Tailor

Require only:

1. a complete JD;
2. a current résumé in PDF, DOCX, HTML, Markdown, or text.

Optional inputs are user-confirmed evidence and an editable résumé template. Use résumé-visible evidence for Current Match. Use résumé-visible plus explicitly user-confirmed, slot-feasible evidence for Tailored Match. Treat inferred, uncertain, planned, contradicted, or example-derived claims as Unsupported.

Never invent or upgrade ownership, decision authority, delivery state, metrics, causality, scope, audience, technical depth, or product maturity.

Before drafting any résumé bullet, read `references/bullet-design.md` completely.

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

Use 3–5 exact JD excerpts. Put the capability translation directly below each quote without a list dash:

```text
“<JD excerpt>”
【<Capability>】：<what the hiring manager needs and what it does not mean>.
```

### Layer 2 · Requirement Scorecard

Use IDs `Core M1`, `Must M2`, `Nice N1`, and `Hidden H1`. Keep ID and Capability in separate columns. Score `1 / 0.5 / 0`, weight Core Must-haves `1.5×`, and visibly mark every partial or missing score. Calculate Current Match and Tailored Match from the same requirement map.

### Layer 3 · Company & Product Research

Summarize company context, PM product and stage, users/growth/economics, PM responsibility, and why hire. For AI products, explain the application scenario, target user workflow, and problem solved rather than only naming a model.

After all three layers:

- Strong/Direct Tailored Match with meaningful improvement → continue automatically.
- Medium or questionable upside → let the user decide.
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

Omit Drop when nothing is removed. Keep `**【Point Change】**` and the bullet on adjacent lines with no blank line. Leave one blank line before the next change.

### Keyword Match

Show keyword-only changed bullets and Skills adjustments. Render each changed phrase as visible `<keyword>` by emitting `&lt;keyword&gt;` in Markdown. Remove the angle-bracket wrappers from the final résumé while preserving the inner words.

```text
Experience #3：
• Led a product workstream using &lt;success criteria&gt; and &lt;release recommendations&gt;.

Skills：
Add：&lt;Product Roadmapping&gt;
Remove：&lt;low-value term&gt;
Reorder：move &lt;Experiment Design&gt; earlier.
```

The user may approve all, edit one bullet, reject a direction, or add evidence. Revise only affected blocks. Approval of every displayed change is final content approval.

## 3. Internal Preview QA and PDF

After changed-content approval:

1. create a derivative without overwriting the uploaded résumé;
2. apply only approved changes and preserve everything else;
3. remove discussion-only angle-bracket wrappers while preserving their inner words;
4. render and inspect the actual preview for page count, two-line bullets, bolding consistency, clipping, overlap, links, selectable text, and reading order;
5. return only an affected bullet if QA requires a material semantic change; otherwise continue automatically;
6. generate the PDF from the validated build and return a clickable link.

If rendering tools are unavailable, state the limitation and return the approved changes without pretending a file exists. Never submit or upload an application without a separate explicit request.

## Starter prompt

`Use $apm-resume-tailor. My current résumé is attached and the complete JD is below. Show Suggested Decision first, then the full three-layer Decode; continue automatically when truthful tailoring can reach Strong or Direct.`
