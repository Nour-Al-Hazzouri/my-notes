# Module 1: Introduction to HTML

## Table of Contents
- [Syllabus](#syllabus)
- [01.01: To Succeed in This Class](#0101-to-succeed-in-this-class)
- [Required Materials](#required-materials)
- [01.02: HTML Basics](#0102-html-stands-for-hypertext-markup-language)
  - [Web Standards](#web-standards)
  - [Evolution of Browsers](#evolution-of-browsers)
  - [Evolution of HTML](#evolution-of-html)
- [01.03: How It Works](#0103-how-it-works-the-magic-of-page-requests)
  - [Client/Server Relationship](#clientserver-relationship)
  - [The Internet](#the-internet)
  - [Request/Response Cycle](#requestresponse-cycle)
  - [URL Structure](#uniform-resource-locator)
  - [Protocols](#protocols)
  - [Domain Names](#domain-names)
  - [IP Addresses](#ip-addresses)
  - [DNS](#the-domain-name-server-dns)
  - [Document](#document)
  - [The Request and Response](#the-request)
  - [The Full Process](#the-full-process)
- [01.04: Browser Options](#0104-looking-at-your-browser-options)
  - [Different Browsers](#differing-browsers)
  - [Browser Usage](#browser-usage)
  - [Accessibility](#issues-of-accessibility)
- [01.05: Editors](#0105-editors-how-to-use-an-editor-to-create-an-html-file)
  - [Creating and Editing Files](#creating-and-editing-your-files)
  - [Troubleshooting](#trouble-shooting)

---

## Syllabus

**HTML** stands for Hypertext Markup Language, a way of marking up files so that browsers (Internet Explorer, Chrome, Safari, Edge, etc.) know how to display your content as a webpage.

HTML uses **tags** to distinguish between content (what the user should see) and the instructions for displaying them (make this a list, make this a link to a different page, show this picture, etc...)

---

## 01.01: To Succeed in This Class

- Create a community: code with others
- Work Smart: never spend more than 20 minutes on a problem
- Look things up on your own: you need to know how to use search engines to find out about topics that interests you
- Practice.

---

## Required Materials

---

## 01.02: HTML Stands for Hypertext Markup Language

Markup languages are not the same as programming languages, they use tags to annotate documents, in HTML, the tags indicate where headings, images, lists, links, line breaks, and other components should go.

### Web Standards

No one "runs" the internet of the Web, some groups do take proactive roles:

- **Internet Engineering Task Force (IETF)**: They focus on how the different networks collaborate and how they should work together.
- **World Wide Web Consortium (W3C)**: They focus on HTML and the evolution of HTML, they want to know which kind of tags the browser should and shouldn't support.
- **The Web Accessibility Initiative (WAI)**: They want to make sure that no matter how the people are accessing the web, they have the same ability to view the content.

### Evolution of Browsers

### Evolution of HTML

HTML5 is a cooperation between the W3C and the Web Hypertext Application Technology Working Group (WHATWG).

### Established Guidelines

- New features should be based on HTML5, CSS, the DOM, and JavaScript
- Reduce the need for external plugins (e.g. Flash)
- More markup to replace scripting
- HTML5 should be device independent

### Summary

- Browsers translate HTML documents into viewable webpages
- HTML was intended to facilitate content types
- When designers want to do something new they write non-standard code to force browsers to do it
- New standards are written to handle new requirements and browsers adopt the new standards

---

## 01.03: How It Works: The "Magic" of Page Requests

### Client/Server Relationship

- **Servers**:
  - Machines that hold shared resources
  - Always connected to the network
- **Clients**:
  - Machines for personal use (laptops, phones, etc.)

### The Internet

- **LAN**: Local Area Network: A network that has some devices with shared resources and is typically a small one, for example a network within a building that has a server
- **WAN**: Wide Area Network: A bunch of smaller networks (LANs) which might consist of multiple building

### Request/Response Cycle

The client requests a page and a server responds with the appropriate files.

### Uniform Resource Locator

URL: 3 parts:
- **Protocol**: how to connect
- **Domain**: the server
- **Document** (optional): the specific file needed (Most pages are made up of multiple files)

### Protocols

- **HTTP**: Hypertext Transfer Protocol: Transfer HTML Files
- **HTTPS**: Secure Hypertext Transfer Protocol: Same idea but more secure
- **FTP**: File Transfer Protocol: Can have any type of file

### Domain Names

- Identifies the entity you want to connect to: unich.edu, google.com, wikipedia.org
- Each has different top-level domain: Determined by the Internet Corporation for Assigned Names and Numbers (ICAAN), and the determination is based on which type of organization is qualified for different domains

### IP Addresses

- Internet Protocol Version 6 (IPV6) is the communication protocol that identifies computers on networks
- Every computer has a unique IP Address
- Can represent over 300 trillion unique combination (2*128)

> 📝 **Note**: In this course it is mentioned that IPV6 is used as the IP for the servers, but according to my research, IPV4 is still widely used and more popular than IPV4.

### The Domain Name Server (DNS)

The DNS will lookup the IP Address based on the URL you type in.

### Document

- URLs can specify a specific document:

- If no document is specified, the default document is returned (convention is **index.html**)

### The Request

- Once the IP Address is determined, the browser creates and HTTP request
- Lots of hidden information is in this request (header, cookies, form data, etc.)

### The Response

- The server return files, not "web pages", it is up to the browser to decide what to do with those files
- If the server can't fulfill the request, it will send back files with error codes: 404, 500, etc.

### The Full Process

In this example "https://si.umich.edu/" is the website used as the example when you put in into the address bar:

1. The browser loop up the domain in the DNS
2. The DNS returns the IP Address: 54.88.175.189

The Request/Response cycle is initiated:

1. The browser sends an HTTP request to the server located at that address
2. The server finds the requested file and sends it back as a response
3. The browser takes the response and renders the HTML code as a nice graphical presentation, often repeating steps 3-4 as needed to request images and other supporting files

### Review

- A URL has three parts
- Request/Response cycle typically requires multiple rounds of communication between the client and server

---

## 01.04: Looking at Your Browser Options

### Differing Browsers

- Different browsers have their pros and cons
- You need to test your site on multiple browsers

### Internet Explorer

- Platform-dependent: doesn't automatically work on a Mac
- Edge came out in 2015 and it was meant to replace IE

### Google Chrome

- Freeware by google
- Released for Windows in 2008, ported to Linux, MacOS, iOS, and android later
- Greater Security

### Firefox

- Free, open source by Mozilla
- Available for Windows, macOS, Linux, and BSD operating systems

### Browser Usage

This shows that there's isn't a specific browser than can stay popular at all times, which is why making a website that works on all browsers is the best way to go.

### Issues of Accessibility

- Browsers should have keyboard functionality, support HTML5 tags, and support features for assistive technology

- [www.html5accessibility.com](http://www.html5accessibility.com) shows browsers with the most accessibility features

### Review

- Browsers can vary in how well they adhere to HTML5 standards
- Different versions of browsers need to be considered as well
- Test in a variety

---

## 01.05: Editors: How to Use an Editor to Create an HTML File

### Creating and Editing Your Files

1. Decide how you will organize your files
2. Decide on a naming convention
   - Dashes, camelCase
   - No spaces, Consistent capitalization
3. Decide on an editor
   - Windows (Notepad, Notepad++, Sublime*)
   - Mac (TextEdit, TextWrangler, Sublime)

### Trouble-shooting

- **The browser shows the tags**:
  - Check that the file extension is .html
- **The code is changed but the page shows the same thing**:
  - Refresh your browser
  - Verify file name
- **"Weird" characters**:
  - Try typing code in by hand, not copy-and-paste

---
**Next**: [[Education/Career Paths/Web Development/1- Old/1- HTML/1- Introduction to HTML5 - Coursera/Module 2|Module 2: HTML Structure and Elements]]
