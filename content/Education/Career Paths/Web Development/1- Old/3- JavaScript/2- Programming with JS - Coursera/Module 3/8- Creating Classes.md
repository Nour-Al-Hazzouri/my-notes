# Creating Classes in JavaScript

## Table of Contents
- [Introduction](#introduction)
- [Class Syntax and Basic Structure](#class-syntax-and-basic-structure)
- [Constructors and Properties](#constructors-and-properties)
- [Methods in Classes](#methods-in-classes)
- [Inheritance with extends](#inheritance-with-extends)
- [The super Keyword](#the-super-keyword)
- [Polymorphism and Method Overriding](#polymorphism-and-method-overriding)
- [Prototypes in JavaScript Classes](#prototypes-in-javascript-classes)
- [Advanced Class Patterns](#advanced-class-patterns)
- [Complete Code Example](#complete-code-example)

---

## Introduction

All objects that are built from the prototype share the same functionality.

When you need to code more complex OOP relationships, you can use the **class** keyword and its easy-to-understand and easy-to-reason-about syntax.

🔑 **Key Point**: Class syntax in JavaScript allows us to clearly separate individual object's data (which exists on the object instance itself) from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.

---

## Class Syntax and Basic Structure

To define a class in JavaScript, use the `class` keyword followed by the class name (with the first letter capitalized) and curly braces:

```javascript
class Train {}
```

To create an instance of a class, use the `new` keyword:

```javascript
var myFirstTrain = new Train('red', false);
```

---

## Constructors and Properties

The **constructor** is used to build properties on the future object instance of the class:

```javascript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```

📝 **Note**: The `this` keyword represents the future object instance of the class.

When you instantiate a new object, you pass values for the constructor parameters:

```javascript
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
```

You can create multiple instances of the same class:

```javascript
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
```

---

## Methods in Classes

You can add methods to classes, which will be shared by all future instance objects:

```javascript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
```

The methods defined in the class:

1. **toggleLights()** - Changes the value of the `lightsOn` property using the logical NOT operator (`!`)
2. **lightsStatus()** - Reports the current status of the `lightsOn` property
3. **getSelf()** - Prints out the properties on the object instance it is called on
4. **getPrototype()** - Console logs the prototype of the object instance

Using these methods:

```javascript
var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}
```

---

## Inheritance with extends

JavaScript allows implementing polymorphism by inheriting from a base class using the `extends` keyword:

```javascript
class HighSpeedTrain extends Train {
}
```

This makes `Train` the super-class (base class) of the `HighSpeedTrain` sub-class.

---

## The super Keyword

When creating a sub-class, you need to define its constructor and use the `super` keyword to inherit properties from the parent class:

```javascript
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```

💡 **Tip**: The `super` keyword specifies what properties get inherited from the super-class in the sub-class.

In this example:
- `color` and `lightsOn` are inherited from the `Train` class
- `passengers` and `highSpeedOn` are added as new properties specific to the `HighSpeedTrain` class

When you use `extends`, you automatically inherit all the methods that exist on the parent class's prototype.

---

## Polymorphism and Method Overriding

You can add methods specific to the sub-class:

```javascript
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}
```

You can also override methods from the parent class:

```javascript
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
```

⚠️ **Warning**: When overriding methods, you can use `super.methodName()` to call the parent class's implementation of the method.

---

## Prototypes in JavaScript Classes

When using classes in JavaScript, methods are stored on the prototype and shared by all instances, while properties are specific to each instance.

You can examine the prototype of an object:

```javascript
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
```

The prototype chain works as follows:
1. The prototype object of the `train5` object was created when you defined the `Train` class
2. The prototype object of the `highSpeed1` object has its own prototype, which can be found using `HighSpeedTrain.prototype.__proto__`

📝 **Note**: Class syntax in JavaScript makes it easier to reason about relationships between classes, but understanding prototypes is still important as you improve your skills.

---

## Advanced Class Patterns

You can use class instances as properties in another class's constructor:

```javascript
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}
```

This allows you to create complex object relationships:

```javascript
var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) // "7-22"
console.log(boxingGym.stationaryBike) // StationaryBike object
console.log(boxingGym.treadmill) // Treadmill object
```

---

## Complete Code Example

Here's the entire completed code demonstrating all the concepts covered:

```javascript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
```

Notice how the `toggleLights()` method behaves differently on the `HighSpeedTrain` class than it does on the `Train` class, demonstrating polymorphism in action.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/7- Inheritance|7- Inheritance]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/9- Default Parameters|Default Parameters in JavaScript]]
