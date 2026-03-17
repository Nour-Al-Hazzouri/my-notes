# Stateful vs Stateless Components in React

## Basic Concept
- Like choosing a vehicle, picking component types needs consideration of specific needs
- No one-size-fits-all solution in React components
- Understanding differences helps make better architectural decisions

## Component Types Explanation

### Stateful Components
```jsx
export function App(props) {
  // Holds internal state using useState
  const [date] = React.useState(new Date());
  return (
    <div>
      <Child message={date.toLocaleTimeString()} />
    </div>
  );
}
```
- Manages its own state (like date in example)
- Can change data based on user actions
- Usually parent components
- Like a manager who makes decisions and delegates

### Stateless Components
```jsx
export function Child(props) {
  // Simply displays what it receives
  return (
    <h1>{props.message}</h1>
  );
}
```
- Doesn't store/manage state
- Receives data through props
- Cannot modify received props (immutable)
- Like a worker who just follows instructions

## When to Use Each

### Use Stateful When:
- Component needs to maintain its own data
- Example: A form that tracks user input
```jsx
function Form() {
  const [inputValue, setInputValue] = useState("");
  // Can manage its own data
}
```

### Use Stateless When:
- Component just needs to display data
- No internal state management needed
- Example: A display component that shows data
```jsx
function Display({ data }) {
  // Just shows what it receives
  return <div>{data}</div>;
}
```

## Common Pattern
- Parent (Stateful): Manages state
- Children (Stateless): Receive and display state
- Like a family where parent makes decisions and children follow

## Props vs State
- Props: Immutable data passed down
- State: Mutable data managed internally
	![[Pasted image 20250121195945.png]]
- Both can be used to pass data, but serve different purposes
	![[Pasted image 20250121200037.png]]

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/14- React State Management|State Management in React: From Props to Context API]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/16- Module Summary|React Module Recap: Data, States, and Events]]
