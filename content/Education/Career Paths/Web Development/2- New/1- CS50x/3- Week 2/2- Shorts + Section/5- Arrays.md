# CS50x Short: Arrays

This short introduces arrays as a fundamental data structure in programming, explaining their purpose, structure, and how they are used in C.

## What are Arrays?

Arrays are used to store collections of values of the same data type in contiguous memory locations. They provide an efficient way to manage multiple related variables without needing to declare a separate name for each one. This is particularly useful when dealing with a large number of values.

### Analogy: Post Office Boxes

To understand arrays, consider the analogy of a post office with a large bank of post office boxes:

*   **Array as a Mail Bank**: An array is like a giant block of contiguous memory, similar to a large space on the wall of a post office.
*   **Elements as PO Boxes**: This block of memory is partitioned into small, identically sized blocks called "elements," just as the post office wall is divided into individual PO boxes.
*   **Storing Data**: Each element of an array can store a certain amount of data, similar to how each PO box can hold a certain amount of mail.
*   **Same Data Type**: All elements within an array must be of the same data type (e.g., all integers, all characters), just as a PO box typically holds items of a similar type (letters, small packages).
*   **Access by Index**: Each element of the array can be accessed directly by an index number, analogous to accessing a PO box by its mailbox number.

## Array Indexing

In C, array elements are indexed starting from **0**, not 1. This is a common convention in computer science and is a key reason why programmers often "count from zero."

*   If an array has `n` elements:
    *   The first element is at index `0`.
    *   The last element is at index `n - 1`.

For example, if an array has 50 elements, the first element is at index 0, and the last element is at index 49.

### Out-of-Bounds Access

C is lenient and will not prevent you from accessing memory outside the declared bounds of an array (e.g., trying to access the -3rd element or the 59th element of a 50-element array). While this might not cause a compilation error, it can lead to a "segmentation fault" at runtime, which means your program is trying to access memory it doesn't own. Therefore, it's crucial to be careful and ensure you stay within the array's defined boundaries.

## Array Declarations

Declaring an array in C involves three main parts:

```c
type name[size];
```

*   **`type`**: Specifies the data type of each element in the array (e.g., `int`, `char`, `float`, `double`).
*   **`name`**: The name you choose for your array.
*   **`size`**: The number of elements the array will contain, enclosed in square brackets `[]`.

### Examples of Array Declarations:

*   **An array of 40 integers for student grades:**
    ```c
    int student_grades[40];
    ```

*   **An array of 8 doubles for menu prices:**
    ```c
    double menu_prices[8];
    ```

## Array Initialization

Arrays can be initialized at the time of declaration using a special syntax:

```c
bool truthtable[3] = { false, true, true };
```

Alternatively, you can let the compiler determine the size based on the number of initializers:

```c
bool truthtable[] = { false, true, true };
```

Individual elements can also be assigned values after declaration:

```c
bool truthtable[3];
truthtable[0] = false;
truthtable[1] = true;
truthtable[2] = true;
```

## Multi-dimensional Arrays

Arrays can have more than one dimension, allowing for more complex data structures like grids or matrices. For example, a 10x10 grid for a battleship game board:

```c
bool battleship[10][10];
```

While conceptually a 2D grid, in memory, it's typically stored as a single, contiguous block of 100 elements.

## Array Operations and Pass by Reference

While individual elements of an array can be treated like regular variables, entire arrays cannot be assigned using the assignment operator (`=`). For example, `bar = foo;` is not legal in C for arrays. Instead, you must copy elements one by one, typically using a loop:

```c
int foo[5] = { 1, 2, 3, 4, 5 };
int bar[5];

for (int j = 0; j < 5; j++)
{
    bar[j] = foo[j];
}
```

Unlike most variables in C, which are passed by value to functions (meaning a copy is made), arrays are passed by **reference**. This means that when an array is passed to a function, the function receives the actual array in memory, not a copy. Therefore, any modifications made to the array within the function will affect the original array in the calling function.

Consider the following:

```c
void set_array(int array[4]);
void set_int(int x);

int main(void)
{
    int a = 10;
    int b[4] = { 0, 1, 2, 3 };

    set_int(a);    // Passes a copy of 'a'
    set_array(b);  // Passes 'b' by reference

    printf("%d %d\n", a, b[0]);
}

void set_array(int array[4])
{
    array[0] = 22; // Modifies the original array 'b'
}

void set_int(int x)
{
    x = 22;        // Modifies only the local copy of 'x'
}
```

In this example, `set_int(a)` will not change `a` in `main` (it will remain 10), but `set_array(b)` will change the first element of `b` to 22. The output will be `10 22`.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/4- Debugging (Step Through)|CS50x Short: Debugging (Step Through)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/2- Shorts + Section/6- Command Line Arguments|CS50x Short: Command Line Arguments]]
