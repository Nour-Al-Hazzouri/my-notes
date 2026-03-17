### Summary: Ways to Handle Events in React

### 1. Inline Anonymous ES5 Functions

- Directly use an ES5 function as the `onClick` attribute’s value.
    
```jsx
<button onClick={function() { console.log('first example') }}>
  An inline anonymous ES5 function event handler
</button>
```
    
- **Note:** Rarely used in React apps.

---

### 2. Inline Anonymous ES6 Functions (Arrow Functions)

- Use an inline arrow function directly in the `onClick` attribute.
    
```jsx
<button onClick={() => console.log('second example')}>
  An inline anonymous ES6 function event handler
</button>
```
    
- **Note:** A common approach when all logic can fit inside the JSX expression.

---

### 3. Separate Function Declarations

- Define a separate ES5 function and reference it in the `onClick` attribute.
    
```jsx
function App() {
  function thirdExample() {
    console.log('third example');
  }
  return (
    <button onClick={thirdExample}>
      Using a separate function declaration
    </button>
  );
}
export default App;
```
    
- **Use Case:** Ideal for complex logic that doesn’t fit into a short inline function.

---

### 4. Separate Function Expressions

- Assign an arrow function to a `const` variable and reference it in the `onClick` attribute.
    
```jsx
function App() {
  const fourthExample = () => console.log('fourth example');
  return (
    <button onClick={fourthExample}>
      Using a separate function expression
    </button>
  );
}
export default App;
```
    
- **Note:** Very common, supports both short and multi-line logic.

---

### **Key Takeaways**

- React supports multiple ways to handle events: ES5, ES6 inline functions, function declarations, and function expressions.
- Choose the approach that suits the complexity of your logic or adheres to your coding style guide.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/3- Common event handling|3- Common event handling]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/5- Parent-child Data Flow|5- Parent-child Data Flow]]
