### Clean Code | The Odin Project - Summary

The majority of a developer's time is spent **reading code**—code written by others or code they wrote weeks ago. Clean code principles are guidelines to improve **readability and maintainability**, leading to gradual improvement rather than immediate perfection.

---

### What is Clean Code?

Clean code is immediately understandable due to meaningful names, consistent formatting, and logical patterns, even if two pieces of code perform the exact same task.

|**Feature**|**Example of Unclean Code**|**Example of Clean Code**|
|---|---|---|
|**Clarity**|`const x = function (z)`|`const generateUserGreeting = function (name)`|
|**Formatting**|Inconsistent indentation/spacing, single-letter variables used broadly.|Consistent indentation/spacing, descriptive variable names.|

**Naming Conventions**:

- **`camelCase`**: Common in JavaScript, where the first word is lowercase and the first letter of subsequent words is capitalized (e.g., `generateUserGreeting`).
    
- **Consistency**: Follow a set convention and apply it consistently across a project.
    

---

### Principles for Naming Functions and Variables

Good names are descriptive and predictable, helping the reader immediately understand the purpose of the code.

|**Principle**|**Variable/Constant Naming**|**Function Naming**|
|---|---|---|
|**Descriptive**|A good name suggests what the thing is (e.g., `greeting`).|A function name suggests what the action is (e.g., `generateUserGreeting`).|
|**Consistent Vocabulary**|Use the same terms for similar concepts (`Player` vs. `User`).|Use the same verbs for similar actions (`getPlayerScore`, not `fetchPlayerName`).|
|**Parts of Speech**|Variables should start with a **noun** or **adjective** (representing a _thing_).|Functions should start with a **verb** (representing an _action_).|
|**Searchable/Understandable**|Avoid "magic values" (bare numbers/strings). Use descriptive **constants** (e.g., `const ONE_HOUR = 3600000;`). Constants are often capitalized (e.g., `ONE_HOUR`) to signify their true, unchanging nature.|N/A|

---

### Indentation and Line Length

While different style guides exist, **consistency is paramount**.

- **Indentation**: Choose a method (spaces or tabs) and stick to it.
    
- **Line Length**: Limit line length (often around **80 characters**) for easier reading. When breaking a long line, break after an operator or comma, and choose a consistent formatting for the continuation lines.
    
- **Semicolons (JavaScript)**: Although they are often optional due to automatic insertion, it is recommended to **add semicolons consistently** to prevent potential bugs where automatic insertion fails.
    

---

### Guidelines for Comments

Comments are useful tools that can be misused; good code often speaks for itself.

|**Pitfall (Bad Commenting)**|**Guideline (Good Commenting)**|
|---|---|
|**Tracking Changes**|**Don't comment when you should be using Git.** History tracking (dates, author names, reasons for change) belongs in `git log`, not in the code file.|
|**Commenting Out Code**|**Do not leave unused code commented out.** Delete it; if needed later, retrieve it from your Git history.|
|**Telling _How_**|**Tell _Why_, not _How_.** Avoid comments that duplicate the code's logic (i.e., pseudocode). If the "how" is complex, use descriptive naming to clarify it.|
|**Redundancy**|Good comments explain **the reason behind** an unintuitive piece of code, or clarify complex domain logic (e.g., providing the formula for BMI). The best code often **eliminates the need for a comment** by using descriptive names.|

---

---
**Previous**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/6- Problem Solving|6- Problem Solving]] | **Next**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/7.1- Clean Code Principles|7.1- Clean Code Principles]]
