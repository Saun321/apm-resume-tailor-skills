import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import test from "node:test";

const friendRoot = new URL("../friend-package/APM-Resume-Tailor-Friend/", import.meta.url);
const skillPath = new URL("apm-resume-tailor/SKILL.md", friendRoot);
const bulletDesignPath = new URL("apm-resume-tailor/references/bullet-design.md", friendRoot);

test("friend share package contains Chinese onboarding and every required artifact", async () => {
  for (const relative of [
    "README.md",
    "workflow.drawio",
    "workflow.png",
    "apm-resume-tailor/SKILL.md",
    "apm-resume-tailor/references/bullet-design.md",
  ]) {
    assert.ok(existsSync(new URL(relative, friendRoot)), `Missing ${relative}`);
  }

  const readme = await readFile(new URL("README.md", friendRoot), "utf8");
  for (const phrase of ["只需两项输入", "完整 JD", "当前简历", "开始使用", "不会自动投递"]) {
    assert.match(readme, new RegExp(phrase, "i"));
  }
});

test("friend skill is standalone, evidence-safe, and uses the fast changed-bullet flow", async () => {
  const skill = await readFile(skillPath, "utf8");
  const bulletDesign = await readFile(bulletDesignPath, "utf8");

  for (const required of [
    "complete JD",
    "current résumé",
    "Suggested Decision",
    "Layer 1",
    "Layer 2",
    "Layer 3",
    "Current Match",
    "Tailored Match",
    "Core Evidence Changes",
    "Keyword Match",
    "internal Preview QA",
    "PDF",
    "references/bullet-design.md",
  ]) {
    assert.match(skill, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }

  for (const required of [
    "Delivery-led",
    "Decision-led",
    "Collaboration-led",
    "Workstream-led",
    "at least one truthful Decision-led bullet",
    "Maximum 30 English words",
    "never exceed two rendered lines",
    "Examples teach structure only",
    "【Point Change】",
    "&lt;keyword&gt;",
  ]) {
    assert.match(bulletDesign, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }

  const examples = new Map([
    ["Delivery-led", "Owned"],
    ["Decision-led", "Prioritized"],
    ["Collaboration-led", "Led"],
    ["Workstream-led", "Ran"],
  ]);

  for (const [route, verb] of examples) {
    const match = bulletDesign.match(new RegExp("- \\*\\*" + route + ":\\*\\* `([^`]+)`"));
    assert.ok(match, `${route} accepted example is missing`);
    assert.equal(match[1].replaceAll("**", "").split(/\s+/)[0], verb, `${route} must start with ${verb}`);
    assert.ok(match[1].replaceAll("**", "").trim().split(/\s+/).length <= 30, `${route} must be 30 words or fewer`);
  }

  for (const forbidden of [
    "Story Bank",
    "P2V",
    "run.md",
    "canonical résumé",
    "/Users/xinchen",
    "Complete Draft",
    "Material Change Log",
    "preview approval",
  ]) {
    assert.doesNotMatch(`${skill}\n${bulletDesign}`, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});

test("friend share package diagram is a simplified Chinese swimlane", async () => {
  const diagramPath = new URL("workflow.drawio", friendRoot);
  assert.ok(existsSync(diagramPath), "Missing friend workflow.drawio");
  const diagram = (await readFile(diagramPath, "utf8")).replaceAll("&amp;", "&");
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
  ]) {
    assert.ok(diagram.includes(label), `Missing ${label}`);
  }
  assert.doesNotMatch(diagram, /Complete Draft|Change Log|Preview approval|run\.md|manifest/i);
});

test("public skills use Decision-first changed-bullet workflow", async () => {
  const intake = await readFile(
    new URL("../skills/pm-jd-intake/SKILL.md", import.meta.url),
    "utf8",
  );
  const tailor = await readFile(
    new URL("../skills/resume-tailor/SKILL.md", import.meta.url),
    "utf8",
  );

  assert.ok(intake.indexOf("Suggested Decision") < intake.indexOf("Layer 1"));
  for (const phrase of ["Layer 1", "Layer 2", "Layer 3"]) {
    assert.ok(intake.includes(phrase), phrase);
  }
  for (const phrase of [
    "Core Evidence Changes",
    "Keyword Match",
    "optional approved Bullet Library",
    "internal Preview QA",
    "【Point Change】",
  ]) {
    assert.match(tailor, new RegExp(phrase, "i"));
  }
  for (const policy of [tailor, await readFile(skillPath, "utf8")]) {
    assert.match(policy, /\*\*【Point Change】\*\*\r?\n•/);
    assert.doesNotMatch(policy, /\*\*【Point Change】\*\*\r?\n\s*\r?\n•/);
    assert.match(policy, /&lt;[^&\n]+&gt;/);
    assert.doesNotMatch(policy, /<u>|<\/u>/i);
  }
  assert.doesNotMatch(
    `${intake}\n${tailor}`,
    /Story Bank|P2V|\/Users\/xinchen|Complete Draft|Material Change Log|preview approval/i,
  );
});

test("public diagram shows the generalized fast route", async () => {
  const diagramPath = new URL("../docs/apm-resume-tailor-flow.drawio", import.meta.url);
  assert.ok(existsSync(diagramPath), "Missing public draw.io source");
  const diagram = (await readFile(diagramPath, "utf8")).replaceAll("&amp;", "&");
  for (const label of [
    "Upload JD + Résumé",
    "Decision Card + 3-Layer Decode",
    "Tailor & Apply",
    "User Decides",
    "Changed-Bullet Discussion",
    "Approve Changes",
    "Internal QA",
    "Download PDF",
  ]) {
    assert.ok(diagram.includes(label), `Missing ${label}`);
  }
  assert.doesNotMatch(diagram, /Complete Draft|Approve Preview|Change Log/i);
});
