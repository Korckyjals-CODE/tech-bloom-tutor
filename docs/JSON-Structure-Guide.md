# JSON Structure Guide for Technical Skill Tutor

## Overview

This document explains the JSON data structure used to power the Technical Skill Tutor platform. The structure is designed to be flexible and reusable, allowing you to create interactive learning guides for any technical skill following Bloom's Taxonomy learning stages.

## Table of Contents

1. [Top-Level Structure](#top-level-structure)
2. [Metadata Section](#metadata-section)
3. [Branding Section](#branding-section)
4. [Stages Array](#stages-array)
5. [Sections Array](#sections-array)
6. [Content Object](#content-object)
7. [Component Types](#component-types)
8. [Validation Types](#validation-types)
9. [UI Configuration](#ui-configuration)
10. [Complete Example](#complete-example)
11. [Best Practices](#best-practices)

---

## Top-Level Structure

The JSON file contains six main sections:

```json
{
  "metadata": { },
  "branding": { },
  "stages": [ ],
  "sections": [ ],
  "content": { },
  "ui": { }
}
```

### Purpose of Each Section

- **metadata**: Guide-level information and configuration
- **branding**: Visual identity and theming
- **stages**: Learning progression (based on Bloom's Taxonomy)
- **sections**: Structure within each stage
- **content**: All learning materials and activities
- **ui**: User interface text and labels

---

## Metadata Section

Contains guide-level information and system configuration.

### Structure

```json
{
  "metadata": {
    "title": "Installing Python on Windows",
    "subtitle": "Interactive Student Guide",
    "description": "A comprehensive guide for installing Python on Windows using Bloom's Taxonomy stages",
    "version": "1.0.0",
    "author": "Your Name/Institution",
    "lastUpdated": "2025-11-10",
    "storageKeyPrefix": "pywin_guide",
    "instructorPasscode": "abc123"
  }
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Main title of the guide |
| `subtitle` | string | No | Additional context for the guide |
| `description` | string | Yes | Brief description of what students will learn |
| `version` | string | Yes | Version number (semantic versioning recommended) |
| `author` | string | Yes | Creator or institution name |
| `lastUpdated` | string | Yes | Last modification date (ISO 8601 format) |
| `storageKeyPrefix` | string | Yes | Prefix for localStorage keys (use unique identifier) |
| `instructorPasscode` | string | Yes | Password for instructor mode access |

### Usage Notes

- **storageKeyPrefix**: Should be unique per guide to prevent data conflicts (e.g., `python_install`, `git_basics`)
- **instructorPasscode**: Used to access answer keys and teacher features
- **version**: Increment when making significant content changes

---

## Branding Section

Customizes the visual identity and appearance.

### Structure

```json
{
  "branding": {
    "brandName": "Python on Windows — Guide",
    "theme": {
      "colorScheme": "dark",
      "primaryColor": "#4aa3ff",
      "secondaryColor": "#7bc67b"
    }
  }
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `brandName` | string | Yes | Displayed in sidebar header |
| `theme.colorScheme` | string | Yes | `"dark"` or `"light"` |
| `theme.primaryColor` | string | Yes | Main accent color (hex format) |
| `theme.secondaryColor` | string | Yes | Secondary accent color (hex format) |

### Usage Notes

- Colors should have sufficient contrast for accessibility
- `brandName` appears prominently in the sidebar

---

## Stages Array

Defines the learning progression using Bloom's Taxonomy or similar framework.

### Structure

```json
{
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
    }
  ]
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (used in content mapping) |
| `order` | number | Yes | Sequence number (0-indexed) |
| `title` | string | Yes | Full stage name displayed in UI |
| `shortTitle` | string | Yes | Abbreviated name for compact displays |
| `description` | string | Yes | Learning objective for this stage |

### Default Stages (Bloom's Taxonomy + Stage 0)

1. **Stage 0 - Starting**: Initial exposure, no prior knowledge assumed
2. **Stage 1 - Remembering**: Recall facts, terms, basic concepts
3. **Stage 2 - Understanding**: Explain ideas, interpret information
4. **Stage 3 - Applying**: Use knowledge in new situations
5. **Stage 4 - Analyzing**: Break down information, find patterns
6. **Stage 5 - Evaluating**: Justify decisions, critique solutions
7. **Stage 6 - Creating**: Produce original work, synthesize knowledge

### Customization

You can modify stages to fit different learning frameworks:
- SOLO Taxonomy
- Webb's Depth of Knowledge
- Custom progression specific to your skill

---

## Sections Array

Defines the structure within each stage.

### Structure

```json
{
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
    }
  ]
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (camelCase, no spaces) |
| `displayName` | string | Yes | User-facing name with proper capitalization |
| `order` | number | Yes | Sequence within stage (0-indexed) |
| `description` | string | Yes | Purpose of this section |

### Default Sections

1. **Mindset**: Mental preparation and expectations
2. **Recap**: Review or context-setting
3. **Core**: Main content and key concepts
4. **Guided Practice**: Scaffolded practice activities
5. **Challenge**: Independent application
6. **Reflection**: Metacognitive thinking
7. **Transition**: Bridge to next stage

### Usage Notes

- Section `id` must match keys used in the `content` object
- Order determines navigation sequence
- All stages should have the same sections for consistency

---

## Content Object

Contains all learning materials organized by stage and section.

### Structure

```json
{
  "content": {
    "stageId": {
      "sectionId": {
        "heading": "Section Title",
        "components": [ ]
      }
    }
  }
}
```

### Hierarchy

```
content
  └── stageId (e.g., "s0", "s1")
      └── sectionId (e.g., "mindset", "recap")
          ├── heading (string)
          └── components (array)
              └── component objects
```

### Example

```json
{
  "content": {
    "s0": {
      "mindset": {
        "heading": "Welcome",
        "components": [
          {
            "type": "text",
            "content": "Welcome to the guide!"
          }
        ]
      }
    }
  }
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `heading` | string | Yes | Specific title for this section instance |
| `components` | array | Yes | Ordered list of content components |

---

## Component Types

Components are the building blocks of content. Each component has a `type` field and type-specific properties.

### 1. Text Component

Simple paragraph text.

```json
{
  "type": "text",
  "content": "Your text content here. Can include multiple sentences."
}
```

**Use cases**: Explanations, instructions, descriptions

---

### 2. Code Component

Code block with syntax highlighting and copy functionality.

```json
{
  "type": "code",
  "language": "python",
  "content": "print('Hello, World!')\nx = 42",
  "copyable": true
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `language` | string | Yes | Language for syntax highlighting (e.g., `python`, `bash`, `javascript`) |
| `content` | string | Yes | Code content (use `\n` for line breaks) |
| `copyable` | boolean | No | Show copy button (default: true) |

**Use cases**: Commands, code examples, terminal inputs

---

### 3. Multiple Choice Component

Single-answer multiple choice question.

```json
{
  "type": "multipleChoice",
  "question": "What is 2 + 2?",
  "options": [
    "3",
    "4",
    "5"
  ],
  "correctIndex": 1,
  "feedback": {
    "correct": "Correct! 2 + 2 = 4",
    "incorrect": "Not quite. Try again!"
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `question` | string | Yes | The question to ask |
| `options` | array | Yes | Array of answer choices |
| `correctIndex` | number | Yes | Index of correct answer (0-based) |
| `feedback.correct` | string | No | Message for correct answer |
| `feedback.incorrect` | string | No | Message for incorrect answer |

**Use cases**: Knowledge checks, concept verification, assessments

---

### 4. Short Answer Component

Text input with optional validation.

```json
{
  "type": "shortAnswer",
  "prompt": "What command shows Python version?",
  "validation": {
    "type": "contains",
    "acceptedAnswers": ["python --version", "py --version"]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `prompt` | string | Yes | Question or instruction |
| `validation` | object | Yes | Validation configuration (see [Validation Types](#validation-types)) |

**Use cases**: Recall questions, reflection prompts, open responses

---

### 5. Checklist Component

Interactive checkbox list.

```json
{
  "type": "checklist",
  "items": [
    "Download installer",
    "Run setup",
    "Verify installation"
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `items` | array | Yes | List of checkable items |

**Use cases**: Step-by-step procedures, prerequisite checks, task lists

---

### 6. Ordering Component

Drag-and-drop sequencing activity.

```json
{
  "type": "ordering",
  "instructions": "Arrange these steps in the correct order.",
  "items": [
    "First step",
    "Second step",
    "Third step"
  ],
  "correctOrder": [0, 1, 2]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `instructions` | string | No | Guidance for the activity |
| `items` | array | Yes | Items to be ordered (presented shuffled) |
| `correctOrder` | array | No | Indices in correct sequence (optional auto-check) |

**Use cases**: Process sequences, workflow steps, procedural knowledge

---

### 7. Matching Component

Match terms with definitions or pairs.

```json
{
  "type": "matching",
  "leftColumn": [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "rightColumn": [
    {
      "definition": "Structure and content",
      "matchesWith": "HTML"
    },
    {
      "definition": "Styling and layout",
      "matchesWith": "CSS"
    },
    {
      "definition": "Interactivity and behavior",
      "matchesWith": "JavaScript"
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `leftColumn` | array | Yes | Terms to match (strings) |
| `rightColumn` | array | Yes | Definitions with match keys |
| `rightColumn[].definition` | string | Yes | Definition or description |
| `rightColumn[].matchesWith` | string | Yes | Must match a term from leftColumn |

**Use cases**: Vocabulary, concept relationships, pair associations

---

### 8. Flowchart Component

Interactive flowchart builder with draggable nodes.

```json
{
  "type": "flowchart",
  "nodes": [
    {
      "id": "node1",
      "x": 40,
      "y": 40,
      "text": "Start"
    },
    {
      "id": "node2",
      "x": 240,
      "y": 40,
      "text": "Process"
    }
  ],
  "connections": [
    {"from": "node1", "to": "node2"}
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `nodes` | array | Yes | Flowchart nodes |
| `nodes[].id` | string | Yes | Unique node identifier |
| `nodes[].x` | number | Yes | Initial X position (pixels) |
| `nodes[].y` | number | Yes | Initial Y position (pixels) |
| `nodes[].text` | string | Yes | Node label |
| `connections` | array | No | Connections between nodes |
| `connections[].from` | string | Yes | Source node ID |
| `connections[].to` | string | Yes | Target node ID |

**Use cases**: Process flows, decision trees, system diagrams

---

## Validation Types

Validation is used with `shortAnswer` components to check student responses.

### 1. Freeform (No Validation)

Accepts any input without checking.

```json
{
  "validation": {
    "type": "freeform"
  }
}
```

**Use cases**: Reflection questions, open-ended responses, subjective answers

---

### 2. Contains (Keyword Matching)

Checks if answer contains any of the specified keywords (case-insensitive).

```json
{
  "validation": {
    "type": "contains",
    "acceptedAnswers": ["python --version", "py --version", "version"]
  }
}
```

**Use cases**: Commands with variations, conceptual answers with key terms

---

### 3. Regex (Pattern Matching)

Validates against a regular expression pattern.

```json
{
  "validation": {
    "type": "regex",
    "pattern": "3\\.\\d+\\.\\d+"
  }
}
```

**Note**: Pattern is a string that will be converted to RegExp. Escape special characters.

**Use cases**: Version numbers, specific formats, structured data

---

### 4. Exact (Exact Match)

Requires exact match (case-insensitive by default).

```json
{
  "validation": {
    "type": "exact",
    "answer": "python --version",
    "caseSensitive": false
  }
}
```

**Use cases**: Precise commands, specific terminology, single correct answer

---

## UI Configuration

Customizes interface text and labels.

### Structure

```json
{
  "ui": {
    "sidebar": {
      "studentNamePlaceholder": "Enter your name to save progress",
      "tips": "Tip: Use Next/Prev at the bottom of each section.",
      "printButtonText": "Print current stage"
    },
    "navigation": {
      "previousButton": "← Previous",
      "nextButton": "Next →",
      "markCompleteButton": "Mark section complete",
      "markedCompleteButton": "✓ Marked complete"
    },
    "feedback": {
      "correctAnswer": "Correct!",
      "incorrectAnswer": "Not quite — try again.",
      "saved": "Saved",
      "copiedToClipboard": "Copied to clipboard"
    }
  }
}
```

### Localization

The `ui` section makes it easy to translate the interface to other languages:

```json
{
  "ui": {
    "sidebar": {
      "studentNamePlaceholder": "Ingresa tu nombre para guardar progreso",
      "tips": "Consejo: Usa Siguiente/Anterior al final de cada sección."
    }
  }
}
```

---

## Complete Example

Here's a minimal but complete example for a "Git Basics" guide:

```json
{
  "metadata": {
    "title": "Git Basics for Beginners",
    "subtitle": "Version Control Essentials",
    "description": "Learn fundamental Git commands and workflows",
    "version": "1.0.0",
    "author": "Tech Academy",
    "lastUpdated": "2025-11-10",
    "storageKeyPrefix": "git_basics",
    "instructorPasscode": "teach123"
  },
  
  "branding": {
    "brandName": "Git Basics — Interactive Guide",
    "theme": {
      "colorScheme": "dark",
      "primaryColor": "#f05032",
      "secondaryColor": "#6cc644"
    }
  },
  
  "stages": [
    {
      "id": "s0",
      "order": 0,
      "title": "Stage 0 · Starting",
      "shortTitle": "Starting",
      "description": "Introduction to version control"
    },
    {
      "id": "s1",
      "order": 1,
      "title": "Stage 1 · Remembering",
      "shortTitle": "Remembering",
      "description": "Basic Git terminology"
    }
  ],
  
  "sections": [
    {
      "id": "mindset",
      "displayName": "Mindset",
      "order": 0,
      "description": "Prepare mentally"
    },
    {
      "id": "core",
      "displayName": "Core",
      "order": 1,
      "description": "Main concepts"
    },
    {
      "id": "challenge",
      "displayName": "Challenge",
      "order": 2,
      "description": "Test knowledge"
    }
  ],
  
  "content": {
    "s0": {
      "mindset": {
        "heading": "Welcome to Git",
        "components": [
          {
            "type": "text",
            "content": "Git helps you track changes in your code over time."
          }
        ]
      },
      "core": {
        "heading": "What is Version Control?",
        "components": [
          {
            "type": "text",
            "content": "Version control systems track every change to your files."
          },
          {
            "type": "code",
            "language": "bash",
            "content": "git --version",
            "copyable": true
          }
        ]
      },
      "challenge": {
        "heading": "Quick Check",
        "components": [
          {
            "type": "multipleChoice",
            "question": "What does Git help you do?",
            "options": [
              "Track file changes",
              "Make coffee",
              "Design websites"
            ],
            "correctIndex": 0
          }
        ]
      }
    },
    "s1": {
      "mindset": {
        "heading": "Key Terms",
        "components": [
          {
            "type": "text",
            "content": "Learn these terms: repository, commit, branch, merge."
          }
        ]
      },
      "core": {
        "heading": "Essential Commands",
        "components": [
          {
            "type": "checklist",
            "items": [
              "git init - Initialize repository",
              "git add - Stage changes",
              "git commit - Save changes"
            ]
          }
        ]
      },
      "challenge": {
        "heading": "Command Recall",
        "components": [
          {
            "type": "shortAnswer",
            "prompt": "What command initializes a new Git repository?",
            "validation": {
              "type": "contains",
              "acceptedAnswers": ["git init", "init"]
            }
          }
        ]
      }
    }
  },
  
  "ui": {
    "sidebar": {
      "studentNamePlaceholder": "Enter your name",
      "tips": "Use Next/Prev buttons to navigate",
      "printButtonText": "Print stage"
    },
    "navigation": {
      "previousButton": "← Previous",
      "nextButton": "Next →",
      "markCompleteButton": "Mark complete",
      "markedCompleteButton": "✓ Complete"
    },
    "feedback": {
      "correctAnswer": "Correct!",
      "incorrectAnswer": "Try again",
      "saved": "Saved",
      "copiedToClipboard": "Copied!"
    }
  }
}
```

---

## Best Practices

### Content Design

1. **Progressive Difficulty**: Early stages should have simple text and MCQs; later stages should have complex activities like flowcharts and ordering
2. **Consistent Section Purpose**: Use each section type consistently across stages
   - Mindset: Always set expectations
   - Core: Always introduce main concepts
   - Challenge: Always test understanding
3. **Component Variety**: Mix different component types within sections to maintain engagement

### Stage-Specific Recommendations

| Stage | Recommended Components | Avoid |
|-------|----------------------|-------|
| **Starting** | Text, MCQ (simple), Short Answer (freeform) | Complex matching, flowcharts |
| **Remembering** | Checklist, Matching, MCQ, Ordering | Freeform questions |
| **Understanding** | Text + Code, Short Answer (contains), MCQ | Pure memorization |
| **Applying** | Checklist, Code, Short Answer (regex) | Theory-only content |
| **Analyzing** | Flowchart, Ordering, Matching | Surface-level questions |
| **Evaluating** | Short Answer (freeform), MCQ (comparison) | Single-answer questions |
| **Creating** | Short Answer (freeform), Flowchart, Code | Recall-only activities |

### Writing Guidelines

1. **Clear Instructions**: Every interactive component should have clear, concise instructions
2. **Helpful Feedback**: Provide informative feedback for both correct and incorrect answers
3. **Realistic Examples**: Use real-world scenarios relevant to the technical skill
4. **Avoid Jargon**: Especially in early stages, define technical terms before using them

### Technical Considerations

1. **Storage Keys**: Use unique `storageKeyPrefix` for each guide to avoid localStorage conflicts
2. **IDs**: Use consistent naming conventions (e.g., `s0-s6` for stages, camelCase for sections)
3. **Validation**: For commands, include common variations in `acceptedAnswers`
4. **Code Language**: Use correct language identifiers for syntax highlighting (`python`, `javascript`, `bash`, `html`, `css`, etc.)

### Accessibility

1. **Alt Text**: When adding images (future enhancement), include descriptive alt text
2. **Color**: Don't rely solely on color to convey information
3. **Headings**: Use clear, descriptive headings for each section
4. **Instructions**: Make sure drag-and-drop activities also have keyboard alternatives

### Testing Your Guide

Before deploying, test your guide by:

1. **Complete a Full Run**: Go through all stages and sections
2. **Test Validation**: Try both correct and incorrect answers
3. **Check Progress Saving**: Enter a student name and verify progress persists
4. **Test Instructor Mode**: Ensure answer keys display correctly
5. **Print Test**: Verify print layout works properly
6. **Mobile Test**: Check responsive behavior on smaller screens

---

## Adaptation Examples

### Example 1: Installing Node.js

Change these fields:
- `metadata.title`: "Installing Node.js and npm"
- `metadata.storageKeyPrefix`: "nodejs_install"
- `branding.brandName`: "Node.js Setup Guide"
- Update all `content` to focus on Node.js commands and concepts

### Example 2: HTML & CSS Basics

- Keep the 7 stages but adjust stage descriptions
- Add components showing HTML/CSS code examples
- Use `language: "html"` and `language: "css"` in code blocks
- Include matching activities for HTML tags and CSS properties

### Example 3: Database Design

- Stages remain the same (Bloom's Taxonomy)
- Core sections include SQL code blocks
- Add flowchart components for ER diagrams
- Use ordering for normalization steps

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-10 | Initial documentation |

---

## Support and Contributions

For questions or suggestions about this JSON structure:
- Review existing guides for examples
- Test changes in a development environment first
- Keep backup copies before major content updates

---

## Appendix: Quick Reference

### All Component Types

- `text`
- `code`
- `multipleChoice`
- `shortAnswer`
- `checklist`
- `ordering`
- `matching`
- `flowchart`

### All Validation Types

- `freeform`
- `contains`
- `regex`
- `exact`

### Required Fields Summary

**Every component needs:**
- `type` field

**Most components need:**
- Type-specific content fields (e.g., `content`, `question`, `items`)

**Validation objects need:**
- `type` field
- Type-specific fields (e.g., `acceptedAnswers`, `pattern`)

---

*End of documentation*

