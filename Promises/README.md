# 1. Resolve a Promise

Create a variable called `myPromise` that is a Promise which resolves with the string `"hello"`

## Your Code

```javascript
// A Promise that resolves with "hello"
const myPromise = new Promise((resolve, reject) => {
  // call resolve() here
});
```

# 2. Use .then() to read the value

myPromise resolves with "hello". Use .then() to log the value to the console

## Your Code

```javascript
const myPromise = Promise.resolve("hello");

myPromise;
// .then(...)
```

Hint:

```javascript
.then(value => console.log(value))
```

# 3. Reject a Promise

Create myPromise — a Promise that rejects with the message "oops". Use .catch() to log the error message.

## Your Code

```javascript
const myPromise = new Promise((resolve, reject) => {
  // call reject() here
});

myPromise.catch((err) => console.log(err));
```

Hint:

```javascript
 Call reject("oops"). In .catch(err => ...), err will be "oops".
```

# 4. Chain two .then() calls

Start with Promise.resolve(5). Chain two .then() calls:

1. Multiply the value by 2
2. Log the result

You should see 10 logged.

## Your Code

```javascript
Promise.resolve(5);
// .then( multiply by 2 )
// .then( log it )
```

Hint:

```javascript
 .then(n => n * 2) returns the new value to the next .then().
```

# 5. async / await basics

Write an async function called run that:

1. Awaits Promise.resolve("world") and stores the result
2. Logs the result

Then call run().

## Your Code

```javascript
async function run() {
  // const result = await ...
  // console.log(result)
}

run();
```

Hint:

```javascript
 const result = await Promise.resolve("world"); then console.log(result);
```

# 6. Promise.all - Wait for two

Use Promise.all() to wait for both promises below, then log the result array.

You should see ["cat", "dog"] logged.

## Your Code

```javascript
const p1 = Promise.resolve("cat");
const p2 = Promise.resolve("dog");

// Promise.all([...]).then(...)
```

Hint:

```javascript
Promise.all([p1, p2]).then((values) => console.log(values));
```

# 2.1 - Promise.resolve() shorthand

Instead of new Promise(resolve => resolve(42)), you can use the shorthand Promise.resolve(42).

Create a variable myPromise using Promise.resolve() that resolves with the number 42, then log it with .then().

## Your Code

```javascript
// Use Promise.resolve() shorthand
const myPromise = // ...
  myPromise.then((val) => console.log(val));
```

Hint:

```javascript
const myPromise = Promise.resolve(42);
```

# 2.2 - Return a value from .then()

When you return a value inside .then(), the next .then() receives it.

Start with Promise.resolve("hello"), add 10 to its .length in the first .then(), then log the result in a second .then().

You should see 15 logged ("hello" has 5 letters, plus 10).

## Your Code

```javascript
Promise.resolve("hello")
  .then(str => /* return str.length + 10 */)
  .then(result => console.log(result));
```

Hint:

```javascript
.then(str => str.length + 10) — returning a value passes it along to the next .then().
```

# 2.3 - Catch an error from .then()

If you throw inside a .then(), the .catch() at the end will catch it.

Complete the chain below so that when the value is 0, it throws an error with the message "zero not allowed". The .catch() should log the error message.

## Your Code

```javascript
Promise.resolve(0)
  .then((val) => {
    if (val === 0) {
      // throw an error here
    }
    return val;
  })
  .catch((err) => console.log(err.message));
```

Hint:

```javascript
throw new Error("zero not allowed") inside the if block.
```

# 2.4 - Async function returns a Promise

Any async function automatically returns a Promise.

Write an async function called getName that returns "Alice". Then call it and use .then() to log the result.

## Your Code

```javascript
async function getName() {
  // return "Alice"
}

getName().then((name) => console.log(name));
```

Hint:

```javascript
Just return "Alice" inside the async function — it automatically wraps it in a Promise.
```

# 2.5 - Await inside async - try/catch

Use try/catch with await to handle a rejected Promise.

The function failingPromise is already defined and rejects with "something went wrong". Write an async function called run that awaits it inside a try/catch and logs the error message in the catch block. Then call run().

## Your Code

```javascript
const failingPromise = Promise.reject(new Error("something went wrong"));

async function run() {
  try {
    const result = await failingPromise;
  } catch (err) {
    // log err.message
  }
}

run();
```

Hint:

```javascript
Inside catch (err), write console.log(err.message).
```

# 2.6 - Promise.all with three values

Use Promise.all() to wait for the three promises below, then log the sum of their values.

The three promises resolve with 10, 20, and 30 — so you should log 60.

## Your Code

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => {
  // add up all values and log the sum
});
```

Hint:

```javascript
values is an array [10, 20, 30]. Use values[0] + values[1] + values[2] or values.reduce((a, b) => a + b, 0).
```

# JavaScript Promises — Practice Exercises (Set 3)

---

## Exercise 1 — .then() runs after the Promise resolves

A `.then()` callback only runs once the Promise has resolved. The code _after_ the Promise chain runs first.

Look at this code and predict the order, then run it to check:

```js
console.log("1 - before promise");

Promise.resolve("hello").then((val) => {
  console.log("2 - inside then:", val);
});

console.log("3 - after promise");
```

**Your task:** Change the resolved value from `"hello"` to your name, and add a second `.then()` that logs `"4 - done"` at the end.

**Hint:** Chain another `.then(() => console.log("4 - done"))` after the first one.

---

## Exercise 2 — Wrapping a value in a Promise

Sometimes you want to turn a plain value into a Promise so it fits into a Promise-based workflow.

Write a function called `toPromise(value)` that takes any value and returns it wrapped in a resolved Promise.

```js
function toPromise(value) {
  // return value as a resolved Promise
}

// Test it:
toPromise("javascript").then((val) => console.log(val)); // "javascript"
toPromise(100).then((val) => console.log(val)); // 100
```

**Hint:** `return Promise.resolve(value);`

---

## Exercise 3 — finally()

`.finally()` runs whether a Promise resolves _or_ rejects — useful for cleanup.

Complete the code so that `"done loading"` is always logged at the end, regardless of success or failure.

```js
const success = Promise.resolve("data loaded");
const failure = Promise.reject(new Error("network error"));

success
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message));
// add .finally() here

failure
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message));
// add .finally() here
```

**Hint:** `.finally(() => console.log("done loading"))` — add this to both chains.

---

## Exercise 4 — async/await with a real delay

Write an `async` function called `run` that:

1. Logs `"start"`
2. Awaits a 200ms delay using the `delay` function provided
3. Logs `"end"` after the delay

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  // log "start"
  // await the delay
  // log "end"
}

run();
```

**Hint:** `await delay(200)` pauses the function for 200ms before moving to the next line.

---

## Exercise 5 — Promise.all fails fast

If _any_ Promise in `Promise.all()` rejects, the whole thing rejects immediately.

Run the code below and observe what happens. Then fix it so the error is caught and `"caught: oops"` is logged.

```js
const p1 = Promise.resolve("ok");
const p2 = Promise.reject(new Error("oops"));
const p3 = Promise.resolve("also ok");

Promise.all([p1, p2, p3]).then((values) => console.log(values));
// add .catch() to log "caught: " + err.message
```

**Hint:** `.catch(err => console.log("caught: " + err.message))`

---

## Exercise 6 — Build a simple async function

Write an `async` function called `double` that:

1. Takes a number as an argument
2. Awaits `Promise.resolve(number * 2)` and stores the result
3. Returns that result

Then call it and log the output — calling `double(7)` should log `14`.

```js
async function double(number) {
  // await Promise.resolve(number * 2) and return the result
}

double(7).then((result) => console.log(result)); // 14
```

**Hint:** `const result = await Promise.resolve(number * 2);` then `return result;`
