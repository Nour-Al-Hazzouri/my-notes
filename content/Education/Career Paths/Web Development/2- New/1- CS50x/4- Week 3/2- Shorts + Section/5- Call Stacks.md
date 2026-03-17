# Call Stacks

Call stacks are fundamental to how functions are executed in programming, especially in languages like C. They provide a structured way for the system to manage the flow of control between functions, ensuring that each function has its own dedicated memory space and that execution resumes correctly after a function call.

## What is a Call Stack?

When a function is called, the system allocates a block of memory for that function to perform its operations. This block of memory is known as a **stack frame** or **function frame**. This frame contains:

*   Space for variables declared within the function.
*   Space for calculations and other data the function might need.

Multiple function frames can exist in memory simultaneously, especially when functions call other functions. For example, if `main()` calls `move()`, and `move()` then calls `direction()`, all three functions will have open frames in memory.

## How the Call Stack Works

The frames are organized in a **stack** data structure, which operates on a Last-In, First-Out (LIFO) principle:

1.  **Pushing a Frame:** When a new function is called, its corresponding frame is **pushed** onto the top of the call stack. This new frame immediately becomes the **active frame**, meaning it's the function currently executing.
2.  **Pausing Previous Frames:** Any function that was previously active (and is now below the new active frame on the stack) is put on **pause**. It waits in a holding pattern until it becomes the active frame again.
3.  **Popping a Frame:** When a function finishes its work (e.g., by returning a value or reaching its end), its frame is **popped** off the top of the stack. The frame directly below it then becomes the new active frame, and its execution resumes from where it left off.

## Visualization of a Call Stack (Factorial Example)

Let's consider a simple program that calculates the factorial of 5 using a recursive function `fact()` and prints the result using `printf()`.

```c
#include <stdio.h>

int fact(int n)
{
    if (n == 1)
    {
        return 1;
    }
    else
    {
        return n * fact(n - 1);
    }
}

int main(void)
{
    printf("%i\n", fact(5));
}
```

Here's how the call stack would behave:

1.  **`main()` calls `printf()`:**
    *   `main()`'s frame is at the bottom of the stack.
    *   `printf()`'s frame is pushed on top, becoming active. `main()` is paused.

2.  **`printf()` calls `fact(5)`:**
    *   `printf()`'s frame is now paused.
    *   `fact(5)`'s frame is pushed on top, becoming active.

3.  **`fact(5)` calls `fact(4)`:**
    *   `fact(5)`'s frame is paused.
    *   `fact(4)`'s frame is pushed on top, becoming active.

4.  **`fact(4)` calls `fact(3)`:**
    *   `fact(4)`'s frame is paused.
    *   `fact(3)`'s frame is pushed on top, becoming active.

5.  **`fact(3)` calls `fact(2)`:**
    *   `fact(3)`'s frame is paused.
    *   `fact(2)`'s frame is pushed on top, becoming active.

6.  **`fact(2)` calls `fact(1)`:**
    *   `fact(2)`'s frame is paused.
    *   `fact(1)`'s frame is pushed on top, becoming active.

7.  **`fact(1)` returns `1`:**
    *   `fact(1)`'s frame is popped off the stack.
    *   `fact(2)`'s frame becomes active again and resumes execution, receiving `1` as the return value from `fact(1)`.

8.  **`fact(2)` returns `2 * 1 = 2`:**
    *   `fact(2)`'s frame is popped off the stack.
    *   `fact(3)`'s frame becomes active again and resumes execution, receiving `2` as the return value from `fact(2)`.

9.  **`fact(3)` returns `3 * 2 = 6`:**
    *   `fact(3)`'s frame is popped off the stack.
    *   `fact(4)`'s frame becomes active again and resumes execution, receiving `6` as the return value from `fact(3)`.

10. **`fact(4)` returns `4 * 6 = 24`:**
    *   `fact(4)`'s frame is popped off the stack.
    *   `fact(5)`'s frame becomes active again and resumes execution, receiving `24` as the return value from `fact(4)`.

11. **`fact(5)` returns `5 * 24 = 120`:**
    *   `fact(5)`'s frame is popped off the stack.
    *   `printf()`'s frame becomes active again and resumes execution, receiving `120` as the return value from `fact(5)`.

12. **`printf()` prints `120` and returns:**
    *   `printf()`'s frame is popped off the stack.
    *   `main()`'s frame becomes active again and resumes execution.

13. **`main()` finishes:**
    *   `main()`'s frame is popped off the stack.
    *   The call stack is now empty, and the program terminates.

## Importance of Call Stacks

Call stacks are crucial for:

*   **Managing Function Execution:** They ensure that functions are executed in the correct order and that control returns to the calling function at the appropriate time.
*   **Memory Management:** Each function gets its own dedicated memory space (stack frame), preventing conflicts between different function calls.
*   **Supporting Recursion:** The LIFO nature of the stack allows recursive functions to work by pausing previous calls and resuming them in reverse order as each nested call completes.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/4- Selection Sort|Selection Sort]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/6- Merge Sort|Merge Sort]]
