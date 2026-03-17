# CS50x Week 1 Section: C

## Introduction

This section delves into the foundational concepts of C programming, building blocks essential for the entire CS50 course. The agenda for this session includes variables and operators, functions, conditionals, and loops, culminating in a brief introduction to Problem Set 1, specifically the Mario problem.

## Variables and Operators

In C, unlike some modern languages, variables must be explicitly declared with a data type before use. A variable can be thought of as a named box that stores a value. For example, `int calls = 4;` declares an integer variable named `calls` and initializes it with the value 4.

### Components of a Variable Declaration:

1.  **Type**: Specifies the kind of value the variable will hold (e.g., `int` for integers).
2.  **Name**: A descriptive identifier for the variable (e.g., `calls`, `x`).
3.  **Assignment Operator (`=`):** Assigns a value to the variable.
4.  **Value**: The data being stored (e.g., `4`, `50`).

**Example**: `int x = 50;` can be read as "Create an integer named `x` that gets the value 50."

### Reassignment and Arithmetic Operations:

Variables can be reassigned new values. For instance, if `int calls = 4;` was initially set, `calls = 5;` would update the value in the `calls` box to 5. Arithmetic operations can be directly incorporated into reassignment:

-   `calls = calls + 1;` (increments `calls` by 1)
-   `calls = calls - 1;` (decrements `calls` by 1)

C evaluates the right-hand side of the assignment first. So, `calls = calls - 1;` takes the current value of `calls`, subtracts 1, and then stores the new result back into `calls`.

Shorthand operators like `calls++` (for incrementing by 1) are also available and are particularly useful in loops.

### User Input:

Programs can obtain input from the user. For integer input, CS50 provides the `get_int()` function (part of the `cs50.h` library). This function prompts the user for an integer and returns the entered value.

**Example**:

```c
int calls = get_int("Number of calls: ");
```

Here, `get_int("Number of calls: ")` is the function call. `"Number of calls: "` is the prompt displayed to the user. The value entered by the user is then stored in the `calls` variable.

Similar functions exist for other data types:

-   `get_long()`: for `long` integers
-   `get_float()`: for `float` (single-precision floating-point numbers)
-   `get_double()`: for `double` (double-precision floating-point numbers)
-   `get_char()`: for `char` (single characters)
-   `get_string()`: for `string` (sequences of characters)

## Functions

Functions are reusable blocks of code that perform a specific task. They help organize code, make it more modular, and prevent repetition.

### Defining a Function:

Functions have a return type, a name, parameters (inputs), and a body (the code to be executed).

**Example**:

```c
void say_hello(void)
{
    printf("Hello, world!\n");
}
```

-   `void`: The return type, indicating the function does not return any value.
-   `say_hello`: The name of the function.
-   `(void)`: The parameters, indicating the function takes no arguments.
-   `{ ... }`: The function body.

### Calling a Function:

To execute a function, you simply call it by its name followed by parentheses, passing any required arguments.

**Example**:

```c
say_hello(); // Calls the say_hello function
```

### Functions with Parameters and Return Values:

Functions can take parameters (inputs) and return values (outputs).

**Example**:

```c
int add(int a, int b)
{
    return a + b;
}

int sum = add(5, 3); // sum will be 8
```

-   `int`: The return type, indicating the function returns an integer.
-   `add`: The function name.
-   `(int a, int b)`: Parameters, two integers named `a` and `b`.
-   `return a + b;`: Returns the sum of `a` and `b`.

## Conditionals

Conditional statements allow programs to make decisions based on conditions.

### `if` Statement:

Executes code if a condition is true.

```c
if (condition)
{
    // code if true
}
```

### `if-else` Statement:

Executes one block of code if true, another if false.

```c
if (condition)
{
    // code if true
}
else
{
    // code if false
}
```

### `if-else if-else` Chain:

Handles multiple conditions sequentially.

```c
if (condition1)
{
    // code if condition1 is true
}
else if (condition2)
{
    // code if condition2 is true
}
else
{
    // code if neither is true
}
```

## Loops

Loops allow code to be executed repeatedly.

### `while` Loop:

Repeats as long as a condition is true.

```c
while (condition)
{
    // code to repeat
}
```

### `for` Loop:

Repeats a specific number of times.

```c
for (initialization; condition; update)
{
    // code to repeat
}
```

## Problem Set 1: Mario

The Mario problem involves building a pyramid of bricks using characters, similar to the pyramids in the Super Mario game. This problem set helps reinforce concepts of loops and conditional statements.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/6- Magic Numbers|Magic Numbers]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/1- Week 2 Notes|CS50x Week 2: Arrays]]
