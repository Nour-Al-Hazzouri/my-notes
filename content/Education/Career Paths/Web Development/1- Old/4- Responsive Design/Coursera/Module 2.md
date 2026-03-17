# Module 2: Media Queries and Responsive Design

## Table of Contents
- [Media Queries](#media-queries)
- [Wire Frames](#wire-frames)
- [Breakpoints](#breakpoints)
- [Media Queries Part 2](#media-queries-part-2)
  - [Step 1: Viewport](#step-1)
  - [Step 2: Measurements](#step-2)
  - [Step 3: Fluid Layout](#step-3)

---

## Media Queries

- Media queries allow the style to depend upon the media properties
- Every query has 2 components:
  - A media type: screen, print, all, …
  - The actual query of a media feature and "trigger" size: width, height, orientation, resolution, …
    
    example: screen and (max-device-width: 480px) and (resolution: 163dpi)
    
- 3 ways to implement media queries:
  - Use the @import rule: @import url(smallstyle.css) screen and (min-width:600px
  - Put media query directly in the style sheet: @media screen and (min-width:500px){..}
  - Include query in the link: <link rel = "stylesheet" media = "screen and (minwidth:400px)"> and (orientation: portrait)>

---

## Wire Frames

- Wireframes provide a visual representation of your layout.
- Mobile view is the most important view to begin with
- Functionality:
  - The design should be about more than layout.
  - It is possible to test the interaction as well (navigation, forms inputs, etc.)
- Sketches Vs Wireframes:
  - Sketch is recommended to start with
  - Once you have initial feedback, move to wireframe

---

## Breakpoints

- Sizes that define a change in your site layout or content.
- To provide best possible experience for users based on device information.
- Determining breakpoints:
  - Device
  - Content
- Responsive is based on more than screen size
  - Orientation
  - Resolution
  - Accessibility preference (prefers reduced motion)
  - Device preferences (color schemes, battery mode)

---

## Media Queries Part 2

- Using/understanding media queries is key to responsive design.
- This lecture will describe the process in three steps

### Step 1

- The meta viewport tag tells mobile browser's viewport how to behave.
```html
<meta name = 'viewport' content='width=device-width, initial-scale=1'>
```
- Disallow zooming:
```html
<meta name = 'viewport' content='width=device-width, initial-scale=1, maximum-scale = 1'>
```

### Step 2

- If you use breakpoints, some absolute measurements are not unusual.
- percentages vs ems: ems are measurement of typography. 1em is width of one letter M in current typeface.
- paddings and margins affected by width, not height

### Step 3

- Fluid layout that is triggered by certain sizes.
- Design for small screen and work bigger.
- Some sites strip out information, hiding certain aspects of the site that they deem less important. There are two issues with this:
  - penalizes mobile users browsing the website
  - doesn't mean the content doesn't get downloaded-this can affect performance

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/4- Responsive Design/Coursera/Module 1|Module 1: Responsive Design Fundamentals]] | **Next**: [[Education/Career Paths/Web Development/1- Old/4- Responsive Design/Coursera/Module 3|Module 3: Media Queries for Accessibility]]
