# Module 2: HTML Structure and Elements

## Table of Contents
- [02.01: The Document Object Model (DOM)](#0201-the-document-object-model-dom)
  - [Basics of DOM](#the-document-object-model)
  - [Well-formed Document Parts](#3-parts-of-a-well-formed-document)
  - [Doctype](#doctype)
  - [Head](#head)
  - [Body](#body)
  - [Validation](#validation)
- [Required Reading](#reading)
- [02.02: HTML Tags and Syntax](#0202-html-tags-and-syntax)
  - [Attributes](#attributes)
  - [Special Entities](#special-entities)
- [Images](#images)
  - [Responsive Images](#responsive-images)
  - [Favicons](#favicons)
  - [Alt Text](#empty-alt-text)
  - [Emojis and Icons](#emojis-and-icons)
  - [Images for Impact](#images-for-impact)
- [Hyperlinks](#hyperlinks)
- [Useful Tags](#useful-tags)
  - [Block-level Tags](#useful-tags)
  - [Inline Tags](#inline-tags)

---

## 02.01: The Document Object Model [DOM]

### The Document Object Model
- Basics of HTML is "New features should be based on HTML, CSS, the DOM, and JavaScript"
- DOM provides common tree-like structure that all pages should follow
- Computer Scientists love trees (the mathematical kind) because you can test them

HTML as a tree is the idea that in the root of the tree we will create HTML

### 3 Parts of a Well-formed Document

- **Doctype**: Version of HTML that you will be using
- **Head**: Metadata
- **Body**: Displayable content

### Doctype
- HTML5: `<!DOCTYPE html>`
- Previous versions dictated backwards compatibility:

### Head
- Additional information used by the browser: Metadata (language, title)
- Supporting Files: JS, Styling Add-ons
- Other than title, meta is not displayed

### Body
- Bulk of your Page
- Important to write well-formatted (tree-like) code
- Most of the content is displayed by the browser, but there may be some metadata too

After making the code and displaying it, the next thing to do is validate it using the [W3C Markup Validation Service](https://validator.w3.org/#validate_by_upload+with_options)

### Review
- Well-formed pages use the DOM structure
- Use beginning and end tags
- Close inner tags before outer ones
- Use valid attributes
- Browsers will "fix" bad code, but not always well. Use a validator to check your code

---

## Reading

📚 **Required Reading**:
- **Lesson 2: Getting to Know HTML** [https://learn.shayhowe.com/html-css/getting-to-know-html/](https://learn.shayhowe.com/html-css/getting-to-know-html/)
- **Lesson 8: Creating Lists** [https://learn.shayhowe.com/html-css/creating-lists/](https://learn.shayhowe.com/html-css/creating-lists/) (Only read up to "List Item Styling")
- **Lesson 9: Adding Media** [https://learn.shayhowe.com/html-css/adding-media/](https://learn.shayhowe.com/html-css/adding-media/) (Only read up to "Sizing Images")
- **Lesson 11: Organizing Your Data with Tables** [https://learn.shayhowe.com/html-css/organizing-data-with-tables/](https://learn.shayhowe.com/html-css/organizing-data-with-tables/) (Only read up to "Combining Multiple Cells")

---

## 02.02: HTML Tags and Syntax

### Attributes
- The `class` attribute applies special properties to groups of elements
- `accesskey` attribute is a shortcut key to activate an element
- `tabindex` attribute is about the order elements will come into focus using the tab key

### Special Entities

---

## Images

### Responsive Images
Using % as a value for image width will make the image more compatible to different screens

### Favicons
- You can put image\logo\icon next to the title of your page (in the tab)
- Must go in `<head>` section:
  
```HTML
<link rel="icon" type= "image.png" href= "imgs/wd4elogo.png">
```

### Empty Alt Text
- It's ok to leave alt text empty (Decorative images with no real meaning)
- Do not skip alt attribute

### Long Alt Text
Some images may require elaborate alt text:
- Replace alt text with link to separate page with full explanation
- Create another page and talk in it about the infographic and link it

### Emojis and Icons
- A description of an emoji will be read by a screen reader, but not for an icon
- Icons can't use alt attribute
- Icons can use an aria-label attribute

### Images for Impact
Using diverse images can draw more people to your site

> 💡 **Tip**: Using [W3 Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) helps in choosing a good alt text

---

## Hyperlinks
- `#path` can be used to refer to a file in the same folder, this can be used when before it a hyperlink is used to specify a filed inside a folder, so in the hyperlink that follows it, # can be used instead of typing the folder name again

---

## Useful Tags

- `<hr>`: Visible horizontal line
- `<address>`: a place to put your contact info
- `<blockquote cite>`: To quote from another website or external source
- `<details>` with child element `<summary>`: used to make an arrow that expands a text

### Inline Tags
- `<cite>`: Citing a source
- `<abbr>`: abbreviation of some words
- `<time>`: specifies time elements
- `<code>`: identifies code fragments
- `<sub>` & `<sup>`: Identifies subscripts and superscripts

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Module 1|Module 1: Introduction to HTML]]
