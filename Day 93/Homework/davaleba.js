// 1. Create a promise that resolves to "Hello, World!" and log the result.
let myPromise1 = new Promise((resolve, reject) => {
    resolve("Hello, World!");
});

myPromise1.then((msg) => {
    console.log(msg);
});

// 2. Create a promise that resolves after 2 seconds with the message "Resolved after 2 seconds".
let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

myPromise2.then((message) => {
    console.log(message);
});

// 3. Chain two promises, where the first promise resolves to "First" and the second appends " -> Second".
let myPromise3 = new Promise((resolve, reject) => {
    resolve("First");
});

myPromise3.then((result) => {
    return result + " -> Second";
}).then((finalResult) => {
    console.log(finalResult);
});

// 4. Use multiple .then callbacks to handle different stages of promise resolution.
let myPromise4 = new Promise((resolve, reject) => {
    resolve("Step 1");
});

myPromise4.then((result) => {
    console.log(result);
    return "Step 2";
}).then((result) => {
    console.log(result);
    return "Step 3";
}).then((result) => {
    console.log(result);
});

// 5. Create a promise that rejects after 1 second with a specific error message.
let myPromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error: Rejected after 1 second");
    }, 1000);
});

myPromise5.catch((error) => {
    console.error(error);
});

// 6. Create a function that prints messages "One", "Two", and "Three" with delays of 1, 2, and 3 seconds respectively.
function displayMessages() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 1000);
        }, 1000);
    }, 1000);
}

displayMessages();