# Week 1: CSS Basics

## Table of Contents
- [Reviewing the "Cascading" of CSS](#reviewing-the-cascading-of-css)
  - [The Cascading Part of CSS](#the-cascading-part-of-css)
  - [Rule Precedence](#rule-precedence)
- [Colors](#colors)
  - [Color Conventions](#color-conventions)
  - [Color Contrast](#what-is-color-contrast)
- [Styling Your Text](#styling-your-text)
  - [Font Families](#font-family-considerations)
  - [Font Size](#font-size)
  - [Color and Background Color](#color-and-background-color)
- [Display and Visibility - Part 1](#display-and-visibility-part-1)
  - [Common Values](#common-values)
  - [Complementary Properties](#complementary-properties)
- [Display and Visibility - Part 2](#display-and-visibility-part-2)
  - [Overflow](#overflow)
  - [Other Display Values](#other-display-values)
  - [Review](#review)

---

## Reviewing the "Cascading" of CSS

### The Cascading Part of CSS
- Browser Default
- External Stylesheet
- Internal Stylesheet
- Inline Stylesheet

### Rule Precedence
- If one selector is defined in two external files:
  - The rules from the most recent file have precedence
- If one selector has more than one rule in the same file:
  - The last selector will overwrite the previous one
- `!important`: Overrides later rules

---

## Colors

### Color Conventions
- Color names (Blue, yellow, red…) work, but should be avoided (each browser has a color shade)
- Hexadecimal is common convention: `#0000FF`, `#FF0000`…
- RGB: `(0, 0, 1)`, `(1, 0, 0)`…
  - RGBA (A for alpha transparency): `(0, 0, 1, 5)` the last digit stands for the transparency value

### What is Color Contrast?
- It's hard to tell when the color contrast is bad
- Some tools to use:
  - [http://wave.webaim.org](http://wave.webaim.org)
  - [http://webaim.org/resources/contrastchecker/](http://webaim.org/resources/contrastchecker/)

---

## Styling Your Text

Not all font families are supported by all of the OSes, so alternatives can be provided:

```CSS
h1{
    font-family: Courier, Impact, Arial;
}
```

### Font-Family Considerations
- Some fonts are not as user-friendly, use sans-serif when possible
- To use custom fonts you need to use @font-face

```CSS
@font-face{
    font-family: myspecialfont;
    src: url('custom.ttf');
}
```

### Font-Size
- There are many variations to change font-size, but it is preferred to use px or %

### Color and Background Color
- Background color: changing background color of an element will change the whole width, but changing it to a span element will change only the element's background
- Line height: Adjusts the space between the lines of text

---

## Display and Visibility-Part 1

- Every element is a box
- Display affects the layout of neighboring elements

### Common Values
- **Inline**: sits next to other elements
  - Takes up "just enough" width and height
- **Block**: forces line break
  - Default: forces line break:
    - Take up all horizontal width and "just enough" height (unchangeable)
    - Rules can set height and width
  - **Inline-block**:
    - Height and width adjustable
  - **None**: ignored and not displayed

### Complementary Properties
- **Float**:
  - Reposition elements to the right or left
  - Elements are aware of one another and will not overlap
  - Values: Left, Right
- **Clear**:
  - Used to keep floating elements away
  - Values: left, right, both

---

## Display and Visibility-Part 2

### Overflow
When the content is overflowing from its box, we can use the overflow attribute:
- **Visible**: content is visible even if outside the box
- **Hidden**: content is hidden outside the box
- **Scroll**: content is scrollable
- **Auto**: scrollbar added automatically

### Other Display Values
- New Display Properties are available, but not always supported:
  - Table
  - Grid
  - Flexbox
- **Display: table**:
  - Have table-like display without table structure, display:table-cell for elements
- **Visibility**: Specifies whether or not element is visible
  - Visible
  - Hidden
  - Collapse (only for table elements)

### Review
- Display is just one tool for positioning our elements on the page
- Early design will make the coding easier
- Utilize tools to see the different options

---
**Next**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 2|Week 2: CSS Layout and Selectors]]
