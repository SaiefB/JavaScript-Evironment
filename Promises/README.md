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
