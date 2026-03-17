# CS50x Short: Debugging (Step Through)

This short introduces the concept of debugging using `debug50` and the "step through" functionality to identify and fix errors in C programs.

## What is Debugging?

Debugging is the process of finding and fixing errors (bugs) in computer programs. When a program doesn't behave as expected, a debugger can help you understand what's happening inside your code as it executes.

## Introducing `debug50`

`debug50` is a powerful debugging tool provided in the CS50 environment. It allows you to:

*   **Set Breakpoints**: Pause your program's execution at specific lines of code.
*   **Step Through Code**: Execute your program line by line to observe its behavior.
*   **Inspect Variables**: View the current values of variables at any point during execution.

## How to Use `debug50` (Step Through)

1.  **Open your code**: Use `code your_program.c` to open your C file in the CS50 IDE.
2.  **Set a Breakpoint**: Click on the left margin next to a line number where you want your program to pause. A red circle will appear, indicating a breakpoint.
3.  **Run with `debug50`**: In the terminal, type `debug50 your_program` and press Enter. This will launch your program within the debugger.
4.  **Navigate the Debugger**: Once the program hits a breakpoint, execution will pause, and the debugger interface will become active. You'll see several controls:
    *   **Step Over (often a curved arrow icon)**: This is the primary "step through" button. It executes the current line of code and moves to the next line. If the current line calls a function, it executes the entire function without stepping into it.
    *   **Inspect Variables**: On the left panel of the debugger, you can see the current values of your program's variables. This is crucial for understanding how data changes as your program runs.





## Generic Code Example for Step Through Debugging

To understand how `debug50`'s "step through" functionality works, consider the following simple C program:

```c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;
    int sum = a + b;
    printf("The sum is: %i\n", sum);
    return 0;
}
```

**Step-by-step explanation of "Step Through" with `debug50`:**

1.  **Save the code**: Save the above code as `example.c` in your CS50 IDE.
2.  **Compile the code**: Open your terminal and compile the code using `make example`.
3.  **Set a breakpoint**: Open `example.c` in the CS50 IDE. Click on the left margin next to the line `int a = 10;` to set a breakpoint. A red circle should appear.
4.  **Run with `debug50`**: In the terminal, type `debug50 ./example` and press Enter. The program will start and immediately pause at the breakpoint you set.
5.  **Observe variables**: In the `debug50` interface (usually on the left side), you will see a section for variables. At this point, `a`, `b`, and `sum` might show garbage values or be uninitialized.
6.  **Step Over**: Click the "Step Over" button (often a curved arrow icon). The debugger will execute the line `int a = 10;`. Observe that the variable `a` in the debugger's variable pane now shows the value `10`.
7.  **Continue Stepping**: Click "Step Over" again. The line `int b = 20;` will execute, and `b` will update to `20` in the variable pane.
8.  **Calculate sum**: Click "Step Over" once more. The line `int sum = a + b;` will execute. The debugger will calculate `10 + 20` and assign `30` to `sum`. You will see `sum` update to `30` in the variable pane.
9.  **Print output**: Click "Step Over" again. The `printf` function will execute, and you will see "The sum is: 30" printed in the terminal.
10. **Program finishes**: Continue stepping until the program exits. You have now successfully stepped through the program line by line, observing the state of variables at each step.

This process demonstrates how "step through" allows you to meticulously follow the execution flow of your program and inspect its state, which is invaluable for identifying where unexpected behavior originates.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/3- Debugging (Step into)|CS50x Short: Debugging (“Step into”)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/5- Arrays|CS50x Short: Arrays]]
