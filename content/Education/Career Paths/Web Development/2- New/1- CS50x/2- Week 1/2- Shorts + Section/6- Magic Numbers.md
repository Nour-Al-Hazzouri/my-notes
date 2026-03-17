# Magic Numbers

## What are Magic Numbers?

"Magic numbers" refer to hardcoded numerical constants directly embedded in code without any clear explanation or symbolic meaning. While seemingly harmless, they can make code difficult to understand, maintain, and debug. For example, in the Mario problem set, the pyramid height was capped at 23. Without context, this number seems arbitrary. The reason for 23 is that the standard terminal window height is 24 lines, and a pyramid taller than 23 lines would cause display issues.

## Problems with Magic Numbers

1.  **Lack of Clarity**: The meaning of the number is not immediately obvious to someone reading the code, especially if they are unfamiliar with the specific context or problem domain.
2.  **Maintainability Issues**: If the value needs to change, you have to find and update every instance of that number throughout the codebase. This is error-prone and can lead to inconsistencies.
3.  **Debugging Challenges**: It can be hard to track down why a specific numerical value is being used or what its implications are if it causes unexpected behavior.

## Example: Dealing Cards

Consider a function `deal_card` that iterates 52 times to deal cards from a deck:

```c
for (int i = 0; i < 52; i++)
{
    deal_card(deck);
}
```

The number `52` is a magic number here. While intuitively we know a standard deck has 52 cards, this number is just "floating around" in the code. If the game changes to use a different number of cards (e.g., for a special deck), this `52` would need to be changed everywhere it appears.

## Solutions to Magic Numbers

### 1. Using Variables (with caution)

One initial thought might be to assign the magic number to a variable:

```c
int deck_size = 52;
for (int i = 0; i < deck_size; i++)
{
    deal_card(deck);
}
```

This improves readability by giving the number a symbolic name. However, if `deck_size` is a global variable, another part of the program could inadvertently change its value, leading to subtle and hard-to-find bugs (e.g., if `deck_size` becomes 51, the program might not shuffle all cards, which could be exploited).

### 2. Using Preprocessor Directives (`#define`)

The most robust solution in C for creating symbolic constants is using the preprocessor directive `#define`. This creates a macro that the compiler replaces with its value before compilation, ensuring the value cannot be changed at runtime.

- **Syntax**: `#define NAME REPLACEMENT`
- **Important**: Do NOT put a semicolon at the end of a `#define` directive.
- **Analogy**: Think of `#define` as a "find and replace" operation performed by the preprocessor.

**Example**:

```c
#define DECK_SIZE 52

// ... later in your code
for (int i = 0; i < DECK_SIZE; i++)
{
    deal_card(deck);
}
```

Now, `DECK_SIZE` clearly indicates its meaning, and its value is fixed at compile time, preventing accidental modification. If the `DECK_SIZE` needs to change, you only modify it in one place (the `#define` line).

Another example:

```c
#define PI 3.14159265

float circumference = 2 * PI * radius;
```

Using `#define` for constants makes your code:
- **More Readable**: The name explains the purpose of the value.
- **More Maintainable**: Changes only need to be made in one place.
- **Safer**: Prevents accidental modification of constant values during program execution.

## Conclusion

Avoiding magic numbers by using symbolic constants (preferably with `#define`) is a crucial best practice in programming. It leads to cleaner, more understandable, and more robust code, making it easier for you and others to work with in the long run.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/5- Command Line|Command Line]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/2- Shorts + Section/CS50x Week 1 Section_ C|CS50x Week 1 Section: C]]
