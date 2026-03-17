# Designing an Object-Oriented Program in JavaScript

This document demonstrates how to create a comprehensive class hierarchy in JavaScript using OOP principles, specifically focusing on inheritance relationships between animal classes.

## Class Hierarchy Overview

```
Animal
/ \
Cat Bird
/ \ \
HouseCat Tiger Parrot
```

## Key OOP Concepts

### Essential Keywords
- **extends**: Creates inheritance relationships between classes
- **super**: Allows subclasses to access functionality from parent classes

## Implementation Process

### Base Class: Animal
```javascript
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}
```

### First-Level Subclasses

#### Cat Class
```javascript
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}
```

#### Bird Class
```javascript
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
```

### Second-Level Subclasses

#### HouseCat Class
```javascript
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
```

#### Tiger Class
```javascript
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
```

#### Parrot Class
```javascript
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
```

## Usage Examples

### Creating and Using Objects

```javascript
// Creating parrots with different abilities
var polly = new Parrot(true);  // can talk
var fiji = new Parrot(false);  // cannot talk

// Demonstrating different behaviors
polly.makeSound();     // 'I'm a talking parrot!'
fiji.makeSound();      // (no output)
polly.makeSound(true); // 'chirp', 'I'm a talking parrot!'

// Accessing inherited properties
polly.color;           // 'yellow'
polly.energy;          // 100
polly.isActive();      // Energy decreases to 80

// Creating custom bird with specific properties
var penguin = new Bird("shriek", false, "black and white", 200);
penguin.sound;         // 'shriek'
penguin.canFly;        // false

// Creating and using cat subclasses
var leo = new HouseCat();
leo.makeSound(false);  // 'meow'
leo.makeSound(true);   // 'purr', 'meow'

var cuddles = new Tiger();
cuddles.makeSound(false); // 'Roar!'
cuddles.makeSound(true);  // 'purr', 'Roar!'
```

## Implementation Notes

1. The base `Animal` class provides common properties (`color`, `energy`) and methods (`isActive()`, `sleep()`, `getColor()`) for all animals.

2. First-level subclasses (`Cat`, `Bird`) inherit from `Animal` and add their own specific properties and methods.

3. Second-level subclasses demonstrate more complex inheritance with method overriding and conditional behavior.

4. The `super` keyword is essential in constructors to properly initialize inherited properties.

5. Method overriding with the `option` parameter demonstrates how to create flexible behaviors that can either replace or extend parent class functionality.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/10- De-structuring arrays and objects|10- De-structuring arrays and objects]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/11- OOP Benefits|Object-Oriented Programming Benefits and Principles]]
