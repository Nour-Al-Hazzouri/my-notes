- Bugs and errors:
    - Bugs are when the program runs but doesn’t work as intended
    - Errors are when the program stops working completely
    - Errors have different types:
        - Syntax errors: when the program can’t read the code
        - Reference errors: when the program can’t find the variable in the code
        - Type error: when the program stops due to the use of a wrong type
- Try catch blocks:
    - The act of trying to catch an error is usually referred to as error handling
    - The try block can be used to wrap an error, and the catch can be used to catch the error
        
```JavaScript
try {
console.log(c+d)
} catch(err) {
// do something here...
}
```
        
    - The throw keyword can be used to throw an error from the try block to the catch block
        
```JavaScript
try {
	throw new ReferenceError() //yhis is an example of the error types that might encounter you
	} catch(err) {
		console.log(err)
}
console.log('this line now works')
```
        
    - Working with errors in JS:
        - You can throw errors on purpose using the throw keyword
            
```JavaScript
throw new ReferenceError();
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 2/2- String cheat sheet|2- String cheat sheet]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 2/4- Syntax, logical and runtime errors|4- Syntax, logical and runtime errors]]
