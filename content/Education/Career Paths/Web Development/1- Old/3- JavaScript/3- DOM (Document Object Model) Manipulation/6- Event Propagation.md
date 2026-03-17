- Refers to how an event travels through the DOM
- The event needs to pass through every node on the DOM until it reaches its destination or forcibly stopped, so it’s from the root to the target and vice-versa
- This process is known as:
    1. Event Capturing: starting from the root of the DOM
    2. Target: reaching the destination (target)
    3. Event Bubbling: returning from the target to the root
- Capturing vs bubbling:
    - False: default value for an event listener, which means that the event’s information is captured from the target all the way to the root
    - True: Capturing, which means the event’s information is captured from the source up to the target
    - Some methods concerning both modes:
        - stopPropagation();
        - preventDefault();
- Event delegation:
    - Allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match that selector;
        
```JavaScript
document.querySelector('parentElement').addEventListener('eventType', function())
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/3- DOM (Document Object Model) Manipulation/5- Event Listeners|5- Event Listeners]]
