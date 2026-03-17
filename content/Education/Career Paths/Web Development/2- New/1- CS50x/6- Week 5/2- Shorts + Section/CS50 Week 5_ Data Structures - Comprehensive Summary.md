# CS50 Week 5: Data Structures - Comprehensive Summary

This document summarizes the key concepts and practical implementations of data structures as covered in CS50 Week 5, drawing information from the official section transcript, supplementary PDF slides, and provided source code files (`list.c` and `table.c`).

## 1. Introduction to Data Structures

CS50 Week 5 focuses on fundamental data structures, building upon previous concepts like variables and arrays. The primary operations discussed for data structures include **deletion**, **insertion**, and **search**. The section introduces Linked Lists and Hash Tables as more advanced ways to organize data compared to simple arrays.

## 2. Linked Lists

Linked lists are a series of connected 'nodes' forming a chain. Unlike arrays where elements are stored contiguously in memory, linked lists use **pointers** to connect nodes. Each node typically contains two main components:

*   **Phrase/Data**: The actual data stored in the node (e.g., a string).
*   **Next Pointer**: A pointer to the next node in the sequence. This pointer stores the memory address of the subsequent node.

### 2.1. Defining a Node (from `list.c` and PDF slides)

Nodes are custom data structures defined using `typedef struct` in C. The structure typically looks like this:

```c
typedef struct node
{
    string phrase; // Stores the data (e.g., a word or phrase)
    struct node *next; // Pointer to the next node in the list
}
node;
```

### 2.2. Creating a Linked List

To create a linked list, a pointer, often named `list` or `head`, is initialized to `NULL` to signify an empty list. New nodes are then dynamically allocated memory using `malloc` and populated with data. The `next` pointer of the new node is set to `NULL` if it's the last node, or to the address of the previously first node when inserting at the beginning.

**Example of creating the first node (from PDF slides and transcript):**

```c
node *list = NULL; // Initialize an empty list

node *n = malloc(sizeof(node)); // Allocate memory for a new node
if (n == NULL)
{
    // Handle error
    return 1;
}

n->phrase = "Hi!"; // Populate the phrase field
n->next = NULL; // Set next pointer to NULL as it's the only node

list = n; // Update the list pointer to point to the new first node
```

### 2.3. Inserting Nodes

Nodes are typically inserted at the beginning of a linked list. The process involves:

1.  Allocating memory for the new node.
2.  Populating the new node's `phrase` field.
3.  Setting the new node's `next` pointer to point to the current `head` of the list.
4.  Updating the `head` pointer to point to the newly created node.

**Example of inserting a new node (from PDF slides and transcript):**

```c
node *n = malloc(sizeof(node));
if (n == NULL)
{
    // Handle error
    return 1;
}

n->phrase = "Hey!"; // New phrase
n->next = list; // New node points to the current head
list = n; // Update head to the new node
```

### 2.4. Deleting Nodes and Unloading the List

Deleting nodes involves freeing the memory allocated for them. For a linked list, this typically means iterating through the list and freeing each node. The `unload` function in `list.c` demonstrates this process.

**`unload` function from `list.c`:**

```c
bool unload(node *list)
{
    node *ptr = list;

    while (ptr != NULL)
    {
        list = ptr->next; // Move list to the next node before freeing ptr
        free(ptr); // Free the current node
        ptr = list; // Update ptr to the new current node
    }

    return true;
}
```

*Note: The `unload` function in the provided `list.c` has a slight logical error in the original `while` loop condition and pointer assignments. The corrected logic should ensure `ptr` is updated to `list->next` before `list` is freed, and `list` is then updated to `ptr` for the next iteration. The above code snippet reflects a common corrected approach for freeing a linked list.* 

## 3. Hash Tables

Hash tables combine arrays and linked lists. They consist of an array (often called buckets) where each element can point to a linked list. This structure allows for efficient data retrieval by using a **hash function** to determine which 


bucket a piece of data belongs to. If multiple data items hash to the same bucket, they are stored in a linked list at that bucket.

### 3.1. Hash Function (from `table.c`)

A hash function takes an input (e.g., a string) and returns an integer, which corresponds to an index in the hash table array. A good hash function should:

*   Always give the same value for the same input.
*   Produce an even distribution across buckets.
*   Utilize all available buckets.

**Example `hash` function from `table.c`:**

```c
int hash(string phrase)
{
    // returns 0–25, depending on the first char of the phrase
    // return toupper(phrase[0]) - 'A';
    return tolower(phrase[0]) - 'a';
}
```

This simple hash function uses the first character of a phrase to determine its bucket, converting it to lowercase and subtracting the ASCII value of 'a' to get an index between 0 and 25 (assuming an English alphabet).

## 4. Tries

Tries are another data structure mentioned, similar to linked lists but optimized for storing and retrieving strings. In a trie, each node represents a character, and paths from the root to a node form a word. While not covered in detail in this section, they offer efficient prefix-based search capabilities.

## 5. Inheritance Problem

The section also touches upon the 


Inheritance Problem, which is one of the problems in the problem set. While the specifics of the problem are not detailed in the provided materials, it is implied to be a practical application of the data structures and concepts discussed in the section.

## Conclusion

CS50 Week 5 provides a foundational understanding of data structures, specifically linked lists and hash tables, emphasizing their structure, creation, insertion, and deletion operations. It highlights the importance of pointers in managing these dynamic data structures and introduces the concept of hash functions for efficient data organization and retrieval. The section aims to equip students with the knowledge to implement and utilize these essential data structures in their programming endeavors.




## Appendix: Complete Source Code Examples

### A.1. Complete `list.c` Implementation

```c
#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node
{
    string phrase;
    struct node *next;
}
node;

#define LIST_SIZE 2

bool unload(node *list);
void visualizer(node *list);

int main(void)
{
    node *list = NULL;

    // Add items to list
    for (int i = 0; i < LIST_SIZE; i++)
    {
        string phrase = get_string("Enter a new phrase: ");

        // TODO: add phrase to new node in list
        node *n = malloc(sizeof(node));
        if (n == NULL)
        {
            return 1;
        }

        n->phrase = phrase;
        n->next = list;
        list = n;

        // Visualize list after adding a node.
        visualizer(list);
    }

    // Free all memory used
    if (!unload(list))
    {
        printf("Error freeing the list.\n");
        return 1;
    }

    printf("Freed the list.\n");
    return 0;
}

bool unload(node *list)
{
    // TODO: Free all allocated nodes
    node *ptr = list;

    while (ptr != NULL)
    {
        ptr = list->next;
        free(list);
        list = ptr;
    }

    return true;
}

void visualizer(node *list)
{
    printf("\n+-- List Visualizer --+\n\n");
    while (list != NULL)
    {
        printf("Location %p\nPhrase: \"%s\"\nNext: %p\n\n", list, list->phrase, list->next);
        list = list->next;
    }
    printf("+---------------------+\n\n");
}
```

### A.2. Complete `table.c` Implementation

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node
{
    string phrase;
    struct node *next;
}
node;

node *table[26];

int hash(string phrase);
bool unload(node *list);
void visualizer(node *list);

int main(void)
{
    // Add items
    for (int i = 0; i < 3; i++)
    {
        string phrase = get_string("Enter a new phrase: ");

        // Find phrase bucket
        int bucket = hash(phrase);
        printf("%s hashes to %i\n", phrase, bucket);
    }
}

// TODO: return the correct bucket for a given phrase
int hash(string phrase)
{
    // returns 0–25, depending on the first char of the phrase
    // return toupper(phrase[0]) - 'A';
    return tolower(phrase[0]) - 'a';
}
```

These complete implementations demonstrate the practical application of the data structures concepts covered in CS50 Week 5, showing how linked lists and hash tables are implemented in C with proper memory management and visualization functions.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/8- Data Structures|Data Structures]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/Section - Data Structures, Linked Lists, Hash Tables, and Inheritance|CS50x Section 5: Data Structures, Linked Lists, Hash Tables, and Inheritance]]
