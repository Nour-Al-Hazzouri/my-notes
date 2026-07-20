# Exports

### 1. The Export Declaration & Module Basics

The `export` declaration is used to share values (variables, functions, classes) from a JavaScript module so they can be used in other programs via an `import` statement. For this to work, the file must be interpreted as a module (e.g., using `<script type="module">` in HTML), and it will automatically run in **strict mode**.

**Example:**

```js
// File: data.js
export const apiKey = "12345";
```

- **`export`**: The keyword that marks the following value as public for other files.
- **`const apiKey = "12345";`**: A standard constant declaration that is now accessible externally.

### 2. Named Exports

A module can have multiple **named exports**. When another file imports these, it must refer to them by their exact names.

**Example:**

```js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
```

- **`export function add...`**: This exports the function under the name `add`.
- **`export function subtract...`**: This exports a second function under the name `subtract`.
- **Connection**: You can have as many of these as needed in a single file, but names must be unique to avoid a `SyntaxError`.

### 3. Default Exports

Every module can have exactly **one default export**. This is often used when a module represents a single main value or class. Unlike named exports, the importer can rename a default export to anything they want.

**Example:**

```js
// File: User.js
export default class User {
  constructor(name) { this.name = name; }
}
```

- **`export default`**: Specifies that this class is the "main" item being shared from this file.
- **`class User { ... }`**: Defines the class. Note that default exports of functions or classes can be anonymous.

### 4. Renaming and String Literals

You can rename an export using the **`as`** keyword. Additionally, you can use a **string literal** as an alias, allowing you to use names that are not normally valid JavaScript identifiers (like names with spaces).

**Example:**

```js
const secretName = "InternalValue";
export { secretName as "Public Value" };
```

- **`export { ... }`**: Exports a list of names declared elsewhere in the file.
- **`secretName as "Public Value"`**: Takes the internal variable `secretName` and shares it externally under the name `"Public Value"`.

### 5. Re-exporting (Aggregating)

A module can "relay" or "aggregate" exports from other files without having to import them first. This is used to create "barrel modules" that group multiple files into one.

**Example:**

```js
export { func1, var1 } from "./moduleA.js";
export * from "./moduleB.js";
```

- **`export { func1, var1 } from ...`**: Relays specific named exports from `moduleA.js`.
- **`export * from ...`**: A wildcard that re-exports all **named** exports from `moduleB.js` (it does not re-export the default export).
- **Connection**: These values do **not** become available for use inside the file doing the re-exporting.

### 6. Live Bindings

Exported values are **live bindings**, not static copies. If the module that exports a variable updates its value, the module that imported it will see that change immediately.

**Example:**

```js
export let status = "online";
setTimeout(() => { status = "away"; }, 5000);
```

- **`export let status = "online";`**: Initial value shared with importers.
- **`status = "away";`**: When this change happens after 5 seconds, all files that imported `status` will automatically see the new value `"away"`.

### 7. Declaration Flexibility and Hoisting

Export declarations are not subject to **Temporal Dead Zone (TDZ)** rules; you can export a name before it is declared in the file. Furthermore, `export default` functions and classes are **hoisted**, meaning they can be used before they are defined.

**Example:**

```js
export { version };
const version = 1.2;
```

- **`export { version };`**: This is valid even though `version` hasn't been declared yet.
- **`const version = 1.2;`**: The actual declaration happens here. The export binding is established once the module is evaluated.

### Additional Constraints

- **Duplicate Names**: Having exports with the same name or more than one `default` export causes a `SyntaxError`.
- **Resource Management**: You cannot directly export a `using` or `await using` declaration. While you can export a variable declared with `using` elsewhere, it is discouraged because it will be "disposed" (cleaned up) as soon as the module finishes, leaving importers with a dead value.
- **Environment**: Modules cannot be run via `file://` URLs due to CORS security; they must be served through an **HTTP server**.
---

# Imports

The following is a complete summary of the core ideas from the source regarding the JavaScript `import` declaration.

### 1. Basic Import and Module Context

The `import` declaration is used to bring "read-only live bindings" (variables, functions, or classes) into your current file from another module. To use this, your file must be treated as a module, which is done in HTML by adding `type="module"` to the `<script>` tag.

**Example:**

```js
import { name } from "./module.js";
```

- **`import`**: The keyword that initiates the process of bringing in external code.
- **`{ name }`**: This specifies the exact variable or function you want to pull from the other file.
- **`from "./module.js"`**: This tells the browser or runtime exactly which file contains the code you need.

### 2. Named Imports

Named imports allow you to pull specific items from a module that has multiple exports. You must use the exact names defined in the source file.

**Example:**

```js
import { add, subtract } from "./math.js";
```

- **`import { add, subtract }`**: This line targets two specific functions, `add` and `subtract`, from the external file.
- **Connection**: By listing them inside curly braces, you make them available as local variables in your current file.

### 3. Default Imports

A module can have one "main" export, called a default export. When importing a default export, you do not use curly braces, and you can give it any name you like.

**Example:**

```js
import MyUser from "./user.js";
```

- **`import MyUser`**: This grabs the default export from `user.js` and assigns it to the name `MyUser`.
- **`from "./user.js"`**: Links this declaration to the source file.
- **Connection**: Because it is the default, you don't need to know its original name; the engine simply hands you the primary value of that module.

### 4. Namespace Imports

If you want to import every single exported item from a file at once, you use a namespace import. This puts all exports into a single "sealed" object.

**Example:**

```js
import * as Tools from "./utils.js";

Tools.helper();
```

- **`import * as Tools`**: The `*` means "everything," and `as Tools` creates an object named `Tools` to hold it all.
- **`Tools.helper()`**: To use a specific function, you access it as a property of the `Tools` object.

### 5. Side-Effect Imports

Sometimes you just want to run the code inside another file (like a polyfill or global setup) without actually importing any variables.

**Example:**

```js
import "./init-styles.js";
```

- **`import "./init-styles.js"`**: This tells the engine to find and execute every line of code in `init-styles.js` immediately.
- **Connection**: No names are added to your current scope, but any global changes made by that file will now be in effect.

### 6. Aliasing (Renaming)

If an imported name conflicts with a variable you already have, or if it is a reserved word like `default`, you can rename it using the `as` keyword.

**Example:**

```js
import { longName as short } from "./data.js";
```

- **`longName`**: The original name of the export in the source file.
- **`as short`**: Tells JavaScript to let you use the name `short` instead within this file.
- **Connection**: This allows you to avoid naming collisions while keeping your code concise.

### 7. Live Bindings

Imports are "live," meaning they are directly connected to the source file. If the source file updates the value of a variable it exported, your imported variable updates automatically.

**Example:**

```js
import { count } from "./counter.js";

// If counter.js changes count to 10, your 'count' is now 10.
console.log(count);
```

- **`import { count }`**: Establishes a connection to the `count` variable.
- **`console.log(count)`**: Accesses the current value. You cannot change `count` yourself because it is read-only for the importer.

### 8. Hoisting

Import declarations are hoisted to the top of the module. This means the imported values are available throughout the entire file, and the external file is executed before your local code runs.

**Example:**

```js
startApp();

import { startApp } from "./launcher.js";
```

- **`startApp()`**: This call works even though it appears before the import line.
- **`import { startApp } ...`**: The engine finds this line first, processes it, and makes the function available everywhere in the file.

### 9. Module Specifiers (Resolution)

The "module specifier" is the string used to find the file. There are three types: Relative (starting with `./`), Absolute (full URLs), and Bare (package names).

**Example:**

```js
import { x } from "./local.js";
import { y } from "https://site.com/lib.js";
```

- **`"./local.js"`**: A relative path. Browsers require the file extension (`.js`) to be included.
- **`"https://..."`**: An absolute path. Browsers treat this as a direct URL to the source code.

### 10. Non-JavaScript Modules

You can import files like JSON or CSS using "import attributes" with the `with` keyword to ensure they are handled safely.

**Example:**

```js
import data from "./config.json" with { type: "json" };
```

- **`import data from "./config.json"`**: Specifies the file to import.
- **`with { type: "json" }`**: An attribute that tells the engine exactly how to interpret the file's content.
- **Connection**: If the server sends a file that isn't JSON, the engine will block it for security reasons.
---

**Previous:** [[4- Classes]] | **Next:** [[6- Webpack]]