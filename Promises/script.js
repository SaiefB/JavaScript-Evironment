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
