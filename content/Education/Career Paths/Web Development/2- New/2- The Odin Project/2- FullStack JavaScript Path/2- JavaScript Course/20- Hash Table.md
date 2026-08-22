A Hash Table (or HashMap) is a data structure designed for ultra-fast data retrieval. It combines the speed of an **array** with the flexibility of **linked lists**.

By using a "key" (like a name) to find a "value" (like a phone number), it allows you to jump directly to data without searching through a whole list.

### 1. The Hashing Function

A hash function is a "pure function" that takes an input (the key) and generates a corresponding number called a **hash code**. It must always return the same number for the same input and cannot be reversed (you can't turn the number back into the name).

```js
hash(key) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }
  return hashCode;
}
```

**Line-by-Line Breakdown:**

- **`let hashCode = 0;`**: We initialize a variable to hold our accumulating number.
- **`const primeNumber = 31;`**: We use a prime number because it helps distribute hash codes more uniquely across buckets, reducing the chance of collisions.
- **`for (let i = 0; i < key.length; i++)`**: We loop through every character in the string key.
- **`key.charCodeAt(i)`**: This is a **native JavaScript method** that returns the numeric Unicode value of a character (e.g., "A" is 65). Developers use this to convert letters into math-friendly numbers.
- **`hashCode = primeNumber * hashCode + ...`**: By multiplying the previous hash by a prime and adding the new character, we ensure that "Sara" and "raSa" result in different numbers even though they have the same letters.

---

### 2. Buckets and the Modulo Operator

Once you have a large hash code (like 20,353,924), you need to fit it into your array. We use **buckets**, which are just the individual slots (indices) of our array.

```js
const index = hashCode % buckets.length;
```

**Line-by-Line Breakdown:**

- **`const index`**: This will be the actual spot in the array where we store the data.
- **`%` (Modulo)**: This is a **native mathematical operator** that returns the remainder of a division. For example, `20 % 16` is `4`.
- **`buckets.length`**: By using modulo with the array's size, we guarantee the resulting index is always between `0` and `length - 1`, perfectly fitting our array.

---

### 3. Handling Collisions (Chaining)

A **collision** occurs when two different keys result in the same array index. We solve this by making each bucket a **Linked List**. Instead of storing one value, the bucket stores a "head" node that points to other nodes.

```js
set(key, value) {
  const index = this.hash(key) % this.buckets.length;
  if (!this.buckets[index]) {
    this.buckets[index] = new LinkedList(key, value);
  } else {
    this.buckets[index].append(key, value);
  }
}
```

**Line-by-Line Breakdown:**

- **`if (!this.buckets[index])`**: We check if the bucket is currently empty.
- **`new LinkedList(key, value)`**: If empty, we start a new list here.
- **`this.buckets[index].append(key, value)`**: If a collision happens (something is already there), we simply add a new node to the end of that specific bucket's list.

---

### 4. Growth and Load Factor

To keep the speed at **$O(1)$**, we must ensure the linked lists stay very short. We do this by "growing" the table when it gets too full.

- **Capacity:** The total number of buckets (usually starts at 16).
- **Load Factor:** A percentage (like 0.75 or 75%) that tells the table when to grow.
- **Resizing:** When the number of entries exceeds `Capacity * Load Factor`, we double the buckets and **re-hash** every item into their new spots.

---

### Summary Revision

**Hash Function** - A process that turns a key into a unique number - `hashCode = 31 * hashCode + key.charCodeAt(i);`

- **`31`**: A prime number used by convention to distribute keys evenly.
- **`charCodeAt(i)`**: Native method to get a character's numeric value.

**Buckets** - Array indices where data is stored - `index = hashCode % buckets.length;`

- **`%`**: Modulo operator ensuring the index stays within the array bounds.
- **`buckets.length`**: The current capacity of the array.

**Collisions** - When two keys share an index; resolved by Linked Lists - `buckets[index].append(key, value);`

- **`append`**: A method that adds data to the end of a chain if the bucket is occupied.

**Load Factor & Growth** - The threshold that triggers doubling the array to maintain $O(1)$ speed - `if (size > capacity * loadFactor) grow();`

- **`size`**: Total number of items stored.
- **`capacity * loadFactor`**: The math determining the "fullness" limit before performance drops.

---

### Full Picture Code Example

```js
class HashMap {
  constructor() {
    this.capacity = 16; // Initial number of buckets
    this.loadFactor = 0.75; // Growth threshold
    this.size = 0; // Current number of items
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    // Check if we need to grow
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key) % this.capacity;

    // If bucket is empty, create a list
    if (this.buckets[index] === null) {
      this.buckets[index] = []; // Using array as a simple list for this example
    }

    // Check if key exists to overwrite, otherwise add new
    const bucket = this.buckets[index];
    for (let pair of bucket) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size++;
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    if (!bucket) return null;

    for (let pair of bucket) {
      if (pair.key === key) return pair.value;
    }
    return null;
  }
}
```
---

**Previous:** [[19.1- Binary Trees]] | **Next:** [[21- Graphs]]