- Style Changing:
    - Element.style:
        - Works for single elements
        - Uses camelCase
        - Loops are needed for arrays
            
```JavaScript
variable.style.'style'
//'variable' is the variable which is assignled the selector
//'style' is change with what you want to modify (color - fontSize)
```
            
- Creating elements:
    - First, you need to create the element inside a variable, and select another element using a second variable
    - Then you need to append the element you created inside the selector variable
        
```JavaScript
const ul = document.querySelector('ul');
const ul = document.createelement('li');
ul.append(li)
```
        
- Modifying text:
    - There are many text methods that can be used:
        - innerText: displays the text inside the HTML element
        - textContent: displays the text inside the HTML element the same way it is displayed
        - innerHTML: displays everything inside an HTML element including other elements
    - Using innerHTML is less secure because you don’t want user input to be displayed in innerHTML which allows the user to control the HTML and JS inside the webpage
    - innerText is mostly used
- Modifying attributes:
    - We can set or remove any attribute we want, and add classes and check if classes are present
        
```JavaScript
element.setAttribute(attribute, value) //set attribute
element.removeAttribute(attribute) //remove attribute
element.classList.add(class) // add class
element.classList.remove(class) // remove class
console.log(element.classList.contains(class)) //false or true will be the output in the terminal
```
        
- Removing elements:
    
```JavaScript
element.remove()
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/2- DOM Navigation|2- DOM Navigation]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/4- DOM Selectors|4- DOM Selectors]]
