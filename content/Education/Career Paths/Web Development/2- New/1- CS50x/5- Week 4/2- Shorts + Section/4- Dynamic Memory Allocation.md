## Dynamic Memory Allocation - CS50x Short Summary

### Introduction to Dynamic Memory Allocation

Dynamic memory allocation in C allows programs to request memory at runtime, rather than having all memory needs determined at compile time. This is crucial for situations where the amount of memory required is not known in advance, such as when dealing with user input that dictates data structure sizes (e.g., a user specifying the number of elements in a linked list).

This concept is deeply intertwined with pointers, as dynamically allocated memory is accessed exclusively through pointers.

### Static vs. Dynamic Memory Allocation

-   **Static Memory Allocation:** This is what we've primarily seen when declaring variables in C (e.g., `int x = 5;`). Memory for these variables is allocated on the **stack** at compile time. The size of the memory needed must be known when the program is compiled. If you declare a pointer and point it to an existing variable, that's still static pointer usage.

-   **Dynamic Memory Allocation:** This involves allocating memory from the **heap** while the program is running. The heap is a large pool of available memory. Unlike the stack, which typically grows upwards (from lower memory addresses to higher), the heap often grows downwards (from higher memory addresses to lower). Both the stack and the heap are part of the same overall memory space.

### The `malloc` Function

To dynamically allocate memory from the heap, we use the `malloc` function, which is part of the `stdlib.h` library. `malloc` takes one argument: the number of bytes of memory you want to allocate.

```c
#include <stdlib.h>

// Allocate 4 bytes for an integer
int *p = malloc(4);

// Allocate enough bytes for an integer (more robust)
int *q = malloc(sizeof(int));
```

`malloc` attempts to find a contiguous block of memory of the requested size on the heap. If successful, it returns a `void*` pointer to the beginning of that allocated memory block. This `void*` pointer can then be cast to the appropriate data type (e.g., `int*`, `char*`, `double*`).

**Important Considerations with `malloc`:**

1.  **Return Value Check:** `malloc` can fail (e.g., if there's not enough memory available). In such cases, `malloc` returns `NULL`. It is **critical** to always check if the returned pointer is `NULL` after calling `malloc` to prevent dereferencing a `NULL` pointer, which would lead to a segmentation fault and program crash.

    ```c
    int *p = malloc(sizeof(int));
    if (p == NULL)
    {
        // Handle error, perhaps exit the program
        return 1;
    }
    // Proceed with using p
    ```

2.  **`sizeof` Operator:** Instead of hardcoding the number of bytes (e.g., `malloc(4)` for an `int`), it's best practice to use the `sizeof` operator (e.g., `malloc(sizeof(int))`). This makes your code more portable and robust, as the size of data types can vary across different systems.

    ```c
    int *p = malloc(sizeof(int));
    char *c = malloc(sizeof(char));
    double *d = malloc(sizeof(double));
    ```

3.  **Accessing Allocated Memory:** Once memory is allocated, you access it using the dereference operator (`*`) with the pointer returned by `malloc`.

    ```c
    int *p = malloc(sizeof(int));
    if (p != NULL)
    {
        *p = 10; // Store the value 10 in the allocated memory
        printf("%i\n", *p); // Print the value
    }
    ```

### The `free` Function

Dynamically allocated memory on the heap is not automatically deallocated when the function that allocated it returns. If you don't explicitly `free` this memory, it leads to a **memory leak**, where your program consumes more and more memory over time, potentially leading to system instability or crashes.

To release dynamically allocated memory back to the heap, use the `free` function, passing it the pointer that `malloc` returned.

```c
// After you are done using the dynamically allocated memory
free(p);

// It's good practice to set the pointer to NULL after freeing
p = NULL;
```

**Important Considerations with `free`:**

-   **Free only `malloc`'d memory:** Only call `free` on pointers that were returned by `malloc` (or `calloc`, `realloc`). Freeing memory that was not dynamically allocated can lead to undefined behavior.
-   **Free once:** Do not free the same memory block multiple times. This is also undefined behavior.
-   **Dangling Pointers:** After calling `free(p)`, the pointer `p` still holds the memory address, but that memory is no longer valid for your program to use. This is called a dangling pointer. It's good practice to set the pointer to `NULL` immediately after freeing it (`p = NULL;`) to prevent accidental dereferencing of invalid memory.

### `calloc` and `realloc`

-   **`calloc`:** Similar to `malloc`, but it takes two arguments: the number of elements and the size of each element. It also initializes the allocated memory to all zeros.

    ```c
    int *arr = calloc(10, sizeof(int)); // Allocates space for 10 integers, all initialized to 0
    ```

-   **`realloc`:** Used to resize a previously allocated block of memory. It takes the original pointer and the new size in bytes. It returns a pointer to the new (possibly moved) memory block.

    ```c
    int *p = malloc(sizeof(int));
    // ... use p ...
    p = realloc(p, 2 * sizeof(int)); // Resize to hold two integers
    ```

### Conclusion

Dynamic memory allocation is a powerful feature in C that provides flexibility in managing memory. However, it comes with the responsibility of careful memory management. Always remember to:

1.  **`malloc`** memory when needed.
2.  **Check for `NULL`** after `malloc`.
3.  **`free`** memory when it's no longer needed to prevent memory leaks.
4.  Set freed pointers to **`NULL`** to avoid dangling pointers.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/3- Defining Custom Types|3- Defining Custom Types]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/5- Call Stacks|5- Call Stacks]]
