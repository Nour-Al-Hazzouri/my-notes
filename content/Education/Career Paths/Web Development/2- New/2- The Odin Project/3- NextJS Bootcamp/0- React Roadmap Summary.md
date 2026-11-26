# From Vanilla JavaScript to React and Next.js: Complete Roadmap Summary

Transitioning from Vanilla JavaScript to React is less about learning a brand-new programming language and more about upgrading how you organize user interfaces and manage changing data. In plain JavaScript, you manually search the Document Object Model (DOM) and instruct the browser step-by-step on how to mutate elements. React replaces that manual wiring with reusable JavaScript functions called components, automatic screen updates, and a predictable one-way flow of data—and Next.js builds on top of React to add routing, server rendering, and backend endpoints out of the box.

Before diving into the six roadmap topics in detail, the table below summarizes the core differences and upgrades when moving from Vanilla JavaScript to React.

| Dimension | Vanilla JavaScript Approach | React Upgrade | Why It Matters |
| :--- | :--- | :--- | :--- |
| **UI Updates** | Imperative DOM queries (`document.querySelector`) and manual node edits | Declarative components that describe what the UI should look like for given data | Eliminates "UI out of sync with data" bugs as apps grow |
| **Code Structure** | Separate HTML, CSS, and JS files wired together by selectors | Reusable, self-contained JavaScript functions returning JSX markup | Scales large UIs by composing small, isolated building blocks |
| **Data Flow** | Global or shared variables mutated anywhere in the codebase | Unidirectional data flow (read-only props down, events up) | Makes it easy to trace where data lives and what changed it |
| **Dynamic Lists** | `for` loops manually creating and appending DOM nodes | Array `.map()` transforming data directly into JSX with unique `key` props | Keeps list additions, deletions, and reorders fast and accurate |
| **App Infrastructure** | Direct browser APIs; everything built manually from scratch | Focused UI library paired with frameworks like Next.js for routing and servers | Lets you pair React's rendering engine with production-ready routing and APIs |

---

## 1. The Core Paradigm Shift: Declarative UI, One-Way Data, and React's Scope

The foundational problem React solves is reliably keeping what the user sees on screen synchronized with changing application data without manual DOM manipulation. Understanding this paradigm shift—along with what React intentionally leaves out—sets the mental model for everything else in the ecosystem.

### 1.1 Declarative UI vs. Imperative DOM Manipulation

In Vanilla JavaScript, you write **imperative** code: you tell the browser *how* to update the screen step-by-step by locating an element and mutating its properties. In React, you write **declarative** code: you write a function that describes *what* the UI should look like for a given piece of data, and React's rendering engine (using a Virtual DOM and reconciliation) figures out the most efficient way to update the browser DOM.

```javascript
// Vanilla JavaScript (Imperative): manually find and mutate the DOM node
const button = document.querySelector('#counter-btn');
button.textContent = `Clicked ${count} times`;
```

```jsx
// React (Declarative): describe what the button should display for a given 'count'
function CounterButton({ count }) {
  return <button>Clicked {count} times</button>;
}
```

### 1.2 Unidirectional Data Flow

In React, data moves in a single, predictable direction: **downward from parent components to child components** via read-only inputs called **props**. When a user interacts with a child component (like clicking a button), the child notifies the parent by calling a function passed down from that parent. This "props down, events up" pattern prevents different parts of an application from silently overwriting shared variables.

```jsx
// Parent component owns the data and passes it down
function App() {
  const userName = 'Alex';
  return <Header name={userName} />;
}

// Child component receives 'name' as a read-only prop
function Header({ name }) {
  return <h1>Welcome back, {name}!</h1>;
}
```

### 1.3 React as a UI Library, Not a Full Framework

Unlike all-in-one frameworks, React deliberately focuses **only on rendering user interfaces and organizing components**. It does not include built-in page routing, a data-fetching or caching strategy, global state stores, form validation, styling systems, or server-side rendering tooling. This lean core gives teams flexibility to pair React with specialized tools—or with a full-stack React framework like **Next.js**—to handle the rest of the application.

> **Key Takeaway:** React's job is to turn data into UI and keep the screen in sync when data changes; frameworks like Next.js supply the surrounding application infrastructure.

With that core paradigm in place, the next step is seeing how React actually structures those UI building blocks using components and JSX.

---

## 2. Component Architecture & JSX: Building Blocks with JavaScript Superpowers

Instead of maintaining a single large HTML document, React breaks an interface into small, independent pieces called **components**. A component is simply a JavaScript function that returns **JSX** (JavaScript XML), an HTML-like syntax that lets you write markup directly inside JavaScript.

### 2.1 Capitalized Functions and Component Composition

Every React component starts as a standard JavaScript function (or arrow function) that returns markup. Once defined, you can nest components inside other components—a pattern called **composition**—to build complex screens out of small, reusable parts. Notice that React component names **must always start with a capital letter** (`<MyButton />`) so React can distinguish them from built-in lowercase HTML tags (`<div>`, `<button>`).

```jsx
// 1. Small, reusable component
function MyButton() {
  return <button>I'm a button</button>;
}

// 2. Composed inside a parent component
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

### 2.2 JSX Rules Compared to Standard HTML

Because JSX compiles into JavaScript rather than living in a plain `.html` file, it enforces three stricter syntax rules:

* **Close every tag explicitly:** Self-closing HTML tags such as `<br>` or `<img>` must end with a slash (`<br />`, `<img />`).
* **Return a single root element:** A component cannot return multiple sibling tags side by side; wrap them in a shared parent like `<div>...</div>` or an empty **Fragment** (`<>...</>`) that adds no extra node to the DOM.
* **Use `className` instead of `class`:** Since `class` is a reserved keyword in JavaScript, CSS classes are applied with the `className` attribute.

```jsx
function ProfileCard() {
  return (
    <>
      <img className="avatar" src="photo.jpg" alt="Profile" />
      <p>Hello there.<br />Welcome to React.</p>
    </>
  );
}
```

### 2.3 Curly Braces `{}` vs. Template Literals `${}`

In standard JavaScript, template literals use backticks and `${}` to pause plain text and evaluate a JavaScript variable inside a string. JSX curly braces `{}` follow a similar mental model—they let you "escape back" from HTML-like markup into JavaScript—but with a major upgrade: **JSX `{}` is not limited to strings**. Inside `{}` (whether between tags or on attributes without quotes), you can evaluate any JavaScript expression, including variables, function calls, template literals, objects (such as `style={{ width: 90 }}`), or even other JSX components.

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'photo.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      {/* 1. Evaluate a JS variable inside markup */}
      <h1>{user.name}</h1>

      {/* 2. Combine template literals, dynamic attributes, and a JS style object */}
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
```

Understanding how components are structured and how `{}` brings JavaScript into markup prepares you for the next crucial question: how data actually enters, changes, and flows between those components.

---

## 3. Managing Data: Props, State, Destructuring, and Lifting State Up

In React, data falls into two distinct categories depending on who owns it: **props** (external inputs passed into a component) and **state** (internal memory owned by a component). Confusing the two—or mutating them directly—is one of the most common sources of beginner bugs.

### 3.1 Props and Why Destructuring Keys Must Match

**Props** (short for *properties*) are read-only configuration values passed from a parent component to a child component. Unlike standard JavaScript functions where positional parameters can have any arbitrary name, **React bundles all props into a single JavaScript object**. When you write `function Header({ name })`, you are using JavaScript **object destructuring**, so the identifier inside `{ }` must match the exact property key passed by the parent—otherwise, the variable evaluates to `undefined`.

If you want to use a different local variable name inside the child component, you have three valid options in JavaScript:

```jsx
// Parent passes { name: "Alex" }
function App() {
  const userName = 'Alex';
  return <Header name={userName} />;
}

// Option 1: Match the exact key passed by the parent
function Header({ name }) {
  return <h1>Welcome back, {name}!</h1>;
}

// Option 2: Use JS destructuring rename syntax (propertyKey: localVariable)
function HeaderRenamed({ name: test }) {
  return <h1>Welcome back, {test}!</h1>;
}

// Option 3: Skip destructuring and accept the entire props object
function HeaderObject(test) {
  return <h1>Welcome back, {test.name}!</h1>;
}
```

### 3.2 State (`useState`) vs. Plain JavaScript Variables

**State** is a component's internal memory for data that changes over time, created with React's `useState` Hook. You might wonder why you cannot just declare a plain `let count = 0` variable outside or inside a component and increment it. The difference is that **`useState` wraps your variable in React's scheduler**: calling the setter function (`setCount`) is what notifies React to **re-render** the component and update the screen.

```jsx
import { useState } from 'react';

function Counter() {
  // count = current value (starts at 0)
  // setCount = setter function that updates count and triggers a re-render
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 3.3 Immutability and the Spread Operator (`...`)

When state holds an array or an object, **you must never mutate it in place** (for example, avoid `todos.push(...)` or `user.name = ...`). React detects state changes **by reference**: if you modify an array or object in place, its reference stays the same, so React may fail to detect that anything changed and skip re-rendering the screen. Using the JavaScript **spread operator (`...`)** creates a brand-new array or object copy with your changes, giving React a new reference to trigger a DOM update. Keep in mind that the spread operator creates a **shallow copy** (one level deep), so updating a nested object requires copying that nested level as well.

```jsx
const [todos, setTodos] = useState(['Learn JSX']);

// Bad: mutates the existing array in place (same reference)
function addTodoBad(newTodo) {
  todos.push(newTodo);
  setTodos(todos);
}

// Good: spread operator creates a new array reference
function addTodoGood(newTodo) {
  setTodos([...todos, newTodo]);
}
```

### 3.4 Independent Component Instances and Lifting State Up

Even if you render the exact same component twice (`<MyButton />` and `<MyButton />`), **each instance gets its own private, independent `useState` memory**. Clicking the first button updates only the first button's count while the second stays at `0`.

To make multiple components share the same data and update together, you **lift state up**: remove `useState` from the child components, place it in their closest shared parent component, and pass both the state value and the click handler down as read-only props.

```jsx
import { useState } from 'react';

// Closest shared parent owns the single source of truth
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// Both buttons read the shared count and trigger the shared handler
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
```

> **Key Takeaway:** Props are read-only inputs from a parent, `useState` is private component memory that triggers re-renders, and lifting state up lets sibling components stay synchronized through a shared parent.

Once you can store and pass data cleanly, the next step is using standard JavaScript expressions to decide what UI to show and how to render arrays of data.

---

## 4. Rendering Logic & List Management: Conditions and Loops in JSX

React does not invent a special template language for `if` statements or `for` loops. Instead, you use standard JavaScript expressions directly inside JSX curly braces `{}` to show, hide, and repeat UI elements.

### 4.1 Conditional Rendering (`? :` and `&&`)

Because JSX `{}` expects JavaScript **expressions** that evaluate to a value rather than full `if/else` statements, React relies on two concise JavaScript patterns inside JSX (while still letting you use a standard `if/else` statement *before* `return` to store JSX in a variable when logic gets complex):

* **Ternary operator (`condition ? expr1 : expr2`):** Best for "either/or" UI where one branch renders if true and another renders if false.
* **Logical AND (`condition && expr`):** Best for "show or nothing" UI when there is no `else` branch. If the left side is truthy, React renders the JSX on the right; if falsy, React renders nothing.

```jsx
function UserStatus({ isLoggedIn, hasNotifications }) {
  return (
    <div>
      {/* Either Dashboard or LoginForm */}
      {isLoggedIn ? <Dashboard /> : <LoginForm />}

      {/* Show badge only when hasNotifications is truthy */}
      {hasNotifications && <span className="badge">New alerts!</span>}
    </div>
  );
}
```

### 4.2 Transforming Data Arrays with `.map()` and `.filter()`

In Vanilla JavaScript, displaying an array of items meant writing a `for` loop and manually creating and appending DOM nodes. In React, you use JavaScript's **`.map()`** method to transform each data object directly into a JSX element—and chain **`.filter()`** beforehand whenever you need to show only a subset of items. Because both methods return new arrays without mutating the original data, they fit React's immutable model naturally.

```jsx
const products = [
  { id: 1, title: 'Cabbage', inStock: true },
  { id: 2, title: 'Garlic', inStock: false },
  { id: 3, title: 'Apple', inStock: true },
];

function ShoppingList() {
  const listItems = products
    .filter((product) => product.inStock)
    .map((product) => (
      <li key={product.id}>{product.title}</li>
    ));

  return <ul>{listItems}</ul>;
}
```

### 4.3 Why the `key` Prop Is Required

Every element returned inside a `.map()` list needs a unique **`key` prop** (typically a stable database ID or unique string from your data). React's reconciliation engine uses `key` to track each item's identity across renders so that if items are added, deleted, or reordered later, React updates only the items that actually changed instead of rebuilding the entire list.

> **Key Takeaway:** React turns JavaScript expressions (`? :`, `&&`, `.filter()`, `.map()`) directly into dynamic UI, using `key` props to track list items efficiently.

Rendering static or state-driven lists is only half the story; real applications also need to respond to user clicks and communicate with external APIs and timers.

---

## 5. Interactivity, Side Effects, and Hooks (`useEffect`)

Interactive applications must handle user events immediately and synchronize with external systems—such as fetching data from an API or running timers—without breaking React's rendering cycle.

### 5.1 Passing Event Handlers Without Calling Them

In React, you respond to user actions by defining an event handler function inside your component and passing its reference to an attribute like `onClick`. A critical JavaScript distinction here is **passing a function vs. calling a function**: write `onClick={handleClick}` **without parentheses**, so React waits to invoke it until the user actually clicks. Adding `()` executes the function immediately during render.

```jsx
function PlayButton() {
  function handleClick() {
    alert('Playing song!');
  }

  // Correct: passes the function reference for React to call on click
  return <button onClick={handleClick}>Play</button>;
}
```

### 5.2 Side Effects with `useEffect` and Async Data Fetching

A **side effect** is anything a component does outside of returning JSX—such as fetching data from an API, starting a timer, or subscribing to browser events. React's **`useEffect` Hook** runs this code *after* the component renders to the screen, and can optionally return a **cleanup function** to cancel timers or ignore outdated responses if the component unmounts.

```jsx
import { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const loadProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (!ignore) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  return <ul>{products.map((p) => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

### 5.3 Demystifying the Dependency Array and Stale Closures

Because a React component function re-runs from top to bottom on every state update, `useEffect` takes a second argument—the **dependency array**—that acts as a **watch list** telling React when to re-run the effect:

* **Empty array `[]`:** Tells React there are no variables to watch, so the effect runs **only once** when the component first appears (mounts).
* **Populated array `[variable]`:** Tells React to run the effect on mount and **re-run whenever `variable` changes**.

If an effect with an empty `[]` reads a state variable directly, JavaScript closure rules lock that effect onto the variable's initial value from the first render (a **stale closure**). For timers or counters inside `useEffect`, you can either include the variable in the dependency array or pass a **functional update** (`s => s + 1`) so React always supplies the latest state value.

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // Functional update avoids a stale closure even with an empty [] watch list
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup stops the interval when the component leaves the screen
    return () => clearInterval(id);
  }, []);

  return <p>Seconds: {seconds}</p>;
}
```

### 5.4 The Rules of Hooks

Functions starting with `use` (`useState`, `useEffect`) are called **Hooks**, and they follow one strict structural rule: **always call Hooks at the very top level of your component function**. Never place them inside `if` statements, loops, or nested functions, because React relies on Hooks running in the exact same order on every render.

> **Key Takeaway:** Pass event functions by reference without `()`, call Hooks only at the top level, and use `useEffect`'s dependency array (`[]` vs. `[value]`) and cleanup functions to keep external async operations safe and predictable.

With all core React mechanics covered, the final topic bridges React's UI engine to the full-stack framework you will use in your bootcamp: Next.js.

---

## 6. The Next.js Bridge: Turning React's Engine into a Full-Stack Vehicle

If React gives you the tools to build a car's engine, **Next.js** gives you the engine plus the chassis, wheels, and fuel system—a complete production vehicle. Next.js builds directly on React's component model while adding server rendering, file-based routing, and backend API routes out of the box.

### 6.1 Server Components vs. Client Components (`'use client'`)

In modern Next.js (using the **App Router**), **every component is a React Server Component (RSC) by default**. Server Components run exclusively on the server: they can fetch data directly using `async/await`, read databases or secrets without exposing them to the browser, and send ready-made HTML without shipping extra JavaScript. Whenever a component needs browser interactivity—such as `useState`, `useEffect`, or `onClick` handlers—you opt it into the browser by adding `'use client'` at the very top of the file. The practical rule is to keep data fetching on the server and push `'use client'` down to small interactive "islands."

```jsx
// app/page.js (Server Component by default — runs on the server)
export default async function HomePage() {
  const response = await fetch('/api/posts');
  const posts = await response.json();

  return (
    <main>
      <h1>Latest Posts</h1>
      <LikeButton />
    </main>
  );
}
```

```jsx
// components/LikeButton.js (Client Component — runs in the browser)
'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}
```

### 6.2 File-Based Routing (No Manual Router Setup)

In plain React, switching between pages requires installing and configuring a separate client-side routing library. Next.js replaces manual router configuration with **file-system routing** inside the `app` directory: folders define URL segments, and special filenames define the UI for each segment.

* **`app/page.js`** maps to `/` (Home page).
* **`app/about/page.js`** maps to `/about`.
* **`app/blog/[slug]/page.js`** maps to dynamic URLs such as `/blog/first-post`.
* **Shared and state files** such as `layout.tsx`, `loading.tsx`, and `error.tsx` automatically wrap child routes with persistent navigation, loading states, and error boundaries.

### 6.3 Built-In API Routes (Route Handlers)

Next.js also lets you write backend HTTP endpoints alongside your frontend components by placing a `route.js` (or `route.ts`) file inside `app/api`. For many web applications, these **Route Handlers** eliminate the need to set up and maintain a separate Express.js backend server.

```javascript
// app/api/hello/route.js -> Accessible at /api/hello
export async function GET() {
  return Response.json({ message: 'Hello from the Next.js backend!' });
}
```

> **Key Takeaway:** Next.js keeps React's component, prop, and state rules intact while adding Server Components by default, folder-based routing, and built-in backend endpoints.

---

## 7. Bootcamp Readiness: Main Upgrades at a Glance

Before starting your bootcamp, use the summary table below as a quick mental checklist of how each Vanilla JavaScript habit upgrades when you step into React and Next.js.

| Concept | Vanilla JS Habit | React / Next.js Upgrade |
| :--- | :--- | :--- |
| **Updating the Screen** | Select DOM nodes and mutate text or attributes manually | Call a `useState` setter (`setCount`) and let React re-render |
| **Function Parameters** | Positional arguments with any variable name | Single `props` object destructured by exact key name (`{ name }`) |
| **String/Data Embedding** | Template literals (`${variable}`) inside strings | JSX curly braces (`{expression}`) for strings, objects, logic, or UI |
| **Updating Arrays/Objects** | In-place edits (`array.push()`, `obj.prop = val`) | Immutable copies with spread (`[...items, newItem]`) to create a new reference |
| **Sharing Data** | Global `let` variables accessed directly | Lift `useState` to the closest shared parent and pass props down |
| **Lists & Conditions** | `for` loops and `if/else` blocks building DOM nodes | `.map()` with `key` props, ternary `? :`, and logical `&&` inside JSX |
| **Async & Lifecycle** | Top-level `fetch()` calls and manual event listeners | `useEffect(..., [])` with cleanup functions and functional updates (`s => s + 1`) |
| **Routing & Backend** | Separate router setup and standalone Express server | Next.js App Router (`app/page.js`), Server Components, and `app/api/route.js` |
