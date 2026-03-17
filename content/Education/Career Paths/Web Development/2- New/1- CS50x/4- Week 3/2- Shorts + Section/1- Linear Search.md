# Linear Search

Linear search is an algorithm used to find a specified element within an array. The algorithm works by iterating through the array from left to right, examining each element in turn until the target element is found or the end of the array is reached.

## Algorithm in Pseudocode

1.  **Repeat**, starting at the first element:
2.  If the current element is what you’re looking for (the target), **stop**.
3.  Otherwise, move to the **next element**.

## Example: Finding an Element

Consider an array of numbers and a target value, say `9`.

Array: `[11, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19]`
Target: `9`

1.  Start at the first element (`11`). Is `11` equal to `9`? No. Move to the next.
2.  Next element (`23`). Is `23` equal to `9`? No. Move to the next.
3.  ... (This process continues for `8`, `14`, `30`)
4.  Eventually, we reach `9`. Is `9` equal to `9`? Yes. Stop. The element is found.

## Example: Element Not Found

Consider the same array, but now the target value is `50`.

Array: `[11, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19]`
Target: `50`

1.  The search begins as before, comparing `50` with each element.
2.  The algorithm will iterate through every single element in the array.
3.  After checking all elements, if `50` is not found, the algorithm concludes that `50` is not in the array.

Even if the element is not found, the linear search algorithm is considered successful because it has exhaustively searched through every element and correctly determined the absence of the target.

## Time Complexity

### Best Case Scenario

-   The target element is the **first element** in the array.
-   The algorithm finds the element immediately.
-   Time Complexity: **Ω(1)** (Omega of 1) - constant time, as it only takes one comparison.

### Worst Case Scenario

-   The target element is the **last element** in the array, or the element is **not present** in the array at all.
-   The algorithm has to look through every single element in the array.
-   Time Complexity: **O(n)** (Big O of n) - linear time, where 'n' is the number of elements in the array.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/1- Week 3 Notes|Lecture 3 - CS50x 2025]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/2- Binary Search|Binary Search]]
