# CS50 Scrabble Code Comparison

## Two Approaches to the Scrabble Problem

This document compares two different solutions to the CS50 Scrabble problem set.

## Your Approach

```c
#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // The arrays which will ontain the letter and their values:
    char p1[10] = {'a', 'e', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u'};
    char p2[2] = {'d', 'g'};
    char p3[4] = {'b', 'c', 'm', 'p'};
    char p4[5] = {'f', 'h', 'v', 'w', 'y'};
    char p5[1] = {'k'};
    char p8[2] = {'j', 'x'};
    char p10[2] = {'q', 'z'};
    int score1 = 0;
    int score2 = 0;

    // Prompt the user for two words:
    string word1 = get_string("Player 1: \n");
    string word2 = get_string("Player 2: \n");

    // Compute the score of each word:
    // Word 1:
    for (int i = 0; i < strlen(word1); i++)
    {
        word1[i] = tolower(word1[i]);
        for (int b = 0; b < 10; b++)
        {
            if (word1[i] == p1[b])
            {
                score1++;
            }
        }
        // Multiple nested loops checking each letter against each array
        // ... (similar code for other point values)
    }

    // Word 2:
    // Same process repeated for word2
    // ...

    // Print the winner
    if (score1 > score2)
    {
        printf("Player 1 wins! \n");
    }
    else if (score2 > score1)
    {
        printf("Player 2 wins! \n");
    }
    else
    {
        printf("Tie! \n");
    }
}
```

## Course's Approach

```c
#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    // Prompt the user for two words
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Compute the score of each word
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // Print the winner   
    if (score1 > score2)
    {
        printf("Player 1 wins!\n");
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins!\n");
    }
    else
    {
        printf("Tie!\n");
    }
}

int compute_score(string word)
{
    // Keep track of score
    int score = 0;

    // Compute score for each character
    for (int i = 0, len = strlen(word); i < len; i++)
    {
        if (isupper(word[i]))
        {
            score += POINTS[word[i] - 'A'];
        }
        else if (islower(word[i]))
        {
            score += POINTS[word[i] - 'a'];
        }
    }

    return score;
}
```

## Key Differences

1. **Data Structure:**
   - Your approach: Multiple arrays for different point values
   - Course approach: Single array where index corresponds to letter position

2. **Code Organization:**
   - Your approach: All code in main function
   - Course approach: Separate function for score computation

3. **Letter Processing:**
   - Your approach: Multiple nested loops to check each letter
   - Course approach: Direct indexing using ASCII math

4. **Efficiency:**
   - Your approach: O(n*m) where n is word length and m is total letters across arrays
   - Course approach: O(n) where n is word length

## How the Course's Approach Works

The key insight in the course's solution is using ASCII math to map letters to array indices:

1. The POINTS array is arranged so each index corresponds to a letter's position in the alphabet:
   - POINTS[0] = points for 'A'/'a' (1 point)
   - POINTS[1] = points for 'B'/'b' (3 points)
   - And so on...

2. When you subtract 'A' from any uppercase letter (or 'a' from any lowercase letter), you get its position in the alphabet (0-25):
   - 'C' - 'A' = 67 - 65 = 2 (index for 'C')
   - 'h' - 'a' = 104 - 97 = 7 (index for 'h')

3. This position is used as an index into the POINTS array to get the correct point value:
   - POINTS[2] = 3 (points for 'C'/'c')
   - POINTS[7] = 4 (points for 'H'/'h')

This approach eliminates the need for multiple arrays and nested loops, making the solution more elegant and efficient.

## Example Calculation

For the word "Hello":
1. 'H': uppercase, so 'H' - 'A' = 72 - 65 = 7, POINTS[7] = 4
2. 'e': lowercase, so 'e' - 'a' = 101 - 97 = 4, POINTS[4] = 1
3. 'l': lowercase, so 'l' - 'a' = 108 - 97 = 11, POINTS[11] = 1
4. 'l': lowercase, so 'l' - 'a' = 108 - 97 = 11, POINTS[11] = 1
5. 'o': lowercase, so 'o' - 'a' = 111 - 97 = 14, POINTS[14] = 1

Total score: 4 + 1 + 1 + 1 + 1 = 8

---
