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
