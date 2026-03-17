- When testing a code, writing a comment of what to expect is a good approach
- Testing Frameworks:
    - No need to use comments to describe expectations
    - Test syntax becomes expectation documenting
    - Tests are callable, so they can be called to check if expectations are met
    - JEST:
        - A framework used to test codes and expect results
        - Example:
            
```JavaScript
expect(concatStrings("abc", "def")).toBe("abcdef");
```
            
- Advantages:
	- Conciseness
	- Clarity
	- Repeatability
- When test fails, they are red, and when they pass, they as green
- If the test fails, this means the code must be changed without changing its behaviour, and this is known as refactoring
- Refactoring:
	- Updating code, without affecting the results it produces
- Red tests are a sign for you to know how to keep improving your code to get green tests, which is known as red-green-refactor cycle, which is the basis of Test Driven Development or TDD

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 4/1- Other JS environments - node & NPM|1- Other JS environments - node & NPM]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 4/3- Types of Testing|3- Types of Testing]]
