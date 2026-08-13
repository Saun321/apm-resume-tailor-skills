# Reproducible Match Rubric

Score the résumé, not the candidate's theoretical potential.

## Evidence boundary

- Current Match uses only recruiter-visible evidence in the uploaded résumé.
- Projected Achievable Match adds only verified or user-confirmed evidence that fits a real résumé slot.
- Use the same deduplicated requirements and weights for both scores.
- Never count planned learning, unfinished artifacts, speculation, or evidence with unsafe ownership or causality.

## Requirement weights

- Core Must-have: `1.5`
- Regular Must-have: `1.0`
- Nice-to-have: `1.0` within its component
- Hidden Signal: `1.0` within its component

Do not split one capability into multiple requirements to inflate its weight.

## Per-item score

- `1.0` — direct, recent, specific evidence with a verifiable deliverable, scope, metric, or decision and sufficient ownership.
- `0.5` — adjacent evidence, incomplete detail, older evidence, or ownership below the JD's requirement.
- `0.0` — no visible usable evidence.

## Formula

```text
WeightedMust = Σ(requirement weight × evidence score) / Σ(requirement weights)
Nice = Σ(nice score) / number of Nice-to-haves
Hidden = Σ(hidden score) / number of selected Hidden Signals

Match = 0.6 × WeightedMust + 0.2 × Nice + 0.2 × Hidden
```

If the JD contains no genuine Nice-to-have, do not invent one or score it as perfect. Normalize:

```text
Match = 0.75 × WeightedMust + 0.25 × Hidden
```

## Caps and gates

Apply the lowest relevant cap after calculating the central score:

- Any Core Must-have at `0.0`: maximum `69%`.
- Exactly one Regular Must-have at `0.0`: maximum `75%`.
- Two or more Regular Must-haves at `0.0`: maximum `55%`.
- A true legal, credential, clearance, or incompatible seniority gate failure: report `25–35%`, route `KILL`.

Do not turn wish-list years, a generic tool, or industry preference into a gate without clear JD evidence.

## Range, band, and route

Report central score `±5` percentage points. Use `±8` only when the JD or evidence mapping is materially ambiguous, and explain why. A cap also caps the top of the range.

| Central score | Band | Default route |
|---:|---|---|
| `85%+` | Direct fit | Tailor carefully |
| `70–84%` | Strong match | Tailor |
| `55–69%` | Medium match | User decides |
| `40–54%` | Weak match | No tailoring |
| `<40%` | No match | Skip |

## Tailoring Leverage

Report the central-score delta and whether tailoring:

- moves the résumé up a band;
- moves a Core Must-have from `0.5` to `1.0`;
- materially reduces a screening concern;
- protects recognition of an already Strong/Direct fit.

Projected is an estimate. Call it Verified Tailored Match only after the actual résumé preview passes content and layout checks.

## Reproducibility table

Provide one row per scored item:

| ID | Requirement / weight | Current evidence / score | Projected evidence / score |
|---|---|---|---|

Show the formula inputs, caps, range width, and final band below the table.
