# Dynamic Day Message Component in React

## Conditional Rendering Techniques
* Uses JavaScript Date methods
* Combines if-else statements and ternary operator
* Renders different messages based on day and time

## Key Component Features
### Time and Day Extraction
```javascript
const time = new Date();
const day = time.toLocaleString("en-us", { weekday: "long" });
const morning = time.getHours() >= 6 && time.getHours() <= 12;
```

### Dynamic Message Generation
* Uses `if-else` statement to create day-specific messages
* Converts day to lowercase for comparison
* Handles different days of the week

## Message Logic
```javascript
let dayMessage;
if (day.toLowerCase() === "monday") {
  dayMessage = `Happy ${day}`;
} else if (day.toLowerCase() === "tuesday") {
  dayMessage = `${day}, four days to go`;
} else if (day.toLowerCase() === "wednesday") {
  dayMessage = `${day}, half way there`;
} else if (day.toLowerCase() === "thursday") {
  dayMessage = `${day}, start planning the weekend`;
} else if (day.toLowerCase() === "friday") {
  dayMessage = "Woo hoo, the weekend is coming!";
} else {
  dayMessage = "Stay calm and keep having fun";
}
```

## Rendering Approach
```jsx
return (
  <div className="App">
    <h1>{dayMessage}</h1>
    {morning ? <h2>Have you had breakfast yet?</h2> : ' '}
  </div>
);
```

## Conditional Rendering Techniques
### 1. If-Else Statement
* Used for day-specific message generation
* Allows complex logic and multiple conditions

### 2. Ternary Operator
* Conditionally renders breakfast message
* Compact syntax for simple conditions
* `condition ? expressionIfTrue : expressionIfFalse`

## Best Practices
* Use meaningful variable names
* Keep conditional logic clear
* Handle all potential scenarios
* Use appropriate conditional rendering technique

## Component Capabilities
* Dynamic day-based messaging
* Time-of-day specific content
* Flexible and easily extensible

## Potential Improvements
* Extract messages to constants
* Add more detailed day messages
* Create separate components for different rendering logic
* Add internationalization support

## Learnings
* JavaScript Date manipulation
* Conditional rendering techniques
* Dynamic content generation
* React component composition

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/6- Conditional Components|Conditional Rendering in React: Login/Logout Example]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/8- What is an asset and where does it live|Assets in React: Managing and Using Images]]
