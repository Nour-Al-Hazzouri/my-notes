**Instructor:** Rony Rizk
*Note: This session is preparation for an upcoming session on CI/CD with GitHub Actions.*

---

## 1. Introduction & The Problem

This workshop covers approximately 90% of the daily use of Git in industry.

### The Core Problem

* When editing a standard text file, it only preserves the latest state; past states are lost.
* In large codebases, a developer might modify a specific module where changes work in isolation, but inadvertently break another part of the system.
* Accountable collaboration requires the ability to roll back to a known working state quickly to diagnose and fix issues, preventing costly downtime.
* Development must occur in an environment where the production/main codebase remains functional regardless of ongoing edits or additions.

### Essential Source Control Capabilities

1. **History Preservation:** Detailed tracking of historical changes.
2. **Easy Recovery:** Ability to quickly restore working code if something breaks.
3. **Collaboration:** Enabling multiple contributors to work concurrently without conflict.

---

## 2. Git Fundamentals

Git was developed by the Linux Foundation to solve reliability and versioning issues, and is free and open-source. It maintains strong backwards compatibility: commands from 25+ years ago remain consistent, even as modern commands are introduced.

### Initial Configuration

After installation via the official website, configure your identity (used later with GitHub):

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

### Initializing a Repository

* Running `git init` in any directory creates a Git repository, placing that directory under version control.
* This generates a hidden `.git` folder, which should never be manually modified.
* Because humans are prone to forgetfulness, version control serves as a critical safety net.

---

## 3. Basic Workflow & Inspection

### Staging & Committing

* `git status` — Checks the repository state and shows whether changes are staged or committed.
* `git add .` — Stages modified/new files, marking them ready for commit.
* `git commit` — Creates a permanent snapshot of staged changes with a timestamp and message, allowing future inspection or rollback.
* Subsequent changes follow this same cycle of add and commit.

### Viewing History & Changes

* `git log --oneline` — Displays a condensed commit history with short hashes and commit messages.
* `git log` — Displays complete commit details (author, date, full message).
* `git diff` — Shows differences between unstaged changes and the latest commit.
* `git diff <branch1>..<branch2>` — Compares differences between two branches.
* `git checkout <commit-hash>` — Temporarily navigates the working directory to a specific past commit.

---

## 4. Branching & Merging

Branches provide isolated copies of the working environment, allowing developers to test, make mistakes, and fix issues without jeopardizing the main codebase.

* **Default Branch:** Defaults to `main` (historically `master`). Rename current branch using:
  ```bash
  git branch -M main
  ```
* **Creating Branches:**
  * `git checkout -b <branch-name>` — Creates and switches to a new branch.
  * Creating a new branch copies over the complete commit history from the source branch.
  * `git checkout -b <branch-name> <commit-hash>` — Creates a new branch originating from an older commit.
* **Listing Branches:** `git branch` lists all local branches.
* **Merging:**
  * `git merge <branch-name>` — Integrates changes from the specified branch into the currently active branch.
  * **Merge Conflicts:** Occur when conflicting changes exist on the same lines across branches. Conflicts require manual resolution before staging (`git add`), committing, and completing the merge.

---

## 5. Undoing Changes

When needing to return to an earlier state, Git provides both safe and destructive options:

* **Safe Method (`git revert`):**
  ```bash
  git revert <commit-hash>
  ```

  Creates a new commit that inverts the specified changes, undoing work while preserving full commit history.

* **Destructive Method (`git reset`):**
  ```bash
  git reset <commit-hash>
  ```

  Moves the branch pointer back to the specified commit, permanently rewriting history by removing intermediate commits.

---

## 6. GitHub & Remote Collaboration

GitHub (owned by Microsoft) hosts vast amounts of global open-source and proprietary code.

* **Remote Repositories:** While `git init` sets up a local repository, GitHub hosts the remote repository. Link them locally to push past and future commits.
* **Authentication:** Pushing requires authentication via login credentials or a Personal Access Token (generated in GitHub Developer Settings under repository scopes).
* **Cloning:**
  ```bash
  git clone <repository-url>
  ```

  Downloads a complete copy of the remote repository to another machine.

* **Branch Protection:** Having push access does not imply pushing directly to `main`. All changes should be developed on feature branches and merged via review.

---

## 7. Q&A

**Q:** If a popular repository with multiple forks performs a `git reset` that rewrites history, how do child repositories resolve conflicts when pulling from upstream?

**A:** Resolution must be handled manually. Repository maintainers are responsible for reviewing code diffs and resolving conflicts to ensure codebase stability.
