function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Big number");
    } else if (num < 10) {
      reject("Small number");
    }
  });
}

//1a
checkNumber(15)
  .then((message) => {
    console.log("Success: " + message);
    console.log("Exercise 1a Completed");
  })
  .catch((error) => {
    console.log("Error: " + error);
    console.log("Exercise 1a Completed");
  });

//1b
checkNumber(5)
  .then((message) => {
    console.log("Success: " + message);
    console.log("Exercise 1b Completed");
  })
  .catch((error) => {
    console.log("Error: " + error);
    console.log("Exercise 1b Completed");
  });

//1c
function wait(ms) {
  // returns a Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success: Waited for " + ms + " milliseconds");
    });
  });
}

//test
wait(2000).then(console.log);

//Level 2

// 3 - Chain Transformations
Promise.resolve(5)
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          num = num * 2;
          resolve(num);
          console.log("After first transformation: " + num);
        }, 1);
      }),
  )
  .then((num) => {
    setTimeout(() => {
      num = num + 3;
      console.log("Final Result: " + num);
    }, 1);
  });

// 4 - Error Propagation
Promise.resolve(10)
  .then((num) => {
    new Promise((resolve, reject) => {
      if (num > 5) {
        resolve(num);
        console.log("Number is greater than 5: " + num);
        return num; // Ensure the promise chain continues with the resolved value
      } else if (num < 5) {
        reject("Number is less than 5: " + num);
      }
    });
  })
  .then((num) => {
    if (num > 15) {
      resolve(num);
      console.log("Number is greater that 15: " + num);
    } else if (num < 15) {
      reject("Number is less than 15: " + num);
    }
  })
  .catch((error) => {
    console.log("Error caught: " + error);
  });

// Claude

// Create your first promise
function delay(ms) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
  return promise;
}

// Test it:
delay(100).then((val) => console.log(val));

//Handle Promise Rejection
function safeDivide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by zero"));
    } else {
      resolve(a / b);
    }
  }).catch((error) => {
    console.error("Error: " + error.message);
    throw error; // rethrow so the caller can still catch it
  });
}

// Test both cases:
safeDivide(10, 2).then((result) => console.log(result)); // 5
safeDivide(10, 0).catch((err) => console.log(err.message)); // "Cannot divide by zero"

// 7. Resolve a Promise

// A Promise that resolves with "hello"
const myPromise = new Promise((resolve, reject) => {
  resolve("hello");
});

// 8. Use .then() to read the value

const myPromise = Promise.resolve("hello");

myPromise.then((value) => console.log(value));

//3. Reject a Promise

const myPromise = new Promise((resolve, reject) => {
  reject("oops");
});

myPromise.catch((err) => console.log(err));

// 4. Chain two .then() calls

Promise.resolve(5)
  .then((n) => n * 2)
  .then((result) => console.log(result)); // 10

// 5. Async/ Await Basica

async function run() {
  const result = await Promise.resolve("world");
  console.log(result);
}

run();

// 6. Promise.all - Wait for two
const p1 = Promise.resolve("cat");
const p2 = Promise.resolve("dog");

Promise.all([p1, p2]).then((values) => console.log(values)); // ["cat", "dog"]

// 2.1 - Promise.resolve() shorthand
const myPromise = Promise.resolve(42);
myPromise.then((val) => console.log(val));

// 2.2 - Return a value from .then()
Promise.resolve("hello")
  .then((str) => str.length + 10)
  .then((result) => console.log(result));

// 2.3 - Catch an error from .then()
Promise.resolve(0)
  .then((val) => {
    if (val === 0) {
      // throw an error here
      throw new Error("zero not allowed");
    }
    return val;
  })
  .catch((err) => console.log(err.message));

// 2.4 - Async function returns a promise

async function getName() {
  // return "Alice"
  return "Alice";
}

getName().then((name) => console.log(name));

// 2.5 - Await inside async - try/catch
const failingPromise = Promise.reject(new Error("something went wrong"));

async function run() {
  try {
    const result = await failingPromise;
  } catch (err) {
    console.log(err.message);
  }
}

run();

// 2.6 - Promise.all with three values
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => {
  // add up all values and log the sum
  console.log(values[0] + values[1] + values[2]);
});

// 3.1 - .then() runs after the promise resolves
console.log("1 - before promise");

Promise.resolve("Saief")
  .then((val) => {
    console.log("2 - inside then:", val);
  })
  .then(() => console.log("4 - done"));

console.log("3 - after promise");

// 3.2 - Wrapping a value in a Promise
function toPromise(value) {
  // return value as a resolved Promise
  return Promise.resolve(value);
}

// Test it:
toPromise("javascript").then((val) => console.log(val)); // "javascript"
toPromise(100).then((val) => console.log(val)); // 100

// 3.3 - finally()
const success = Promise.resolve("data loaded");
const failure = Promise.reject(new Error("network error"));

success
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message))
  // add .finally() here
  .finally(() => console.log("done loading"));

failure
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message))
  // add .finally() here
  .finally(() => console.log("done loading"));

// 3.4 - async/await with a real delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  // log "start"
  // await the delay
  // log "end"
  console.log("start");
  await delay(200);
  console.log("end");
}

run();

// 3.5 - Promise.all fails fast
const p1 = Promise.resolve("ok");
const p2 = Promise.reject(new Error("oops"));
const p3 = Promise.resolve("also ok");

Promise.all([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((err) => console.log("caught: " + err.message));
// add .catch() to log "caught: " + err.message

// 3.6 - Build a simple async function
async function double(number) {
  const result = await Promise.resolve(number * 2);
  return result;
}

double(7).then((result) => console.log(result)); // 14
