# Friend Share Package Design

## Goal

Create a lightweight package an APM applicant can use with only a current résumé and complete JD. It must explain the workflow in Chinese while keeping executable Skill instructions and bullet-writing policy in English.

## Package

```text
APM-Resume-Tailor-Friend/
├── README.md
├── workflow.drawio
├── workflow.png
└── apm-resume-tailor/
    ├── SKILL.md
    └── references/
        └── bullet-design.md
```

- `README.md`: concise Chinese setup, required inputs, starter prompt, approval flow, and output expectations.
- `workflow.drawio` and `workflow.png`: Chinese three-lane swimlane for User, Intake AI, and Tailor AI.
- `SKILL.md`: standalone English workflow; no Story Bank or experience library required.
- `bullet-design.md`: English bullet router, action-first and length rules, semantic bolding, `【Point Change】`, visible `<keyword>` annotations, and accepted examples.

## Workflow diagram

Keep only six stages:

1. 上传 JD + résumé
2. Suggested Decision + 三层 Decode
3. Tailor / User Decides / Skip-KILL
4. Changed Bullets discussion
5. 用户验收改动
6. Internal QA → PDF download

The diagram uses three lanes: 用户, JD Intake AI, and Resume Tailor AI. It omits run capsules, locks, evidence allocation, manifests, full-draft review, change logs, and preview approval.

## Bullet design boundary

- Default to Delivery-led; use Decision-led, Collaboration-led, and Workstream-led only when evidence supports the emphasis.
- Start every bullet with an action verb; target 22–28 words, maximum 30, and no more than two rendered lines.
- Use at most one semantic bold span and keep it in the first half when natural.
- Put `**【Point Change】**` directly above the candidate bullet with no blank line.
- Mark discussion-only keyword changes as visible `<keyword>` by emitting `&lt;keyword&gt;`; strip the brackets before final output.
- Examples teach structure only and never transfer their facts, ownership, or metrics to another user.

## Acceptance

- Chinese README is understandable without opening the Skill.
- English Skill works with only an uploaded résumé and complete JD.
- Bullet Design is a separate reference loaded by the Skill.
- Native draw.io source and PNG are both included.
- ZIP contains no macOS metadata and passes integrity validation.
