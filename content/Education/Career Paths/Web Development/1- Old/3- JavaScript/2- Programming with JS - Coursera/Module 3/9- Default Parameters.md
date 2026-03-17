# Default Parameters in JavaScript

This document explains the ES6 feature of default parameters in JavaScript functions and classes, demonstrating how they improve code robustness and developer experience.

## Introduction to Default Parameters

Default parameters allow developers to specify fallback values for function parameters that aren't provided when the function is called. This feature supports defensive coding practices with minimal implementation effort.

## Basic Function Implementation

### Without Default Parameters

```javascript
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

noDefaultParams(); // Result: NaN
```

When called without arguments, this function produces a non-sensical output (`NaN`) because JavaScript doesn't throw an error when parameters are missing.

### With Default Parameters

```javascript
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams(); // Result: 100
```

The default parameter (`number = 10`) ensures the function works correctly even when called without arguments, while still allowing custom values to be passed.

## Default Parameters in Classes

Default parameters are particularly valuable in class constructors, making object instantiation more flexible and robust.

### Class Without Default Parameters

```javascript
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'
```

Without default parameters, missing or incorrect arguments can lead to unexpected behavior.

### Class With Default Parameters

```javascript
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var better = new WithDefaultParams();
better.calculate(); // Result: 6
```

With default parameters, the class works correctly even when instantiated without arguments.

## Benefits of Default Parameters

1. **Improved Developer Experience**: Reduces the need to provide all arguments for quick tests or simple use cases

2. **Defensive Coding**: Helps prevent errors from missing or undefined parameters

3. **Enhanced Inheritance**: Makes it easier to build inheritance hierarchies by allowing subclasses to provide only custom properties while accepting default values from the superclass

4. **Cleaner Code**: Eliminates the need for verbose parameter checking logic inside functions

## Key Concepts Covered

- Implementing default parameters in JavaScript functions
- Using default parameters in class constructors
- The relationship between default parameters and defensive coding
- How default parameters improve inheritance in object-oriented programming

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/8- Creating Classes|Creating Classes in JavaScript]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/10- De-structuring arrays and objects|10- De-structuring arrays and objects]]
