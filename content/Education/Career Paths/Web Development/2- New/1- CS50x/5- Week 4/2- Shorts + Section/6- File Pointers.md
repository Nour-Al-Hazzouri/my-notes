## File Pointers - CS50x Short Summary

### The Need for Persistent Data

Most programs you write are "ephemeral" – they run, produce some output, and then disappear, leaving no lasting trace. For example, a program that prompts for user input and prints a result to the screen will lose that information once it finishes execution or the terminal window is closed.

However, many applications require **persistent data** – information that remains available even after the program has stopped running. This is where files come in. Files allow programs to store data on a computer's file system, making it accessible for future use.

### File I/O in C

In C, working with files involves using **file pointers**. A file pointer is a special type of pointer that points to a `FILE` structure, which is defined in the `stdio.h` header file. This structure contains all the necessary information for the operating system to manage the file, such as its current position, buffer, and error indicators.

Most file I/O functions in C accept a file pointer as one of their parameters. The `stdio.h` header, which you likely already include for `printf`, contains all the necessary functions for file operations.

### Core File I/O Functions

There are six fundamental functions for file I/O that are commonly used:

1.  **`fopen`**: Opens a file and returns a file pointer. This is the only file I/O function that does not take a file pointer as an argument, as its purpose is to obtain one.
2.  **`fclose`**: Closes an opened file, releasing its resources.
3.  **`fgetc`**: Reads a single character from a file.
4.  **`fputc`**: Writes a single character to a file.
5.  **`fread`**: Reads a block of data from a file.
6.  **`fwrite`**: Writes a block of data to a file.

#### `fopen`

`fopen` is used to open a file. Its syntax is:

```c
FILE *fp = fopen("filename.txt", "mode");
```

-   `filename.txt`: The path to the file you want to open.
-   `mode`: A string indicating how you want to open the file. Common modes include:
    -   `"r"`: Read mode. Opens an existing file for reading. If the file doesn't exist, `fopen` returns `NULL`.
    -   `"w"`: Write mode. Opens a file for writing. If the file exists, its contents are truncated (deleted). If the file doesn't exist, it's created.
    -   `"a"`: Append mode. Opens a file for writing, but new data is appended to the end of the file. If the file doesn't exist, it's created.

**Crucial Check:** After calling `fopen`, you **must** check if the returned file pointer is `NULL`. If it is, the file could not be opened (e.g., file not found in read mode, or permission issues). Attempting to use a `NULL` file pointer will lead to a segmentation fault.

```c
FILE *ptr = fopen("file1.txt", "r");
if (ptr == NULL)
{
    // Handle error, e.g., print an error message and exit
    return 1;
}
// Proceed with file operations
```

#### `fclose`

`fclose` is used to close a file that was opened with `fopen`. It takes the file pointer as an argument.

```c
fclose(ptr);
```

It's essential to close files when you are finished with them to release system resources and ensure that all buffered data is written to the disk.

#### `fgetc` and `fputc`

-   **`fgetc`**: Reads the next character from the file pointed to by the file pointer. It returns the character read as an `int` or `EOF` if the end of the file is reached or an error occurs.

    ```c
    int c = fgetc(ptr);
    ```

-   **`fputc`**: Writes a character to the file pointed to by the file pointer.

    ```c
    fputc("H", ptr);
    ```

#### `fread` and `fwrite`

These functions are used for reading and writing blocks of data (e.g., arrays, structures) to and from files.

-   **`fread`**: Reads `nmemb` items, each of `size` bytes, from the input stream `stream` into the memory block pointed to by `ptr`.

    ```c
    size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
    ```

-   **`fwrite`**: Writes `nmemb` items, each of `size` bytes, from the memory block pointed to by `ptr` to the output stream `stream`.

    ```c
    size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
    ```

### Conclusion

File pointers and file I/O functions are indispensable for creating programs that can store and retrieve persistent data. By understanding and correctly using `fopen`, `fclose`, `fgetc`, `fputc`, `fread`, and `fwrite`, you can enable your C programs to interact with the file system, making them more powerful and versatile.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/5- Call Stacks|5- Call Stacks]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/Section- Week 4 Memory|Section- Week 4 Memory]]
