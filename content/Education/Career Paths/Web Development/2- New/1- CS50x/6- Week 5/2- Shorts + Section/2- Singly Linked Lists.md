# CS50x Short: Singly-Linked Lists

## Introduction to Singly-Linked Lists

Singly-linked lists are fundamental dynamic data structures that address some of the limitations of static arrays, particularly concerning their fixed size and the inefficiency of insertions and deletions in the middle of the structure. Unlike arrays, which store elements in contiguous memory locations, linked lists store elements (called nodes) at potentially non-contiguous memory addresses. Each node in a singly-linked list contains two primary components: the data (or value) it holds and a pointer (or reference) to the next node in the sequence. This pointer-based connection allows the list to grow or shrink dynamically as elements are added or removed, making it a flexible choice for managing collections of data where the size is not known in advance or changes frequently.

### Structure of a Singly-Linked List Node

A node in a singly-linked list is typically implemented as a self-referential structure. This means that within the structure definition, there is a pointer to another instance of the same structure type. For example, in C, a node might be defined as follows:

```c
typedef struct sllist
{
    VALUE val;          // The data stored in the node
    struct sllist* next; // Pointer to the next node in the list
} sllnode;
```

Here, `VALUE` is a placeholder for any data type (e.g., `int`, `char`, `float`, or even another custom structure) that the node is intended to store. The `next` pointer is crucial as it establishes the link to the subsequent node. The `typedef` keyword is used to create an alias `sllnode`, making it more convenient to declare variables of this node type without repeatedly using `struct sllist`.

### Key Operations on Singly-Linked Lists

Several fundamental operations can be performed on singly-linked lists:

#### 1. Creation of a New Node

Creating a new node involves dynamically allocating memory for the node and initializing its fields. The `val` field is set to the desired data, and the `next` pointer is typically set to `NULL` (or `nullptr` in C++) to indicate that it does not yet point to another node. This operation usually involves `malloc` in C.

```c
sllnode* create(VALUE val)
{
    sllnode* new_node = malloc(sizeof(sllnode));
    if (new_node == NULL)
    {
        return NULL; // Handle memory allocation failure
    }
    new_node->val = val;
    new_node->next = NULL;
    return new_node;
}
```

#### 2. Insertion

Inserting a new node into a singly-linked list can be done at the beginning, end, or in the middle. Inserting at the beginning (prepending) is generally the most efficient, as it only requires updating the head pointer of the list. Inserting in the middle or at the end requires traversing the list to find the appropriate insertion point.

To insert at the beginning:

```c
sllnode* insert_at_head(sllnode* head, VALUE val)
{
    sllnode* new_node = create(val);
    if (new_node == NULL)
    {
        return head; // Handle error, return original head
    }
    new_node->next = head; // New node points to the old head
    return new_node;       // New node becomes the new head
}
```

#### 3. Searching

Searching for an element in a singly-linked list involves traversing the list from the head, comparing the `val` of each node with the target value. The search continues until the element is found or the end of the list (indicated by a `NULL` `next` pointer) is reached.

```c
bool find(sllnode* head, VALUE val)
{
    sllnode* current = head;
    while (current != NULL)
    {
        if (current->val == val)
        {
            return true; // Element found
        }
        current = current->next; // Move to the next node
    }
    return false; // Element not found
}
```

#### 4. Deletion

Deleting a node from a singly-linked list is more complex than insertion, especially when deleting a node from the middle or end. To delete a node, the `next` pointer of the *previous* node must be updated to bypass the node being deleted. This means that during traversal, a pointer to the previous node must also be maintained. Deleting the head node is simpler, as it only requires updating the head pointer.

#### 5. Deleting the Entire List

To free all memory occupied by a linked list, it must be traversed node by node, freeing each node individually. It's crucial to free nodes in the correct order to avoid losing references to subsequent nodes.

### Advantages and Disadvantages

**Advantages:**

*   **Dynamic Size:** Linked lists can grow or shrink in size during runtime, allocating memory only as needed. This avoids the problem of pre-allocating a fixed-size array that might be too large (wasting memory) or too small (leading to overflow).
*   **Efficient Insertions and Deletions:** Inserting or deleting elements at the beginning or in the middle of a linked list is generally more efficient than with arrays, as it only requires updating a few pointers rather than shifting a large number of elements.

**Disadvantages:**

*   **No Random Access:** Unlike arrays, elements in a linked list cannot be accessed directly by an index. To access the Nth element, the list must be traversed from the beginning, which can be inefficient for large lists (O(n) time complexity).
*   **More Memory Overhead:** Each node in a linked list requires extra memory to store the `next` pointer, which can be significant for lists with many small data elements.
*   **Traversal Direction:** Singly-linked lists can only be traversed in one direction (forward), which can be a limitation for certain operations that require backward traversal.

### Conclusion

Singly-linked lists are a fundamental data structure that offers flexibility in managing dynamic collections of data. While they excel in efficient insertions and deletions, their lack of random access and increased memory overhead due to pointers are important considerations. Understanding their structure and operations is crucial for building more complex data structures and algorithms, and they serve as a stepping stone to understanding more advanced linked structures like doubly-linked lists and trees.


## Introduction to Singly-Linked Lists

Singly-linked lists are a fundamental linear data structure in computer science. Unlike arrays, which store elements in contiguous memory locations, linked lists store elements (called "nodes") at potentially non-contiguous memory addresses. Each node in a singly-linked list contains two main parts: the data itself and a pointer (or reference) to the next node in the sequence. This structure allows for dynamic memory allocation, meaning the list can grow or shrink in size during runtime, unlike fixed-size arrays.

### Structure of a Singly-Linked List Node

Each node in a singly-linked list is typically defined as a structure or class containing:

1.  **Data (Value):** This holds the actual information or value that the node represents. It can be of any data type (e.g., integer, character, string, or even another complex data structure).
2.  **Next Pointer:** This is a pointer to the memory address of the next node in the list. The last node in the list will have its `next` pointer set to `NULL` (or `nullptr` in C++), signifying the end of the list.

For example, a singly-linked list node in C might be defined as:

```c
typedef struct sllist
{
    VALUE val;
    struct sllist* next;
}
sllnode;
```

Here, `VALUE` is a placeholder for the actual data type you wish to store (e.g., `int`, `char*`). The `struct sllist* next;` line creates a self-referential structure, allowing each node to point to another node of the same type.

### Key Operations on Singly-Linked Lists

#### 1. Creation

Creating a new singly-linked list typically starts with an empty list, represented by a `head` pointer initialized to `NULL`. When the first node is added, the `head` pointer will point to it.

```c
sllnode* create(VALUE val)
{
    sllnode* new_node = malloc(sizeof(sllnode));
    if (new_node == NULL)
    {
        return NULL; // Handle memory allocation failure
    }
    new_node->val = val;
    new_node->next = NULL;
    return new_node;
}
```

#### 2. Insertion

Inserting a new node into a singly-linked list can be done at various positions:

*   **At the beginning (prepend):** This is the most straightforward. The new node's `next` pointer points to the current head, and the head is updated to be the new node.

    ```c
    sllnode* insert_at_beginning(sllnode* head, VALUE val)
    {
        sllnode* new_node = create(val);
        if (new_node == NULL)
        {
            return head; // Handle error
        }
        new_node->next = head;
        return new_node; // New head
    }
    ```

*   **At the end (append):** Traverse the list until the last node (where `next` is `NULL`), then make its `next` pointer point to the new node.

*   **At a specific position:** Traverse to the node *before* the desired insertion point, then adjust pointers.

#### 3. Search

Searching for a value in a singly-linked list involves traversing the list from the head, comparing each node's data with the target value until a match is found or the end of the list is reached.

```c
bool find(sllnode* head, VALUE val)
{
    sllnode* cursor = head;
    while (cursor != NULL)
    {
        if (cursor->val == val)
        {
            return true;
        }
        cursor = cursor->next;
    }
    return false;
}
```

#### 4. Deletion

Deleting a node from a singly-linked list requires careful handling of pointers. To delete a node, you need to update the `next` pointer of the *previous* node to bypass the node being deleted. This means you often need to keep track of both the current node and its predecessor during traversal.

*   **Deleting the head node:** Simply update the `head` pointer to point to the second node.
*   **Deleting a middle or last node:** Find the node to be deleted and its predecessor. Update the predecessor's `next` pointer to point to the deleted node's `next`.

After deletion, the memory occupied by the deleted node should be freed to prevent memory leaks.

#### 5. Traversal

To visit each node in a singly-linked list, you start at the head and follow the `next` pointers until you reach a `NULL` pointer.

### Advantages and Disadvantages

**Advantages:**

*   **Dynamic Size:** Linked lists can grow or shrink as needed, making them memory-efficient for situations where the number of elements is unknown or fluctuates.
*   **Efficient Insertions and Deletions:** Adding or removing elements is generally efficient (O(1) if the position is known, O(n) if searching for the position), as it only requires updating a few pointers, unlike arrays which may require shifting many elements.

**Disadvantages:**

*   **No Random Access:** To access an element at a specific index, you must traverse the list from the beginning, which can be slow (O(n)).
*   **More Memory Overhead:** Each node requires extra memory for the pointer(s) in addition to the data itself.
*   **No Cache Locality:** Elements are not stored contiguously, which can lead to poorer cache performance compared to arrays.

### Conclusion

Singly-linked lists are a versatile data structure suitable for applications requiring frequent insertions and deletions, especially when the size of the collection is dynamic. While they lack the random access efficiency of arrays, their flexibility in memory management and ease of modification make them a valuable tool in a programmer's arsenal. Understanding their mechanics is crucial for building more complex data structures like stacks, queues, and hash tables that often utilize linked lists as their underlying implementation.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/1- Structures|CS50x Short: Structures]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/3- Doubly Linked Lists|CS50x Short: Doubly-Linked Lists]]
