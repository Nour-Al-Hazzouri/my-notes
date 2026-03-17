# Selection Sort

Selection Sort is a sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning of the sorted part. This process effectively builds the sorted list one element at a time.

## Basic Idea

The core idea of Selection Sort is to:
1.  Find the smallest unsorted element.
2.  Add it to the end of the sorted list (which means swapping it with the first element of the unsorted part).

## Algorithm in Pseudocode

**Repeat** until no unsorted elements remain:
1.  Search through the **unsorted part** of the data to find the **smallest value**.
2.  **Swap** the smallest found value with the **first element** of the unsorted part.

## Example Walkthrough

Let's consider an unsorted array: `[5, 2, 1, 3, 6, 4]`

Initially, the entire array is unsorted (indicated by red in visuals).

### Pass 1

*   **Unsorted part**: `[5, 2, 1, 3, 6, 4]`
*   **Smallest value found**: `1`
*   **First element of unsorted part**: `5`
*   **Swap** `1` and `5`. Array becomes: `[1, 2, 5, 3, 6, 4]`
*   Now, `1` is sorted (indicated by blue in visuals). The unsorted part starts from index 1.

### Pass 2

*   **Unsorted part**: `[2, 5, 3, 6, 4]`
*   **Smallest value found**: `2`
*   **First element of unsorted part**: `2`
*   **Swap** `2` and `2`. Array remains: `[1, 2, 5, 3, 6, 4]`
*   Now, `2` is sorted. The unsorted part starts from index 2.

### Pass 3

*   **Unsorted part**: `[5, 3, 6, 4]`
*   **Smallest value found**: `3`
*   **First element of unsorted part**: `5`
*   **Swap** `3` and `5`. Array becomes: `[1, 2, 3, 5, 6, 4]`
*   Now, `3` is sorted. The unsorted part starts from index 3.

### Pass 4

*   **Unsorted part**: `[5, 6, 4]`
*   **Smallest value found**: `4`
*   **First element of unsorted part**: `5`
*   **Swap** `4` and `5`. Array becomes: `[1, 2, 3, 4, 6, 5]`
*   Now, `4` is sorted. The unsorted part starts from index 4.

### Pass 5

*   **Unsorted part**: `[6, 5]`
*   **Smallest value found**: `5`
*   **First element of unsorted part**: `6`
*   **Swap** `5` and `6`. Array becomes: `[1, 2, 3, 4, 5, 6]`
*   Now, `5` is sorted. The unsorted part starts from index 5.

### Pass 6

*   **Unsorted part**: `[6]`
*   **Smallest value found**: `6`
*   **First element of unsorted part**: `6`
*   **Swap** `6` and `6`. Array remains: `[1, 2, 3, 4, 5, 6]`
*   Now, `6` is sorted. No unsorted elements remain.

The array is now fully sorted: `[1, 2, 3, 4, 5, 6]`.

## Time Complexity

Selection Sort has the same time complexity for both best-case and worst-case scenarios because it always performs the same number of comparisons and swaps, regardless of the initial arrangement of the elements.

### Best Case Scenario

-   The array is already sorted.
-   Time Complexity: **Ω(n^2)** (Omega of n squared) - quadratic time.

### Worst Case Scenario

-   The array is sorted in reverse order.
-   Time Complexity: **O(n^2)** (Big O of n squared) - quadratic time.

In both cases, for an array of `n` elements, the algorithm performs approximately `n` passes. In the first pass, it makes `n-1` comparisons, in the second `n-2`, and so on. This results in a total of `(n-1) + (n-2) + ... + 1` comparisons, which is roughly `n^2 / 2`.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/3- Bubble Sort|Bubble Sort]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/5- Call Stacks|Call Stacks]]
