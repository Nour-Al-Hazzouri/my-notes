# For of Loops and Objects in JavaScript

This document explains how to iterate over JavaScript objects using for of loops and built-in object methods.

## For of Loops with Objects

### Key Limitation
For of loops cannot work directly on objects because **objects are not iterable**:

```javascript
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
// Uncaught TypeError: car is not iterable
```

### Arrays vs Objects
Unlike objects, arrays are inherently iterable:

```javascript
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
// Output:
// red
// orange
// yellow
```

## Object Iteration Methods

To iterate over objects, JavaScript provides three powerful built-in methods:

### Object.keys()
Returns an array of the object's property names:

```javascript
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```

### Object.values()
Returns an array of the object's property values:

```javascript
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```

### Object.entries()
Returns an array of arrays, each containing a key-value pair:

```javascript
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// Output: [ ['speed', 400], ['color', 'magenta'] ]
```

## Combining For of Loops with Object Methods

By combining for of loops with these object methods, you can effectively iterate over objects:

```javascript
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}
// Output:
// price : 50
// color : beige
// material : cotton
// season : autumn
```

## Dynamic Property Access

The bracket notation `object[key]` allows for dynamic property access:

```javascript
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange"
  }

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
// Output will be either 15 or "orange" depending on random value
```

This dynamic access is particularly useful when:
1. Property names are determined at runtime
2. Property names are stored in variables
3. You're iterating through object properties programmatically

## Summary of Approaches

To iterate over an object using for of loops:

1. Use `Object.keys(obj)` to iterate through property names
2. Use `Object.values(obj)` to iterate through property values
3. Use `Object.entries(obj)` to iterate through key-value pairs

Each approach converts the non-iterable object into an iterable array, allowing the for of loop to work effectively.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/11- OOP Benefits|Object-Oriented Programming Benefits and Principles]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/13- Template Literal|Template Literals in JavaScript]]
