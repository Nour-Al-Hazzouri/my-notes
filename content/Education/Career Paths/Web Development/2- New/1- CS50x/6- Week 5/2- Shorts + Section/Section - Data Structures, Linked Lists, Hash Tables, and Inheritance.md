# CS50x Section 5: Data Structures, Linked Lists, Hash Tables, and Inheritance

## Introduction

Section 5 of CS50x delves into fundamental concepts of data structures, building upon the foundational knowledge of C programming. It covers various ways to organize and manage data efficiently, with a focus on linked lists, hash tables, and an introduction to inheritance, a concept more prevalent in object-oriented programming but touched upon to provide a broader perspective on data organization and relationships.

## Data Structures

Data structures are specialized formats for organizing, processing, retrieving, and storing data. They are crucial for designing efficient algorithms and managing large amounts of information. The section revisits the core idea of data structures, emphasizing their role in optimizing operations like searching, insertion, and deletion.

### Key Operations on Data Structures

Regardless of the specific data structure, common operations include:

1.  **Search:** Locating a specific element within the structure.
2.  **Insertion:** Adding a new element to the structure.
3.  **Deletion:** Removing an existing element from the structure.

## Linked Lists

Linked lists are linear data structures where elements are not stored at contiguous memory locations. Instead, each element (called a node) points to the next element in the sequence. This dynamic allocation makes them highly flexible for operations that involve frequent insertions and deletions, as elements do not need to be shifted.

### Node Structure

A typical node in a singly-linked list consists of:

*   **`phrase` (string):** The data stored in the node.
*   **`next` (pointer):** A pointer to the next node in the list.

```c
typedef struct node
{
    string phrase;
    struct node *next;
}
node;
```

### Creating a Linked List

An empty linked list is typically represented by a `NULL` head pointer. New nodes are allocated dynamically using `malloc`.

```c
node *list = NULL;
node *n = malloc(sizeof(node));
// ... populate n->phrase and n->next
list = n;
```

### Inserting Nodes

Inserting a new node at the beginning of a linked list involves:

1.  Allocating memory for the new node.
2.  Setting the new node's `phrase`.
3.  Making the new node's `next` pointer point to the current head of the list.
4.  Updating the `list` (head) pointer to the new node.

```c
n = malloc(sizeof(node));
n->phrase = "Hey!";
n->next = list;
list = n;
```

### Deleting Nodes

Deleting nodes from a linked list requires careful management of pointers to avoid memory leaks and maintain the list's integrity. To delete a node, the `next` pointer of the preceding node must be updated to bypass the node being deleted, and then the deleted node's memory must be freed using `free()`.

For example, to delete the head of the list:

```c
node *ptr = list->next;
free(list);
list = ptr;
```

### Exercise: Inserting and Unloading a Linked List

The section includes an exercise to implement `add` and `unload` functions for a linked list:

*   **`add`:** Inserts a new node with a given phrase into the linked list, ensuring `list` always points to the head.
*   **`unload`:** Frees all nodes in the linked list, returning `true` on success.

### Full Code
```c

```
## Hash Tables

Hash tables are data structures that implement an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

### Hashing

Hashing is the process of converting a given key into another value. A hash function takes an input (or 'key') and returns a fixed-size string of bytes, which is typically an integer. This integer is then used as an index into an array (the hash table).

### Characteristics of a Good Hash Function

*   **Consistency:** Always produces the same value for the same input.
*   **Even Distribution:** Distributes keys evenly across all buckets to minimize collisions.
*   **Uses All Buckets:** Effectively utilizes the entire range of available buckets.

## Inheritance

While primarily a concept in object-oriented programming, inheritance is briefly introduced to show how new classes can inherit properties and behaviors from existing classes. This concept is fundamental to building hierarchical relationships between data types and promoting code reusability, though its direct application in C (without C++ extensions) is limited to composition and structure embedding rather than true object-oriented inheritance. The slides show an example of `This is CS50 Week 5` which implies a continuation of topics from previous weeks, possibly building on data structures in a more complex context.

## Conclusion

Section 5 provides a deeper dive into dynamic data structures like linked lists and hash tables, highlighting their importance in managing flexible and searchable data collections. It also touches upon the concept of inheritance, setting the stage for more advanced programming paradigms. The practical exercises reinforce the theoretical understanding, preparing students to implement these structures in real-world scenarios.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/CS50 Week 5_ Data Structures - Comprehensive Summary|CS50 Week 5: Data Structures - Comprehensive Summary]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/7- Week 6/1- Week 6 Lecture|Lecture 6 - Python]]
