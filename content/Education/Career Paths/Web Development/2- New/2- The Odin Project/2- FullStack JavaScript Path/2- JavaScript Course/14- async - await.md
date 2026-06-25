Asynchronous programming in JavaScript has evolved from "callback hell" and complex promise chains to a more readable, "synchronous-looking" syntax known as `async/await`.

### 1. The `async` Keyword

The `async` keyword is a native modifier placed before a function declaration. Its primary purpose is to ensure the function **always returns a promise**. Even if the function returns a simple value like a string or number, JavaScript automatically wraps that value in a resolved promise.

**Code Example:**

```js
async function greet() {
  return "Hello World";
}

greet().then(alert);
```

**Line-by-Line Breakdown:**

1. **`async function greet() {`**: The **native `async` keyword** flags this function. Internally, JavaScript now knows this function will return a Promise object rather than a direct string.
2. **`return "Hello World";`**: In a normal function, this returns a string. Here, because of the `async` prefix, the engine effectively executes `return Promise.resolve("Hello World")`.
3. **`greet().then(alert);`**: Since `greet()` returns a promise, we use the **`.then()` convention** to access the resolved value ("Hello World") once it is ready.

---

### 2. The `await` Keyword

The `await` keyword is a native operator that only works inside an `async` function. It tells the JavaScript engine to **pause** the execution of the function until a specific promise settles (resolves or rejects). This process is highly CPU-efficient because the engine can perform other tasks (like handling user clicks or running other scripts) while waiting.

**Code Example:**

```js
async function showData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });

  let result = await promise;

  alert(result);
}

showData();
```

**Line-by-Line Breakdown:**

1. **`async function showData() {`**: Declares the function as asynchronous, a **native requirement** for using `await` inside the body.
2. **`let promise = new Promise(...)`**: Creates a manual promise that will resolve after a 2-second delay using `setTimeout`.
3. **`let result = await promise;`**: The **native `await` operator** pauses the code right here. It waits for the `promise` to finish. Once it resolves, the value "Data loaded!" is assigned to `result`.
4. **`alert(result);`**: This line only runs after the 2-second wait is over and the result is available.
5. **`showData();`**: Calls the function to start the process.

---

### 3. Sequential vs. Parallel Execution

One common mistake for developers is "awaiting" tasks one by one when they could be done at the same time. If you have three tasks that take 2 seconds each, awaiting them sequentially takes 6 seconds total. Using **`Promise.all`** allows them to run in parallel, finishing in just 2 seconds.

**Code Example:**

```js
async function parallelLoad() {
  // Parallel: Both fetch calls start at the same time
  let [user, posts] = await Promise.all([
    fetch('/user'),
    fetch('/posts')
  ]);
}
```

**Line-by-Line Breakdown:**

1. **`async function parallelLoad() {`**: Standard async function declaration.
2. **`let [user, posts] = await Promise.all([ ... ]);`**:
    - **`Promise.all`**: This is a **native method** that takes an array of promises.
    - **`fetch('/user'), fetch('/posts')`**: Both network requests are kicked off simultaneously.
    - **`await`**: The engine pauses here until **all** promises in the array are finished.
    - **`[user, posts]`**: This is **array destructuring** (a native syntax), which assigns the first result to `user` and the second to `posts`.

---

### 4. Error Handling Strategies

When a promise rejects, `await` throws that rejection as an error. There are several native and conventional ways to handle this.

#### A. The `try..catch` Block (Native)

This is the most common way to handle errors in async functions.

```js
async function f() {
  try {
    let response = await fetch('http://invalid-url');
  } catch(err) {
    alert("Caught: " + err);
  }
}
```

- **`try { ... }`**: Monitors the code for any promise rejections or syntax errors.
- **`catch(err) { ... }`**: If `fetch` fails, the **native `err` object** is passed here to be handled.

#### B. Higher-Order Functions (Convention)

Common in Node.js and Express, this involves a "wrapper" function that adds a `.catch()` to your routes so you don't have to write `try..catch` in every single function.

```js
const catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// Use it to wrap an unsafe function
const getOrders = catchErrors(async (req, res) => {
  let orders = await database.getOrders();
});
```

- **`catchErrors`**: A **Higher-Order Function (HOF)** convention. It takes your function (`fn`) and returns a new version that automatically passes errors to the next middleware via **`catch(next)`**.

---

### 5. Advanced Contexts: Thenables and Top-Level `await`

- **Thenables**: JavaScript allows `await` to work with any object that has a `.then` method, even if it isn't a "real" Promise. This is useful for compatibility with third-party libraries.
- **Top-Level `await`**: In modern browsers and Node.js, you can use `await` outside of a function if you are inside a **JavaScript Module** (`<script type="module">`).
- **Promisification**: You can convert older "callback-style" APIs (where the error is the first argument) into promises using utilities like `util.promisify` in Node.js so they can be used with `async/await`.

---

### 6. The "Dangerous" `Promise.all`

A critical concept is that `Promise.all` is "fail-fast". If you have three promises and the first one fails, `Promise.all` rejects **immediately**. However, the other two tasks are **not cancelled**—they keep running in the background. If they fail later, their errors might become "uncaught" because the initial `try..catch` block has already finished. To avoid this, developers use **`Promise.allSettled`** to wait for all tasks to finish regardless of success or failure.

---

### Summary & Revision

**`async` keyword** - A native modifier that forces a function to return a promise and permits the use of `await`.

```js
async function test() { return "Done"; }
```

The **`async`** keyword ensures the return value is wrapped in a Promise. If the function is called, it won't return "Done" immediately; it returns a Promise that resolves to "Done".

**`await` keyword** - A native operator used to pause function execution until a promise settles, returning its result or throwing an error.

```js
const result = await somePromise;
```

The **`await`** operator effectively "unwraps" the promise. It stops the function from moving to the next line until `somePromise` is finished, then assigns the resolved value to `result`.

**`try..catch`** - A native control structure used to handle errors/rejections within an `async` function.

```js
try { await task(); } catch (e) { console.log(e); }
```

Inside an `async` function, an awaited rejection acts like a `throw`. The **`try`** block attempts the task, and if it fails, the **`catch`** block intercepts the error object (conventionally named **`e`** or **`err`**).

**`Promise.all`** - A native method for executing multiple promises in parallel to improve performance.

```js
const [a, b] = await Promise.all([task1(), task2()]);
```

**`Promise.all`** takes an array of promises. **`await`** pauses until every promise in that array is resolved. It returns an array of results which can be extracted using **destructuring assignment**.

**Thenables** - Objects that follow a promise-like convention by having a `.then` method, allowing them to be "awaited."

```js
await { then(resolve) { resolve("Success"); } };
```

If an object has a **`.then`** method, the JavaScript engine treats it as a promise. When **`await`** is used, the engine calls that `.then` method and provides it with internal **`resolve`** and **`reject`** functions.

**Full Syntax Picture:**

```js
// A Higher-Order Function convention to handle errors globally
const wrapper = (fn) => (req, res, next) => fn(req, res, next).catch(next);

class DataService {
  // Async Class Method
  async fetchData(url) {
    const response = await fetch(url);
    return await response.json();
  }
}

const service = new DataService();

// Parallel execution with error handling
async function init() {
  try {
    const [user, settings] = await Promise.all([
      service.fetchData('/user'),
      service.fetchData('/settings')
    ]);
    console.log(user, settings);
  } catch (err) {
    console.error("Initialization failed", err);
  }
}

init();
```
# Summary PDF
![[Mastering_Async_Await.pdf]]
---
**Previous:** [[13.3- Async JS Summary]] | **Next: [[15- TDD]]**