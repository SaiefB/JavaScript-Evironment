## 🟢 Level 1: The “Stop Just Reading” Phase

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
> Ensure both resolve and reject paths are tested. If you don’t see both paths run, you’re not testing properly.

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
