- Inheritance in JS revolves around something called the prototype
- in JS, the prototype is an object that can hold properties that will be shared with other objects
    
```JavaScript
var bird = {
	hasWings: true,
	canFly: true,
	hasFeathers: true
}
var eagle1= Object.create(bird);
```
    
- In this syntax, now the eagle1 object has inherited all the properties from the bird object, so eagle1.hasWings will output true on the console 

The code you provided uses the `Object.create()` method to create an object with a prototype, which is another way of creating objects in JavaScript. Here's how it differs from the examples I previously explained:

### Key Differences:

1. **Object.create() vs Constructor Functions or Classes**:
    - In the code you provided, `Object.create(bird)` creates a new object (`eagle1`) that has `bird` as its prototype. This is a direct way of setting the prototype without using a constructor function or class.
    - In my earlier examples, we used constructor functions (for prototypes) or the `class` syntax to define objects, but `Object.create()` is a simpler way to directly create an object with a given prototype.

### How `Object.create()` Works:

- `Object.create(proto)` creates a new object that inherits properties from `proto` (in this case, the `bird` object).

### Example:

```JavaScript
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);

console.log(eagle1.hasWings); // true
console.log(eagle1.canFly);   // true

// eagle1 is an empty object with bird as its prototype
console.log(eagle1); // Outputs an empty object {}
console.log(eagle1.__proto__); // Outputs the bird object: { hasWings: true, canFly: true, hasFeathers: true }
```

### Key Points:

- **Inheritance**: `eagle1` inherits all properties (`hasWings`, `canFly`, `hasFeathers`) from the `bird` object through prototypal inheritance.
- **Empty object**: `eagle1` itself doesn't have its own properties; it borrows everything from its prototype (`bird`).
- **Direct inheritance**: No constructor or class was used here, just a direct prototype-based relationship.

### Use Case of `Object.create()`:

- It's useful when you want to create an object with a specific prototype without needing to define a constructor or class. It’s a simple and lightweight way of setting up inheritance.

In contrast:

- In the earlier examples with **classes** and **constructor functions**, the focus was on defining custom properties (like `name` and `age`) and methods on instances, while `Object.create()` focuses on directly linking an object to another object's prototype.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/6- Constructors|JavaScript Constructors]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/8- Creating Classes|Creating Classes in JavaScript]]
