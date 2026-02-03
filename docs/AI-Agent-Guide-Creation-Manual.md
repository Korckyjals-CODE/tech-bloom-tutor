# AI Agent Guide: Creating JSON Learning Guides

## Overview

This guide provides comprehensive instructions for AI agents to create high-quality, interactive learning guides in JSON format. These guides follow Bloom's Taxonomy and are designed to take students from zero knowledge to mastery through seven progressive stages.

## Table of Contents

1. [JSON Structure Overview](#json-structure-overview)
2. [Metadata and Branding](#metadata-and-branding)
3. [Stages Framework](#stages-framework)
4. [Section Types](#section-types)
5. [Component Types](#component-types)
6. [Stage-by-Stage Guidelines](#stage-by-stage-guidelines)
7. [Quality Standards](#quality-standards)
8. [Common Patterns and Best Practices](#common-patterns-and-best-practices)
9. [Validation Checklist](#validation-checklist)

---

## JSON Structure Overview

Every guide follows this top-level structure:

```json
{
  "metadata": { ... },
  "branding": { ... },
  "stages": [ ... ],
  "sections": [ ... ],
  "content": {
    "s0": { ... },
    "s1": { ... },
    "s2": { ... },
    "s3": { ... },
    "s4": { ... },
    "s5": { ... },
    "s6": { ... }
  },
  "ui": { ... }
}
```

### Key Principles

1. **Progressive Complexity**: Each stage builds on the previous one, increasing in cognitive demand
2. **Multiple Learning Modalities**: Use text, code examples, interactive activities, visual tasks, and reflection
3. **Real-World Context**: Always connect concepts to practical, relatable examples
4. **Depth Over Breadth**: Each section should be comprehensive, not superficial
5. **Scaffolded Learning**: Provide guidance that gradually fades as students progress

---

## Metadata and Branding

### Metadata Section

```json
"metadata": {
  "title": "Clear, Descriptive Title",
  "subtitle": "Supporting description or tagline",
  "description": "Comprehensive description of what the guide teaches",
  "version": "1.0.0",
  "author": "Organization Name",
  "lastUpdated": "YYYY-MM-DD",
  "storageKeyPrefix": "unique_identifier",
  "instructorPasscode": "secure_code",
  "order": 1
}
```

**Guidelines:**
- Title should be specific and action-oriented
- Subtitle provides context or scope
- Description should be 1-2 sentences explaining the learning outcome
- `storageKeyPrefix` should be lowercase with underscores (e.g., `python_install`, `first_script`)
- `order` is an integer indicating the guide's position in the learning path (1 = first). Set it so the guide appears in the correct place in the guide selector; new guides should use the next number in the curriculum sequence.

### Branding Section

```json
"branding": {
  "brandName": "Display Name — Guide",
  "theme": {
    "colorScheme": "dark",
    "primaryColor": "#4aa3ff",
    "secondaryColor": "#7bc67b"
  }
}
```

**Guidelines:**
- Use consistent color scheme across guides
- Primary color for main actions/headings
- Secondary color for accents/highlights

---

## Stages Framework

All guides use seven stages based on Bloom's Taxonomy:

```json
"stages": [
  {
    "id": "s0",
    "order": 0,
    "title": "Stage 0 · Starting",
    "shortTitle": "Starting",
    "description": "Introduction and initial exposure to the topic"
  },
  {
    "id": "s1",
    "order": 1,
    "title": "Stage 1 · Remembering",
    "shortTitle": "Remembering",
    "description": "Recall basic facts and concepts"
  },
  {
    "id": "s2",
    "order": 2,
    "title": "Stage 2 · Understanding",
    "shortTitle": "Understanding",
    "description": "Explain ideas and concepts"
  },
  {
    "id": "s3",
    "order": 3,
    "title": "Stage 3 · Applying",
    "shortTitle": "Applying",
    "description": "Use information in new situations"
  },
  {
    "id": "s4",
    "order": 4,
    "title": "Stage 4 · Analyzing",
    "shortTitle": "Analyzing",
    "description": "Draw connections and distinguish between parts"
  },
  {
    "id": "s5",
    "order": 5,
    "title": "Stage 5 · Evaluating",
    "shortTitle": "Evaluating",
    "description": "Justify decisions and compare solutions"
  },
  {
    "id": "s6",
    "order": 6,
    "title": "Stage 6 · Creating",
    "shortTitle": "Creating",
    "description": "Produce original work and synthesize knowledge"
  }
]
```

**Stage Descriptions:**
- **s0 (Starting)**: Hook, motivation, initial exposure
- **s1 (Remembering)**: Vocabulary, basic facts, terminology
- **s2 (Understanding)**: How things work, relationships, processes
- **s3 (Applying)**: Step-by-step execution, hands-on practice
- **s4 (Analyzing)**: Troubleshooting, problem-solving, error analysis
- **s5 (Evaluating)**: Criteria, comparisons, judgment, recommendations
- **s6 (Creating)**: Original projects, teaching others, synthesis

---

## Section Types

Each stage contains seven section types in this order:

```json
"sections": [
  {
    "id": "mindset",
    "displayName": "Mindset",
    "order": 0,
    "description": "Prepare mentally and set expectations"
  },
  {
    "id": "recap",
    "displayName": "Recap",
    "order": 1,
    "description": "Review previous concepts or introduce context"
  },
  {
    "id": "core",
    "displayName": "Core",
    "order": 2,
    "description": "Present main content and key concepts"
  },
  {
    "id": "guidedPractice",
    "displayName": "Guided Practice",
    "order": 3,
    "description": "Practice with guidance and scaffolding"
  },
  {
    "id": "challenge",
    "displayName": "Challenge",
    "order": 4,
    "description": "Apply knowledge independently"
  },
  {
    "id": "reflection",
    "displayName": "Reflection",
    "order": 5,
    "description": "Think about learning and understanding"
  },
  {
    "id": "transition",
    "displayName": "Transition",
    "order": 6,
    "description": "Prepare for next stage"
  }
]
```

### Section Purpose

1. **mindset**: Sets expectations, shifts perspective, prepares for learning
2. **recap**: Connects to prior knowledge or reviews previous stage
3. **core**: Main instructional content (MOST IMPORTANT - needs depth)
4. **guidedPractice**: Scaffolded practice with support
5. **challenge**: Independent application, creative tasks
6. **reflection**: Metacognition, self-assessment, readiness check
7. **transition**: Preview next stage, summarize progress, build anticipation

---

## Component Types

Each section contains a `heading` and `components` array. Components can be:

### 1. Text Component

```json
{
  "type": "text",
  "content": "Markdown-formatted text content"
}
```

**Use for:**
- Explanations, instructions, context
- Supports Markdown: **bold**, *italic*, lists, code blocks

### 2. Code Component

```json
{
  "type": "code",
  "language": "python",
  "content": "print('Hello, World!')",
  "copyable": true
}
```

**Use for:**
- Code examples, commands, scripts
- Set `copyable: true` for code students should copy
- Set `copyable: false` for examples to analyze

### 3. Short Answer Component

```json
{
  "type": "shortAnswer",
  "prompt": "Question or prompt text",
  "validation": {
    "type": "freeform" | "contains" | "regex",
    "acceptedAnswers": ["answer1", "answer2"],
    "pattern": "regex pattern"
  }
}
```

**Validation Types:**
- `freeform`: Any answer accepted (for reflection, creative tasks)
- `contains`: Answer must contain one of the accepted strings
- `regex`: Answer must match the regex pattern

### 4. Multiple Choice Component

```json
{
  "type": "multipleChoice",
  "question": "Question text",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correctIndex": 2,
  "feedback": {
    "correct": "Explanation of why this is correct",
    "incorrect": "Hint or explanation for incorrect answers"
  }
}
```

**Guidelines:**
- Always provide feedback for both correct and incorrect answers
- Use realistic distractors (common misconceptions)
- Connect to real-world scenarios when possible

### 5. Matching Component

```json
{
  "type": "matching",
  "leftColumn": ["Term 1", "Term 2", "Term 3"],
  "rightColumn": [
    {
      "definition": "Definition of Term 1",
      "matchesWith": "Term 1"
    },
    {
      "definition": "Definition of Term 2",
      "matchesWith": "Term 2"
    }
  ]
}
```

**Use for:**
- Vocabulary practice (s1 - Remembering stage)
- Concept-definition matching

### 6. Ordering Component

```json
{
  "type": "ordering",
  "instructions": "Drag to reorder into the correct sequence.",
  "items": [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4"
  ],
  "correctOrder": [0, 1, 2, 3]
}
```

**Use for:**
- Process steps, sequences, workflows
- Testing understanding of order-dependent procedures

### 7. Checklist Component

```json
{
  "type": "checklist",
  "items": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

**Use for:**
- Preparation checklists
- Self-assessment
- Step verification

---

## Stage-by-Stage Guidelines

### Stage 0: Starting

**Purpose**: Hook, motivate, set expectations, provide initial exposure

#### mindset
- **Engaging hook** connecting to student interests
- **Real-world examples** of the topic in action
- **Motivation** for why learning this matters
- **Clear explanation** of what they'll accomplish
- **Encouraging tone** ("Every expert was once a beginner")

**Example Pattern:**
```
You're about to learn [topic] — a skill that [real-world impact].
[Real-world examples: 3-5 specific examples]
Why does this matter? [4-5 use cases]
In this lesson, you'll [specific learning outcome].
Ready to begin? Let's go!
```

#### recap
- **Connect to prior knowledge** or previous lessons
- **Activate schema** with questions about what they already know
- **Set context** for the new learning

#### core
- **Comprehensive introduction** to the topic (3-5 text components)
- **Real-world examples** (5-7 specific examples)
- **Visual metaphors** (3-4 metaphors to aid understanding)
- **Connection to prior knowledge** (what they already know)
- **What makes it powerful/special** (key benefits)

**Depth Requirement**: This is CRITICAL - needs 3-5x more content than a basic introduction

#### guidedPractice
- **Multiple code examples** with progressive complexity (3-4 examples)
- **Questions that build understanding** (comparison, pattern recognition)
- **Multiple question types** (short answer, multiple choice with feedback)
- **Building understanding section** explaining the progression

#### challenge
- **Multiple choice** with real-world scenarios
- **Short answer** asking students to think about personal use cases
- **Options that connect to student interests** (school, personal, fun)
- **Feedback** for multiple choice (correct/incorrect explanations)

#### reflection
- **Self-assessment checklist** (3 questions: understand concept, identify examples, ready to learn)
- **Multiple reflection prompts** (4-5 questions):
  - Motivation questions (excitement level, what would make it a 10)
  - Curiosity questions (what are you most curious about, what questions do you have)
  - Connection questions (how does this relate to your goals)
- **Transition readiness check** (ready for next stage)

#### transition
- **WHAT/WHY/HOW structure**: What you learned, why it matters, how you'll use it
- **Specific term/concept previews** (mention specific things they'll learn next)
- **Encouragement** ("Every programmer started exactly where you are now")
- **Clear progression** showing how current knowledge leads to next stage

---

### Stage 1: Remembering

**Purpose**: Learn vocabulary, basic facts, terminology, recall key information

#### mindset
- **Mindset shift**: Moving from not knowing to being able to name things
- **Emphasize**: You're not doing yet, just becoming familiar
- **Set expectation**: Focus on vocabulary and basic facts

#### recap
- **Review Stage 0** concepts
- **Connect vocabulary** to what they saw in examples
- **Anchor knowledge**: What do you remember from the introduction?

#### core
- **Expanded vocabulary** with detailed definitions (8-10 key terms)
- **Context for when/why** each term matters
- **Visual or conceptual connections** between terms
- **Examples** for each term
- **Connection section** showing how all terms work together

**Depth Requirement**: Each term needs:
- Definition
- Example
- Context (when/why it matters)
- Connection to other terms

#### guidedPractice
- **Vocabulary matching activity** (8-10 terms)
- **Ordering activity** (process steps, if applicable)
- **Multiple activity types** (matching + ordering, or matching + multiple choice)
- **Comprehensive coverage** of all key terms from core section

#### challenge
- **Creative visualization task** ("Draw or describe a diagram")
- **Visual representation activity** showing how terms connect
- **Hints and guidance** for creating the diagram
- **Short answer** asking students to explain how terms work together
- **Vocabulary application in context** (not just simple recall)
- **One recall question** to test memory (file extension, command, etc.)

#### reflection
- **Self-assessment checklist** (3 questions: can I define terms, recall meanings, explain connections)
- **Multiple reflection prompts** (4 prompts):
  - Validation (which term was easiest, which needs review)
  - Term retention (can you recall without looking back)
  - Connection to next stage (how understanding terms helps)
  - How terms work together
- **Connection to next stage** (readiness check for Understanding stage)

#### transition
- **Mention specific terms** they learned
- **Preview specific concept** they'll understand next (what happens when...)
- **Connection**: How knowing terms helps understand processes

---

### Stage 2: Understanding

**Purpose**: Understand how things work, relationships, processes, "why" behind "what"

#### mindset
- **Mindset shift**: Moving from remembering to understanding why it works
- **Open the "black box"**: What actually happens behind the scenes?
- **Focus on connections**: Between components, systems, processes

#### recap
- **Review Stage 1** vocabulary
- **Quick recap** of key terms
- **Preview**: Now we'll understand how they work together

#### core
- **Detailed "behind the scenes" explanation** (8-10 steps with explanations)
- **Why each step matters**
- **What happens internally** (processes, systems, interactions)
- **How components interact** (terminal, file system, interpreter, etc.)
- **Visual/conceptual flow diagram description**
- **Key idea section** explaining the flow of information

**Depth Requirement**: Must explain:
- Each step in detail
- Why it matters
- What happens internally
- How components interact
- The complete flow from start to finish

#### guidedPractice
- **Multiple activities** with different question types (4-5 activities)
- **Questions about "why"** not just "what" (why does X happen, why is Y important)
- **Prediction activities** (predict what will happen, predict the problem)
- **Comparison activities** (compare two scenarios, compare different approaches)
- **Multiple question types** (short answer, multiple choice with feedback)
- **Real-world troubleshooting scenarios**

#### challenge
- **Creative diagram/flowchart creation task** showing the process flow
- **Visual representation activity** with multiple components
- **Detailed guidance** on what to include in the diagram (5-7 key steps)
- **Hints and labels guidance** (arrows, labels like "command travels here")
- **Two short answer questions**: one to describe the diagram/flow, one about error handling or edge cases
- **More complex scenario** that tests deeper understanding

#### reflection
- **Self-assessment checklist** (3 questions: can I explain why, describe what happens, identify differences)
- **Multiple reflection prompts** (3-4 prompts):
  - Questions about the "why" behind processes
  - Questions about connections between concepts
  - Questions about what still seems confusing
- **Connection to next stage** (readiness for Applying)

#### transition
- **Summarize understanding** (how things work together)
- **Preview specific steps** they'll perform next (creating file, writing code, saving, running)
- **Connection**: How understanding helps with application

---

### Stage 3: Applying

**Purpose**: Hands-on practice, step-by-step execution, doing it yourself

#### mindset
- **Mindset shift**: Moving from understanding to doing it yourself
- **Focus on**: Accuracy, sequence, feedback
- **Emphasize**: Mistakes are expected, that's part of learning!

#### recap
- **Review Stage 2** understanding
- **Quick recap** of key concepts
- **Prerequisites check**: Can you answer these questions before starting?

#### core
- **Preparation checklist** (prerequisites, tools needed, permissions)
- **Detailed step-by-step guide** (7-10 steps with detailed guidance)
- **Visual descriptions** (file locations, terminal navigation, UI elements)
- **Common pitfalls and how to avoid them** (7-10 pitfalls with fixes)
- **File location guidance** (where to save, how to navigate)
- **Tool recommendations** (beginner-friendly options, what to avoid)
- **Verification steps** (how to confirm success)

**Depth Requirement**: Must include:
- Complete preparation checklist
- Every step in detail (no assumptions)
- Visual guidance where helpful
- Common mistakes and fixes
- Multiple verification methods

#### guidedPractice
- **Expanded checklist** (6-8 items with specific details)
- **Validation step** (paste output to verify success)
- **Troubleshooting guidance** (spot the problem with multiple choice questions)
- **Multiple practice activities** (checklist + validation + troubleshooting)
- **Two multiple choice questions** covering common errors
- **Feedback for each question** explaining the correct answer

#### challenge
- **Proof-of-work requirement** with specific naming pattern
- **Screenshot requirement** showing file, command, and output (artifact creation)
- **Multiple verification steps** (script name, code, output, reflection)
- **Optional advanced step** (create a second version with variations)
- **Reflection question** about challenges faced
- **More comprehensive deliverable requirements**

#### reflection
- **Self-assessment checklist** (3-4 questions: can I perform without notes, explain while doing, fix common errors)
- **Multiple reflection prompts** (3-4 prompts):
  - Questions about the creation process (what was easiest/confusing)
  - Questions about what was surprising
  - Questions about confidence level
- **Connection to next stage** (readiness for Analyzing)

#### transition
- **Acknowledge success** ("You can now [do the thing] successfully — great work!")
- **Preview specific error types** they'll learn about next (FileNotFoundError, SyntaxError, logic errors)
- **Show practical value** (becoming a problem-solver)

---

### Stage 4: Analyzing

**Purpose**: Troubleshooting, problem-solving, error analysis, breaking down problems

#### mindset
- **Mindset shift**: Moving from doing correctly to understanding what happens when things go wrong
- **Troubleshooting mindset**: Looking for causes, patterns, relationships
- **Think like a detective**: Every error message is a clue

#### recap
- **Review Stage 3** successful application
- **Quick recap** of what works
- **Preview**: Now we'll explore what happens when something fails

#### core
- **Detailed error analysis table** (symptom → cause → verification → fix) for 8-10 error types
- **Multiple error types** with solutions
- **Comparison of different error scenarios** (Syntax vs Runtime vs Logic vs Environment errors)
- **Systematic troubleshooting methodology** (5-step process)
- **Pattern recognition** (common error patterns, how to identify them)

**Depth Requirement**: Must include:
- Comprehensive error table (8-10 error types minimum)
- Symptom → Cause → Verification → Fix for each
- Comparison of error categories
- Systematic troubleshooting process
- Pattern recognition guidance

#### guidedPractice
- **Multiple error scenarios** to analyze (5-6 activities)
- **Step-by-step error diagnosis process** (systematic troubleshooting with 3-4 steps)
- **Pattern recognition activities** (identifying common patterns in error scenarios)
- **Comparison activities** (comparing when different error types occur)
- **Error exploration framework** (symptom → cause → evidence → solution) for each scenario
- **Multiple question types** (short answer with validation, multiple choice with feedback)

#### challenge
- **Creative troubleshooting flowchart/decision tree creation task**
- **Visual problem-solving activity** with multiple error scenarios (5-7 error types)
- **Systematic approach development** (flowchart structure with decision points)
- **Three short answer questions**: flowchart description, ordered troubleshooting steps, first question for specific error type
- **Real-world problem-solving scenarios**

#### reflection
- **Self-assessment checklist** (3-4 questions: can I identify why errors occur, tell difference between error types, explain troubleshooting process)
- **Multiple reflection prompts** (3-4 prompts):
  - Questions about troubleshooting strategies (3-step plan)
  - Questions about error patterns noticed
  - Questions about problem-solving approaches (how has your approach changed)
- **Connection to next stage** (readiness for Evaluating)

#### transition
- **Summarize troubleshooting skills** (you can now diagnose and fix problems)
- **Preview specific evaluation criteria** they'll learn next (clarity, purpose, appropriateness, quality)
- **Professional connection** (just like professional programmers do)

---

### Stage 5: Evaluating

**Purpose**: Judgment, criteria, comparisons, recommendations, quality assessment

#### mindset
- **Mindset shift**: Moving from finding what's wrong to choosing what's best
- **Focus on judgment**: Balancing advantages, limitations, and context
- **Not just fixing**: Optimizing and making informed decisions

#### recap
- **Review Stage 4** troubleshooting skills
- **Quick recap** of error analysis capabilities
- **Preview**: Now you'll make professional-level decisions

#### core
- **Detailed evaluation criteria** (6-8 criteria: Clarity, Purpose, Appropriateness, Quality, Readability, Functionality, etc.)
- **Rating scales or rubrics** (1-5 star rating system with descriptions, plus detailed evaluation rubric table)
- **Examples of good vs. bad** (4-6 comparison examples showing good vs. bad for different criteria)
- **Multiple dimensions of quality** (Technical, Educational, Aesthetic, Practical, Maintainability)
- **Evaluation rubric table** with scoring system
- **Context considerations** (when to prioritize which criteria)

**Depth Requirement**: Must include:
- Comprehensive criteria (6-8 minimum)
- Rating scales with descriptions
- Good vs. bad examples (4-6 comparisons)
- Multiple quality dimensions
- Context-dependent evaluation guidance

#### guidedPractice
- **Activity 1: Evaluate for Different Contexts** with 2-3 scenarios (different use cases)
- **Multiple evaluation scenarios** with script/code comparisons (Script 1 vs 2, Script 3 vs 4)
- **Justification activities** asking students to rate and explain their reasoning using evaluation criteria
- **Activity 2: What Would You Recommend?** with recommendation scenario
- **Real-world context applications** (classroom, personal use, professional, educational)
- **Comparison activities** (comparing solutions side-by-side)
- **Multiple choice questions** with added feedback

#### challenge
- **Real-world code review scenario** with 3-4 scripts/code examples to evaluate
- **Decision-making scenario** with context (school lab, personal use, professional project)
- **Multiple choice questions** about evaluation criteria
- **Short answer** asking for written evaluation and recommendation
- **Justification requirement** (explain reasoning using criteria)

#### reflection
- **Self-assessment checklist** (3-4 questions: can I compare using multiple criteria, recommend for context, consider technical and practical factors)
- **Multiple reflection prompts** (3-4 prompts):
  - Questions about evaluation criteria (which criterion is most important)
  - Questions about what makes code "good"
  - Questions about personal standards (how will you apply criteria, what standards will you set)
- **Connection to next stage** (readiness for Creating)

#### transition
- **Summarize evaluation skills** (you can now evaluate and judge quality like an expert)
- **Emphasize creating useful solutions** that solve real problems
- **Show culmination**: Next you'll create something using all your knowledge

---

### Stage 6: Creating

**Purpose**: Original projects, teaching others, synthesis, mastery demonstration

#### mindset
- **Mindset shift**: Moving from judging existing solutions to creating your own
- **Design, document, and demonstrate** your understanding
- **Question changes**: No longer "Which way is best?" but "How can I make this easier, faster, or clearer for someone else?"

#### recap
- **Review all previous stages** (Remembering → Understanding → Applying → Analyzing → Evaluating)
- **Quick recap** of all skills learned
- **Preview**: Now you'll combine all that knowledge into a creative, useful product

#### core
- **Multiple project type options** (6-8 project types with descriptions)
- **Templates or examples** (4-6 complete code templates with copyable examples)
- **Different complexity levels** (Beginner ⭐, Intermediate ⭐⭐, Advanced ⭐⭐⭐)
- **Real-world application suggestions** (organized by category: School, Personal Use, Fun, Learning, Professional)
- **Project selection guidance** (help choosing based on skill level and interests)
- **Success criteria** for each project type

**Depth Requirement**: Must include:
- Multiple project options (6-8 minimum)
- Templates/examples for each (4-6 templates)
- Complexity levels clearly marked
- Real-world applications
- Selection guidance

#### guidedPractice
- **Activity 1: Plan Your Project** with detailed planning questions:
  - Purpose (what problem does it solve?)
  - Audience (who is it for?)
  - Approach (what tools/techniques will you use?)
  - Success criteria (how will you know it's done?)
- **Activity 2: Draft and Test** with expanded checklist (7-10 items including testing and improvement steps)
- **More detailed planning structure** (4-6 planning questions vs. 2 basic questions)
- **Tool/approach selection question** (what approach will you use)
- **Expanded checklist** from 4 to 7-10 items including testing and iteration steps
- **Better organization** with two distinct activities

#### challenge
- **Multiple deliverable options** (4-6 project types: Personal, Teaching, Creative, Utility, etc.)
- **Ordering activity** for the creation and sharing process (write → share → peer feedback → revise)
- **Peer feedback component** (share with peer, peer tests/runs and gives feedback, revise based on feedback)
- **Quality criteria checklist** (4-6 requirements: clear purpose, working code, helpful output, reflection, documentation)
- **Reflection question** about design choices (why did you write it this way, what decisions did you make)
- **More comprehensive project-like structure** with clear deliverables

#### reflection
- **Self-assessment checklist** (3-4 questions: did I create something others can use, does it show complete understanding, can I explain design choices)
- **Multiple reflection prompts** (3-4 prompts):
  - Questions about the creative process (what did you learn)
  - Questions about design choices (describe your project and explain design choices)
  - Questions about what was learned through creation
  - Questions about how knowledge has grown
- **Celebration of mastery** (you've reached Creating stage — full mastery)

#### transition
- **Comprehensive congratulations message** with journey summary
- **Journey recap**: All stages completed (No Knowledge → Remembering → Understanding → Applying → Analyzing → Evaluating → Creating)
- **Final encouragement**: You can now help others with confidence and expertise!

---

## Quality Standards

### Depth Requirements

**CRITICAL**: Core sections need 3-5x more content than basic introductions. Each core section should have:

- **Stage 0 (Starting)**: 3-5 text components with real-world examples, metaphors, connections
- **Stage 1 (Remembering)**: 8-10 vocabulary terms with definitions, examples, context, connections
- **Stage 2 (Understanding)**: 8-10 step-by-step explanations with "why" and "how"
- **Stage 3 (Applying)**: 7-10 detailed steps with pitfalls, verification, troubleshooting
- **Stage 4 (Analyzing)**: 8-10 error types with symptom → cause → verification → fix
- **Stage 5 (Evaluating)**: 6-8 evaluation criteria with rubrics, examples, comparisons
- **Stage 6 (Creating)**: 6-8 project types with templates, examples, complexity levels

### Activity Variety

Each **guidedPractice** section should have:
- **Minimum 2 activities** (preferably 3-4)
- **Multiple question types** (short answer, multiple choice, matching, ordering)
- **Progressive complexity** (simple → more complex)
- **Real-world scenarios**

Each **challenge** section should have:
- **Creative/visual elements** (diagrams, flowcharts, visualizations)
- **Multiple activity types** (not just short answer)
- **Real-world context**
- **Artifact creation** (screenshots, diagrams, code, documentation)

### Reflection Depth

Each **reflection** section should have:
- **Self-assessment checklist** (3-4 questions)
- **Multiple reflection prompts** (3-5 questions covering):
  - Metacognitive questions (what did I learn?)
  - Process questions (how did I approach this?)
  - Connection questions (how does this relate?)
  - Motivation questions (what am I excited about?)
- **Transition readiness check**

### Transition Quality

Each **transition** section should have:
- **Specific previews** (mention specific concepts/terms they'll learn next)
- **Encouragement** (acknowledge progress, build confidence)
- **Connection to real-world value** (why the next stage matters)
- **Summary of current knowledge** (brief recap of what they've accomplished)

---

## Common Patterns and Best Practices

### 1. Real-World Examples

**Always include:**
- 5-7 specific, relatable examples in Stage 0
- Examples that connect to student interests (school, personal, fun, professional)
- Examples that show practical value

**Pattern:**
```
• [Category 1] — [Specific example]
• [Category 2] — [Specific example]
• [Category 3] — [Specific example]
```

### 2. Visual Metaphors

**Use in Stage 0 core:**
- 3-4 metaphors to aid understanding
- Connect abstract concepts to familiar things

**Pattern:**
```
**Like a [Familiar Thing]**
[Explanation of how topic is like familiar thing]
```

### 3. Progressive Complexity

**In guidedPractice:**
- Start simple, build complexity
- Example 1: Basic concept
- Example 2: Adds one feature
- Example 3: Adds another feature
- Example 4: Combines multiple features

### 4. Error Analysis Table

**In Stage 4 core:**
```
**Symptom:** [What the user sees]
**Possible Cause:** [Why it happens]
**How to Verify:** [How to confirm the cause]
**How to Fix:** [Step-by-step solution]
```

### 5. Evaluation Rubric

**In Stage 5 core:**
```
**Criterion: [Name]**
• ⭐⭐⭐⭐⭐ Excellent: [Description]
• ⭐⭐⭐⭐ Good: [Description]
• ⭐⭐⭐ Fair: [Description]
• ⭐⭐ Poor: [Description]
• ⭐ Very Poor: [Description]
```

### 6. Project Templates

**In Stage 6 core:**
- Provide complete, copyable code templates
- Include comments explaining each part
- Show expected output
- Provide variations (beginner, intermediate, advanced)

### 7. Self-Assessment Checklists

**Pattern:**
```
Ask yourself:

• Can I **[action verb]** [specific skill]?
• Can I **[action verb]** [specific knowledge]?
• Can I **[action verb]** [specific application]?

✅ If yes → you're ready for the next stage.
❌ If not → [specific review action].
```

### 8. Multiple Choice with Real-World Scenarios

**Pattern:**
```
**Question:** [Real-world scenario question]

**Options:**
- [Option connecting to student interest 1]
- [Option connecting to student interest 2]
- [Option connecting to student interest 3]
- [Correct answer combining multiple interests]

**Feedback:**
- Correct: [Explanation with encouragement]
- Incorrect: [Hint that guides thinking]
```

### 9. Creative Visualization Tasks

**Pattern:**
```
**Task:** Draw or describe a [diagram/flowchart/map] showing [concept].

🧩 Hints:
• Start with [starting point] → [next point] → [next point]
• Add labels showing [what to label]
• Use arrows to show [what arrows represent]
```

### 10. Proof-of-Work Requirements

**Pattern:**
```
**Create a Proof-of-Work [Artifact Type]**

• Create [specific deliverable] named [naming pattern]
• [Specific requirement 1]
• [Specific requirement 2]
• Take a screenshot showing:
  - [Element 1]
  - [Element 2]
  - [Element 3]

(Optional advanced step: [extension activity])
```

---

## Validation Checklist

Before finalizing a guide, verify:

### Structure
- [ ] All 7 stages present (s0 through s6)
- [ ] All 7 sections present in each stage (mindset, recap, core, guidedPractice, challenge, reflection, transition)
- [ ] Metadata complete and accurate (including `metadata.order` set for curriculum order in the guide selector)
- [ ] Branding consistent
- [ ] JSON is valid (no syntax errors)

### Content Depth
- [ ] Stage 0 core has 3-5 text components with examples, metaphors, connections
- [ ] Stage 1 core has 8-10 vocabulary terms with definitions, examples, context
- [ ] Stage 2 core has detailed "behind the scenes" explanation (8-10 steps)
- [ ] Stage 3 core has comprehensive step-by-step guide (7-10 steps) with pitfalls
- [ ] Stage 4 core has error analysis table (8-10 error types)
- [ ] Stage 5 core has evaluation criteria (6-8 criteria) with rubrics and examples
- [ ] Stage 6 core has multiple project types (6-8 options) with templates

### Activity Quality
- [ ] Each guidedPractice has minimum 2 activities (preferably 3-4)
- [ ] Each challenge has creative/visual elements or multiple activity types
- [ ] Multiple choice questions have feedback for correct and incorrect answers
- [ ] Short answer questions use appropriate validation (freeform, contains, regex)
- [ ] Activities progress in complexity

### Reflection and Transition
- [ ] Each reflection has self-assessment checklist (3-4 questions)
- [ ] Each reflection has multiple prompts (3-5 questions)
- [ ] Each transition previews specific concepts for next stage
- [ ] Each transition includes encouragement

### Real-World Context
- [ ] Stage 0 has 5-7 real-world examples
- [ ] Examples connect to student interests
- [ ] Activities use real-world scenarios
- [ ] Challenges have practical applications

### Language and Tone
- [ ] Encouraging and supportive tone throughout
- [ ] Clear, age-appropriate language
- [ ] No assumptions about prior knowledge (except stated prerequisites)
- [ ] Instructions are specific and actionable

### Code and Examples
- [ ] Code examples are correct and tested
- [ ] Code examples have appropriate `copyable` setting
- [ ] Code examples progress in complexity
- [ ] Examples are relevant to the topic

### Completeness
- [ ] All sections have content (no empty sections)
- [ ] All components have required fields
- [ ] All validation rules are appropriate
- [ ] All feedback messages are helpful

---

## Example: Creating a New Guide

### Step 1: Define the Topic

**Topic**: "Working with Python Lists"

**Learning Outcome**: Students will be able to create, manipulate, and iterate through Python lists.

### Step 2: Plan Each Stage

**Stage 0 (Starting)**:
- Hook: Lists are everywhere (shopping lists, playlists, to-do lists)
- Real-world examples: Managing student grades, tracking inventory, organizing data
- What is a list? Why are they useful?

**Stage 1 (Remembering)**:
- Vocabulary: list, index, element, append, iterate, slice, length
- Basic syntax: `[]`, `list()`, indexing `[0]`, `len()`

**Stage 2 (Understanding)**:
- How lists work in memory
- How indexing works (0-based)
- How iteration works (for loops)
- How slicing works

**Stage 3 (Applying)**:
- Step-by-step: Create a list, add items, access items, iterate
- Common pitfalls: Index out of range, type errors
- Verification: Print list, check length, iterate and print

**Stage 4 (Analyzing)**:
- Error analysis: IndexError, TypeError, empty list issues
- Troubleshooting: Why is my list empty? Why can't I access index 5?
- Pattern recognition: Common mistakes

**Stage 5 (Evaluating)**:
- Criteria: Readability, efficiency, appropriateness
- Compare different approaches: List comprehension vs. loop
- When to use lists vs. other data structures

**Stage 6 (Creating)**:
- Projects: Grade tracker, inventory system, data organizer
- Templates provided
- Peer review and iteration

### Step 3: Write Each Section

Follow the stage-by-stage guidelines above, ensuring:
- Depth in core sections
- Variety in activities
- Real-world context
- Progressive complexity

### Step 4: Validate

Use the validation checklist to ensure completeness and quality.

### Step 5: Test

- Read through as a student would
- Verify all code examples work
- Check that activities are clear
- Ensure progression makes sense

---

## Final Notes

### Key Principles to Remember

1. **Depth Over Breadth**: Better to have comprehensive coverage of fewer concepts than superficial coverage of many
2. **Scaffold Everything**: Start with guidance, gradually remove support
3. **Real-World Always**: Always connect to practical, relatable examples
4. **Progressive Complexity**: Build from simple to complex in every section
5. **Multiple Modalities**: Use text, code, visuals, interactive activities
6. **Encourage Always**: Maintain supportive, encouraging tone
7. **Validate Learning**: Include checkpoints, reflections, self-assessments
8. **Connect Stages**: Each stage should clearly build on previous ones

### Common Mistakes to Avoid

1. **Too Shallow**: Core sections with only 1-2 components (needs 3-5 minimum)
2. **No Real-World Context**: Abstract examples without practical applications
3. **Single Activity Type**: Only short answer questions (need variety)
4. **No Feedback**: Multiple choice without explanations
5. **Assumptions**: Assuming students know things not explicitly taught
6. **No Progression**: Activities don't increase in complexity
7. **Weak Transitions**: Generic "next you'll learn more" (needs specific previews)
8. **Minimal Reflection**: Only 1 question (needs checklist + multiple prompts)

### Success Metrics

A well-created guide should:
- Take students from zero knowledge to mastery
- Provide clear, actionable steps at every stage
- Include sufficient depth for true understanding
- Offer multiple ways to practice and demonstrate learning
- Connect learning to real-world applications
- Build confidence through scaffolded practice
- Enable students to create original work by the end

---

**Remember**: The goal is not just to teach facts, but to build understanding, skills, and confidence. Every section should move students closer to mastery while maintaining engagement and motivation.
