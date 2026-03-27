### Object Constructors | The Odin Project - Cheatsheet

Object Constructors are blueprint functions used to create multiple distinct objects (instances) of the same type.

---

### Creating a Constructor

Constructors are standard functions, but by convention, their name starts with a **Capital Letter**.

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  
  // Methods inside the constructor are recreated for EVERY instance (inefficient)
  this.sayHello = function() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// You MUST use the "new" keyword to instantiate
const player1 = new Player("Alice", "X");
const player2 = new Player("Bob", "O");

player1.sayHello(); // "Hi, I am Alice"
```
*Note: Using `new` sets `this` to point to the newly created, empty object rather than the global object.*

---

### The Prototype (`prototype`)

Defining methods inside the constructor function uses excess memory because a copy of the function is created for each object. **Prototypes** solve this by sharing methods entirely.

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Method is added to the shared Prototype instead of the Constructor
Player.prototype.sayHello = function() {
  console.log(`Hi, I am ${this.name}`);
}

const player1 = new Player("Alice", "X");
player1.sayHello(); // Still works, but uses less memory!
```

---

### Prototypal Inheritance

Inheriting traits from another constructor object using `Object.setPrototypeOf()`.

```javascript
// 1. Base Constructor
function User(name) {
  this.name = name;
}
User.prototype.sayName = function() {
  console.log(this.name);
}

// 2. Child Constructor
function Admin(name, role) {
  this.role = role;
  // Apply User's constructor properties to Admin's instance
  User.call(this, name); 
}

// 3. Inherit Prototype methods from User
Object.setPrototypeOf(Admin.prototype, User.prototype);

// 4. Create Child Instance
const admin1 = new Admin("Alice", "Moderator");
admin1.sayName(); // Inherited method works!
```

---

**Previous:** [[Education/Career Paths/Web Development/2- New/2- The Odin Project/2- FullStack JavaScript Path/2- JavaScript Course/1- Organizing Code with Objects|1- Organizing Code with Objects]]  | **Next:** [[3- Closures, Factory Functions and the Module Pattern]]