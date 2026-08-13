# Tailoring Run

- `job_key`:
- `company`:
- `role`:
- `state`: `tailoring-authorized`
- Allowed states: `tailoring-authorized` → `draft-approved` → `preview-approved` → `final`
- `last_updated`:

## Sources

- `jd_source`:
- `resume_source`:
- `verified_evidence_source`:

## Exact JD snapshot

Paste the complete JD body here, even when the original source was a URL or chat message. Do not point back to a conversation that a fresh task cannot read.

```text
<complete JD body>
```

## Intake decision

- `Current Match`:
- `Projected Achievable Match`:
- `route`:

## Requirement map

| ID | Type | Requirement | Current evidence / score | Projected evidence / score |
|---|---|---|---|---|

## Compact Tailoring Handoff

- `Hiring mandate`:
- `Evidence priorities`:
- `Full gap scan`:
- `Proof targets and sources`:
- `Ownership boundaries`:
- `Placement hypotheses`:
- `Core blocker`:
- `JD vocabulary`:

## User-confirmed evidence

Label every entry `user-confirmed`, `TBV`, or `unsupported`.

## Structure and approvals

- `structure_policy`: preserve uploaded résumé structure unless explicitly approved otherwise
- `draft_status`: `pending`
- `preview_status`: `pending`
- `approved_build_hash`:

## Artifacts

Leave artifact paths empty until the Complete Draft is approved. Before approval, persist only `run.md` and `.active.lock`.

- `change_log`:
- `preview`:
- `final_pdf`:
