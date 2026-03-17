# Template Literals in JavaScript

This document explains template literals, an ES6 feature that provides enhanced string functionality in JavaScript.

## Introduction to Template Literals

Template literals are an alternative way of working with strings introduced in ES6 (ECMAScript 2015). They offer several advantages over traditional string methods and use backtick characters (`) as delimiters instead of single or double quotes.

```javascript
`Hello, World!`  // Template literal syntax
```

*Note: The backtick character is typically located above the TAB key, to the left of the number 1 key on most keyboards.*

## Key Features of Template Literals

### 1. Variable Interpolation

Template literals allow for embedding variables directly within strings using the `${variable}` syntax:

```javascript
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`);  // Outputs: Hello World!
```

This eliminates the need for string concatenation with the `+` operator:

```javascript
// Traditional ES5 approach
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!");  // Outputs: Hello World!
```

### 2. Multi-line Strings

Template literals can span multiple lines without special characters or concatenation:

```javascript
// Multi-line template literal
`Hello,
World
!`
```

This is not possible with traditional string literals, which would throw a syntax error:

```javascript
// This causes a syntax error
"Hello,
World"
```

### 3. Expression Evaluation

Template literals allow for evaluating JavaScript expressions within the `${}` placeholder:

```javascript
// Arithmetic operations
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);  // Outputs: 5 stars!
```

This capability extends to any valid JavaScript expression, including:
- Arithmetic operations
- Function calls
- Ternary expressions
- Object property access

## Advanced Features

Template literals support additional advanced features beyond the scope of this document:
- Nested template literals
- Tagged templates

These features provide even more powerful string manipulation capabilities for complex use cases.

## Summary

Template literals represent a significant improvement in JavaScript string handling by providing:
- Cleaner syntax for variable interpolation
- Native support for multi-line strings
- The ability to evaluate expressions within strings

These features make code more readable and expressive when working with string content.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/12- For of loops and objects|For of Loops and Objects in JavaScript]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/14- Data Structures|JavaScript Data Structures]]
