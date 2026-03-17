# Assets in React: Managing and Using Images

## What Are Assets?
* Files needed by React app at runtime
* Includes images, stylesheets, fonts, media files
* Essential for complete app functionality

## Asset Storage Best Practices
### Folder Structure
* `src/assets/` folder for critical assets
* `public/` folder for non-essential files (e.g., favicon)

## Asset Import Methods

### Method 1: Import Statement
```jsx
import cat from './assets/images/cat.jpg';

function ShowAnimal() {
  return (
    <div>
      <img src={cat} alt="A picture of a cat" />
    </div>
  );
}
```

### Method 2: Require Syntax
```jsx
function ShowAnimal() {
  return (
    <div>
      <img
        src={require('./assets/images/cat.jpg')}
        alt="A picture of a cat"
      />
    </div>
  );
}
```

## Key Considerations
* Choose descriptive asset names
* Use consistent import strategies
* Organize assets logically
* Ensure assets are available when needed

## Asset Types
* Images
* Fonts
* Stylesheets
* Media files
* SVG graphics
* Video/Audio files

## Best Practices
* Keep asset paths relative
* Use meaningful alt text for images
* Optimize asset file sizes
* Consider lazy loading for large assets

## Folder Organization Example
```
src/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── videos/
├── components/
└── App.js
```

## Performance Tips
* Use appropriate image formats
* Compress images
* Consider using modern formats like WebP
* Implement lazy loading for images

## Common Pitfalls
* Incorrect asset paths
* Large, unoptimized asset files
* Missing import statements
* Forgetting alt text for accessibility

## Advanced Techniques
* Dynamic asset importing
* Conditional asset rendering
* Asset preloading
* Using asset management tools

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/7- Single View Conditional Updates|Dynamic Day Message Component in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/9- Bundeling Assets|Webpack and Asset Management in React]]
