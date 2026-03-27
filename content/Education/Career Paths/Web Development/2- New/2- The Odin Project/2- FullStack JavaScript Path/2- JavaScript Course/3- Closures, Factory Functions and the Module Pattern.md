### Closures, Factory Functions & Modules | The Odin Project - Cheatsheet

Advanced techniques for organizing code, managing variable scope, and protecting data through encapsulation.

---

### 1. Scope

**Scope** determines where variables and functions are accessible. Inner scopes can access outer scopes, but outer scopes cannot access inner scopes.

```javascript
const globalVar = 'I am global'; 

function checkScope() {
  const localVar = 'I am local'; 
  console.log(globalVar); // Works: Can look "up" to global scope
}

checkScope();
console.log(localVar); // ERROR: Cannot look "down" into function scope
```

---

### 2. Closures

A **closure** is a function that "remembers" its surrounding state (lexical environment) even after its parent function has finished running. 

```javascript
function makeCounter() { 
  let count = 0; // The state to "remember"
  
  return function() { 
    count++; // Inner function closes over the 'count' variable
    return count; 
  };
}

const counter = makeCounter(); // makeCounter finishes running
console.log(counter()); // 1 (It remembers count was 0)
// The raw 'count' variable is safely locked away in the closure.
```

---

### 3. Factory Functions

Instead of constructors using `new`, **Factory Functions** simply return an object literal. This avoids the tricky behavior of `this` and prototypal inheritance.

```javascript
const UserFactory = (name, age) => {
  const sayHello = () => console.log(`Hello, I'm ${name}`);
  
  // Return the public properties and methods
  return { name, age, sayHello };
};

const user1 = UserFactory("Alice", 25);
user1.sayHello(); // "Hello, I'm Alice"
```

---

### 4. IIFEs (Immediately Invoked Function Expressions)

Functions that run as soon as they are defined. Used primarily to create a private scope instantly so variables don't leak into the global namespace.

```javascript
(function() { 
  // This is a temporary private bubble
  const secret = '1234'; 
  console.log('Running immediately!'); 
})(); 

console.log(secret); // ERROR: secret is not defined outside the IIFE
```

---

### 5. The Module Pattern

Combines IIFEs and Closures to create a "vault". It hides private data/logic and returns an object exposing only the "public" interface.

```javascript
const Calculator = (function() { 
  // Private variable
  let result = 0; 

  // Public Interface (Returned Object)
  return { 
    add: (num) => { result += num; },
    total: () => result
  };
})(); 

Calculator.add(5); 
console.log(Calculator.total()); // 5
// Calculator.result is undefined (hidden from the outside world)
```

---

**Previous**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/2- FullStack JavaScript Path/2- JavaScript Course/2- Object Constructors|2- Object Constructors]]

---
### Summary PDF

![[The_Lexical_Backpack.pdf]]
--- 
**Previous:** [[2- Object Constructors]]