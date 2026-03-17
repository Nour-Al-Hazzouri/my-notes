# Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm gets its name from the way smaller (or larger) elements "bubble" to their correct positions.

## Basic Idea

The core idea behind Bubble Sort is to move higher-valued elements towards the right end of the array and lower-valued elements towards the left end, ultimately arranging them in ascending order.

## Algorithm in Pseudocode

1.  Set a `swap_counter` to a non-zero value (e.g., -1) to ensure the loop runs at least once.
2.  **Repeat** until the `swap_counter` is 0 (meaning no swaps occurred in a full pass):
    a.  Reset `swap_counter` to 0.
    b.  Iterate through the array, looking at each **adjacent pair** of elements.
    c.  If two adjacent elements are **not in order** (e.g., the left element is greater than the right element for ascending sort), **swap them**.
    d.  After a swap, add 1 to the `swap_counter`.

## Example Walkthrough

Let's consider an unsorted array: `[5, 2, 1, 3, 6, 4]`

### Pass 1

*   `swap_counter` is reset to 0.
*   Compare (5, 2): Out of order. Swap. Array: `[2, 5, 1, 3, 6, 4]`. `swap_counter` = 1.
*   Compare (5, 1): Out of order. Swap. Array: `[2, 1, 5, 3, 6, 4]`. `swap_counter` = 2.
*   Compare (5, 3): Out of order. Swap. Array: `[2, 1, 3, 5, 6, 4]`. `swap_counter` = 3.
*   Compare (5, 6): In order. No swap. Array: `[2, 1, 3, 5, 6, 4]`. `swap_counter` = 3.
*   Compare (6, 4): Out of order. Swap. Array: `[2, 1, 3, 5, 4, 6]`. `swap_counter` = 4.

At the end of Pass 1, the largest element (`6`) has 

bubbled to its correct position at the end of the array. The `swap_counter` is 4, so another pass is needed.

### Pass 2

*   `swap_counter` is reset to 0.
*   Compare (2, 1): Out of order. Swap. Array: `[1, 2, 3, 5, 4, 6]`. `swap_counter` = 1.
*   Compare (2, 3): In order. No swap. Array: `[1, 2, 3, 5, 4, 6]`. `swap_counter` = 1.
*   Compare (3, 5): In order. No swap. Array: `[1, 2, 3, 5, 4, 6]`. `swap_counter` = 1.
*   Compare (5, 4): Out of order. Swap. Array: `[1, 2, 3, 4, 5, 6]`. `swap_counter` = 2.

At the end of Pass 2, the next largest element (`5`) is in its correct position. The `swap_counter` is 2, so another pass is needed.

### Pass 3

*   `swap_counter` is reset to 0.
*   Compare (1, 2): In order. No swap. Array: `[1, 2, 3, 4, 5, 6]`. `swap_counter` = 0.
*   Compare (2, 3): In order. No swap. Array: `[1, 2, 3, 4, 5, 6]`. `swap_counter` = 0.
*   Compare (3, 4): In order. No swap. Array: `[1, 2, 3, 4, 5, 6]`. `swap_counter` = 0.
*   Compare (4, 5): In order. No swap. Array: `[1, 2, 3, 4, 5, 6]`. `swap_counter` = 0.

At the end of Pass 3, the `swap_counter` is 0, indicating that no swaps were made in this pass. This means the array is now sorted: `[1, 2, 3, 4, 5, 6]`.

## Time Complexity

### Best Case Scenario

-   The array is already sorted.
-   The algorithm will make one full pass, find no swaps, and terminate.
-   Time Complexity: **Ω(n)** (Omega of n) - linear time, as it still needs to iterate through all 'n' elements once.

### Worst Case Scenario

-   The array is sorted in reverse order.
-   The algorithm will need to perform approximately `n` passes, and in each pass, it will perform `n` comparisons and potentially `n` swaps.
-   Time Complexity: **O(n^2)** (Big O of n squared) - quadratic time.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/2- Binary Search|Binary Search]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/4- Selection Sort|Selection Sort]]
