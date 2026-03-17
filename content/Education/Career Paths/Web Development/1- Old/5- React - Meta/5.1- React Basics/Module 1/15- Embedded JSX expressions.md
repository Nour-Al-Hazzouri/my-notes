- Embedded expressions allow developers to insert the values of JS variables into HTML of React elements
Example:
```jsx
function formatName(firstName, surname){
	return firstName + " " + surname;
};
const fullName= <p>{ formatName("Wilson", "Williams") }</p>
//Then it can be inserted as:
{fullName};
```

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/14- JSX syntax and the arrow function|14- JSX syntax and the arrow function]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 1/16- Ternary operators and functions in JSX|16- Ternary operators and functions in JSX]]
