### Summary

JSX in React is syntactic sugar, simplifying the way React code is written. However, browsers cannot directly understand JSX, so it must be transpiled into plain JavaScript using tools like [Babel](https://babeljs.io/). By navigating to the _Try it out_ section on Babel’s website, you can see how JSX converts to JavaScript.

#### Key Points:

1. **Basic JSX Transpilation**:  
    Example JSX:
    
```javascript
function App() {
    return <h1>Hello there</h1>;
}
```
    
    Transpiles to:
    
```javascript
function App() {
    return React.createElement("h1", null, "Hello there");
}
```
    
    - `React.createElement` accepts three arguments:
        1. The HTML tag to render (e.g., `"h1"`).
        2. `null` (indicating no props or an absence of an object).
        3. The content inside the element (e.g., `"Hello there"`).
2. **Nested JSX**:  
    Example JSX:
    
```javascript
function App() {
    return (
        <div>
            <h1>Hello there</h1>
        </div>
    );
}
```
    
    Transpiles to:
    
```javascript
function App() {
    return React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Hello there")
    );
}
```
    
    - Nested JSX structures become nested `React.createElement` calls, with one call passed as the third argument of another.
3. **Second Argument (`null`)**:
    
    - The second argument of `React.createElement` (initially `null`) can be replaced with an empty object (`{}`) to represent props.  
        Example:
    
```javascript
React.createElement("div", {}, React.createElement("h1", {}, "Hello there"));
```
    
    - This object is known as the **props object**, which is used to pass data from a parent to a child component.
4. **Third Argument (`...children`)**:
    
    - The third argument represents inner content or child elements. This is how JSX mimics the nesting of elements in HTML.

#### Takeaway:

JSX translates to nested `React.createElement` calls. The second argument (`props`) is for passing data, and the third argument (`...children`) allows nesting elements. Understanding this helps clarify how JSX simplifies React code.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/9- Principles of Components- Props|9- Principles of Components- Props]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/11- Props and children|11- Props and children]]
