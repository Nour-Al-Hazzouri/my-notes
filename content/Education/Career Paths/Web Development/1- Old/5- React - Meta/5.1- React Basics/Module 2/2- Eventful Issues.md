### Summary: Common React Event Errors and Error Handling

### 1. Errors in Programming

- Errors occur due to incorrect syntax or unanticipated scenarios.
- Handling errors is part of a developer's routine.

---

### 2. JavaScript Error Handling: `try...catch`

- Use `try...catch` to handle errors and prevent the code from breaking completely.
- Example: Handling a `TypeError` when attempting to uppercase a number:
    
```js
try {
  (5).toUpperCase();
} catch (e) {
  console.log(`Oops, you can't uppercase a number. Error:`, e);
}
```
    
    **Output:**  
    `Oops, you can't uppercase a number. Error: TypeError: 5.toUpperCase is not a function`

---

### 3. React Errors

- React handles errors differently and displays an error overlay in the browser.
- Example: A typo in a React component causes a `ReferenceError`:
    
```jsx
function NumBillboard(props) {
  return (
    <>
      <h1>{prop.num}</h1>
    </>
  );
}

export default NumBillboard;
```
    
    **Error:** `ReferenceError: prop is not defined`  
    _Tip: The error overlay can be closed by clicking the "X" button._

---

### 4. Handling Event-Driven Errors in React

- Event errors occur after the UI has rendered.
- Use `try...catch` for handling these errors just as in JavaScript.

---

### **Key Takeaways**

- React handles errors during rendering and displays them in an overlay.
- Use `try...catch` for error handling, both in JavaScript and React events.
- Error handling ensures smoother user experiences and prevents code crashes.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/1- Types of Events|1- Types of Events]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/3- Common event handling|3- Common event handling]]
