# Conditional Rendering in React: Login/Logout Example

## Core Concept
* Change component display based on specific conditions
* Leverage JavaScript's conditional logic
* Render different components dynamically

## Basic Conditional Logic Examples
```jsx
// Random name selection
let name;
if (Math.random() > 0.5) {
  name = "Mike"
} else {
  name = "Susan"
}

// Conditional name selection with additional condition
let name;
let newUser = true;
if (Math.random() > 0.5 && newUser) {
  name = "Mike"
} else {
  name = "Susan"
}
```

## Login/Logout Conditional Rendering
### Parent Component
```jsx
function LogInOutButton(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
```

### Component Usage
```jsx
<LogInOutButton isLoggedIn={false} />
```

## Key Principles
* Use props or state to determine rendering
* Conditionally return different child components
* Flexible approach to dynamic UI changes

## Rendering Scenarios
* Authentication state management
* User-specific content display
* Conditional UI element rendering

## Best Practices
* Keep conditional logic clear and readable
* Use appropriate conditions
* Leverage props and state effectively
* Handle all potential rendering scenarios

## Advantages
* Dynamic user interface
* Responsive to application state
* Simplified component logic
* Easy to maintain and extend

## Common Use Cases
* Login/logout buttons
* User permission-based rendering
* Feature toggles
* Error state display
* Conditional content showing/hiding

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/5- Applying Conditional Rendering|Conditional Rendering in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/7- Single View Conditional Updates|Dynamic Day Message Component in React]]
