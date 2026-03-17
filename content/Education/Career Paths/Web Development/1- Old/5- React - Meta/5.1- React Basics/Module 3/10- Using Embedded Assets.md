* **Setup and Initial Files**
  * Created a basic React app called "Embedded Assets"
  * Added an assets folder containing an images folder
  * Placed a JPEG image named "Central Park" in the images folder

* **Method 1: Using Import Statement**
  * Syntax: `import rooftops from './assets/images/central-park.j'`
  * Implementation:
```jsx
<img
  height={200}
  src={rooftops}
  alt="An image of a rooftop in New York"
/>
```

* **Method 2: Using Require Function**
  * No import statement needed
  * Implementation:
```jsx
<img
  height={200}
  src={require("./assets/images/central-park.j")}
  alt="An image of central park"
/>
```

* **Method 3: Using Image URL**
  * Uses external image hosted on the internet
  * Created variable for URL: `const randomImageUrl = "https://picsum.photos/400/"`
  * Implementation:
```jsx
<img
  src={randomImageUrl}
  height={200}
/>
```

* **Common Features Across Methods**
  * All examples use a fixed height of 200 pixels
  * Alt text included for accessibility (except URL example)
  * All images rendered within a single div container
  * Complete component wrapped in an App function and exported

* **Final Component Structure**
```jsx
function App() {
  const randomImageUrl = "https://picsum.photos/400/"
  return (
    <div>
      <h1>Task: add three images with some styling</h1>
      {/* All three image implementations */}
    </div>
  );
}
export default App;
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/9- Bundeling Assets|Webpack and Asset Management in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/11- Audio and Video|React Video Implementation Summary]]
