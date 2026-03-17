# CS50x Short: Functions

This short introduces the concept of functions in programming, explaining their purpose, structure, and benefits.

## What are Functions?

Functions are a fundamental concept in programming that allow us to organize code and break down complex problems into smaller, more manageable parts. In C, and many other programming languages, functions are often referred to as procedures, methods (especially in object-oriented programming), or subroutines. They all refer to the same basic idea: a self-contained block of code that performs a specific task.

### The "Black Box" Concept

A function can be thought of as a "black box" that takes zero or more inputs, processes them, and produces a single output. We don't necessarily need to know the internal workings of the function, only what inputs it expects and what output it will produce.

For example:

*   A function `func` might take three inputs (a, b, c) and produce an output (z).
*   An `add` function could take three numbers (e.g., 3, 6, 7) and output their sum (16).
*   A `mult` function could take two numbers (e.g., 4, 5) and output their product (20).

The key idea of the "black box" is that as long as the function behaves predictably and produces the expected output for given inputs, its internal implementation can vary. For instance, a multiplication function `mult(a, b)` could be implemented as `output a * b` or by repeatedly adding `a` to a counter `b` times. Both implementations yield the same result, demonstrating the abstraction provided by functions.

## Why Use Functions?

Using functions offers several significant advantages:

*   **Organization**: Functions help in breaking down a large, complicated problem into smaller, more manageable sub-problems. This makes the code easier to understand, navigate, and maintain.
*   **Simplification**: Smaller components are generally easier to design, implement, and debug. When a bug occurs, it's easier to isolate and fix it within a specific function rather than searching through a monolithic block of code.
*   **Reusability**: Functions can be written once and then reused multiple times throughout a program or even in different programs. This reduces code duplication and promotes efficiency.

## Function Declarations

Before a function can be used, it must be declared. A function declaration (also known as a prototype) informs the compiler about the function's existence, its return type, its name, and the types and order of its arguments. Function declarations typically appear at the top of your code, before the `main()` function.

The general form of a function declaration is:

```c
return-type name(argument-list);
```

*   `return-type`: Specifies the data type of the value that the function will return. If the function does not return any value, `void` is used.
*   `name`: The identifier for the function.
*   `argument-list`: A comma-separated list of the data types and names of the inputs (parameters) the function expects. If the function takes no arguments, `void` or an empty set of parentheses `()` is used.

### Examples of Function Declarations:

*   **Function to add two integers:**
    ```c
    int add_two_ints(int a, int b);
    ```
    This declares a function named `add_two_ints` that takes two integer arguments (`a` and `b`) and returns an integer.

*   **Function to multiply two floating-point numbers:**
    ```c
    float mult_two_reals(float x, float y);
    ```
    This declares a function named `mult_two_reals` that takes two float arguments (`x` and `y`) and returns a float.

    Alternatively, using `double` for higher precision:
    ```c
    double mult_two_reals(double x, double y);
    ```

## Function Definitions

After declaring a function, you must define it. The function definition provides the actual implementation of the function, detailing what operations it performs.

A function definition looks very similar to its declaration, but it includes the function body enclosed in curly braces `{}`.

### Example of Function Definition (mult_two_reals):

```c
float mult_two_reals(float x, float y)
{
    float product = x * y;
    return product;
}
```

This definition calculates the product of `x` and `y` and returns the result. A more concise way to write this would be:

```c
float mult_two_reals(float x, float y)
{
    return x * y;
}
```

### Example of Function Definition (add_two_ints):

```c
int add_two_ints(int a, int b)
{
    int sum;
    // declare variable
    sum = a + b; // calculate the sum
    return sum;   // give result back
}
```

This function declares a variable `sum`, calculates `a + b`, assigns it to `sum`, and then returns `sum`. This can also be written more compactly:

```c
int add_two_ints(int a, int b)
{
    int sum = a + b;  // calc variable
    return sum;       // give result back
}
```

It's important to note that while the simple addition above is straightforward, a function could have a more complex implementation, such as adding two integers using repeated increments:

```c
int add_two_ints(int a, int b)
{
    int sum = 0;
    if(a > 0)
        for(int i = 0; i < a; sum++, i++);
    else
        for(int i = a; i < 0; sum--, i++);
    if(b > 0)
        for(int i = 0; i < b; sum++, i++);
    else
        for(int i = b; i < 0; sum--, i++);
    return sum;
}
```

## Function Calls

Once a function is declared and defined, it can be called (or invoked) from other parts of the program, such as from `main()`. To call a function, you simply provide the necessary arguments in the correct order and type. The value returned by the function can then be assigned to a variable of the appropriate type.

## Function Miscellany

*   **No Inputs**: Functions can sometimes take no inputs. In such cases, the `argument-list` in the declaration is `void` or empty parentheses `()`.
*   **No Output**: Functions may also not return any value. For these functions, the `return-type` is `void`.

## Practice Problem: `valid_triangle`

**Problem**: Declare and write a function called `valid_triangle` that takes three real numbers (e.g., `float` or `double`) representing the lengths of the three sides of a triangle as its arguments. The function should output `true` or `false` (using a `bool` return type) depending on whether those three lengths can form a valid triangle.

**Rules for a valid triangle:**
1.  A triangle may only have sides with positive length (i.e., length > 0).
2.  The sum of the lengths of any two sides of the triangle must be greater than the length of the third side.

### Declaration:

```c
bool valid_triangle(float x, float y, float z);
```

### Definition:

```c
bool valid_triangle(float x, float y, float z)
{
    // check for all positive sides
    if (x <= 0 || y <= 0 || z <= 0) {
        return false;
    }

    // check that sum of any two sides is greater than the third
    if ((x + y <= z) || (x + z <= y) || (y + z <= x)) {
        return false;
    }

    // if we passed both tests, the triangle is valid
    return true;
}
```

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/1- Week 2 Notes|CS50x Week 2: Arrays]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/2- Variables and Scope|CS50x Short: Variables and Scope]]
