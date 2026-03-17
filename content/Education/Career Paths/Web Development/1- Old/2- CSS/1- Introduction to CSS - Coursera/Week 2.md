# Week 2: CSS Layout and Selectors

## Table of Contents
- [Display: Grid](#display-grid)
  - [Grid Basics](#grid)
  - [Parent Element Setup](#parent-element)
  - [Justify-content](#justify-content)
  - [Child Elements](#modifying-the-child-elements)
  - [Positioning Children](#positioning-the-children-elements)
- [Display: Flex](#display-flex)
  - [Flex Basics](#display-flex)
  - [Setup Steps](#steps)
  - [Justify-content and Align-content](#justify-content-when-the-direction-is-row)
- [Styling Links and Lists](#styling-links-and-lists)
  - [Anchor Links](#anchor-links)
  - [Buttons](#buttons)
  - [Link States](#states)
  - [Precedence of Rules](#precedence-of-rules)
  - [Styling Lists](#styling-lists)
- [Advanced Selectors](#advanced-selectors)
  - [Styling Specific Objects](#styling-specific-objects)
  - [CSS Selectors](#css-selectors)
  - [Expanding the Scope](#expanding-the-scope)
- [Attribute Selectors](#attribute-selectors)
- [Browser Capabilities](#browser-capabilities)
  - [Handling Stylistic Differences](#handling-stylistic-differences)
  - [Handling Unsupported Properties](#handling-unsupported-properties)
  - [Automated Prefixes](#automated-ways-to-add-prefixes)
- [Background Images and Opacity](#code-together-background-images-and-opacity)
  - [Background Image Syntax](#syntax)
  - [Complementary Properties](#complementary-properties)
  - [Opacity](#opacity)

---

## Display: Grid

### Grid
- You can use grid to place your content in columns
- You need to define a parent element and give it children elements

### Parent Element
- Step 1: set display to grid
- Step 2: set grid-template-columns to number and size of columns
- Step 3: Set justify-content

Example:

One column grid:
```CSS
div {
	display: grid;
	grid-template-columns: 500px;
}
```

Two columns grid:
```CSS
div {
	display: grid;
	grid-template-columns: 50% 50%;
}
```

Three column grid:
```CSS
div {
	display: grid;
	grid-template-columns: 25% 25% 25%;
}
```

### Justify-content
- To adjust default layout of children
- Possible values: start, end, center, stretch, space-around, space-between, space-evenly

### Modifying the Child Elements
- Best practice is to not hardcode the width of the children elements
- Use a fluid measurement to make the most of the parent structure

### Positioning the Children Elements
- The children elements will automatically fall into the next available space
- You can move elements using:
  - grid-column-start
  - grid-column-end
- Other popular properties include: grid-template-rows, align0items, row-gap, column-gap, etc…

---

## Display: Flex

- Resize elements based on the screen size
- Define a parent elements, give it children elements

### Steps
1. Set display to flex
2. Set flex-wrap to wrap or nowrap
3. Set flex-direction to row or column
4. Set the justify-items and/or align contents

- You may want to adjust the default layout of the children with justify-content
  - Possible Values:
    - flex-start
    - flex-end
    - center
    - space-around
    - space-between
    - space-evenly

### Justify-content when the direction is row
### Align-content when the direction is column
- Possible values:
  - start
  - end
  - center
  - stretch
  - space-around
  - space-between
  - space-evenly

---

## Styling Links and Lists

### Anchor Links
Anchor links can take all usual styles as well as text-decoration, example:
```CSS
text-decoration: none;
```

### Buttons
- Many designers try to make their links look like buttons
- Be semantic, use button tag instead

### States
- `a:link`: a normal, unvisited link
- `a:visited`: has been visited
- `a:hover`: activated by mouse
- `a:focus`: activated with the keyboard
- `a:clicked`: activated when clicked

### Precedence of Rules
- `a:hover` MUST come after `a:link` and `a:visited`
- `a:active` MUST come after `a:hover`

### Styling Lists
- Number of properties beyond font, margin, etc.
  - **list-style-type**:
    - Unordered lists:
      - Override the default marker with circles, discs, or squares
    - Ordered lists:
```CSS
ul{
	list-style-type: upper-alpha;
}
```
      So instead of 1. and 2. it becomes A. and B
    - lower-roman, upper-roman, decimal, decimal-leading-zero, upper-alpha, lower-alpha, hebrew, armenian…
  - **list-style-image**:
    - Use a custom image instead of traditional marker

```css
ul {
	list-style-image: square url('icon.gif');
}
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 1|Week 1: CSS Basics]] | **Next**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 3|Week 3: CSS Box Model and Positioning]]
