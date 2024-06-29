// 1. Simple Fetch Request: Make a GET request to a public API and log the response.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// 2. Fetch with Then: Fetch data from an API and log the JSON response using .then().
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data));

// 3. Handle Errors with Catch: Fetch data from an invalid URL and handle the error using .catch().
// fetch('https://invalid.url')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// 4. Finally Block: Make a fetch request and use .finally() to log a message that the request has completed.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error))
//     .finally(() => console.log('Fetch request completed'));

// 5. Fetch and Display: Fetch data from an API and display it on a webpage.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//     });

// 6. Chaining Multiple Then: Fetch data and chain multiple .then() methods to process the data in stages.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log('First then:', data);
//         return data;
//     })
//     .then(data => {
//         console.log('Second then:', data.title);
//     });

// 7. Fetching Image: Fetch an image from a URL and display it on the webpage.
// fetch('https://via.placeholder.com/150')
//     .then(response => response.blob())
//     .then(imageBlob => {
//         const imageObjectURL = URL.createObjectURL(imageBlob);
//         const img = document.createElement('img');
//         img.src = imageObjectURL;
//         document.body.appendChild(img);
//     });

// 8. Delayed Fetch Request: Use setTimeout to delay a fetch request by a few seconds.
// setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => console.log(data));
// }, 3000);

// 9. Fetch and Delay JSON Parsing: Fetch data and use setTimeout to delay parsing the JSON response.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         setTimeout(() => {
//             response.json().then(data => console.log(data));
//         }, 3000);
//     });

// 10. Chained Delayed Fetch: Chain multiple fetch requests with setTimeout delays between them.
// setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => {
//             console.log('First fetch:', data);
//             setTimeout(() => {
//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then(response => response.json())
//                     .then(data => console.log('Second fetch:', data));
//             }, 3000);
//         });
// }, 3000);

// 11. Delayed Error Handling: Fetch data and use setTimeout to delay error handling in .catch().
// fetch('https://invalid.url')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         setTimeout(() => {
//             console.error('Error:', error);
//         }, 3000);
//     });

// 12. Completion Log with Delay: Use setTimeout in .finally() to delay logging the completion message.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error))
//     .finally(() => {
//         setTimeout(() => {
//             console.log('Fetch request completed');
//         }, 3000);
//     });

// 13. Fetch and Alert: Fetch data from an API and show an alert with the fetched data after a delay using setTimeout.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         setTimeout(() => {
//             alert(JSON.stringify(data));
//         }, 3000);
//     });

// 14. Fetch and Conditional Display: Fetch data from an API and display it on the webpage only if certain conditions are met, using setTimeout to delay the display.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         if (data.userId === 1) {
//             setTimeout(() => {
//                 document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//             }, 3000);
//         }
//     });

// 15. Fetch and Form Submission: Use fetch to submit form data asynchronously with a delay using setTimeout before handling the response.
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }, 3000);
});