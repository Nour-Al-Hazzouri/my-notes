A **data structure** is a specialized way of organizing and storing data in a computer so that it can be used efficiently for a specific application. You use different data structures because there are always trade-offs; some are faster for adding elements, some for searching, and some are more memory-efficient. Choosing the right structure dramatically affects how well your program performs.

### 1. Stacks (LIFO)

A stack is a linear data structure that follows the **Last-In, First-Out (LIFO)** principle. Think of a stack of books: you add to the top and remove from the top. It is used when you need to reverse the order of elements, like an "Undo" button in an app.

**Code Example: Implementing a Stack**

```js
class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }
}
```

**Line-by-Line Breakdown:**

- `class Stack { ... }`: We use the `class` convention to create a blueprint for our data structure, making it easy to create multiple stacks.
- `this.data = [];`: We initialize an empty array to hold our elements; in this context, the array acts as the container for the stack.
- `push(element) { ... }`: This method adds an item to the "top" of the stack.
- `this.data.push(element);`: We use the native `push()` method, which is a JavaScript convention for adding an element to the end of an array, representing the "top" of our stack.
- `pop() { ... }`: This method removes and returns the most recently added item.
- `return this.data.pop();`: We use the native `pop()` method, which removes the last element from an array, satisfying the LIFO requirement.

---

### 2. Queues (FIFO)

A queue follows the **First-In, First-Out (FIFO)** principle, meaning the first person to join a line is the first one helped. It is essential for managing shared resources, like a printer handling jobs in the order they arrive.

**Code Example: Implementing a Queue**

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }
}
```

**Line-by-Line Breakdown:**

- `enqueue(element) { ... }`: This is the standard term for adding an item to the back of a queue.
- `this.items.push(element);`: We add the new element to the end of the array, which represents the "back" of the line.
- `dequeue() { ... }`: This is the standard term for removing the item from the front of the queue.
- `return this.items.shift();`: We use the native `shift()` method. This is a JavaScript convention that removes the very first item from an array and shifts everything else down, perfectly mimicking a person leaving the front of a line.

---

### 3. Binary Search Trees (BST)

Unlike arrays, a tree is a non-linear data structure. A Binary Search Tree (BST) is organized such that every node has at most two children. For any given node, values smaller than it are stored in its **left** subtree, and values larger are stored in its **right** subtree.

**Code Example: A Simple Node and BST Rule**

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

**Line-by-Line Breakdown:**

- `this.value = value;`: This stores the actual data (like a character or number) in the node.
- `this.left = null;`: We initialize the left pointer to `null`. This is a developer convention to indicate that there is currently no "smaller" child connected to this node.
- `this.right = null;`: Similarly, the right pointer starts as `null` until a "larger" value is added.

---

### 4. Tree Traversal Strategies

The sources highlight two main ways to visit every node in a tree exactly once:

- **Breadth-First (Level Order):** You visit all nodes at one level before moving to the next deeper level. This strategy uses a **Queue** to keep track of "discovered" nodes that haven't been visited yet.
- **Depth-First:** You visit a child and finish its entire subtree before moving to the next sibling. This is usually implemented with **Recursion**, which implicitly uses the system's function call stack. There are three types:
    1. **Preorder:** Visit the node, then left, then right (Data-Left-Right).
    2. **Inorder:** Visit left, then node, then right (Left-Data-Right). In a BST, this gives you the data in sorted order.
    3. **Postorder:** Visit left, then right, then the node (Left-Right-Data).

### Additional Context for Understanding

- **Divide and Conquer:** Binary search (and BSTs) work by splitting a problem in half repeatedly. This makes searching incredibly fast because you "throw away" half the data with every step.
- **Complexity:**
    - **Time:** Most tree traversals take **O(n)** time because you must touch every node once.
    - **Space:** Level Order (Breadth-First) uses extra memory proportional to the width of the tree (storing nodes in a queue), while Depth-First uses memory proportional to the height of the tree (storing calls on the stack).
---

**Previous:** [[18.1- Space Complexity]] | **Next:** [[19.1- Binary Trees]]