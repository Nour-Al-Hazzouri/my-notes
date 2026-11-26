- **Goal:** Set up a Next.js application, understand its environment configuration, and master the project directory structure and file responsibilities.
- **Required Tooling:**
  - **Node.js**
  - **Git**
  - **Code Editor:** Visual Studio Code (preferred).
  - **Extension:** Download the **ES7+ React/Redux/React-Native snippets** extension for VS Code to leverage shortcuts and streamline code authoring.

---

## 1. Project Initialization & Setup

### Creating a Next.js Application

```bash
# Standard initialization
npx create-next-app@latest ./
```

- `./`: Installs directly in the root directory.
- `<folder name>`: Creates and installs inside a designated subfolder.
- **Package Manager Tip:** Using `pnpm` is more advisable for faster package downloads and installations.
- **AI-Assisted Alternative:** Initialization can also be performed via Claude Code by executing `claude` inside the directory.

### Configuration Preferences

- During traditional CLI initialization, you can choose preferences such as the recommended app settings (all listed by default) or customize individual settings.
- **Rule of Thumb:** Recommended settings are always preferred. All project files are scaffolded and downloaded based on the selections made during setup.

---

## 2. Core Tooling & Features

| Tool / Concept | Category | Description |
| :--- | :--- | :--- |
| **Linter (ESLint)** | Code Quality | A tool used to detect warnings and errors prior to code compilation, avoiding bugs entirely. Next.js uses ESLint by default as a TypeScript-first linter, configurable with custom rules. |
| **Import Alias (`@/`)** | Path Optimization | Optimizes file paths to simplify imports. Eliminates deep relative traversals (e.g., `../../../`) by configuring `@/` to reference the root directory. |
| **Hot Module Replacement (HMR)** | Live Dev Server | Live DOM manipulation without requiring a full page refresh. Updates reflect instantly on screen whenever code changes are saved. |

---

## 3. Development Workflow

```
[ Install / Setup ] ───> [ Start Dev Server ] ───> [ Access App ] ────────> [ Live Iteration ]
npx create-next-app      npm run dev              http://localhost:3000     HMR updates UI on save
```

- **Running the Server:** Once the application is downloaded, start the local development server using:
  ```bash
  npm run dev
  ```
- **Local Address:** The application is hosted locally at `http://localhost:3000`.
- **Boilerplate Rendering:** Initial visit serves Next.js boilerplate code driven by `page.tsx` located inside the `app/` directory. Any modifications will be rendered live accordingly.

---

## 4. Project Directory & File Structure

```
my-next-app/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── node_modules/
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs (or .eslintrc.json)
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

### The `app/` Directory

| File | Purpose & Architecture |
| :--- | :--- |
| `favicon.ico` | Application icon displayed in browser tabs. |
| `globals.css` | Global styling file for the entire application. Rules defined here apply universally across all routes and components. |
| `layout.tsx` | Contains the root `<html>` and `<body>` tags along with the `{children}` prop. Shared across all routes. Components placed above or below `{children}` persist across page changes. Configured with Google Fonts and metadata (subjects/titles). *(Nested layouts will be covered in detail later).* |
| `page.tsx` | The landing page for the root route. Serves as the reserved default file name for any routing folder created inside `app/` to define its endpoint. |

### Root Configuration & Project Files

| File / Directory | Description |
| :--- | :--- |
| `public/` | Houses all static assets including images, fonts, SVGs, etc. |
| `node_modules/` | Contains external dependencies and packages required to run the application. |
| `.gitignore` | Prevents specified files and directories from being committed to the remote repository. Protects heavyweight directories (e.g., `node_modules`) and sensitive information (e.g., environment variables). |
| `AGENTS.md` | Instructions and context for AI agents working on your project. Includes the agent's knowledge cutoff date by default so it relies on current documentation rather than outdated training data. |
| `next.config.ts` | Main configuration file for Next.js where features and rules can be enabled or disabled. Crucial for enabling `experimental` flags for new, cutting-edge, or unstable features. |
| `package.json` | Manifest containing application scripts, dependencies, and devDependencies. |
| `package-lock.json` | Locks exact versions of all installed packages to guarantee dependency consistency across team members. |
| `tsconfig.json` | Configures TypeScript compiler settings, type checking, and path mappings. |
| `next-env.d.ts` | TypeScript declaration file for Next.js types (not necessary to modify or know in detail). |
| `README.md` | General documentation, setup guides, and project information. |

---

## 5. Rendering Architecture: Server vs. Client Components

### Component Types

- **Server Components (Default):**
  - By default, every component inside the `app/` directory is a Server Component.
  - Executing a `console.log()` inside `page.tsx` outputs the message to the terminal/server console, not the browser dev tools.
- **Client Components (`'use client'`):**
  - Converted into a client component by placing `'use client'` at the very top of the file.
  - Used when user interactivity (event handlers, hooks, client state) is needed.
- **Best Practice Architecture:** The optimal pattern in Next.js is creating focused Client Components and importing them inside Server Components.

### Syntax Rules in `page.tsx`

- When returning multiple sibling elements or components inside the same `return` statement, wrap them inside a **React Fragment** (`<> ... </>`).
