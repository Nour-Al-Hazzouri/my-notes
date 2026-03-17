In this reading, you’ll learn how to install the reactjs-media npm package.

You can find this package on the npmjs.org website at the following URL:

[https://www.npmjs.com/package/react-player](https://www.npmjs.com/package/react-player "https://www.npmjs.com/package/react-player")

To install this package you'll need to use the following command _in the terminal_:
```bash
npm install react-player
```

Once you have this package installed, you can start using it in your project.

There are a few ways that you can import and use the installed package. For example, to get the entire package's functionality, use the following import:
```jsx
import ReactPlayer from "react-player";
```

If you are, for example, only planning to use videos from a site like YouTube, to reduce bundle size, you can use the following import:
```jsx
import ReactPlayer from "react-player/youtube";
```

Here’s an example of using the react-player packaged in a small React app:
```jsx
import React from "react";
import ReactPlayer from "react-player/youtube";
const App = () => {
return (
<div>
<MyVideo />
</div>
);
};
const MyVideo = () => {
return (
<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
);
};
export default App;
```
In this reading, you learned how to install and use the react-player npm package.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/11- Audio and Video|React Video Implementation Summary]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 3/13- Create an Audio-Video Component|React Player Implementation Summary]]
