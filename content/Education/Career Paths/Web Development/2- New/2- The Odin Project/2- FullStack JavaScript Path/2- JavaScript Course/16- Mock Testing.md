### 1. Pure Functions

A **Pure Function** is a function that is predictable and isolated from the rest of the application's state. It has two strict conditions:

1. **Consistency:** It must always return the exact same result if the same arguments are passed in.
2. **No Side Effects:** It must not interact with the outside world, such as changing external variables, making network requests, or mutating data.

**Pure Function Example**

```js
function priceAfterTax(productPrice) {
  return (productPrice * 0.20) + productPrice;
}
```

- `productPrice`: This is the function's input. The function relies **only** on this argument to calculate the result.
- `return ...`: This sends back the calculation. Because it doesn't change any variables outside itself or hit an API, it is considered pure.

**Impure Function Example**

```js
var tax = 20;

function calculateTax(productPrice) {
  return (productPrice * (tax/100)) + productPrice;
}
```

- `var tax = 20;`: This is an **external variable**.
- `tax/100`: The function is now **impure** because it depends on a value outside of its own scope. If the `tax` variable changes elsewhere in the program, the same input (`productPrice`) would produce a different result.

---

### 2. Mock Testing

Mock testing allows you to test code in isolation by replacing real implementations with "fake" versions. This is crucial for avoiding "flaky" tests that might fail due to external issues like a server being down, rather than a bug in your actual code.

**Mock Functions (`jest.fn`)** A mock function captures calls, parameters, and return values so you can inspect how your code interacted with it.

```js
const mockCallback = jest.fn(x => 42 + x);
forEach(, mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.results.value).toBe(42);
```

- `jest.fn(...)`: A **native Jest method** that creates the mock. We pass in a function that adds 42 to any input.
- `forEach(...)`: We pass the mock as a callback to our function under test.
- `.mock.calls.length`: This is a **native property** that records how many times the function was triggered. Since the array had two items, the length is `2`.
- `.mock.results.value`: This tracks the return value of the first call. Since the first input was `0`, the result is `42`.

**Mocking Modules (`jest.mock`)** This allows you to replace an entire external library (like Axios) with a mock automatically.

```js
jest.mock('axios');
axios.get.mockResolvedValue({ data: { name: 'Bob' } });

const result = await Users.all();
expect(result).toEqual({ name: 'Bob' });
```

- `jest.mock('axios')`: This **native Jest method** replaces all functions in the Axios module with mocks.
- `mockResolvedValue(...)`: This is a **native convention** for async code. It tells the mock `get` function to immediately return a successful Promise with our fake data.

---

### 3. Setup and Teardown

Setup and teardown hooks manage the environment before and after tests run to ensure each test has a "clean slate".

**Repeating Setup (`beforeEach` / `afterEach`)** These hooks run before and after **every single test** in the file or block.

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
```

- `beforeEach(...)`: This **native hook** ensures the database is initialized specifically for the upcoming test.
- `afterEach(...)`: This **native hook** cleans up the database immediately after the test finishes, preventing data from leaking into the next test.

**One-Time Setup (`beforeAll` / `afterAll`)** These hooks run **only once** at the very beginning and very end of the test suite.

```js
beforeAll(() => {
  return initializeGlobalServer();
});

afterAll(() => {
  return closeGlobalServer();
});
```

- `beforeAll(...)`: Used for expensive tasks, like starting a server, that only need to happen once for the entire file.
- `return ...`: If the setup is asynchronous, returning the Promise tells Jest to wait until it's finished before starting any tests.

**Scoping with `describe`** Hooks inside a `describe` block only apply to the tests within that specific block.

```js
describe('city tests', () => {
  beforeEach(() => initializeCityDatabase());
  test('vienna exists', () => { ... });
});
```

- `describe(...)`: Creates a **scope**. The `beforeEach` inside here will **not** run for tests located outside of this block.

---

### Full Code Picture: A Reliable User Service Test

This example combines pure logic, mocking an API, and setting up the test state.

```js
import axios from 'axios';
jest.mock('axios'); // Mock the external dependency

// 1. A pure helper function (No side effects)
const formatUserName = (name) => `User: ${name}`;

// 2. The service being tested
const userService = {
  async getUser(id) {
    const response = await axios.get(`/users/${id}`);
    return formatUserName(response.data.name);
  }
};

// 3. The Test Suite
describe('UserService', () => {
  // Setup: Reset the mock before every test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch and format user correctly', async () => {
    // Define mock behavior
    axios.get.mockResolvedValue({ data: { name: 'John Doe' } });

    const result = await userService.getUser(1);

    // Assertions
    expect(result).toBe('User: John Doe');
    expect(axios.get).toHaveBeenCalledWith('/users/1');
  });
});
```
---
### What To Test
According to Sandi Metz's "The Magic Tricks of Testing," the secret to stable and fast unit tests is to treat every object as a **Space Capsule** (a black box) and focus entirely on the **messages** passing through its walls rather than the code inside.

To achieve "magical" tests, you must identify if a message is a **Query** (it returns a value but has no side effects) or a **Command** (it has a side effect but returns nothing you depend on).

---

### 1. Incoming Query Messages

**Direct Answer:** You test an incoming query by making an assertion about the **result** (the value) it sends back.

**Code Example:**

```js
class Wheel {
  constructor(rim, tire) {
    this.rim = rim;
    this.tire = tire;
  }

  // Incoming Query
  getDiameter() {
    return this.rim + (this.tire * 2);
  }
}

test('wheel diameter', () => {
  const wheel = new Wheel(26, 1.5);
  // Assertion about the result
  expect(wheel.getDiameter()).toBe(29);
});
```

**Line-by-Line Breakdown:**

- `getDiameter()`: This is the **Incoming Query**. It calculates a value but doesn't change anything in the app.
- `const wheel = new Wheel(26, 1.5)`: We initialize our object under test.
- `expect(wheel.getDiameter()).toBe(29)`: This is a **native Jest matcher**. We call the query and check if the returned value is `29`. This proves the "cell" behaves correctly without caring about the internal formula.

**Additional Context:** Testing only the result allows you to change the **implementation** (the math inside) without breaking the test, as long as the **interface** (the result) remains the same.

---

### 2. Incoming Command Messages

**Direct Answer:** You test an incoming command by making assertions about **direct public side effects**—the changes made to the object’s state that the rest of the app can see.

**Code Example:**

```js
class Gear {
  constructor(cog) {
    this.cog = cog;
  }

  // Incoming Command
  set_cog(new_cog) {
    this.cog = new_cog;
  }
}

test('set_cog changes state', () => {
  const gear = new Gear(10);
  // Execute command
  gear.set_cog(20);
  // Assert the side effect
  expect(gear.cog).toBe(20);
});
```

**Line-by-Line Breakdown:**

- `set_cog(new_cog)`: This is the **Incoming Command**. It doesn't return a value we use; it changes the internal `cog` variable.
- `gear.set_cog(20)`: We trigger the command message.
- `expect(gear.cog).toBe(20)`: We check the **Public Side Effect**. We "sight along the edge" of the capsule to verify the internal value actually changed to `20`.

**Additional Context:** A "direct" side effect is the responsibility of the specific class you are testing. You aren't testing distant changes in other objects yet; you are only checking this object's immediate boundary.

---

### 3. Messages Sent to Self (Private Methods)

**Direct Answer:** The "Adult Rule" is to **ignore them**. Do not test private methods or set expectations that they are called.

**Code Example:**

```js
class Gear {
  // Public Query
  gear_inches() {
    return this.#ratio() * 29;
  }

  // Private Method (Sent to self)
  #ratio() {
    return 52 / 11;
  }
}

test('gear_inches works', () => {
  const gear = new Gear();
  // We ONLY test the public query
  expect(gear.gear_inches()).toBeCloseTo(137.09, 2);

  // DO NOT test gear.#ratio() separately!
});
```

**Line-by-Line Breakdown:**

- `#ratio()`: The `#` is a **native JS convention** for private methods. This message never leaves the Space Capsule.
- `expect(gear.gear_inches())...`: If this public test passes, the private `#ratio` **must** be working.
- **The Problem:** Testing private methods is "over-specification." It binds you to the current implementation and makes it impossible to refactor your code without breaking your tests.

**Additional Context:** If you must test a complex private algorithm to get it working, the source recommends **deleting** those tests once the feature is stable so they don't become a "millstone" around your neck.

---

### 4. Outgoing Query Messages

**Direct Answer:** **Ignore them.** Do not test that they were sent or what they returned.

**Code Example:**

```js
class Gear {
  constructor(wheel) {
    this.wheel = wheel;
  }

  gear_inches() {
    // Outgoing Query
    return (52 / 11) * this.wheel.getDiameter();
  }
}

test('gear_inches result', () => {
  const wheel = { getDiameter: () => 29 }; // Stub/Mock
  const gear = new Gear(wheel);

  expect(gear.gear_inches()).toBeCloseTo(137.09, 2);

  // DO NOT: expect(wheel.getDiameter).toHaveBeenCalled();
});
```

**Line-by-Line Breakdown:**

- `this.wheel.getDiameter()`: This is an **Outgoing Query**. The `Gear` is just asking the `Wheel` for info.
- `const wheel = { ... }`: This is a **mock/stub convention**. We provide a fake object so the `Gear` can finish its math.
- **The "Why":** Testing that `getDiameter` was called is redundant. The `Wheel` unit test already proves that method works. Testing it here makes your test fragile because it now depends on the `Wheel`'s interface.

**Additional Context:** Outgoing queries have no side effects and are invisible to the rest of the app. Therefore, asserting that they happened adds no proof of correctness but adds a maintenance cost.

---

### 5. Outgoing Command Messages

**Direct Answer:** You test outgoing commands by **setting expectations** that the message was sent.

**Code Example:**

```js
class Gear {
  constructor(observer) {
    this.observer = observer;
  }

  set_cog(new_cog) {
    this.cog = new_cog;
    // Outgoing Command
    this.observer.changed(this.cog);
  }
}

test('notifies observer of change', () => {
  // 1. Create a mock
  const mockObserver = { changed: jest.fn() };
  const gear = new Gear(mockObserver);

  // 2. Trigger action
  gear.set_cog(20);

  // 3. Assert EXPECTATION (Message sent)
  expect(mockObserver.changed).toHaveBeenCalledWith(20);
});
```

**Line-by-Line Breakdown:**

- `this.observer.changed(this.cog)`: This is an **Outgoing Command**. It tells another object to perform a side effect (like saving to a DB).
- `jest.fn()`: This is a **native Jest method** to create a mock.
- `expect(...).toHaveBeenCalledWith(20)`: This is a **native Jest matcher**. We aren't testing if the database changed (that's an integration test); we are only testing that the `Gear` fulfilled its responsibility to **send the message**.

**Additional Context:** This tests the **"Nearest Edge"** of the object. Using a mock here keeps the test fast and stable because you don't have to run all the code inside the `Observer` or connect to a real database.

---

### The Magic Grid: Completed Summary Table

|Message Origin|Message Type|Testing Rule|
|:--|:--|:--|
|**Incoming**|**Query**|Assert **result** (returned value)|
|**Incoming**|**Command**|Assert **direct public side effect**|
|**Sent to Self**|**Any**|**Ignore** (Do not test)|
|**Outgoing**|**Query**|**Ignore** (Do not test)|
|**Outgoing**|**Command**|Set **Expectation** (Verify message was sent)|

---
**Previous:** [[15- TDD]] | **Next:** [[17- Recursion]]