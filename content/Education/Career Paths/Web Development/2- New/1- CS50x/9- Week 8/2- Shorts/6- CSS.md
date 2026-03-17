# Week 8 Short: CSS (Cascading Style Sheets)

## Overview
CSS is another language used in web construction, but like HTML, it's not a programming language. While HTML organizes the content of pages, CSS customizes how websites look and enhances user experience. CSS is a styling language with simple syntax that describes how HTML elements should be modified.

## What is CSS?

### Not a Programming Language
- No logic, variables, or flow control like C
- It's a **styling language**
- Syntax describes how to modify HTML elements
- Requires knowledge of HTML to use effectively

### Simple Example
```css
body {
    background-color: blue;
}
```
This simple stylesheet sets the page's background color to blue - very human-friendly and intuitive.

## Building Stylesheets

### Basic Structure
1. **Selector**: Identifies what to style (e.g., `body`)
2. **Open curly brace**: `{`
3. **Key-value pairs**: Style properties and values
4. **Semicolons**: Separate each declaration
5. **Close curly brace**: `}`

### CSS Declarations
- Each key-value pair is called a "declaration"
- Multiple declarations can apply to one selector
- All separated by semicolons

## Common CSS Properties

### Border
```css
border: style color width;
```
- **Style**: solid, dotted, dashed, ridge (wavy)
- **Color**: blue, black, green, etc.
- **Width**: 1px, 2px, 10px, etc.

### Background Color
```css
background-color: blue;
/* or */
background-color: #FF5733;
```
- Can use keyword colors (blue, green, black)
- Can use hex colors (#RRGGBB format)
- Six-digit hex represents RGB values (0-255 each)

### Foreground Color (Text)
```css
color: green;
/* or */
color: #00FF00;
```
- Sets text color
- Same options as background-color

### Font Size
Multiple ways to specify:
- **Keywords**: `xx-small`, `medium`, `large`
- **Fixed points**: `10pt`, `12pt`
- **Percentages**: `80%`, `120%` (100% is default)
- **Relative**: `smaller`, `larger` (based on previous size)

### Font Family
```css
font-family: Arial;
```
**Web-safe fonts** (pre-defined in CSS):
- Times New Roman
- Arial
- Courier New
- Georgia
- Tahoma
- Verdana

### Text Alignment
```css
text-align: left;    /* default */
text-align: right;
text-align: center;
text-align: justify; /* hits both margins */
```

## Types of Selectors

### Tag Selector
```css
body {
    /* styles */
}
```
- Applies to all instances of that HTML tag

### ID Selector
```css
#unique {
    /* styles */
}
```
- Uses `#` symbol
- Applies to element with `id="unique"` attribute
- IDs should be unique on the page

### Class Selector
```css
.students {
    background-color: yellow;
    opacity: 70%;
}
```
- Uses `.` symbol
- Applies to all elements with `class="students"`
- Can be applied to multiple tags

## Writing Stylesheets: Two Options

### Option 1: Embedded Styles
```html
<head>
    <style>
        /* CSS goes here */
    </style>
</head>
```
- Place stylesheets between `<style>` tags
- Goes inside `<head>` tags

### Option 2: External Stylesheet (Preferred)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
- Write CSS in separate `.css` file
- Link using `<link>` tag
- Like `#include` for web programming
- Better for reusability and organization

## Practical Example: Styling a Table

### Before CSS (Plain HTML Table)
- Basic 4x4 multiplication table
- No borders or visual separation
- Difficult to read
- Rows and columns blend together

### Adding Simple Border (Embedded Style)
```html
<style>
    table {
        border: 1px solid blue;
    }
</style>
```
**Result**: Only adds border around entire table, not cells

### Complete Table Styling (External CSS)
```css
/* table.css */
table {
    border: 5px solid red;
}

tr {
    height: 50px;
}

td {
    background-color: black;
    color: white;
    font-size: 22pt;
    font-family: Georgia;
    text-align: center;
    width: 50px;
}
```

### Results of Complete Styling
- Red border around table
- Each row 50 pixels tall
- Each column 50 pixels wide
- Black background in cells
- White text
- 22-point Georgia font
- Centered text
- White lines between cells (table borders become visible)

## CSS Comments
```css
/* This is a CSS comment */
/* Can span
   multiple lines */
```
- Similar to C block comments
- No `//` inline comments in CSS
- Must use `/* */` format

## Key Concepts

### Cascading Nature
- Styles applied to parent elements cascade to children
- Example: `text-align: center` on `body` affects all text inside

### Specificity
- More specific selectors override general ones
- ID selectors > Class selectors > Tag selectors

### Separation of Concerns
- HTML: Structure and content
- CSS: Presentation and styling
- Keep them separate for better organization

## Learning More

### Documentation
- CSS documentation is straightforward
- Many properties available
- Some used frequently, others rarely
- Extensive online resources available

### Experimentation
- CSS is fun to experiment with
- Try different properties and values
- See immediate visual results
- Improve user experience through design

## Best Practices

### Organization
1. Use external stylesheets for reusability
2. Keep styles organized and commented
3. Use meaningful class and ID names

### Design Principles
- Start simple, add complexity gradually
- Test across different browsers
- Consider user experience
- Use consistent styling throughout site

## Summary
CSS transforms plain HTML into visually appealing websites by:
- Controlling colors, fonts, and layouts
- Separating style from content
- Providing flexible styling options
- Enhancing user experience

While we've only scratched the surface, CSS offers extensive capabilities for web design. The documentation is comprehensive, and experimentation is encouraged to discover what works best for your websites.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/5- HTML|Week 8 Short: HTML (HyperText Markup Language)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/7- JavaScript|Week 8 Short: JavaScript]]
