# Week 2: Functions, Events, and this Keyword

## Table of Contents
- [Functions](#functions)
- [Code Placement](#code-placement)
- [Events](#events)
- [this Keyword](#this)

---

## Functions

- Functions are bits of codes that you can reuse
- Functions have a special syntax:  
```javascript
  function functionName(parameters){
    code you want to run
  }
```
- You need to call the function to use it
- Functions change the flow of the code
- Sometimes functions need some information in order to perform its "function", this is the parameter's job  
- Return statements are used to assign values to variables or to check conditional statements
```javascript
  function welcomeMsg(msg) {
    alert(msg);
    var name = prompt("What is your name?");
    return name;
  }

  var firstName = welcomeMsg("Hi");
```
- Use built-in functions as much as possible
- Don't make functions too specific, and make them as usable as possible

---

## Code Placement

- JS can be placed in body, head or in an external file
- When JavaScript functions are declared in the head section they are separated from the content  
- When JavaScript functions are in a separate file it is possible to reuse the code in multiple files  
- When the code becomes bigger and bigger it's important to use the console to debug the code

---

## Events

- It has been up to us to decide when the functions should execute  
- It would be better if the functions were called based on special "events"  
- The JavaScript API lets us add dynamic function calls!!
- Some Events:
  - onclick:
    - User clicks on an HTML element
  - onmouseover:
    - User moves the mouse over an HTML element
  - onresize:
    - browser window is resized
  - onload:
    - browser finishes loading the page
- How it works:
  - Any element can react to an event.
  - You need to add the event to the tag and include what you want to happen  
```javascript
<div onclick = "message()"> Clicking on this Div
will invoke a JavaScript function</div>
```
- Using Quotes:
  - You can use single quotes or double quotes for the event result  
  - Double quotes make it easier if you want to pass String parameters
```javascript
<div onclick = "message('Hi')">
```
- Events change the program flow:
  - Some programs ran in a linear order (step-by-step)
  - Events cause the program to "run continuously" since the DOM is always listening for events  
- More Events:
  - Mouse Events
    - onclick, ondblclick, onmousedown, onmouseenter, onmouseleave, on mousemove, onmouseout,….  
  - Keyboard Events:
    - onkeydown, onkeypress, onkeyup
  - Frame Events:
    - onload, onresize, onscroll, onerror,…

---

## this

- A key to smart programming is using functions
- A common roadblock is figuring out how to set up functions for reuse  
- "this" is a keyword that allows an element to reference itself
  - Every object in the DOM has an automatically generated "this"
- Allows you to access an element's info
  - Without "this" it would be difficult for the functions to know what data to use
- "this" is also used outside functions

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 1|Week 1: DOM Review and JavaScript Basics]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 3|Week 3: Tabindex, Attributes, and Arrays]]
