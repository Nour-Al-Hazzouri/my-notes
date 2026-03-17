# Lesson 3: Semantic Code in HTML - What is it and does it still matter?

## Table of Contents
- [Introduction](#introduction)
- [What is semantic code in HTML?](#what-is-semantic-code-in-html)
- [What is an example of semantic markup today?](#what-is-an-example-of-semantic-markup-today)
- [What type of classes should I use?](#what-type-of-classes-should-i-use)
- [Why is it important to write code in a semantic way?](#why-is-it-important-to-write-code-in-a-semantic-way)
- [How do I make code more semantic?](#how-do-i-make-code-more-semantic)
- [Where things go wrong](#where-things-go-wrong)
- [Conclusion](#conclusion)

---

## Introduction

Semantic code in HTML is still important in modern web development. It can improve accessibility, SEO, maintainability, cross-device compatibility, future-proofing, collaboration, and page load times.

---

## What is semantic code in HTML?

Semantic code in HTML refers to coding your HTML in a way that describes the content, rather than how that content should look.

For example, if you want to make a piece of text appear large, you can mark it up using the following code:

```HTML
<h1>This is the content I want to make big</h1>
```

This would indeed make the content larger, but you are effectively telling the device that is reading it (like a browser) that this is an important heading. That is fine if the content is an important heading. However, if it is not, you should avoid describing it as such. Instead, you should use CSS to make it appear larger.

```HTML
<p style="font-size:3em">This is the content I want to make big</p>
```

However, advocates of semantic code take it a step further. They argue that CSS should not be included in the HTML document, but rather kept in the stylesheet.

For instance, the HTML code would be as follows:

```HTML
<p class="large-text">This is the content I want to make big</p>
```

While the CSS would be:

```CSS
.large-text { font-size:3em; }
```

> 📝 **Note:** This is how most code is written today and is also the approach taken by frameworks like [Bootstrap](https://getbootstrap.com/) or [Tailwind](https://tailwindcss.com/). These frameworks provide a variety of pre-defined classes that can be applied to HTML elements, ensuring that they are visually formatted in a consistent way.

However, these frameworks have introduced a different version of the same problem.

---

## What is an example of semantic markup today?

Although inline CSS styles have become less common, descriptive class names are frequently used, such as the `class="large-text"` example above.

Many frameworks utilize these design classes in HTML. For instance, in [Tailwind](https://tailwindcss.com/), you can add the following classes to an image tag to set the size and whether it has rounded corners.

```HTML
<img class="w-24 h-24 rounded-full" src="https://k3y3m9i6.rocketcdn.me/sarah-dayan.jpg">
```

This is not semantic because it introduces classes that describe the design rather than the content.

If we were making this image semantic, we would likely use HTML that reads as follows:

```HTML
<img class="profile-pic" src="https://k3y3m9i6.rocketcdn.me/sarah-dayan.jpg">
```

This class explains the **role** of the image and can then be styled accordingly in a separate CSS file. It is semantic (explaining the meaning of the image – a profile picture) not design orientated.

---

## What type of classes should I use?

It is important to stress that there is nothing inherently wrong with having CSS classes that describe the design, often known as "utility classes." In fact, there are [some great arguments for adopting this approach](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/), in addition, using a framework such as Tailwind or [Bootstrap](https://getbootstrap.com/) can save quite a bit of time.

The main drawback to using utility classes is that if you change your design, you have to edit all associated classes in the HTML. This is because those classes describe the design of an element, rather than its function.

> 💡 **Tip:** The choice between semantic and utility classes is a personal one. Both have their pros and cons. What is much more important is that the HTML be semantic and, preferably, as clean as possible.

---

## Why is it important to write code in a semantic way?

### Accessibility

Semantic code ensures that web content is accessible to all users, including those with disabilities. Screen readers, assistive technologies, and other accessibility tools rely on well-structured and meaningful code to interpret and present content to users with visual, auditory, or cognitive impairments.

### Search Engine Optimization (SEO)

Search engines like Google use semantic code to understand the structure and content of web pages better. Using appropriate HTML elements and tags helps search engines index and rank your site more accurately, leading to better visibility and organic traffic.

### Maintainability and Readability

Semantic code makes it easier for developers to understand and maintain websites, as it clearly conveys the structure and purpose of each element. This promotes a more efficient development process and reduces the likelihood of errors or misinterpretations.

### Cross-device compatibility

As the number of devices and screen sizes continues to grow, it's essential to design websites that work seamlessly on various platforms. Semantic code helps to ensure that content is presented consistently and meaningfully across different devices, browsers, and operating systems.

### Future-proofing

Web standards continue to evolve, and adhering to semantic code helps ensure that your website remains relevant and functional as new technologies emerge. By following best practices, you can reduce the likelihood of encountering compatibility issues as browsers and devices update and improve.

### Improved collaboration

When working with a team of designers, developers, and content creators, semantic code in HTML makes it easier for everyone to understand the structure and purpose of each element. This fosters better communication and collaboration throughout the development process.

### Faster page load times

Semantic code is typically cleaner and more efficient than non-semantic code, which can help reduce file sizes and improve page load times. Faster-loading websites lead to better user experiences, improved SEO rankings and increased conversion.

---

## How do I make code more semantic?

Here are some key practices to make your code more semantic:

- Ensure that your HTML tags accurately describe the content they contain. For example, use `<h1>` for main headings, `<p>` for paragraphs, and `<ul>` and `<ol>` for lists.

- Minimize the use of tags that are not semantically meaningful, such as `<div>` or `<span>`. Instead, favor semantic elements such as `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` when grouping content.

- Use [ARIA attributes](https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility) to add additional information to your HTML tags, such as `aria-label` or `aria-describedby`, to provide context for screen readers and other assistive technologies.

> 💡 **Tip:** If you are feeling ambitious, you can add [RDFa](https://rdfa.info/) to add more semantic meaning to your HTML. However, this is a bonus.

Since creating semantic code is so easy, you may be wondering why the code of so many websites is not semantic.

---

## Where things go wrong

One of the biggest obstacles to ensuring your code is semantic is the use of tools that automatically generate code. These tools don't understand the meaning of content they format, so they can't write semantic code unless you explicitly tell them to do so. This often results in code that's full of `<div>` or `<span>` tags, and can even mislabel headings and other elements.

Of course, there are many advantages to building a site in [Framer](https://www.framer.com/) or [Webflow](https://webflow.com/), and I'm not suggesting you should avoid them. However, if you decide to use these tools, it's important to tell your chosen platform the semantic meaning of any element you add to a design. For example, in Webflow, by default an element is described as a `<div>`, but [you can easily change that to a more semantically appropriate tag](https://university.webflow.com/lesson/semantic-html5-tags).

Fortunately, many website builders and content management systems provide the necessary tools to create semantic code. However, the same cannot always be said for plugins. When you use a plugin on your website, it often injects code into pages. Whether this code is semantic or not depends on how well it was written. Not all developers prioritize writing clean, semantic code, and their plugins can undermine the hard work you've put into ensuring the rest of your site is semantic.

> ⚠️ **Warning:** There's no easy answer to this problem. You have to weigh the benefits of using a plugin against the benefits provided by semantic code. However, it's worth noting that there are often multiple plugins that provide similar functionality. Therefore, it's worth taking the time to do your research and find out which one writes the most semantic code.

---

## Conclusion

It is clear that semantic code is still essential in modern web development. Although design frameworks and website builder tools have increased the use of utility classes and non-semantic code, it is crucial to remember the advantages of semantic code.

Semantic code enhances:
- Accessibility
- SEO
- Maintainability
- Cross-device compatibility
- Future-proofing
- Collaboration
- Page load times

The good news is that creating semantic code is simple and straightforward. By following a few simple guidelines, we can ensure that our code is clean and semantic. Therefore, let's prioritize semantic code in our web development projects and enjoy the benefits it brings.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Basics/Lesson 2- Getting to Know HTML|Lesson 2: Getting to Know HTML]]
