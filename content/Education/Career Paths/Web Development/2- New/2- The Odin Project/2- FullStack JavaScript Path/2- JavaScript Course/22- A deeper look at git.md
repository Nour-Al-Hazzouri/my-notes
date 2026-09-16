### Part 1: Git Rebasing Commands

#### **Basic Rebase**

Replays the unique commits of your current branch chronologically onto the tip of a target branch to create a completely linear project history.

```bash
git checkout experiment
git rebase master
```

- **`git checkout experiment`**: Switches your active workspace to the branch whose commits you want to move.
- **`git rebase master`**: Finds the common ancestor of both branches, temporarily saves the unique commit patches of `experiment` to temporary files, resets the `experiment` pointer to match `master`, and reapplies each patch in order on top of the new base.

---

#### **Rebasing Onto a Divergent Base**

Isolates only the commits unique to a child branch that diverged from a parent topic branch, replaying them directly onto a completely different base branch.

```bash
git rebase --onto master server client
```

- **`--onto master`**: Defines the new baseline where the isolated commits should be replayed.
- **`server`**: The upstream reference; Git uses this boundary to ignore any commits reachable by `server`.
- **`client`**: The topic branch containing the commits you want to move; Git checks this out automatically before beginning.

---

#### **Interactive Rebasing**

Opens an interactive, script-like editor displaying commits in chronological order (oldest first) so you can selectively squash, reword, edit, delete, or split commits.

```bash
git rebase -i HEAD~2
```

- **`git rebase -i`**: Initiates the interactive session.
- **`HEAD~2`**: Instructs Git to trace back starting from your current position to target the last two commits for rewriting.

---

#### **Rebasing A Force-Pushed Base**

Safely matches and filters your local commits against a teammate's force-pushed, rewritten commits using code-matching signatures to prevent duplicate entries.

```bash
git pull --rebase
```

- **`--rebase`**: Automatically fetches remote changes and runs a rebase instead of a merge. It calculates a **patch-id** (checksum of code changes) to match your local commits against the server's rewritten commits, discarding duplicates and reapplying only your truly unique commits on top of the teammate's new base.

---

### Part 2: Git Reset Commands

#### **Soft Reset**

Moves the active branch pointer back to a specified commit, keeping your Staging Area (Index) and Working Directory completely unchanged.

```bash
git reset --soft HEAD~
```

- **`git reset --soft`**: Tells the reset engine to execute only Step 1 (moving the branch pointer HEAD is currently pointing to) and stop.
- **`HEAD~`**: Targets the parent of the current commit. Since the Index and Working Directory are untouched, your undone commits appear as staged green files on `git status`.

---

#### **Mixed Reset (Default)**

Moves the current branch pointer back to a specified commit and resets the Index (Staging Area) to match it, while leaving your Working Directory filesystem untouched.

```bash
git reset HEAD~
```

- **`git reset`**: Executes both Step 1 (moving the branch pointer) and Step 2 (overwriting the Index). Since no flag is provided, it defaults to mixed.
- **`HEAD~`**: Overwrites your staging area with this commit's snapshot. Because your local filesystem is untouched, all your uncommitted edits are safely preserved but unstaged (showing in red on `git status`).

---

#### **Hard Reset**

Moves the branch pointer, resets the Index, and completely overwrites your physical Working Directory files to match the target commit, permanently deleting all uncommitted and staged modifications.

```bash
git reset --hard HEAD~
```

- **`git reset --hard`**: Executes all three steps of the reset engine (moves the branch pointer, updates the Index, and overwrites your Working Directory).
- **`HEAD~`**: Replaces all physical files in your sandbox with the snapshots from the parent commit. This permanently destroys any unstaged edits in your working directory.

---

#### **File-Level Reset with Paths**

Copies a file's snapshot from a specified commit (defaulting to HEAD) directly into the Index (Staging Area) without moving branch pointers or modifying the Working Directory.

```bash
git reset file.txt
```

- **`git reset`**: Overwrites only the Index since branch pointers cannot point to partial commits (Step 1 is skipped).
- **`file.txt`**: Shorthand for copying the version of `file.txt` from HEAD directly into your Index, serving as the exact opposite of `git add` to unstage files.

---

### Part 3: Reset vs. Checkout Commands

#### **Checkout Without Paths**

Updates all three trees to match a target branch, but does so in a working-directory safe manner and moves the HEAD pointer itself rather than moving branch reference pointers.

```bash
git checkout master
```

- **`git checkout`**: Moves the HEAD pointer itself to `master` (unlike `reset`, which would drag your active branch pointer along to `master`'s commit).
- **`master`**: Populates the Index and Working Directory with `master`'s snapshot. It is working-directory safe, checking for unsaved conflicts and blocking the checkout if it would destroy local changes.

---

#### **Checkout With Paths**

Overwrites a file in both your Index and Working Directory with the snapshot from a specified commit, without moving HEAD.

```bash
git checkout master file.txt
```

- **`git checkout master`**: Targets the version of the file inside the `master` commit.
- **`file.txt`**: Copies this file directly into your Index and overwrites it in your Working Directory sandbox. This is not working-directory safe and immediately overwrites any unsaved changes to that file.

---

### Complete Integrated Workflow Example

This comprehensive terminal sequence demonstrates how to utilize stashes, resets, interactive rebases, and cleanups to keep a branch immaculate before merging:

```bash
# 1. Create a clean feature branch from master
git checkout -b feature-rebuild master

# 2. Complete active work, stage, and commit
touch index.js styles.css
git add index.js styles.css
git commit -m "Draft feature files"

# 3. Undo the commit softly to isolate stylesheet additions into their own commit
git reset --soft HEAD~
git reset styles.css
git commit -m "Initialize JS scripts"
git add styles.css
git commit -m "Initialize CSS layouts"

# 4. Teammate pushed new commits to master. Fetch those updates.
git fetch origin

# 5. Replay your isolated commits cleanly on top of the newest master branch
git rebase origin/master

# 6. Squash both of your local commits into one single polished commit
git rebase -i HEAD~2
# (Inside the editor, mark the second line commit as 'squash', then write "Complete feature suite")

# 7. Merge the cleaned, linear history into master
git checkout master
git merge feature-rebuild

# 8. Clean up local pointer reference
git branch -d feature-rebuild
```
---

**Previous:** [[21- Graphs]] | **Next:** [[23- Working With Remotes]]