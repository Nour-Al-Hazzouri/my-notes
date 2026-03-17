## Hexadecimal - CS50x Short Summary

### Introduction to Hexadecimal

Hexadecimal numbers are a base-16 number system, offering an alternative to the familiar base-10 (decimal) and base-2 (binary) systems. While Western cultures primarily use the decimal system with digits 0-9, computers operate using the binary system with only 0s and 1s. Long strings of binary digits can be difficult for humans to read and parse. Hexadecimal provides a more concise and human-understandable way to express binary information.

### Hexadecimal Digits and Place Values

Hexadecimal uses 16 digits: 0 through 9, and then A, B, C, D, E, and F. These letters represent the decimal values 10 through 15 respectively. (Note: A-F can be uppercase or lowercase).

Just like decimal and binary, hexadecimal also uses place values, but these are powers of 16:

- **16^0 (ones place)**
- **16^1 (sixteens place)**
- **16^2 (two hundred fifty-sixes place)**

For example, the decimal number 397 is different from the hexadecimal number 0x397. The `0x` prefix is commonly used to clearly distinguish hexadecimal numbers from decimal numbers, especially when the hexadecimal number only contains digits 0-9, which could otherwise be ambiguous.

### Why Hexadecimal is Useful

Hexadecimal is particularly useful because 16 is a power of 2 (2^4). This means that each hexadecimal digit corresponds to a unique arrangement of 4 binary digits (bits). This allows for a much more concise representation of long binary numbers without losing information or requiring cumbersome conversions.

**Examples of Binary to Hexadecimal Correspondence:**

- Binary `0000` corresponds to hexadecimal `0`
- Binary `0110` corresponds to hexadecimal `6`
- Binary `1111` corresponds to hexadecimal `F`

This direct relationship makes hexadecimal a convenient shorthand for representing binary data in computer science and programming.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/1- Week 4 Lecture|Lecture 4]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/5- Week 4/2- Shorts + Section/2- Pointers|2- Pointers]]
