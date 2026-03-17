When a function calls itself, that’s what’s as a recursion, and if there is no stopping condition, it can run infinitely

Recursion in an alternative way to run repeatedly without the use of loops

```JavaScript
let counter= 3;
function repeat(){
	console.log(counter);
	counter = counter - 1
	if (counter === 0) return;
	example();
}
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/1- Introduction to functional programming-|1- Introduction to functional programming-]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/3- The functional programming paradigm|3- The functional programming paradigm]]
