# CS50x Week 2: Arrays

📄 [[Lecture 2 - CS50x 2025.pdf]]

## Compiling

When we compile source code, the compiler goes through a series of steps:

1. **Preprocessing**: The compiler first looks for lines that start with a `#` symbol, such as `#include <stdio.h>`. The preprocessor essentially copies and pastes the contents of the included file into your program.

2. **Compiling**: The compiler converts your C code into assembly code, which is a lower-level representation of your program.

3. **Assembling**: The compiler then converts your assembly code into machine code (binary).

4. **Linking**: Finally, the compiler combines the machine code from your program with the machine code from the included libraries.

## Debugging

Everyone will make mistakes while coding. Consider the following image from last week:

Let's examine a piece of code that has a bug purposely inserted within it:

```c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i <= 3; i++)
    {
        printf("#\n");
    }
}
```

Running this code, four bricks appear instead of the intended three.

### Using Printf for Debugging

`printf` is a very useful way of debugging your code. You could modify your code as follows:

```c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i <= 3; i++)
    {
        printf("i is %i\n", i);
        printf("#\n");
    }
}
```

Running this code, you will see statements including `i is 0`, `i is 1`, `i is 2`, and `i is 3`. Seeing this, you might realize that the code needs to be corrected as follows:

```c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 3; i++)
    {
        printf("#\n");
    }
}
```

Notice the `<=` has been replaced with `<`.

### Using a Debugger

A second tool in debugging is called a debugger, a software tool created by programmers to help track down bugs in code.

In VS Code, a preconfigured debugger has been provided to you.

To utilize this debugger, first set a breakpoint by clicking to the left of a line of your code, just to the left of the line number. When you click there, you will see a red dot appearing. Imagine this as a stop sign, asking the compiler to pause such that you can consider what's happening in this part of your code.

Second, run `debug50 ./buggy0`. You will notice that after the debugger comes to life that a line of your code will illuminate in a gold-like color. Quite literally, the code has paused at this line of code. Notice in the top left corner how all local variables are being displayed, including `h`, which has a current value of does not have a value. At the top of your window, you can click the "step over" button and it will keep moving through your code. Notice how the value of `h` increases.

While this tool will not show you where your bug is, it will help you slow down and see how your code is executing step by step.

## Arrays

In Week 0, we talked about data types such as `bool`, `int`, `char`, `string`, etc.

Each data type requires a certain amount of system resources:

- `bool`: 1 byte
- `int`: 4 bytes
- `long`: 8 bytes
- `float`: 4 bytes
- `double`: 8 bytes
- `char`: 1 byte
- `string`: ? bytes

Inside of your computer, you have a finite amount of memory available.

Physically, on the memory of your computer, you can imagine how specific types of data are stored on your computer. You might imagine that a `char`, which only requires 1 byte of memory, may look as follows:

Similarly, an `int`, which requires 4 bytes might look as follows:

We can create a program that explores these concepts. Inside your terminal, type `code scores.c` and write code as follows:

```c
#include <stdio.h>

int main(void)
{
    // Scores
    int score1 = 72;
    int score2 = 73;
    int score3 = 33;

    // Print average
    printf("Average: %f\n", (score1 + score2 + score3) / 3.0);
}
```

Notice that the number on the right is a floating point value of `3.0`, such that the calculation is rendered as a floating point value in the end.

Running `make scores`, the program runs.

You can imagine how these variables are stored in memory:

Arrays are a way of storing data back-to-back in memory such that this data is easily accessible.

`int scores[3]` is a way of telling the compiler to provide you three back-to-back places in memory of size `int` to store three scores. Considering our program, you can revise your code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Get scores
    int scores[3];
    scores[0] = get_int("Score: ");
    scores[1] = get_int("Score: ");
    scores[2] = get_int("Score: ");

    // Print average
    printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / 3.0);
}
```

Notice that `score[0]` examines the value at this location of memory by indexing into the array called `scores` at location `0` to see what value is stored there.

You can see how while the above code works, there is still an opportunity for improving our code. Revise your code as follows:

```c
#include <cs50.h>
#include <stdio.h>

// Constant
const int N = 3;

// Prototype
float average(int length, int array[]);

int main(void)
{
    // Get scores
    int scores[N];
    for (int i = 0; i < N; i++)
    {
        scores[i] = get_int("Score: ");
    }

    // Print average
    printf("Average: %f\n", average(N, scores));
}

float average(int length, int array[])
{
    // Calculate average
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += array[i];
    }
    return sum / (float) length;
}
```

Notice that a new function called `average` is declared. Further, notice that a `const` or constant value of `N` is declared. Most importantly, notice how the `average` function takes `int array[]`, which means that the compiler passes an array to this function.

Not only can arrays be containers: They can be passed between functions.

## Strings

A `string` is simply an array of variables of type `char`: an array of characters.

Considering the following image, you can see how a string is an array of characters that begins with the first character and ends with a special character called a `NUL` character:

Imagining this in decimal, your array would look like the following:

Implementing this in your own code, type `code hi.c` in the terminal window and write code as follows:

```c
#include <stdio.h>

int main(void)
{
    char c1 = 'H';
    char c2 = 'I';
    char c3 = '!';

    printf("%c%c%c\n", c1, c2, c3);
}
```

Notice that this will output a string of characters.

Similarly, make the following modification to your code:

```c
#include <stdio.h>

int main(void)
{
    char c1 = 'H';
    char c2 = 'I';
    char c3 = '!';

    printf("%i %i %i\n", c1, c2, c3);
}
```

Notice that that ASCII codes are printed by replacing `%c` with `%i`.

To further understand how a string is simply an array of characters, modify your code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = "HI!";
    printf("%c%c%c\n", s[0], s[1], s[2]);
}
```

Notice how the `printf` statement presents three values from our array called `s`.

As before, we can replace `%c` with `%i` as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = "HI!";
    printf("%i %i %i %i\n", s[0], s[1], s[2], s[3]);
}
```

Notice that this prints the ASCII codes, including NULL.

Let's imagine we want to say both `HI!` and `BYE!`. Modify your code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = "HI!";
    string t = "BYE!";

    printf("%s\n", s);
    printf("%s\n", t);
}
```

Notice that two strings are declared and used in this example.

You can visualize this as follows:

We can further improve our code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string words[2];
    words[0] = "HI!";
    words[1] = "BYE!";

    printf("%s\n", words[0]);
    printf("%s\n", words[1]);
}
```

Notice that both strings are stored within a single array of type `string`.

## String Length

A common problem within programming, and perhaps C more specifically, is to discover the length of an array. How could we implement this in code? Type `code length.c` in the terminal window and write code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");

    // Count number of characters up until '\0' (aka NUL)
    int n = 0;
    while (name[n] != '\0')
    {
        n++;
    }
    printf("%i\n", n);
}
```

Notice that this code loops until the `NUL` character is found.

This code can be improved by abstracting away the counting as follows:

```c
#include <cs50.h>
#include <stdio.h>

int string_length(string s);

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");
    int length = string_length(name);
    printf("%i\n", length);
}

int string_length(string s)
{
    // Count number of characters up until '\0' (aka NUL)
    int n = 0;
    while (s[n] != '\0')
    {
        n++;
    }
    return n;
}
```

This can be further improved using the `strlen` function that comes with the `string.h` library. Modify your code as follows:

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");
    int length = strlen(name);
    printf("%i\n", length);
}
```

Notice that our code is simplified by using this built-in function.

## Uppercase

Let's say we want to convert a lowercase letter to an uppercase letter. In the terminal window type `code uppercase.c` and write code as follows:

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - 32);
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}
```

Notice that this code iterates through each value in the string and checks if it's lowercase. If it is, it subtracts the value 32 from it to convert it to uppercase.

Recalling our previous discussion of ASCII, we know that uppercase letters and lowercase letters are offset by the value 32.

We can improve this code using the `ctype.h` library. Modify your code as follows:

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (islower(s[i]))
        {
            printf("%c", toupper(s[i]));
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}
```

Notice that the code is more readable.

We can improve this code further. Modify your code as follows:

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        printf("%c", toupper(s[i]));
    }
    printf("\n");
}
```

Notice that the code is even more simplified.

## Command-Line Arguments

The `main` function has been taking `void` as its parameter these past weeks. It can also take arguments from the command line. Modify your code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
    printf("hello, %s\n", argv[1]);
}
```

Notice that `argc` and `argv` are introduced. `argc` refers to the number of command-line arguments. `argv` is an array of the characters passed as arguments at the command line.

Type `make greet` in the terminal window, followed by `./greet David`. Notice that it displays `hello, David`.

You can further modify your code to ensure that a command-line argument is provided:

```c
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
    if (argc == 2)
    {
        printf("hello, %s\n", argv[1]);
    }
    else
    {
        printf("hello, world\n");
    }
}
```

Notice that if no argument is provided (or too many arguments are provided), the program defaults to `hello, world`.

## Exit Status

When a program ends, a special exit code is provided to the computer.

When a program exits without error, a status code of `0` is provided the computer. Often, when an error occurs that results in the program ending, a status of `1` or higher is provided by the computer.

You can write a program that illustrates this by typing `code status.c` in the terminal window and writing code as follows:

```c
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Missing command-line argument\n");
        return 1;
    }
    printf("hello, %s\n", argv[1]);
    return 0;
}
```

Notice that if you fail to provide a command-line argument, the program will return a status code of `1`. Otherwise, the program will return a status code of `0`.

## Cryptography

Encryption is the process of hiding the meaning of a message. A message that is not encrypted is called plaintext. An encrypted message is called ciphertext. Encryption generally requires a key – a special piece of information that is needed to decrypt the message.

For example, if you wanted to encrypt the message `I LOVE YOU`, you might shift each letter by 1, resulting in the ciphertext `J MPWF ZPV`.

In the problem set, you'll have the opportunity to implement a cryptographic key.

## Summing Up

In this lesson, we explored arrays, strings, and command-line arguments. We also learned about debugging techniques and cryptography. These concepts are fundamental to understanding how to manipulate data in C.

Key takeaways:

- Arrays allow us to store multiple values of the same type in contiguous memory locations
- Strings in C are essentially arrays of characters terminated by a null character
- Command-line arguments provide a way to pass information to our programs when they start
- Debugging is an essential skill for any programmer
- Cryptography is the practice of securing communications

In the next lecture, we'll delve deeper into algorithms and their efficiency.

---

**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/CS50x Week 1 Section_ C|CS50x Week 1 Section: C]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/1- Functions|CS50x Short: Functions]]
