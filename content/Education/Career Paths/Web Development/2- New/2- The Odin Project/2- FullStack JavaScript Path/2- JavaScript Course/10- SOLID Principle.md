# **Single Responsibility Principle**
#### **The Core Concept**

The Single Responsibility Principle is the **"S"** in SOLID. It is often summarized as:

> _"A class, module, or function should have one, and only one, reason to change."_

- **One Responsibility:** Every part of your code should focus on doing one thing well.
    
- **Reason to Change:** If you can think of two different reasons why you would need to modify a piece of code (e.g., changing how data is calculated vs. changing how data is displayed), it has more than one responsibility.
    

#### **Why It Matters**

- **Decoupling:** By separating concerns, you ensure that changes in one area (like how you log errors) don't accidentally break logic in another area (like how you calculate values).
    
- **Maintainability:** Small, focused files are easier to navigate, test, and understand.
    
- **Reusability:** A dedicated "Logger" module can be used across your entire application, whereas a logger buried inside a "CalorieTracker" cannot.
    

#### **The "Red Flag" (When to apply SRP)**

Look for bloated classes that handle multiple unrelated tasks, such as:

1. Performing calculations **AND** saving to a database.
    
2. Managing state **AND** handling API requests.
    
3. Processing data **AND** formatting it for the UI/Console.
    

---

### **Practical Implementation: Refactoring for SRP**

#### **1. The Problematic Approach (Violation)**

In this example, the `CalorieTracker` class handles both the logic for tracking calories and the logic for notifying the user via the console. If you wanted to change from `console.log` to an email notification, you would have to modify the `CalorieTracker`.

```JavaScript
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      // VIOLATION: CalorieTracker is responsible for "Notification" logic here
      console.log('Max calories exceeded!');
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1600);
```

#### **2. The SRP-Compliant Approach (Refactored)**

We move the notification logic into a separate module (or function). Now, `CalorieTracker` only handles math and state, while the `logMessage` module handles output.

```JavaScript
// logger.js - A dedicated module for output logic
export default function logMessage(message) {
  console.log(message);
  // Future change: You could change this to an email or API call 
  // without touching the CalorieTracker code.
}

// main.js
import logMessage from './logger.js';

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      // COMPLIANT: CalorieTracker simply calls the logger
      logMessage('Max calories exceeded!');
    }
  }
}
```

### **Summary Advice**

The goal isn't to make every single line of code its own file, but to identify unrelated tasks. Ask yourself: _"If I want to change how the user sees this information, do I have to open the file that calculates the information?"_ If the answer is yes, you are likely violating SRP. Breaking these apart makes your code modular and much more resilient to future changes.

---
# The Open/Closed Principle 

> _"Software entities (classes, modules, functions, etc.) should be **open for extension**, but **closed for modification**."_

- **Open for Extension:** You should be able to add new functionality or features to your code.
    
- **Closed for Modification:** You should be able to add those new features **without** changing the existing, already-tested source code.
    

#### **Why It Matters**

- **Reduced Bugs:** Every time you modify existing code (like adding a new `case` to a switch statement), you risk breaking old functionality.
    
- **Maintainability:** It prevents "fragile code" where a small change in one place requires updates in ten other places.
    
- **Readability:** It replaces massive, complex conditional blocks with smaller, focused classes or functions.
    

#### **The "Red Flag" (When to apply OCP)**

The biggest indicator that you are violating OCP is the presence of **large `switch` statements** or **chained `if/else if` blocks** that check for a "type" or "role" to determine behavior.

---

### **Practical Implementation: Refactoring for OCP**

#### **1. The Problematic Approach (Violation)**

In this version, adding a new question type (e.g., "Range") requires opening the `printQuiz` function and adding a new `case`. This violates OCP because the function is **open for modification**.

```js
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    // VIOLATION: This block must be modified every time a new type is added
    switch (question.type) {
      case 'boolean':
        console.log('1. True \n2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((opt, i) => console.log(`${i + 1}. ${opt}`));
        break;
      case 'text':
        console.log('Answer: ____________');
        break;
    }
  });
}
```

#### **2. The OCP-Compliant Approach (Refactored)**

We use **Polymorphism**. We move the logic into separate classes. Now, `printQuiz` is "closed"—it doesn't care what kind of question it is, as long as it has a `printChoices()` method.

```js
// Each class handles its own specific logic
class BooleanQuestion {
  constructor(description) { this.description = description; }
  printChoices() { console.log('1. True \n2. False'); }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printChoices() {
    this.options.forEach((opt, i) => console.log(`${i + 1}. ${opt}`));
  }
}

// EXTENSION: To add a 'Range' type, we just create a new class. 
// We DON'T touch the printQuiz function.
class RangeQuestion {
  constructor(description) { this.description = description; }
  printChoices() { console.log('Min: ___ Max: ___'); }
}

// COMPLIANT: This function is CLOSED. 
// It works for any new question type automatically.
function printQuiz(questions) {
  questions.forEach(q => {
    console.log(q.description);
    q.printChoices(); // Polymorphic call
  });
}

const quiz = [
  new BooleanQuestion('Is OCP useful?'),
  new RangeQuestion('What is your budget?') 
];

printQuiz(quiz);
```

### **Summary Advice**

While you shouldn't over-engineer every small project, you should reach for OCP when you find yourself repeatedly returning to the same function to add new "types" or "logic branches." By moving that logic into modules or classes that "know" how to handle themselves, you create a system that grows by **adding** code, not by **rewriting** it.

---
# **Liskov Substitution Principle (LSP)**

#### **The Core Concept**

The Liskov Substitution Principle is the **"L"** in SOLID. The technical definition is dense, but the practical meaning is straightforward:

> _"If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program."_

In plain terms: **Subclasses should be able to stand in for their parent classes without breaking the code.** If you have a function that expects a `Bird` and you pass it a `Penguin`, the program shouldn't crash or behave unexpectedly.

#### **Why It Matters**

- **Predictability:** It ensures that inheritance doesn't introduce hidden bugs.
    
- **Trust in Abstraction:** You can write code based on a parent class and be confident it will work for _any_ child class.
    
- **Clean Architecture:** It forces you to think deeply about whether an "is-a" relationship (e.g., "a Penguin is a Bird") actually makes sense in terms of _behavior_, not just taxonomy.
    

#### **The "Red Flag" (When to apply LSP)**

- **Unexpected Errors:** A subclass throws an error for a method that the parent class is supposed to support (e.g., a `Penguin` throwing an error when `fly()` is called).
    
- **Type Checking:** You find yourself using `if (obj instanceof Subclass)` inside a function that is supposed to handle the parent class.
    
- **Empty Overrides:** You override a parent method but leave it empty because the subclass doesn't actually do that thing.
    

---

### **Practical Implementation: Refactoring for LSP**

#### **1. The Problematic Approach (Violation)**

In this common example, we assume all birds can fly. When we pass a `Penguin` (which is technically a bird but cannot fly) into a function expecting a `Bird`, the program crashes.

```js
class Bird {
  fly() { console.log('I can fly'); }
}

class Duck extends Bird {}

class Penguin extends Bird {
  fly() { throw new Error('Cannot fly'); } // VIOLATION: Breaks the contract of the parent class
}

function makeBirdFly(bird) {
  bird.fly();
}

makeBirdFly(new Duck());    // Works
makeBirdFly(new Penguin()); // CRASHES: Violates LSP
```

#### **2. The LSP-Compliant Approach (Refactored)**

We refactor the inheritance tree to accurately reflect behavior. Instead of one giant `Bird` class, we split them into `FlyingBird` and `SwimmingBird`.

```js
class Bird {
  // Common bird properties like eat() or sleep()
}

class FlyingBird extends Bird {
  fly() { console.log('I can fly'); }
}

class SwimmingBird extends Bird {
  swim() { console.log('I can swim'); }
}

class Duck extends FlyingBird {}
class Penguin extends SwimmingBird {}

// These functions now have specific, reliable contracts
function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

makeFlyingBirdFly(new Duck());    // Works perfectly
makeSwimmingBirdSwim(new Penguin()); // Works perfectly
```

### **Appendix: Solving Inheritance Limits with Composition**

While the **Liskov Substitution Principle (LSP)** helps us fix broken inheritance, many developers argue that **Composition** is a better starting point altogether.

#### **The Problem: The "Gorilla/Banana" Problem**

Inheritance forces you to design types based on **what they are** (e.g., _a Dog is an Animal_). This creates rigid taxonomies. If you need a "Murder Robot Dog," it might inherit a "digestive system" from the `Animal` class that it doesn't need. You wanted a banana (barking), but you got the gorilla (animal) and the entire jungle (pooping/eating) with it.

#### **The Solution: Composition**

Design types based on **what they do** rather than what they are. Instead of a deep inheritance tree, create small, functional building blocks and "compose" your objects from them.

- **Inheritance:** A Dog _is_ an Animal.
    
- **Composition:** A Dog _is a_ Barker + _is a_ Pooper.
    

#### **Code Example: Functional Composition**

In JavaScript, we can use factory functions and `Object.assign` to mix and match behaviors without a parent class.

```JavaScript
// 1. Define standalone behaviors
const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
});

const killer = (state) => ({
  kill: () => console.log("Target eliminated.")
});

// 2. Compose the "Murder Robot Dog"
const MurderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  };

  // Combine only the behaviors we actually need
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  );
};

const snickers = MurderRobotDog('Snickers');
snickers.bark();  // "Woof, I am Snickers"
snickers.kill();  // "Target eliminated."
// Note: snickers has no 'poop()' method because we didn't compose it with one!
```

**Final Takeaway:** Favoring composition over inheritance makes your code more flexible. It prevents you from having to predict the entire future of your object hierarchy on day one. When your project manager asks for a "flying-swimming-robot-cat," you simply plug in those behaviors and move on.

### **Summary Advice**

LSP is often a warning that your **inheritance is too broad**. Just because something is a "type" of something else in the real world (a Square is a Rectangle, a Penguin is a Bird) doesn't mean it should inherit from it in code if their **behaviors** differ.

---
# **Interface Segregation Principle (ISP)**

#### **The Core Concept**

The Interface Segregation Principle is the **"I"** in SOLID. It focuses on how we design the "contracts" (interfaces or classes) that our code relies on:

> _"Clients should not be forced to depend upon interfaces that they do not use."_

In simpler terms: **Don't bloat a class or interface with methods that only some of its users need.** It is better to have many small, specific interfaces than one giant, "do-everything" interface.

#### **Why It Matters**

- **Avoids "Fat" Interfaces:** Prevents classes from being forced to implement "dead code" (methods that do nothing or throw errors).
    
- **Decoupling:** If you change a specific method, you only affect the classes that actually use it, rather than every class connected to a giant interface.
    
- **Clarity:** It makes it immediately obvious what a specific component is actually capable of doing.
    

#### **The "Red Flag" (When to apply ISP)**

- **Empty Implementations:** You find yourself writing `return null` or `// do nothing` inside a method because the class _must_ have that method to satisfy an inheritance/interface requirement.
    
- **Large Base Classes:** A base class has 20 methods, but most subclasses only use 3 or 4 of them.
    

---

### **Practical Implementation: Refactoring for ISP**

#### **1. The Problematic Approach (Violation)**

In this example, we have an `Entity` class. It assumes everything in the "game" can move, attack, and take damage. However, a `Wall` is an entity that can take damage, but it definitely shouldn't be able to move or attack.

```JavaScript
class Entity {
  constructor(name) {
    this.name = name;
  }

  move() { console.log(`${this.name} moved`); }
  attack() { console.log(`${this.name} attacked`); }
  takeDamage() { console.log(`${this.name} took damage`); }
}

class Player extends Entity {}

class Wall extends Entity {
  // VIOLATION: A wall cannot move or attack. 
  // We are forced to have these methods here.
  move() { return null; } 
  attack() { return null; }
}
```

#### **2. The ISP-Compliant Approach (Refactored)**

Instead of one giant class, we use **Composition**. We break the logic into small, reusable pieces (mixins or separate logic blocks) and only give the `Wall` or `Player` what they actually need.

```JavaScript
// Define specific behaviors
const mover = {
  move() { console.log(`${this.name} moved`); }
};

const attacker = {
  attack() { console.log(`${this.name} attacked`); }
};

const damagable = {
  takeDamage() { console.log(`${this.name} took damage`); }
};

// COMPLIANT: Only assign the behaviors that are actually used
class Player {
  constructor(name) { this.name = name; }
}
Object.assign(Player.prototype, mover, attacker, damagable);

class Wall {
  constructor(name) { this.name = name; }
}
Object.assign(Wall.prototype, damagable); // Wall ONLY takes damage

const player = new Player('Hero');
const wall = new Wall('Stone Wall');

player.move();   // Works
wall.takeDamage(); // Works
// wall.move();   // Error: wall.move is not a function (Correct behavior!)
```

### **Summary Advice**

In **JavaScript/TypeScript**, where we don't always have strict "interfaces," ISP is best followed by using **Composition over Inheritance**. Think of your components as "composed" of specific traits. A "Button" shouldn't have to inherit "Search Logic" just because they are both "UI Elements." Keep your logic fragments small and specific.

---

# **Dependency Inversion Principle (DIP)**

#### **The Core Concept**

The Dependency Inversion Principle is the final piece of the SOLID puzzle (**"D"**). It addresses the relationship between high-level logic and low-level details:

> 1. _"High-level modules should not depend on low-level modules. Both should depend on abstractions."_
>     
> 2. _"Abstractions should not depend on details. Details should depend on abstractions."_
>     

In simple terms: **Your main application logic (the "what") should not be hard-coded to a specific external tool or library (the "how").** Instead, create a "middleman" (interface or wrapper) so you can swap out the tools without rewriting your entire app.

#### **Why It Matters**

- **Swappability:** You can switch from Stripe to PayPal, or from a SQL database to MongoDB, by only changing one small wrapper class.
    
- **Testability:** You can easily swap a real API for a "mock" or "fake" version during testing so you don't actually charge credit cards while debugging.
    
- **Decoupling:** Your core business logic becomes independent of the specific version or syntax of third-party libraries.
    

#### **The "Red Flag" (When to apply DIP)**

- **Hard-coded Imports:** You see specific library names (like `import Stripe from 'stripe'`) directly inside your business logic classes.
    
- **Complex Refactoring:** Changing a service provider requires searching and replacing code in dozens of files.
    
- **Rigid Constructors:** A class creates its own dependencies internally (using `new`) rather than having them passed in.
    

---

### **Practical Implementation: Refactoring for DIP**

#### **1. The Problematic Approach (Violation)**

In this version, the `Store` is directly "coupled" to Stripe. If we want to switch to PayPal, we have to rewrite the `Store` class entirely because the Stripe and PayPal APIs use different parameters (pennies vs. dollars) and methods.

```JavaScript
class Store {
  constructor(user) {
    // VIOLATION: Store is creating and depending directly on Stripe
    this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    // VIOLATION: Store must know Stripe's specific 'pennies' requirement
    this.stripe.makePayment(200 * quantity * 100);
  }
}
```

#### **2. The DIP-Compliant Approach (Refactored)**

We create an **Abstraction** (the `PaymentProcessor`). The `Store` now only knows how to call a generic `pay()` method. We "inject" the specific implementation (Stripe or PayPal) into the `Store`.

```JavaScript
// 1. The Abstraction Layer (The Wrapper)
class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100); // Handle 'pennies' here
  }
}

class PayPalPaymentProcessor {
  constructor(user) {
    this.paypal = new PayPal();
    this.user = user;
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars); // Handle 'user' here
  }
}

// 2. The High-Level Module (The Store)
class Store {
  constructor(paymentProcessor) {
    // COMPLIANT: Store depends on a generic processor, not a specific brand
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
}

// 3. The Implementation (Switching is now easy)
const store = new Store(new StripePaymentProcessor('John'));
// To switch, we ONLY change this line:
// const store = new Store(new PayPalPaymentProcessor('John'));

store.purchaseBike(2);
```
---
**Previous:** [[9- JSON]]