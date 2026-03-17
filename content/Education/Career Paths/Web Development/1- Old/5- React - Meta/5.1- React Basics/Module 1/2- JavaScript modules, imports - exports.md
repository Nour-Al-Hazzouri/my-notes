### Summary

Before building apps, it’s crucial to understand JavaScript modules, which organize code into smaller, reusable files. This reading introduces the foundational concepts of modules, exports, and imports, essential for creating structured applications and understanding React app examples.

---

### **JavaScript Modules**

- A **module** in JavaScript is a single file that promotes modular and customizable code by enabling imports and exports.
- Example: A file `addTwo.js` containing:
    
```javascript
function addTwo(a, b) {
  console.log(a + b);
}
```
    
    becomes a module with the `export` syntax.

---

### **Module Exports**

There are two main ways to export modules:

1. **Default Exports**:
    
    - Allows **one default export** per module.
    - Example:
        
```javascript
export default function addTwo(a, b) {
  console.log(a + b);
}
```
        
        Or:
        
```javascript
function addTwo(a, b) {
  console.log(a + b);
}
export default addTwo;
```
        
2. **Named Exports**:
    
    - Enables multiple exports from a module.
    - Example:
        
```javascript
function addTwo(a, b) {
  console.log(a + b);
}
function addThree(a, b, c) {
  console.log(a + b + c);
}
export { addTwo, addThree };
```
        

---

### **Importing Modules**

The syntax for importing depends on the export type:

1. **Default Exports**:
    
    - Imported without curly braces:
        
```javascript
import addTwo from "./addTwo";
```
        
2. **Named Exports**:
    
    - Imported with curly braces:
        
```javascript
import { addTwo } from "./addTwo";
```
        

---

### **Conclusion**

This introduction covers the basics of JavaScript modules and their importance in React. It explains how to use exports and imports, laying the groundwork for understanding React app structures. While not comprehensive, it familiarizes you with the most common syntax needed for React projects.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/1- Setting up react in VSCode|1- Setting up react in VSCode]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/3- React.js overview|3- React.js overview]]
