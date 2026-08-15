# Friend Share Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Chinese-onboarding, English-Skill APM résumé-tailoring package containing a README, standalone Skill, separate bullet-design reference, editable Chinese swimlane, PNG, and clean ZIP.

**Architecture:** Keep onboarding and visualization at the package root while placing executable English instructions under `apm-resume-tailor/`. Move detailed bullet patterns out of `SKILL.md` into one directly referenced file so first-use context stays small. Validate the package through the existing public Node test and archive integrity checks.

**Tech Stack:** Markdown Agent Skills, draw.io mxGraph XML, SVG/PNG rendering, Node test runner, ZIP.

---

### Task 1: Lock the share-package contract

**Files:**
- Modify: `tests/friend-skill.test.mjs`
- Test: `tests/friend-skill.test.mjs`

- [ ] **Step 1: Point the test at the new package and assert every required artifact**

Add assertions equivalent to:

```js
const friendRoot = new URL("../friend-package/APM-Resume-Tailor-Friend/", import.meta.url);
const required = [
  "README.md",
  "workflow.drawio",
  "workflow.png",
  "apm-resume-tailor/SKILL.md",
  "apm-resume-tailor/references/bullet-design.md",
];
for (const relative of required) {
  assert.ok(existsSync(new URL(relative, friendRoot)), `Missing ${relative}`);
}
```

Assert that the Chinese README contains `只需两项输入`, `完整 JD`, `当前简历`, `开始使用`, and `不会自动投递`; the Skill references `references/bullet-design.md`; and Bullet Design contains all four routers, `【Point Change】`, `&lt;keyword&gt;`, the 30-word/two-line limits, semantic bolding, and the accepted examples.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test --test-name-pattern='friend share package' tests/friend-skill.test.mjs`

Expected: FAIL because the new package files do not exist.

### Task 2: Create the Chinese README and English Skill assets

**Files:**
- Create: `friend-package/APM-Resume-Tailor-Friend/README.md`
- Create: `friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor/SKILL.md`
- Create: `friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor/references/bullet-design.md`
- Delete after replacement is verified: `friend-package/apm-resume-tailor/SKILL.md`

- [ ] **Step 1: Write the Chinese README**

Use this exact section order:

```markdown
# APM Resume Tailor 好友分享版
## 你需要准备什么
## 开始使用
## 你会看到什么
## 如何和 AI 讨论 bullet
## 文件说明
## 边界
```

State that the only required inputs are a current résumé and complete JD; include one copyable starter prompt; explain `【Point Change】` and rendered `<keyword>` annotations; and state that the Skill never invents evidence, guarantees interviews, or submits applications.

- [ ] **Step 2: Create the concise standalone English Skill**

Keep Intake, routing, changed-bullet approval, internal QA, and PDF behavior in `SKILL.md`. Add this required read:

```markdown
Before drafting any résumé bullet, read `references/bullet-design.md` completely.
```

Do not require Story Bank, P2V, run capsules, private paths, or a prior experience library.

- [ ] **Step 3: Create the English Bullet Design reference**

Include:

```markdown
# APM Bullet Design
## Router
### Delivery-led
### Decision-led
### Collaboration-led
### Workstream-led
## Mechanical limits
## Bolding
## Discussion annotations
## Accepted examples
```

Preserve the four already approved examples, require action-first construction, target 22–28 words with a hard 30-word/two-line ceiling, require at least one truthful Decision-led bullet when evidence supports it, and prohibit transferring example facts or metrics.

- [ ] **Step 4: Run the focused test and Skill validator**

Run:

```bash
node --test --test-name-pattern='friend share package' tests/friend-skill.test.mjs
python3 /Users/xinchen/.codex/skills/.system/skill-creator/scripts/quick_validate.py friend-package/APM-Resume-Tailor-Friend/apm-resume-tailor
```

Expected: text/Skill assertions PASS; diagram assertions remain pending until Task 3.

### Task 3: Create the simplified Chinese swimlane

**Files:**
- Create: `friend-package/APM-Resume-Tailor-Friend/workflow.drawio`
- Create: `friend-package/APM-Resume-Tailor-Friend/workflow.png`
- Modify: `tests/friend-skill.test.mjs`

- [ ] **Step 1: Add the diagram-content test**

Read `workflow.drawio` and assert these labels:

```js
for (const label of [
  "用户",
  "JD Intake AI",
  "Resume Tailor AI",
  "上传 JD + résumé",
  "Suggested Decision + 三层 Decode",
  "讨论改写后的 bullets",
  "验收全部改动",
  "Internal QA",
  "下载 PDF",
]) assert.ok(diagram.includes(label), `Missing ${label}`);
```

Also reject `Complete Draft`, `Change Log`, `Preview approval`, `run.md`, and `manifest`.

- [ ] **Step 2: Run the diagram test and verify RED**

Run: `node --test --test-name-pattern='friend share package diagram' tests/friend-skill.test.mjs`

Expected: FAIL because the diagram does not exist.

- [ ] **Step 3: Generate the native draw.io source**

Create three horizontal lanes and six compact stages. Use blue for user actions, purple for Intake judgment, green for Tailor execution, yellow for the single user decision, and red only for Skip/KILL. Keep the diagram under 1600×650 and route arrows left-to-right without crossings.

- [ ] **Step 4: Render and inspect the PNG**

Export the same diagram to `workflow.png`. Verify readable Chinese labels, uncropped title/lanes, no overlapping edges, and no extra technical nodes.

- [ ] **Step 5: Run XML and package tests**

Run:

```bash
xmllint --noout friend-package/APM-Resume-Tailor-Friend/workflow.drawio
node --test tests/friend-skill.test.mjs
```

Expected: PASS.

### Task 4: Build and publish the clean share ZIP

**Files:**
- Create: `dist/APM-Resume-Tailor-Friend.zip`
- Modify: `README.md`
- Remove after new archive passes: `dist/apm-resume-tailor-friend.zip`

- [ ] **Step 1: Update the repository README download link**

Point the friend-package link to `dist/APM-Resume-Tailor-Friend.zip` and state that it contains the Chinese guide, Chinese swimlane, English Skill, and Bullet Design reference.

- [ ] **Step 2: Create the ZIP without metadata**

From `friend-package/`, run:

```bash
zip -r -FS -X ../dist/APM-Resume-Tailor-Friend.zip APM-Resume-Tailor-Friend
```

- [ ] **Step 3: Verify archive contents and integrity**

Run:

```bash
unzip -t dist/APM-Resume-Tailor-Friend.zip
unzip -l dist/APM-Resume-Tailor-Friend.zip
node --test tests/friend-skill.test.mjs
```

Expected: README, draw.io, PNG, Skill, and Bullet Design are present; no `__MACOSX` or `.DS_Store`; all tests PASS.

- [ ] **Step 4: Commit and push**

Stage only the friend package, archive, public README, tests, and this plan. Commit with:

```bash
git commit -m "Package friend-ready APM resume skill"
git push origin feat/apm-evidence-shape-router
```
