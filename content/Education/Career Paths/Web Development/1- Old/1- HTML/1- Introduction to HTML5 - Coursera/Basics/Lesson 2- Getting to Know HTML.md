# Lesson 2: Getting to Know HTML

## Table of Contents
- [Introduction](#introduction)
- [Semantics Overview](#semantics-overview)
- [Identifying Divisions & Spans](#identifying-divisions--spans)
  - [Block vs. Inline Elements](#block-vs-inline-elements)
  - [Comments within HTML & CSS](#comments-within-html--css)
- [Using Text-Based Elements](#using-text-based-elements)
  - [Headings](#headings)
  - [Paragraphs](#paragraphs)
  - [Bold Text With Strong](#bold-text-with-strong)
  - [Italicize Text with Emphasis](#italicize-text-with-emphasis)
- [Building Structure](#building-structure)
  - [Header](#header)
  - [Navigation](#navigation)
  - [Article](#article)
  - [Section](#section)
  - [Deciding Between Elements](#deciding-between-article-section-or-div-elements)
  - [Aside](#aside)
  - [Footer](#footer)
- [In Practice](#in-practice)
  - [Encoding Special Characters](#encoding-special-characters)
- [Creating Hyperlinks](#creating-hyperlinks)
  - [Wrapping Block-Level Elements with Anchors](#wrapping-block-level-elements-with-anchors)
  - [Relative & Absolute Paths](#relative--absolute-paths)

---

## Introduction

In order to start building websites, we need to learn about which HTML elements are best used to display different types of content. It's also important to understand how elements are visually displayed on a web page, as well as what different elements mean semantically.

---

## Semantics Overview

Semantic code in HTML is the practice of giving content on the page meaning and structure by using the proper element.

Semantic code describes the _value_ of content on a page, regardless of the style or appearance of that content. There are several benefits to using semantic elements:

- Enabling computers, screen readers, search engines, and other devices to adequately read and understand the content
- Making HTML easier to manage and work with, as it shows clearly what each piece of content is about

---

## Identifying Divisions & Spans

Divisions, or `<div>`s, and `<span>`s are HTML elements that act as containers solely for styling purposes. As generic containers, they do not come with any overarching meaning or semantic value. 

> 📝 **Note:** Paragraphs are semantic in that content wrapped within a `<p>` element is known and understood as a paragraph. `<div>`s and `<span>`s do not hold any such meaning and are simply containers.

### Block vs. Inline Elements

Most elements are either block- or inline-level elements. Here's the difference:

- **Block-level elements:**
  - Begin on a new line
  - Stack one on top of the other
  - Occupy any available width
  - May be nested inside one another
  - May wrap inline-level elements
  - Commonly used for larger pieces of content, such as paragraphs

- **Inline-level elements:**
  - Do not begin on a new line
  - Fall into the normal flow of a document
  - Only maintain the width of their content
  - May be nested inside one another
  - Cannot wrap block-level elements
  - Usually used with smaller pieces of content, such as a few words

A `<div>` is a block-level element commonly used to identify large groupings of content, which helps to build a web page's layout and design. A `<span>`, on the other hand, is an inline-level element commonly used to identify smaller groupings of text within a block-level element.

We'll commonly see `<div>`s and `<span>`s with `class` or `id` attributes for styling purposes. When choosing a `class` or `id` attribute value, we should refer to the content of an element, not its appearance.

```HTML
<!-- Division -->
<div class="social">
  <p>I may be found on...</p>
  <p>Additionally, I have a profile on...</p>
</div>

<!-- Span -->
<p>Soon we'll be <span class="tooltip">writing HTML</span> with the best of them.</p>
```

### Comments within HTML & CSS

HTML and CSS give us the ability to leave comments within our code. Any content wrapped within a comment will not be displayed on the web page. Comments help keep our files organized, allow us to set reminders, and provide a way to more effectively manage our code.

- HTML comments start with `<!-- and end with -->`
- CSS comments start with `/*` and end with `*/`

---

## Using Text-Based Elements

Many different forms of media and content exist online; however, text is predominant. There are a number of different elements for displaying text on a web page.

### Headings

Headings are block-level elements, and they come in six different rankings, `<h1>` through `<h6>`. Headings help to:
- Quickly break up content
- Establish hierarchy
- Serve as key identifiers for users reading a page
- Help search engines index and determine the content on a page

Headings should be used in an order that is relevant to the content of a page:
- The primary heading should be marked up with an `<h1>` element
- Subsequent headings should use `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` elements as necessary

> ⚠️ **Warning:** Each heading level should be used where it is semantically valued, and should not be used to make text bold or big—there are other, better ways to do that.

Here is an example of HTML for all the different heading levels:

```HTML
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```
### Paragraphs

Headings are often followed by supporting paragraphs. Paragraphs are defined using the `<p>` block-level element. Paragraphs can appear one after the other, adding information to a page as desired.

```HTML
<p>Steve Jobs was a co-founder and longtime chief executive officer at Apple. On June 12, 2005, Steve gave the commencement address at Stanford University.</p>

<p>In his address Steve urged graduates to follow their dreams and, despite any setbacks, to never give up&ndash;advice which he sincerely took to heart.</p>
```
### Bold Text With Strong

To make text bold and place a strong importance on it, we'll use the `<strong>` inline-level element. There are two elements that will bold text for us: the `<strong>` and `<b>` elements, with different semantic meanings:

- The `<strong>` element is semantically used to give _strong importance_ to text
- The `<b>` element semantically means to _stylistically offset_ text

We should gauge the significance of the text we wish to set as bold and choose an element accordingly.

```HTML
<!-- Strong importance -->
<p><strong>Caution:</strong> Falling rocks.</p>

<!-- Stylistically offset -->
<p>This recipe calls for <b>bacon</b> and <b>baconnaise</b>.</p>
```
### Italicize Text with Emphasis

To italicize text, thereby placing emphasis on it, we'll use the `<em>` inline-level element. As with bold text, there are two different elements that will italicize text:

- The `<em>` element is used semantically to place a _stressed emphasis_ on text
- The `<i>` element is used semantically to convey text in an _alternative voice or tone_

```HTML
<!-- Stressed emphasis -->
<p>I <em>love</em> Chicago!</p>

<!-- Alternative voice or tone -->
<p>The name <i>Shay</i> means a gift.</p>
```

---

## Building Structure

For the longest time, the structure of a web page was built using divisions. The problem was that divisions provide no semantic value, making it difficult to determine their intention. HTML5 introduced new structurally based elements, including:

- `<header>`
- `<nav>`
- `<article>`
- `<section>`
- `<aside>`
- `<footer>`

These new elements are intended to give meaning to the organization of our pages and improve structural semantics. They are all block-level elements and do not have any implied position or style. Additionally, all of these elements may be used multiple times per page, as long as each use reflects the proper semantic meaning.
### Header

The `<header>` element is used to identify the top of a page, article, section, or other segment of a page. In general, the `<header>` element may include a heading, introductory text, and even navigation.

```HTML
<header>...</header>
```

#### `<header>` vs. `<head>` vs. `<h1>` through `<h6>` Elements

It's easy to confuse these elements, but they all have different semantic meanings:

- The `<header>` element is a structural element that outlines the heading of a segment of a page. It falls within the `<body>` element.
- The `<head>` element is not displayed on a page and is used to outline metadata, including the document title, and links to external files. It falls directly within the `<html>` element.
- Heading elements, `<h1>` through `<h6>`, are used to designate multiple levels of text headings throughout a page.

### Navigation

The `<nav>` element identifies a section of major navigational links on a page. The `<nav>` element should be reserved for primary navigation sections only, such as:
- Global navigation
- Table of contents
- Previous/next links
- Other noteworthy groups of navigational links

Most commonly, links included within the `<nav>` element will link to other pages within the same website or to parts of the same web page.

```HTML
<nav>...</nav>
```

### Article

The `<article>` element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We'll often use the `<article>` element to mark up:
- Blog posts
- Newspaper articles
- User-submitted content

When deciding whether to use the `<article>` element, we must determine if the content within the element could be replicated elsewhere without any confusion. If the content would still make sense when removed from the context of the page, it's a good candidate for the `<article>` element.

```HTML
<article>...</article>
```

### Section

The `<section>` element is used to identify a thematic grouping of content, which generally, but not always, includes a heading. The grouping of content within the `<section>` element may be generic in nature, but it's useful to identify all of the content as related.

The `<section>` element is commonly used to break up and provide hierarchy to a page.

```HTML
<section>...</section>
```

### Deciding Between `<article>`, `<section>`, or `<div>` Elements

At times it becomes fairly difficult to decide which element is the best for the job based on its semantic meaning. The trick here is to look at the content:

- If the content is being grouped solely for styling purposes and doesn't provide value to the outline of a document, use the `<div>` element.
- If the content adds to the document outline and it can be independently redistributed or syndicated, use the `<article>` element.
- If the content adds to the document outline and represents a thematic group of content, use the `<section>` element.

### Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. When used within an `<article>` element, for example, the `<aside>` element may identify content related to the author of the article.

> 📝 **Note:** All structural elements, including the `<aside>` element, are block-level elements and will appear on a new line, occupying the full available width of their parent element.

```HTML
<aside>...</aside>
```

### Footer

The `<footer>` element identifies the closing or end of a page, article, section, or other segment of a page. Generally the `<footer>` element is found at the bottom of its parent. Content within the `<footer>` element should be relative information and should not diverge from the document or section it is included within.

```HTML
<footer>...</footer>
```

---

## In Practice

Let's apply what we've learned to our existing index.html file:

1. Add a `<header>` element that includes our existing `<h1>` element and a new `<h3>` element as a tagline:

```HTML
<header>
  <h1>Styles Conference</h1>
  <h3>August 24&ndash;26th &mdash; Chicago, IL</h3>
</header>
```

2. Add a new `<section>` element that introduces our conference with a new `<h2>` element and our existing paragraph:

```HTML
<section>
  <h2>Dedicated to the Craft of Building Websites</h2>
  <p>Every year the brightest web designers and front-end developers descend on Chicago to discuss the latest technologies. Join us this August!</p>
</section>
```

3. Add another group of content that teases a few of the pages we'll be adding, with each teaser in its own `<section>` element:

```HTML
<section>
  <section>
    <h5>Speakers</h5>
    <h3>World-Class Speakers</h3>
    <p>Joining us from all around the world are over twenty fantastic speakers, here to share their stories.</p>
  </section>
  ...
</section>
```

4. Add a copyright within the `<footer>` element using the `<small>` element:

```HTML
<footer>
  <small>&copy; Styles Conference</small>
</footer>
```
### Encoding Special Characters

Special characters include various punctuation marks, accented letters, and symbols. When typed directly into HTML, they can be misunderstood or mistaken for the wrong character; thus they need to be encoded.

Each encoded character begins with an ampersand, `&`, and ends with a semicolon, `;`. What falls between the ampersand and semicolon is a character's unique encoding, be it a name or numeric encoding.

For example, we would encode the word "resumé" as `resum&eacute;`. Within our header we have encoded both en and em dashes, and within our footer we have encoded the copyright symbol.

---

## Creating Hyperlinks

Along with text, one of the core components of the Internet is the hyperlink, which provides the ability to link from one web page or resource to another. Hyperlinks are established using the anchor, `<a>`, inline-level element. In order to create a link, the `href` attribute, known as a hyperlink reference, is required. The `href` attribute value identifies the destination of the link.

```HTML
<a href="http://shayhowe.com">Shay</a>
```

### Wrapping Block-Level Elements with Anchors

By nature the anchor element, `<a>`, is an inline element, and according to web standards, inline-level elements may not wrap block-level elements. With the introduction of HTML5, however, anchor elements specifically have permission to wrap either block-, inline-, or any other level elements. This is a break from the standard convention, but it's permissible in order to enable entire blocks of content on a page to become links.

### Relative & Absolute Paths

The two most common types of links are links to other pages of the same website and links to other websites:

- **Relative paths** are used for links to other pages of the same website and do not include the domain in the `href` attribute value. Example: `about.html` or `pages/about.html`

- **Absolute paths** are used for links to other websites outside of the current one and must include the full domain. Example: `http://google.com`

```HTML
<!-- Relative Path -->
<a href="about.html">About</a>

<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Basics/Lesson 1- Building Your First Web Page|Lesson 1: Building Your First Web Page]] | **Next**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Basics/Lesson 3- Semantic Code in HTML- What is it and does it still matter|Lesson 3: Semantic Code in HTML - What is it and does it still matter?]]
