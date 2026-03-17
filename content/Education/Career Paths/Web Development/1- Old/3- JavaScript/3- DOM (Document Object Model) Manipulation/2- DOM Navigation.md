- Reminder:
    - Everything in the DOM is a node whether it is a parent, a child or a sibling.
    - Attributes or the elements are nodes but do not participate in the parent-child-sibling relationship
- Traverse the DOM:
    - Parent Node Traversal:
        
```JavaScript
element.parentNode
element.parentElement
```
        
- This same method can be used again to see the grandparent
- The difference lies in the name, where the element is a type of node, but everything can be a node
- Child Node Traversal:
- Same concept as parents, but for children
            
```JavaScript
element.childNodes
element.firstChild
element.lastChild
```
            
- Selecting a specific node from the list is done just like an array using the brackets
            
```JavaScript
element.childNodes[#].style.'style'
```
            
- Other way than nodes:
            
```JavaScript
element.children //only the children elements will be selected
element.firstElementChild //same concept
element.lastElementChild //same concept
```
            
- Sibling Node Traversal:
	- Just like parents and children, there are methods for nodes and elements, for example: 
            
```JavaScript
element.previousSibling //previous node
element.nextSibling  //next node
```
            
- There’s also same methods for elements:
            
```JavaScript
element.previousElementSibling //previous element
element.nextElementSibling  //next element
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/1- What is DOM|1- What is DOM]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/3- DOM Manipulation|3- DOM Manipulation]]
