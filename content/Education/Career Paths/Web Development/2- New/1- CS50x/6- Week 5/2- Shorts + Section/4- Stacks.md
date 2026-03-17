# CS50x Short: Stacks

## Introduction to Stacks

A stack is a fundamental linear data structure that follows a specific order for operations: Last In, First Out (LIFO). This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates: you can only add a new plate to the top, and you can only remove the topmost plate. This strict ordering makes stacks particularly useful for managing tasks that require a specific sequence of processing, such as function call management in programming languages, undo/redo functionalities in applications, or parsing expressions.

### Core Operations: Push and Pop

The two primary operations associated with a stack are:

*   **Push:** Adds a new element to the top of the stack. If the stack is empty, the new element becomes the first (and only) element.
*   **Pop:** Removes the topmost element from the stack. This operation typically returns the removed element. If the stack is empty, attempting to pop an element usually results in an error or an underflow condition.

### Implementation of Stacks

Stacks can be implemented using either arrays or linked lists. Each approach has its own advantages and disadvantages.

#### 1. Array-Based Implementation

In an array-based implementation, a fixed-size array is used to store the stack elements, along with an integer variable (often called `top` or `_top`) to keep track of the index of the topmost element. The `top` variable is incremented during a `push` operation and decremented during a `pop` operation.

**Structure Definition (C example):**

```c
typedef struct _stack
{
    VALUE array[CAPACITY]; // Array to store stack elements
    int top;               // Index of the topmost element
} stack;
```

Here, `VALUE` is a placeholder for the data type of elements in the stack, and `CAPACITY` is a pre-defined constant representing the maximum number of elements the stack can hold. The `top` variable typically starts at -1 (for an empty stack) or 0 (if the first element is at index 0).

**Push Operation (Conceptual):**

1.  Check if the stack is full (i.e., `top` has reached `CAPACITY - 1`). If full, the push operation cannot be performed (overflow).
2.  Increment `top`.
3.  Place the new element at `array[top]`.

**Pop Operation (Conceptual):**

1.  Check if the stack is empty (i.e., `top` is -1). If empty, the pop operation cannot be performed (underflow).
2.  Retrieve the element from `array[top]`.
3.  Decrement `top`.

**Advantages of Array-Based Stacks:**

*   **Simple Implementation:** Relatively straightforward to implement due to the direct indexing capabilities of arrays.
*   **Efficient Access:** Accessing elements (especially the top) is very fast (O(1) time complexity) because of direct memory access.

**Disadvantages of Array-Based Stacks:**

*   **Fixed Size:** The most significant limitation is the fixed size. Once the array is declared, its size cannot be changed. This can lead to wasted memory if the stack is rarely full, or overflow errors if more elements than `CAPACITY` are pushed.

#### 2. Linked List-Based Implementation

In a linked list-based implementation, each element of the stack is a node in a singly-linked list. The `push` and `pop` operations are performed at the head of the linked list, as this allows for constant-time operations without needing to traverse the list.

**Node Structure (C example):**

```c
typedef struct node
{
    VALUE data;
    struct node* next;
} node;
```

**Stack Structure (C example):**

```c
typedef struct _stack_ll
{
    node* head; // Pointer to the top of the stack (head of the linked list)
} stack_ll;
```

**Push Operation (Conceptual):**

1.  Create a new node with the given data.
2.  Set the `next` pointer of the new node to the current `head` of the stack.
3.  Update the `head` of the stack to point to the new node.

**Pop Operation (Conceptual):**

1.  Check if the `head` is `NULL`. If so, the stack is empty (underflow).
2.  Store a temporary pointer to the current `head`.
3.  Update the `head` of the stack to `head->next`.
4.  Retrieve the data from the temporary node.
5.  Free the memory of the temporary node.

**Advantages of Linked List-Based Stacks:**

*   **Dynamic Size:** Can grow or shrink dynamically as needed, as memory is allocated and deallocated for each node individually. This avoids the fixed-size limitation of array-based implementations.
*   **No Overflow (theoretically):** As long as memory is available, a linked list-based stack will not overflow.

**Disadvantages of Linked List-Based Stacks:**

*   **Increased Memory Overhead:** Each node requires additional memory for the `next` pointer, which can be significant for stacks storing small data types.
*   **Slightly More Complex Implementation:** The implementation involves managing pointers, which can be more complex and prone to errors than array indexing.

### Applications of Stacks

Stacks are widely used in computer science for various purposes, including:

*   **Function Call Management:** Compilers use stacks to manage function calls. When a function is called, its local variables and return address are pushed onto a call stack. When the function returns, these are popped off.
*   **Expression Evaluation:** Stacks are used to evaluate arithmetic expressions, particularly in converting infix expressions to postfix or prefix, and then evaluating them.
*   **Undo/Redo Functionality:** Many applications implement undo/redo features using stacks. Each action is pushed onto an 


stack, and an undo operation pops the last action.
*   **Backtracking Algorithms:** Used in algorithms like depth-first search (DFS) to keep track of paths taken and to backtrack when a dead end is reached.

### Conclusion

Stacks are essential data structures characterized by their LIFO behavior. Whether implemented using arrays or linked lists, they provide a disciplined way to manage data, making them indispensable in various computing applications, from managing program execution to implementing complex algorithms. The choice between array-based and linked list-based implementations depends on the specific requirements of the application, particularly concerning memory efficiency and the need for dynamic resizing.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/3- Doubly Linked Lists|CS50x Short: Doubly-Linked Lists]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/5- Queues|CS50x Short: Queues]]
