# Conditional Rendering in React

## Core Concept
* State determines component rendering
* Uses standard JavaScript conditional logic
* Multiple approaches to implement conditional rendering

## Rendering Approaches

### 1. Basic Conditional Rendering
```jsx
function CurrentMessage() {
  const day = new Date().getDay();
  if (day >= 1 && day <= 5) {
    return <Workdays />
  }
  return <Weekends />
}
```

### 2. Props-Based Conditional Rendering
```jsx
function CurrentMessage(props) {
  if (props.day >= 1 && props.day <= 5) {
    return <Workdays />
  }
  return <Weekends />
}
```

### 3. Element Variables Method
```jsx
function CurrentMessage({day}) {
  const weekday = (day >= 1 && day <= 5);
  const weekend = (day >= 6 && day <= 7);
  let message;

  if (weekday) {
    message = <Workdays />
  } else if (weekend) {
    message = <Weekends />
  } else {
    message = <ErrorComponent />
  }

  return <div>{message}</div>
}
```

### 4. Logical AND Operator Rendering
```jsx
function LogicalAndExample() {
  const val = prompt('Anything but a 0');
  return (
    <div>
      <h1>Please don't type in a zero</h1>
      {val && <h2>Yay, no 0 was typed in!</h2>}
    </div>
  );
}
```

## Key Principles
* Conditional logic determines component display
* Multiple techniques available
* Leverage JavaScript's existing conditional operators
* Keep rendering logic clean and readable

## Rendering Scenarios
* Time-based content display
* User interaction-driven rendering
* State-dependent component selection
* Error handling and fallback components

## Best Practices
* Use appropriate conditional rendering technique
* Keep components focused
* Maintain code readability
* Handle all potential state scenarios

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/4- Conditional Rendering|Conditional Rendering in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/6- Conditional Components|Conditional Rendering in React: Login/Logout Example]]
