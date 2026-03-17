### Summary: Styling JSX Elements in React

Styling JSX elements in React can be done in various ways, each with its pros and cons:

1. **External CSS with `className`**
    
    - Link an external CSS file in the `<head>` of `index.html` using a `<link>` tag.
    - Use CSS classes in your JSX via the `className` attribute.  
        Example:
    
```jsx
function Promo(props) {
  return (
    <div className="promo-section">
      <h1>{props.heading}</h1>
      <h2>{props.promoSubHeading}</h2>
    </div>
  );
}
```
    
```css
.promo-section {
  font-weight: bold;
  line-height: 20px;
}
```
    
    **Pros:**
    
    - Easy to manage and reuse styles.
    - Keeps CSS separate from JavaScript.
2. **Inline Styles**
    
    - Add styles directly within the JSX using the `style` attribute.
    - Use a JavaScript object to define styles, with CSS properties written in camelCase.  
        Example:
    
```jsx
<h1 style={{ color: "tomato", fontSize: "40px", fontWeight: "bold" }}>
  {props.heading}
</h1>
```
    
    **Pros:**
    
    - Convenient for quick or dynamic styling.  
        **Cons:**
    - Can make the component less readable and harder to maintain.
3. **Style Object Variable**
    
    - Save the style object in a variable and pass it to the `style` attribute.  
        Example:
    
```jsx
const styles = { color: "tomato", fontSize: "40px" };
<h1 style={styles}>{props.heading}</h1>;
```
    
    **Pros:**
    
    - Makes the component more self-contained.  
        **Cons:**
    - May increase complexity when managing multiple styles.

---

### Key Points:

- Inline styles require camelCased properties and string values (e.g., `fontSize: "40px"`).
- Using a style object variable is cleaner than inlining style literals but can make components harder to maintain.
- External CSS is the most scalable option for large projects.

Each approach has its use case, and choosing the right one depends on the needs of the app (e.g., simplicity, maintainability, or dynamic styling).

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/11- Props and children|11- Props and children]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/13-Practical Styling|13-Practical Styling]]
