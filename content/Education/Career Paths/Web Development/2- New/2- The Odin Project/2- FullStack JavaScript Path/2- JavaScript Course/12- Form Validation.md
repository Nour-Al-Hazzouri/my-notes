### HTML and API Constraint Validation

**Intrinsic Constraints** - These are built-in rules defined by choosing the most semantically appropriate `type` for an input, which automatically enforces a specific format.

```html
<input type="email" required>
```

1. **`type="email"`**: This is the intrinsic constraint; it forces the browser to check for a valid email format (username@hostname.tld).
2. **`required`**: A boolean attribute that triggers a violation if the field is empty upon submission.

---

**Validation-related Attributes** - These are specific HTML attributes added to elements to describe basic constraints, such as lengths or numeric ranges, without needing JavaScript.

```html
<input type="text" minlength="5" maxlength="10" pattern="[A-Z]+">
```

1. **`minlength="5"`**: Ensures the user enters at least five characters.
2. **`maxlength="10"`**: Restricts the input to no more than ten characters.
3. **`pattern="[A-Z]+"`**: Uses a Regular Expression to ensure the input only contains uppercase letters.

---

**Constraint Validation Methods** - The API provides methods to check validity: `checkValidity()` performs a silent "static" check, while `reportValidity()` performs an "interactive" check by showing error messages to the user.

```js
const input = document.querySelector('input');
if (!input.checkValidity()) {
  input.reportValidity();
}
```

1. **`input.checkValidity()`**: Evaluates the input's constraints and returns a Boolean (`true`/`false`) without alerting the user.
2. **`input.reportValidity()`**: Checks the constraints and, if invalid, immediately displays the browser's built-in error popup to the user.

---

**Complex Constraints (Custom Validity)** - This involves using `setCustomValidity()` to handle logic the browser cannot do alone, such as comparing two fields or checking file sizes.

```js
if (pass1.value !== pass2.value) {
  pass2.setCustomValidity("Passwords do not match");
} else {
  pass2.setCustomValidity("");
}
```

1. **`setCustomValidity("message")`**: Passing a non-empty string flags the element as invalid and sets the specific error message to be displayed.
2. **`setCustomValidity("")`**: Passing an empty string tells the browser the constraint is satisfied and clears the error.

---

**Visual Styling (CSS Pseudo-classes)** - CSS provides special selectors that react automatically to the validation state of a form element.

```css
input:invalid { border: 2px solid red; }
input:valid { border: 2px solid green; }
```

1. **`input:invalid`**: Automatically applies styles to any input that currently violates a constraint.
2. **`input:valid`**: Automatically applies styles when the input's content satisfies all its constraints.

---

### Full Code Example: Combined Validation System

This example combines HTML attributes, JavaScript custom logic, and CSS styling for a complete validation flow.

```html
<style>
  /* Styling based on validity state */
  input:invalid { border-bottom: 2px solid red; }
  input:valid { border-bottom: 2px solid green; }

  /* Styling for mandatory fields */
  input:required { background-color: #f0f8ff; }
</style>

<form id="registration">
  <label>Email: <input type="email" id="mail" required></label><br>
  <label>Username (Letters only): <input type="text" id="user" pattern="[A-Za-z]+" required></label><br>
  <label>Password: <input type="password" id="p1" minlength="8" required></label><br>
  <label>Confirm: <input type="password" id="p2" required></label><br>
  <button type="submit">Register</button>
</form>

<script>
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');

  function validatePasswords() {
    // Custom logic: checking if two fields match
    if (p1.value !== p2.value) {
      p2.setCustomValidity("Passwords must match!");
    } else {
      p2.setCustomValidity(""); // Clear the error
    }
  }

  // Run the check every time the user types
  p1.addEventListener('input', validatePasswords);
  p2.addEventListener('input', validatePasswords);
</script>
```
---

### Validation Properties & Attributes

**HTML Validation Attributes** - These are the declarative tools used in markup to set the rules for what constitutes valid data.

```html
<input type="email" required minlength="10" min="1" max="100" step="2" pattern="[A-Z]+">
```

- **`type`**: Sets the preset format expected (e.g., `email` ensures a user@host format).
- **`required`**: Makes the field mandatory; it cannot be submitted empty.
- **`minlength` / `maxlength`**: Defines the minimum and maximum number of characters allowed for text.
- **`min` / `max`**: Sets the lower and upper numeric or date boundaries.
- **`step`**: Determines the valid interval between numeric values (e.g., `step="2"` allows 1, 3, 5...).
- **`pattern`**: Uses a Regular Expression to define a specific custom text format.

---

**Constraint Validation API Properties** - These are the JavaScript flags found within the `element.validity` object used to identify specific error types.

```js
const state = input.validity;
if (state.valueMissing) { /* handle error */ }
```

- **`valueMissing`**: Returns `true` if a `required` field is empty.
- **`typeMismatch`**: Returns `true` if the syntax is wrong for `email` or `url` types.
- **`patternMismatch`**: Returns `true` if the input doesn't match the `pattern` attribute.
- **`tooShort` / `tooLong`**: Returns `true` if the text length violates `minlength` or `maxlength`.
- **`rangeUnderflow` / `rangeOverflow`**: Returns `true` if the number is lower than `min` or higher than `max`.
- **`valid`**: Returns `true` only if the element meets **all** its validation constraints.

---

**Constraint Validation API Methods** - These are the functions used to trigger validation logic or customize messages programmatically.

```js
if (input.checkValidity()) {
  input.setCustomValidity("Custom Error!");
  input.reportValidity();
}
```

- **`checkValidity()`**: Performs a silent check and returns `true` if the input is valid.
- **`reportValidity()`**: Checks the input and actively triggers the browser's error message UI if invalid.
- **`setCustomValidity(message)`**: Assigns a custom string to the error message; if the string is not empty, the field is marked invalid.

---

### Full Picture: Attribute and Property Integration

This example demonstrates how HTML attributes define the rules, while JS properties and methods manage the feedback.

```html
<form id="appForm" novalidate>
  <input type="number" id="age" min="18" max="99" required>
  <span id="error"></span>
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('appForm');
  const age = document.getElementById('age');
  const error = document.getElementById('error');

  form.addEventListener('submit', (e) => {
    // 1. checkValidity() returns false if min/max/required are violated
    if (!age.checkValidity()) {
      e.preventDefault(); // Stop submission

      // 2. Use specific ValidityState properties to customize text
      if (age.validity.valueMissing) {
        error.textContent = "Age is required.";
      } else if (age.validity.rangeUnderflow) {
        error.textContent = "You must be at least 18.";
      }
    }
  });
</script>
```

**Code Explanation:**

- **`novalidate`**: This form attribute prevents the browser's default error bubbles from appearing.
- **`min="18"` and `max="99"`**: These attributes set the numeric range rules in HTML.
- **`checkValidity()`**: This method is called during the `submit` event to see if the rules were broken without showing a popup.
- **`validity.valueMissing`**: This JS property specifically identifies if the `required` attribute was the cause of the failure.
- **`validity.rangeUnderflow`**: This property identifies if the user entered a number smaller than the `min` attribute.
---

**Previous:** [[11- ESlint & Prettier]]