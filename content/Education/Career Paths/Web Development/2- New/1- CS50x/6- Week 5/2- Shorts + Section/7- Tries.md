
# CS50x Short: Tries

## Introduction to Tries

Tries, also known as prefix trees or digital trees, are a specialized tree-like data structure primarily used for efficient retrieval of keys in a dataset where keys are typically strings. Unlike binary search trees or hash tables, which store entire keys at nodes, tries store individual characters (or components) of a key at each node. This hierarchical structure allows for very fast prefix-based searches and auto-completion functionalities, making them particularly useful in applications like dictionaries, spell checkers, and IP routing.

### Structure of a Trie Node

Each node in a trie typically consists of:

1.  **An array of pointers (or children):** Each element in the array corresponds to a possible character in the alphabet (e.g., 26 for lowercase English letters, or more for extended character sets). A `NULL` pointer indicates that no child node exists for that character.
2.  **A boolean flag (or marker):** This flag indicates whether the current node represents the end of a valid word or key. For example, if a trie stores words, this flag would be true for nodes that complete a word.

For example, a trie node in C might be defined as:

```c
typedef struct trie_node
{
    bool is_word;                 // True if this node marks the end of a word
    struct trie_node* children[ALPHABET_SIZE]; // Pointers to child nodes
} trie_node;
```

Here, `ALPHABET_SIZE` would be a constant representing the size of the alphabet (e.g., 26 for 'a' through 'z').

### Key Operations on Tries

#### 1. Insertion

To insert a word into a trie, you start at the root node and traverse the trie character by character. For each character in the word:

1.  Determine the index corresponding to the character (e.g., 'a' maps to 0, 'b' to 1, etc.).
2.  If the child pointer at that index is `NULL`, create a new trie node and assign its address to that pointer.
3.  Move to the child node and repeat the process for the next character.
4.  Once all characters of the word have been processed, set the `is_word` flag of the final node to `true`.

Example: Inserting 


Example: Inserting "CAT"

*   Start at the root.
*   For 'C': If `root->children['C']` is `NULL`, create a new node. Move to this new node.
*   For 'A': If `current_node->children['A']` is `NULL`, create a new node. Move to this new node.
*   For 'T': If `current_node->children['T']` is `NULL`, create a new node. Move to this new node.
*   Set `current_node->is_word = true`.

#### 2. Search

To search for a word in a trie, you follow a similar traversal path as insertion:

1.  Start at the root node and traverse the trie character by character.
2.  For each character, determine the corresponding index and check if the child pointer at that index is `NULL`. If it is, the word is not in the trie.
3.  If the child pointer is not `NULL`, move to that child node and continue with the next character.
4.  If all characters of the word have been successfully traversed, check the `is_word` flag of the final node. If it is `true`, the word exists in the trie; otherwise, it is a prefix of another word but not a word itself.

Example: Searching for "CAT"

*   Start at the root.
*   Follow path for 'C', then 'A', then 'T'.
*   If all nodes exist and the `is_word` flag at the 'T' node is `true`, then "CAT" is in the trie.

#### 3. Deletion

Deletion in a trie is more complex than insertion or search, as it involves removing nodes that are no longer part of any valid word. A common approach is to traverse the trie to the node representing the end of the word to be deleted. Then, mark `is_word` as `false`. If this node has no other children and is not a prefix for any other word, it can be safely deleted. This process might recursively delete parent nodes if they also become redundant.

### Advantages and Disadvantages

**Advantages:**

*   **Efficient Prefix Matching:** Tries are exceptionally good for operations involving prefixes, such as auto-completion, spell checking, and finding all words with a common prefix.
*   **Fast Search, Insertion, and Deletion:** In the best case, these operations can be very fast, often proportional to the length of the key (L), rather than the number of keys (N) or log(N) as in balanced trees. This is because each character lookup is constant time.
*   **No Collisions:** Unlike hash tables, tries do not suffer from collisions, which simplifies their implementation and guarantees consistent performance.

**Disadvantages:**

*   **High Memory Consumption:** Tries can consume a significant amount of memory, especially if the alphabet size is large or if the keys are very long and diverse. Each node requires an array of pointers, many of which might be `NULL`.
*   **Complexity for Non-String Keys:** While primarily designed for strings, adapting tries for other data types (e.g., numbers) can be more complex.

### Applications of Tries

Tries are used in a variety of applications, including:

*   **Dictionaries and Spell Checkers:** Efficiently storing and searching for words, and suggesting corrections for misspelled words.
*   **Auto-completion and Predictive Text:** Providing suggestions as a user types.
*   **IP Routing:** Storing IP addresses and efficiently finding the longest prefix match for routing network packets.
*   **Bioinformatics:** Storing and searching for DNA sequences.

### Conclusion

Tries are a specialized and highly efficient data structure for handling string-based data, particularly when prefix-based operations are frequently required. While they may consume more memory than other data structures, their performance benefits in specific applications make them an invaluable tool for developers. Understanding the unique characteristics of tries and their operational mechanics is crucial for optimizing solutions in areas like text processing and search algorithms.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/6- Hash Tables|CS50x Short: Hash Tables]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/6- Week 5/2- Shorts + Section/8- Data Structures|Data Structures]]
