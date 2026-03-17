# Lecture 0 - CS50x 2025

## Welcome!

* This class is about more than computer programming! The practical skills you will learn in this class may have an impact on your life and learning well beyond computer science.
* Indeed, this class is about problem-solving in a way that is exceedingly empowering! You will likely take the problem solving that you learn here, which will likely be instantly applicable to your work beyond this course and even your career as a whole!
* However, it will not be easy! You will be "drinking from the firehose" of knowledge during this course. You'll be amazed at what you will be able to accomplish in the coming weeks.
* This course is far more about you advancing "you" from "where you are today" than hitting some imagined standard.
* The most important opening consideration in this course: Give the time you need to learn through this course. Everyone learns differently. If something does not work out well at the start, know that with time you will grow and grow in your skill.
* Don't be scared if this is your first computer science class! For most of your peers, this is their first computer science class, too! Further, teaching fellows, course assistants, and your peer community are here to help you!

## Community!

* You are part of a community of those taking this course at Harvard College, Harvard Extension School, and via edX.org.
* We hope you will join us (whether in person or virtually) at CS50 Puzzle Day and the CS50 Fair.
* You can attend CS50 Lunches and CS50 Hackathon, if you are a student on Harvard's campus.

## Computer Science and Problem Solving

* Essentially, computer programming is about taking some input and creating some output - thus solving a problem. What happens in between the input and output, what we could call _a black box,_ is the focus of this course.
    
* For example, we may need to take attendance for a class. We could use a system called _unary_ (also called _base-1_) to count one finger at a time.
* Computers today count using a system called _binary_. It's from the term _binary digit_ that we get a familiar term called _bit_. A _bit_ is a zero or one: on or off.
* Computers only speak in terms of zeros and ones. Zeros represent _off._ Ones represent _on._ Computers are millions, and perhaps billions, of transistors that are being turned on and off.
* If you imagine using a light bulb, a single bulb can only count from zero to one.
* However, if you were to have three light bulbs, there are more options open to you!
* Inside your iPhone, there are millions of light bulbs called _transistors_ that enable the activities this device one may take for granted each day.
* As a heuristic, we could imagine that the following values represent each possible place in our _binary digit_:
    
* Using three light bulbs, the following could represent zero:
    
* Similarly, the following would represent one:
    
* By this logic, we could propose that the following equals two:
    
* Extending this logic further, the following represents three:
    
* Four would appear as:
    
* We could, in fact, using only three light bulbs count as high as seven!
    
* Computers use base-2 to count. This can be pictured as follows:
    
```
2^2  2^1  2^0
4    2    1
```
    
* Therefore, you could say that it would require three bits (the four's place, the two's place, and the one's place) to represent a number as high as seven.
* Similarly, to count a number as high as eight, values would be represented as follows:
    
* Computers generally use eight bits (also known as a _byte_) to represent a number. For example, `00000101` is the number 5 in _binary_. `11111111` represents the number 255. You can imagine zero as follows:
    
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## ASCII

* Just as numbers are binary patterns of ones and zeros, letters are represented using ones and zeros, too!
* Since there is an overlap between the ones and zeros that represent numbers and letters, the _ASCII_ standard was created to map specific letters to specific numbers.
* For example, the letter `A` was decided to map to the number 65. `01000001` represents the number 65 in binary. You can visualize this as follows:
    
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
    
* If you received a text message, the binary under that message might represent the numbers 72, 73, and 33. Mapping these out to ASCII, your message would look as follows:
    
* Thank goodness for standards like ASCII that allow us to agree upon these values!
* Here is an expanded map of ASCII values:
    
| 0 | NUL | 16 | DLE | 32 | SP | 48 | 0 | 64 | @ | 80 | P | 96 | \` | 112 | p |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SOH | 17 | DC1 | 33 | ! | 49 | 1 | 65 | A | 81 | Q | 97 | a | 113 | q |   |
| 2 | STX | 18 | DC2 | 34 | " | 50 | 2 | 66 | B | 82 | R | 98 | b | 114 | r |   |
| 3 | ETX | 19 | DC3 | 35 | # | 51 | 3 | 67 | C | 83 | S | 99 | c | 115 | s |   |
| 4 | EOT | 20 | DC4 | 36 | $ | 52 | 4 | 68 | D | 84 | T | 100 | d | 116 | t |   |
| 5 | ENQ | 21 | NAK | 37 | % | 53 | 5 | 69 | E | 85 | U | 101 | e | 117 | u |   |
| 6 | ACK | 22 | SYN | 38 | & | 54 | 6 | 70 | F | 86 | V | 102 | f | 118 | v |   |
| 7 | BEL | 23 | ETB | 39 | ' | 55 | 7 | 71 | G | 87 | W | 103 | g | 119 | w |   |
| 8 | BS | 24 | CAN | 40 | ( | 56 | 8 | 72 | H | 88 | X | 104 | h | 120 | x |   |
| 9 | HT | 25 | EM | 41 | ) | 57 | 9 | 73 | I | 89 | Y | 105 | i | 121 | y |   |
| 10 | LF | 26 | SUB | 42 | * | 58 | : | 74 | J | 90 | Z | 106 | j | 122 | z |   |
| 11 | VT | 27 | ESC | 43 | + | 59 | ; | 75 | K | 91 | [ | 107 | k | 123 | { |   |
| 12 | FF | 28 | FS | 44 | , | 60 | < | 76 | L | 92 | \ | 108 | l | 124 | \| |   |
| 13 | CR | 29 | GS | 45 | - | 61 | = | 77 | M | 93 | ] | 109 | m | 125 | } |   |
| 14 | SO | 30 | RS | 46 | . | 62 | > | 78 | N | 94 | ^ | 110 | n | 126 | ~ |   |
| 15 | SI | 31 | US | 47 | / | 63 | ? | 79 | O | 95 | _ | 111 | o | 127 | DEL |   |

## Unicode

* As the world evolved beyond English, there became a need to represent characters beyond those in the English language.
* Unicode is an extension of ASCII that allows for the representation of characters beyond those in the English language.
* Emoji are also part of Unicode.

## RGB

* Colors, too, are represented by numbers.
* Using the RGB color model, computers display colors using a combination of red, green, and blue.
* Each of these colors can be represented by a number between 0 and 255.
* By combining different values of red, green, and blue, a wide spectrum of colors can be represented.

![Red, Green, Blue boxes](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvcmVkX2dyZWVuX2JsdWVfYm94ZXM.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmNtVmtYMmR5WldWdVgySnNkV1ZmWW05NFpYTS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NjcyMjU2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U4HL9yNCp4kQAbdBwrC7cwvluAir-kMnH-61xozh7o1JwC4nzWBr0h3hweLTJ1jsno06XfAROmaGeAp4cHthu~DrwaTU2F21jdioLYeUwvdH9RlZ6fz~tEWpXcxsQ3LfFcD3COGPe7e-dfDVHviNFr6A6l32iifLh8-SQD139HGjxKp4MLJtrUcFLsKAXPxZswIRq4rubWrlZXVwxjKKgHXy-0xCK957I9Gn835ro1DxOFs3KKWr9xsomGMV0h-9aUC1~a8QfLv-V8T-nmlQ9bfKEWSxwK26CG1zIXqQ6LiAjlWRrKEjGN3CowQY66GqIrVIAPJJuLkEYrGcn5iVog__)

![Yellow box](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAveWVsbG93X2JveA.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmVXVnNiRzkzWDJKdmVBLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ihBY5p1MUleURN-~FXKd8C0lqFm0nzMYs0e4wgOIwLQvBCJZ~Rzgfqx8e6u5rmv5hBgAQKFdXxFV5NjbpTo3zYUoudayXJTK84wYk2w3mRkJJ5~VMQ-wcG5yQh6dAK8rmRB0P9fAbYZ8W5U~K48hChsCbQzOTBTrfKyWOMTCNw5NuIDfGP09-mjz0AAGFINsy67jpWkBOD67vewnSVW2QjcvflMvO0ItcBGt8X4u9um4x5vfZqwBf53ppMrCVZHlAwPLMOrgrcBcX9VRcFsqjRseqFVGqGo8LGUn~ZwuTbrKR9T2EWvr-2ImIBeJAmC5~9xfhkUCHVeaz7ucnXf7oQ__)

## Algorithms

* Algorithms are step-by-step instructions for solving problems.
* In computer science, algorithms are often expressed in pseudocode, a human-readable description of the steps needed to solve a problem.
* The quality of algorithms is often measured using _Big O_ notation, which describes the efficiency of an algorithm as the size of the input increases.

![Big O notation](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvYmlnX29fbm90YXRpb24.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdlltbG5YMjlmYm05MFlYUnBiMjQucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RWjNJ~gAxf7p0dlApgwRfbBgdzp-g5WfP1xNR~Zy9Ub2JI5hUWNSmamC8WSEK-0YzRXVbrx0DFPauU1tQ71tXzqBHDJxjuF-HumILSQEuxE0heyKbtorVnzKDFo5P-RgDLnIvGBjfnZnbR9bbQgaD9GDIFs5-d7MgDDBLJUSbRrG-DXPK1ds5kEgP8Y-3bta143eFGKMatWM-0RZUhtlOChRuzydx9cA3kmQODG63hwUgyC9TH985UNKRtMNo2kMq1x5KTAF6pcZVu837GKb33LKuA1xPuG5wSdgbk~F2vFLAOGL0L9Fyuj7gsp-hjou2j2D0GI7KZRhQ0EjoARsAw__)

## Pseudocode

* Pseudocode is a human-readable description of an algorithm that is not tied to any specific programming language.
* It allows programmers to plan and communicate their algorithms without getting bogged down in the syntax of a particular language.
* For example, a simple algorithm for making a peanut butter and jelly sandwich might be expressed in pseudocode as:

```
1. Get two slices of bread
2. Spread peanut butter on one slice
3. Spread jelly on the other slice
4. Put the two slices together
```

## Artificial Intelligence

* AI is increasingly being used in programming and problem-solving.
* CS50 provides access to CS50.ai, a tool that can help with programming tasks.
* While AI can be a powerful tool, it's important to use it responsibly and understand its limitations.

## What's Ahead

* This course will introduce you to programming concepts and problem-solving techniques.
* You'll start with Scratch, a visual programming language, before moving on to more traditional programming languages.
* By the end of the course, you'll have a solid foundation in computer science and programming.

## Scratch

* Scratch is a visual programming language developed by MIT.
* It allows you to create programs by dragging and dropping blocks of code.
* Scratch is a great way to learn programming concepts without having to worry about syntax.

![Scratch interface](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvc2NyYXRjaF9pbnRlcmZhY2U.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmMyTnlZWFJqYUY5cGJuUmxjbVpoWTJVLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B9s50l0-wgt0~QHUljxtfOCloNWZpMAOh3Mn2xTRzbtlrPLk0S8aGyvn4tsgsI8Ft96ZDmgUvCiM7FaxRB3Dy6pfqyzZHXMG4V6S8IWczZLy091NRwEhvd4Zsbdmim80nTZh96DNiRDV9WcCi4R-23-FJg2PlLsi24xRbxChjgPg-iI2b8Y2CFYPrEnZ~ubQMoZP2d399vEoxt7f8c6xAW3-oED6dLjjMBFPNq8dr2fe4TSr7TETyaisLiKwu6f-xT9I1cim-ztNiN-4ldUHkyNTH0l2XQvKjZuUJD~jT7EOnkLJiIlZ5y5uaqOsqiMaNU0L50H4f5dCnX8QtWo9HA__)

![Scratch coordinate system](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvc2NyYXRjaF9jb29yZGluYXRlX3N5c3RlbQ.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmMyTnlZWFJqYUY5amIyOXlaR2x1WVhSbFgzTjVjM1JsYlEucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=M2tGeKbsqtjWeVoUjLZgrD1ml8RHVvItR-FIUueUYczLvTOl4FyU54Ngei24asKkw8P6ID9rRUoXuDjlLOIuZ8mR8o70XODS4UkyK2llGOot469jCmdPn1-p2ChkOpiVaQiBkWAZqpOGhEiT8WEZBFzjHiGEq~RqV5vChgMIwR7t1Q1XZc26DuJSdoSSag6jr4QRt-6OcnuQL1XGyqC58r0xMEdtSf~vPYHQidRCm2nk8LnM9nhRYDNR5MjqL-wN97~XcD5txwRc4Bz2hoyqpKhyw5D~qEf9f4u3j2yrOsm5TW2NM9cUP2lBmCdsQUPIcRoqi5XHpuN~B3lkch-zUg__)

## Hello World

* To begin, drag the "when green flag clicked" building block to the programming area. Then, drag the "say" building block to the programming area and attach it to the previous block.

* Notice that when you click the green flag now on the stage, the cat says, "hello, world."

* This illustrates quite well what we were discussing earlier regarding programming:

![Scratch as algorithm](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvc2NyYXRjaF9hc19hbGdvcml0aG0.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmMyTnlZWFJqYUY5aGMxOWhiR2R2Y21sMGFHMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NjcyMjU2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AGnvuq5o8~1I4eeN5wsCz2SuFnkQujIrOQdUAGK5ARFuXHoJJ3zpJ7-JnKab8OsfONgrzcL0r3AqHGsoKSJ3m8DXSW1sH6IRk91-q2oqs~vOqXkG2S-Ft3KQ-VrPD50-loba~mkGUe-duhscCbcGojtpDsaD3qvKc2lOeQczekLDNishcQ-h2w6tJDFFk3SYEeaTb7-Eq6ThW~p8HeYJ9ce-jAfIhw6nKOK91ZUNqlRwDp0rxEVrxZ2d7vx2JUj552bAhjIKYOqMuMjU2RKxod8pu-U29jMCQZ4Ol2d~hkF1t~38njb6wlgLzb17LFnIOtmnF~JLLTEX-9tOcEsgxg__)

* Notice that the input `hello, world` is passed to the function `say`, and the side effect of that function running is the cat saying `hello, world`.

## Hello, You

* We can make your program more interactive by having the cat say `hello` to someone specific. Modify your program as below:

* Notice that when the green flag is clicked, the function `ask` is run. The program prompts you, the user, "what's your name?" It then stores that name in the variable `answer`. The program then passes `answer` to a special function called `join`, which combines two strings of text `hello, ` and whatever name was provided. Quite literally, `answer` returns a value to `join`. These collectively are passed to the `say` function. The cat says, `Hello, ` and a name. Your program is now interactive.

* Throughout this course, you will be providing inputs into an algorithm and getting outputs (or side effects). This can be pictured in terms of the above program as follows:

* Notice that the inputs `hello, ` and `answer` are provided to `join`, resulting in the side effect of `hello, David`.

## Meow and Abstraction

* Along with pseudocoding, abstraction is an essential skill and concept within computer programming.
* Abstraction is the act of simplifying a problem into smaller and smaller problems.
* For example, if you were hosting a huge dinner for your friends, the problem of having to cook the entire meal could be quite overwhelming! However, if you break down the task of cooking the meal into smaller and smaller tasks (or problems), the big task of creating this delicious meal might feel less challenging.

* In programming, and even within Scratch, we can see abstraction in action. In your programming area, program as follows:

```
when green flag clicked
play sound Meow until done
wait 1 seconds
play sound Meow until done
wait 1 seconds
play sound Meow until done
```

* Notice that you are doing the same thing over and over again. Indeed, if you see yourself repeatedly coding the same statements, it's likely the case that you could program more artfully – abstracting away this repetitive code.

* You can modify your code as follows:

```
when green flag clicked
repeat 3
    play sound Meow until done
    wait 1 seconds
```

* Notice that the loop does exactly as the previous program did. However, the problem is simplified by abstracting away the repetition to a block that repeats the code for us.

* Notice that the loop does exactly as the previous program did. However, the problem is simplified by abstracting away the repetition to a block that repeats the code for us.

* We can even advance this further by using the `define` block, where you can create your own block (your own function)! Write code as follows:

```
define meow
play sound Meow until done
wait 1 seconds

when green flag clicked
repeat 3
    meow
```

* Notice that we are defining our own block called `meow`. The function plays the sound `meow` and then waits one second.

* We can even provide a way by which the function can take an input `n` and repeat a number of times:

```
define meow n times
repeat n
    play sound Meow until done
    wait 1 seconds

when green flag clicked
meow 3 times
```

* Notice how `n` is taken from "meow n times." The function plays the sound `meow` and then waits one second.

* Overall, notice how this process of refinement led to better and better-designed code. Further, notice how we created our own algorithm to solve a problem. You will be exercising both of these skills throughout this course.

## Conditionals

* Conditionals are an essential building block of programming, where the program looks to see if a specific condition has been met. If a condition is met, the program does something.

* To illustrate a conditional, write code as follows:

```
when green flag clicked
forever
    if touching mouse-pointer? then
        play sound Meow until done
```

* Notice that the `forever` block is utilized such that the `if` block is triggered over and over again, such that it can check continuously if the cat is touching the mouse pointer.

* We can modify our program as follows to integrate video sensing:

```
when video motion > 10
play sound Meow until done
```

* Remember, programming is often a process of trial and error. If you get frustrated, take time to talk yourself through the problem at hand. What is the specific problem that you are working on right now? What is working? What is not working?

## Oscartime

* Oscartime is one of David's own Scratch programs – though the music may haunt him because of the number of hours he listened to it while creating this program. Take a few moments to play through the game yourself.

* Building Oscartime ourselves, we first add the lamp post.

![Oscartime interface](https://private-us-east-1.manuscdn.com/sessionFile/8jYDc0CrP1865iVKSKyjSD/sandbox/vFAnR3N2iAcmDNoP5ccwVP-images_1745147437113_na1fn_L2hvbWUvdWJ1bnR1L015IFZhdWx0L21lZGlhL2NzNTBfd2VlazAvb3NjYXJ0aW1lX2ludGVyZmFjZQ.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOGpZRGMwQ3JQMTg2NWlWS1NLeWpTRC9zYW5kYm94L3ZGQW5SM04yaUFjbUROb1A1Y2N3VlAtaW1hZ2VzXzE3NDUxNDc0MzcxMTNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwwMTVJRlpoZFd4MEwyMWxaR2xoTDJOek5UQmZkMlZsYXpBdmIzTmpZWEowYVcxbFgybHVkR1Z5Wm1GalpRLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kJQJUHfT-SlDT8JUuSVZMloBJPFlMNHVt0EKzZptuhC~jr0l2~kEuh~0SPyg8-r5EKjuBYhtZgkyUYFjGDAOuLPTTRsv4gJhhYxBpZIlcAwb8rioXWsfl6Dq3QHF34lxuBYbCfNyZj1S4tpdb98aboAhj3WHl4T~pvo0tzvTTco2WtxXEzNKjRDbyaaG-b1fxQtGBkMH~o2CCH8t3RwX0gMDhAoJhrTV30OTs1mfaSrcE17SKsyGi3oydcNoRtNSAgr7QsUmF3zVgvd2vIDB26UZNkSn8DS3pI9VDk-ZEw7CxeUUTY8PBXnJpaj7d0lGPg-h2mrc9Lb-bBN5eRz7-g__)

* Then, write code as follows:

```
when clicked
switch costume to oscar1
forever
    if touching mouse-pointer? then
        switch costume to oscar2
    else
        switch costume to oscar1
```

* Notice that moving your mouse over Oscar changes his costume. You can learn more by exploring these code blocks.

* Then, modify your code as follows to create a falling piece of trash:

```
when clicked
go to x: pick random -240 to 240 y: 180
forever
    if distance to floor > 0 then
        change y by -3
```

* Notice that the trash's position on the y-axis always begins at 180. The x position is randomized. While the trash is above the floor, it goes down 3 pixels at a time. You can learn more by exploring these code blocks.

* Next, modify your code as follows to allow for the possibility of dragging trash.

```
when clicked
forever
    if mouse down? and touching mouse-pointer? then
        go to mouse-pointer
```

* You can learn more by exploring these code blocks.

* Next, we can implement the scoring variables as follows:

```
when clicked
forever
    if touching Oscar? then
        change score by 1
        go to x: pick random -240 to 240 y: 180
```

* You can learn more by exploring these code blocks.

* Go try the full game Oscartime.

## Ivy's Hardest Game

* Moving away from Oscartime to Ivy's Hardest Game, we can now imagine how to implement movement within our program.
* Our program has three main components.

* First, write code as follows:

```
when clicked
go to x: 0 y: 0
forever
    listen for keyboard
    feel for walls
```

* Notice that when the green flag is clicked, our sprite moves to the center of the stage at coordinates (0,0) and then listens for the keyboard and checks for walls forever.

* Second, add this second group of code blocks:

```
define listen for keyboard
if key up arrow pressed? then
    change y by 1
if key down arrow pressed? then
    change y by -1
if key right arrow pressed? then
    change x by 1
if key left arrow pressed? then
    change x by -1
```

* Notice how we have created a custom `listen for keyboard` script. For each of our arrow keys on the keyboard, it will move the sprite around the screen.

* Finally, add this group of code blocks:

```
define feel for walls
if touching left wall? then
    change x by 1
if touching right wall? then
    change x by -1
```

* Notice how we also have a custom `feel for walls` script. When a sprite touches a wall, it moves it back to a safe position – preventing it from walking off the screen.

* You can learn more by exploring these code blocks.
* Scratch allows for many sprites to be on the screen at once.

* Adding another sprite, add the following code blocks to your program:

```
when clicked
go to x: 0 y: 0
point in direction 90
forever
    if touching left wall? or touching right wall? then
        turn 180 degrees
    move 1 steps
```

* Notice how the Yale sprite seems to get in the way of the Harvard sprite by moving back and forth. When it bumps into a wall, it turns around until it bumps the wall again. You can learn more by exploring these code blocks.

* You can even make a sprite follow another sprite. Adding another sprite, add the following code blocks to your program:

```
when clicked
go to random position
forever
    point towards Harvard
    move 1 steps
```

* Notice how the MIT logo now seems to follow around the Harvard one. You can learn more by exploring these code blocks.

* Go try the full game Ivy's Hardest Game.

## Summing Up

In this lesson, you learned how this course sits in the wide world of computer science and programming. You learned…

* Few students come to this class with prior programming experience!
* You are not alone! You are part of a community.
* Problem-solving is the essence of the work of computer scientists.
* This course is not simply about programming – this course will introduce you to a new way of learning that you can apply to almost every area of life.
* How numbers, text, images, music, and video are understood and represented by computers.
* The fundamental programming skill of pseudocoding.
* Reasonable and unreasonable ways to utilize AI in this course.
* How abstraction will play a role in your future work in this course.
* The basic building blocks of programming including functions, conditionals, loops, and variables.
* How to build a project in Scratch.

This was CS50! Welcome aboard! See you next time!

---
**Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/2- Week 1/1- Week 1 Notes|Lecture 1 - CS50x 2025]]
