Note: These selectors are usually assigned to variables, and these variables are used to manipulate the DOM.

HTML:
- ID Selector:
    - This selector returns the element with the same ID as its argument
    - It usually consists of 1 element since ID is unique and is used once in the page 
        
```JavaScript
document.getElementById(’id-name’);
```
        
- Class Selector:
    - This selector returns an array like object with all the child elements which have the class name
        
```JavaScript
document.getElementByClassName('class-name');
```
        
- Tag Selector:
    - This selector returns and array like object with all the child elements of the same Tag
        
```JavaScript
document.getElementByTagName('li');
```
        
CSS:
- Query Selector:
    - This selector returns the first item that matches the selector
    - It accepts all types of CSS selectors
        
```JavaScript
document.querySelector('class-name');
```
        
- Query Selector All:
    - Same as querySelector, but returns multiple items
        
```JavaScript
document.querySelectorAll('class-name');
```
    
Note: just like CSS, IDs are used with ‘#’, and classes are used with ‘.’

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/3- DOM Manipulation|3- DOM Manipulation]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/5- Event Listeners|5- Event Listeners]]
