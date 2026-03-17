# Week 8 Short: DOM (Document Object Model)

## Overview
The Document Object Model (DOM) is a specific JavaScript object that allows manipulation of web page content and appearance. Building on JavaScript's object concepts, the DOM organizes an entire web page into a single, navigable JavaScript object that can be modified to change the website's look and feel dynamically.

## Objects Recap

### Object Components
Objects contain two main things:
1. **Properties** (also called data or fields)
2. **Methods** (functions that apply to the object)

### Flexible Object Content
Objects can contain:
- Simple data values
- Other objects
- Arrays
- Nested objects within objects

This creates a **tree structure** - similar to the tree data structures studied in C.

## The Document Object

### What It Is
- A specific JavaScript object
- Organizes entire web page content into one object
- Creates a hierarchical tree structure of the page
- Enables dynamic manipulation without editing HTML/Python

### Key Benefit
Once you know the document object's methods and properties, you can:
- Change website content dynamically
- Modify appearance using JavaScript
- Manipulate without touching original HTML

## HTML to DOM Tree Example

### Sample HTML Page
```html
<html>
  <head>
    <title>Hello, world</title>
  </head>
  <body>
    <h2>Welcome!</h2>
    <p>Hello, world</p>
    <a href="test.html">Link</a>
  </body>
</html>
```

### Tree Structure Representation
```
document
    └── html
        ├── head
        │   └── title
        │       └── "Hello, world"
        └── body
            ├── h2
            │   └── "Welcome!"
            ├── p
            │   └── "Hello, world"
            └── a
                └── "Link"
```

- Indentation represents nesting
- Each nested element becomes a child in the tree
- Text content is the innermost level

## Exploring the Document Object in Browser

### Using Developer Console
1. Open Developer Console (Chrome: Ctrl+Shift+J or Cmd+Shift+J)
2. Type: `console.dir(document)`
3. Explore the nested structure

### Console Methods
- `console.log()` - Print information
- `console.dir()` - Display object in directory structure

### What You'll See
- Document object with many properties
- `children` property shows nested elements
- Can navigate through:
  - `document` → `html` (1 child)
  - `html` → `head` and `body` (2 children)
  - `body` → `h2`, `p`, `a` (3 children)

## Common Document Object Properties

### innerHTML
- Holds HTML content inside tags
- Example: `title` tag's innerHTML is "Hello, world"

### nodeName
- The tag name itself
- Example: `title` for the title node

### id
- Optional ID attribute from HTML
- Used for CSS styling or JavaScript selection
- Allows targeting specific elements

### parentNode
- Reference to parent element
- Example: `title`'s parentNode is `head`

### childNodes
- Array of child elements
- Example: `body`'s childNodes are `h2`, `p`, and `a`

### attributes
- Array of HTML element attributes
- Example: Image tag attributes include `src`, `height`, `width`

### style
- CSS styling for the element
- Can be manipulated to change appearance

## Common Document Object Methods

### getElementById(id)
```javascript
document.getElementById('colorDiv')
```
- Finds element with specific ID
- Returns the object from that point down
- **Warning**: Use lowercase 'd' in `Id` (common mistake!)

### getElementsByTagName(tag)
```javascript
document.getElementsByTagName('b')
```
- Returns array of all matching tags
- Example: All bold (`<b>`) sections
- Note plural "Elements"

### appendChild(node)
```javascript
parentElement.appendChild(newElement)
```
- Adds new element below current position
- Expands the DOM dynamically
- Can add paragraphs, headers, etc. on the fly

### removeChild(node)
```javascript
parentElement.removeChild(childElement)
```
- Deletes section of page
- Removes entire node from DOM

## Navigating the DOM

### Starting from the Top
- Begin with `document`
- Use properties and methods to navigate
- Find any element in the page

### Common Navigation Pattern
```javascript
// Start at document
// Find specific element
// Modify its properties
document.getElementById('myDiv').style.backgroundColor = 'green';
```

## jQuery: Simplifying DOM Manipulation

### What is jQuery?
- Most popular JavaScript library
- Open source, ~10 years old
- Simplifies client-side scripting
- Excellent for DOM manipulation and AJAX

### Comparison: JavaScript vs jQuery

#### Pure JavaScript
```javascript
document.getElementById('colorDiv').style.backgroundColor = 'green';
```
- Verbose but clear
- Lots of typing

#### jQuery Equivalent
```javascript
$('#colorDiv').css('background-color', 'green');
```
- Shorter syntax
- `$` is shorthand for jQuery
- `#colorDiv` selects by ID
- More cryptic but efficient

## Practical Example: Changing Colors

### HTML Structure
Multiple buttons to change background color of a div element

### Four Implementation Approaches

#### 1. Individual Color Functions
```javascript
function turnPurple() {
    document.getElementById('colorDiv').style.backgroundColor = 'purple';
}
// Similar functions for other colors
```

#### 2. General Purpose Function
```javascript
function changeColor(color) {
    document.getElementById('colorDiv').style.backgroundColor = color;
}
```
- Pass color as parameter
- More flexible design

#### 3. Event Handler
```javascript
function changeColorEvent(event) {
    var color = event.srcElement.innerHTML.toLowerCase();
    document.getElementById('colorDiv').style.backgroundColor = color;
}
```
- Uses event information
- Gets color from button text
- Converts to lowercase for CSS

#### 4. jQuery Version
```javascript
$(document).ready(function() {
    $('.jq-button').click(function() {
        var color = $(this).text().toLowerCase();
        $('#colorDiv').css('background-color', color);
    });
});
```
- Uses anonymous functions
- Attaches click handlers when document loads
- `$(this)` refers to clicked button

## jQuery Anonymous Functions

### Document Ready Pattern
```javascript
$(document).ready(function() {
    // Code here runs when page fully loaded
});
```
- Ensures page is loaded before executing
- Common jQuery pattern

### Event Binding
```javascript
$('.className').click(function() {
    // Anonymous function handles click
});
```
- No need to name the function
- Cleaner for one-time use handlers

## Important DOM Concepts

### Tree Navigation
- DOM is hierarchical
- Can traverse parent-child relationships
- Each element has its place in the tree

### Dynamic Modification
- Change content without page reload
- Add/remove elements dynamically
- Modify styles in real-time

### Event-Driven Updates
- Respond to user interactions
- Update DOM based on events
- Create interactive experiences

## Common Use Cases

### Dynamic Content
- Update text without reload
- Show/hide elements
- Add new content on demand

### Style Changes
- Change colors, fonts, sizes
- Animate elements
- Respond to user preferences

### Form Validation
- Check input in real-time
- Provide immediate feedback
- Enhance user experience

## Best Practices

### Performance
- Cache DOM selections
- Minimize DOM manipulation
- Use efficient selectors

### Organization
- Separate JavaScript from HTML
- Use meaningful IDs and classes
- Comment complex manipulations

### jQuery vs Vanilla JavaScript
- jQuery: Faster to write, good for complex selections
- Vanilla JS: No library dependency, better performance
- Choose based on project needs

## Key Takeaways

### DOM Structure
- Entire page represented as object tree
- Hierarchical parent-child relationships
- Navigate using properties and methods

### Manipulation Methods
- Select elements by ID, tag, class
- Modify properties and content
- Add or remove elements dynamically

### jQuery Benefits
- Simplified syntax
- Cross-browser compatibility
- Rich set of features
- Large community support

### Learning Resources
- jQuery documentation: jquery.com
- Practice with browser console
- Experiment with different selectors
- Build interactive examples

## Summary
The Document Object Model transforms static HTML into a dynamic, manipulable structure. Through JavaScript (and libraries like jQuery), developers can create rich, interactive web experiences by modifying the DOM in response to user actions. Understanding the tree structure and navigation methods is key to effective DOM manipulation.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/7- JavaScript|Week 8 Short: JavaScript]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/3- Week 8 Section|Week 8 Section: Web Development with HTML, CSS, and JavaScript]]
