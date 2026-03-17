- Allow to add interactive functionality to HTML elements by listening to different events that take place on the page (key press, elements load, etc…)
- Common ways to add events:
    - Inside the HTML:
        - Directly inside the element
        - Global onevent attribute
            
```JavaScript
onclick="alert('The message')" // this attribute can be added to any clickable element
```
            
- addEvenetListener:
	- Inside the JS script file, which will select the element, and add the methods which will trigger the type of event and the function associated with it
            
```JavaScript
element.addEventListener("eventType", function, optional: ture/false)
```
            
- What to use:
	- People tend to use the addEventListener as it is possible to add as many as needed, so in case there are many events in place, this method is the best for the job

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/4- DOM Selectors|4- DOM Selectors]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/6- Event Propagation|6- Event Propagation]]
