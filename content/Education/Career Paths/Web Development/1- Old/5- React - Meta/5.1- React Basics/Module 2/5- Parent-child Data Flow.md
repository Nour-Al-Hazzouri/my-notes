- Advantages of utilizing a centralized point of data - a "single source of truth" - in your React apps:
	- It offers a more efficient way of working when data frequently changes
	- It reduces the possibility of typing errors in your code
	- It allows you to edit multiple items from a single point
- Updating each element is not a good approach, a better approach is using an object that is the source of all the sections on the website
- Example:
```jsx
const data = {
	heading: "99% off all items!"
	callToAction: "Everything must go!"
};
function promo(){
	return (
		<div>
			<promoHeading
			heading= {data.heading)}
			callToAction= {data.callToAction}
			/>
		</div>
	);
};
```
This can also be applied to any other module as much as needed

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/4- Event handling and embedded expressions|4- Event handling and embedded expressions]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/6- Data flow in React|6- Data flow in React]]
