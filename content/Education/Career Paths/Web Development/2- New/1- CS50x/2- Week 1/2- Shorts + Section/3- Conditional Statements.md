# Conditional Statements

## Introduction to Conditional Statements in C

Conditional statements, or conditional expressions, are fundamental to programming. They allow programs to make decisions and execute different blocks of code based on whether certain conditions are met. This is analogous to the branching or “forks in the road” that you might have seen in Scratch.

## `if` Statement

- **Purpose**: The `if` statement is the simplest form of a conditional. It executes a block of code only if a specified boolean expression evaluates to `true`.
- **Syntax**:

```c
if (boolean_expression)
{
    // code to execute if the expression is true
}
```

- **Analogy to Scratch**: This is similar to the `if` block in Scratch. The code inside the curly braces `{}` is like the code inside the C-shaped block in Scratch.
- **Execution Flow**: If the `boolean_expression` is `true`, the code inside the curly braces is executed from top to bottom. If it's `false`, the code inside the braces is skipped entirely.

## `if-else` Statement

- **Purpose**: The `if-else` statement provides an alternative block of code to execute when the `if` condition is `false`.
- **Syntax**:

```c
if (boolean_expression)
{
    // code to execute if the expression is true
}
else
{
    // code to execute if the expression is false
}
```

- **Analogy to Scratch**: This corresponds to the `if-else` block in Scratch, which has two separate sections for the two possible outcomes.
- **Execution Flow**: If the `boolean_expression` is `true`, the first block of code is executed. If it's `false`, the second block of code (after `else`) is executed.

## `if-else if-else` Chain

- **Purpose**: To handle multiple, mutually exclusive conditions, you can chain `if-else` statements together.
- **Syntax**:

```c
if (boolean_expression_1)
{
    // code for condition 1
}
else if (boolean_expression_2)
{
    // code for condition 2
}
else
{
    // code if no previous conditions are met
}
```

- **Execution Flow**: The conditions are checked in order. As soon as one is found to be `true`, its corresponding code block is executed, and the rest of the chain is skipped. The final `else` block is optional and acts as a default case if none of the preceding `if` or `else if` conditions are met.

## Non-Mutually Exclusive `if` Statements

It's also possible to have a series of `if` statements that are not mutually exclusive. In this case, each `if` statement is evaluated independently.

```c
if (condition_1)
{
    // code for condition 1
}
if (condition_2)
{
    // code for condition 2
}
```

In this example, it's possible for both blocks of code to execute if both `condition_1` and `condition_2` are true.

## `switch` Statement

- **Purpose**: The `switch` statement is a different kind of conditional that allows you to choose from a number of discrete cases, based on the value of a variable.
- **Syntax**:

```c
switch (variable)
{
    case value_1:
        // code for value_1
        break;
    case value_2:
        // code for value_2
        break;
    default:
        // code if variable doesn't match any case
        break;
}
```

- **Key Features**:
    - **`case`**: Each `case` corresponds to a specific value that the `variable` might have.
    - **`break`**: The `break` statement is crucial. It prevents “fall-through,” where the code for the next case would also be executed. Without `break`, if `variable` matches `value_1`, the code for `value_1` would run, and then the code for `value_2` would run as well, until a `break` is encountered.
    - **`default`**: The `default` case is optional and acts like the final `else` in an `if-else` chain, catching any values that don't match a specific `case`.

## Ternary Operator (Conditional Operator)

- **Purpose**: The ternary operator is a compact, one-line way to write a simple `if-else` statement.
- **Syntax**: `(boolean_expression) ? value_if_true : value_if_false;`
- **Example**:

```c
int x = (y > 10) ? 5 : 10; // if y is greater than 10, x becomes 5, otherwise x becomes 10
```

This is a more concise way of writing:

```c
if (y > 10)
{
    x = 5;
}
else
{
    x = 10;
}
```

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/2- Operators|Operators]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/4- Loops|Loops]]
