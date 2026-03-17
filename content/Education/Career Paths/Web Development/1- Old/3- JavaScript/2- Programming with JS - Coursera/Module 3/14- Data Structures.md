- A data structure is a way to organize data
- A solution to a coding task depends on the data structure you use
- JS is limited in terms of data structures available in comparison to other programming languages such as java, or Python
- Common data structures:
    - Objects:
        - Unordered non-iterable collection of key-value pairs
        - Used to store and later access a value under a key
        - Usage example: OOP
    - Arrays:
        - Ordered iterable collection of values
        - Used to store and later access a value under an index
    - Maps:
        - is like an array because it's iterable
        - It consists of key value pairs.
        - It's important not to confuse a map with an object.
        - With maps any value can be used as a key. With objects, keys can only be strings or symbols.
    - Sets:
        - This is another collection where each item in the collection must be unique.
        - If you try to add a non unique item to a set, this operation will simply not be run.

# JavaScript Data Structures

This document covers the most common data structures in JavaScript with practical examples of their implementation and usage.

## Arrays and Their Methods

JavaScript arrays include powerful built-in methods for data manipulation:

### forEach()
- Executes a function on each array element
- Syntax: `array.forEach(function(item, index) {...})`
- Example:
```javascript
const fruits = ['kiwi','mango','apple','pear'];
fruits.forEach((fruit, index) => console.log(`${index}. ${fruit}`));
// Outputs: 0. kiwi, 1. mango, 2. apple, 3. pear
```

### filter()
- Creates a new array with elements that pass a test
- Returns array items that meet specified criteria
- Example:
```javascript
const nums = [0,10,20,30,40,50];
nums.filter(num => num > 20); // Returns [30,40,50]
```

### map()
- Transforms each array element and creates a new array
- Example:
```javascript
[0,10,20,30,40,50].map(num => num / 10); // Returns [0,1,2,3,4,5]
```

## Objects

- Key-value pairs for storing related data
- Can be converted to arrays using Object.keys()
- Example:
```javascript
const drone = {speed: 100, color: 'yellow'};
const result = [];
Object.keys(drone).forEach(key => {
  result.push(key, drone[key]);
});
// result becomes ['speed',100,'color','yellow']
```

## Maps

- Collection of key-value pairs without inheritance/prototypes
- Ideal for data storage without prototype chain complications
- Methods: set(), get()
- Example:
```javascript
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.get(1); // Returns 'The Champion'
```

## Sets

- Collection of unique values (no duplicates)
- Useful for filtering arrays for unique elements
- Example:
```javascript
const repetitiveFruits = ['apple','pear','apple','pear','plum','apple'];
const uniqueFruits = new Set(repetitiveFruits);
// uniqueFruits contains {'apple', 'pear', 'plum'}
```

## Advanced Data Structures

JavaScript can implement custom, non-native data structures including:
- Queues
- Linked lists (singly-linked and doubly-linked)
- Trees
- Graphs

*Note: While these advanced structures can be custom-coded in JavaScript, they are beyond the scope of this document.*

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/13- Template Literal|Template Literals in JavaScript]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/15- Spread and Rest Operators|15- Spread and Rest Operators]]
