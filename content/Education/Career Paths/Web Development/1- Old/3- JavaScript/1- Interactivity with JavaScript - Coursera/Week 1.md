# Week 1: DOM Review and JavaScript Basics

## Table of Contents
- [DOM Review with OOP](#dom-review-with-oop)
- [Newer DOM Methods](#newer-dom-methods)
- [Output](#output)
- [Variables](#variables)
- [Data Types](#data-types)
- [Operators and Expressions](#operators-and-expressions)

---

## DOM Review with OOP

- Page content is represented by the DOM
- Scripting languages (JS) use the DOM to interact with the document
- Accessing the DOM is done with an API
- Accessing the DOM is done with an API – Application Programming Interface
- document – the root of the page
  - document.URI, document.height, document.links, document.bgColor,….
- element – a node in the tree
  - Returned by a member of the API
- nodeList – an array (group) of elements
  - document.getElementsByTagName('p') would return a set of nodes
- attribute
  - A node in the DOM, though rarely used that way. Another way to manipulate/change the document

---

## Newer DOM Methods

- We've been using getElementById() which takes a single parameter and that parameter must be an id selector
- To select the first element of a certain type, querySelector() can select anything except for pseudo-elements
  - Because the selector can be anything, # and . must be included
- To select multiple elements querySelecorAll() is similar to querySelector() but returns all found values
- getElementsByClassName doesn't need the selectors (# or .), but querySelectorAll does
- The 2 methods work and you can choose the more comfortable for you, but querySelector is the newer method

---

## Output

- HTML5 and CSS3 aren't really interactive
- JS can do many more things HTML and CSS can't in terms of interactivity
- JS doesn't have a built-in print function, data is displayed via:
  - an alert box using window.alert():
```JavaScript
alert("My Message Here");
```
  - a prompt using window.prompt():
    Very similar to alert, but wants input:
```JavaScript
prompt("Enter your name: ");
```
  - HTML output using document.write():
    Something permanent, document.write() writes directly to the page:
```JavaScript
document.write("Time to learn JavaScript");
```
    Not recommended, easily misused
  - HTML element using innerHTML():
    To change the contents of the DOM, use innerHTML combined with the element you want to change:
```JavaScript
element.innerHTML = "Time to learn JavaScript"
```
  - the browser console using console.log():
    This option writes the data to the browser console
    The console is a place to see what is going on during the execution of your program
```JavaScript
console.log("Leave a secret message")
```
    It also provides debugging information for JS, HTML, and CSS

---

## Variables

- To use a variable, you have to declare it: var name;
- Consists of letters, digits, underscores, and $
- Can't start with a digit
- Case-sensitive
- you can assign values using =
- LHS: the variable being updated
- RHS: the new value that will be stored in the variable

Note: Do not start with the value.

- Using variables:

---

## Data Types

- Many Programming languages take 1 type for each variable, but in JS one variable can take many types
- Data types:
  - Number: Numerical value with/out decimals
- String:
  Collection of characters (anything on the keyboard)
  Value placed between quotes "…"
- Boolean:
  True or false
- Object:
  Sometimes the variables are more complex
  A node in the DOM is a good example:
```JavaScript
var topic= document.getElementById("myID");
```
  Nodes are more than a single value, they have attributes
- Array:
  Return more than one value:
```JavaScript
var links= document.getElementsByTagName('a');
```
  Accessing arrays elements requires a variable name and an index:
```JavaScript
var links= document.getElementsByTagName('a')
document.write(links[0]);
```

---

---
**Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 2|Week 2: Functions, Events, and this Keyword]]
