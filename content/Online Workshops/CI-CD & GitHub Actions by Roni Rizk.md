---
title: "CI/CD & GitHub Actions"
type: workshop
instructor: "Roni Rizk"
date: N/A
tags:
  - workshop
  - devops
  - ci-cd
  - github-actions
  - git
  - javascript
  - js
source: ""
status: complete
---

## Overview

> [!info] Session Info
> **Instructor:** Roni Rizk
> **Prerequisite:** [[Git & Github by Rony Rizk]]
> **Recording / Slides:** `N/A`

A continuation of the Git & GitHub session. Covers CI/CD concepts, automated testing with Node.js, and deploying with GitHub Actions and Render.

## Table of Contents

- [[#Introduction to CI/CD]]
- [[#Practical Case]]
- [[#Testing]]
- [[#Automation with GitHub Actions]]
- [[#Deployment & Pipeline Safety]]

---

## Introduction to CI/CD

CI/CD is an abbreviation for Continuous Integration and Continuous Deployment (or Continuous Delivery).

Many people want to develop an application and also handle its deployment. Development is the process of building the software lifecycle, whereas deployment allows the client to reach and use the application.

An application can be built without CI/CD, but deployment is necessary to make it accessible to clients.

Testing is a critical aspect because an application might run smoothly on your local machine, but fail to behave as intended on other environments and devices. Therefore, the first step is testing.

### Before vs. After CI/CD

- **Before CI/CD:** Constant deployment required manually worrying about backing up code, managing databases, configuring server versions, and tracking delicate operational details. If a single step was overlooked, the entire deployment process could fail. A significant portion of a developer's time was spent managing manual deployment overhead rather than writing code. Repeating manual steps for every `git push` is error-prone and tedious, especially when trying to remember specific test steps after some time has passed.
- **After CI/CD:** CI/CD resolves this by establishing an automated workflow to run tests and deployment steps configured once to execute automatically on every push or release. This significantly helps when deploying frequently or releasing hotfixes for missed features.

### DevOps & Automation

DevOps emphasizes automating repetitive testing and operational tasks.

There are various DevOps and CI/CD tools available (e.g., Jenkins, Azure DevOps, GitHub Actions). GitHub Actions was selected here due to its seamless integration with Git and GitHub, its widespread adoption, and its free-tier features for public and standard repositories.

---

## Practical Case

Workflow setup: Create a GitHub repository with a `README.md`, clone/pull it locally, and build an API.

### Project Setup and Code

#### `package.json`

```json
{
  "name": "ci-cd-ladder",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js",
    "test": "node --test"
  },
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

#### `app.js`

```javascript
const express = require('express');

function add(a, b) {
  return a + b;
}

function greet(name) {
  return name ? `Hello, ${name}!` : 'Hello, stranger!';
}

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/greet', (req, res) => {
  res.json({ message: greet(req.query.name) });
});

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'a and b must be numbers' });
  }
  res.json({ result: add(a, b) });
});

module.exports = app;
```

#### `server.js`

```javascript
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

This represents test code rather than the ultimate product; the goal is to continuously update, test, and deploy it.

### Running the API

```bash
npm i
npm start
```

This starts the API server. Navigating to `http://localhost:3000/health` returns:

```json
{ "status": "ok" }
```

---

## Testing

In large systems, errors are inevitable and there is often no room for manual mistakes. Writing code without tests is essentially testing your luck; automated tests are a necessity, not a luxury.

#### `app.test.js`

```javascript
test('GET /health says the API is ok', async () => {
  const res = await fetch(`${base}/health`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: 'ok' });
});

test('GET /greet with a name', async () => {
  const res = await fetch(`${base}/greet?name=Ada`);
  assert.deepStrictEqual(await res.json(), { message: 'Hello, Ada!' });
});

test('GET /greet without a name', async () => {
  const res = await fetch(`${base}/greet`);
  assert.deepStrictEqual(await res.json(), { message: 'Hello, stranger!' });
});

test('GET /add sums two numbers', async () => {
  const res = await fetch(`${base}/add?a=2&b=3`);
  assert.deepStrictEqual(await res.json(), { result: 5 });
});

test('GET /add rejects bad input', async () => {
  const res = await fetch(`${base}/add?a=two&b=3`);
  assert.strictEqual(res.status, 400);
});
```

A test script is configured inside `package.json` (`"test": "node --test"`), allowing tests to be executed via:

```bash
npm test
```

---

## Automation with GitHub Actions

GitHub Actions provisions a virtual runner, sets up the environment, installs dependencies, executes all configured test steps, and shuts down the runner when complete.

- Workflows are defined using `.yaml` (or `.yml`) files stored in the `.github/workflows/` directory.
- Workflow configuration templates can be found online, in GitHub marketplace starters, or generated with AI assistance.
- A workflow can automate collaborative steps (e.g., pulling latest branch changes, installing dependencies, running unit tests) whenever changes are pushed.
- This automated process allows developers to push changes and disconnect immediately without waiting locally for test suites to complete.

---

## Deployment & Pipeline Safety

Using GitHub Actions, communication between GitHub and external hosting platforms (such as Render) is handled securely via **GitHub Secrets** (e.g., API keys, deploy hooks, or access tokens). Sensitive credentials remain encrypted and are injected directly into workflow runner environments without exposing them in the repository codebase.

Multiple workflows or multi-job pipelines can be configured to run concurrently or sequentially on every push:

- **Gated Deployments:** Workflows enforce strict dependencies where deployment jobs run only if all preceding test suites pass successfully.
- **Preventing Broken Releases:** If any test fails, GitHub Actions terminates the pipeline immediately and halts deployment to the hosting service (such as Render), ensuring faulty builds never reach production clients.

---

**Summary:** The value of CI/CD lies in configuring your automation once so that every commit is tested and verified before deployment.
