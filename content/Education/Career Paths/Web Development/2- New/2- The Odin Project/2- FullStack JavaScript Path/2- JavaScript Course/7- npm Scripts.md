### 1. Introduction to Npm Scripts

**Explanation:** npm scripts are automation tools built into Node.js that allow you to define custom commands for repetitive tasks like building, testing, or deploying applications. They eliminate the need for extra build tools and serve as documentation for a project's workflow.

**Example:**

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

- **`"scripts": {`**: Opens the object where all custom commands are stored.
- **`"test"`**: The name (key) of the script. It can be run using `npm test`.
- **`"mocha"`**: The actual shell command (value) that runs the Mocha testing framework.
- **`}`**: Closes the scripts object.

---

### 2. Basic Syntax and Execution

**Explanation:** Scripts are written as key-value pairs where the key is the command name and the value is the shell command. While most scripts require `npm run <name>`, special scripts like `start` and `test` can be run using shortcuts like `npm start`.

**Example:**

```json
{
  "scripts": {
    "start": "node server.js",
    "custom": "ls -a"
  }
}
```

- **`"start": "node server.js"`**: A special script that starts the application. Run it with `npm start`.
- **`"custom": "ls -a"`**: A user-defined script. Run it with `npm run custom`.
- **`"ls -a"`**: A standard shell command, showing that npm scripts can execute any command your terminal understands.

---

### 3. Advanced Tricks: Variables and Arguments

**Explanation:** You can make scripts dynamic by using internal package variables (prefixed with `$npm_package_`) or by passing extra arguments to an existing script using the `--` operator.

**Example:**

```json
{
  "version": "1.0.2",
  "scripts": {
    "version": "echo $npm_package_version",
    "lint": "eslint src",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

- **`"echo $npm_package_version"`**: Uses a variable to print "1.0.2" dynamically from the version field.
- **`"lint": "eslint src"`**: A base script to check code for errors.
- **`"npm run lint -- --fix"`**: Reuses the `lint` script and appends the `--fix` flag to it, executing `eslint src --fix`.

---

### 4. Using Shell Operators

**Explanation:** Since scripts run in a shell, you can use operators to control the flow: `&&` for sequential execution (only if the first succeeds), `&` for parallel execution, and `||` for fallback execution (only if the first fails).

**Example:**

```json
{
  "scripts": {
    "deploy": "npm run build && npm run test",
    "dev": "npm run build & npm run start",
    "fail-safe": "npm run test || echo 'Failed'"
  }
}
```

- **`"&&"`**: Runs the test only if the build finishes with a success code (0).
- **`"&"`**: Starts both the build and the server at the same time.
- **`"||"`**: Prints "Failed" only if the test command returns an error code.

---

### 5. Lifecycle Scripts (Hooks)

**Explanation:** npm has predefined "lifecycle" stages. By prefixing a script name with `pre` or `post`, npm automatically runs those hooks before or after the main script.

**Example:**

```json
{
  "scripts": {
    "pretest": "echo 'Cleaning...'",
    "test": "mocha",
    "posttest": "echo 'Done!'"
  }
}
```

- **`"pretest"`**: Runs automatically right _before_ you execute `npm test`.
- **`"test"`**: The primary command being executed.
- **`"posttest"`**: Runs automatically right _after_ the test command finishes.

---

### 6. Best Practices

**Explanation:** To keep projects maintainable, scripts should be simple, independent, and cross-platform. Use tools like `rimraf` instead of OS-specific commands like `rm -rf` to ensure the scripts work on Windows, Mac, and Linux.

**Example:**

```json
{
  "scripts": {
    "clean": "rimraf ./dist"
  }
}
```

- **`"clean"`**: A descriptive name for a maintenance task.
- **`"rimraf"`**: A Node-based package that deletes folders. It is used here instead of `rm -rf` because `rm` does not work on standard Windows command prompts.

### Additional Context: Integration with Webpack

As seen in the **Production | webpack** source, these npm scripts are often used to bridge different configurations. For example, you might have a `"build"` script that points to a production-specific file: `"build": "webpack --config webpack.prod.js"`, and a `"start"` script for development: `"start": "webpack serve --config webpack.dev.js"`. This allows you to maintain optimized assets for production while keeping helpful debugging tools for development.**[]()**

---

**Previous:** [[6- Webpack]] | **Next:** [[8- webpack-merge]]