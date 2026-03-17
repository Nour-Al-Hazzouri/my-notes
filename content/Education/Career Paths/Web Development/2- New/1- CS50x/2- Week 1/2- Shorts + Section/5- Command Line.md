# Command Line

## Introduction to the Linux Command Line

This short introduces how to use the Linux command line, particularly within the CS50 IDE (Integrated Development Environment). The CS50 IDE is a cloud-based machine running Ubuntu, a flavor of the Linux operating system. While modern Linux distributions often have graphical user interfaces (GUIs) for mouse-based navigation, programmers frequently use the terminal window for many tasks that can also be done with keyboard commands.

These commands are applicable to any Unix-based operating system, including Linux and macOS (via Terminal). Windows, being a non-Unix-based system, uses a different set of commands in its Command Prompt.

## Essential Linux Commands

### `ls` (list)

- **Purpose**: Lists the files and folders in your current directory.
- **Usage**: `ls`
- **Output**: Displays the names of files and directories. In the CS50 IDE, directories are typically colored blue, executable files green, and other files (like text or source code) black.
- **Example**: If your directory contains `hello`, `hello.c`, `hello.txt`, `pset0/`, and `pset1/`, typing `ls` will show these items.

### `cd` (change directory)

- **Purpose**: Allows you to navigate between directories.
- **Usage**: `cd [directory_name]`
- **Special Directories**:
    - `.` (dot): Refers to the current directory.
    - `..` (dot dot): Refers to the parent directory (one level up).
- **Example**: To enter the `pset1` directory, you would type `cd pset1`.

### `pwd` (present working directory)

- **Purpose**: Displays the absolute path of your current working directory.
- **Usage**: `pwd`
- **Example**: If you are in `/home/ubuntu/pset1`, `pwd` will output `/home/ubuntu/pset1`.

### `mkdir` (make directory)

- **Purpose**: Creates a new directory.
- **Usage**: `mkdir [directory_name]`
- **Example**: `mkdir my_new_folder` will create a directory named `my_new_folder` in your current location.

### `rmdir` (remove directory)

- **Purpose**: Removes an empty directory.
- **Usage**: `rmdir [directory_name]`
- **Note**: This command only works for empty directories. To remove non-empty directories, you would typically use `rm -r`.

### `rm` (remove)

- **Purpose**: Removes files.
- **Usage**: `rm [file_name]`
- **Example**: `rm old_file.txt` will delete `old_file.txt`.
- **Options**:
    - `-f` (force): Removes files without prompting for confirmation.
    - `-r` (recursive): Removes directories and their contents recursively. Use with caution!

### `mv` (move)

- **Purpose**: Moves or renames files and directories.
- **Usage**: `mv [source] [destination]`
- **Examples**:
    - `mv old_name.txt new_name.txt` (renames a file)
    - `mv file.txt /path/to/new_location/` (moves a file)

### `cp` (copy)

- **Purpose**: Copies files and directories.
- **Usage**: `cp [source] [destination]`
- **Example**: `cp original.txt copy.txt` (creates a copy named `copy.txt`)
- **Options**:
    - `-r` (recursive): Copies directories and their contents recursively.

### `cat` (concatenate)

- **Purpose**: Displays the content of a file to the terminal.
- **Usage**: `cat [file_name]`
- **Example**: `cat my_document.txt` will print the content of `my_document.txt`.

### `less`

- **Purpose**: Allows you to view the content of a file page by page, useful for large files.
- **Usage**: `less [file_name]`
- **Navigation**: Use arrow keys to scroll, `q` to quit.

### `man` (manual)

- **Purpose**: Displays the manual page for a command, providing detailed information about its usage and options.
- **Usage**: `man [command_name]`
- **Example**: `man ls` will show the manual for the `ls` command.

## Command Line Arguments

- **Purpose**: Programs can accept additional information (arguments) when they are executed from the command line.
- **Example**: If you have a program named `greet`, you might run it as `./greet David` where `David` is an argument.
- **In C**: These arguments are passed to the `main` function of your C program via `argc` (argument count) and `argv` (argument vector).
    - `argc`: An integer representing the number of command-line arguments.
    - `argv`: An array of strings, where each string is one of the command-line arguments. `argv[0]` is always the name of the program itself.

## Importance of the Command Line

Understanding and using the command line is crucial for programmers as it provides a powerful and efficient way to interact with the operating system, manage files, compile code, and run programs. It offers a level of control and automation not always available through graphical interfaces. The skills learned here are transferable across many different development environments and operating systems.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/4- Loops|Loops]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/6- Magic Numbers|Magic Numbers]]
