# React Module Summary: Navigation, Conditional Rendering & Assets

## 🧭 **Navigation in React**
1. **Single-Page Applications (SPAs)**:
   - Entire app loads in a single `div`, simulating multi-page navigation.
   - Uses React Router (`react-router-dom`) for client-side routing.
2. **Multi-Page Navigation**:
   - Implemented via React Router components (`BrowserRouter`, `Route`, `Link`).
   - Example structure:
```jsx
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```
3. **Navigation UI**:
   - Common patterns: Horizontal navbars, dropdown menus.
   - Lab: Added links to a navbar using React Router.

---

## 🎨 **Conditional Rendering**
- **Dynamic Content**:
  - Use ternary operators for simplified `if-else` logic.
  - Example: Render components based on user authentication status.
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

## 📂 **Asset Management**
1. **Folder Structure**:
   - **Embedded Assets**: Stored in `src/assets/` (e.g., images, fonts).
   - **Public Assets**: Static files (e.g., `favicon.ico`) in `public/`.
2. **Using Assets**:
   - **Images**:
```jsx
import logo from './assets/logo.png';
<img src={logo} alt="Logo" />
```
   - **Audio/Video**:
     - Local files via HTML5 `<audio>`/`<video>` tags.
     - Third-party embeds (e.g., YouTube `<iframe>`).
     - NPM packages like `react-player`:
```jsx
<ReactPlayer url={vidUrl} volume={0.5} playing={false} />
```
3. **Package Selection**:
   - Check GitHub stars, contributors, and update frequency.
   - Example: `react-player` (6k+ stars, active maintenance).

---

## 🛠️ **Key Skills Gained**
1. **Navigation**:
   - Design SPAs with React Router.
   - Implement multi-page-like routing and navbars.
2. **Dynamic UI**:
   - Conditionally render components using ternary operators.
3. **Assets**:
   - Organize files in `src/assets` vs. `public`.
   - Embed images, audio, and video.
4. **Media Handling**:
   - Use third-party packages for advanced media control (e.g., autoplay, volume).

---

## 🧪 **Labs & Projects**
- **Ungraded Labs**:
  1. Extended navbar with React Router links.
  2. Embedded images from `src/assets`.
  3. Built a bird sound app with audio controls.
- **Final Project**: Calculator app (next module).

---

## 🎯 **Learning Outcomes**
- Describe SPA vs. multi-page navigation.
- Create and configure React Router routes.
- Conditionally render UI components.
- Manage asset folders and reference paths.
- Implement media players with React packages.

---

**Next Module**: Build a calculator app to apply React fundamentals.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/13- Create an Audio-Video Component|React Player Implementation Summary]]
