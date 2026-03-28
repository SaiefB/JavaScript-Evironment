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
