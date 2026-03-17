# Data Types

## Introduction to Data Types in C

Unlike modern programming languages like PHP and JavaScript, C requires explicit declaration of data types for every variable upon its first use. This short introduces some built-in C data types and custom data types provided by CS50.

## `int` (Integer)

- **Purpose**: Used for variables that store integer values (e.g., 1, 2, 3, -1, -2, -3).
- **Memory Allocation**: Always takes up 4 bytes of memory (32 bits).
- **Range**: The 32 bits are split to accommodate both negative and positive integers. The range is approximately -2 billion to +2 billion (specifically, -2^31 to 2^31 - 1, as one spot is reserved for 0).

## `unsigned int` (Unsigned Integer)

- **Purpose**: A qualifier that modifies the `int` data type. It doubles the positive range of values an integer can hold by disallowing negative values.
- **Use Case**: Useful when you know a variable will never be negative and might exceed the standard `int`'s positive limit (e.g., numbers between 2 billion and 4 billion).
- **Range**: Approximately 0 to 4 billion (specifically, 0 to 2^32 - 1).

## `char` (Character)

- **Purpose**: Used for variables that store single characters.
- **Memory Allocation**: Takes up 1 byte of memory (8 bits).
- **Range**: -128 to 127 (specifically, -2^7 to 2^7 - 1).
- **ASCII**: Thanks to ASCII, these numerical values map to characters on the keyboard. For example, capital 'A' maps to 65, lowercase 'a' maps to 97, and the character '0' maps to 48.

## `float` (Floating-Point Numbers)

- **Purpose**: Used for variables that store real numbers, or numbers with decimal points (e.g., 3.14, -0.5).
- **Memory Allocation**: Takes up 4 bytes of memory (32 bits).
- **Precision**: Provides about 7 decimal digits of precision.

## `double` (Double-Precision Floating-Point Numbers)

- **Purpose**: Similar to `float`, but for higher precision real numbers.
- **Memory Allocation**: Takes up 8 bytes of memory (64 bits).
- **Precision**: Provides about 15 decimal digits of precision. This is generally preferred over `float` for most applications due to better accuracy.

## `bool` (Boolean)

- **Purpose**: Used for variables that store boolean values, representing truth or falsehood.
- **Values**: Can only be `true` or `false`.
- **Memory Allocation**: Takes up 1 byte of memory (8 bits).
- **Origin**: Not a built-in C data type, but provided by CS50 through the `cs50.h` library.

## `string` (String)

- **Purpose**: Used for variables that store sequences of characters (words, sentences).
- **Origin**: Not a built-in C data type, but provided by CS50 through the `cs50.h` library.
- **Implementation**: Internally, a string is an array of characters, where each character is a `char` data type, and the string is terminated by a null character (`\0`).

## Custom Data Types (CS50 Library)

CS50 provides several custom data types to simplify programming, including `bool` and `string`, which are not natively available in standard C.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/1- Week 1 Notes|Lecture 1 - CS50x 2025]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/2- Operators|Operators]]
