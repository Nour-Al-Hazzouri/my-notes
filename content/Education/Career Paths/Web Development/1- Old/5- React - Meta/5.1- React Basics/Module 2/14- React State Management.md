# State Management in React: From Props to Context API

## Traditional Props Management
When using props, data must flow through each component level - even if some components don't use it. Think of it like a mail system where each letter must go through every post office, even if that office doesn't need to process it.

```jsx
// Top level component
function App() {
  const [userName, setUserName] = useState("John Doe");
  // Data starts here and must pass through Header to reach NavBar
  return (
    <div>
      <Header userName={userName} setUserName={setUserName} />
    </div>
  );
}

function Header({ userName, setUserName }) {
  // Header must pass data through even if it doesn't use it
  return <NavBar userName={userName} setUserName={setUserName} />;
}
```

## Context API Implementation
Context API provides a way to pass data through the component tree without manually passing props at every level.

1. **Create the Context:**
```jsx
// This creates our "data channel"
const MealsContext = React.createContext();
```

2. **Set up Provider (the data source):**
```jsx
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  // This is where we store our shared data
  const [meals, setMealsList] = React.useState(todaysMeals);

  // Make data available to any child component
  return (
    <MealsContext.Provider value={{ meals, setMealsList }}>
      {children}
    </MealsContext.Provider>
  );
};
```

3. **Use the Context (accessing the data):**
```jsx
const MealsList = () => {
  // Any component can grab the data directly
  const { meals } = useMealsListContext();

  return (
    <div>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};
```

## useReducer Example
useReducer is like a traffic controller for state changes - it handles different types of state updates in a structured way.

```jsx
const reducer = (state, action) => {
  // Define how state should change based on different actions
  if (action.type === 'ride') {
    return { money: state.money + 10 };  // Add money for new ride
  }
  if (action.type === 'fuel') {
    return { money: state.money - 50 };  // Subtract money for fuel
  }
  return state;
};

function App() {
  // useReducer provides state and a way to update it
  const [state, dispatch] = useReducer(reducer, { money: 100 });

  return (
    <button onClick={() => dispatch({ type: 'ride' })}>
      New customer (+$10)
    </button>
  );
}
```

## Simple Analogy
- Props are like passing a note through multiple people to reach someone
- Context is like a radio broadcast - anyone with a receiver (useContext) can tune in
- useReducer is like a vending machine - put in a specific action, get a specific state change

Would you like me to expand on any of these concepts or provide more detailed examples?

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/13- Prop Drilling|Understanding Prop Drilling in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/15- Stateful Vs. Stateless Data|Stateful vs Stateless Components in React]]
