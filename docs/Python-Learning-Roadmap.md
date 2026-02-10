# Python Learning Roadmap

## Overview

This document outlines the complete learning path for Python programming using the Bloom's Taxonomy-based interactive guides. The roadmap shows the progression from installation through fundamental programming concepts.

---

## Current Guides (Implemented)

### 1. Installing Python on Windows
**File:** `python-install.json`  
**Status:** ✅ Complete  
**Scope:** Single concept - Installation process

**Learning Objectives:**
- Understand what Python is and why it's useful
- Download and install Python on Windows
- Configure PATH environment variable
- Verify installation using terminal
- Troubleshoot common installation issues
- Evaluate different installation methods

**Prerequisites:** None (starting point)

**Estimated Duration:** 1-2 hours

---

### 2. Your First Python Script
**File:** `first-python-script.json`  
**Status:** ✅ Complete  
**Scope:** Single concept - Creating and running scripts

**Learning Objectives:**
- Understand what a Python script is
- Create a `.py` file with proper syntax
- Write basic `print()` statements
- Run scripts from the terminal
- Understand how Python reads and executes code
- Troubleshoot common script errors
- Evaluate code quality

**Prerequisites:** Python installed (Guide #1)

**Estimated Duration:** 1-2 hours

---

### 3. Python Variables and Basic Data Types
**File:** `variables-and-basic-data-types.json`  
**Status:** ✅ Complete  
**Scope:** Main concept (variables) + related sub-concepts (4 data types + type conversion)

**Learning Objectives:**
- Understand what variables are and why they're useful
- Learn the four basic data types: `int`, `float`, `str`, `bool`
- Understand how Python automatically assigns types
- Create and use variables in scripts
- Convert between data types
- Troubleshoot variable-related errors
- Evaluate variable naming and type choices
- Create projects using variables

**Prerequisites:** 
- Python installed (Guide #1)
- Can create and run scripts (Guide #2)

**Estimated Duration:** 2-3 hours

**Transition Statement:** *"You are ready to learn **input, math operations, and conditions** next!"*

---

### 4. Input and Operations
**File:** `input-and-operations.json`  
**Status:** ✅ Complete  
**Scope:** Main concept (interactive programs) + related sub-concepts (input, math operations, string operations)

**Learning Objectives:**
- Get user input using the `input()` function
- Convert input strings to appropriate data types (`int()`, `float()`)
- Perform arithmetic operations (`+`, `-`, `*`, `/`, `//`, `%`, `**`)
- Understand order of operations (PEMDAS)
- Perform string operations (concatenation, methods like `.upper()`, `.lower()`, `.strip()`)
- Combine input with operations to create interactive programs
- Troubleshoot input and operation errors
- Evaluate code that uses input and operations
- Create interactive programs (calculators, converters, quizzes)

**Prerequisites:**
- Variables and data types (Guide #3)
- Can create and run scripts (Guide #2)

**Estimated Duration:** 2-3 hours

**Why This Guide:**
- Builds directly on variables by making programs interactive
- Introduces operations before conditional logic (easier to understand)
- Creates foundation for conditional statements (which will use operations in conditions)

**Key Concepts:**
- `input()` function and prompts
- Type conversion for input (`int()`, `float()`, `str()`)
- Arithmetic operators and precedence
- String concatenation and methods
- Interactive program design

**Example Projects:**
- Simple calculator
- Unit converter
- Personal information form
- String manipulator

---

### 5. Conditional Statements
**File:** `conditional-statements.json`  
**Status:** ✅ Complete  
**Scope:** Single main concept (decision-making in code) + related sub-concepts (comparisons, boolean logic, if/elif/else)

**Learning Objectives:**
- Understand when and why to use conditional statements
- Use comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`)
- Understand boolean logic (`and`, `or`, `not`)
- Write `if` statements for single conditions
- Write `if-else` statements for two outcomes
- Write `if-elif-else` statements for multiple outcomes
- Combine conditions with input and operations
- Nest conditional statements
- Troubleshoot conditional logic errors
- Evaluate conditional statement design
- Create decision-making programs (games, validators, calculators with conditions)

**Prerequisites:**
- Input and operations (Guide #4)
- Variables and data types (Guide #3)

**Estimated Duration:** 2-3 hours

**Why This Guide:**
- Conditional statements are a distinct control flow concept
- Requires understanding of operations (for comparisons)
- Enables programs that make decisions based on user input
- Natural progression: operations → decision-making

**Key Concepts:**
- Comparison operators
- Boolean values (`True`, `False`)
- `if`, `elif`, `else` statements
- Logical operators (`and`, `or`, `not`)
- Nested conditionals
- Conditional program flow

**Example Projects:**
- Age-based access control
- Grade calculator with letter grades
- Number guessing game
- Password validator
- Menu-driven program

---

### 6. Loops
**File:** `loops.json`  
**Status:** ✅ Complete  
**Scope:** Single main concept (repetition in code) + related sub-concepts (`for`/`while`, loop control, iteration patterns)

**Learning Objectives:**
- Understand when and why to use loops
- Write `for` loops (counting and iterating)
- Write `while` loops (condition-based repetition)
- Use loop control (`break`, `continue`)
- Nest loops when appropriate
- Combine loops with conditionals and operations
- Troubleshoot common loop errors
- Evaluate loop design and choose the right loop type
- Create programs that repeat actions (counters, menus, simulations)

**Prerequisites:**
- Conditional statements (Guide #5)
- Input and operations (Guide #4)
- Variables and data types (Guide #3)

**Estimated Duration:** 2-3 hours

**Why This Guide:**
- Loops are the natural next step in control flow after conditionals
- Enables repetition without copying code
- Foundation for iterating over sequences (e.g., in a future Lists guide)

**Key Concepts:**
- `for` loops and `range()`
- `while` loops and loop conditions
- `break` and `continue`
- Nested loops
- Iteration patterns and accumulation

---

### 7. Functions
**File:** `functions.json`  
**Status:** ✅ Complete  
**Scope:** Single main concept (reusable, named blocks of code) + related sub-concepts (parameters, return values, scope)

**Learning Objectives:**
- Understand when and why to use functions
- Define functions with `def`
- Use parameters and arguments
- Return values from functions
- Understand local scope and variable visibility
- Combine functions with variables, conditionals, and loops
- Troubleshoot common function errors
- Evaluate function design (naming, single responsibility)
- Create programs organized into reusable functions

**Prerequisites:**
- Loops (Guide #6)
- Conditional statements (Guide #5)
- Variables, input, and operations (Guides #3, #4)

**Estimated Duration:** 2-3 hours

**Why This Guide:**
- Functions organize code and avoid repetition at a structural level
- Essential for readable, maintainable programs
- Builds on all prior concepts (variables, conditionals, loops) by wrapping them in reusable units

**Key Concepts:**
- Defining and calling functions
- Parameters and arguments
- Return values and `return`
- Local scope
- Function design and reuse

---

### 8. Lists
**File:** `lists.json`  
**Status:** ✅ Complete  
**Scope:** Single main concept (Lists) + related sub-concepts (creating lists, indexing/slicing, list methods, iterating with for, lists and functions)

**Learning Objectives:**
- Create lists with literals `[]` and `list()`
- Use indexing (0-based, negative indices) and slicing
- Use list methods (e.g. `append`, `pop`, `len()`)
- Iterate over lists with `for item in list`
- Write functions that take and return lists
- Troubleshoot common list errors (IndexError, slice bounds, mutation)
- Evaluate when to use a list vs single variables
- Create list-based projects (grade lists, shopping lists, menus, number tools)

**Prerequisites:** Guides #1–#7 (Variables, Scripts, Input/Operations, Conditionals, Loops, Functions)

**Estimated Duration:** 2–3 hours

**Why This Guide:**
- Natural next step after functions; store and process sequences of data
- Foundation for iterating over data at scale
- Prepares for Collections guide (tuples, dictionaries)

**Key Concepts:**
- List literal, element, index, slice
- Mutation (append, pop), `len()`
- Iteration over a list
- Lists as function arguments and return values

---

### 9. Collections
**File:** `collections.json`  
**Status:** ✅ Complete  
**Scope:** Tuples (immutable), dictionaries (key–value), iteration over different collections, when to use which

**Learning Objectives:**
- Understand tuples as immutable sequences
- Create and use dictionaries for key–value data
- Iterate over tuples and dictionaries
- Choose the right collection type for the problem

**Prerequisites:** Guide #8 (Lists)

**Estimated Duration:** 2–3 hours

**Why This Guide:**
- Builds on lists; compares and contrasts tuples and dicts
- Same depth/length standard as other guides

**Key Concepts:**
- Tuples, immutability, unpacking
- Dictionaries, keys, values, access
- Iteration over collections

---

### 10. Working with Files
**File:** `working-with-files.json`  
**Status:** ✅ Complete  
**Scope:** Reading and writing text files; open, read, write, close, with; file paths; line-by-line processing

**Learning Objectives:**
- Open, read, write, and close text files in Python
- Use the `with` statement for safe file handling
- Work with file modes (`"r"`, `"w"`, `"a"`)
- Use `read()`, `readline()`, `readlines()`, `write()`, `writelines()`
- Understand relative and absolute paths
- Process files line-by-line and combine file I/O with strings, loops, and functions

**Prerequisites:** Guides #1–#9 (especially strings, loops, functions, collections)

**Estimated Duration:** 2–3 hours

**Why This Guide:**
- Natural next step after collections; programs can persist and load data
- Foundation for configs, logs, CSV-like data, and save/load features
- Prepares for robust file handling (e.g., exceptions in a future guide)

**Key Concepts:**
- `open()`, file object, file mode
- `read()`, `readlines()`, `write()`, newlines
- `with` statement, `close()`, path
- Troubleshooting FileNotFoundError, mode, and path issues

---

## Complete Learning Path

```
┌─────────────────────────────────────┐
│  1. Installing Python on Windows    │
│     (No prerequisites)              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  2. Your First Python Script        │
│     (Requires: Guide #1)            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  3. Variables and Basic Data Types  │
│     (Requires: Guides #1, #2)       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  4. Input and Operations             │
│     (Requires: Guides #1, #2, #3)   │
│     ✅ COMPLETE                      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  5. Conditional Statements          │
│     (Requires: Guides #1-4)          │
│     ✅ COMPLETE                      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  6. Loops                             │
│     (Requires: Guides #1-5)           │
│     ✅ COMPLETE                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  7. Functions                         │
│     (Requires: Guides #1-6)           │
│     ✅ COMPLETE                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  8. Lists                             │
│     (Requires: Guides #1-7)           │
│     ✅ COMPLETE                       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  9. Collections                       │
│     (Requires: Guides #1-8)           │
│     ✅ COMPLETE                       │
│     Tuples, Dictionaries              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  10. Working with Files               │
│     (Requires: Guides #1-9)           │
│     ✅ COMPLETE                       │
│     Read, write, with, paths          │
└─────────────────────────────────────┘
```

---

## Learning Progression Rationale

### Phase 1: Foundation (Guides 1-2)
**Goal:** Get students coding quickly
- **Guide 1:** Setup and installation
- **Guide 2:** Basic script creation and execution

### Phase 2: Data Storage (Guide 3)
**Goal:** Understand how to store and work with information
- Variables as containers for data
- Different data types for different information
- Type conversion basics

### Phase 3: Interactivity (Guide 4)
**Goal:** Make programs interactive and perform calculations
- Get input from users
- Perform operations on data
- Create useful interactive tools

### Phase 4: Decision-Making (Guide 5)
**Goal:** Programs that make choices
- Conditional logic
- Multiple program paths
- Complex interactive programs

### Phase 5: Repetition (Guide 6)
**Goal:** Repeat actions without copying code
- `for` and `while` loops
- Loop control and iteration patterns
- Programs that repeat until a condition is met or a count is reached

### Phase 6: Organization and Reuse (Guide 7)
**Goal:** Structure code into reusable units
- Defining and calling functions
- Parameters, return values, and scope
- Readable, maintainable program structure

### Phase 7: Sequences (Guide 8)
**Goal:** Store and process ordered sequences with lists
- Creating lists, indexing and slicing
- List methods and mutation
- Iteration over lists, lists and functions

### Phase 8: Collections (Guide 9)
**Goal:** Tuples, dictionaries, and choosing the right collection
- Tuples (immutable), dictionaries (key–value)
- Iteration over different collections

### Phase 9: File I/O (Guide 10)
**Goal:** Read and write text files; persist and load data
- Open, read, write, close; the `with` statement
- File modes, paths, line-by-line processing
- Programs that save and load data (configs, logs, reports)

---

## Guide Scope Standards

Based on analysis of existing guides, each guide should:

### Structure
- **7 Stages:** Starting → Remembering → Understanding → Applying → Analyzing → Evaluating → Creating
- **7 Sections per Stage:** mindset, recap, core, guidedPractice, challenge, reflection, transition
- **Consistent depth:** ~1,500-1,700 lines per guide

### Content Scope
- **Single main concept** per guide (e.g., "Variables", "Conditional Statements")
- **Related sub-concepts** that build on the main concept (e.g., 4 data types under "Variables")
- **Comprehensive coverage** through all 7 Bloom's stages

### Activity Variety
- **3-5 activities** in guidedPractice per stage
- **2-3 activities** in challenge per stage
- **Checklist + 3-5 prompts** in reflection per stage
- **Multiple question types:** multiple choice, short answer, matching, ordering, code examples

---

## Future Roadmap Considerations

- **Guide #8: Lists** — Implemented. Single-concept guide on lists (creating, indexing, slicing, methods, iteration, functions).
- **Guide #9: Collections** — Implemented. Tuples, dictionaries, iteration over different collections (same depth/length standard).
- **Guide #10: Working with Files** — Implemented. Reading and writing text files; open, read, write, close, with; paths; line-by-line processing.
- **Guide #11 (next):** Errors and Exceptions — Proposed next; handle FileNotFoundError and other errors robustly.

---

## Implementation Status

| Guide | Status | File | Estimated Completion |
|-------|--------|------|---------------------|
| Installing Python | ✅ Complete | `python-install.json` | Done |
| First Python Script | ✅ Complete | `first-python-script.json` | Done |
| Variables & Data Types | ✅ Complete | `variables-and-basic-data-types.json` | Done |
| Input and Operations | ✅ Complete | `input-and-operations.json` | Done |
| Conditional Statements | ✅ Complete | `conditional-statements.json` | Done |
| Loops | ✅ Complete | `loops.json` | Done |
| Functions | ✅ Complete | `functions.json` | Done |
| Lists | ✅ Complete | `lists.json` | Done |
| Collections | ✅ Complete | `collections.json` | Done |
| Working with Files | ✅ Complete | `working-with-files.json` | Done |

---

## Notes

- Each guide is self-contained but builds on previous guides
- Guides follow Bloom's Taxonomy for progressive learning
- All guides use the same JSON structure and format
- Guides are designed for beginner Python learners
- Estimated durations assume active learning and practice time

---

**Last Updated:** 2026-02-05  
**Document Version:** 1.3
