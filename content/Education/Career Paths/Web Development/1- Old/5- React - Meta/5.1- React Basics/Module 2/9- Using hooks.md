The tutorial focuses on two main React hooks: useState and useRef. Let's start with useState.

The useState Hook:
First, let's understand the basic usage through a simple text input example. This component allows users to type text, displays what they typed, and includes a reset button:

```jsx
import { useState } from 'react';

export default function InputComponent() {
  // Initialize state with default value 'hello'
  const [inputText, setText] = useState('hello');

  // Update state whenever input changes
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </>
  );
}
```

This example demonstrates three fundamental concepts: state initialization with a default value, updating state based on user input, and displaying state in the UI. The state (inputText) is local to this component and can't be accessed outside of it.

For more complex forms, you can use a single state object to manage multiple fields. Here's an example of a registration form:

```jsx
import { useState } from 'react';

export default function RegisterForm() {
  // Initialize state as an object containing all form fields
  const [form, setForm] = useState({
    firstName: 'Luke',
    lastName: 'Jones',
    email: 'lukeJones@sculpture.com',
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,               // Preserve other field values
              firstName: e.target.value  // Update only firstName
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>{form.firstName} {form.lastName} ({form.email})</p>
    </>
  );
}
```

Important Rules for Hooks:
When using any React hooks, including useState, you must follow these rules:
1. Only call hooks at the component's top level
2. Don't use hooks inside loops or conditions
3. Only call hooks from React functions, not regular JavaScript functions

The useRef Hook:
The useRef hook provides a way to directly access DOM elements. Here's an example that creates a button to focus an input field:

```jsx
function TextInputWithFocusButton() {
  // Create a ref object to store the input element reference
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Access the actual DOM element through .current
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

The useRef hook returns a ref object with a 'current' property. By attaching this ref to an element using the ref attribute, you can access and manipulate that element directly when needed, like focusing an input field in this example.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/8- Hooks|8- Hooks]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/10- What is State|Understanding State in React: Core Concepts]]
