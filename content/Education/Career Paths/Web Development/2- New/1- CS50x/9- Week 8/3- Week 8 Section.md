# Week 8 Section: Web Development with HTML, CSS, and JavaScript

## Overview
This section, led by Yulia Zhukovets (CS50 Preceptor), covers the fundamentals of web development including HTTP, HTML, CSS, and JavaScript. The session demonstrates how these technologies work together to create interactive web pages, using a practical scoreboard example.

## Agenda
1. **HTTP**: Protocol for web communication
2. **HTML**: Core elements and structure
3. **CSS**: Styling and aesthetics
4. **JavaScript**: Interactivity and dynamic features

## HTTP (Hypertext Transfer Protocol)

### What is HTTP?
- Protocol allowing computers to interact with servers
- Renders web pages in browsers
- Foundation of web communication

### http-server Command
```bash
http-server
```
- Sets up a local server for testing
- Tests web pages without connecting to external servers
- Essential tool for web development
- Useful for local testing before deployment

## HTML Structure and Components

### HTML as a Tree
HTML documents are structured hierarchically like trees:
- Parent tags contain child tags
- Indentation shows relationships
- Computer needs explicit instructions for structure

### Basic HTML Structure
```html
<html>
    <head>
        <!-- Metadata, not visible to user -->
        <title>Page Title</title>
        <style>/* CSS goes here */</style>
    </head>
    <body>
        <!-- Visible content -->
        <script>/* JavaScript goes here */</script>
    </body>
</html>
```

### Head vs Body
- **Head**: Metadata, styles, scripts (not directly visible)
- **Body**: Visible content and interactive elements

## Building a Table: Practical Example

### Table Structure
```html
<table>
    <tr>  <!-- Table row -->
        <td>Team 1</td>  <!-- Table data/cell -->
        <td>Team 2</td>
    </tr>
    <tr>
        <td>Score</td>
        <td>Score</td>
    </tr>
    <tr>
        <td><button>+1</button></td>
        <td><button>+1</button></td>
    </tr>
</table>
```

### Key Table Elements
- `<table>`: Creates table container
- `<tr>`: Table row
- `<td>`: Table data/cell
- Elements create specific cells with content

### Adding Page Elements
Example additions to enhance the page:
```html
<header>Example from CS50 Week 8 Section</header>
<h1>Team 1 versus Team 2</h1>
<p>Scoreboard content</p>
<footer>Made by Yulia</footer>
```

## CSS: Styling the Web Page

### CSS Syntax
```css
selector {
    property: value;
    another-property: another-value;
}
```

### Types of Selectors

#### 1. Element/Tag Selector
```css
td {
    border: 1px solid black;
}
```
- Applies to all elements of that type

#### 2. ID Selector (Unique)
```css
#score1 {
    background-color: blue;
}
```
- Use `#` symbol
- For unique elements
- Good for JavaScript manipulation

#### 3. Class Selector (Multiple)
```css
.team {
    background-color: purple;
}
```
- Use `.` symbol
- Can apply to multiple elements
- Good for consistent styling

### Practical CSS Example
```css
/* Style for team row */
.team {
    background-color: #D8BfDF;  /* Light purple */
}

/* Individual score styling */
#score1 {
    background-color: #ADD8E6;  /* Light blue */
}

#score2 {
    background-color: #FFA07A;  /* Light salmon */
}
```

### Three Ways to Include CSS

#### 1. Inline Style (Direct in Tag)
```html
<h1 style="text-align: center;">Team 1 vs Team 2</h1>
```

#### 2. Internal Stylesheet (In Head)
```html
<head>
    <style>
        /* CSS rules here */
    </style>
</head>
```

#### 3. External Stylesheet (Separate File)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
- Best for maintaining consistency across pages
- Reusable across multiple HTML files

## JavaScript: Making Pages Interactive

### How JavaScript Connects
JavaScript interacts with HTML through the DOM (Document Object Model):
- Traces through the HTML tree
- Grabs elements by ID or class
- Modifies content and styles dynamically

### Selecting Elements
```javascript
// Select by ID
document.querySelector('#add1')

// Full process: Document → Find ID → Perform action
document.querySelector('#score1').innerHTML = "5";
```

### Events in JavaScript
Common events to listen for:
- `onclick`: Mouse click
- `onload`: Page load
- `onmouseover`: Mouse hover
- Other user interactions

### Script Placement

#### Top of File (In Head)
- Runs before page loads
- Good for setup functions

#### Bottom of File (End of Body)
- Runs after page loads
- Can access all page elements
- Preferred for DOM manipulation

#### External File
```html
<script src="script.js"></script>
```

## Complete Scoreboard Example

### HTML Structure
```html
<body>
    <h1>Team 1 versus Team 2</h1>
    <p id="feedback"></p>  <!-- Empty, filled by JavaScript -->
    <table>
        <tr class="team">
            <td>Team 1</td>
            <td>Team 2</td>
        </tr>
        <tr>
            <td id="score1">0</td>
            <td id="score2">0</td>
        </tr>
        <tr>
            <td><button id="add1">+1</button></td>
            <td><button id="add2">+1</button></td>
        </tr>
    </table>
</body>
```

### JavaScript Implementation
```javascript
// Initialize scores
var team1 = 0;
var team2 = 0;

// Team 1 button handler
document.querySelector('#add1').onclick = function() {
    team1++;
    document.querySelector('#score1').innerHTML = team1;
    
    if (team1 == 5) {
        // Display winner message
        document.querySelector('#feedback').innerHTML = "Team 1 won!";
        
        // Change colors
        document.querySelector('#add1').style.backgroundColor = 'green';
        document.querySelector('#add2').style.backgroundColor = 'red';
    }
};

// Similar for Team 2...
```

### Dynamic Features Implemented
1. **Score Tracking**: Variables track current scores
2. **Display Updates**: innerHTML updates visible score
3. **Win Condition**: Check if score reaches 5
4. **Visual Feedback**: 
   - Winner message appears
   - Button colors change (green/red)

## Key JavaScript Concepts

### Variables
```javascript
var team1 = 0;  // Initialize score
team1++;        // Increment (also works in JavaScript!)
```

### Modifying HTML Content
```javascript
// Change text inside element
document.querySelector('#score1').innerHTML = team1;
```

### Modifying CSS Styles
```javascript
// Change background color
document.querySelector('#add1').style.backgroundColor = 'green';
```
- Note: Must include `.style` when changing CSS properties

### Conditional Logic
```javascript
if (team1 == 5) {
    // Team 1 wins
}
```
- Double equals (`==`) for comparison
- Same as C and Python

## Important Tips and Best Practices

### When to Use ID vs Class
- **ID**: Unique elements, JavaScript targeting
- **Class**: Multiple elements with same style
- Think about functionality when deciding

### Google is Your Friend
- Week 8 is about embracing research
- Many tags and attributes exist
- Course materials are not exhaustive
- Learn to search for solutions

### Testing and Debugging
- Use `http-server` for local testing
- Browser developer tools for debugging
- Test incrementally, not all at once

### Color Specifications
- Keywords: `'green'`, `'red'` (case-insensitive)
- Hexadecimal: `'#ADD8E6'` (more precise)
- Both methods work

## Complete Working Example Flow

1. **Page Loads**: Initial scores at 0
2. **User Clicks Button**: Event triggers
3. **JavaScript Executes**:
   - Increments score variable
   - Updates display
   - Checks win condition
4. **Visual Feedback**: 
   - Message appears
   - Colors change
   - Game state updates

## Key Takeaways

### HTML, CSS, JavaScript Relationship
- **HTML**: Structure and content
- **CSS**: Visual presentation
- **JavaScript**: Behavior and interactivity
- All three work together

### DOM Manipulation
- JavaScript can grab any element
- IDs provide unique targeting
- Can modify both content and style

### Event-Driven Programming
- User actions trigger code
- Dynamic updates without page reload
- Creates interactive experiences

### Development Workflow
1. Build HTML structure
2. Add CSS styling
3. Implement JavaScript functionality
4. Test with `http-server`
5. Debug and refine

## Resources and Next Steps

### Tools
- `http-server` for local testing
- Browser developer tools
- Online documentation (MDN, W3Schools)

### Learning Approach
- Start with static HTML
- Add styling with CSS
- Make interactive with JavaScript
- Practice with small projects

### Important Concepts to Master
- DOM tree structure
- Element selection (ID, class)
- Event handling
- Style manipulation
- Dynamic content updates

This section provides hands-on experience building an interactive web application from scratch, demonstrating how HTML, CSS, and JavaScript work together to create dynamic user experiences on the web.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/8- DOM|Week 8 Short: DOM (Document Object Model)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/10- Week 9/1- Week 9 Lecture|CS50 Week 9 Lecture - Flask Web Development]]
