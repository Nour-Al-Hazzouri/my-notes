In JavaScript, you can create objects using **prototypes** or **classes**, and the difference lies in how they're structured and used.

### 1. **Prototypes**:

JavaScript was originally built on a prototype-based system. Every object in JavaScript has a prototype, which is another object from which it inherits properties and methods.

### Example using Prototypes:

```JavaScript
// Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I'm 25 years old.
```

- **Explanation**:
    - `Person` is a constructor function.
    - `greet` is added to the prototype so all objects created by `Person` can access it.
    - `new` creates a new instance of `Person`, binding `this` to that new object.

### 2. **Classes**:

ES6 introduced `classes`, which provide a cleaner, more intuitive way to create objects, but under the hood, they still use prototypes.

### Example using Classes:

```JavaScript
// Create a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person2 = new Person("Bob", 30);
person2.greet(); // Hello, my name is Bob and I'm 30 years old.
```

- **Explanation**:
    - `class` is a more modern, readable syntax, but it functions similarly to prototypes.
    - `greet` is a method defined within the class.
    - `new` again creates an instance of the class.

### 3. **The** `**new**` **keyword**:

- **What it does**:
    - It creates a new object.
    - Sets `this` to refer to that new object.
    - Links the object to the prototype (either in constructor function or class).
- **Usage with built-in objects**:  
    You can also use  
    `new` with built-in objects like `Date` or `Array`.

### Example:

```JavaScript
const today = new Date();
console.log(today); // Outputs the current date

const arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

### **Difference & Use Cases**:

- **Prototypes** are useful for older code or when you need fine-grained control.
- **Classes** are simpler, modern, and preferred for readability.

For most modern projects, using **classes** is recommended due to their clear structure. Prototypes are still important to understand because they form the basis of JavaScript's inheritance model.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/23- JavaScript Object Notation-JSON|23- JavaScript Object Notation-JSON]]
