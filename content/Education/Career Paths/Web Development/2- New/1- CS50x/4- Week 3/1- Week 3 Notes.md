# Lecture 3 - CS50x 2025

- [Welcome!](#welcome)
- [Linear Search](#linear-search)
- [Binary Search](#binary-search)
- [Running Time](#running-time)
- [search.c](#searchc)
- [phonebook.c](#phonebookc)
- [Structs](#structs)
- [Sortingte](#sorting)
- [Bubble Sort](#bubble-sort)
- [Recursion](#recursion)
- [Merge Sort](#merge-sort)
- [Summing Up](#summing-up)

## Welcome!

- In week zero, we introduced the idea of an _algorithm_: a black box that may take an input and create an output.
- This week, we are going to expand upon our understanding of algorithms through pseudocode and into code itself.
- Also, we are going to consider the efficiency of these algorithms. Indeed, we are going to be building upon our understanding of how to use some of the concepts we discussed last week in building algorithms.
- Recall back to earlier in the course when we introduced the following graph:

![Algorithm Efficiency Graph](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL2FsZ29yaXRobV9lZmZpY2llbmN5X2dyYXBoXzE.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMkZzWjI5eWFYUm9iVjlsWm1acFkybGxibU41WDJkeVlYQm9YekUucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gj2Zy~7YwS3PAgC~a4nE4uFwpbzfBlhwwW0m-EfhP0zsIKHcPNTQcKxxKwsp5fBzKkYq9la7~S6umSNgpMzSYNiOq2YTRhFM5SzBBQ~y-GX9Wvbc69zOVC1zh3wbqQVwrvD02miWxZHtlhHjwU6fENXOFI8LZ8zMmziYm4LWDusDwZnZu6gjdUfCLGtHTZIVEUyKihRLAvN5hB~NavSteeYHAoNuA6uPIsEicoBVX9NgxduSiPrWbXVxXe4zUmHxKeA0bYpqmkmOHeqHo7Q-Julw5zfKDRnvs8Usv2GbO~xOXmqpr9JF4WlZFv0jMmUqloDmnwp~lMRZGEhqXDwp-g__)

- As we step into this week, you should consider how the way an algorithm works with a problem may determine the time it takes to solve a problem! Algorithms can be designed to be more and more efficient to a limit.
- Today, we will focus on the design of algorithms and how to measure their efficiency.

## Linear Search

- Recall that last week, you were introduced to the idea of an _array_, blocks of memory that are consecutive: side-by-side with one another.
- You can metaphorically imagine an array like a series of seven red lockers as follows:

![Red Lockers Array](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL3JlZF9sb2NrZXJzX2FycmF5.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMM0psWkY5c2IyTnJaWEp6WDJGeWNtRjUucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VysGJLYAKO3vlPQM~N4IlB~wcez~P2EoOCRf2B9OzHW3rbqpZjMC2tMaJ3LZAI6TmaY9p68NrWDUFWTe82YddeW~MGr2Bu~eFLMUcFMFDuAiyvVEnC6O0n7XGkoFjV6cWAZ8w1lBqfS-JtLoeo99elPiZBO7Ka86ttljaWwUKj8ux67ED0Zap9uMBBGQ6CNpazNCoWVHQZJKneRmG-EvGKme9y1LqOyKtT~RICcavCsdrBWE6kQeG~FSAGSFgkOpJISlkN-lCT94TH~egyNLRaAfhyxezOe7kiCR5DImfvo0bhoeZXoiaWbjnSDD5ZYx87R~Iy6l8hKRnhoSfzMzzg__)

- The far-left position is called _location 0_ or _the beginning of the array_. The far-right position is _location 7_ or _the end of the array_.
- We can imagine that we have an essential problem of wanting to know, "Is the number 50 inside an array?" A computer must look at each locker to be able to see if the number 50 is inside. We call this process of finding such a number, character, string, or other item _searching_.
- We can potentially hand our array to an algorithm, wherein our algorithm will search through our lockers to see if the number 50 is behind one of the doors, returning the value `true` or `false`.

![Algorithm Diagram](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL2FsZ29yaXRobV9kaWFncmFt.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMkZzWjI5eWFYUm9iVjlrYVdGbmNtRnQucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HRhlsy0LEqCb97xK17h76VwiVtL9T6YDlXGUc7ZE4GxhE9sB37dcc7fk6-hLwEor0t8maMplUKPS0blF6aMsjKERbgmegn-y36JORtpxrRN9UAs3JJNckJbO9a4X43sbZ9Y1hduXh8zAYZhWhdjvvxLvn9mHtwJEU9IroWzMV5-QiHJFo88J~h2cRWaoFiOosjau1gs3T5AFgdq2w~K74utTvAjx6~HgcRTnfBKUobWG0pdYrY6mOaSTXAhxLHqQCQmDSXqWR024l-VdIhP4kmbobtNNvTIB8Yan8Liy9X8VKL9dMEacrWedflKG5VQ-fR-p~xZQ8ESHE0f7vHY2GA__)

- We can imagine various instructions we might provide our algorithm to undertake this task as follows:

```
For each door from left to right
    If 50 is behind door
        Return true
Return false
```

Notice that the above instructions are called _pseudocode_: A human-readable version of the instructions that we could provide the computer.

- A computer scientist could translate that pseudocode as follows:

```
For i from 0 to n-1
    If 50 is behind doors[i]
        Return true
Return false
```

Notice that the above is still not code, but it is a pretty close approximation of what the final code might look like.

## Binary Search

- _Binary search_ is another _search algorithm_ that could be employed in our task of finding the 50.
- Assuming that the values within the lockers have been arranged from smallest to largest, the pseudocode for binary search would appear as follows:

```
If no doors left
    Return false
If 50 is behind middle door
    Return true
Else if 50 < middle door
    Search left half
Else if 50 > middle door
    Search right half
```

- Using the nomenclature of code, we can further modify our algorithm as follows:

```
If no doors left
    Return false
If 50 is behind doors[middle]
    Return true
Else if 50 < doors[middle]
    Search doors[0] through doors[middle - 1]
Else if 50 > doors[middle]
    Search doors[middle + 1] through doors[n - 1]
```

Notice that by looking at this approximation of code, you can nearly imagine what this might look like in actual code.

## Running Time

- You can consider how much time it takes an algorithm to solve a problem.
- _running time_ involves an analysis using _big O_ notation. Take a look at the following graph:

![Big O Notation Graph](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL2JpZ19vX25vdGF0aW9uX2dyYXBo.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMMkpwWjE5dlgyNXZkR0YwYVc5dVgyZHlZWEJvLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bsiWYKNL05LjrpgprzlSBGwstyWBnYbbVhFT1-uPn6HmF7BWj8fraLexFQqvsoz9jTmfhs5wpdD1O-glEJx4~vcnnoMjgRVaqSYrkDRGuW~2qi24cqajkAuL12yFA4GvqenhQaFh7GwMM8fVh1tQ0cuwQHQC5Nr52Dj788JFpbH3dMCZf7bj8z6LGhHgGooME3J7~sZHc35hNC0MmJMR7-5cHVn~L7bGwbE~e3iVioXKGOJy7CGmAIDn3oV8FY9pCr8-iqgiS7xPzZB5c-iXLD5bSHqMdYg883qRz78LZ6pqvo28X7v2V79TdBuoKhkV6F21e0ovmwdHR~UHZkTOJw__)

- Rather than being ultra-specific about the mathematical efficiency of an algorithm, computer scientists discuss efficiency in terms of _the order of_ various running times.
- In the above graph, the first algorithm is O(n) or _in the order of n_. The second is in O(n) as well. The third is in O(log n).
- It's the shape of the curve that shows the efficiency of an algorithm. Some common running times we may see are:
  - O(n²)
  - O(n log n)
  - O(n)
  - O(log n)
  - O(1)
- Of the running times above, O(n²) is considered the slowest running time. O(1) is the fastest.
- Linear search was of order O(n) because it could take _n_ steps in the worst-case to run.
- Binary search was of order O(log n) because it would take fewer and fewer steps to run, even in the worst-case.
- Programmers are interested in both the worst-case, or _upper bound_, and the best-case, or _lower bound_.
- The symbol Ω is used to denote the best-case of an algorithm, such as Ω(log n).
- The symbol Θ is used to denote where the upper bound and lower bound are the same: Where the best-case and the worst-case running times are the same.
- _Asymptotic notation_ is the measure of how well algorithms perform as the input gets larger and larger.
- As you continue to develop your knowledge in computer science, you will explore these topics in more detail in future courses.

## search.c

- You can implement linear search by typing `code search.c` in your terminal window and by writing code as follows:

```c
// Implements linear search for integers

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // An array of integers
    int numbers[] = {20, 500, 10, 5, 100, 1, 50};

    // Search for number
    int n = get_int("Number: ");
    for (int i = 0; i < 7; i++)
    {
        if (numbers[i] == n)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```

Notice that the line beginning with `int numbers[]` allows us to define the values of each element of the array as we create it. Then, in the `for` loop, we have an implementation of linear search. `return 0` is used to indicate success and exit the program. `return 1` is used to exist the program with an error (failure).

- We have now implemented linear search ourselves in C!

- What if we wanted to search for a string within an array? Modify your code as follows:

```c
// Implements linear search for strings

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // An array of strings
    string strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "top hat"};

    // Search for string
    string s = get_string("String: ");
    for (int i = 0; i < 6; i++)
    {
        if (strcmp(strings[i], s) == 0)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```

Notice that we cannot utilize `==` as in our previous iteration of this program. Instead, we use `strcmp`, which comes from the `string.h` library. `strcmp` will return `0` if the strings are the same. Also, notice that the string length of `6` is hard-coded, which is not good programming practice.

- Indeed, running this code allows us to iterate over this array of strings to see if a certain string is within it. However, if you see a segmentation fault, where a part of memory was touched by your program that it should not have access to, do make sure you have `i < 6` noted above instead of `i < 7`.

- You can learn more about `strcmp` at the [CS50 Manual Pages](https://manual.cs50.io/).

## phonebook.c

- We can combine these ideas of both numbers and strings into a single program. Type `code phonebook.c` into your terminal window and write code as follows:

```c
// Implements a phone book without structs

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Arrays of strings
    string names[] = {"Yuliia", "David", "John"};
    string numbers[] = {"+1-617-495-1000", "+1-617-495-1000", "+1-949-468-2750"};

    // Search for name
    string name = get_string("Name: ");
    for (int i = 0; i < 3; i++)
    {
        if (strcmp(names[i], name) == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```

Notice that Yuliia's number begins with +1-617, David's phone number starts with +1-617, and John's number starts with +1-949. Therefore, `names[0]` is Yuliia, and `numbers[0]` is Yuliia's number. This code will allow us to search the phonebook for a person's specific number.

- While this code works, there are numerous inefficiencies. Indeed, there is a chance that names and phone numbers may not correspond to one another. Wouldn't it be nice if we could create our own data type where we could associate a person with the phone number?

## Structs

- It turns out that C allows us to create our own data types via a `struct`.

- Would it not be useful to create our own data type called a `person` that has inside of it a `name` and `number`? Consider the following code:

```c
typedef struct
{
    string name;
    string number;
}
person;
```

Notice how this represents our own datatype called a `person` that has a string called `name` and another string called `number`.

- We can improve our prior code by modifying our phonebook program as follows:

```c
// Implements a phone book with structs

#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    string number;
}
person;

int main(void)
{
    person people[3];

    people[0].name = "Yuliia";
    people[0].number = "+1-617-495-1000";

    people[1].name = "David";
    people[1].number = "+1-617-495-1000";

    people[2].name = "John";
    people[2].number = "+1-949-468-2750";

    // Search for name
    string name = get_string("Name: ");
    for (int i = 0; i < 3; i++)
    {
        if (strcmp(people[i].name, name) == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
```

Notice that the code begins with `typedef struct` where a new datatype called `person` is defined. Inside a `person` is a string called `name` and a string called `number`. In the `main` function, begin by creating an array called `people` that is of type `person` that is of size 3. Then, we update the names and phone numbers of the two people in our `people` array. Most importantly, notice how the _dot notation_, such as `people[0].name`, allows us to access the `name` at the 0th location of the `people` array. Most importantly, notice how the dot notation, such as `people[0].name`, allows us to access the person at the 0th location and assign that individual a name.

## Sorting

_Sorting_ is the act of taking an unsorted list of values and transforming this list into a sorted one.

- When a list is sorted, searching that list is far less taxing on the computer. Recall that we can use binary search on a sorted list but not on an unsorted one.
- It turns out that there are many different types of sorting algorithms.
- _Selection sort_ is one such sorting algorithm.
- We can represent an array as follows:

![Sorting Array Visualization](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL3NvcnRpbmdfYXJyYXlfdmlzdWFsaXphdGlvbg.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMM052Y25ScGJtZGZZWEp5WVhsZmRtbHpkV0ZzYVhwaGRHbHZiZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NjcyMjU2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LhoslTLvajxAg5MiHiig1FiByzZHIOzcBKCJ35R47guhj-0R5gNoAy~dXLLJ9Lf6WTAPst~9rjFe8-EFNDzbfsBE2Vba2-4KOO9M1G0iIpJOhcJHf4atoRUTL0x9FstgjE~g2CJGUvwuJao4ETMy14i7amjW6yqWHyUD0DTjfO8LHv9B-BupgBZSN-pcqwqEc99zXLoNtOclI-o9wPUPyyN~AfaQv2ang-162f6vSqDXRCDwYnr74-YJZpH5ULqenKSeTutAJSUaED-7bZnd5OcHehHtePvcc~5vmhpAmIcm-JlDFyahJxaS2-my3NkaH6Ys0iwsPDEzLg6ZGA8RmA__)

- The algorithm for selection sort in pseudocode is:

```
For i from 0 to n-1
    Find smallest number between numbers[i] and numbers[n-1]
    Swap smallest number with numbers[i]
```

- Summarizing those steps, the first time iterating through the list took n - 1 steps. The second time, it took n - 2 steps. Carrying this logic forward, the steps required could be represented as follows:

```
(n - 1) + (n - 2) + (n - 3) + ... + 1
```

- This could be simplified to n(n-1)/2 or, more simply, O(n²).
- In the worst-case or upper-bound, selection sort is in the order of O(n²). In the best-case, or lower-bound, selection sort is in the order of Ω(n²).

## Bubble Sort

_Bubble sort_ is another sorting algorithm that works by repeatedly swapping elements to "bubble" larger elements to the end.

- The pseudocode for bubble sort is:

```
Repeat n-1 times
    For i from 0 to n-2
        If numbers[i] and numbers[i+1] out of order
            Swap them
    If no swaps
        Quit
```

- As we further sort the array, we know more and more of it becomes sorted, so we only need to look at the pairs of numbers that haven't been sorted yet.

- Bubble sort can be analyzed as follows:

```
(n - 1) × (n - 1) = n² - 2n + 1
```

or, more simply, O(n²).

- In the worst-case, or upper-bound, bubble sort is in the order of O(n²). In the best-case, or lower-bound, bubble sort is in the order of Ω(n).

- You can [visualize](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html) a comparison of these algorithms.

![Sorting Algorithm Visualization](https://private-us-east-1.manuscdn.com/sessionFile/iY6MeOmnDpvITt044X8RcL/sandbox/pap0vb9pclZ3bNCDKteEzD-images_1745522744324_na1fn_L2hvbWUvdWJ1bnR1L2NzNTBfaW1hZ2VzL3NvcnRpbmdfYWxnb3JpdGhtX3Zpc3VhbGl6YXRpb24.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVk2TWVPbW5EcHZJVHQwNDRYOFJjTC9zYW5kYm94L3BhcDB2YjlwY2xaM2JOQ0RLdGVFekQtaW1hZ2VzXzE3NDU1MjI3NDQzMjRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyTnpOVEJmYVcxaFoyVnpMM052Y25ScGJtZGZZV3huYjNKcGRHaHRYM1pwYzNWaGJHbDZZWFJwYjI0LnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FsnsW91dkvYDlK3y2mo0BCYtUqVVn3Z-W5F0a3BeZlW4yARFpA0eBoHuROt93xfK6MciVDjRakiVrs8RPL5pyiDy2usoZqt9BUXpaVWpp~zWIZJ9LFUu6vATTYjBmas3ZygHACt3jmg~DEuWD~cw~ax7k0~TLmcB2aySB747oUe8hWf8-eRfPuFHm-X3kvOSj3Nx0icimkYMFpZ55lz0SW45463jH99IobTKHQXZF~5zidwyCWgdqz9uKEBvoqezwhYqpz~STYMpbOAzyPgOOf3ZCV2MEFyqe4KIm0pWPw4GJveV2dZihPod5rALCdSE5PQbcZC5okCwYXZBOujXNg__)

## Recursion

How could we improve our efficiency in our sorting?

_Recursion_ is a concept within programming where a function calls itself. We saw this earlier when we saw...

```
If no doors left
    Return false
If number behind middle door
    Return true
Else if number < middle door
    Search left half
Else if number > middle door
    Search right half
```

Notice that we are calling `search` on smaller and smaller iterations of this problem.

- Similarly, in our pseudocode for Week 0, you can see where recursion was implemented:

```
1  Pick up phone book
2  Open to middle of phone book
3  Look at page
4  If person is on page
5      Call person
6  Else if person is earlier in book
7      Open to middle of left half of book
8      Go back to line 3
9  Else if person is later in book
10     Open to middle of right half of book
11     Go back to line 3
12 Else
13     Quit
```

- This code could have been simplified to highlight its recursive properties as follows:

```
1  Pick up phone book
2  Open to middle of phone book
3  Look at page
4  If person is on page
5      Call person
6  Else if person is earlier in book
7      Search left half of book
9  Else if person is later in book
10     Search right half of book
12 Else
13     Quit
```

Notice the base case will ensure the code does not run forever. The line `if (n <= 0)` terminates the recursion because the problem has been solved. Every time, `draw` calls itself, it calls itself with a smaller and smaller problem. At some point, `n-1` will equal `0`, resulting in the `draw` function returning, and the program will end.

## Merge Sort

We can now leverage recursion in our quest for a more efficient sort algorithm and implement what is called _merge sort_, a very efficient sort algorithm.

- The pseudocode for merge sort is quite short:

```
If only one number
    Quit
Else
    Sort left half of number
    Sort right half of number
    Merge sorted halves
```

- Consider the following list of numbers: [6,3,4,1]
- First, merge sort asks, "is this a list of only one number?" The answer is "no," so the algorithm continues.
- Second, merge sort will "sort the left half of the numbers." This means we need to sort [6,3].
- Third, merge sort will again ask, "is this a list of only one number?" Since the answer is "no," the algorithm continues.
- Fourth, merge sort will "sort the left half of the numbers." This means we need to sort [6].
- Fifth, merge sort will again ask, "is this a list of only one number?" Since the answer is "yes," this branch of the algorithm is done.
- Sixth, merge sort will "sort the right half of the numbers." This means we need to sort [3].
- Seventh, merge sort will again ask, "is this a list of only one number?" Since the answer is "yes," this branch of the algorithm is done.
- Eighth, merge sort will "merge the sorted halves." This means we need to merge [6] and [3] to get [3,6].
- Now, we return to where we were in the algorithm. We have sorted the left half of the original list to get [3,6].
- Ninth, merge sort will "sort the right half of the numbers." This means we need to sort [4,1].
- Tenth, merge sort will again ask, "is this a list of only one number?" Since the answer is "no," the algorithm continues.
- Eleventh, merge sort will "sort the left half of the numbers." This means we need to sort [4].
- Twelfth, merge sort will again ask, "is this a list of only one number?" Since the answer is "yes," this branch of the algorithm is done.
- Thirteenth, merge sort will "sort the right half of the numbers." This means we need to sort [1].
- Fourteenth, merge sort will again ask, "is this a list of only one number?" Since the answer is "yes," this branch of the algorithm is done.
- Fifteenth, merge sort will "merge the sorted halves." This means we need to merge [4] and [1] to get [1,4].
- Now, we return to where we were in the algorithm. We have sorted the right half of the original list to get [1,4].
- Both halves are now sorted. Finally, merge sort will "merge the sorted halves." This means we need to merge [3,6] and [1,4] to get [1,3,4,6].
- Merge sort is complete, and the program quits.

- Merge sort is a very efficient sort algorithm with a worst-case of O(n log n) and a best-case of Ω(n log n) because the best-case and worst-case are the same.

- A final [visualization](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html) was shared.

## Summing Up

In this lesson, you learned about algorithmic thinking and building your own data types. Specifically, you learned…

- Algorithms.
- Big O notation.
- Binary search and linear search.
- Various sort algorithms, including bubble sort, selection sort, and merge sort.
- Recursion.

See you next time!

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/3- Week 2/3- Scrabble Approaches|CS50 Scrabble Code Comparison]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/4- Week 3/2- Shorts + Section/1- Linear Search|Linear Search]]
