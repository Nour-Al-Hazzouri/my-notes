# Module 3: Media Queries for Accessibility

## Table of Contents
- [Media Queries for Accessibility](#media-queries-for-accessibility)
  - [Reacting to User Preferences](#reacting-to-user-preferences)
  - [Prefers Reduced Motion](#prefers-reduced-motion)
  - [Prefers Color Scheme](#prefers-color-scheme)
  - [Prefers Contrast](#prefers-contrast)
- [Accessibility Testing](#accessibility-testing)

---

## Media Queries for Accessibility

In addition to screen sizes, users may have certain preferences set on their machines.

These might include:
- Prefers reduced motion
- Prefers contrast
- Prefers color scheme

### Reacting to User Preferences

In addition to screen sizes, users may have certain preferences set on their machines.

These might include:
- Prefers reduced motion
- Prefers contrast
- Prefers color scheme

### Prefers Reduced Motion

- You can disable animations altogether or offer a more subtle version.
- Valuable for users that experience motion sensitivities.
- Can also be integrated with Low Battery mode.

```css
@media (prefers-reduced-motion: reduce) {
  /* Reduced motion styles here */
  .animation {
    animation: none;
  }
}
```

### Prefers Color Scheme

- User can specify light or dark color scheme
- Utilized by person's with vision issues AND people who may be using their device in a low/high light.

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
  body {
    background-color: #121212;
    color: #ffffff;
  }
}
```

### Prefers Contrast

- User can specify no-preference, more, less, or custom for the color contrast.

```css
@media (prefers-contrast: more) {
  /* High contrast styles */
  body {
    background-color: white;
    color: black;
  }
}
```

---

## Accessibility Testing

💡 **Tip:** Test your code as you write it – don't wait until the end.

- Think about your layout before you begin to code.
- Test your code as you write it – don't wait until the end.
- Your code should have no syntax errors before you start your CSS.
- Test your site frequently as you add CSS (or JavaScript)

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/4- Responsive Design/Coursera/Module 2|Module 2: Media Queries and Responsive Design]] | **Next**: [[Education/Career Paths/Web Development/1- Old/4- Responsive Design/Coursera/Module 4|Module 4: Frameworks and Bootstrap]]
