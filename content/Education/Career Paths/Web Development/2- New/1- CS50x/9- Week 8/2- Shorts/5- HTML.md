# Week 8 Short: HTML (HyperText Markup Language)

## Overview
After spending approximately 35 videos covering C programming, we're now transitioning to other languages more quickly. HTML is covered in just one video because once you understand the fundamentals of one language, learning others becomes much easier. The internet provides vast resources for continued learning beyond these videos.

## What is HTML?

### Key Distinctions
- **HTML is a language but NOT a programming language**
- No variables, logic, or functions
- Cannot write "HTML programs" 
- People calling themselves "HTML programmers" is technically inaccurate

### What HTML Actually Does
- **Markup Language**: Uses tags to mark up text
- **Semantic Structure**: Defines the structure of a page
- **Browser Interpretation**: Tags cause browsers to interpret plain text in different ways
- Files use `.html` extension (like C programs use `.c`)

## Basic HTML Structure

### Simple HTML Page Example
```html
<html>
  <head>
    <title>Hello, World</title>
  </head>
  <body>
    World, hello
  </body>
</html>
```

### Key Components
- **HTML Tags**: Bounded by angle brackets `< >`
- **Opening and Closing**: Tags come in pairs
  - Opening: `<html>`
  - Closing: `</html>` (note the forward slash)
- **Head Section**: Information not in the browser window proper
  - Title appears in browser tab or window bar
- **Body Section**: Actual content visible on the web page

### Demonstration in CS50 IDE
- File: `hello.html`
- Indentation used for cleanliness and organization
- Preview shows:
  - Body content: "World, hello"
  - Title in tab: "Hello, World"
  - Head content not visible in main window

## White Space and Formatting

### White Space is Data
```html
<!-- Ugly but functional version -->
<html><head><title>Hello,World</title></head><body>World, hello</body></html>
```

### Important Points
- **Indentation doesn't matter** functionally
- White space costs money in data transmission
- Production websites often minimize white space
- For learning: keep it organized and readable
- **Only tags and their order matter**, not formatting

## Learning Resources

### Over 100 HTML Tags Available
- Video covers fundamental tags only
- Extensive online resources available
- Not exhaustive coverage (would be too much)

### Developer Tools for Learning
- **Access**: F12 key in Chrome
- **Elements Tab**: Shows HTML of any web page
- **Learn by Example**: 
  - Inspect favorite websites
  - Hover over elements to see their HTML
  - See how cool patterns are created
  - Great way to learn HTML and developer tools

## Text Formatting Tags

### Basic Visual Appearance Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `<b>` | Bold text | `<b>This is bold</b>` |
| `<i>` | Italic text | `<i>This is italic</i>` |
| `<u>` | Underlined text | `<u>This is underlined</u>` |

### Demonstration (BIU.html)
- Each tag renders text with its respective style
- Can be combined for multiple effects
- Simple way to emphasize text

## Content Organization Tags

### Paragraph Tags (`<p>`)
- **Purpose**: Break text into paragraphs
- **Why Needed**: 
  - Hitting Enter doesn't create paragraphs
  - Computer ignores white space
  - Must explicitly define paragraphs
- **Usage**: Enclose each paragraph in `<p>` tags

### Header Tags (`<h1>` through `<h6>`)
- **Six Levels**: H1 (largest) to H6 (smallest)
- **Hierarchy**: 
  - H1: Top-level header
  - H2: Second-level header
  - Progressively smaller
- **Usage**: Draw attention to sections

### Example (PH.html)
- Lorem ipsum text as filler content
- H1 header noticeably larger than H2
- P tags create proper paragraph separation
- Without P tags, text would "slam together"

## List Tags

### Unordered Lists (Bulleted)
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Ordered Lists (Numbered)
```html
<ol start="6">
  <li>Item six</li>
  <li>Item seven</li>
  <li>Item eight</li>
</ol>
```

### Key Points
- **UL**: Unordered/bulleted list
- **OL**: Ordered/numbered list
- **LI**: List items (used in both)
- **Attributes**: Can modify behavior
  - `start="6"`: Begin numbering at 6
  - Default start is 1

## Table Tags

### Basic Table Structure
```html
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <td>2</td>
    <td>4</td>
    <td>6</td>
    <td>8</td>
  </tr>
</table>
```

### Table Components
- **`<table>`**: Table definition
- **`<tr>`**: Table row
- **`<td>`**: Table data (column within a row)
- **Why TD not TC?**: Stands for "table data"

### Example (table.html)
- 4x4 multiplication table
- Basic structure without styling
- CSS needed for better formatting (covered later)

## Forms and Input

### Form Structure
```html
<form>
  <input name="A" type="text">
  <input name="password" type="password">
  <input name="radio" type="radio">
  <input name="checkbox" type="checkbox">
  <input type="submit">
</form>
```

### Input Types
- **text**: Regular text input
- **password**: Hidden text (shows dots)
- **radio**: Radio button selection
- **checkbox**: Checkbox selection
- **submit**: Submit button

### Div Tags
- **Purpose**: Arbitrary division of the page
- **No visual effect** by default
- Just marks a section of the page
- Can contain other elements (like forms)
- Styling needed for visual separation

### Self-Closing Tags
```html
<input name="x" type="y" />
```
- **No closing tag needed**
- All information in attributes
- Ends with `/>`
- Input tags are self-contained

## Links and Images

### Hyperlinks (Anchor Tags)
```html
<a href="http://www.example.com">Click here</a>
```
- **`<a>`**: Anchor tag (NOT `<link>`)
- **href**: Where the link goes
- Text between tags becomes clickable blue link

### Images
```html
<img src="image.jpg" alt="Description" width="100" height="100" />
```
- **Self-closing tag**
- **src**: Image location
- **alt**: Alternative text
- Can specify dimensions

### Example (image_link.html)
- Local image: `rick.jpg` in current directory
- Internal link: `hello.html` (same directory)
- External link: `https://cs50.harvard.edu` (full URL)
- Comments in HTML: `<!-- Comment here -->`

## Special HTML5 Tags

### DOCTYPE Declaration
```html
<!DOCTYPE html>
```
- **Not a regular tag** (no closing tag)
- Indicates HTML5 document
- Placed at very beginning of file
- Enables HTML5-specific tags
- Current de facto standard (since 2014)

### Comments
```html
<!-- This is a comment -->
```
- Starts with `<!--`
- Ends with `-->`
- Not displayed on page
- Useful for documentation

## Well-Formed HTML Rules

### Proper Tag Closure
- **Every opened tag must be closed**
- **Close in reverse order** (LIFO - Last In, First Out)
- Example:
  ```html
  <b><i><u>Text</u></i></b>  <!-- Correct -->
  <b><i><u>Text</b></i></u>  <!-- Wrong -->
  ```

### Encapsulation
- Proper nesting maintains organization
- Like parentheses in mathematics
- Keeps HTML structured and clean

### Error Handling
- **Unlike C**: Syntax errors might not break HTML
- Page might still work with errors
- **But**: Can cause unexpected behavior
- **Your responsibility**: Be vigilant about proper syntax

### Validation Tools
- **Challenge**: Hard to track tag opening/closing in large files
- **Solution**: Online HTML validators
- Check if HTML is well-formed
- Develop good habits early
- Prevent future syntax problems

## Key Takeaways

### HTML is Different from Programming
- No logic or computation
- Just structure and presentation
- Markup, not programming

### Tags Are Everything
- Define document structure
- Must be properly nested
- Opening and closing pairs (except self-closing)

### Learning Approach
1. Start with basic tags
2. Use developer tools to explore
3. Learn from existing websites
4. Use online resources extensively
5. Validate your HTML

### Common Elements to Master
- Text formatting (b, i, u)
- Structure (p, h1-h6, div)
- Lists (ul, ol, li)
- Tables (table, tr, td)
- Forms and inputs
- Links and images

### Best Practices
- Keep HTML well-formed
- Use proper indentation for readability
- Close tags in reverse order
- Use validation tools
- Learn by inspecting other websites

### Moving Forward
- HTML is foundation for web pages
- Works with CSS for styling
- Works with JavaScript for interactivity
- Understanding HTML enables web development
- Internet resources provide continued learning

This foundation in HTML, combined with your C programming knowledge, makes learning web technologies much more approachable. The concepts transfer, even though the syntax and purpose differ significantly.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/4- HTTP|Week 8 Short: HTTP (Hypertext Transfer Protocol)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/6- CSS|Week 8 Short: CSS (Cascading Style Sheets)]]
