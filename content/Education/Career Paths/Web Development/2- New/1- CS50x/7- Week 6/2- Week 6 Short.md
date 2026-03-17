# Week 6 Short: Python Programming Language

## Introduction to Python

As explained by Doug Lloyd, Python represents a significant shift from C programming, marking the transition to a more modern, versatile programming language. While this video cannot cover Python in the same depth as the 30+ videos dedicated to C, it provides a comprehensive introduction to Python's tools and capabilities.

### What is Python?

Python is:
- A **commonly used modern programming language** (in the top 5-6 most popular languages)
- **Over 25 years old** - established and mature
- **Great for simplifying complex C operations**, especially string manipulation
- **General-purpose utility language** for various applications
- **Popular among data scientists** for processing large data sets and generating visualizations
- **Inspired by C** with consistent style elements

### Python's Key Advantages
- Makes complex operations from C much easier
- Simplifies string manipulation significantly
- Excellent for networking applications
- Powerful for data science, graphs, and charts
- General-purpose utility capabilities

## Getting Started with Python

### File Creation and Execution

To start writing Python:
1. Create a file with `.py` extension in CS50 IDE
2. IDE automatically provides syntax highlighting
3. Unlike C, Python is **not necessarily compiled**
4. Python programs run in a **Python interpreter**
5. Similar to PHP - code executes line by line

### Important Version Note

**Critical**: CS50 teaches **Python 3**, not Python 2
- Two popular versions exist: Python 2 and Python 3
- All syntax in this course is Python 3 specific
- When searching documentation, always include "Python 3" in searches
- Python 2 results may not work correctly

## Variables in Python

### Major Differences from C

1. **No type specification required**
2. **Declaration only by initialization** (can't declare without assigning value)

### Variable Examples

**C Code:**
```c
int x = 54;
```

**Python Code:**
```python
x = 54
```

Key observations:
- No `int` keyword needed
- No semicolon required
- Python infers the type automatically

### String Variables

**C Code (requires CS50 library):**
```c
string phrase = "This is CS50";
```

**Python Code:**
```python
phrase = "This is CS50"
# OR
phrase = 'This is CS50'
```

Python advantages:
- Strings are a **native data type** (no library needed)
- Supports both **single and double quotes**
- Can alternate quotes for nested quotations: `"He said 'hello' to me"`
- Particularly useful for database work with text

### No Semicolons

Python statements don't need semicolons:
- Can include them (won't cause problems)
- Better to omit for cleaner code
- One less thing to worry about forgetting

## Conditional Statements

All C conditionals are available but with cleaner syntax.

### Basic If Statement

**C Code:**
```c
if (y < 43 || z == 15) {
    // code
}
```

**Python Code:**
```python
if y < 43 or z == 15:
    # code
```

Changes:
- No parentheses required around condition
- `||` becomes the word `or`
- Curly braces replaced with colon (`:`)
- Code blocks defined by indentation

### Comments

Python comments use the pound sign (`#`):
```python
# This is a comment
```

### If-Else Statement

**C Code:**
```c
if (y < 43 && z == 15) {
    // code
} else {
    // code
}
```

**Python Code:**
```python
if y < 43 and z == 15:
    # code
else:
    # code
```

Changes:
- `&&` becomes the word `and`
- English-like readability

### Else-If Statement

**C Code:**
```c
if (course_num == 50) {
    // code
} else if (course_num != 51) {
    // code
}
```

**Python Code:**
```python
if course_num == 50:
    # code
elif course_num != 51:
    # code
```

Important:
- `else if` becomes `elif` (not `elseif`)
- Can also use: `elif not course_num == 51:`
- More English-like with `not` keyword

### Logical Operators Summary
- `&&` → `and`
- `||` → `or`
- `!` → `not`

### Ternary Operator

**C Code:**
```c
char c = get_char();
bool alphabetic = isalpha(c) ? true : false;
```

**Python Code:**
```python
alphabetic = True if c.isalpha() else False
```

Note: `True` and `False` are capitalized in Python

## User Input

Python has a native `input()` function:

```python
name = input("Name: ")
```

CS50 library functions are also available:
- Available in Python through the CS50 module
- `get_char`, `get_float`, `get_int`, etc.

## Loops in Python

Python has **two types of loops** (C has three):
1. `while` loops
2. `for` loops
3. ~~`do-while` loops~~ (not available in Python)

### While Loops

**C Code:**
```c
int counter = 0;
while (counter < 100) {
    printf("%i\n", counter);
    counter++;
}
```

**Python Code:**
```python
counter = 0
while counter < 100:
    print(counter)
    counter += 1
```

Important differences:
- No type declaration
- No parentheses around condition
- No curly braces
- **No `++` operator** - must use `+= 1`
- `print()` automatically adds newline (no `\n` needed)

### For Loops

**C Code:**
```c
for (int x = 0; x < 100; x++) {
    printf("%i\n", x);
}
```

**Python Code:**
```python
for x in range(100):
    print(x)
```

The `range()` function:
- Creates a list of numbers
- `range(100)` gives 0 to 99 (excludes final value)
- Much more concise than C syntax

### Advanced Range Usage

**Counting by twos:**
```python
for x in range(0, 100, 2):
    print(x)
```

Parameters:
- Start point (inclusive)
- End point (exclusive)
- Step value

This generates: 0, 2, 4, 6, ... 98

## Arrays → Lists

Python doesn't have arrays; it has **lists** which are much more powerful.

### Key Advantages Over C Arrays

1. **Not fixed in size** - can grow and shrink dynamically
2. **Can store mixed data types** in same list
3. **No manual memory management** needed

### Creating Lists

**Empty list:**
```python
nums = []
# OR
nums = list()
```

**Pre-populated list:**
```python
nums = [1, 2, 3, 4]
```

**List comprehension:**
```python
nums = [x for x in range(500)]
```
Creates list with numbers 0-499

### List Operations

**Append to end:**
```python
nums.append(5)
```

**Insert at position:**
```python
nums.insert(4, 5)  # Insert 5 at index 4
```

**Advanced slicing:**
```python
nums[len(nums):] = [5]  # Append list to end
```

### Mixed Data Types

Unlike C, Python lists can contain different types:
```python
my_list = ["string", 42, 3.14, True]
```

### Useful Functions

- `len(nums)` - returns length of list (like `strlen` but for any list)

## Tuples

A new data structure not available in C.

### What are Tuples?

- **Ordered, immutable sets of data**
- Values never change
- Order matters
- Similar to C structures with unchangeable fields
- Very fast to navigate

### Syntax

Tuples use parentheses:
```python
# Single tuple
washington = ("George Washington", 1789)

# List of tuples
presidents = [
    ("George Washington", 1789),
    ("John Adams", 1797),
    ("Thomas Jefferson", 1801),
    ("James Madison", 1809)
]
```

### Iterating Over Tuples

```python
for prez, year in presidents:
    print("In {1} {0} took office".format(prez, year))
```

Output formatting:
- `{0}` and `{1}` specify order of substitution
- `.format()` method replaces placeholders
- Can rearrange output order

## Dictionaries

Python's version of hash tables (which had to be built manually in C).

### Key Features

- Associates keys with values (not just integer indices)
- Native to Python (unlike C)
- Uses curly braces `{}`

### Creating Dictionaries

```python
pizzas = {
    "cheese": 9,
    "pepperoni": 10,
    "vegetable": 12,
    "buffalo chicken": 11
}
```

Structure:
- Keys and values separated by colon
- Key-value pairs separated by commas

### Dictionary Operations

**Access value:**
```python
price = pizzas["cheese"]  # Returns 9
```

**Change value:**
```python
pizzas["cheese"] = 8
```

**Use in conditionals:**
```python
if pizzas["vegetable"] < 12:
    # code
```

**Add new key-value pair:**
```python
pizzas["bacon"] = 14
```

### Iterating Over Dictionaries

**Iterate over keys:**
```python
for pie in pizzas:
    print(pie)
```

**Iterate over values:**
```python
for pie, price in pizzas.items():
    print(price)
```

**Print both keys and values:**
```python
for pie, price in pizzas.items():
    print("A whole {} pizza costs ${}".format(pie, price))
```

Note: Order is not guaranteed when iterating

## String Interpolation and Formatting

### Method 1: format() Method (Recommended)

```python
print("A whole {} pizza costs ${}".format(pie, price))
```

### Method 2: String Concatenation

```python
print("A whole " + pie + " pizza costs $" + str(price))
```
Note: Must convert numbers to strings with `str()`

### Method 3: % Formatting (Deprecated in Python 3)

```python
print("A whole %s pizza costs $%d" % (pie, price))
```
Avoid this method even though it's familiar from C

## Functions in Python

### Key Differences from C

1. **No return type specification**
2. **No parameter type specification**
3. **Use `def` keyword** to define functions
4. **No automatic main function**

### Basic Function Definition

**C Code:**
```c
int square(int x) {
    return x * x;
}
```

**Python Code:**
```python
def square(x):
    return x * x
```

### Alternative Implementations

**Using exponentiation operator:**
```python
def square(x):
    return x ** 2  # ** is exponentiation
```

**Using addition (convoluted example):**
```python
def square(x):
    result = 0
    for i in range(x):
        result += x
    return result
```

### Main Function

Python doesn't require a main function, but you can create one:

```python
def main():
    # Your code here
    pass

# This line makes Python start at main()
if __name__ == "__main__":
    main()
```

The `if __name__ == "__main__":` line:
- Must be at the very end of file
- Directs program to start at main function
- Useful when code is written out of order
- Must be memorized exactly as shown

## Object-Oriented Programming

Python is an **object-oriented programming language**.

### Objects vs C Structures

**C Structure:**
```c
struct car {
    int year;
    char *model;
};

struct car herbie;
herbie.year = 1963;
herbie.model = "Beetle";
```

**Limitations in C:**
- Fields (year, model) can't exist independently
- Must always be associated with a structure

### Objects in Python

Objects have:
1. **Properties** (like C structure fields)
2. **Methods** (functions inherent to the object)

Key concept: **Properties and methods are always part of objects**

### Classes

Classes define new types of objects.

```python
class Student:
    def __init__(self, name, id):
        self.name = name
        self.id = id
    
    def changeID(self, id):
        self.id = id
    
    def print(self):
        print("{} - {}".format(self.name, self.id))
```

Key elements:
1. **`__init__`**: Constructor/initialization function (required)
2. **`self`**: Reference to the object (first parameter in all methods)
3. **Properties**: Created by assigning to `self.property_name`

### Using Classes

```python
# Create new Student object
jane = Student("Jane", 10)

# Use methods
jane.print()        # Output: Jane - 10
jane.changeID(11)
jane.print()        # Output: Jane - 11
```

### Important Class Concepts

1. **Constructor (`__init__`)**: 
   - Always named `__init__`
   - Creates object and assigns initial properties
   - Called when creating new instance

2. **Self Parameter**:
   - Always first parameter in methods
   - References the current object
   - Required even if method takes no other parameters

3. **Method Syntax**:
   - Called using dot notation: `object.method()`
   - Different from C where functions receive objects as parameters

## Style and Indentation

### Critical Importance of Indentation

**Python uses indentation to define code blocks!**

In C:
```c
if (condition) {
    // This block defined by curly braces
    // Indentation is for readability only
}
```

In Python:
```python
if condition:
    # This block defined by indentation
    # Wrong indentation = syntax error
```

Key points:
- **Tabs and indentation are mandatory**
- Incorrect indentation causes program failure
- Must follow consistent indentation style
- No curly braces to fall back on

### CS50 Style Guide

If not already practicing good coding style:
- **Now is the time to start**
- Poor style in Python = non-working code
- Refer to CS50 style guide for best practices

## Importing Modules

### Basic Import Syntax

**C Code:**
```c
#include <stdio.h>
#include <cs50.h>
```

**Python Code:**
```python
import cs50
```

Terminology:
- C: "header files" or "libraries"
- Python: "modules"

### Using Imported Functions

After importing CS50:
```python
import cs50

x = cs50.get_int()
y = cs50.get_float()
s = cs50.get_string()
c = cs50.get_char()
```

Note: Must prefix with module name (`cs50.`)

## Python Interpreter

### Interactive Mode

Type `python` in terminal to enter interactive mode:
- Write Python one line at a time
- Useful for testing small code snippets
- Exit with `Ctrl+D` or `exit()`

### Running Python Files

```bash
python filename.py
```

Interpreter:
- Opens file
- Executes top to bottom, line by line

### Making Python Files Executable (Like C Programs)

Add to top of Python file:
```python
#!/usr/bin/env python3
```

Then make executable:
```bash
chmod +x filename.py
./filename.py
```

This allows running like compiled C programs (`./program`)

## Python's Power: Real-World Applications

### Data Science
- Processing large data sets
- Generating graphs and charts
- Statistical analysis
- Machine learning applications

### String Manipulation
- Much easier than C
- Built-in string methods
- No manual memory management
- Natural string operations

### Web Development
- Can be used at command line
- Also useful in web contexts
- Flask framework for web applications (covered separately)

### Networking
- Simplified network operations
- Built-in libraries for various protocols
- Easier than C networking code

## Summary of Key Differences from C

### What Python Eliminates
1. **Type declarations** - Python infers types
2. **Semicolons** - Not required
3. **Curly braces** - Uses indentation instead
4. **Memory management** - Automatic (no malloc/free)
5. **Fixed-size arrays** - Lists are dynamic
6. **++ and -- operators** - Use += 1 or -= 1
7. **Compilation step** - Interpreted language

### What Python Adds
1. **Native strings** - First-class data type
2. **Lists** - Dynamic, mixed-type arrays
3. **Tuples** - Immutable ordered collections
4. **Dictionaries** - Built-in hash tables
5. **Object-oriented features** - Classes and methods
6. **List comprehensions** - Concise list creation
7. **English-like keywords** - and, or, not
8. **Exponentiation operator** - `**`

### Syntax Transformations

| C | Python |
|---|--------|
| `int x = 5;` | `x = 5` |
| `&&` | `and` |
| `\|\|` | `or` |
| `!` | `not` |
| `else if` | `elif` |
| `true/false` | `True/False` |
| `x++` | `x += 1` |
| `printf()` | `print()` |
| Arrays | Lists |
| `#include` | `import` |

## Best Practices

1. **Always use Python 3** (not Python 2)
2. **Maintain consistent indentation** (spaces or tabs, not both)
3. **Use descriptive variable names** (Python encourages readability)
4. **Leverage built-in functions** (don't reinvent the wheel)
5. **Use list comprehensions** for concise code
6. **Follow Python naming conventions** (snake_case for variables/functions)
7. **Document your code** with comments and docstrings
8. **Use the interactive interpreter** for testing

## Common Pitfalls for C Programmers

1. **Forgetting colons** after if/for/while/def statements
2. **Using ++ or --** (doesn't exist in Python)
3. **Wrong indentation** (causes immediate errors)
4. **Using semicolons** (unnecessary, though not harmful)
5. **Declaring types** (Python is dynamically typed)
6. **Manual memory management** (Python handles this)
7. **Using printf-style formatting** (use .format() or f-strings)

## Conclusion

Python represents a significant evolution from C, offering:
- **Incredible flexibility** for various applications
- **Simplified syntax** reducing common programming errors
- **Powerful built-in features** eliminating manual implementations
- **Object-oriented capabilities** for complex programs
- **Excellent for data science** and string manipulation

While this introduction only "scratches the surface," Python is an essential tool for modern programmers, particularly valuable for:
- Data science applications
- Complex string manipulation
- Web development (with frameworks like Flask)
- Rapid prototyping
- Automation and scripting

The language's English-like syntax, automatic memory management, and rich standard library make it an invaluable addition to any programmer's toolbox, complementing the low-level control provided by C with high-level abstractions for productivity.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/7- Week 6/1- Week 6 Lecture|Lecture 6 - Python]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/7- Week 6/3- Week 6 Section|Week 6 Section: Introduction to Python]]
