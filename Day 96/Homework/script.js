// 1. Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Task 1 complete");
//   }, 2000);
// });
// promise.then(console.log);

// 2. Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.
// const promise = new Promise((_, reject) => {
//   reject("Task 2 failed");
// });
// promise.catch(console.error);

// 3. Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.
// const promise = new Promise((resolve) => {
//   resolve(5);
// });
// promise
//   .then(number => number * 2)
//   .then(doubled => {
//     console.log(doubled);
//     return doubled;
//   });

// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second".
// const promiseFunction = () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("First");
//   }, 2000);
// });
// promiseFunction()
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve) => setTimeout(resolve, 1000));
//   })
//   .then(() => console.log("Second"));

// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.
// const promiseFunction = () => new Promise((_, reject) => {
//   setTimeout(() => {
//     reject("Task 3 failed");
//   }, 2000);
// });
// promiseFunction().catch(console.error);

// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".
// const promiseFunction = () => new Promise((resolve) => {
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   setTimeout(() => {
//     resolve("Task 1 complete");
//   }, delay);
// });
// promiseFunction().then(console.log);

// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".
// const promiseFunction = () => new Promise((resolve) => {
//   const delay1 = Math.floor(Math.random() * 3000) + 1000;
//   setTimeout(() => {
//     resolve("First");
//   }, delay1);
// });
// promiseFunction()
//   .then((message) => {
//     console.log(message);
//     const delay2 = Math.floor(Math.random() * 3000) + 1000;
//     return new Promise((resolve) => setTimeout(resolve, delay2));
//   })
//   .then(() => console.log("Second"));

// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.
// const promiseFunction = () => new Promise((_, reject) => {
//   const delay = Math.floor(Math.random() * 4000) + 1000;
//   setTimeout(() => {
//     reject("Task 3 failed");
//   }, delay);
// });
// promiseFunction().catch(console.error);

// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".
// const promiseFunction = () => new Promise((resolve) => {
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber > 0.5) {
//       resolve("Task 1 complete");
//     } else {
//       resolve("Task 1 was quick");
//     }
//   }, delay);
// });
// promiseFunction().then(console.log);

// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.
// const promiseFunction = () => new Promise((resolve, reject) => {
//   const delay = Math.floor(Math.random() * 4000) + 1000;
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.3) {
//       reject("Task 3 failed");
//     } else {
//       resolve("Task 3 complete");
//     }
//   }, delay);
// });
// promiseFunction()
//   .then(console.log)
//   .catch(console.error);

// 11. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.all to log all messages once all Promises are resolved.
// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));
// Promise.all([promise1, promise2, promise3]).then(console.log);

// 12. Create three Promises that resolve with different messages after random delays between 1 and 5 seconds. Use Promise.all to log all messages once all Promises are resolved.
// const promise1 = new Promise((resolve) => {
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   setTimeout(() => resolve("Promise 1"), delay);
// });
// const promise2 = new Promise((resolve) => {
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   setTimeout(() => resolve("Promise 2"), delay);
// });
// const promise3 = new Promise((resolve) => {
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   setTimeout(() => resolve("Promise 3"), delay);
// });
// Promise.all([promise1, promise2, promise3]).then(console.log);

//13. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise failed"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));
Promise.all([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);