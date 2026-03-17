Problem solving is presented as the **core, fundamental skill** that software developers use, making programming languages and tools secondary. The best way to improve this skill is through **building experience** by creating many programs.

---

### The Three Stages in the Problem-Solving Process

The lesson outlines a three-step technique for approaching any problem:

#### 1. Understand the Problem

The first step is gaining **absolute clarity** on the problem. If you don't understand it, you won't know when you've successfully solved it.

- **Techniques for clarity**:
    
    - Write the problem down on paper.
        
    - **Reword it in plain English** until it makes complete sense to you.
        
    - Draw diagrams if it helps visualize the concept.
        
- **Test of understanding**: You can explain the problem to someone else in plain English.
    

#### 2. Plan

Before writing any code, you must plan the solution. This involves defining the mechanics of the program.

- **Planning Questions**:
    
    - Does the program have a **User Interface (UI)**? If so, sketch its appearance and functionality.
        
    - What are the **inputs**? (e.g., user-entered data, external source)
        
    - What is the **desired output**?
        
    - What are the steps (**algorithm**) needed to transform the input into the desired output?
        
- **Algorithm**: A detailed "recipe" defining the steps the computer must take. It is written using **pseudocode**.
    
- **Pseudocode**: Writing out the program's logic in **natural language** (like English) instead of actual code. It forces you to slow down and think through the required steps.
    

#### 3. Divide and Conquer (Decomposition)

This is the method for tackling complexity by breaking down the main problem.

- From your plan, identify all the **subproblems** (often each step in your algorithm).
    
- Start coding with the **smallest or simplest subproblem** first.
    
- **Decomposition** is the main way to deal with complexity, making problems more approachable.
    
- **Important**: Do not try to solve the entire problem in one go. Solving one subproblem will often reveal or simplify the steps needed for the next.
    

---

### Workflow Example: Solving FizzBuzz

The lesson demonstrates the process by solving the classic **FizzBuzz** problem: Print numbers from 1 up to a user-entered number, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".

1. **Understanding**: Clarify the conditions using the modulus operator (`%`) for divisibility (e.g., a number divisible by 3 has a remainder of 0: `i % 3 === 0`).
    
2. **Planning (Pseudocode)**: Develop the step-by-step logic, which must prioritize the "FizzBuzz" check.
    
```
When a user inputs a number
Loop from 1 to the entered number
	If the current number is divisible by 3 AND 5 then print "FizzBuzz"
	Else if the current number is divisible by 3 then print "Fizz"
	Else if the current number is divisible by 5 then print "Buzz"
	Otherwise print the current number
```
    
3. **Divide and Conquer (Implementation)**:
    
    - The steps are implemented sequentially (e.g., in JavaScript): 1. Get user input. 2. Create the loop. 3. Add the conditional logic (`if/else if`) inside the loop.
        
    - The combined check (`i % 3 === 0 && i % 5 === 0`) must be placed as the **first condition** to ensure numbers like 15 are correctly identified as "FizzBuzz" before they are incorrectly caught by the "Fizz" or "Buzz" checks alone.
---

---
**Previous**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/3- Commit Messages|Complete Guide to Writing Git Commit Messages]] | **Next**: [[Education/Career Paths/Web Development/2- New/2- The Odin Project/1- Foundations/7- Clean Code|7- Clean Code]]
