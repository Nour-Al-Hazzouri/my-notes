In modern JavaScript, a **class** is a blueprint for creating objects that bundles data (state) and functions (behavior) into a single template. While classes are technically "special functions" built on the prototype system, they introduce unique features such as mandatory `new` calls, non-enumerable methods, and automatic strict mode.

### Comprehensive Class Implementation

This example demonstrates the core features of classes: inheritance, privacy, static members, and getters/setters.

```js
// 1. Parent Class with Private and Static Members
class Device {
  static category = "Electronics"; // Static Property
  #id; // Private Field

  constructor(id) {
    this.#id = id;
  }

  // 2. Static Method
  static compare(a, b) {
    return a.id === b.id;
  }

  // 3. Getter for a private field
  get id() {
    return this.#id;
  }
}

// 4. Inheritance using 'extends'
class SmartLamp extends Device {
  #brightness = 0; // Private instance field

  constructor(id, name) {
    super(id); // 5. Must call super() before using 'this'
    this.name = name;
  }

  // 6. Setter with validation
  set brightness(value) {
    if (value < 0 || value > 100) return;
    this.#brightness = value;
  }

  // 7. Bound method using a class field arrow function
  toggle = () => {
    console.log(`${this.name} toggled at ${this.#brightness}% brightness.`);
  }
}

const myLamp = new SmartLamp(101, "Office Lamp");
myLamp.brightness = 75;
setTimeout(myLamp.toggle, 1000); // 8. Correctly maintains 'this'
```

**Line-by-Line Explanation:**

1. **`static category = "Electronics";`**: Defines a static property that exists only on the `Device` class itself, not on individual objects.
2. **`#id;`**: Declares a private field. The `#` prefix is enforced by the language; it cannot be accessed or seen from outside the class body.
3. **`static compare(a, b) { ... }`**: A static utility method used to compare two devices without needing a specific instance to run.
4. **`get id() { return this.#id; }`**: An accessor property (getter) that provides read-only access to the private `#id`.
5. **`class SmartLamp extends Device`**: Uses inheritance to create a child class that receives all public and protected features of the parent.
6. **`super(id);`**: Calls the parent constructor. In a subclass, this must be called before accessing `this`, or a `ReferenceError` occurs.
7. **`set brightness(value) { ... }`**: A setter that acts as a wrapper, allowing for input validation before saving data to the private `#brightness` field.
8. **`toggle = () => { ... }`**: A class field with an arrow function. Unlike standard methods, this is created for each object, "binding" the `this` context so it isn't lost when passed to functions like `setTimeout`.

### Key Concepts Summary

- **Encapsulation and Privacy**: The `#` symbol provides native privacy. Private elements are not inherited by subclasses and cannot be accessed via bracket notation or external Object methods.
- **Prototypes vs. Fields**: Methods are stored on the `prototype` and shared to save memory. Class fields (like `name = "John"`) are set on individual objects, making them ideal for unique instance data or bound arrow functions.
- **Static vs. Instance**: Static members belong to the class constructor and are useful for utility functions or fixed configurations that shouldn't be replicated for every object.
- **Compatibility**: Getters and setters allow you to replace a "regular" property with a function later in development without breaking existing code that expects a simple data property.
---
## Summary PDF:
![[4- JS_Class_Architecture.pdf]]