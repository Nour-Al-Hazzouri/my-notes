Here are some of the most common errors in JavaScript:

- ReferenceError
- SyntaxError
- TypeError
- RangeError

There are some other errors in JavaScript. These other errors include:

- AggregateError
- Error
- InternalError
- URIError

However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.

## ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:

```JavaScript
console.log(username);
```

If the variable named **username** hasn't been declared, the above line of code will result in the following output:

```JavaScript
Uncaught ReferenceError: username is not defined
```

## SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError.

For example:

```JavaScript
var a "there's no assignment operator here";
```

The above line of code will throw the following error:

```JavaScript
Uncaught SyntaxError: Unexpected string
```

## TypeError

A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the **pop()** method on a string:

```JavaScript
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```

The array-like behavior of strings was already covered in an earlier lesson in this course.

However, as can be confirmed by running the above line of code, strings do not have all the array methods readily available to them, and trying to use some of those methods will result in a TypeError being thrown.

## RangeError

A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday _Base 10 number_ (a number of the common decimal system) to a _Base 2 number_ (i.e binary number).

For example:

```JavaScript
(10).toString(2); // '1010'
```

The value of **2** when passed to the **toString()** method, is like saying to JavaScript: "convert the value of **10** of the Base 10 number system, to its counter-part in the Base 2 number system".

JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part.

Besides using Base 2 number system, I can also use the Base 8, like this:

```JavaScript
(10).toString(8); // 12
```

I get back the value **12**, which is the plain number 10, writen in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary _Base 100_, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing _Base 100_ system is **out of range** of the number systems that are available to the **toString()** method:

```JavaScript
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 2/3- Bugs and Errors|3- Bugs and Errors]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 2/5- Defensive Programming|5- Defensive Programming]]
