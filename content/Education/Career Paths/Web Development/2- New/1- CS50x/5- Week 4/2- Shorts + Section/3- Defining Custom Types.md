## Defining Custom Types - CS50x Short Summary

### The Need for `typedef`

When working with `struct` in C, you might find it cumbersome to repeatedly type the `struct` keyword before the structure's name (e.g., `struct car mycar;`). This can make code longer and less convenient, especially when compared to built-in types like `int` or `char`.

Fortunately, C provides the `typedef` keyword, which allows you to create aliases (shorthand or rewritten names) for existing data types or for custom data types you define. This makes your code cleaner and more readable.

### How `typedef` Works

The basic syntax for `typedef` is:

```c
typedef old_name new_name;
```

Here, `old_name` is the existing type (or the type definition you are aliasing), and `new_name` is the new, shorter name you want to use for that type.

**Examples of `typedef` for existing types:**

- You can `typedef` `unsigned char` as `byte`:

  ```c
  typedef unsigned char byte;
  ```

  After this definition (typically placed at the top of your `.c` files or in a `.h` header file), you can simply use `byte` wherever you would have used `unsigned char`.

- In CS50's library, `char *` (a pointer to a character, which represents a string) is `typedef`'d as `string`:

  ```c
  typedef char *string;
  ```

  This abstraction simplifies working with strings, as you no longer need to explicitly deal with `char *`.

### `typedef` with Structures

`typedef` is particularly useful when combined with structures, as structures often have two-word type names (`struct SomeStruct`). Using `typedef` can significantly shorten the declaration of variables of that structure type.

**Method 1: Defining the struct first, then `typedef`ing it:**

```c
// 1. Define the structure
struct car
{
    // fields of the car struct
    int year;
    char *model;
};

// 2. Then typedef the struct
typedef struct car car_t;

// Now you can use car_t
car_t mycar;
```

**Method 2: Defining and `typedef`ing the struct in one go (more common):**

This method allows you to define the structure and create its alias simultaneously. The `typedef` keyword is placed at the beginning, and the new name is placed after the closing curly brace of the structure definition.

```c
typedef struct
{
    // fields of the car struct
    int year;
    char *model;
} car_t;

// Now you can use car_t
car_t mycar;
```

In this combined approach, the `struct` itself doesn't necessarily need a tag name (like `car` in `struct car`), as you will primarily refer to it using the `car_t` alias. This makes the code much more concise and readable, especially as you start using structures more frequently in your programs.

### Conclusion

`typedef` is a powerful tool in C for creating aliases for data types, making code more readable and convenient. It is especially beneficial when working with structures, allowing for shorter and more intuitive variable declarations. By using `typedef`, you can improve the clarity and maintainability of your C programs.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/2- Pointers|2- Pointers]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/4- Dynamic Memory Allocation|4- Dynamic Memory Allocation]]
