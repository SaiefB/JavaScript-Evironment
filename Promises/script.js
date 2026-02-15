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
      } else if (num < 5) {
        reject("Number is less than 5: " + num);
      }
    });
  })
  .then((num) => {
    if (num > 15) {
    }
  });
