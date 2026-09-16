### 1. Safe Remote History Manipulation (`--force-with-lease`)

**Standard pushes fail when local history is behind remote history to prevent overwriting collaborator commits. While `git push --force` blindly overwrites remote history with your local commits and can destroy shared work, `--force-with-lease` provides a fail-safe check. It verifies whether the remote branch has received new commits since your last fetch, blocking the push if remote updates exist.**

```bash
git push --force-with-lease origin main
```

- **`git push --force-with-lease origin main`**: Sends local commits to the remote `main` branch, but only executes if no new commits have been added to `origin/main` by collaborators since your last fetch. If the remote branch was updated, Git throws an error so you can fetch and integrate changes safely.

---

#### 2. Undoing Published Commits (`git revert`)

**Running `git reset` on commits already pushed to a public repository requires a force-push, which alters published history and risks breaking teammates' local repositories. `git revert` safely undoes changes on shared branches by appending a brand-new commit that applies the inverse diff of the target commit without rewriting existing history.**

```bash
git revert HEAD
git push origin main
```

- **`git revert HEAD`**: Inspects the latest commit (`HEAD`), calculates its inverse changes, and creates a new commit containing those opposite edits.
- **`git push origin main`**: Pushes the newly generated revert commit to the remote `main` branch as a standard fast-forward update, avoiding history rewrites.

---

#### 3. Merge Conflict Detection and Resolution

**Merge conflicts occur when Git cannot automatically combine branches—typically when competing edits are made to the exact same line of a file or when one person edits a file that another person deleted. Conflicts deactivate the "Merge pull request" button on GitHub until resolved. Simple line conflicts can be resolved directly on GitHub, while complex conflicts must be resolved locally on the command line by editing files, staging resolutions, and committing.**

```bash
git merge feature-branch
git add styleguide.md
git commit -m "Resolve merge conflict in styleguide.md"
git push origin main
```

- **`git merge feature-branch`**: Attempts a three-way merge of `feature-branch` into the current branch; if changes overlap on the same lines, Git halts and flags the conflicting files.
- **`git add styleguide.md`**: Stages the manually edited file once conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) have been removed and resolved.
- **`git commit -m "Resolve merge conflict in styleguide.md"`**: Finalizes the resolution by creating a dedicated merge commit.
- **`git push origin main`**: Pushes the resolved merge commit to the remote repository to re-enable PR merging.

---

**Previous:** [[22- A deeper look at git]]