> [!tip] 📹 Source Recording
> Full code walkthrough and detailed examples:
> [Google Drive Recording](https://drive.google.com/file/d/1anjXKObZyh_745ZTFJVPzuVy7dNXeTyc/view)

---

## 1. Why Server-Side Rendering?

- Old approach rendered everything in the browser — a negative approach because performance is reduced, which affects SEO and website ranking.
- The browser only understands HTML, CSS, and JS. Any framework (React, Next.js, etc.) is parsed down to these.
- If the JS file is large, the browser must wait for HTML and CSS to load before executing JS. Any one large file can cause the others to wait, keeping the page in a loading state until **hydration**.
- **Hydration**: the act of processing JS only when the browser actually needs it (a common interview concept). JS is specific to dynamic/interactive elements — buttons, forms, etc. If the user never triggers an interaction, JS is never executed.
- **Solution**: pre-render the page on the server so that when the user requests it, an optimally sized HTML/CSS payload is sent and only minimal JS is included.

---

## 2. Why Next.js?

- Next.js is production-ready and allows building full apps — UI, API, validation, database, authentication, and deployment — all from a single framework.
- In 2026, companies look for developers who can own a full feature end-to-end.
- Even front-end roles now require knowledge of APIs, server rendering, data fetching, auth, and architecture.
- **React vs. Next.js**: React excels at building UIs but doesn't define routing, server rendering, API endpoints, deployment optimizations, image optimization, or metadata handling. Next.js handles all of this.
- **SEO**: Crawlers need full access to page content. A browser-heavy (client-rendered) site limits crawler access and hurts rankings. Next.js pre-renders on the server, giving crawlers full visibility.

---

## 3. Core Next.js Capabilities

| Feature | Description |
|---|---|
| **Built-in Optimizations** | Dedicated `<Image>` and font components for faster loading |
| **Dynamic HTML Streaming** | Static content loads immediately; dynamic content shows a skeleton via React Suspense — no full-page loading state |
| **React Server Components** | Default rendering mode; heavy processing is handled by the server, reducing client burden |
| **Client-Side Rendering** | Add `'use client'` at the top of any file to opt into client rendering when user interaction (buttons, forms, etc.) is needed |
| **Server Actions** | Small back-end functionalities without a full API route |
| **Route Handlers** | Build full API endpoints inside Next.js |

---

## 4. Project Structure

### App Directory (`./app`)

- **App Router** — routing is file-system based and automatic (no compiler setup needed as in React).
- **HMR (Hot Module Replacement)** — updates page content without a full refresh.
- **Routes** — create a folder inside `app/` with the route name and add a `page.tsx` (or `page.jsx`) to automatically register that route.
- `page.tsx` should only render components. Best practice: keep a `/components` folder at the root and build per-route components there.
- **Nested Layouts**: Next.js 16+ only requests a shared layout once, regardless of how many nested routes use it — better performance over previous versions.

### Key Files

| File | Purpose |
|---|---|
| `app/layout.tsx` | Shared layout wrapping all pages. Anything placed above or below `{children}` appears on every page — ideal for navbar and footer |
| `app/globals.css` | Global CSS applied across the entire project |
| `public/` | All static assets and static data |
| `favicon.ico` | Replace with any image of the same name to change the browser tab icon |
| `.gitignore` | Exclude files/folders from Git (e.g. `node_modules`, `.env`) |
| `eslint.config.mjs` | Linter for catching errors visually during development |
| `next.config.js` | Configure Next.js features, caching, experimental options, etc. |
| `package.json` | Declares project dependencies shared across the team |
| `package-lock.json` | Locks dependency versions for consistent installs across the team |
| `postcss.config.mjs` | Configures PostCSS styling plugins |
| `tsconfig.json` | TypeScript configuration |

---

## 5. Route Handlers (API Endpoints)

1. Inside `app/`, create an `api/` folder (naming is recommended but not enforced).
2. Inside it, create a resource folder (e.g. `users/`) for your endpoint group.
3. Add a `route.ts` (or `route.js`) file — this is where you define GET, POST, and other handlers.
4. Test endpoints with the **Thunder Client** VS Code extension, which lets you make mock GET/POST requests and verify connectivity.

> [!tip] See the [source recording](https://drive.google.com/file/d/1anjXKObZyh_745ZTFJVPzuVy7dNXeTyc/view) for detailed code examples.

---

## 6. UI & Data Fetching

### Building UI Fast with Stitch + MCP

1. Connect Stitch to VS Code via MCP: generate an API key → copy credentials → open VS Code Command Palette → **Add MCP Server** → HTTP → paste the API client secret → choose global or workspace scope.
2. An `mcp.json` file opens where you can update the key.
3. Use the Copilot extension to select the MCP server and send a prompt to edit the UI.

### Linking UI to the Backend

| Method | How |
|---|---|
| **Client-Side Data Fetching** | Use the `useEffect` React hook to trigger data fetching at the right lifecycle moment |
| **Server-Side Data Fetching** | Use an `async` function with `await` — no hook needed; runs on the server |
