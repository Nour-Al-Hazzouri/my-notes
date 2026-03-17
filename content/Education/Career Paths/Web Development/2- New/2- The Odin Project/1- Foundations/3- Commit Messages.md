# Complete Guide to Writing Git Commit Messages

## Why Commit Messages Matter

- **Job Applications**: Employers review your GitHub commit history to assess your professionalism
- **Team Collaboration**: Clear messages help teammates understand changes without reading all the code
- **Future Reference**: You'll forget your reasoning; good commits explain the "why" behind changes
- **Bug Tracking**: Makes it easy to identify when and why bugs were introduced
- **Project Maintenance**: A well-maintained commit history is a powerful tool for long-term project success

## The Seven Core Rules

### 1. Separate Subject from Body with a Blank Line

- First line is the subject (summary)
- Leave one blank line
- Then add the body (detailed explanation)
- Many Git tools rely on this separation

**Example:**

```
Fix user authentication bug

The login system was failing when users had special characters
in their passwords. Updated the validation regex to properly
escape special characters before processing.
```

### 2. Limit the Subject Line to 50 Characters

- This is a guideline, not a hard rule
- Forces you to think concisely
- GitHub will warn at 50 and truncate at 72
- If you struggle to summarize, you may be committing too many changes at once

**Good:** `Add user profile page`  
**Bad:** `Add a new user profile page with avatar upload functionality and bio section`

### 3. Capitalize the Subject Line

- Always start with a capital letter
- Simple but makes commit history look professional

**Good:** `Refactor authentication module`  
**Bad:** `refactor authentication module`

### 4. Do Not End the Subject Line with a Period

- Trailing punctuation is unnecessary
- Space is precious when keeping commits to 50 characters

**Good:** `Update README with installation steps`  
**Bad:** `Update README with installation steps.`

### 5. Use the Imperative Mood in the Subject Line

- Write as if giving a command or instruction
- Git itself uses imperative mood (e.g., "Merge branch")
- Your subject should complete: "If applied, this commit will **[your subject line]**"

**Good Examples:**

- `Refactor subsystem X for readability`
- `Remove deprecated methods`
- `Update getting started documentation`
- `Fix bug in data validation`

**Bad Examples:**

- `Fixed bug in data validation` (past tense)
- `Fixing bug in data validation` (present continuous)
- `Fixes for data validation` (plural)

**Test it:** "If applied, this commit will **refactor subsystem X**" ✓

### 6. Wrap the Body at 72 Characters

- Git doesn't auto-wrap text
- 72 characters leaves room for Git to indent while staying under 80 total
- Configure your text editor to help with this

### 7. Use the Body to Explain WHAT and WHY, Not HOW

- Code shows HOW; commits should explain WHAT changed and WHY
- Focus on the problem being solved
- Explain why this approach was chosen
- Mention side effects or non-obvious consequences

**Great Example:**

```
Simplify serialize.h's exception handling

Remove the 'state' and 'exceptmask' from serialize.h's stream
implementations, as well as related methods.

As exceptmask always included 'failbit', and setstate was always
called with bits = failbit, all it did was immediately raise an
exception. Get rid of those variables, and replace the setstate
with direct exception throwing (which also removes some dead code).
```

## Conventional Commits Format

A structured specification for commit messages that enables automated tooling:

### Structure

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common Types

- **feat:** New feature (triggers MINOR version bump)
- **fix:** Bug fix (triggers PATCH version bump)
- **docs:** Documentation changes
- **style:** Code formatting, missing semicolons (no code change)
- **refactor:** Code restructuring without changing behavior
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **build:** Changes to build system or dependencies
- **ci:** Changes to CI/CD configuration
- **chore:** Maintenance tasks

### Breaking Changes

Indicate with `!` after type/scope OR use `BREAKING CHANGE:` footer:

```
feat!: remove support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6
```

### Examples

**Simple commit (no body needed):**

```
docs: correct spelling of CHANGELOG
```

**With scope:**

```
feat(parser): add ability to parse arrays
```

**With body and footer:**

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Reviewed-by: Z
Refs: #123
```

**Breaking change:**

```
feat(api)!: send an email to the customer when a product is shipped
```

## When to Commit

Commit whenever you have a **meaningful change**:

- ✅ Feature works as intended
- ✅ Bug is fixed
- ✅ Typo is corrected
- ✅ Refactoring is complete
- ✅ Tests are added/updated

**Think of commits as snapshots** of your code that you'd want to return to.

**Commit early and often!** Better to have more atomic commits than fewer large ones.

## Bad vs. Good Commits

### ❌ Bad

```
fix a bug
```

**Why it's bad:** Vague, no context, doesn't explain what or why

### ✅ Good

```
Add missing link and alt text to company logo

Screen readers won't read the images to users with disabilities
without this information. Added descriptive alt text and wrapped
logo in link to homepage.
```

**Why it's good:** Clear subject, explains the problem and solution

### ❌ Bad Examples

- `saved`
- `updated`
- `fixed stuff`
- `WIP`
- `asdfasdf`
- `final version`
- `final version 2`

### ✅ Good Examples

- `Add email validation to signup form`
- `Fix memory leak in image processing`
- `Refactor user service for testability`
- `Update dependencies to resolve security vulnerabilities`

## Practical Tips

1. **Use VSCode** (or another proper text editor)
    
    - Don't use `git commit -m` for complex commits
    - Just type `git commit` to open your editor
    - Easier to write multi-line messages and check character counts
2. **Use active voice**
    
    - "Fix card generator" not "Card generator fixed"
3. **Be specific**
    
    - Instead of "Update tests", write "Add unit tests for user authentication"
4. **Reference issues** (in footer)
    
    ```
    Resolves: #123
    See also: #456, #789
    ```
    
5. **Use spell check**
    
    - Install extensions in your editor
    - Typos in commits look unprofessional
6. **Learn the command line**
    
    - More powerful than IDE Git integration
    - Better for viewing and managing commit history

## Quick Reference

**Commit Structure:**

```
Short summary (50 chars max, imperative mood, capitalized)

Detailed explanation of what and why, not how. Wrap at 72 chars.
Explain the problem that this commit solves. Focus on context and
reasoning. Can include bullet points if needed.

Resolves: #123
```

**With Conventional Commits:**

```
type(scope): short summary (50 chars max, no period)

Detailed explanation wrapped at 72 chars.

BREAKING CHANGE: description if applicable
Resolves: #123
```

## The Ultimate Test

Ask yourself: **"Will my future self (or teammates) understand what I did and why from this message alone?"**

If no, add more context!

---
**Previous**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/1- Motivation and Mindset|Diagram Showcasing the best way for learning]] | **Next**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/6- Problem Solving|6- Problem Solving]]
