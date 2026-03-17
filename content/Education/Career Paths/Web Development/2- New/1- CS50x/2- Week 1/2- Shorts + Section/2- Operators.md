# Operators

## Introduction to Operators in C

Operators in C allow us to manipulate and work with values and variables. We've already encountered the assignment operator (`=`), which places a value into a variable. This short will explore other common operators, starting with arithmetic operators.

## Arithmetic Operators

C supports basic mathematical operations:

- **Addition**: `+`
- **Subtraction**: `-`
- **Multiplication**: `*`
- **Division**: `/`

**Example:**

```c
int y = 10;
int x = y + 1; // x will be 11
x = x * 5;     // x will be 55 (11 * 5)
```

**Assignment Evaluation**: In C, the expression on the right side of the assignment operator (`=`) is evaluated first, and then its result is stored in the variable on the left side. For instance, `x = x * 5` first calculates `x * 5` (which is `11 * 5 = 55`) and then assigns `55` to `x`, overwriting its previous value.

## Modulus Operator

- **Symbol**: `%`
- **Purpose**: Returns the remainder of a division operation.
- **Example:**

```c
int m = 13 % 4; // m will be 1 (13 divided by 4 is 3 with a remainder of 1)
```

- **Practical Use**: The modulus operator is surprisingly useful. For example, it can be used to constrain numbers within a specific range, which is particularly helpful with random number generators. If a random number generator produces a very large number, using `% N` (where N is your desired upper bound + 1) will give you a number between 0 and N-1.

## Shorthand Assignment Operators

C provides shorthand operators for common arithmetic operations combined with assignment. These make code more concise.

- **Syntax**: `variable operator= value` (e.g., `x += 5`)
- **Equivalence**: `x += 5` is equivalent to `x = x + 5`.
- **Applicability**: These shorthand operators work with all arithmetic operators: `+=`, `-=`, `*=`, `/=`, `%=`.

**Example:**

```c
int x = 10;
x *= 5; // Equivalent to x = x * 5; x will be 50
```

## Increment and Decrement Operators

Incrementing or decrementing a variable by 1 is a very common operation in C, especially in loops. C provides even shorter syntax for this:

- **Increment**: `++` (e.g., `x++`)
- **Decrement**: `--` (e.g., `x--`)

- **Equivalence**: 
    - `x++` is equivalent to `x = x + 1` or `x += 1`.
    - `x--` is equivalent to `x = x - 1` or `x -= 1`.

**Example:**

```c
int counter = 0;
counter++; // counter will be 1
counter--; // counter will be 0
```

These operators can be placed before or after the variable (`++x` or `x++`), which affects when the increment/decrement occurs in an expression (prefix vs. postfix), but for simple standalone operations, the result is the same.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/1- Data Types|Data Types]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/3- Conditional Statements|Conditional Statements]]
