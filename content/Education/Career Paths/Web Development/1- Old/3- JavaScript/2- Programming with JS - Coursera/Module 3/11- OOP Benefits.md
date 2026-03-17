# Object-Oriented Programming Benefits and Principles

This document explains the benefits of Object-Oriented Programming (OOP) and details its four fundamental principles with practical JavaScript examples.

## Benefits of OOP

Object-Oriented Programming helps developers model relationships between objects in software similar to relationships between things in the real world. This paradigm offers several advantages:

- **Modularity**: Allows code to be organized into logical, manageable units
- **Flexibility**: Makes code easier to modify and extend
- **Reusability**: Enables code components to be reused across projects

## Object Creation in JavaScript

Objects in OOP exist in a hierarchical structure, with the Object class serving as the base or super class for everything. There are two primary methods for creating objects from classes:

### Using Object.create()
```javascript
class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal)
console.log(Animal)
```

### Using the new Keyword (More Common)
```javascript
class Animal { /* ...class code here... */ }
var myDog = new Animal()
console.log(Animal)
```

## The Four Fundamental OOP Principles

### 1. Inheritance

Inheritance allows classes to inherit properties and methods from other classes, creating a parent-child relationship:

- A **base class** (super-class) defines common attributes and behaviors
- **Sub-classes** inherit these attributes and behaviors
- **Sub-sub-classes** can further inherit from sub-classes

Example hierarchy:
```
Animal (base class)
   ↓
Bird (sub-class)
   ↓
Eagle (sub-sub-class)
```

JavaScript implementation:
```javascript
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
```

### 2. Encapsulation

Encapsulation involves hiding implementation details while exposing only necessary functionality:

- Internal workings are hidden from users of the code
- Users can utilize functionality without understanding how it works
- Implementation can change without affecting code that uses it

Example:
```javascript
"abc".toUpperCase(); // Users don't need to know how this works internally
```

### 3. Abstraction

Abstraction focuses on creating generalized code by extracting essential concepts:

- Deals with the idea of what something does rather than specific implementation
- Focuses on essential features while ignoring non-essential details
- Creates a simplified interface for complex systems

While related to encapsulation, abstraction is about the conceptual model rather than information hiding.

### 4. Polymorphism

Polymorphism ("many forms") allows methods to behave differently based on the context or object they're used with:

#### Example 1: Different Objects with Same Method Name
```javascript
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // "Ring, ring! Watch out, please!"
ringTheBell(door); // "Ring, ring! Come here, please!"
```

#### Example 2: Method Overriding in Class Inheritance
```javascript
class Bird {
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

In this example:
- The `Eagle` class extends the `useWings()` method while still using the parent implementation
- The `Penguin` class completely overrides the `useWings()` method with its own implementation
- Both classes inherit from `Bird` but implement the same method differently

Polymorphism allows for consistent method names across different objects while enabling context-specific behavior.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/10- Designing an OO Program|Designing an Object-Oriented Program in JavaScript]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/12- For of loops and objects|For of Loops and Objects in JavaScript]]
