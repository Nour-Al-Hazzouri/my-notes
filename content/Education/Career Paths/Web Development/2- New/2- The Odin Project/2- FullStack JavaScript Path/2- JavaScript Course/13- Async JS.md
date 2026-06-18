### 1. What are Callbacks?

**Direct Answer:** Callbacks are functions that are executed asynchronously, or at a later time. In Node.js, they are the primary way to handle tasks that take a long time to finish, like reading a file or making a network request. Instead of the computer waiting and doing nothing while a slow task finishes (blocking), it "kicks off" the task and provides a callback function to be run once the data is ready.

**Example: The Difference Between Sync and Async** In a synchronous program, code runs top-to-bottom. In an asynchronous Node program, the order of execution depends on when tasks finish.

```js
const fs = require('fs');

// 1. Defining a function
function doneReading(err, fileContents) {
  console.log(fileContents);
}

// 2. Kicking off an async task
fs.readFile('number.txt', 'utf8', doneReading);

// 3. This runs immediately after step 2 starts
console.log("I run before the file is read!");
```

**Code Explanation:**

- `const fs = require('fs');`: This imports the native Node "file system" module so we can talk to the hard drive.
- `function doneReading(err, fileContents) { ... }`: This defines our **callback**. It is just a regular function, but we intend to pass it to another function to be used later.
- `fs.readFile('number.txt', 'utf8', doneReading);`: This is an asynchronous method. It tells the OS to start reading the file. Crucially, it does **not** wait for the file to finish reading; it moves to the next line of code immediately.
- `console.log("I run before...");`: Because `readFile` is asynchronous and slow, this line executes while the hard drive is still spinning to find the file.
- **Connection:** Once the hard drive finally finishes, Node "calls back" the `doneReading` function and gives it the file contents.

**Additional Context:** Talking to a hard drive is about 100,000 times slower than talking to RAM. Callbacks allow Node to stay "non-blocking," meaning it can handle other requests or logic while waiting for that slow I/O (Input/Output) to return.

---

### 2. The "Node Style" (Error-First Callbacks)

**Direct Answer:** Node.js follows a specific convention for how callbacks are written to ensure errors are handled consistently. This is called the "error-first callback." The very first argument of the callback is reserved for an error object. If the task succeeded, that first argument will be `null`.

**Example: Handling Success and Failure**

```js
fs.readFile('data.txt', (err, data) => {
  if (err) {
    return console.error("Something went wrong!", err);
  }
  console.log("Here is your data:", data);
});
```

**Code Explanation:**

- `(err, data) => { ... }`: This is an anonymous callback function. The first parameter `err` is a native convention in Node.
- `if (err) { ... }`: The first thing the code does is check if the error argument exists. If the hard drive failed or the file didn't exist, `err` would contain the details.
- `return console.error(...)`: If there is an error, we print it and use `return` to stop the function from continuing.
- `console.log("Here is your data:", data);`: If `err` was `null`, we know the task was successful and we can safely use the `data` (the second argument).
- **Connection:** By always putting the error first, Node ensures that developers are forced to think about what happens when things go wrong before they try to use the successful data.

---

### Revision Summary: Callbacks

**Idea: The Event Loop & Non-Blocking I/O** Node dispatches an operation (like a file read) and waits for an event to report back that it is done. While waiting, Node is free to do other work.

```js
fs.readFile('file.txt', callback);
console.log('Next task');
```

- `fs.readFile`: Dispatches the slow I/O task to the system.
- `callback`: The function that will be "processed" once the I/O sends a completion event.
- `console.log`: Executes immediately because Node doesn't wait for the file to finish.

**Idea: Expressing Dependencies** If Function B depends on Function A finishing, you must nest Function B inside the callback of Function A.

```js
functionA(function() {
  functionB(function() {
    functionC();
  });
});
```

- `functionA`: Starts first.
- `functionB`: Defined as a callback inside A, so it only starts once A is finished.
- `functionC`: Only starts once B is finished.

**Full Picture Code Example:** This example demonstrates a module-like structure where one function depends on another using the Node error-first style.

```js
const fs = require('fs');

// A function that increments a number found in a file
function addOne(callback) {
  fs.readFile('number.txt', 'utf8', function(err, fileContents) {
    if (err) return callback(err); // Pass the error up to the caller

    const myNumber = parseInt(fileContents) + 1;
    callback(null, myNumber); // Success! Error is null, result is myNumber
  });
}

// Using the function
addOne(function(err, newNumber) {
  if (err) return console.log(err);
  console.log("The new number is:", newNumber);
});
```
---
**Previous:** [[12- Form Validation]] | **Next:** [[13.1- Event Loop]]