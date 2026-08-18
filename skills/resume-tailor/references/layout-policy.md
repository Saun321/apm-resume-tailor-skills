# Internal Preview and PDF Layout Policy

Treat rendering as an internal acceptance gate after changed-content approval.

## Preserve by default

- Keep the uploaded résumé's page target, section order, and visual hierarchy unless the user approved a change.
- Reuse an uploaded HTML or document template when available.
- Change content before changing geometry.
- Remove discussion-only angle-bracket wrappers before rendering while preserving their inner keywords.

## Internal Preview QA

Inspect the actual rendered artifact for:

- each achievement bullet within the selected two-line limit;
- no clipping, overlap, orphan fragments, or awkward third-line wraps;
- consistent alignment, spacing, hierarchy, and semantic bolding;
- working links and readable contact details;
- the intended page count.

If QA requires a material change to meaning, ownership, scope, or result, return only that bullet for approval. Otherwise continue directly to PDF without another user gate.

## PDF and ATS checks

Confirm page size/count, selectable text, normal extraction and reading order, recognizable section headings, active links when supported, and final visual quality. Check that ATS extraction preserves the candidate name, section order, employers, titles, dates, and bullet text without raster-only content or garbled reading order. The page must not be a full-page raster. If rendering is unavailable, state the limitation and do not claim completion.
