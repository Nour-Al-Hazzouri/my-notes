### 1. Setup for Separate Environments & Merging

**Explanation:** Development and production have vastly different goals. Development requires a local server and strong debugging tools, while production focuses on minification and optimized assets. To keep your code "DRY" (Don't Repeat Yourself), you create a "common" configuration for shared settings and merge it with environment-specific files using a utility called `webpack-merge`.

**Example:**

```json
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map'
});
```

- **`const { merge } = require('webpack-merge');`**: Imports the specialized function used to combine multiple configuration objects.
- **`require('./webpack.common.js');`**: Loads the base configuration file containing settings used in both environments (like entry and output).
- **`merge(common, { ... })`**: Stitches the shared settings from the `common` file together with the production-specific object provided in the second argument.
- **`mode: 'production'`**: Activates production-specific optimizations like the `TerserPlugin`.

---

### 2. Updating NPM Scripts

**Explanation:** Once you have separate configuration files, you must update your `package.json` scripts. You use the `--config` flag to point the `start` command toward your development settings and the `build` command toward your production settings.

**Example:**

```json
{
  "scripts": {
    "start": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
}
```

- **`"start": "..."`**: The script used for local development.
- **`webpack serve`**: Starts the live-reloading development server.
- **`--config webpack.dev.js`**: Instructs webpack to use the development-specific configuration file.
- **`"build": "..."`**: The script used to generate the final assets for users.
- **`--config webpack.prod.js`**: Instructs webpack to use the production-specific configuration file.

---

### 3. Minification

**Explanation:** Webpack automatically minifies your code in production mode to make file sizes as small as possible. By default, it uses the `TerserPlugin`, which removes whitespace, comments, and unused code (tree shaking).

**Example:**

```json
module.exports = {
  mode: 'production',
  optimization: {
    minimize: true
  }
};
```

- **`mode: 'production'`**: Automatically triggers minification using the default `TerserPlugin`.
- **`optimization: { ... }`**: The configuration section where performance-related tweaks are defined.
- **`minimize: true`**: Explicitly enables the minification process (though this is already the default for production mode).

---

### 4. Source Mapping for Production

**Explanation:** Source maps are essential for debugging production errors, but you must choose a style that is fast and doesn't bloat your bundle. In production, you should use separate map files rather than "inline" maps, as inline mapping significantly increases the size of the files your users download.

**Example:**

```json
module.exports = {
  devtool: 'source-map'
};
```

- **`devtool`**: The configuration property that determines how (or if) source maps are generated.
- **`'source-map'`**: Generates a full, separate `.map` file. This is recommended for production because it provides high-quality debugging without adding performance-draining data directly into your main JavaScript files.

---

### 5. Minimize CSS

**Explanation:** While webpack focuses on JavaScript, it is "crucial" to also minify your CSS for a production site. Smaller CSS files lead to faster load times and better performance for your end users.

**Additional Context:** Minification of CSS is a best practice that ensures your entire application—not just the logic—is optimized for weight and speed.

---

### 6. CLI Alternatives

**Explanation:** You can trigger many production optimizations directly from your terminal using shorthand command-line flags instead of editing a configuration file. This is useful for quick testing, though configuration files are preferred for complex projects.

**Example:**

```bash
npx webpack --mode=production --optimization-minimize
```

- **`npx webpack`**: Runs the webpack command from your local installation.
- **`--mode=production`**: Sets the build environment to production via the CLI.
- **`--optimization-minimize`**: A shorthand flag to enable code minification directly through the terminal.
---
To implement a professional environment-specific workflow, the sources recommend a "three-file" setup using the `webpack-merge` utility. This approach keeps your code "DRY" (Don't Repeat Yourself) by putting shared logic in a **common** file, which is then merged with **development** or **production** specific settings.

### The Three-File Configuration Example

Below are the three necessary files. Note that you must first install the utility by running `npm install --save-dev webpack-merge`.

#### 1. `webpack.common.js` (Shared Settings)

This file contains the core setup used in every environment, such as entry points and output locations.

```json
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

- **`const path = ...`**: Imports the Node.js path module to handle file directories safely across different operating systems.
- **`entry: { app: './src/index.js' }`**: Defines the main starting point of your application.
- **`plugins: [ ... ]`**: Includes plugins like `HtmlWebpackPlugin` that are needed regardless of whether you are in dev or prod.
- **`output: { ... }`**: Specifies that the compiled files should be named based on their entry point and saved in a folder named `/dist`.
- **`clean: true`**: Ensures the `/dist` folder is emptied before each new build.

#### 2. `webpack.dev.js` (Development Settings)

This file focuses on features that help developers, like a local server and easy debugging.

```json
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
```

- **`const { merge } = ...`**: Imports the `merge` tool used to combine this file with the common configuration.
- **`const common = ...`**: Imports the shared settings from the first file.
- **`module.exports = merge(common, { ... })`**: Stitches the common settings and these dev settings together into one final configuration.
- **`mode: 'development'`**: Sets the environment to development, which disables minification for faster build speeds.
- **`devtool: 'inline-source-map'`**: Enables strong source mapping so you can see exactly where errors occur in your original code rather than the compiled bundle.
- **`devServer: { static: './dist' }`**: Configures the local development server to serve files from the `/dist` directory.

#### 3. `webpack.prod.js` (Production Settings)

This file focuses on performance, minification, and lightweight assets for the end user.

```json
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
```

- **`mode: 'production'`**: This is the most critical line. It automatically triggers the **TerserPlugin** for minification and sets the `process.env.NODE_ENV` variable to 'production'.
- **`devtool: 'source-map'`**: Generates a separate, high-quality map file for debugging production errors without bloating the size of your main JavaScript files.

### Additional Context for Use

To actually use these files, you must update your `package.json` scripts to point to these specific files using the `--config` flag:

```json
"scripts": {
  "start": "webpack serve --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js"
}
```

This setup ensures that when you run `npm start`, you get a fast development experience, and when you run `npm run build`, webpack generates an optimized, minified bundle ready for a live website. Use separate maps in production (like `source-map`) because `inline` maps significantly increase bundle size and hurt performance.To implement a professional environment-specific workflow, the sources recommend a "three-file" setup using the `webpack-merge` utility. This approach keeps your code "DRY" (Don't Repeat Yourself) by putting shared logic in a **common** file, which is then merged with **development** or **production** specific settings.

---
**Previous:** [[7- npm Scripts]]