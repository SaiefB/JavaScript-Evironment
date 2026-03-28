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
