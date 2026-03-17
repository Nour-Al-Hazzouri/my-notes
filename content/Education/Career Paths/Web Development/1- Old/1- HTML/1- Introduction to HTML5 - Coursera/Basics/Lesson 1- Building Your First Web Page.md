# Lesson 1: Building Your First Web Page

## Table of Contents
- [Introduction to HTML and CSS](#introduction-to-html-and-css)
- [HTML Fundamentals](#html-fundamentals)
  - [Elements](#elements)
  - [Tags](#tags)
  - [Attributes](#attributes)
- [HTML Document Structure](#html-document-structure)
- [Self-Closing Elements](#self-closing-elements)
- [Code Validation](#code-validation)
- [In Practice: Building a Web Page](#in-practice-building-a-web-page)
- [Summary](#summary)

---

## Introduction to HTML and CSS

**HTML** and **CSS** are two core technologies used to build web pages:

- **HTML** (HyperText Markup Language) is used to define the structure and content of web pages
- **CSS** (Cascading Style Sheets) is a presentation language created to style the appearance of content using fonts, colors, etc.

> 📝 **Note:** HTML and CSS are independent of one another and should remain separate. HTML provides structure and content, while CSS handles presentation.

---

## HTML Fundamentals

The three common HTML terms you should begin with are **elements**, **tags**, and **attributes**.

### Elements

Elements are designators that define the structure and content of objects within a page.

Some of the more frequently used elements include:
- Multiple levels of headings (identified as `<h1>` through `<h6>` elements)
- Paragraphs (identified as the `<p>` element)
- Other common elements: `<a>`, `<div>`, `<span>`, `<strong>`, and `<em>`

### Tags

Tags are used to mark the beginning and end of an element.

- An **opening tag** marks the beginning of an element. It consists of a less-than sign followed by an element's name, and then ends with a greater-than sign; for example, `<div>`.

- A **closing tag** marks the end of an element. It consists of a less-than sign followed by a forward slash and the element's name, and then ends with a greater-than sign; for example, `</div>`.

The content that falls between the opening and closing tags is the content of that element. For example, an anchor link will have an opening tag of `<a>` and a closing tag of `</a>`. What falls between these two tags will be the content of the anchor link.

### Attributes

Attributes are properties used to provide additional information about an element.

Attributes are defined within the opening tag, after an element's name. Generally attributes include a name and a value. The format consists of the attribute name followed by an equals sign and then a quoted attribute value.

Example:
```HTML
<a href="http://shayhowe.com/">Shay Howe</a>
```

---

## HTML Document Structure

All HTML documents have a required structure that includes the following declaration and elements: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.

- The **document type declaration**, or `<!DOCTYPE html>`, informs web browsers which version of HTML is being used and is placed at the very beginning of the HTML document.

- Following the document type declaration, the `<html>` element signifies the beginning of the document.

- Inside the `<html>` element, the `<head>` element identifies the top of the document, including any metadata (accompanying information about the page).

- The content inside the `<head>` element is not displayed on the web page itself. It may include the document title (displayed on the title bar in the browser window), links to external files, or any other beneficial metadata.

- All of the visible content within the web page will fall within the `<body>` element.

A breakdown of a typical HTML document structure looks like this:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

> 💡 **Tip:** When an element is placed inside of another element (nested), it's a good idea to indent that element to keep the document structure well organized and legible.

---

## Self-Closing Elements

Some elements simply receive their content or behavior from attributes within a single tag. The `<meta>` element is one of these elements.

Other common self-closing elements include:
- `<br>`
- `<embed>`
- `<hr>`
- `<img>`
- `<input>`
- `<link>`
- `<meta>`
- `<param>`
- `<source>`
- `<wbr>`

---

## Code Validation

No matter how careful we are when writing our code, we will inevitably make mistakes. The W3C has built both [HTML](http://validator.w3.org/) and [CSS](http://jigsaw.w3.org/css-validator/) validators that will scan code for mistakes.

---

## In Practice: Building a Web Page

Let's build a simple web page step by step:

1. Open your text editor, create a new file named `index.html`, and save it to a location you won't forget. For example, create a folder on your Desktop named "styles-conference" and save this file there.

2. Within the index.html file, add the document structure, including the `<!DOCTYPE html>` document type and the `<html>`, `<head>`, and `<body>` elements:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
  </body>
</html>
```

3. Inside the `<head>` element, add `<meta>` and `<title>` elements. The `<meta>` element should include the proper charset attribute and value, while the `<title>` element should contain the title of the page—let's say "Styles Conference":

```HTML
<head>
  <meta charset="utf-8">
  <title>Styles Conference</title>
</head>
```

4. Inside the `<body>` element, add `<h1>` and `<p>` elements. The `<h1>` element should include the heading we wish to include—let's use "Styles Conference" again—and the `<p>` element should include a simple paragraph to introduce our conference:

```HTML
<body>
  <h1>Styles Conference</h1>
  <p>Every year the brightest web designers and front-end developers descend on Chicago to discuss the latest technologies. Join us this August!</p>
</body>
```

---

## Summary

In this lesson, we've covered:
- The difference between HTML and CSS
- Getting acquainted with HTML elements, tags, and attributes
- Setting up the structure of your first web page

Here's an example of linking a CSS file to your HTML document:

```HTML
<head>
  <meta charset="utf-8">
  <title>Styles Conference</title>
  <link rel="stylesheet" href="assets/stylesheets/main.css">
</head>
```

---
**Next**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Basics/Lesson 2- Getting to Know HTML|Lesson 2: Getting to Know HTML]]
