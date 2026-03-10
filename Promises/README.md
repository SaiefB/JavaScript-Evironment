## 🟢 Level 1: The "Stop Just Reading" Phase

### 1️⃣ Create Your Own Promise

#### Task:

Write a function:

```javascript
function checkNumber(num) {
  // return a Promise
}
```

#### Requirements:

- If `num > 10`, resolve with `"Big number"`.
- Otherwise, reject with `"Small number"`.

#### Steps:

1. Call the function with `15`.
2. Call the function with `5`.
3. Handle both `.then()` and `.catch()`.

> **Note:**  
> Ensure both resolve and reject paths are tested. If you don't see both paths run, you're not testing properly.

---

### 2️⃣ Delayed Promise (Fake API Call)

#### Task:

Create a function:

```javascript
function wait(ms) {
  // returns a Promise
}
```

#### Requirements:

- Resolve after `ms` milliseconds using `setTimeout`.
- Return the message `"Done waiting"`.

#### Test:

```javascript
wait(2000).then(console.log);
```

> **Note:**  
> If it logs immediately, congratulations, you broke time.

---

### 3️⃣ Chain Transformations

#### Task:

Create a Promise that:

1. Starts with number 5
2. Multiply it by 2
3. Add 3
4. Log final result

#### Requirements:

- You must use chained `.then()` calls.

#### Expected final result:

`13`

> **Note:**  
> If you nest `.then()` inside `.then()` instead of chaining… we need to talk.

---

### 4️⃣ Error Propagation

#### Task:

Create a Promise chain where:

1. First `.then()` runs fine
2. Second `.then()` throws an error
3. `.catch()` handles it

#### Requirements:

- Code after the error does NOT run
- `.catch()` captures it

> **Note:**  
> This is where Promises stop being cute and start being useful.

---

### 5️⃣ Create Your First Promise

#### Task:

Create a function called `delay(ms)` that returns a Promise which resolves after `ms` milliseconds with the string `"done"`.

#### Example:

```javascript
delay(100).then((val) => console.log(val)); // logs "done"
```

#### Your Code:

```javascript
function delay(ms) {
  // your code here
}

// Test it:
delay(100).then((val) => console.log(val));
```

---

### 6️⃣ Handle Promise Rejection

#### Task:

Create a function `safeDivide(a, b)` that returns a Promise:

- Resolves with `a / b` if `b` is not `0`
- Rejects with an Error: `"Cannot divide by zero"` if `b` is `0`

#### Requirements:

- Handle the rejection with `.catch()` in your test.

#### Your Code:

```javascript
function safeDivide(a, b) {
  // your code here
}

// Test both cases:
safeDivide(10, 2).then((result) => console.log(result)); // 5
safeDivide(10, 0).catch((err) => console.log(err.message)); // "Cannot divide by zero"
```

---

### 7️⃣ Resolve a Promise

#### Task:

Create a variable called `myPromise` that is a Promise which resolves with the string `"hello"`.

#### Your Code:

```javascript
// A Promise that resolves with "hello"
const myPromise = new Promise((resolve, reject) => {
  // call resolve() here
});
```