# Lecture 1 - CS50x 2025

## Table of Contents

* [Welcome!](#welcome)
* [Visual Studio Code for CS50](#visual-studio-code-for-cs50)
* [Hello World](#hello-world)
* [From Scratch to C](#from-scratch-to-c)
* [Header Files and CS50 Manual Pages](#header-files-and-cs50-manual-pages)
* [Hello, You](#hello-you)
* [Types](#types)
* [Conditionals](#conditionals)
* [Operators](#operators)
* [Variables](#variables)
* [compare.c](#comparec)
* [agree.c](#agreec)
* [Loops and cat.c](#loops-and-catc)
* [Functions](#functions)
* [Correctness, Design, Style](#correctness-design-style)
* [Mario](#mario)
* [Comments](#comments)
* [More About Operators](#more-about-operators)
* [Truncation](#truncation)
* [Summing Up](#summing-up)

## Welcome!

* In our previous session, we learned about Scratch, a visual programming language.
* Indeed, all the essential programming concepts presented in Scratch will be utilized as you learn how to program any programming language. Functions, conditionals, loops, and variables found in Scratch are fundamental building blocks that you will find in any programming language.
* Recall that machines only understand binary. Where humans write _source code_, a list of instructions for the computer that is human readable, machines only understand what we can now call _machine code_. This machine code is a pattern of ones and zeros that produces a desired effect.
* It turns out that we can convert _source code_ into machine code using a very special piece of software called a _compiler_. Today, we will be introducing you to a compiler that will allow you to convert source code in the programming language _C_ into machine code.
* Today, in addition to learning how to program, you will be learning how to write good code.

## Visual Studio Code for CS50

* The integrated development environment (IDE) that is utilized for this course is _Visual Studio Code_, affectionately referred to as VS Code, which can be accessed via that same URL or simply as VS Code.
* One of the most important reasons we utilize VS Code is that it has all the software required for the course already pre-loaded on it. This course and the instructions herein were designed with VS Code in mind.
* Manually installing the necessary software for the course on your own computer is a cumbersome headache. Best always to utilize VS Code for assignments in this course.
* You can open VS Code at [cs50.dev](https://cs50.dev).
* The compiler can be divided into a number of regions:
    
    ![VS Code Screenshot](https://private-us-east-1.manuscdn.com/sessionFile/oQGW8tFgddLlZfbWwuNws5/sandbox/PBt6HJTQckrGLJkpjAoGfm-images_1745149306543_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL3ZzY29kZV9zY3JlZW5zaG90.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1FHVzh0RmdkZExsWmZiV3d1TndzNS9zYW5kYm94L1BCdDZISlRRY2tyR0xKa3BqQW9HZm0taW1hZ2VzXzE3NDUxNDkzMDY1NDNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMM1p6WTI5a1pWOXpZM0psWlc1emFHOTAucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qrQzwfECvFQLfD2FZKIw9hz6xDqXiWfZ38osTPsM6jPqO8m0MDfaLpoTSO8KmvLYCmC47rHOEJA2wg~Q4BakTD~6hyLHh7GTURpuGz6G8fI~p7lNkxgU~MKRwThfGMbQ~DVuPPYAQ-6sDQ4RSAJsBJyc~OLMlmeLcprc9DB1FkluBn9nzhL6jxKmyiMjEzpw5rpTYPtIZCk2eKQsdXTjtRqV7~iWpJLMl8Bqs4V8W1moPh30G~HzK0FkNv-AKIyndQLPKlkStKXCU9mEitQWdp2NjTNunGAHxRF4xvvOw-gkfqfvEPRaRsUu4o58c4Y4k-r3IXqMi~GNjQkZV14kyQ__)
    
    Notice that there is a _file explorer_ on the left side where you can find your files. Further, notice that there is a region in the middle called a _text editor_ where you can edit your program. Finally, there is a `command line interface`, known as a _CLI_, _command line_, or _terminal window_, where we can send commands to the computer in the cloud.
    
* In the terminal window, some common command-line arguments we may use include:
    * `cd`, for changing our current directory (folder)
    * `cp`, for copying files and directories
    * `ls`, for listing files in a directory
    * `mkdir`, for making a directory
    * `mv`, for moving (renaming) files and directories
    * `rm`, for removing (deleting) files
    * `rmdir`, for removing (deleting) directories
* The most commonly used is `ls` which will list all the files in the current directory or directory. Go ahead and type `ls` into the terminal window and hit `enter`. You'll see all the files in the current folder.
* Because this IDE is preconfigured with all the necessary software, you should use it to complete all assignments for this course.

## Hello World

* We will be using three commands to write, compile, and run our first program:
    
    ```
    code hello.c
    
    make hello
    
    ./hello
    ```
    
    The first command, `code hello.c` creates a file and allows us to type instructions for this program. The second command, `make hello`, _compiles_ the file from our instructions in C and creates an executable file called `hello`. The last command, `./hello`, runs the program called `hello`.
    
* We can build your first program in C by typing `code hello.c` into the terminal window. Notice that we deliberately lowercased the entire filename and included the `.c` extension. Then, in the text editor that appears, write code as follows:
    
    ```c
    // A program that says hello to the world
    
    #include <stdio.h>
    
    int main(void)
    {
        printf("hello, world\n");
    }
    ```
    
    Note that every single character above serves a purpose. If you type it incorrectly, the program will not run. `printf` is a function that can output a line of text. Notice the placement of the quotes and the semicolon. Further, notice that the `\n` creates a new line after the words `hello, world`.
    
* Clicking back in the terminal window, you can compile your code by executing `make hello`. Notice that we are omitting `.c`. `make` is a compiler that will look for our `hello.c` file and turn it into a program called `hello`. If executing this command results in no errors, you can proceed. If not, double-check your code to ensure it matches the above.
* Now, type `./hello` and your program will execute saying `hello, world`.
* Now, open the file explorer on the left. You will notice that there is now both a file called `hello.c` and another file called `hello`. `hello.c` is able to be read by the compiler: It's where your code is stored. `hello` is an executable file that you can run but cannot be read by the compiler.

## From Scratch to C

* In Scratch, we utilized the `say` block to display any text on the screen. Indeed, in C, we have a function called `printf` that does exactly this.
* Notice our code already invokes this function:
    
    ```c
    printf("hello, world\n");
    ```
    
    Notice that the printf function is called. The argument passed to printf is `hello, world\n`. The statement of code is closed with a `;`.
    
* Errors in code are common. Modify your code as follows:
    
    ```c
    // \n is missing
    
    #include <stdio.h>
    
    int main(void)
    {
        printf("hello, world");
    }
    ```
    
    Notice the `\n` is now gone.
    
* In your terminal window, run `make hello`. Typing `./hello` in the terminal window, how did your program change? This `\` character is called an _escape character_ that tells the compiler that `\n` is a special instruction to create a line break.
* There are other escape characters you can use:
    
    ```
    \n  create a new line
    \r  return to the start of a line
    \"  print a double quote
    \`  print a single quote
    \\  print a backslash
    ```
    
* Restore your program to the following:
    
    ```c
    // A program that says hello to the world
    
    #include <stdio.h>
    
    int main(void)
    {
        printf("hello, world\n");
    }
    ```
    
    Notice the semicolon and `\n` have been restored.
    

## Header Files and CS50 Manual Pages

* The statement at the start of the code `#include <stdio.h>` is a very special command that tells the compile that you want to use the capabilities of a _library_ called `stdio.h`, a _header file_. This allows you, among many other things, to utilize the `printf` function.
* A _library_ is a collection of code created by someone. Libraries are collections of pre-written code and functions that others have written in the past that we can utilize.
* CS50 has its own library called `cs50.h`. Let's utilize this library in your code.
* Modify your code as follows:
    
    ```c
    // A program that says hello to the world
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        printf("hello, world\n");
    }
    ```
    
    Notice how we are including another library called `cs50.h`.
    
* You can read about the CS50 library at [Manual Pages](https://manual.cs50.io/).
* The CS50 library provides you with new functions like `get_string` and other functions that we'll soon see.

## Hello, You

* We can modify our code to not just say `hello, world` but to say hello to a specific person.
* Modify your code as follows:
    
    ```c
    // A program that says hello to someone by name
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        string name = get_string("What's your name? ");
        printf("hello, %s\n", name);
    }
    ```
    
    Notice how we declare a variable called `name` of type `string`. A value is assigned to this variable using the `get_string` function. The user is prompted with `What's your name?` The value returned by `get_string` is stored in the variable `name`. Finally, the `printf` function is utilized to print `hello,` followed by the value of `name`. The `%s` is a placeholder for the variable that will be printed.
    
* Running `make hello` in the terminal window, you will be prompted with `What's your name?` You can type your name, such as `David`. You'll see that the program responds with `hello, David`.
* Notice how we use `%s` as a placeholder for the value of the string `name`. `%s` tells the `printf` function to substitute a string there.

## Types

* Data types are an essential building block of any programming language.
* In C, there are many data types, including:
    * `bool`, a Boolean expression of either `true` or `false`
    * `char`, a single character like `a` or `2`
    * `double`, a floating-point value with more digits than a `float`
    * `float`, a floating-point value, or real number with a decimal value
    * `int`, integers up to a certain size, or number of bits
    * `long`, integers with more bits, so they can count higher than an `int`
    * `string`, a string of characters
* You might wonder why we have these various data types. Your computer has a finite amount of memory. As a result, your computer needs to be efficient in how it utilizes this resource. Accordingly, it's wasteful to utilize more memory than needed for a specific task.
* The CS50 library has its own data types that simplify those above. The CS50 library simplifies these to:
    * `string`: a string of text
    * `int`: an integer
    * `long`: a larger integer
    * `float`: a floating-point value
    * `double`: a floating-point value with more digits than a float
    * `char`: a single character
    * `bool`: a Boolean expression of either true or false
* You can check the CS50 Manual Pages to learn more about the available functions in the CS50 library.

## Conditionals

* Another building block of programming is the ability to make decisions. In Scratch, we had the `if` block. In C, we have similar capabilities.
* In your terminal window, type `code compare.c` and write code as follows:
    
    ```c
    // Conditionals, Boolean expressions, relational operators
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user for integers
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");
    
        // Compare integers
        if (x < y)
        {
            printf("x is less than y\n");
        }
        else if (x > y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }
    ```
    
    Notice that we use `get_int` to obtain an integer from the user. We then use a familiar pattern of `if`, `else if`, and `else` to make decisions.
    
* The `if` statement evaluates the expression inside the parentheses. If the expression is true, the code inside the curly braces is executed. If the expression is false, the code inside the curly braces is skipped.
* The `else if` statement is executed if the `if` statement is false. It evaluates the expression inside the parentheses. If the expression is true, the code inside the curly braces is executed. If the expression is false, the code inside the curly braces is skipped.
* The `else` statement is executed if both the `if` and `else if` statements are false. The code inside the curly braces is executed.

## Operators

* _Operators_ are mathematical operations that allow us to manipulate values in our code. The following relational operators are available to us in C:
    * `<`: less than
    * `<=`: less than or equal to
    * `>`: greater than
    * `>=`: greater than or equal to
    * `==`: equal to
    * `!=`: not equal to
* Notice that `=` is the assignment operator, where a value on the right is assigned to a variable on the left. `==` is the equality operator, which checks if the value on the left is equal to the value on the right.
* Logical operators allow us to combine multiple expressions:
    * `&&`: logical AND, which is only true if both expressions are true
    * `||`: logical OR, which is true if at least one expression is true
    * `!`: logical NOT, which inverts the value of the expression

## Variables

* In C, there are various types of variables:
    * `int`: integers
    * `long`: larger integers
    * `float`: floating-point values
    * `double`: larger floating-point values
    * `char`: characters
    * `string`: strings
    * `bool`: Boolean values
* To declare a variable, you need to specify the data type followed by the variable name:
    
    ```c
    int number;
    ```
    
* You can also initialize a variable when you declare it:
    
    ```c
    int number = 5;
    ```
    
* Variables allow us to store and manipulate data in our programs.

## compare.c

* Let's look at a program that compares two integers:
    
    ```c
    // Conditionals, Boolean expressions, relational operators
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user for integers
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");
    
        // Compare integers
        if (x < y)
        {
            printf("x is less than y\n");
        }
        else if (x > y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }
    ```
    
    This program prompts the user for two integers and then compares them using conditional statements.
    
* The program uses the `get_int` function from the CS50 library to get input from the user.
* It then uses conditional statements to compare the values of `x` and `y` and prints an appropriate message.

## agree.c

* Let's look at a program that asks the user to agree or disagree:
    
    ```c
    // Logical operators
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user to agree
        char c = get_char("Do you agree? ");
    
        // Check whether agreed
        if (c == 'Y' || c == 'y')
        {
            printf("Agreed.\n");
        }
        else if (c == 'N' || c == 'n')
        {
            printf("Not agreed.\n");
        }
    }
    ```
    
    This program prompts the user to agree or disagree by entering 'Y'/'y' or 'N'/'n'.
    
* The program uses the `get_char` function to get a single character from the user.
* It then uses conditional statements with logical operators to check if the user agreed or disagreed.
* The `||` operator is the logical OR operator, which returns true if either of the expressions is true.

## Loops and cat.c

* Loops allow us to repeat code multiple times. In C, we have several types of loops:
    * `while` loop: repeats code as long as a condition is true
    * `do-while` loop: repeats code at least once and then as long as a condition is true
    * `for` loop: repeats code a specific number of times
* Let's look at a program that meows like a cat:
    
    ```c
    // Demonstrates while loop
    
    #include <stdio.h>
    
    int main(void)
    {
        int i = 0;
        while (i < 3)
        {
            printf("meow\n");
            i++;
        }
    }
    ```
    
    This program uses a `while` loop to print "meow" three times.
    
* We can also use a `for` loop to achieve the same result:
    
    ```c
    // Demonstrates for loop
    
    #include <stdio.h>
    
    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            printf("meow\n");
        }
    }
    ```
    
    The `for` loop has three parts: initialization, condition, and increment. The loop continues as long as the condition is true.
    
* We can also use a `do-while` loop:
    
    ```c
    // Demonstrates do-while loop
    
    #include <stdio.h>
    
    int main(void)
    {
        int i = 0;
        do
        {
            printf("meow\n");
            i++;
        }
        while (i < 3);
    }
    ```
    
    The `do-while` loop executes the code at least once and then checks the condition.

## Functions

* Functions are reusable blocks of code that perform a specific task. They help us organize our code and avoid repetition.
* In C, a function has the following syntax:
    
    ```c
    return_type function_name(parameter_list)
    {
        // function body
    }
    ```
    
* Let's look at a program that uses a function to meow:
    
    ```c
    // Demonstrates function
    
    #include <stdio.h>
    
    void meow(void)
    {
        printf("meow\n");
    }
    
    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            meow();
        }
    }
    ```
    
    This program defines a function called `meow` that prints "meow". The `main` function calls the `meow` function three times using a `for` loop.
    
* We can also create functions that take parameters:
    
    ```c
    // Demonstrates function with parameter
    
    #include <stdio.h>
    
    void meow(int n)
    {
        for (int i = 0; i < n; i++)
        {
            printf("meow\n");
        }
    }
    
    int main(void)
    {
        meow(3);
    }
    ```
    
    This program defines a function called `meow` that takes an integer parameter `n` and prints "meow" `n` times.
    
* Functions can also return values:
    
    ```c
    // Demonstrates function with return value
    
    #include <cs50.h>
    #include <stdio.h>
    
    int get_positive_int(void)
    {
        int n;
        do
        {
            n = get_int("Positive integer: ");
        }
        while (n < 1);
        return n;
    }
    
    int main(void)
    {
        int n = get_positive_int();
        printf("%i\n", n);
    }
    ```
    
    This program defines a function called `get_positive_int` that prompts the user for a positive integer and returns it.

## Correctness, Design, Style

* Code can be evaluated upon three axes:
    * First, correctness refers to "Does the code run as intended?" You can check the correctness of your code with `check50`.
    * Second, design refers to "How well is the code designed?" You can evaluate the design of your code using `design50`.
    * Finally, style refers to "How aesthetically pleasing and consistent is the code?" You can evaluate the style of your code with `style50`.

## Mario

* Everything we've discussed today has focused on various building blocks of your work as an emerging computer scientist.
* The following will help you orient toward working on a problem set for this class in general: How does one approach a computer science-related problem?
* Imagine we wanted to emulate the visual of the game Super Mario Bros. Considering the four question blocks pictured, how could we create code that roughly represents these four horizontal blocks?

    ![Mario Blocks](https://private-us-east-1.manuscdn.com/sessionFile/oQGW8tFgddLlZfbWwuNws5/sandbox/PBt6HJTQckrGLJkpjAoGfm-images_1745149306552_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL21hcmlvX2Jsb2Nrcw.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1FHVzh0RmdkZExsWmZiV3d1TndzNS9zYW5kYm94L1BCdDZISlRRY2tyR0xKa3BqQW9HZm0taW1hZ2VzXzE3NDUxNDkzMDY1NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMjFoY21sdlgySnNiMk5yY3cucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=umm2x7xP4J1uH6-IqajdhdquvNe5skXQUjKkc7iFj73g1~mZzOI3m6HPPGZFJDoG3SAPmYTL~iGVTxfiP11sa1DueBT5AOxczFtjI8FKiP2Kdz0YvQql0JrMTEdZsgyAKvTpw~~pTSXhN87wtUkcPuoxH~qGcknUsOyVI6E-0t~2P0iuXORVdwaXaS0Nto83PBjZvZaCu8sCDbdoJXI98kSCBdGqmMKqwqDBBz5KVELTSnmzOYMBCnS8-Km1Ui2nu0-BgPQczfEciekgAUMh6Cr7CcjJfIAtQc5-OZ7wD4AducqDjBzNt0-lUT21etTeoS-0pojXa0kP1pivIbUPQg__)

* In the terminal window, type `code mario.c` and code as follows:
    
    ```c
    // Prints a row of 4 question marks with a loop
    
    #include <stdio.h>
    
    int main(void)
    {
        for (int i = 0; i < 4; i++)
        {
            printf("?");
        }
        printf("\n");
    }
    ```
    
    Notice how four question marks are printed using a loop.
    
* Similarly, we can apply this same logic to create three vertical blocks:

    ![Mario Vertical Bricks](https://private-us-east-1.manuscdn.com/sessionFile/oQGW8tFgddLlZfbWwuNws5/sandbox/PBt6HJTQckrGLJkpjAoGfm-images_1745149306552_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL21hcmlvX3ZlcnRpY2FsX2JyaWNrcw.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1FHVzh0RmdkZExsWmZiV3d1TndzNS9zYW5kYm94L1BCdDZISlRRY2tyR0xKa3BqQW9HZm0taW1hZ2VzXzE3NDUxNDkzMDY1NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMjFoY21sdlgzWmxjblJwWTJGc1gySnlhV05yY3cucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Csl9vIhGkZ7tRDEdTjhvBlDKX~4YRrKSr~XBuvlnIwR5VO9L6KwtN3XhO3Ynru9PnTXJvdlYnToDuTWOW1Qxo3vanSOmzOzu-T3t0el8mKMuHplnLYcP50LxizO8UAidEv5pugFpIfP0pGfLz3A8apmoI9ga2qMYCN-Vetuw0zOtnL1GC1D2ujykEQdeblUfPK93osIl2T1IwiDfg0kc7jo5MgHR~zfgA~waYtrgZMWikkqqqMyRPKdcaSjlQlwbJQLeJkJIENkwnAs4vxfiBW~Hcg3BXDNrl4ofgAyScEvS44ZHNyjBNyUvLvX-nAew4NoPcpxdtKkfu7GHThRFtw__)

* To accomplish this, modify your code as follows:
    
    ```c
    // Prints a column of 3 bricks with a loop
    
    #include <stdio.h>
    
    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            printf("#\n");
        }
    }
    ```
    
    Notice how three vertical bricks are printed using a loop.
    
* What if we wanted to combine these ideas to create a three-by-three group of blocks?

    ![Mario Grid Bricks](https://private-us-east-1.manuscdn.com/sessionFile/oQGW8tFgddLlZfbWwuNws5/sandbox/PBt6HJTQckrGLJkpjAoGfm-images_1745149306552_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL21hcmlvX2dyaWRfYnJpY2tz.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1FHVzh0RmdkZExsWmZiV3d1TndzNS9zYW5kYm94L1BCdDZISlRRY2tyR0xKa3BqQW9HZm0taW1hZ2VzXzE3NDUxNDkzMDY1NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMjFoY21sdlgyZHlhV1JmWW5KcFkydHoucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a~SIAi3bZL0CBItyTx~lZr8L-wEAKMlOpkNfytvUHs8A-rOJw6lK8tvDwqAomJaDA1G-lDij4xbIa4PTfWt9ckuGm-CGtx~ouogE1MSzclqNcw4hNJSYPzBLt34caM9EObN1x4TxqE4WQVwOLUy2sjAqHDbE7DXRbb2BRCe6Z-3IwL777Y0ldZXKZ4F7VEZlLKK0INYQJRQtl4GrdIEokzKqMD9GGrZrIPXIKL1WbUV1GLaxO9S-q17ffgOqRMudOmoqJUeW6NCXHGY7FSiVkkZ5FS1POGYqs~sXUZxsAGevm-Li9fI2favsMwveAv5jQlwFMcMLKM1Ov9MNnd4qlg__)

* We can follow the logic above, combining the same ideas:
    
    ```c
    // Prints a 3-by-3 grid of bricks with nested loops
    
    #include <stdio.h>
    
    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
    ```
    
    Notice that one loop is inside another. The first loop defines what vertical row is being printed. For each row, three columns are printed. After each row, a new line is printed.
    
* What if we wanted to ensure that the number of blocks is constant, that is, unchangeable? Modify your code as follows:
    
    ```c
    // Prints a 3-by-3 grid of bricks with nested loops using a constant
    
    #include <stdio.h>
    
    int main(void)
    {
        const int n = 3;
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }
    ```
    
    Notice how `n` is now a constant. It can never be changed.
    
* As illustrated earlier in this lecture, we can abstract away functionality into functions:
    
    ```c
    // Helper function
    
    #include <stdio.h>
    
    void print_row(int width);
    
    int main(void)
    {
        const int n = 3;
        for (int i = 0; i < n; i++)
        {
            print_row(n);
        }
    }
    
    void print_row(int width)
    {
        for (int i = 0; i < width; i++)
        {
            printf("#");
        }
        printf("\n");
    }
    ```
    
    Notice how printing a row is accomplished through a new function.

## Comments

* Comments are fundamental parts of a computer program, where you leave explanatory remarks to yourself and others who may be collaborating with you regarding your code.
* All code you create for this course must include robust comments.
* Typically, each comment is a few words or more, providing the reader an opportunity to understand what is happening in a specific block of code. Further, such comments serve as a reminder for you later when you need to revise your code.
* Comments involve placing `//` into your code, followed by a comment. Modify your code as follows to integrate comments:
    
    ```c
    // Helper function
    
    #include <stdio.h>
    
    void print_row(int width);
    
    int main(void)
    {
        const int n = 3;
        
        // Print n rows
        for (int i = 0; i < n; i++)
        {
            print_row(n);
        }
    }
    
    void print_row(int width)
    {
        for (int i = 0; i < width; i++)
        {
            printf("#");
        }
        printf("\n");
    }
    ```
    
    Notice how each comment begins with `//`.

## More About Operators

* You can implement a calculator in C. In your terminal, type `code calculator.c` and write code as follows:
    
    ```c
    // Addition with int
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user for x
        int x = get_int("x: ");
    
        // Prompt user for y
        int y = get_int("y: ");
    
        // Add numbers
        int z = x + y;
    
        // Perform addition
        printf("%i\n", z);
    }
    ```
    
    Notice how the `get_int` function is utilized to obtain an integer from the user twice. One integer is stored in the `int` variable called `x`. Another is stored in the `int` variable called `y`. The sum is stored in the `int` variable called `z`. Then, the `printf` function prints the value of `z`, designated by the `%i` symbol.
    
* We can also double a number:
    
    ```c
    // int
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        int dollars = 1;
        while (true)
        {
            char c = get_char("Here's $%i. Double it and give to next person? ", dollars);
            if (c == 'y')
            {
                dollars *= 2;
            }
            else
            {
                break;
            }
        }
        printf("Here's $%i.\n", dollars);
    }
    ```
    
    Running this program, some seeming errors appear in `dollars`. Why is this?
    
* One of C's shortcomings is the ease by which it manages memory. While C provides you immense control over how memory is utilized, programmers have to be very aware of the potential pitfalls of memory management.
* Types refer to the possible data that can be stored within a variable. For example, a `char` is designed to accommodate a single character like `a` or `2`.
* Types are very important because each type has specific limits. For example, because of the limits in memory, the highest value of an `int` can be `4294967295`. If you attempt to count an `int` higher, an integer overflow will result where an incorrect value will be stored in this variable.
* The number of bits limits how high and low we can count.
* This can have catastrophic, real-world impacts.
* We can correct this by using a data type called `long`.
    
    ```c
    // long
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        long dollars = 1;
        while (true)
        {
            char c = get_char("Here's $%li. Double it and give to next person? ", dollars);
            if (c == 'y')
            {
                dollars *= 2;
            }
            else
            {
                break;
            }
        }
        printf("Here's $%li.\n", dollars);
    }
    ```
    
    Notice how running this code will allow for much larger values.
    
* Types with which you might interact during this course include:
    * `bool`, a Boolean expression of either `true` or `false`
    * `char`, a single character like `a` or `2`
    * `double`, a floating-point value with more digits than a `float`
    * `float`, a floating-point value, or a real number with a decimal value
    * `int`, integers up to a certain size, or number of bits
    * `long`, integers with more bits, so they can count higher than an `int`
    * `string`, a string of characters

## Truncation

* Another issue that can arise when using data types includes truncation.
* In your terminal window, type `code truncation.c` and write code as follows:
    
    ```c
    // Division with ints, demonstrating truncation
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user for x
        int x = get_int("x: ");
    
        // Prompt user for y
        int y = get_int("y: ");
    
        // Divide x by y
        printf("%i\n", x / y);
    }
    ```
    
    An integer divided by an integer will always result in an integer in C. Accordingly, the above code will throw away the decimal value.
    
* This can be solved by using a `float`:
    
    ```c
    // Floats
    
    #include <cs50.h>
    #include <stdio.h>
    
    int main(void)
    {
        // Prompt user for x
        float x = get_float("x: ");
    
        // Prompt user for y
        float y = get_float("y: ");
    
        // Divide x by y
        printf("%.2f\n", x / y);
    }
    ```
    
    Notice that the `%f` is utilized to designate a floating-point value. The `.2` tells the compiler to only display two digits after the decimal point.

## Summing Up

In this lesson, you learned how to apply the building blocks you learned in Scratch to the C programming language. You learned...

* How to create your first program in C.
* How to use the command line.
* About predefined functions that come natively with C.
* How to use variables, conditionals, and loops.
* How to create your own functions to simplify and improve your code.
* How to evaluate your code on three axes: correctness, design, and style.
* How to integrate comments into your code.
* How to utilize types and operators and the implications of your choices.

See you next time!

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/1- Week 0/0- Week 0 Notes|Lecture 0 - CS50x 2025]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/1- Data Types|Data Types]]
