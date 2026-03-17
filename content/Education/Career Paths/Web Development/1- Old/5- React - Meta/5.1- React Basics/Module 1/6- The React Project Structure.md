```bash
npm init react app
```
- This command in the terminal will create the default React folder structure:
	![[Pasted image 20241213123324.png]]
	- node_modules:
		Repository for all the modules in the react app
	- public:
		Contains assets that will be displayed to the user in the app
	- src:
		Contains all essential component files required to ensure that a React app functions
		- App.css: 
			contains the styles for the app.js components
		- index.css:
			contains styles to use in the entire app
		- App.test.js, setupTests.js, reportWebVitals.js:
			Contains files related to the app's performance and testing
		- logo.svg:
			Displayed on the start page of the default app when displayed on the browser on the localhost
- The most important file in the source folder is the index.js file, it renders everything the app needs to render a working react app
- Root files are additional files found at the root of the project folder itself:
	- .gitignore:
		Version control, used to specify what files and folders must be excluded from a project
	- README.md:
		Markdown file that gives basic information about this project
	- package.json:
		Lists information about the app which allows npm to run several scripts and perform various tasks in the app itself
	- package-lock.json:
		List of all dependencies with specific versions

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/5- Transpiling JSX|5- Transpiling JSX]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/7- Customizing the Project|7- Customizing the Project]]
