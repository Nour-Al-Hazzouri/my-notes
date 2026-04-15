### Summary Table

**JSON Definition** - A standard, text-based format for representing structured data based on JavaScript object syntax, primarily used for transmitting data between servers and clients.

```js
{
  "squadName": "Super hero squad",
  "active": true
}
```

The opening curly brace defines the JSON object. The keys and string values are wrapped in double quotes, followed by a boolean value and a closing brace.

**Syntax Restrictions** - Strict rules that allow only serializable data types (strings, numbers, booleans, null, objects, and arrays) while forbidding functions, comments, single quotes, and trailing commas.

```js
{
  "members": ["Molecule Man", "Madame Uppercut"]
}
```

This shows an object key "members" followed by an array. There is no trailing comma after the last string in the array, and all strings use double quotes.

**Accessing Data** - The process of retrieving specific values from a parsed JSON object using standard JavaScript dot notation or square bracket notation for arrays.

```js
const power = superHeroes.members.powers;
```

This line navigates the object starting at `superHeroes`, looks into the `members` array at index 1, finds the `powers` property, and retrieves the third item in that list.

**Conversion Methods** - Using the built-in `JSON` object to switch between text and data structures: `JSON.parse()` for converting strings to objects (deserialization) and `JSON.stringify()` for converting objects to strings (serialization).

```js
const obj = JSON.parse(jsonString);
const text = JSON.stringify(obj);
```

The first line reconstructs a functional JavaScript object from a raw text string. The second line flattens an object back into a text string for network transmission.

**The Fetch API** - An asynchronous mechanism used to retrieve JSON resources from a server, often utilizing the `.json()` method to automatically parse the response into a JavaScript object.

```js
async function populate() {
  const response = await fetch(url);
  const data = await response.json();
}
```

The `async` function waits (`await`) for the network request to finish. Once the response arrives, `.json()` converts the incoming text body into a usable object.

---

### Full Picture Code Example

This example combines fetching, parsing (automatic), accessing data, and serialization into one workflow.

```js
// 1. Asynchronous function to handle time-consuming network tasks
async function runHeroApp() {
  const requestURL = "https://mdn.github.io/superheroes.json";

  // 2. Fetch data and automatically deserialize it into an object
  const response = await fetch(requestURL);
  const superHeroes = await response.json();

  // 3. Accessing data: Get the name of the first hero
  const leadHero = superHeroes.members.name;
  console.log("The lead hero is: " + leadHero);

  // 4. Serialization: Convert the object back into a string for storage
  const backToString = JSON.stringify(superHeroes);
  console.log("Data ready for transmission: " + backToString);
}

runHeroApp();
```

**How the lines connect:** The code starts by reaching out to an external server to get a "flat" JSON file. It uses `await response.json()` to turn that text into a live object the computer can understand. Once it is an object, the script uses dot and bracket notation to "dig" into the structure and find specific strings. Finally, `JSON.stringify` is used to show how that same object could be turned back into text if we needed to send it somewhere else.

---
**Previous:** [[8- webpack-merge]]