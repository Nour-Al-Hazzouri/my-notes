## Request #1 — 2026-11-26

**Technical summary:** Merged `upstream/v5` (`7ef986a1`, Quartz v5.2.2) into `upgrade`, resolved all 8 merge conflicts, migrated `quartz.config.ts` to `quartz.config.yaml`, and updated `.github/workflows/deploy.yml` to run `install-plugins` before `quartz build`.

**Modified files**
- `.gitignore` — Combined local ignore entries (`Personal`, `.trash`, `دين`) with Quartz v5 entries (`.quartz/`, `quartz/cli/tui/dist/`, `.turbo/`). Why: preserve vault exclusions while ignoring v5 plugin/build artifacts.
- `README.md` — Kept `# My Workspace` heading. Why: retain repository title.
- `quartz.config.yaml` — Created from `quartz.config.default.yaml` with local `pageTitle`, `baseUrl`, `ignorePatterns`, and `Rubik` typography; removed `quartz.config.ts`. Why: Quartz v5 replaced `quartz.config.ts` with YAML configuration and `@quartz-community/*` plugins.
- `quartz/cli/handlers.js` — Accepted `upstream/v5` build error handling (`esbuild.stop()`) and `ensureUpstreamRemote()`. Why: align CLI with Quartz v5.
- `quartz/components/Explorer.tsx` — Removed per `upstream/v5`. Why: Explorer moved to `@quartz-community/explorer`.
- `quartz/components/PageList.tsx` — Preserved `getNumericPrefix` and `compareByName` N-prefix natural sort inside `byDateAndAlphabetical()` and `byDateAndAlphabeticalFolderFirst()` while adopting v5's parameterless signature and `<h2>` heading. Why: keep custom N-prefix sorting compatible with Quartz v5.
- `quartz/components/scripts/spa.inline.ts` — Kept `document.querySelector(".navigation-progress")?.remove()` and `await micromorph(document.body, html.body)`. Why: preserve both v5 progress cleanup and awaited DOM morphing.
- `quartz/plugins/transformers/citations.ts` — Removed per `upstream/v5`. Why: citations moved to `@quartz-community/citations` (disabled by default).
- `.github/workflows/deploy.yml` — Added `pnpm run install-plugins` before `pnpm quartz build`. Why: Quartz v5 requires installing external Git plugins into `.quartz/` prior to building.

**Plain English:** Updated the site's Quartz engine to the latest upstream v5.2.2 release, resolved all merge conflicts, migrated the site configuration to the new v5 YAML format with your title, URL, fonts, and ignored folders intact, and updated the GitHub Actions deployment workflow so plugins install before building.

## Request #2 — 2026-11-26

**Technical summary:** Updated `.github/workflows/deploy.yml` from `pnpm/action-setup@v3` (`version: 9`) to `pnpm/action-setup@v4` (`version: 10`).

**Modified files**
- `.github/workflows/deploy.yml` — Bump `pnpm/action-setup` to `v4` with pnpm `10`. Why: `upstream/v5` added `pnpm-workspace.yaml` without a `packages` field (pnpm v10 syntax), which causes pnpm v9 to fail with `ERROR packages field missing or empty`.

**Plain English:** Upgraded the pnpm version in the GitHub Actions deployment workflow from v9 to v10 so it can read the new Quartz v5 `pnpm-workspace.yaml` file without failing.

## Request #3 — 2026-11-26

**Technical summary:** Updated `baseUrl` in `quartz.config.yaml` to include the `/my-notes` GitHub Pages subpath and disabled `@quartz-community/cname`.

**Modified files**
- `quartz.config.yaml` — Set `baseUrl: Nour-Al-Hazzouri.github.io/my-notes` and `@quartz-community/cname` `enabled: false`. Why: site is hosted at `https://nour-al-hazzouri.github.io/my-notes/` without a custom domain, so `basePath`, canonical URLs, and 404 asset paths require `/my-notes`, and no `CNAME` file should be emitted.

**Plain English:** Fixed the site configuration so all deployed links, canonical URLs, and 404 paths include `/my-notes` for GitHub Pages and stopped generating an unnecessary `CNAME` file.

## Request #4 — 2026-11-26

**Technical summary:** Removed the Tags column from all tables in `Online Workshops/index.md` and stripped manual wikilink navigation from all 15 non-root `index.md` files under `content/`, leaving only YAML frontmatter and a one-line description.

**Modified files**
- `content/Online Workshops/index.md` — Removed `Tags` column from all 5 section tables. Why: inline backtick tags in table cells rendered visually on the right side of each link, defeating the purpose; tags already exist in YAML frontmatter for Quartz search/filtering.
- `content/Education/index.md` — Removed wikilink navigation list. Why: Quartz folder-page plugin already provides built-in subfolder navigation; the manual list was redundant.
- `content/Education/Career Paths/Information/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Career Paths/Web Development/index.md` — Removed wikilink navigation list and ToC. Why: same as above.
- `content/Education/Courses/Coursera/Google IT Support/Course 1/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/Coursera/Google IT Support/Course 2/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/Coursera/Google IT Support/Course 3/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/Coursera/Introduction to Artificial Intelligence (AI) IBM/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/Coursera/Microsoft 365/Work Smarter With Microsoft Word/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/YouTube/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/PDFs/Database/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/PDFs/Deitle- CS Programming/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/PDFs/Google Project Management/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Courses/PDFs/Programming/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/My Wonders/index.md` — Removed wikilink navigation list. Why: same as above.
- `content/Education/Math/Arithmetic/index.md` — Removed wikilink navigation list. Why: same as above.

**Plain English:** Cleaned up two related issues. First, the Online Workshops index had a "Tags" column in its tables that showed tag labels floating to the right of each workshop link — these were removed since the tags are already tracked in the page's frontmatter for search. Second, all the index files inside subfolders were filled with manual lists of links to their child pages, which Quartz already displays automatically via its built-in folder navigation. Those redundant lists were removed, leaving each index with just its title, frontmatter tags (for search), and a one-line description.

## Request #5 — 2026-11-26

**Technical summary:** Added `.section > .tags { display: none; }` to `quartz/styles/custom.scss` to hide the tags column injected by `@quartz-community/folder-page`'s `PageList` component in every folder listing row.

**Modified files**
- `quartz/styles/custom.scss` — Added `.section > .tags { display: none; }` with explanatory comment. Why: `@quartz-community/folder-page` v1.1.0 unconditionally renders every note's YAML frontmatter tags as a `<ul class="tags">` in the 3rd CSS grid column of each folder listing row; no `showTags` config option exists to disable it. The CSS `unicode-bidi: plaintext` already applied to `li` elements (for Arabic RTL support) caused wrapped tag labels to appear RTL-aligned, making the display look broken. The CSS rule hides the column entirely while leaving tags intact in frontmatter for Quartz search/filtering.

**Plain English:** The folder listing pages (like `/online-workshops/`) were showing all of each note's tags floating to the right of its title, in an ugly and sometimes RTL-looking column. This is baked into the Quartz folder-page plugin with no on/off switch, so the fix was to add one CSS line that hides that column site-wide. Tags still work normally for search and filtering — they just no longer appear visually in the folder list.
