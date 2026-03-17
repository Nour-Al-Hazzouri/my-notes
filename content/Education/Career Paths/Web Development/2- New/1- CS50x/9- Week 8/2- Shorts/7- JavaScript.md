# Week 8 Short: JavaScript

## Overview
JavaScript is a modern programming language derived from C's syntax, making it relatively easy to pick up for those familiar with C. Created in the mid-1990s (a few years after Python), JavaScript, along with HTML and CSS, forms the core of the user experience on the web. Understanding these three languages allows you to create engaging websites that users enjoy visiting.

## Getting Started with JavaScript

### File Setup
- Create files with `.js` extension
- No delimiters needed (unlike PHP)
- Just start writing code directly
- Include in HTML using `<script>` tags with `type="text/javascript"`

### Client-Side Execution
- **Key Difference**: JavaScript runs client-side (on user's machine)
- Python runs server-side (on the hosting server)
- JavaScript executes in the user's browser

### Including JavaScript in HTML

#### Method 1: Embedded Script
```html
<script>
    // JavaScript code here
</script>
```
- Write JavaScript directly between script tags
- Quick for small scripts

#### Method 2: External File (Preferred)
```html
<script src="filename.js"></script>
```
- Write JavaScript in separate file
- Link using `src` attribute
- Better for reusability across pages
- Preferred approach in CS50

## JavaScript Fundamentals

### Variables
- No type specifier required (like Python)
- Use `var` keyword for local variables

```javascript
// Global variable (avoid)
x = 44;

// Local variable (preferred)
var x = 44;
```

### Conditionals
All C conditionals are available:
- `if`, `else if`, `else`
- `switch`
- Ternary operator (`? :`)

Behave exactly like in C.

### Loops
Traditional C loops available:
- `while` loops
- `do-while` loops
- `for` loops

Plus additional JavaScript-specific loops (covered later).

### Functions
```javascript
function functionName(parameters) {
    // function body
}
```
- All functions introduced with `function` keyword
- Can be **anonymous** (no name required)

#### Anonymous Functions
```javascript
function(parameters) {
    // function body
}
```
- Useful in certain contexts (callbacks, event handlers)
- Will see examples with document object model

## Arrays in JavaScript

### Declaration
```javascript
var nums = [1, 2, 3, 4, 5];
var mixed = [1, "hello", 3.14, true];
```
- Use square brackets
- Can mix types (unlike C)
- Similar to Python lists

### Arrays as Objects
- Everything in JavaScript is an object
- Arrays have built-in methods:
  - `.size()` - get array length
  - `.pop()` - remove last element
  - `.push()` - add to end
  - `.shift()` - remove first element

### Array Map Method
```javascript
var nums = [1, 2, 3, 4, 5];
nums = nums.map(function(num) {
    return num * 2;
});
// nums is now [2, 4, 6, 8, 10]
```
- Applies function to every element
- Great example of anonymous functions
- No need to name function if only used once

## Object-Oriented Programming in JavaScript

### Objects vs. C Structures

#### C Structure Example
```c
struct car {
    int year;
    char model[10];
};

struct car herbie;
herbie.year = 1963;
herbie.model = "Beetle";

// Can't do this in C:
year = 1963;  // ERROR - year doesn't exist alone
```
Fields/members can't stand alone in C.

### JavaScript Objects

#### Properties (like struct fields)
- Data stored in object
- Can include other objects or arrays
- Creates nested structures

#### Methods (functions bound to objects)
- Functions that only apply to that object
- Called using dot notation

#### Object-Oriented Style
```javascript
// Not object-oriented (C style)
function(object);

// Object-oriented (JavaScript style)  
object.function();
```
Object is at the core, functions are part of it.

### Creating Objects
```javascript
var herbie = {
    year: 1963,
    model: "Beetle"
};
```
- Use curly braces
- Key-value pairs (like Python dictionaries)
- Comma-separated list

## Advanced Loops

### for...in Loop (iterates over keys)
```javascript
for (var key in object) {
    // Use object[key] to access value
}
```
- Iterates over keys/indices
- Access values using bracket notation

### for...of Loop (iterates over values)
```javascript
for (var value of array) {
    // Use value directly
}
```
- Iterates over values directly
- More convenient when you need values

### Example: Days of the Week
```javascript
var week = ["Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday", "Sunday"];

// Prints: 0, 1, 2, 3, 4, 5, 6
for (var day in week) {
    console.log(day);
}

// Prints: Monday, Tuesday, Wednesday...
for (var day of week) {
    console.log(day);
}
```

## String Concatenation and Type Coercion

### Concatenation with +
```javascript
console.log("Day " + day + ": " + week[day]);
```

### Type Coercion Issues
- `+` means both addition and concatenation
- JavaScript makes best guess about intent
- Sometimes guesses wrong

### Solution: parseInt()
```javascript
// Wrong: treats as string concatenation
console.log(day + 1);  // "01" if day is 0

// Right: converts to integer first
console.log(parseInt(day) + 1);  // 1 if day is 0
```

## Events and Event Handlers

### What Are Events?
User interactions on web pages:
- Button clicks
- Page loading
- Mouse hovering
- Typing in fields

### Event Handlers
JavaScript code that executes when events occur:
- Makes pages interactive
- Responds to user actions

### HTML Event Attributes
```html
<button onclick="alertName(event)">Button 1</button>
<button onclick="alertName(event)">Button 2</button>
```
- `onclick` attribute defines event handler
- Event object automatically generated

### Event Handler Function
```javascript
function alertName(event) {
    var trigger = event.srcElement;
    alert("You clicked on " + trigger.innerHTML);
}
```
- `event.srcElement` - element that triggered event
- `.innerHTML` - content between tags
- Can determine which button was clicked

### Event Types
Common events include:
- `onclick` - mouse click
- `onload` - page finished loading
- `onmouseover` - mouse hover
- `onkeypress` - key pressed
- Many more available

## JavaScript Flexibility

### Dynamic Typing
- No type declarations needed
- Can be helpful but also tricky
- Language guesses types
- Sometimes too flexible for beginners

### Everything is an Object
- Even simple variables
- `var x = 44` is an object with one property
- Arrays are objects with multiple properties and methods

### Best Practices
- Use `var` for local variables
- Be careful with type coercion
- Use anonymous functions when appropriate
- Leverage built-in object methods

## Console Output
```javascript
console.log("Hello, world!");
```
- JavaScript equivalent of `printf`
- Access via browser developer tools
- Useful for debugging

## Key Takeaways

### Language Characteristics
- C-like syntax makes it familiar
- Client-side execution in browser
- Dynamically typed
- Object-oriented capabilities

### Core Concepts
1. **Variables**: Use `var` for local scope
2. **Functions**: Can be named or anonymous
3. **Objects**: Everything is an object
4. **Arrays**: Flexible, mixed types allowed
5. **Events**: Enable interactivity

### Integration with Web
- Works with HTML and CSS
- Makes static pages dynamic
- Responds to user interactions
- Essential for modern web development

### Learning Path
- Syntax similar to C
- Many concepts transfer directly
- Documentation extensive
- Practice with events and DOM manipulation

## Going Forward
This introduction covers basics, but JavaScript has much more:
- DOM manipulation (covered in separate video)
- AJAX for asynchronous requests
- Modern frameworks and libraries
- Advanced object-oriented patterns

The fundamentals from CS50 provide the foundation to explore JavaScript documentation and expand knowledge exponentially. The language's flexibility and widespread use make it essential for web development.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/6- CSS|Week 8 Short: CSS (Cascading Style Sheets)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/8- DOM|Week 8 Short: DOM (Document Object Model)]]
