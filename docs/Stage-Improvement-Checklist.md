# Stage Improvement Checklist (Targeted Rewrite Plan)

This document provides a concrete rewrite checklist for stages that looked underdeveloped in the stage-depth comparison.

## How to Use

- Apply the checklist per guide-stage pair (for example: `loops` → `s5`).
- Keep the existing Bloom intent for each stage, but increase depth, practice variety, and assessment quality.
- Use this as a QA rubric after edits; each stage should pass all required checks.

---

## Priority 1 (Improve First)

### `loops.s5` (Evaluating)

Goal: strengthen decision-making quality (choosing the right loop/control pattern).

- **Mindset**
  - Add one explicit shift statement: "from fixing to judging alternatives."
  - Add one evaluation lens preview (clarity, correctness, maintainability).
- **Recap**
  - Add a compact contrast recap: `for` vs `while`, `break` vs condition-driven exit.
- **Core**
  - Add a decision matrix with at least 6 scenarios and recommended loop type.
  - Add at least 2 "good vs poor design" loop comparisons with rationale.
  - Add one section on readability trade-offs (`while True` + `break` vs explicit condition).
  - Add one section on testability (how to validate loop termination and boundaries).
- **Guided Practice**
  - Add 2 classification tasks (pick best loop and justify).
  - Add 1 code review task scoring alternatives by criteria.
- **Challenge**
  - Add 1 realistic review case with 3 candidate solutions.
  - Require a written recommendation with trade-offs and one refactor proposal.
- **Reflection**
  - Add prompts that force criteria-based self-justification, not preference.
- **Transition**
  - Add an explicit bridge to creation stage: "design choices become implementation patterns."

### `functions.s5` (Evaluating)

Goal: improve quality judgment around function design.

- **Mindset/Recap**
  - Emphasize shift from "making functions work" to "making interfaces clear."
- **Core**
  - Add rubric for function quality: naming, signature design, return behavior, side effects, cohesion.
  - Add examples comparing:
    - overly broad function vs focused function,
    - print-based function vs return-value function,
    - hidden dependency vs explicit parameter.
  - Add one section on readability and testability implications.
- **Guided Practice**
  - Add 2 "choose better function API" tasks with justification.
  - Add 1 mini refactor evaluation task.
- **Challenge**
  - Add one function review scenario with scoring rubric and rewrite requirement.
- **Reflection**
  - Include "what rule will you apply in your next function design?"

### `working-with-files.s4` (Analyzing)

Goal: deepen troubleshooting for file I/O failures.

- **Mindset**
  - Reframe errors as evidence (path, permissions, encoding, existence, mode).
- **Core**
  - Add error taxonomy table: `FileNotFoundError`, `PermissionError`, `IsADirectoryError`, encoding errors.
  - For each error include: symptom, likely causes, verification steps, fixes.
  - Add one diagnostic flow (path -> existence -> permissions -> mode -> encoding).
  - Add one "safe test setup" section using throwaway files/folders.
- **Guided Practice**
  - Add 3 staged debugging exercises (easy/medium/hard).
  - Include one scenario with multiple simultaneous faults.
- **Challenge**
  - Add a full troubleshooting case report task (student writes diagnosis + fix plan + verification evidence).
- **Reflection**
  - Add a reusable 5-step debugging routine prompt.

### `errors-and-exceptions.s4` (Analyzing)

Goal: increase depth in exception diagnosis patterns.

- **Core**
  - Add a structured exception analysis table (type, trigger, traceback cues, fix strategy).
  - Add traceback reading walkthrough with line-by-line interpretation.
  - Add "root cause vs symptom" examples.
  - Add one section on narrowing failure scope with minimal reproduction.
- **Guided Practice**
  - Add 3 traceback interpretation activities.
  - Add 1 classify-and-fix exercise (syntax vs runtime vs logic).
- **Challenge**
  - Add scenario where multiple exceptions appear across iterations and require prioritization.
- **Reflection**
  - Prompt students to describe their triage order for new exceptions.

### `working-with-files.s5` (Evaluating)

Goal: improve judgment about file-processing solution quality.

- **Core**
  - Add criteria: safety, reliability, readability, data integrity, failure handling.
  - Add "better/worse" comparisons for write strategies and error handling.
  - Add one section on when to validate inputs before opening files.
- **Guided Practice**
  - Add 2 rubric-based evaluations of alternative snippets.
- **Challenge**
  - Add recommendation memo task for choosing one of three file-processing designs.
- **Reflection**
  - Add criteria ranking prompt by context (school script vs production-like task).

### `errors-and-exceptions.s5` (Evaluating)

Goal: improve strategy selection for exception handling.

- **Core**
  - Add criteria for handling strategy quality: specificity, user feedback, recovery path, logging.
  - Compare broad `except` vs targeted exceptions with consequences.
  - Add section on balancing user-friendly messages with diagnostic detail.
- **Guided Practice**
  - Add 2 "pick best try/except structure" exercises.
- **Challenge**
  - Add code-review scenario requiring exception policy recommendation.
- **Reflection**
  - Prompt for a personal "exception handling checklist" to carry into future tasks.

### `loops.s6` (Creating)

Goal: strengthen capstone implementation depth and originality.

- **Core**
  - Expand project options to 3 complexity tiers with explicit scope boundaries.
  - Add required design brief template (goal, loop choices, stop conditions, tests).
  - Add at least 2 sample project architectures, not only templates.
- **Guided Practice**
  - Add planning worksheet with acceptance tests and edge cases.
- **Challenge**
  - Require final artifact + short design rationale + test evidence.
  - Add peer review checkpoint with one revision cycle.
- **Reflection**
  - Include prompts on trade-offs made and debugging decisions.

### `functions.s6` (Creating)

Goal: increase creation-stage rigor for modular design.

- **Core**
  - Add project requirements around decomposition (minimum function count, single-responsibility target).
  - Add interface contract expectations (inputs/outputs, return types, doc comments).
- **Guided Practice**
  - Add function plan sheet before coding (name, params, returns, side effects).
- **Challenge**
  - Require reusable mini-project with at least one controller function calling helpers.
  - Require one refactor pass after self-review.
- **Reflection**
  - Ask what changed after refactor and why.

---

## Priority 2 (Fix Local Gap)

### `python-install.s2` (Understanding)

Goal: reinforce conceptual understanding before application.

- **Core**
  - Add a clearer "how installation works internally" model:
    - installer actions,
    - PATH resolution,
    - terminal command lookup sequence.
  - Add one misconceptions section (`python` command vs Python language, PATH myths).
- **Guided Practice**
  - Add 2 predict-and-explain tasks (what happens if PATH is missing, wrong terminal folder, etc.).
  - Add one sequence reconstruction activity (step order and why).
- **Challenge**
  - Add one mini troubleshooting simulation that remains conceptual (no full hands-on yet).
- **Reflection**
  - Include one self-explanation prompt: "explain install flow to a classmate."

---

## Priority 3 (Validate Before Editing Content)

### `lists` and `collections` (all stages)

These guides appeared "short" mostly because of minified JSON formatting, so line-span is unreliable.

- **Required first step**
  - Reformat JSON (pretty-print) or run a structure-based metric pass before content decisions.
- **After normalization**
  - Re-run the same depth metrics used in the comparison.
  - Only then decide whether specific stages are genuinely underdeveloped.

---

## Minimum QA Gate (Per Stage After Rewrite)

Use this gate to keep stage depth and rigor consistent:

- At least **1 substantive core explanation block** beyond definitions.
- At least **2 interactive components** in guided/challenge combined.
- At least **1 applied or evaluative task** aligned to Bloom stage intent.
- At least **1 reflection prompt** that asks for reasoning (not only confidence).
- Clear **transition** that previews the next stage's cognitive shift.

For analyzing/evaluating stages specifically:

- Include at least **1 comparison table or rubric**.
- Include at least **1 scenario-based diagnosis/review** task.

For creating stages specifically:

- Include explicit **deliverable criteria** and **verification checklist**.
- Include at least **1 revision loop** (self-review or peer feedback).

