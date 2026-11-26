---
title: "Testing Using Playwright and CI/CD"
type: workshop
instructor: "Rony Rizk"
date: N/A
tags:
  - workshop
  - testing
  - playwright
  - ci-cd
  - github-actions
  - devops
  - javascript
  - js
source: ""
status: complete
---

## Overview

> [!info] Session Info
> **Instructor:** Rony Rizk
> **Prerequisite:** [[Git & Github by Rony Rizk]] · [[CI-CD & GitHub Actions by Roni Rizk]]
> **Recording / Slides:** `N/A`

Workshop 3 of 3 in Rony Rizk's series. Covers end-to-end testing with Playwright, its integration into CI/CD pipelines, and using the Playwright MCP server for AI-assisted test generation.

## Table of Contents

- [[#Overview & Background]]
- [[#The Role & Importance of Testing]]
- [[#Evolution of Testing — Static vs. Dynamic]]
- [[#Playwright Overview & Features]]
- [[#Development & Test Setup]]
- [[#Playwright Commands & Configuration]]
- [[#Automation, CI/CD, & AI Integration]]

---

## Overview & Background

- **Workshop Context:** This workshop is the 3rd of a series:
  - 01: [[Git & Github by Rony Rizk]] (Completed)
  - 02: [[CI-CD & GitHub Actions by Roni Rizk]] (Completed)
  - 03: Playwright Testing (Today)
- **Speaker:** Rony Rizk.
- **Series Progression:** The series started with Docker, moved to Git/GitHub, continued to GitHub Actions and feature integration, and now focuses on testing and emphasizing its importance.
- **Modern Context (2026):** A new metric emerged in 2026: AI.

---

## The Role & Importance of Testing

- **QA Department Role:** In any company, the QA department consists of people who understand functionalities and have technical backgrounds to test an application, especially when new features are introduced.
- **End-User vs. Business Perspective:**
  - An end user does not know what the app is built with; they just want the app to work.
  - A business provides specifications to be added to a website.
  - A QA engineer must test everything.
- **Software Development Reality:** Software development is not just about writing fast code; it involves contracts, penalties, compensations, and strict requirements.
- **Company Liability:** Software companies face legal and operational liability. QA engineers often have to test hundreds of cases (500–600 cases) to ensure everything works properly.
- **Pre-QA Automation:** Development teams can now automate tests before handing code over to QA engineers, resulting in almost zero bugs reaching QA.
- **CI/CD Integration:** CI/CD is pointless without testing. One of the fundamental testing practices in CI/CD is end-to-end testing.

---

## Evolution of Testing — Static vs. Dynamic

- **Static / Manual Recording Testing:**
  - Previously, testing took a long time and was performed via recording, which could take 6–7 hours.
  - Test recordings are tied to a specific version or feature set. When features change, previously recorded tests become invalid and require a full re-test.
- **Dynamic Testing:**
  - Modern dynamic testing tools work similarly but can handle different data sets for the same test scenarios.
- **End-to-End (E2E) Testing:** Testing the application flow from start to finish.

---

## Playwright Overview & Features

- **Core Behavior:** Playwright opens the browser and interacts with the application just like an actual user.
- **Industry Adoption & Licensing:** Free of charge, maintained by Microsoft, and adopted by large enterprise companies.
- **Auto-Waiting:** Playwright automatically waits for elements and page loads to eliminate timeouts, removing the need for manual sleep/wait timers.
- **Headless & Headed Modes:**
  - Runs headless tests using Chromium even if the local development server is closed, returning execution results.
  - In large platforms where test suites can take up to 8 hours, the most critical risk is an incorrect test. Running in headed mode (`--headed`) and checking reports allows detailed visual debugging.
- **Artifacts:** Provides test reports, screenshots, and video recordings.
- **Core Testing Philosophy:** Locate an element, test/interact with it, and assert that it acts as expected.
- **Granular Assertions:** Capable of validating fine details, including error messages, text styles, and colors (previously often skipped due to tight project schedules).

---

## Development & Test Setup

- **Dependency Classification:**
  - `dependencies`: Required for the production application runtime.
  - `devDependencies`: Required only during local development and testing.
- **Application Under Test:**
  - Built with `server.js`, exposing multiple API endpoints (e.g., health, login, logout).
  - Uses Express middleware for serving static files from a `public/` directory hosting generated HTML.
  - Application runs at `http://localhost:3000` presenting a login screen with specific username and password credentials.
  - Even for simple applications, testing must account for regression testing of older functionality alongside new features.

---

## Playwright Commands & Configuration

### 1. Browser Installation

```bash
npx -y playwright@1.65.1 install chromium
```

### 2. Configuration (`playwright.config.js`)

- Placed in the project working directory.
- Automatically detected and used by `npx playwright`.
- Can be generated or configured with the help of AI.
- Note on QA coding requirements: While helpful, QA engineers are not strictly required to know how to write code from scratch.

### 3. Writing Tests

- Test files follow the naming convention `<name>.spec.js` (or language-specific equivalents).
- Automated tests encode business requirements into persistent tests so future team members understand expectations without manual re-explanation.
- **Example Test File (`tests/login.spec.js`):**
  ```javascript
  const { test, expect } = require('@playwright/test');

  test('shows the login page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Tasky');
    await expect(page.getByRole('heading', { name: 'Welcome to Tasky' })).toBeVisible();
  });
  ```

### 4. Running Tests

```bash
npx playwright test
```

### 5. Code Generation (`codegen`) & UI Mode

- Generate test code automatically by inspecting page elements:
  ```bash
  npx playwright codegen http://localhost:3000
  ```

  Hovering and navigating the cursor across components records actions and generates test code automatically.

- Interactive UI mode:
  ```bash
  playwright --ui
  ```

---

## Automation, CI/CD, & AI Integration

- **GitHub Actions Workflow:**
  - Create a `.github/workflows/` directory containing a `playwright.yaml` workflow file.
  - Define all test execution instructions and push to GitHub to run automated tests on each commit/PR.
- **Playwright MCP Server:**
  - Playwright provides an MCP server allowing AI assistants to generate and execute tests from natural English prompts:
    ```bash
    claude mcp add playwright -- npx @playwright/mcp@latest
    ```
  - Enables authoring automated end-to-end tests using plain English instructions.
