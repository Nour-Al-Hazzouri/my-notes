### Organizing Code with Objects | The Odin Project - Cheatsheet

Objects are crucial for grouping related data (properties) and functionality (methods) together to avoid messy "spaghetti code".

---

### Object Literals

Defining an object directly with curly braces.

```javascript
const user = {
  // Properties (Data)
  name: "John Doe",
  score: 0,

  // Methods (Functions)
  increaseScore: function() {
    this.score += 1; // "this" refers to the current object (user)
  },
  
  // Method shorthand (ES6)
  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
};

user.increaseScore();   // Changes score to 1
console.log(user.score); // 1
console.log(user.sayHello()); // "Hello, my name is John Doe"
```

---

### The `this` Keyword

`this` represents the object that executes the current function.
- In an object method, `this` refers to the **object** itself.
- Without `this`, JavaScript would look for a global variable rather than the property inside the object.

```javascript
const player = {
  health: 100,
  takeDamage(amount) {
    // Correct way: "this.health" accesses the property above
    this.health -= amount; 
  }
}
```

---

### Organizing with Objects (Modules Pattern Concept)
Instead of floating variables, encase mechanics inside an object literal to namespace them.

```javascript
// Floating global variables (BAD)
let score = 0;
function addScore() { score++ }

// Namespaced inside an object (GOOD)
const gameController = {
  score: 0,
  addScore() {
    this.score++;
  }
};
```

---

**Next**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/2- FullStack JavaScript Path/2- JavaScript Course/2- Object Constructors|2- Object Constructors]]
