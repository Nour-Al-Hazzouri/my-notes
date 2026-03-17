# Loops

## Introduction to Loops in C

Loops are powerful programming constructs that allow a block of code to be executed repeatedly, saving you from writing the same code multiple times. C offers several types of loops, some of which have analogies in visual programming languages like Scratch.

## `while` Loop

### Infinite Loop: `while (true)`

- **Purpose**: This creates an infinite loop, meaning the code inside will run forever unless explicitly stopped (e.g., by a `break` statement or program termination).
- **Syntax**:

```c
while (true)
{
    // code to execute repeatedly
}
```

- **Analogy to Scratch**: Similar to Scratch's 


forever` block.
- **Stopping an Infinite Loop**: In a terminal, you can typically stop a program stuck in an infinite loop by pressing `Ctrl+C`.

### Conditional `while` Loop

- **Purpose**: Executes a block of code repeatedly as long as a specified boolean expression remains `true`.
- **Syntax**:

```c
while (boolean_expression)
{
    // code to execute as long as the expression is true
}
```

- **Execution Flow**: The `boolean_expression` is evaluated before each iteration. If it's `true`, the code inside the curly braces executes. This continues until the `boolean_expression` becomes `false`.
- **Example**: A common use case is a counter:

```c
int x = 0;
while (x < 100)
{
    // do something
    x++; // Increment x in each iteration
}
// Loop stops when x is 100, because 100 < 100 is false
```

- **Distinction from Scratch's `repeat until`**: Be careful! In Scratch, `repeat until` continues *until* the condition is `true`. In C, `while` continues *as long as* the condition is `true` (i.e., until it becomes `false`). This is a key difference for beginners transitioning from Scratch.

## `do-while` Loop

- **Purpose**: Similar to a `while` loop, but guarantees that the code block will execute at least once before the condition is checked.
- **Syntax**:

```c
do
{
    // code to execute at least once
}
while (boolean_expression);
```

- **Execution Flow**: The code inside the `do` block is executed first. Then, the `boolean_expression` is evaluated. If it's `true`, the loop repeats. If it's `false`, the loop terminates.
- **Use Case**: Useful when you need to perform an action at least once, such as getting valid user input.

## `for` Loop

- **Purpose**: Ideal for situations where you need to repeat a block of code a specific, predetermined number of times.
- **Syntax**:

```c
for (initialization; condition; update)
{
    // code to execute
}
```

- **Components**:
    1.  **`initialization`**: Executed once at the beginning of the loop. Typically used to declare and initialize a loop counter variable (e.g., `int i = 0;`).
    2.  **`condition`**: A boolean expression evaluated before each iteration. The loop continues as long as this condition is `true` (e.g., `i < 10;`).
    3.  **`update`**: Executed after each iteration of the loop body. Typically used to increment or decrement the loop counter (e.g., `i++;`).

- **Execution Flow**:
    1.  `initialization` occurs.
    2.  `condition` is checked. If `true`, proceed to step 3. If `false`, the loop terminates.
    3.  The code inside the loop body executes.
    4.  `update` occurs.
    5.  Go back to step 2.

- **Example**: Repeating something 10 times:

```c
for (int i = 0; i < 10; i++)
{
    // This code will execute 10 times (for i = 0 through 9)
}
```

- **Analogy to Scratch**: Similar to Scratch's `repeat (N)` block.

## Nested Loops

- **Purpose**: Loops can be nested within other loops. This is useful for tasks involving grids, matrices, or iterating through multiple dimensions.
- **Execution**: The inner loop completes all its iterations for each single iteration of the outer loop.

**Example (Conceptual):**

```c
for (int i = 0; i < 3; i++) // Outer loop
{
    for (int j = 0; j < 2; j++) // Inner loop
    {
        // This code will execute 3 * 2 = 6 times
    }
}
```

## `break` and `continue` Statements

- **`break`**: Immediately terminates the innermost loop (or `switch` statement) and transfers control to the statement immediately following the loop.
- **`continue`**: Skips the rest of the current iteration of the innermost loop and proceeds to the next iteration (re-evaluating the loop condition).

These statements provide fine-grained control over loop execution flow.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/3- Conditional Statements|Conditional Statements]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/5- Command Line|Command Line]]
