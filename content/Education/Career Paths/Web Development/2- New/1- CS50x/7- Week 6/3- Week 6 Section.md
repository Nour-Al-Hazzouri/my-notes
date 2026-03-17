# Week 6 Section: Introduction to Python

## Introduction
This section, taught by Yuliia Zhukovets (a preceptor at Harvard), provides a comprehensive introduction to Python programming, focusing on the transition from C to Python. The session covers Python syntax, lists and strings, for loops, dictionaries, and file I/O, particularly with CSV files.

## Key Topics Overview
1. **Syntax differences between C and Python**
2. **Lists and strings manipulation**
3. **For loops structure and usage**
4. **Dictionaries (similar to real-life dictionaries with keys and values)**
5. **File I/O (Input/Output) with CSV files**

## Syntax Differences: C vs Python

### Getting User Input
The transition from C to Python shows significant simplification in syntax:

**C Code:**
```c
char *name = get_string("Name: ");
```

**Python Code:**
```python
name = input("Name: ")
```

### Key Differences Explained

#### 1. No Explicit Data Types
- In C: Must explicitly declare types (`char *`, `int`, `float`, etc.)
- In Python: Data types are handled automatically
- Python infers the type from the value assigned

#### 2. No Semicolons
- C requires semicolons at the end of statements
- Python doesn't need semicolons (cleaner code)

#### 3. No Curly Braces for Code Blocks
- C uses curly braces `{}` to define code blocks
- Python uses **indentation** (crucial for code structure)
- **Warning**: Proper indentation is mandatory in Python - incorrect indentation causes errors

#### 4. Simplified Parentheses Usage
- C requires parentheses around conditionals: `if (condition)`
- Python simplifies: `if condition:`

### String Comparison

**C Code (using strcmp):**
```c
if (strcmp(phrase, "hello") == 0) {
    printf("Hi, %s\n", name);
}
```

**Python Code:**
```python
if phrase == "hello":
    print(f"Hi, {name}")
```

Key improvements in Python:
- No need for `strcmp` function
- Direct comparison using `==`
- No need to check if result equals 0
- Natural English-like syntax

### Print Statements

**C:** `printf` with format specifiers (`%s`, `%d`, etc.)
**Python:** `print` with f-strings or concatenation

Python formatting options:
- **f-strings**: `print(f"Hi, {name}")`
- **Concatenation**: `print("Hi, " + name)`
- No need for explicit placeholders
- No need to track variable order after commas

## Lists in Python

Lists are Python's version of arrays but with significant enhancements:

### Key Differences from C Arrays
1. **Not fixed in size** - can grow and shrink dynamically
2. **Can store different data types** in the same list
3. **No need for memory management** (malloc, realloc, free)

### Creating and Using Lists

```python
# Creating a list with mixed data types
my_list = ["testing", 1, 2.3]
```

This single list contains:
- A string: `"testing"`
- An integer: `1`
- A float: `2.3`

### List Visualization
Lists are stored continuously in memory, one element after another:
```
[0] → "testing"
[1] → 1
[2] → 2.3
```

### Adding Elements to Lists

In C, resizing arrays required:
- Memory allocation
- Reallocation for resizing
- Error checking
- Manual memory management

In Python, it's just one line:
```python
my_list.append(4)  # Adds 4 to the end of the list
```

### Object-Oriented Nature: Methods

Python uses **dot notation** for methods:
- `my_list.append(value)` - adds to end
- `my_list.insert(position, value)` - inserts at specific position
- `my_list.pop()` - removes last element
- `my_list.reverse()` - reverses the list
- `my_list.sort()` - sorts the list

The dot operator (`.`) connects the variable with the operation:
- Format: `variable.method(arguments)`
- Different from C functions where you pass variables into functions

## Strings in Python

Strings are objects with their own set of methods.

### String Methods

#### 1. `.lower()` - Convert to lowercase
```python
phrase = "You're off to Great Places!"
phrase.lower()  # Returns: "you're off to great places!"
```

#### 2. `.capitalize()` - Capitalize first letter only
```python
phrase.capitalize()  # Returns: "You're off to great places!"
```
Note: Only capitalizes the very first letter, making all others lowercase

#### 3. `.isspace()` - Check if string is all spaces

#### 4. `.split()` - Split string by delimiter
```python
phrase.split(" ")  # Returns: ["You're", "off", "to", "Great", "Places!"]
```
Creates a list of words separated by the specified delimiter

#### 5. `.strip()` - Remove whitespace from ends
Useful for cleaning user input with extra spaces

#### 6. `.upper()` - Convert to uppercase
Opposite of `.lower()`

## For Loops

### Basic C to Python Translation

**C Code:**
```c
for (int i = 0; i < 3; i++) {
    printf("%i\n", i);
}
```

**Python Code:**
```python
for i in range(3):
    print(i)
```

### The `range()` Function

`range(start, end, step)` parameters:
- **start**: Inclusive starting value (default: 0)
- **end**: Exclusive ending value
- **step**: Increment between values (default: 1)

Examples:
```python
range(3)        # Gives: 0, 1, 2
range(0, 3, 1)  # Same as above (explicit)
range(0, 10, 2) # Gives: 0, 2, 4, 6, 8
```

### Simplifications
- Default start is 0
- Default step is 1
- Can omit defaults: `range(3)` instead of `range(0, 3, 1)`

### Iterating Through Strings

**Less Pythonic way (using indices):**
```python
for i in range(len(phrase)):
    print(phrase[i])
```

**Pythonic way (direct iteration):**
```python
for char in phrase:
    print(char)
```

Python automatically understands to iterate through each character without explicit indexing.

## String Manipulation Examples

The section included hands-on practice with string predictions through five rounds of examples:

### Round 1: Stepping by 2
```python
phrase = "You're off to Great Places"
for i in range(0, len(phrase), 2):
    print(phrase[i], end="")
```
Output: Prints every other character (Y, u, ', space, o, f, ...)

### Round 2: Slicing off first and last
```python
for i in range(1, len(phrase) - 1):
    print(phrase[i], end="")
```
Output: Entire phrase minus first and last characters

### Round 3: Character iteration
```python
for char in phrase:
    print(char, end=" ")
```
Output: Each character separated by spaces

### Round 4: String slicing
```python
phrase[7:]     # "off to Great Places"
phrase[7:10]   # "off"
```
String slicing syntax: `string[start:end]`
- Extracts substring from start to end (exclusive)
- Omitting end means "to the end"

### Round 5: Split method
```python
for word in phrase.split(" "):
    print(word)
```
Output: Each word on a new line

## Dictionaries

Dictionaries are key-value pair data structures, similar to hash tables in C.

### Basic Syntax
```python
song = {
    "name": "Perfect",
    "artist": "Ed Sheeran",
    "tempo": 95.05
}
```

### Key Concepts
- **Keys**: Must be unique (like words in a physical dictionary)
- **Values**: The data associated with each key
- Use curly braces `{}` to define dictionaries
- Access values using keys in square brackets

### Accessing Dictionary Values
```python
song["name"]    # Returns: "Perfect"
song["tempo"]   # Returns: 95.05
```

### Adding New Key-Value Pairs
```python
song["album"] = "Divide"
```
The dictionary automatically resizes to accommodate new entries.

### List of Dictionaries
Combining lists and dictionaries for complex data structures:

```python
songs = [
    {"name": "Perfect", "tempo": 95.05},
    {"name": "Havana", "tempo": 104.99},
    {"name": "Thunder", "tempo": 167.88},
    {"name": "Him & I", "tempo": 87.91}
]
```

### Accessing Nested Data
```python
songs[0]          # Returns entire first dictionary
songs[3]["name"]  # Returns: "Him & I"
```

Step-by-step access:
1. `songs[3]` - Gets the dictionary at index 3
2. `["name"]` - Gets the value associated with key "name"

## File I/O with CSV Files

Python simplifies file operations compared to C.

### Opening Files
```python
with open(filename) as file:
    # File operations here
    # File automatically closes when done
```

The `with` statement:
- Automatically handles file opening and closing
- File closes when the indented block ends
- Prevents resource leaks

### Working with CSV Files

Using the `csv` module's `DictReader`:

```python
from csv import DictReader

with open(filename) as file:
    file_reader = DictReader(file)
    for row in file_reader:
        # Each row is a dictionary
        print(row)
```

### DictReader Benefits
- Automatically uses first row as headers (keys)
- Each subsequent row becomes a dictionary
- Headers become keys, row values become dictionary values
- No manual parsing needed

## Practical Example: Playlist Creator

The section concluded with a comprehensive example creating a playlist based on tempo preferences:

```python
from cs50 import get_int
from csv import DictReader

def main():
    # Get user preferences
    min_tempo = get_int("Minimum tempo: ")
    max_tempo = get_int("Maximum tempo: ")
    
    # Initialize empty playlist
    playlist = []
    
    # Read and filter songs
    filename = "2018_top100.csv"
    with open(filename) as file:
        file_reader = DictReader(file)
        for song in file_reader:
            # Convert tempo to float for comparison
            if float(song["tempo"]) > min_tempo and float(song["tempo"]) < max_tempo:
                playlist.append(song["name"])
    
    # Display results
    for song in playlist:
        print(song)

main()
```

### Key Points from the Example:

1. **Import statements**: 
   - Can import specific functions: `from cs50 import get_int`
   - Simplifies usage: `get_int()` instead of `cs50.get_int()`

2. **Type conversion**: 
   - CSV data is read as strings
   - Must convert to appropriate types: `float(song["tempo"])`

3. **Filtering with conditionals**:
   - Python uses `and` instead of `&&`
   - More readable, English-like syntax

4. **List operations**:
   - `.append()` to add filtered songs
   - Simple for loop to display results

### Program Flow Explanation:

1. **User Input**: Collects minimum and maximum tempo preferences
2. **File Opening**: Opens CSV file with song data
3. **Data Reading**: DictReader parses CSV into dictionaries
4. **Filtering**: Iterates through songs, checking tempo range
5. **Collection**: Adds matching songs to playlist
6. **Output**: Displays all songs in the playlist

### Important Implementation Details:

- **Error with string comparison**: Initially comparing strings with integers causes errors
- **Solution**: Cast tempo values to float using `float()`
- **Dictionary access**: Use key names from CSV headers
- **Combining conditions**: Use `and` keyword for multiple conditions

## Python vs C: Major Advantages

1. **Simpler Syntax**: No semicolons, fewer parentheses, no type declarations
2. **Dynamic Memory**: Lists resize automatically
3. **Mixed Types**: Lists can contain different data types
4. **Built-in Methods**: Rich set of string and list methods
5. **Readable Code**: English-like keywords (`and`, `or`, `not`)
6. **Powerful Data Structures**: Native dictionaries and lists
7. **Easier File Handling**: Simplified I/O operations
8. **Automatic Memory Management**: No manual malloc/free

## Best Practices and Tips

1. **Indentation is Critical**: Unlike C, indentation defines code blocks
2. **Use Pythonic Idioms**: Direct iteration over collections instead of indices
3. **Leverage Built-in Methods**: Use `.split()`, `.strip()`, etc. instead of manual parsing
4. **Type Awareness**: Remember CSV data is strings by default
5. **Documentation**: Explore Python documentation for more methods
6. **Practice**: Experiment with different methods and combinations

## Common Pitfalls to Avoid

1. **Forgetting proper indentation** - causes syntax errors
2. **Not converting data types** - comparing strings with numbers
3. **Using C-style syntax** - `++` doesn't work, use `+= 1`
4. **Ignoring Python methods** - reinventing functionality that exists
5. **Not closing files properly** - use `with` statement for automatic handling

## Summary

This section demonstrated Python's power and simplicity compared to C. The language offers:
- Cleaner, more readable syntax
- Powerful built-in data structures
- Extensive method libraries
- Simplified file operations
- Dynamic typing and memory management

The practical examples with string manipulation and CSV processing showed real-world applications of these concepts, preparing students for more complex Python programming tasks ahead.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/7- Week 6/2- Week 6 Short|Week 6 Short: Python Programming Language]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/8- Week 7/1- Week 7 Lecture|1- Week 7 Lecture]]
