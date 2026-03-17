# CS50x Short: Command Line Arguments

This short explains how to use command-line arguments in C programs, allowing users to provide input to a program at runtime, before the program fully begins execution.

## Introduction to Command-Line Arguments

Traditionally, programs in CS50 have often collected user input through in-program prompts (e.g., using `get_int` or `get_float`). This means the `main` function is typically declared as `int main(void)`. However, there are situations where it's more convenient or necessary for users to provide data to the program directly when they execute it from the command line.

Command-line arguments enable this functionality, offering a subtle but useful distinction from in-program prompts.

## Modifying `main()` for Command-Line Arguments

To allow your C program to accept command-line arguments, you need to modify the declaration of your `main` function from `int main(void)` to:

```c
int main(int argc, string argv[])
{
    // ... program logic ...
}
```

This new declaration introduces two special parameters to `main`:

1.  `int argc`: Stands for "argument count." This integer variable stores the number of command-line arguments provided by the user when the program was executed.
2.  `string argv[]`: Stands for "argument vector." This is an array of strings (or `char*` in standard C) that stores the actual text typed by the user at the command line, with one string per element.

While `argc` and `argv` are conventional names, you could technically name them anything you want, but it's best practice to stick to these conventions for readability and understanding.

## Understanding `argc`

`argc` provides the count of arguments. It's important to note that the program's name itself is considered the first command-line argument.

*   **Example 1**: If you run your program as `./greedy`
    *   `argc` will be `1` (the program name itself).

*   **Example 2**: If you run your program as `./greedy 1024 CS50`
    *   `argc` will be `3`.

The arguments are separated by whitespace (spaces, tabs, etc.). Any amount of whitespace between values indicates a new argument.

## Understanding `argv`

`argv` is an array of strings, where each element holds one of the command-line arguments. As with any C array, indexing starts from `0`.

*   **`argv[0]`**: This element will always contain the name of the program that was executed.
*   **`argv[argc - 1]`**: This element will always contain the last command-line argument provided by the user.

Let's use the example `./greedy 1024 CS50`:

*   `argc` would be `3`.
*   `argv` would be an array structured as follows:
    *   `argv[0]` would be the string `"./greedy"`
    *   `argv[1]` would be the string `"1024"`
    *   `argv[2]` would be the string `"CS50"`

There is no `argv[3]` in this case because the array has `argc` (3) elements, indexed from `0` to `argc - 1` (0 to 2).

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/5- Arrays|CS50x Short: Arrays]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/Section 2-  Arrays, Command Line Arguments, and String|CS50x Section 2: Arrays, Command Line Arguments, and Strings]]
