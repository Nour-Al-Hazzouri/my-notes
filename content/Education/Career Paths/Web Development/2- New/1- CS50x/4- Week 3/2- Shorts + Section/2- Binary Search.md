# Binary Search

Binary search is a highly efficient algorithm for finding a specific element within a **sorted** array. Unlike linear search, which checks each element sequentially, binary search uses a "divide and conquer" strategy to narrow down the search area by half in each step.

## Key Requirement: Sorted Array

For binary search to work correctly, the array **must be sorted** in ascending order. This is because the algorithm relies on making assumptions about the contents of the array based on the middle element. If the array is not sorted, these assumptions are invalid, and the algorithm will not produce the correct result.

## Algorithm in Pseudocode

1.  **Repeat** until the (sub)array is of size 0:
2.  Calculate the **middle point** of the current (sub)array.
3.  If the target is at the middle, **stop**.
4.  Otherwise, if the target is **less than** what’s at the middle, repeat, changing the **end point** to be just to the left of the middle.
5.  Otherwise, if the target is **greater than** what’s at the middle, repeat, changing the **start point** to be just to the right of the middle.

## Example: Finding an Element

Consider a sorted array and a target value of `19`.

Array: `[6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30]`
Target: `19`

1.  **Initial Search:**
    *   `start` = 0, `end` = 14
    *   `mid` = (0 + 14) / 2 = 7. The element at index 7 is `15`.
    *   Is `19` equal to `15`? No. Is `19` greater than `15`? Yes.
    *   New `start` = `mid` + 1 = 8. `end` remains 14.

2.  **Second Search:**
    *   `start` = 8, `end` = 14
    *   `mid` = (8 + 14) / 2 = 11. The element at index 11 is `23`.
    *   Is `19` equal to `23`? No. Is `19` less than `23`? Yes.
    *   New `end` = `mid` - 1 = 10. `start` remains 8.

3.  **Third Search:**
    *   `start` = 8, `end` = 10
    *   `mid` = (8 + 10) / 2 = 9. The element at index 9 is `19`.
    *   Is `19` equal to `19`? Yes. **Stop**. The element is found.

## Example: Element Not Found

If the target element is not in the array, the search will continue until the `start` index becomes greater than the `end` index, at which point the (sub)array size is 0, and the algorithm concludes that the element is not present.

## Time Complexity

### Best Case Scenario

-   The target element is the **middle element** of the array.
-   The algorithm finds the element on the first try.
-   Time Complexity: **Ω(1)** (Omega of 1) - constant time.

### Worst Case Scenario

-   The target element is not in the array, or it is found after the maximum number of divisions.
-   The algorithm repeatedly divides the search space in half.
-   Time Complexity: **O(log n)** (Big O of log n) - logarithmic time, where 'n' is the number of elements in the array. This is significantly faster than linear search for large arrays.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/1- Linear Search|Linear Search]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/3- Bubble Sort|Bubble Sort]]
