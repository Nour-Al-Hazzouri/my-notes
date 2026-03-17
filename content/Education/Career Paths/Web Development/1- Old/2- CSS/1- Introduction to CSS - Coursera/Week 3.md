# Week 3: CSS Box Model and Positioning

## Table of Contents
- [Box Model](#box-model)
  - [Height and Width](#height-and-width)
  - [Additive Width](#additive-width)
  - [Centering an Element](#centering-an-element)
  - [Box-sizing](#box-sizing)
  - [Measurements](#measurements)
  - [Review](#review)
- [Positioning](#positioning)
  - [Position Properties](#position-properties)
  - [Static Position](#static)
  - [Relative Position](#relative)
  - [Absolute Position](#absolute)
  - [Fixed Position](#fixed-position)
  - [Z-index](#z-index)

---

## Box Model

### Height and Width
- Default width of inline elements is the content
- Non-inline elements can take height/width properties
- Border style MUST be specified unlike other properties
- Margin is additional space outside your border-between elements
  - Positive margin: move right/down
  - Negative margin: move left/upwards
- Padding is additional space between the element and its border
  - Positive padding: border moves outward from element

### Additive Width
- If you want an elements's width to be at a specific size, you need to take into account al other aspects (margin+border+padding+width)

### Centering an Element
- Horizontally center an element:
  - margin: 0 auto;
- Rules:
  - Must display: block
  - Must not float
  - Have a fixed or absolute position
  - Width not auto

### Box-sizing
- box-sizing takes some of the "math" out
- options:
  - content-box: default additive
  - border-box: width takes content, padding, and border into consideration

### Measurements
- Absolute-set to a specific size:
  - px, mm, cm…
- Fluid-sets size relative to surrounding elements:
  - %, mm, vm…
  - em
  - rem

### Review
- Design sketches should be done with box model (margin, border, padding, content) in mind
- Use box-model to reduce complexity
- Margin must always be considered

---

## Positioning

### Position Properties
- static
- relative
- absolute
- fixed
  - Modified by properties: top, right, bottom, left

### Static
- Default value for elements
- Not affected by the properties

### Relative
- relative to itself
- take the static position, but add offsets
- the new positioning does not affect any other element
- often used as container blocks for other elements

### Absolute
- Removed from the document flow and positioned relative to it's nearest ancestor (root)
- Other elements behave as if elements does not exist
- can end up on top of another element

### Fixed Position
- Positioned relative to the browser window
- will not move, even if window is scrolled

### Z-index
- Multiple elements may be placed in the same position
- Z-index is a numeric value, positive or negative that dictates stacking order

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 2|Week 2: CSS Layout and Selectors]] | **Next**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 4|Week 4: CSS Advanced Features and Accessibility]]
