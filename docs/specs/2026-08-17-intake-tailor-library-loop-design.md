# Intake, Tailor, and Bullet Library Loop

**Status:** Approved for implementation

## Goal

Make the public skills explain and execute one reusable application loop:

1. decode the JD and separate Current Match from evidence-backed Tailored Match;
2. discuss only the résumé bullets and keyword changes that materially improve fit;
3. incorporate human corrections before building a PDF;
4. validate the final résumé for ATS readability and rendered layout;
5. save only adopted, materially distinct résumé-grade bullets so later tailoring can reuse stronger wording without treating the library as a fact source.

## Public workflow

Keep the existing two-skill boundary:

- `pm-jd-intake` owns JD Decode, requirement IDs, Current Match, Tailored Match, and routing.
- `resume-tailor` searches the optional Bullet Library, proposes changed bullets, incorporates human feedback, builds and validates the PDF, then merges adopted bullets into the library.

The English swimlane uses three lanes—User, JD Intake AI, and Resume Tailor AI—and shows the feedback loop from proposed bullets back to revision, plus the post-PDF loop into the Bullet Library.

## Bullet Library

Add one public reference describing a compact Markdown table grouped by Experience and Project:

| Tailor Focus | Approved Bullet |
|---|---|

Rules:

- Search by Experience, Project, and Tailor Focus before drafting from scratch.
- Treat every row as approved wording only, never independent proof.
- Revalidate claims against the uploaded résumé or verified evidence.
- Save only final adopted bullets that are materially different and résumé-ready.
- Skip keyword-only, punctuation, grammar, and light synonym variants.
- Merge narrowly without deleting unrelated entries.

## README and diagram

Lead with three strengths:

1. decision-first Intake with JD Decode, Current Match, and Tailored Match;
2. bullet-centered tailoring with human feedback, PDF generation, and ATS/layout QA;
3. an adopted-bullet memory loop that improves reuse across later applications.

Update both editable draw.io source and exported SVG. Keep the existing visual language and make the added library loop readable without adding implementation detail.

## Validation and publication

- Extend focused repository tests for README promises, swimlane labels, library safety, human feedback, PDF/ATS QA, and adopted-bullet reuse.
- Validate both public skills.
- Stage only files from this update; do not include the pre-existing deleted `dist/APM-Resume-Tailor-Friend.zip` unless separately requested.
- Commit on the current feature branch, push it, and create or update its draft pull request.
