# Recursion

Recursion is a powerful programming technique where a function calls itself as part of its execution. It's often considered an "elegant" way to solve problems because it can lead to concise, readable, and visually appealing code, especially for problems that can be broken down into smaller, self-similar subproblems.

## What is Recursion?

A **recursive function** is a function that invokes itself during its execution. This might seem counter-intuitive at first, but it's a fundamental concept in computer science.

## Key Components of a Recursive Function

Every recursive function must have two main components to prevent infinite loops and ensure proper termination:

1.  **Base Case:** This is a simple solution to the problem that does not involve further recursion. When the base case is met, the recursive calls stop, and the function returns a value. Without a base case, a recursive function would call itself indefinitely, leading to a stack overflow and program crash.
2.  **Recursive Case:** This is where the function calls itself, but with a slightly modified input that brings it closer to the base case. The problem is broken down into a smaller, similar subproblem.

## Example: Factorial Function

The factorial function (denoted as `n!`) is a classic example used to illustrate recursion. For a positive integer `n`, `n!` is the product of all positive integers less than or equal to `n`. For example, `5! = 5 * 4 * 3 * 2 * 1 = 120`.

We can define factorial recursively:

*   **Base Case:** `fact(1) = 1` (The factorial of 1 is 1).
*   **Recursive Case:** `fact(n) = n * fact(n - 1)` (The factorial of `n` is `n` multiplied by the factorial of `n-1`).

### C Implementation of Factorial (Recursive)

```c
#include <stdio.h>

int fact(int n)
{
    if (n == 1) // Base Case
    {
        return 1;
    }
    else // Recursive Case
    {
        return n * fact(n - 1);
    }
}

int main(void)
{
    printf("%i\n", fact(5)); // Example call
}
```

### Trace of `fact(4)`

Let's trace how `fact(4)` would execute:

1.  **`fact(4)` is called:**
    *   Is `4 == 1`? No.
    *   Returns `4 * fact(3)`.

2.  **`fact(3)` is called:**
    *   Is `3 == 1`? No.
    *   Returns `3 * fact(2)`.

3.  **`fact(2)` is called:**
    *   Is `2 == 1`? No.
    *   Returns `2 * fact(1)`.

4.  **`fact(1)` is called:**
    *   Is `1 == 1`? Yes. (Base Case)
    *   Returns `1`.

5.  **`fact(2)` resumes:**
    *   Receives `1` from `fact(1)`.
    *   Calculates `2 * 1 = 2`.
    *   Returns `2`.

6.  **`fact(3)` resumes:**
    *   Receives `2` from `fact(2)`.
    *   Calculates `3 * 2 = 6`.
    *   Returns `6`.

7.  **`fact(4)` resumes:**
    *   Receives `6` from `fact(3)`.
    *   Calculates `4 * 6 = 24`.
    *   Returns `24`.

The final result of `fact(4)` is `24`.

### C Implementation of Factorial (Iterative)

For comparison, here's an iterative (non-recursive) version of the factorial function:

```c
#include <stdio.h>

int fact(int n)
{
    int answer = 1;
    for (int i = 1; i <= n; i++)
    {
        answer = answer * i;
    }
    return answer;
}

int main(void)
{
    printf("%i\n", fact(5)); // Example call
}
```

While both implementations achieve the same result, the recursive version is often considered more elegant and concise for problems that naturally lend themselves to recursive solutions.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/6- Merge Sort|Merge Sort]] | **Next**: [[1- Week 4 Lecture]]
