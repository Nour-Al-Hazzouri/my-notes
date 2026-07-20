### Core Concepts

- **Bundling & Dependency Graphs**: Webpack starts at an **entry point**, follows every `import` to build a **dependency graph**, and combines everything into a single output file.
    - _Note:_ This fixes the performance issue of browsers downloading dozens of individual module files.
- **The `src` and `dist` Convention**: You write all code in the `src` folder. Webpack outputs the final, optimized version to the `dist` folder.
    - _Note:_ You only deploy the `dist` folder; the `src` folder is for development only.
- **Dev Dependencies**: Webpack is installed with the `--save-dev` flag because it is a tool used to _build_ the app, not code that runs _in_ the browser.
- **The Configuration File (`webpack.config.js`)**: A JavaScript file that tells Webpack how to behave. Key properties include `mode`, `entry`, and `output`.
- **Plugins (HtmlWebpackPlugin)**: Used to manage HTML. It generates an `index.html` in `dist` and automatically injects the bundled script tag.
    - _Note:_ Do **not** manually add a `<script>` tag to your HTML template.
- **CSS Loaders**: Requires `css-loader` (to read CSS) and `style-loader` (to inject it into the DOM).
    - _Note:_ Loader order is critical; they run **right-to-left**. You must put `css-loader` after `style-loader` in the array.
- **Image Handling**:
    - **In JS**: Handled by built-in `asset/resource`.
    - **In HTML**: Handled by `html-loader` to detect `<img src="...">` tags.
    - _Note:_ Webpack "hashes" image names (e.g., `29822e...png`) to prevent browser caching issues.
- **Development Tools**:
    - **Source Maps**: Uses `eval-source-map` to link browser errors back to your original source code lines instead of the bundled mess.
    - **Dev Server**: Provides live reloading. It runs in memory and doesn't write to `dist` while active.

---

### Command Cheat Sheet (Terminal)

```bash
# 1. Initialize npm
npm init -y

# 2. Install Webpack and CLI
npm install webpack webpack-cli --save-dev

# 3. Install HTML Plugin
npm install html-webpack-plugin --save-dev

# 4. Install CSS Loaders
npm install style-loader css-loader --save-dev

# 5. Install HTML Image Loader and Dev Server
npm install html-loader webpack-dev-server --save-dev

# 6. Run a one-time build
npx webpack

# 7. Start the Live Development Server
npx webpack serve
```

---

### Full Webpack Configuration Example

**File: `webpack.config.js`**

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // 1
  entry: "./src/index.js", // 2
  output: {
    filename: "main.js", // 3
    path: path.resolve(__dirname, "dist"), // 4
    clean: true, // 5
  },
  devtool: "eval-source-map", // 6
  devServer: {
    watchFiles: ["./src/template.html"], // 7
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // 8
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // 9
        use: ["style-loader", "css-loader"], // 10
      },
      {
        test: /\.html$/i, // 11
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 12
        type: "asset/resource",
      },
    ],
  },
};
```

#### Line-by-Line Breakdown:

1. **`mode: "development"`**: Tells Webpack to prioritize build speed and readability over file size for easier debugging.
2. **`entry`**: The "start" of your app where Webpack begins looking for imports.
3. **`filename`**: The name given to the single bundled JS file in the `dist` folder.
4. **`path`**: Uses Node's `path` module to ensure the `dist` folder is located correctly regardless of your operating system.
5. **`clean: true`**: Wipes the `dist` folder before every build so old, unused files don't stay there.
6. **`devtool: "eval-source-map"`**: Enables source maps so browser errors point to your original `src` files.
7. **`watchFiles`**: Forces the Dev Server to refresh the page even if you only change the HTML template.
8. **`template`**: Tells the plugin which HTML file to use as the base for the version it creates in `dist`.
9. **`test: /\.css$/i`**: A regex that finds any file ending in `.css`.
10. **`use: ["style-loader", "css-loader"]`**: Applies loaders in reverse order. `css-loader` reads the file, then `style-loader` puts it in the HTML.
11. **`loader: "html-loader"`**: Finds images inside your HTML file (like `<img src="...">`) so Webpack can process them.
12. **`type: "asset/resource"`**: Tells Webpack to emit image files into the output directory and provide their final URLs to your code.
---

## Concepts

### 1. Direct Answer: Concepts Revision (Idea -> Explanation)

- **Multi-Bundle Generation**: While often used for one file, Webpack is a static module bundler designed to build a dependency graph from "one or more" entry points to produce "one or more" bundles.
- **Entry Resolution Logic**: If no configuration is provided, Webpack doesn't just look for a file; it resolves the `/src` directory first and then specifically looks for `index.js`. If the directory exists but the file doesn't, it throws a specific error: "Can't resolve './src'".
- **Loader Regex Strictness**: When defining a `test` for loaders, the value must be a **Regex Literal** (e.g., `/\.txt$/`). If you put it in quotes (e.g., `"/\.txt$/"`), Webpack will treat it as an absolute file path rather than a file extension filter, causing the loader to fail.
- **Plugin Reusability**: We use the `new` operator with plugins because a single plugin can be used **multiple times** in one configuration for different purposes. Each `new` call creates a unique instance with its own specific options.
- **Production by Default**: Unlike the "development" focus in the Odin source, Webpack defaults to `production` mode if you don't specify one. This automatically triggers built-in optimizations to make your code as small as possible.
- **ES5 and Promise Requirements**: Webpack supports all ES5-compliant browsers (IE8 and below are not supported). However, modern features like `import()` and `require.ensure()` **require Promises**. To support older browsers, you must load a polyfill.
- **Environment Minimums**: Webpack 5 itself has a hard requirement for your development machine: it requires **Node.js version 10.13.0** or later to function.

### 2. Example and Code Walkthrough

This example demonstrates the "Concepts" source's specific focus on strict Regex and multiple plugin instances.

**File: `webpack.config.js`**

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // 1
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 2
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/, // 3
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), // 4
  ],
};
```

**Line-by-line Breakdown:**

- **Line 1 (`mode: 'production'`)**: Explicitly sets the mode. If this line were missing, Webpack would choose this by default and optimize the bundle for the end-user.
- **Line 2 (`path: path.resolve(...)`)**: Uses the Node.js `path` module to turn the relative `'dist'` folder into an absolute path, ensuring the output works on any computer.
- **Line 3 (`test: /\.txt$/`)**: This is the literal Regex. Note the lack of quotes. This tells Webpack to look for the _pattern_ of files ending in `.txt`.
- **Line 4 (`new HtmlWebpackPlugin(...)`)**: We create an **instance** of the plugin. If we had two different HTML templates to generate, we would simply add another `new HtmlWebpackPlugin(...)` to this same array.

### 3. Additional Context

One key takeaway from the "Concepts" source that differs from "The Odin Project" is the emphasis on **Browser Compatibility**. While Odin focuses on how to make Webpack work on your computer, the Concepts source reminds you that the _user's_ browser must be ES5-compliant. This means if you are targeting very old systems, simply bundling the code isn't enough; you must also provide polyfills for modern JavaScript features like Promises that Webpack uses internally.

---

### Complete Terminal Commands & Configuration

**Setup Commands:**

```bash
# Ensure Node.js version is 10.13.0 or higher
node -v

# Standard installation
npm install webpack webpack-cli --save-dev

# Install the specific loaders/plugins used in the Concepts examples
npm install raw-loader html-webpack-plugin --save-dev
```

**Full "Concepts" Style Config:**

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Mode defaults to 'production' if not set
  mode: 'production',

  // Entry defaults to './src/index.js'
  entry: './src/index.js',

  // Output defaults to './dist/main.js'
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        // Must be a Regex literal, no quotes
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },

  plugins: [
    // Plugins require the 'new' operator for each instance
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```
---

## Asset Management

### 1. Loading Fonts

**Explanation:** Webpack treats fonts (like `.woff` or `.ttf`) as internal resources. By using `asset/resource`, Webpack automatically copies the font file to your `dist` folder and updates the `url()` paths in your CSS to point to the new, hashed filename.

**Example:**

```js
// webpack.config.js
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i, // 1
  type: 'asset/resource', // 2
}
```

**Line-by-line Breakdown:**

- **Line 1 (`test`)**: A regular expression that identifies common font file extensions.
- **Line 2 (`type`)**: Tells Webpack to emit these files into the output directory and export their final URLs.

---

### 2. Loading Data (CSV, TSV, and XML)

**Explanation:** Webpack can parse data files during the build process and convert them into JavaScript objects. This is more efficient than making an AJAX request at runtime because the data is ready as soon as the module loads.

**Example:**

```js
// src/index.js
import DataXML from './data.xml'; // 1
import DataCSV from './data.csv'; // 2

console.log(DataXML); // 3
```

**Line-by-line Breakdown:**

- **Line 1 & 2**: These imports trigger specialized loaders (`xml-loader` and `csv-loader`).
- **Line 3**: The variable `DataXML` is now a standard JavaScript object containing the parsed XML content.

---

### 3. Customizing JSON Parsers (TOML, YAML, JSON5)

**Explanation:** You can treat non-standard data files as "JSON modules" by providing a custom parser. This allows Webpack to understand formats like TOML or YAML without needing a dedicated loader for each one.

**Example:**

```js
// webpack.config.js
const toml = require('toml'); // 1

module.exports = {
  module: {
    rules: [
      {
        test: /\.toml$/i, // 2
        type: 'json', // 3
        parser: {
          parse: toml.parse, // 4
        },
      },
    ],
  },
};
```

**Line-by-line Breakdown:**

- **Line 1**: Imports the logic needed to read the TOML format.
- **Line 2**: Targets files ending in `.toml`.
- **Line 3**: Tells Webpack to treat the final result as a standard JSON module.
- **Line 4**: Directs Webpack to use the `toml.parse` function to transform the text file into data.

---

### 4. Component-Based Asset Grouping

**Explanation:** Instead of one global `/assets` folder, this source encourages grouping images and styles inside the same folder as the JavaScript component that uses them. This makes your code "portable"—you can copy a component folder to a new project, and as long as the loaders are the same, it will work instantly.

**Note:** If you have shared assets (like a company logo used everywhere), you can still use a global directory and use **aliasing** to keep imports clean.

---

### Complete Terminal Commands

To use the unique features described in this source, you must install the following:

```bash
# Loaders for CSV and XML data
npm install csv-loader xml-loader --save-dev

# Packages for custom data parsers
npm install toml yamljs json5 --save-dev
```

### Full "Asset Management" Configuration Snippet

**File: `webpack.config.js`**

```js
const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Font support
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i, // CSV/TSV support
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i, // XML support
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i, // Custom TOML parser
        type: 'json',
        parser: { parse: toml.parse },
      },
    ],
  },
};
```

## Summary PDF

![[The_Webpack_Blueprint.pdf]]

**Previous:** [[5- Imports & Exports]]