# Merge Sort

Merge Sort is an efficient, comparison-based sorting algorithm that leverages the power of recursion to sort an array. Unlike simpler sorting algorithms like Bubble Sort, Insertion Sort, or Selection Sort, which have a worst-case time complexity of O(n^2), Merge Sort consistently achieves a time complexity of O(n log n), making it a more suitable choice for larger datasets.

## How Merge Sort Works

The core idea behind Merge Sort is to break down a large, unsorted array into smaller sub-arrays until each sub-array contains only one element (which is inherently sorted). Then, these single-element sub-arrays are repeatedly merged back together in a sorted manner until the entire array is sorted.

Merge Sort follows a Divide and Conquer paradigm, which can be broken down into three main steps:

1.  **Divide:** Recursively divide the unsorted array into two halves until each sub-array contains only one element. A single-element array is considered sorted by definition.
2.  **Conquer (Sort):** Each single-element sub-array is trivially sorted.
3.  **Combine (Merge):** Repeatedly merge the sorted sub-arrays to produce new sorted sub-arrays until there is only one sorted array remaining. The merging process is crucial and involves comparing elements from the two sub-arrays and placing them into a new array in sorted order.

### Pseudocode for Merge Sort

```
merge_sort(array):
    if array.length <= 1:
        return array

    mid = array.length / 2
    left_half = array[0 to mid-1]
    right_half = array[mid to array.length-1]

    sorted_left = merge_sort(left_half)
    sorted_right = merge_sort(right_half)

    return merge(sorted_left, sorted_right)

merge(left_array, right_array):
    result = empty_array
    left_index = 0
    right_index = 0

    while left_index < left_array.length and right_index < right_array.length:
        if left_array[left_index] <= right_array[right_index]:
            add left_array[left_index] to result
            left_index = left_index + 1
        else:
            add right_array[right_index] to result
            right_index = right_index + 1

    while left_index < left_array.length:
        add left_array[left_index] to result
        left_index = left_index + 1

    while right_index < right_array.length:
        add right_array[right_index] to result
        right_index = right_index + 1

    return result
```

## Time Complexity

Merge Sort has a time complexity of O(n log n) in all cases (best, average, and worst). This is because:

*   **Dividing:** The process of dividing the array into halves takes logarithmic time (log n) because the array is repeatedly halved until single elements are reached.
*   **Merging:** The merging process involves iterating through the elements of the sub-arrays, which takes linear time (n) for each level of merging.

Therefore, the total time complexity is the product of these two factors: n * log n.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/5- Call Stacks|Call Stacks]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/7- Recursion|Recursion]]
