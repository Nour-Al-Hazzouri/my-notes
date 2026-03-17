# JavaScript Constructors

This document explains JavaScript constructors, their purpose, and best practices for their usage across different object types.

## Built-in Object Types in JavaScript

JavaScript includes numerous built-in object types:
- Math, Date, Object, Function, Boolean
- Symbol, Array, Map, Set, Promise, JSON, etc.

These are often called "native objects" and fall into two categories:
1. Those with constructors (can create instances)
2. Those without constructors (static objects)

## Constructor Functions

Constructor functions are special functions that build instances of objects. Key characteristics:
- Always capitalized by convention
- Must be used with the `new` operator
- Create unique instances of objects

### Objects with Constructors

Many built-in objects have constructors to create unique instances:

```javascript
new Date() // Returns current datetime
// Example output: Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)

new Map() // Creates empty map
new Set() // Creates empty set
new Promise() // Creates new promise
```

These constructors are useful when each instance needs unique data or state.

### Objects without Constructors

Some built-in objects don't have constructors because they serve as static utility objects:

```javascript
new Math() // Throws: Uncaught TypeError: Math is not a constructor
```

These objects provide functionality accessed directly through the object:

```javascript
Math.pow(2, 5) // 32 - calculates 2 to the power of 5
```

No instance is needed since there's no unique state to maintain.

## Custom Constructor Functions

You can create your own constructor functions for custom object types:

```javascript
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

kiwiIcecream; // Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // Icecream {flavor: 'apple', meltIt: ƒ}
```

## Best Practices for Constructors

### Avoid Constructors for Primitives

Using constructors for primitive types (String, Number, Boolean) is not recommended:

```javascript
// Not recommended - creates String object
let apple = new String("apple"); // String {'apple'}

// Recommended - creates string primitive
let pear = "pear"; // "pear"
```

Reasons to avoid object constructors for primitives:
1. Primitives are more performant than objects
2. Object equality comparisons can be confusing:
```javascript
new String('plum') === new String('plum') // false (comparing object references)
"plum" === "plum" // true (comparing values)
```

### Prefer Literals Over Constructors

For several built-in types, literal syntax is preferred over constructors:

| Constructor | Preferred Literal |
|-------------|-------------------|
| new Object() | {} |
| new Array() | [] |
| new RegExp() | /pattern/ |
| new Function() | () {} |

Example of RegExp literal usage:
```javascript
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```

### Appropriate Constructor Usage

Constructors are appropriate for these built-in types:
```javascript
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```

These constructors create objects that need initialization with unique state or require the functionality provided by their prototype methods.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/5- Classes|5- Classes]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/7- Inheritance|7- Inheritance]]
