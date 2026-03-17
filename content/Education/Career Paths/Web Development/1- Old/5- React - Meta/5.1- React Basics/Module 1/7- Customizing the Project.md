Here’s a revised summary with code snippets included where appropriate:

---

### Summary

This lesson focuses on customizing a React project by building a typography-focused blog layout. It involves understanding the software development process, file organization, and folder structure. The project includes sections for navigation, a promo area, blog post previews, and a footer.

#### 1. **Organizing Code**

React documentation suggests two organizational approaches: grouping by features or by file type. Beginners are advised to keep things simple. For this project, a `components` folder is created to house all components:

```
src/
    components/
        Nav.js
        Promo.js
        Intro1.js
        Intro2.js
        Intro3.js
        Footer.js
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```

#### 2. **Building the App**

The app is initialized using the command:

```bash
npm init react-app customizing-example
```

This generates the starter structure. Components are created to represent each section of the blog.

#### 3. **Building Components**

The components are simple, functional, and designed to reflect the layout structure:

- **Nav.js**: Defines the navigation bar.

```javascript
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Nav;
```

- **Promo.js**: Displays a promotional banner.

```javascript
function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
}
export default Promo;
```

- **Intro1.js**: Displays the first blog post preview.

```javascript
function Intro1() {
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
}
export default Intro1;
```

- **Intro2.js**: Displays the second blog post preview.

```javascript
function Intro2() {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
}
export default Intro2;
```

- **Intro3.js**: Displays the third blog post preview.

```javascript
function Intro3() {
    return (
        <div className="blog-post-intro">
            <h2>What's the best way to style your React apps?</h2>
            <div>
                <p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
}
export default Intro3;
```

- **Footer.js**: Adds a footer section.

```javascript
function Footer() {
    return (
        <div className="copyright">
            <p>Made with love by Myself</p>
        </div>
    );
}
export default Footer;
```

#### 4. **Syntax Discussion**

- **`className`**: Used instead of `class` in JSX due to `class` being a reserved JavaScript keyword.
- **Repetition of `Intro.js` Files**: Temporarily using separate files; reusability with `props` will be introduced later.
- **Use of Props**: Not yet applied but will be discussed in the next lesson.
- **Links**: `<a>` tags are avoided for internal links; React Router will be introduced for navigation.

#### 5. **Conclusion**

This lesson highlights the importance of organizing files and building functional components for customization. It sets the stage for future topics like props and React Router.

---

Let me know if anything is missing!

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/6- The React Project Structure|6- The React Project Structure]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/8- Importing Components|8- Importing Components]]
