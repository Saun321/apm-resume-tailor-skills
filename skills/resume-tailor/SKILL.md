---
name: resume-tailor
description: Turn an accepted PM JD into a compact changed-bullet discussion using verified evidence, then treat approved changes as final content approval, run internal Preview QA, and generate a downloadable PDF. Use after PM JD Intake or when the user explicitly requests tailoring.
---

# Resume Tailor

Use **Core Evidence Changes + Keyword Match → changed-content approval → internal Preview QA → PDF**. Do not rescore the opportunity or repeat unchanged résumé content.

## Load the handoff and sources

Load the current job handoff, exact JD, current résumé, and only the verified evidence sources named by the handoff. An optional approved Bullet Library may accelerate wording selection, but it is never required and never becomes a fact source.

Read completely:

- `references/evidence-policy.md`
- `references/bullet-policy.md`
- `references/bullet-library.md`
- `references/layout-policy.md`

Use one writer per job directory. If the included lock script is used, claim the directory before writing and release it after final completion. Treat the source résumé, evidence files, and optional library as read-only.

## Allocate internally

Search the Bullet Library before drafting by Experience, Project, and Tailor Focus. Revalidate every candidate against current authoritative evidence. Reuse approved wording when it fits; otherwise draft from verified evidence. Never turn library wording into new evidence.

Map the highest-value M/N/H requirements to existing résumé slots. Preserve sections, entry order, page target, and bullet allocation by default. Propose a structural trade only when it materially improves Core coverage, explain any displaced content, and require approval of the changed bullet set before applying it.

Ask at most one question, only when the answer changes Core coverage or a material structure trade. Otherwise use the safer supported claim and continue.

## 1. Tailoring Discussion

Output exactly two sections.

### Core Evidence Changes

```text
[M1 · H2] Experience #2 · Replace
M1【AI evaluation and release decisions】：0.5 → 1
H2【Decision-making under ambiguity】：0.5 → 1

调整方向：当前缺少 <missing capability evidence>；改为 <truthful rewrite logic>。
Drop：<optional displaced bullet and why it is safe to remove>。
**【Point Change】**
• <final candidate bullet>
```

Omit `Drop` when nothing is removed. Put `**【Point Change】**` after the direction or optional Drop line, then put the candidate bullet on the immediately following line with no blank line. Leave one blank line before the next change block. Do not show internal allocation or router labels.

Candidate bullets must start with an action word, target 22–28 English words, never exceed 30 words or two rendered lines, preserve ownership and metrics, bold one high-value delivery/decision/capability when supported, and include a defensible result when available.

### Keyword Match

Show full bullets changed only through ordinary JD vocabulary. Enclose each changed phrase as visible `<keyword>` by emitting `&lt;keyword&gt;` in Markdown. Remove the angle-bracket wrappers from the final résumé while preserving their inner words.

```text
Experience #3：
• Led a cross-functional evaluation workstream, defining &lt;success criteria&gt;, &lt;bad-case taxonomy&gt;, and &lt;release recommendations&gt;.

Skills：
Add：&lt;Product Roadmapping&gt;, &lt;AI Evaluation&gt;
Remove：&lt;outdated or low-value term&gt;
Reorder：move &lt;Experiment Design&gt; earlier.
```

Keep lines inside one entry adjacent; use one blank line only between entries. Keyword changes cannot invent evidence, ownership, tools, or metrics.

Invite human feedback: approve all, modify one bullet, reject a direction, or add evidence. Update only affected blocks. Approval of every displayed material bullet, keyword-only bullet, and Skills change is final content approval; set state `changes-approved`.

## 2. Internal Preview QA and PDF

After state `changes-approved`:

1. create a derivative without overwriting the uploaded résumé;
2. apply only approved changes and preserve everything else;
3. strip discussion-only angle-bracket wrappers while preserving their inner words;
4. render and inspect the actual preview using `references/layout-policy.md`;
5. if QA requires a material semantic change, return only the affected bullet for approval; otherwise continue automatically;
6. generate the PDF from the validated build and run ATS plus layout QA: page count, selectable text, reading order, section parsing, links, overflow, and visual integrity;
7. after QA passes, save adopted bullets to the optional Bullet Library only when they are human-approved and materially distinct; merge narrowly without changing unrelated rows;
8. return a clickable PDF link and set state `final`.

If the environment cannot render or inspect a PDF, return the approved changed content and state the missing capability. Never pretend a file exists. Never submit or upload an application without a separate explicit request.
