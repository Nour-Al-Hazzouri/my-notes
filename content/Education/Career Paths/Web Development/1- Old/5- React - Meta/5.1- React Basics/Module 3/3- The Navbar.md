# React Router: Creating Navigation in Single Page Applications

## Learning Objectives
* Install react-router-dom library
* Set up basic navigation in React applications
* Understand routing in single-page applications

## Installation Process
* Use npm command: `npm i react-router-dom@6`
* Verify installation in `package.json`
* Confirms new dependency: `react-router-dom`

## Implementation Steps

### 1. Setup in `index.js`
* Import `BrowserRouter` from `react-router-dom`
* Wrap `<App />` component inside `<BrowserRouter>`

```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(
  document.querySelector('#root')
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. Modifications in `App.js`
* Import `Routes`, `Route`, and `Link` from `react-router-dom`
* Replace anchor tags with `<Link>` components
* Use `<Routes>` to define navigation paths

```jsx
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}
```

## Component Structure
### Homepage Component
```jsx
function Homepage() {
  return (
    <h1>Welcome to my site</h1>
  );
}
```

### AboutMe Component
```jsx
function AboutMe() {
  return (
    <h1>About Me</h1>
  );
}
```

## Key Routing Concepts
* Navigation without page refresh
* Components load dynamically
* `<Link>` replaces traditional `<a>` tags
* `<Routes>` manage component rendering
* Path-based component switching

## Navigation Behavior
* Clicking links loads specific components
* URL changes without full page reload
* Maintains single-page application experience

## Best Practices
* Use descriptive route paths
* Keep navigation structure clean
* Utilize React Router's built-in components
* Manage complex routing with nested routes

## Potential Enhancements
* Add more routes
* Implement nested routing
* Create more complex navigation structures
* Add route parameters

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/2- Navigation|Web Navigation: Single Page Applications (SPAs) vs Traditional Web Pages]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/4- Conditional Rendering|Conditional Rendering in React]]
