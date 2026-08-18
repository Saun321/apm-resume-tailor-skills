# Tailoring Run

- `job_key`:
- `company`:
- `role`:
- `state`: `discussion-ready`
- Allowed states: `intake-complete` → `discussion-ready` → `changes-approved` → `final`
- `last_updated`:

## Sources

- `jd_source`:
- `resume_source`:
- `verified_evidence_source`:
- `approved_bullet_library`: optional

## Exact JD snapshot

```text
<complete JD body>
```

## Intake decision

- `Suggested Decision`:
- `Current Match`:
- `Tailored Match`:
- `route`:

## Requirement map

| ID | Type | Capability | Current evidence / score | Tailored evidence / score |
|---|---|---|---|---|

## Compact Tailoring Handoff

- `Hiring mandate`:
- `Evidence priorities`:
- `Proof targets and sources`:
- `Ownership boundaries`:
- `Placement hypotheses`:
- `JD vocabulary`:

## Changed-content approval

- `discussion_status`: `pending`
- `approved_changes`:
- `changes_approved_at`:

## Artifacts

Before `changes-approved`, persist only this handoff and an optional lock.

- `resume_derivative`:
- `manifest`:
- `internal_preview`:
- `final_pdf`:
