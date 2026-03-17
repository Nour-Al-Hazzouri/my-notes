# Week 4: Loops and Lightbox

## Table of Contents
- [Writing Loops in JS](#writing-loops-in-js)
- [Code with me: Using Lightbox](#code-with-me-using-lightbox)

---

## Writing Loops in JS

- When you have a lot of elements, you don't want to write a lot of code to update them and that is where looping (also called iteration) comes in.
- In a for loop you state what values you want to start with, under what condition you want to continue to loop, and how you want to update the value
```JavaScript
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```
- Suppose that someone on your team has styled a new class called thumbnail and you want to use it. In the code below you can see how quick and easy it would be to add this new class to every image.
```JavaScript
my_images = document.querySelectorAll("img")
for (let i = 0; i < my_images.length; i++) {
    my_images[i].setAttribute("class","thumbnail")
}
```

---

## Code with me: Using Lightbox

- Lightbox is a code ready for you to use and you just need to link it

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/1- Interactivity with JavaScript - Coursera/Week 3|Week 3: Tabindex, Attributes, and Arrays]]
