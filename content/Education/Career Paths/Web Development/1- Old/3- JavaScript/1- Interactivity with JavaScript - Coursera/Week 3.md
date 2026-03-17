# Week 3: Tabindex, Attributes, and Arrays

## Table of Contents
- [Tabindex and Accessibility](#tabindex-and-accessibility)
- [Using JS with Attributes](#using-js-with-attributes)
  - [getAttribute](#getattribute)
  - [setAttribute](#setattribute)
- [Arrays](#arrays)

---

## Tabindex and Accessibility

- Some elements on a page can take on the **focus** state by default
- When you go to a page and use the tab key you can navigate from link to link and through forms – all without having to touch your mouse.
- It is possible to add the focus state to other elements too by adding the tabindex attribute to a tag.
  
  `<div tabindex="0"> My second div.</div>` **is** accessible from the keyboard.
  
- The number associated with the tabindex attribute is the tab order.
- By default everything has an order of 0 which means that they will be visited in the order of the HTML code.
- Use it only in places where keyboard access would be important.

---

## Using JS with Attributes

### getAttribute

- If you want to access a part of the DOM you can often access it directly
- If you used document.querySelector() to access an image element, you can then access its src, alt text, etc.
  
```javascript
my_img = document.querySelector("img")
console.log(my_img.src)
console.log(my_img.alt)
```
  
- Sometimes though you can't access the data directly and that is when you will want to use the [HTML DOM Element getAttribute()](https://www.w3schools.com/jsref/met_element_getattribute.asp) method.
  
```javascript
my_img = document.querySelector("img")
console.log(my_img.getAttribute("src"))
console.log(my_img.getAttribute("alt"))
```

### setAttribute

- Similarly, you can often change the value of a DOM element by accessing the attribute directly:
  
```javascript
my_img = document.querySelector("img")
my_img.src = "mydog.jpg"
my_img.alt = "Brown labradoodle"
```
  
- Sometimes though you can't change the data directly and that is when you will want to use the [HTML DOM Element setAttribute()](https://www.w3schools.com/jsref/met_element_setattribute.asp) method.
  
```javascript
my_img = document.querySelector("img")
my_img.setAttribute("src","mydog.jpg")
my_img.setAttribute("alt","Brown labradoodle")
```

---

## Arrays

- Arrays allow us to declare multiple values relating to 1 single variable
- Arrays are declared with names, and each element has an index starting from 0
- In JS, arrays can contain values of different type
- JS arrays are objects that have attributes and methods:
  - grades.length (array length)
  - grades.sort() (sort array)
  - grades.push(element) (add element)

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 2|Week 2: Functions, Events, and this Keyword]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 4|Week 4: Loops and Lightbox]]
