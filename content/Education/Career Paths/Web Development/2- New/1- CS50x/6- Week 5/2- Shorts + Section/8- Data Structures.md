# Data Structures

This short provides an overview of fundamental data structures covered in CS50, including arrays, linked lists, hash tables, and tries. It discusses their characteristics, performance for common operations (insertion, deletion, lookup), and suitability for different scenarios.

## Overview of Data Structures

CS50 has introduced various data structures like arrays, linked lists, hash tables, tries, stacks, queues, trees, and heaps. These can generally be categorized into four basic ideas: arrays, linked lists, hash tables, and tries. Understanding their pros and cons is crucial for choosing the right data structure for a particular situation.

## Arrays

Arrays are a fundamental data structure with specific performance characteristics:

*   **Insertion**: Generally bad, especially when inserting into the middle, as it requires shifting many elements. Insertion at the end is acceptable if building the array sequentially.
*   **Deletion**: Also generally bad, unless deleting from the end, as it requires shifting elements to fill gaps.
*   **Lookup**: Excellent. Arrays offer random access, meaning elements can be accessed in constant time (O(1)) by their index. For example, to find the 7th element, you directly go to array location 7.
*   **Sorting**: Relatively easy to sort. Many sorting algorithms like selection sort, insertion sort, bubble sort, and merge sort are typically demonstrated and implemented using arrays.
*   **Size**: Relatively small and efficient in terms of space, as you allocate only as much memory as needed for the data.
*   **Flexibility**: Lacks flexibility. Arrays have a fixed size declared at creation. Growing or shrinking an array requires creating an entirely new array and copying all elements, which can be inefficient.

## Linked Lists

Linked lists offer different trade-offs compared to arrays:

*   **Insertion**: Relatively easy, especially when adding to the front. It primarily involves changing pointers.
*   **Deletion**: Easy once the element to be deleted is found. It involves changing one or two pointers (for doubly linked lists) and then freeing the node, without requiring shifting of elements.
*   **Lookup**: Bad. Linked lists do not support random access. To find an element, a linear search is required, starting from the beginning and traversing through the list.
*   **Sorting**: Difficult to sort after construction. If sorting is desired, it's best done during construction, which then compromises the speed of insertion.
*   **Size**: Pretty small size-wise, though doubly linked lists are slightly larger than singly linked lists.
*   **Flexibility**: Flexible. Linked lists can grow and shrink dynamically as needed without requiring reallocation and copying of the entire structure.

## Hash Tables

Hash tables combine aspects of arrays and linked lists, offering fast average-case performance:

*   **Insertion**: Great. It's a constant-time operation (O(1) on average). The key is hashed to determine the correct bucket (an array index), and the element is then placed into the linked list at that bucket.
*   **Deletion**: Great. Also a constant-time operation (O(1) on average). The key is hashed to find the bucket, and the element is deleted from the linked list within that bucket.
*   **Lookup**: Great. Constant-time lookup (O(1) on average). The key is hashed to find the bucket, and the element is found within the linked list at that bucket.
*   **Sorting**: Bad. Hash tables are not designed for sorting. If sorting is required, elements typically need to be copied out into an array and then sorted.
*   **Size**: Can be inefficient size-wise. They often require declaring an array large enough to hold all elements plus some empty space, leading to potential wasted memory.
*   **Flexibility**: Not flexible. Like arrays, they have a declared size and require rehashing and copying all elements to a new, larger hash table if more space is needed.

## Tries

Tries (prefix trees) are specialized tree-like data structures primarily used for efficient retrieval of keys in a dataset of strings:

*   **Insertion**: Great. Constant-time insertion (O(1) on average). Elements are added as needed by traversing characters and creating new nodes if they don't exist.
*   **Deletion**: Great. Constant-time deletion (O(1) on average). Elements are removed by traversing and unmarking nodes, and potentially deleting nodes if they have no other children.
*   **Lookup**: Great. Constant-time lookup (O(1) on average). Elements are found by traversing characters.
*   **Sorting**: Bad. Tries are not inherently sorted in a way that allows for easy retrieval of sorted data. If sorted output is needed, elements must be extracted and sorted separately.
*   **Size**: Can be inefficient size-wise. They can rapidly become very large, even with relatively small amounts of data, due to the overhead of storing pointers for each character.
*   **Flexibility**: Not flexible. Similar to hash tables, they require a declared size and copying to a new trie if more space is needed.

## Conclusion

Each data structure has its strengths and weaknesses. The choice depends on the specific requirements of the application, particularly the frequency of insertion, deletion, and lookup operations, and constraints on memory usage and the need for sorted data.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/7- Tries|CS50x Short: Tries]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/CS50 Week 5_ Data Structures - Comprehensive Summary|CS50 Week 5: Data Structures - Comprehensive Summary]]
