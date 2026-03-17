### Summary: Components as Function Expressions and Arrow Functions

React components can be defined in different ways, not just with ES5 function declarations. This reading explains how to use **function expressions** and **arrow functions** to create components, demonstrating their syntax and benefits with examples.

---

### **1. Function Expressions**

- A function declaration:
    
```jsx
function Nav(props) {
  return <ul><li>{props.first}</li></ul>;
}
```
    
- Can be converted to a **function expression**:
    
```jsx
const Nav = function(props) {
  return <ul><li>{props.first}</li></ul>;
};
```
    
- Key difference: A nameless (anonymous) function is assigned to a `const` variable. Behavior remains the same.

---

### **2. Arrow Functions**

- A function expression can be written as an **arrow function**:
    
```jsx
const Nav = (props) => {
  return <ul><li>{props.first}</li></ul>;
};
```
    
- Arrow functions replace the `function` keyword with `=>`.
- The parameter(s) are listed before the arrow.

---

### Shortened Syntax

- If the arrow function has **one parameter**, parentheses are optional:
    
```jsx
const Nav = props => {
  return <ul><li>{props.first}</li></ul>;
};
```
    
- If the function has **no parameters**, parentheses are required:
    
```jsx
const Nav = () => {
  return <ul><li>Home</li></ul>;
};
```
    

---

### Implicit Return

- Arrow functions can return values implicitly if the function body fits on one line:
    
```jsx
const Nav = () => <ul><li>Home</li></ul>;
```
    

---

### **3. Using Arrow Functions Elsewhere**

- Arrow functions work in other JavaScript contexts, such as the `forEach()` method:
    
```js
[10, 20, 30].forEach(item => item * 10); // Outputs: 100, 200, 300
```
    
- Compared to ES5 syntax:
    
```js
[10, 20, 30].forEach(function(item) {
  return item * 10;
});
```
    
- Arrow functions are shorter because:
    - Single-parameter functions don’t need parentheses.
    - Single-line functions don’t need braces or `return`.

---

### **Conclusion**

Function expressions and arrow functions offer concise ways to define components and work with React and JavaScript. Learning their syntax improves efficiency and readability in React apps.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/13-Practical Styling|13-Practical Styling]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/15- Embedded JSX expressions|15- Embedded JSX expressions]]
