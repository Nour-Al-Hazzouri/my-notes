### Summary: Using Expressions as Props in React

### 1. Passing Expressions as Props

- You can pass various expressions (e.g., logical operators, arithmetic operations, string concatenations) as props to components.

**Example:**  
Passing a boolean expression:

```jsx
const bool = false;

function Example(props) {
  return (
    <h2>
      The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
    </h2>
  );
}

export default function App() {
  return (
    <div className="App">
      <Example toggleBoolean={!bool} />
    </div>
  );
}
```

**Explanation:**

- `!bool` evaluates to `true` since `!false` is `true`.
- The `toggleBoolean` prop is converted to a string using `.toString()` for display.

---

### 2. Using Multiple Expressions as Props

- You can pass various types of expressions as props, including mathematical calculations and string concatenations.

**Example:**  
Passing boolean, arithmetic, and string expressions as props:

```jsx
const bool = false;
const str1 = "just";

function Example(props) {
  return (
    <div>
      <h2>
        The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
      </h2>
      <p>The value of the math prop is: <em>{props.math}</em></p>
      <p>The value of the str prop is: <em>{props.str}</em></p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Example
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + " another " + "string"}
      />
    </div>
  );
}
```

**Explanation of Props:**

- `toggleBoolean`: Boolean expression (`!bool`).
- `math`: Arithmetic expression (`(10 + 20) / 3`).
- `str`: String concatenation of a variable (`str1`) and literals (`" another " + "string"`).

---

### Key Takeaways

- Expressions can be passed as props in JSX, just like inside function components.
- Boolean, arithmetic, and string expressions are all valid as prop values.
- JSX seamlessly evaluates these expressions as it does in plain JavaScript.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/16- Ternary operators and functions in JSX|16- Ternary operators and functions in JSX]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/18- Embedding in attributes|18- Embedding in attributes]]
