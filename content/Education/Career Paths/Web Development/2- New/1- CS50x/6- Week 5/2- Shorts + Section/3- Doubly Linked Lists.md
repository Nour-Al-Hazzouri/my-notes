# CS50x Short: Doubly-Linked Lists

## Introduction to Doubly-Linked Lists

Doubly-linked lists are a variation of linked lists that allow for traversal in both forward and backward directions. While singly-linked lists only contain a pointer to the next node, doubly-linked lists include an additional pointer to the previous node. This added flexibility comes at the cost of increased memory usage per node but offers significant advantages for certain operations, particularly deletion.

### Structure of a Doubly-Linked List Node

Each node in a doubly-linked list typically consists of three components:

1.  **Data (Value):** The actual information stored in the node.
2.  **Next Pointer:** A pointer to the next node in the sequence.
3.  **Previous Pointer:** A pointer to the previous node in the sequence.

For example, a doubly-linked list node in C might be defined as:

```c
typedef struct dllist
{
    VALUE val;
    struct dllist* prev;
    struct dllist* next;
}
dllnode;
```

Here, `VALUE` represents the data type of the value stored in the node (e.g., `int`, `char*`, or a custom `struct`).

### Advantages of Doubly-Linked Lists

The primary advantage of doubly-linked lists over singly-linked lists is the ability to traverse backward. This capability simplifies several operations:

*   **Efficient Deletion:** In a singly-linked list, deleting a node requires knowing the previous node to update its `next` pointer. This often necessitates a separate traversal to find the previous node. In a doubly-linked list, with a `prev` pointer, deletion can be performed in constant time (O(1)) once the node to be deleted is found, as you can easily access and update both the previous and next nodes.
*   **Bidirectional Traversal:** This allows for more flexible algorithms that might need to move back and forth through the list.

### Disadvantages of Doubly-Linked Lists

*   **Increased Memory Usage:** Each node requires an additional pointer (`prev`), which means more memory is consumed per node compared to a singly-linked list. This can be a concern for applications with very large lists or strict memory constraints.
*   **More Complex Operations:** While deletion is simplified, insertion and other operations require updating two pointers (`prev` and `next`) instead of just one, making the logic slightly more involved.

### Key Operations on Doubly-Linked Lists

#### 1. Insertion

Inserting a new node into a doubly-linked list involves updating four pointers:

1.  The `next` pointer of the new node points to the node that was previously next to the insertion point.
2.  The `prev` pointer of the new node points to the node that was previously before the insertion point.
3.  The `next` pointer of the node before the insertion point is updated to point to the new node.
4.  The `prev` pointer of the node after the insertion point is updated to point to the new node.

Special care must be taken when inserting at the beginning or end of the list, or into an empty list.

#### 2. Deletion

Deleting a node from a doubly-linked list is more straightforward than in a singly-linked list:

1.  Update the `next` pointer of the node *before* the deleted node to point to the node *after* the deleted node.
2.  Update the `prev` pointer of the node *after* the deleted node to point to the node *before* the deleted node.
3.  Free the memory of the deleted node.

Again, edge cases like deleting the head, tail, or the only node in the list need to be handled.

### Conclusion

Doubly-linked lists offer enhanced flexibility and efficiency for certain operations, particularly deletion, by allowing bidirectional traversal. The trade-off is increased memory consumption per node and slightly more complex pointer manipulation during insertions. The choice between a singly-linked list and a doubly-linked list depends on the specific requirements of the application, balancing memory usage against the need for efficient backward traversal and deletion.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/2- Singly Linked Lists|CS50x Short: Singly-Linked Lists]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/4- Stacks|CS50x Short: Stacks]]
