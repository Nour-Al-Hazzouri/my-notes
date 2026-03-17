# Week 4: CSS Advanced Features and Accessibility

## Table of Contents
- [Pseudo Classes and Elements](#pseudo-classes-and-elements)
  - [Types of Pseudo-Classes](#types-of-pseudo-classes)
- [Transitions](#transitions)
  - [Properties](#properties)
  - [Setting Up](#setting-up)
  - [Using Shorthands](#using-shorthands)
- [Transform](#transform)
  - [Transform Options](#options)
  - [Review](#review)
- [Accessible Navigation](#accessible-navigation)
  - [Navigation Elements](#main-navigation-elements)
  - [Accessibility for Visually-Impaired](#if-you-can-t-see)
  - [Proper Heading Hierarchy](#proper-heading-hierarchy)
  - [Off-page Headings](#off-page-headings)
  - [Meaningful Link Text](#meaningful-link-text)
  - [Review](#review-1)

---

## Pseudo Classes and Elements

Elements dynamically populated or dependent on tree structure

### Types of Pseudo-Classes
- Link: :link, :visited
- User Action: :hover, :active, :focus
- Forms (interfaces): :enabled, :checked, :disabled
- Structural/Positional: :first-child, :last-child, nth-child(), :only-child | :first-of-type, :last-of-type, :only-of-type
- Textual: :first-letter, :first-line
- Positional/Generated: :before, :after
- Fragments: ::selection

---

## Transitions

When elements transition from one state to another, you can alter their appearance (change link cover when hovered over-change image size when on focus)

### Properties
- transition-property: what you want to change (size, color, position, etc…)
- transition-duration: how long should each transition last?
- transition-timing: smooth transition (linear)? different?
- transition-delay: wait before the transition begins?

### Setting Up
- Define element
- Choose the elements for transition
- Define the new values (must combine with pseudo-class)
            
![[1 2.jpg|../../media/1 2.jpg]]
            
### Using Shorthands
- If you have multiple properties transitioning, you can use shorthand: 
                
```CSS
transition: background .2s linear, border-radius 1s ease-in 1s;
```

---

## Transform

### Options
- translate: give it 2 values that depending on them it goes left/right/up/down
            
```CSS
transform:translate(100, 75);
```
            
- rotate: spinning elements to a certain degree
            
```CSS
transform:rotate(30deg);
```
            
- scale: change height /width of the element
            
```CSS
tansform:scale(2,3);
```
            
- skew: rotate the element a certain number of degress along the x and y axis
            
```CSS
transform:skew(30deg, 15deg)
```
            
![[1 1.jpg]]
            
- matrix: rotate along the x, y or z dimension along a given degree
            
```CSS
transform:rotateY(deg)
transform:rotateX(deg)
transform:rotateZ(deg)
transform:roatet3d(x, y, z)
```
            
### Review
- Often combined with state changes
- will typically require browser prefixes

---

## Accessible Navigation

- Navigation is critical aspect of accessibility

### Main Navigation Elements
- Banner
- Search Box
- Main navigation box
- Content Well

- visually-impaired people rely on proper page coding

### If You Can't See
- Tide of page lets you know what page you're on when page loads
- Proper heading placement and hierarchy conveys organization of page and allows SR users to skip navigation
- Link descriptions convey content of page and organization of site

### Proper Heading Hierarchy
- Headings needs to be properly nested to convey organization of the page
- Proper heading hierarchy:
            
![[1 2 2.jpg|../../media/1 2 2.jpg]]
            
### Off-page Headings
- Useful when you want to give SR users a navigational aid without cluttering presentation
- Use CSS to position headings Off-page
                
```CSS
.offpage {
	position: absolute;
	left: -100px;
}
```
                
- Don't use {display: none}or {visibility: hidden}

### Meaningful Link Text
- Screen readers can find and list links
- Descriptions for the links must be meaningful out of context, via tabbing or presented in a list

### Review
- How easy is it to navigate your page?
- What would happen if the colors weren't there?
- What would happen if you couldn't use a mouse?
- Plan for everyone

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/2- CSS/1- Introduction to CSS - Coursera/Week 3|Week 3: CSS Box Model and Positioning]]
