Big O Notation is a mathematical tool used in computer science to analyze the performance and scalability of an algorithm. It specifically measures the **worst-case scenario**, showing how the execution time (Time Complexity) or memory usage (Space Complexity) grows as the input size approaches infinity. Instead of measuring seconds—which varies by computer—Big O counts the number of "steps" an algorithm takes to complete.

### Core Rules for Analysis

To simplify complex functions into a single Big O result, follow these four rules:

1. **Always Assume the Worst Case:** We focus on the scenario where the algorithm takes the maximum number of steps (e.g., finding an item at the very end of an array).
2. **Unique Variables for Multiple Inputs:** If a function processes two different inputs, assign them unique variables like $O(a + b)$ or $O(a \times b)$.
3. **Drop the Constants:** Big O ignores fixed numbers that don't change with input size. $O(2n)$ becomes $O(n)$ because the scaling pattern remains linear.
4. **Drop Non-Dominant Terms:** If a function has multiple complexities, only the worst one is kept. $O(n + n^2)$ becomes $O(n^2)$ because, at scale, the $n$ becomes insignificant.

---

### Time Complexity Categories

#### 1. Constant Time: $O(1)$

The algorithm takes the same number of steps regardless of input size.

```js
function getFirstElement(arr) {
  return arr; // Line 1
}
```

- **Line 1:** This is a direct memory lookup. Whether the array has 10 or 10 million items, the computer jumps to the first index in one step.

#### 2. Logarithmic Time: $O(\log n)$

The number of steps increases by one only when the input size doubles. These are often "divide and conquer" algorithms where the data set is halved each step.

```js
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Line 1
    if (arr[mid] === target) return mid;    // Line 2
    if (arr[mid] < target) low = mid + 1;   // Line 3
    else high = mid - 1;                    // Line 4
  }
}
```

- **Line 1:** We calculate the middle of the current range.
- **Line 2:** If the middle is our target, we stop.
- **Line 3-4:** If not, we discard the half of the array that cannot contain the target. By cutting the work in half every time, we achieve logarithmic growth.

#### 3. Linear Time: $O(n)$

The execution time grows in direct proportion to the input size.

```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) { // Line 1
    console.log(arr[i]);                 // Line 2
  }
}
```

- **Line 1:** The loop initializes and checks the condition against the array length.
- **Line 2:** This operation runs exactly $n$ times. If the array doubles, the number of logs doubles.

#### 4. Linearithmic Time: $O(n \log n)$

Usually seen when an $O(n)$ operation is performed for every step of an $O(\log n)$ process, common in efficient sorting like Merge Sort.

```js
function linearithmicExample(n) {
  for (let i = 0; i < n; i++) {           // Line 1: O(n)
    for (let j = 1; j < n; j = j * 2) {   // Line 2: O(log n)
      console.log(i, j);                  // Line 3
    }
  }
}
```

- **Line 1:** This outer loop runs $n$ times.
- **Line 2:** This inner loop doubles $j$ each time, meaning it runs $\log n$ times.
- **Line 3:** Since the inner loop is nested, we multiply the complexities: $n \times \log n$.

#### 5. Quadratic Time: $O(n^2)$

Occurs when you have nested loops over the same collection. Steps grow at the square of the input.

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {   // Line 1
    for (let j = 0; j < arr.length; j++) { // Line 2
      console.log(arr[i], arr[j]);         // Line 3
    }
  }
}
```

- **Line 1:** The outer loop runs $n$ times.
- **Line 2:** For every single iteration of the outer loop, this inner loop runs $n$ times.
- **Line 3:** The total operations are $n \times n$, or $n^2$.

#### 6. Exponential Time: $O(2^n)$

The number of steps doubles with every single addition to the input. Often seen in recursive solutions like the naive Fibonacci.

```js
function fibonacci(n) {
  if (n <= 1) return n;                  // Line 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Line 2
}
```

- **Line 1:** The base case to stop recursion.
- **Line 2:** Each call branches into two more calls. This creates a tree of calls that grows exponentially as $n$ increases.

#### 7. Factorial Time: $O(n!)$

The worst complexity; steps are the product of all integers up to $n$. Common in "brute force" solutions for the Traveling Salesman problem.

---

### Space Complexity

Space complexity analyzes the **auxiliary space** (temporary memory) an algorithm uses, excluding the input itself.

- **Variables:** Basic variables like `let i = 0` are $O(1)$ space because they are reused.
- **Data Structures:** If you create a new array to store $n$ items, it is $O(n)$ space.
- **Call Stack:** Recursive calls take up space in the "Call Stack". Naive recursive Fibonacci is $O(n)$ space because while it makes many calls, only $n$ calls are active on the stack at any one time.

---

### Other Asymptotic Notations

- **Big $\Omega$ (Omega):** The **best-case** scenario (e.g., finding the target at index 0 of an array is $\Omega(1)$).
- **Big $\Theta$ (Theta):** The **average case** or when the best and worst cases are the same.

---

### Summary Revision

**$O(1)$ (Constant)** - Performance is independent of input size.

```js
const item = arr;
```

Directly accesses an index; one step regardless of array size.

**$O(\log n)$ (Logarithmic)** - Steps increase by 1 as data doubles.

```js
while (low <= high) { mid = (low + high) / 2; ... }
```

Cuts the search area in half every iteration (Binary Search).

**$O(n)$ (Linear)** - Steps grow 1:1 with input size.

```js
for (let i = 0; i < n; i++) { ... }
```

Iterates through every element in a list once.

**$O(n \log n)$ (Linearithmic)** - An $O(n)$ operation nested inside a logarithmic one.

```js
for (i...) { for (j = j * 2...) { ... } }
```

An outer loop runs $n$ times, and an inner loop halves the remaining data (Merge Sort).

**$O(n^2)$ (Quadratic)** - Steps grow at the square of the input.

```js
for (i...) { for (j...) { ... } }
```

Nested loops iterating over the same data set.

**$O(2^n)$ (Exponential)** - Steps double with every new input element.

```js
return func(n - 1) + func(n - 2);
```

Recursive calls that branch twice at every level.

**Full Picture Example: Complexity Comparison**

| Notation    | $n=10$ | $n=100$               | Efficiency |
| :---------- | :----- | :-------------------- | :--------- |
| $O(1)$      | 1      | 1                     | Excellent  |
| $O(\log n)$ | ~3     | ~7                    | Good       |
| $O(n)$      | 10     | 100                   | Fair       |
| $O(n^2)$    | 100    | 10,000                | Horrible   |
| $O(2^n)$    | 1,024  | $1.26 \times 10^{30}$ | Avoid      |

---

# Summary PDF

![[The_Big_O_Dashboard.pdf]]---

**Previous:** [[17- Recursion]] | **Next:** [[18.1- Space Complexity]]