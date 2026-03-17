# CS50x Short: Queues

## Introduction to Queues

A queue is a fundamental linear data structure that adheres to the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed. Think of a real-world queue, like people waiting in line at a bank or a supermarket: the person who arrives first is served first. This strict ordering makes queues ideal for managing tasks where the order of processing is critical, such as print job scheduling, breadth-first search (BFS) algorithms, or handling requests in a web server.

### Core Operations: Enqueue and Dequeue

The two primary operations associated with a queue are:

*   **Enqueue:** Adds a new element to the rear (or end) of the queue. If the queue is empty, the new element becomes the first element.
*   **Dequeue:** Removes the element from the front of the queue. This operation typically returns the removed element. If the queue is empty, attempting to dequeue an element usually results in an error or an underflow condition.

### Implementation of Queues

Queues, like stacks, can be implemented using either arrays or linked lists. Each approach has its own set of trade-offs.

#### 1. Array-Based Implementation

In an array-based implementation, a fixed-size array is used to store the queue elements. To manage the front and rear of the queue efficiently, two pointers (or indices) are typically maintained: `front` (pointing to the first element) and `size` (representing the number of elements currently in the queue). A common technique to utilize the array efficiently is to treat it as a circular array, where the rear wraps around to the beginning of the array when it reaches the end.

**Structure Definition (C example):**

```c
typedef struct _queue
{
    VALUE array[CAPACITY]; // Array to store queue elements
    int front;             // Index of the front element
    int size;              // Current number of elements in the queue
} queue;
```

Here, `VALUE` is a placeholder for the data type of elements in the queue, and `CAPACITY` is a pre-defined constant for the maximum size. The `front` index indicates where the next element to be dequeued is located, and `size` tracks how many elements are currently in the queue.

**Enqueue Operation (Conceptual):**

1.  Check if the queue is full (i.e., `size` equals `CAPACITY`). If full, the enqueue operation cannot be performed (overflow).
2.  Calculate the `rear` index: `rear = (front + size) % CAPACITY`.
3.  Place the new element at `array[rear]`.
4.  Increment `size`.

**Dequeue Operation (Conceptual):**

1.  Check if the queue is empty (i.e., `size` is 0). If empty, the dequeue operation cannot be performed (underflow).
2.  Retrieve the element from `array[front]`.
3.  Increment `front`: `front = (front + 1) % CAPACITY`.
4.  Decrement `size`.

**Advantages of Array-Based Queues:**

*   **Efficient Access:** Direct access to elements using array indices, leading to fast enqueue and dequeue operations (O(1) time complexity).
*   **Memory Locality:** Elements are stored contiguously, which can improve cache performance.

**Disadvantages of Array-Based Queues:**

*   **Fixed Size:** The primary limitation is the fixed size. The queue cannot exceed its `CAPACITY`, which can lead to overflow if more elements are enqueued than the array can hold.
*   **Wasted Space (without circular implementation):** If not implemented as a circular array, dequeued elements can leave unused space at the beginning of the array, even if there's space at the end.

#### 2. Linked List-Based Implementation

In a linked list-based implementation, each element of the queue is a node in a singly-linked list. To maintain the FIFO order, elements are enqueued at the rear of the list and dequeued from the front. This typically involves maintaining pointers to both the `front` and `rear` nodes of the linked list.

**Node Structure (C example):**

```c
typedef struct node
{
    VALUE data;
    struct node* next;
} node;
```

**Queue Structure (C example):**

```c
typedef struct _queue_ll
{
    node* front; // Pointer to the front of the queue
    node* rear;  // Pointer to the rear of the queue
} queue_ll;
```

**Enqueue Operation (Conceptual):**

1.  Create a new node with the given data.
2.  If the queue is empty, set both `front` and `rear` to the new node.
3.  Otherwise, set `rear->next` to the new node, and then update `rear` to point to the new node.

**Dequeue Operation (Conceptual):**

1.  Check if the `front` is `NULL`. If so, the queue is empty (underflow).
2.  Store a temporary pointer to the current `front`.
3.  Retrieve the data from the temporary node.
4.  Update `front` to `front->next`.
5.  If `front` becomes `NULL` after dequeuing, it means the queue is now empty, so set `rear` to `NULL` as well.
6.  Free the memory of the temporary node.

**Advantages of Linked List-Based Queues:**

*   **Dynamic Size:** Can grow or shrink dynamically as needed, as memory is allocated and deallocated for each node individually. This overcomes the fixed-size limitation of array-based implementations.
*   **No Overflow (theoretically):** As long as memory is available, a linked list-based queue will not overflow.

**Disadvantages of Linked List-Based Queues:**

*   **Increased Memory Overhead:** Each node requires additional memory for the `next` pointer, which can be significant for queues storing small data types.
*   **Slightly More Complex Implementation:** The implementation involves managing pointers, which can be more complex and prone to errors than array indexing.

### Applications of Queues

Queues are widely used in computer science for various purposes, including:

*   **Operating Systems:** Managing processes, handling interrupts, and scheduling tasks.
*   **Networking:** Buffering data packets, managing network traffic.
*   **Simulations:** Modeling real-world waiting lines, such as customer service lines or traffic flow.
*   **Breadth-First Search (BFS):** A graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

### Conclusion

Queues are essential data structures characterized by their FIFO behavior. They provide a fair and ordered way to process elements, making them indispensable in various computing applications where the sequence of operations is critical. The choice between array-based and linked list-based implementations depends on factors such as the expected maximum size of the queue, memory constraints, and the complexity of implementation desired.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/4- Stacks|CS50x Short: Stacks]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/6- Hash Tables|CS50x Short: Hash Tables]]
