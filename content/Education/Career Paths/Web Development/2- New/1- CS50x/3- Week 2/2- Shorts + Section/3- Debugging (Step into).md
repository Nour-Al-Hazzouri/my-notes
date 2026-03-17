# CS50x Short: Debugging (“Step into”)

This short builds on the previous debugging lesson by introducing the "step into" functionality of `debug50`, which is essential for debugging programs with functions.

## The Need for "Step Into"

Sometimes, the bug in your program isn't in the `main` function itself but within a function that `main` calls. In such cases, simply "stepping over" the function call won't reveal the problem because the debugger will execute the entire function without showing you the internal steps.

This is where "step into" becomes crucial. It allows you to dive into the function's code and examine its execution line by line.

## How to Use "Step Into"

1.  **Set a Breakpoint**: As before, set a breakpoint on the line where you call the function you want to investigate.
2.  **Run with `debug50`**: Start your program with `debug50`.
3.  **Step Into the Function**: When the debugger pauses at the function call, instead of using the "step over" button, use the "step into" button (often a downward-pointing arrow icon). This will take you to the first line of code inside the function.
4.  **Debug the Function**: Now you can use "step over" to execute the function's code line by line, inspect its local variables, and pinpoint the source of the bug.





## Generic Code Example for Step Into Debugging

To understand how `debug50`'s "step into" functionality works, consider the following simple C program with a function call:

```c
#include <stdio.h>

// Function to be stepped into
int multiply(int x, int y)
{
    int product = x * y;
    return product;
}

int main(void)
{
    int num1 = 5;
    int num2 = 3;
    int result = multiply(num1, num2); // Breakpoint here to step into multiply
    printf("The product is: %i\n", result);
    return 0;
}
```

**Step-by-step explanation of "Step Into" with `debug50`:**

1.  **Save the code**: Save the above code as `product.c` in your CS50 IDE.
2.  **Compile the code**: Open your terminal and compile the code using `make product`.
3.  **Set a breakpoint**: Open `product.c` in the CS50 IDE. Click on the left margin next to the line `int result = multiply(num1, num2);` to set a breakpoint. A red circle should appear.
4.  **Run with `debug50`**: In the terminal, type `debug50 ./product` and press Enter. The program will start and immediately pause at the breakpoint you set.
5.  **Observe variables**: In the `debug50` interface, you will see `num1` as `5` and `num2` as `3`.
6.  **Step Into**: Instead of "Step Over", click the "Step Into" button (often a downward-pointing arrow icon). The debugger will now move the execution point *inside* the `multiply` function, to the line `int product = x * y;`.
7.  **Inside the function**: You are now inside the `multiply` function. Observe that `x` is `5` and `y` is `3` (these are the values passed from `main`).
8.  **Step Over within function**: Click "Step Over". The line `int product = x * y;` will execute, and `product` will be initialized to `15`.
9.  **Return from function**: Click "Step Over" again. The `return product;` line will execute, and the debugger will return to the `main` function, specifically to the line `int result = multiply(num1, num2);` (or the next line, depending on the debugger's exact behavior after a return).
10. **Continue in main**: `result` will now be `15`. You can continue to "Step Over" to execute the `printf` statement and see the output.

This process demonstrates how "step into" allows you to delve into the execution of functions, which is crucial for debugging issues that originate within those functions, rather than just at the point of their call.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/2- Variables and Scope|CS50x Short: Variables and Scope]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/4- Debugging (Step Through)|CS50x Short: Debugging (Step Through)]]
