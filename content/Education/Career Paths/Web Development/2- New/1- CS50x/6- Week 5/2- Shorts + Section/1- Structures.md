# CS50x Short: Structures

## Introduction to Structures

Structures in C provide a way to unify several variables of different types into a single, new variable type. This new type can be assigned its own name, effectively creating a "super-variable" that groups logically connected elements of various data types. Unlike arrays, which group variables of the same data type, structures allow for the combination of different data types (e.g., integers, characters, doubles) into a single unit.

## Defining a Structure

A structure is defined using the `struct` keyword, followed by the structure's name and a block of curly braces containing its members (fields). Each member is declared with its data type and name, similar to regular variable declarations. It's crucial to remember to include a semicolon (`;`) at the end of the structure definition, a common syntactical mistake for beginners.

Structures are typically defined at the very top of a program, outside of any functions, or in separate `.h` header files. This ensures that the structure's scope is broad enough to be used by multiple functions or across multiple files that comprise a single program.

### Example: `struct car` Definition

```c
struct car
{
    int year;
    char model[10];
    char plate[7];
    int odometer;
    double engine_size;
};
```

As seen in the example, a `car` structure can contain an integer for the `year`, character arrays for `model` and `plate`, an integer for `odometer`, and a double for `engine_size`. This demonstrates how different data types can be combined within a single structure.

## Accessing Structure Members

Once a structure type is defined, variables of that type can be created using familiar syntax. The individual members (fields) of a structure variable can be accessed using the dot operator (`.`).

### Example: Accessing Members of a Stack-Allocated Structure

```c
// variable declaration
struct car mycar;

// field accessing
mycar.year = 2011;
strcpy(mycar.plate, "CS50");
mycar.odometer = 50505;
mycar.engine_size = 2.5;
```

## Dynamic Allocation of Structures

Structures can also be dynamically allocated at runtime on the heap, similar to other data types. When a structure is allocated on the heap, a pointer to the structure is returned. To access the members of a dynamically allocated structure, you first need to dereference the pointer and then use the dot operator.

### Example: Accessing Members of a Heap-Allocated Structure (Verbose)

```c
// variable declaration
struct car *mycar = malloc(sizeof(struct car));

// field accessing
(*mycar).year = 2011;
strcpy((*mycar).plate, "CS50");
(*mycar).odometer = 50505;
(*mycar).engine_size = 2.5;
```

### The Arrow Operator (`->`)

Because accessing members of dynamically allocated structures is a common operation, C provides a shortcut: the arrow operator (`->`). This operator performs two actions: it first dereferences the pointer on its left side and then accesses the member on its right side, making the code more concise and readable.

### Example: Accessing Members of a Heap-Allocated Structure (Using Arrow Operator)

```c
// variable declaration
struct car *mycar = malloc(sizeof(struct car));

// field accessing
mycar->year = 2011;
strcpy(mycar->plate, "CS50");
mycar->odometer = 50505;
mycar->engine_size = 2.5;
```

## Conclusion

Structures are a fundamental building block in C programming, allowing for the creation of complex data types by grouping related data of different types. They are essential for organizing data logically and are used extensively in the implementation of many other data structures.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/1- Week 5 Lecture|Lecture 5]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/2- Singly Linked Lists|CS50x Short: Singly-Linked Lists]]
