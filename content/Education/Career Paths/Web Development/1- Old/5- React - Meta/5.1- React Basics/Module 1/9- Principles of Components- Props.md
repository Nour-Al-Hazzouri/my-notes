- in JavaScript, you can make your functions more flexible by declaring them with parameters that allow you to pass in values as arguments when you call the function.
- in React, you can perform a similar action using something called properties, which are represented as props.
- in JavaScript, an object is a special type of variable that can contain many values, In React, you can use a similar technique to pass data from one component to another using the properties object or simply props
- When two components communicate with each other, the component sending the props data is known as the parent, and the component receiving the props data is known as the child.
- this communication is a one-directional data flow. Instead, developers use other approaches.
- In programming, a pure function is a function that will always return the same outputs for the same argument values that are passed in.
- In React, when you declare a component using props, it must never modify its own prompts.
Example:
```jsx
import React from 'react';
import Greeting from './Greeting'; // Import the child component

function App() {
  return (
    <div>
      <h1>Welcome to React Props Example!</h1>
      <Greeting name="John" age={25} />
      <Greeting name="Sarah" age={30} />
    </div>
  );
}

export default App;

```

```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default Greeting;

```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/8- Importing Components|8- Importing Components]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/10- Dissecting Props|10- Dissecting Props]]
