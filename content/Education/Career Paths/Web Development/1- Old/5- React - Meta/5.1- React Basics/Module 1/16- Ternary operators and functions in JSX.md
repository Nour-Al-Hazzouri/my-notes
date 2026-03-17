### Summary: Using JavaScript Expressions in JSX

### 1. Ternary Operator as an Alternative to `if...else`

- The ternary operator provides a shorthand way to write `if...else` statements.  
    Syntax:

```js
condition ? trueValue : falseValue;
```

- Example: Replace an `if...else` with a ternary operator:

```js
let name = 'Bob';

// If...else
if (name === 'Bob') {
  console.log('Hello, Bob');
} else {
  console.log('Hello, Friend');
}

// Ternary operator
name === 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');
```

### 2. Using Ternary Expressions in JSX

- Ternary operators can dynamically return JSX values based on conditions.
- Example: Display text based on a random number:

```jsx
function Example() {
  return (
    <div className="heading">
      <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
    </div>
  );
}
```

- Here, `Math.random()` generates a number between 0 and 1. If it's ≥ 0.5, "Over 0.5" is displayed; otherwise, "Under 0.5".

### 3. Invoking Functions in JSX

- Functions can be called inside JSX to generate dynamic content.

**a. Inline Function Example:**

```jsx
function Example2() {
  return (
    <div className="heading">
      <h1>
        Here's a random number from 0 to 10: {Math.floor(Math.random() * 10) + 1}
      </h1>
    </div>
  );
}
```

**b. Extracted Function Example:**

```jsx
function Example3() {
  const getRandomNum = () => Math.floor(Math.random() * 10) + 1;

  return (
    <div className="heading">
      <h1>Here's a random number from 0 to 10: {getRandomNum()}</h1>
    </div>
  );
}
```

### 4. Writing Functions: Declaration vs. Expression

- Functions used in JSX can be written in different styles.

**Function Declaration:**

```js
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 1;
}
```

**Function Expression:**

```js
const getRandomNum = function() {
  return Math.floor(Math.random() * 10) + 1;
};
```

### Key Takeaways

- Ternary expressions simplify conditional rendering in JSX.
- Functions (inline or external) can generate dynamic content in components.
- JSX allows seamless integration of JavaScript expressions, making it versatile for React development.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/15- Embedded JSX expressions|15- Embedded JSX expressions]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/17- Expressions as props|17- Expressions as props]]
