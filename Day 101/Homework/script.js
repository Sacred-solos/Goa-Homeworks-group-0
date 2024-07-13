// 1. Write a function that takes two numbers and returns their sum.
// function sum(a, b) {
//   return a + b;
// }

// 2. Create a function that accepts a string and returns the string reversed.
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// 3. Implement a function that checks if a given number is even.
// function isEven(num) {
//   return num % 2 === 0;
// }

// 4. Write an arrow function that takes an array and returns its length.
// const getArrayLength = (arr) => arr.length;

// 5. Create an arrow function that calculates the area of a rectangle given its width and height.
// const getRectangleArea = (width, height) => width * height;

// 6. Write a function that takes an array of numbers and returns a new array with each number doubled.
// function doubleArray(arr) {
//   return arr.map(num => num * 2);
// }

// 7. Implement a function that takes a string and returns it in uppercase.
// function toUpperCase(str) {
//   return str.toUpperCase();
// }

// 8. Create an arrow function that filters out all odd numbers from an array.
// const filterOdds = (arr) => arr.filter(num => num % 2 === 0);

// 9. Write a function that accepts a number and returns its factorial.
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// 10. Create an arrow function that takes a string and returns the number of vowels in the string.
// const countVowels = (str) => {
//   const vowels = 'aeiouAEIOU';
//   return str.split('').filter(char => vowels.includes(char)).length;
// };

// 11. Create a template literal that includes a variable in a sentence.
// const name = "John";
// const greeting = `Hello, ${name}!`;

// 12. Use a template literal to create a multiline string.
// const multiline = `This is a line.
// This is another line.`;

// 13. Write a template literal that embeds an expression to calculate the sum of two numbers.
// const a = 5, b = 10;
// const sum = `The sum of ${a} and ${b} is ${a + b}.`;

// 14. Create a template literal to format a date using variables for day, month, and year.
// const day = 5, month = 7, year = 2024;
// const formattedDate = `Date: ${day}/${month}/${year}`;

// 15. Use a template literal to construct a URL from variables for the protocol, domain, and path.
// const protocol = "https", domain = "example.com", path = "/about";
// const url = `${protocol}://${domain}${path}`;

// 16. Create a template literal that includes a conditional expression.
// const isMember = true;
// const message = `You are ${isMember ? 'a member' : 'not a member'}`;

// 17. Write a template literal that formats an address using variables for street, city, and zip code.
// const street = "123 Main St", city = "Anytown", zip = "12345";
// const address = `${street}, ${city}, ${zip}`;

// 18. Use a template literal to create a simple HTML structure with a variable for the content.
// const content = "This is a paragraph.";
// const html = `<p>${content}</p>`;

// 19. Create a template literal that includes a loop to generate a list of items from an array.
// const items = ["Apple", "Banana", "Cherry"];
// const list = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

// 20. Write a template literal that interpolates a function call and includes its result in a sentence.
// function getUserName() {
//   return "Alice";
// }
// const userGreeting = `Hello, ${getUserName()}!`;

// 21. Use the `&&` operator to conditionally log a message if a variable is true.
// const isLoggedIn = true;
// isLoggedIn && console.log("User is logged in.");

// 22. Use the `||` operator to set a default value for a variable if it is falsy.
// const userName = null || "Guest";

// 23. Use the ternary operator to assign a value based on a condition.
// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";

// 24. Write a short conditional using the `&&` operator to call a function only if a variable is not null.
// const myVar = "Hello";
// myVar && console.log(myVar);

// 25. Use the `||` operator to return the first truthy value from a list of variables.
// const firstName = "" || null || "Default Name";

// 26. Use the ternary operator to log different messages based on whether a number is positive or negative.
// const number = -5;
// console.log(number >= 0 ? "Positive" : "Negative");

// 27. Write a short conditional using the `&&` operator to add a class to an element if a condition is met.
// const isActive = true;
// const className = isActive && "active";

// 28. Use the `||` operator to provide a fallback value for a missing object property.
// const user = { name: "John" };
// const userAge = user.age || 18;

// 29. Use the ternary operator to set the value of a variable based on the length of a string.
// const str = "Hello";
// const lengthMessage = str.length > 5 ? "Long" : "Short";

// 30. Write a short conditional using the `&&` operator to execute a block of code only if multiple conditions are true.
// const condition1 = true;
// const condition2 = true;
// condition1 && condition2 && console.log("Both conditions are true.");

// 31. Use the `map` function to create a new array with each element doubled.
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);

// 32. Apply the `map` function to convert an array of strings to uppercase.
// const strings = ["hello", "world"];
// const uppercased = strings.map(str => str.toUpperCase());

// 33. Use the `map` function to extract a specific property from an array of objects.
// const users = [{ name: "Nika" }, { name: "Luka" }];
// const names = users.map(user => user.name);

// 34. Implement the `map` function to add 5 to each element in an array of numbers.
// const numbers = [1, 2, 3];
// const incremented = numbers.map(num => num + 5);

// 35. Use the `map` function to convert an array of numbers to their square roots.
// const numbers = [4, 9, 16];
// const roots = numbers.map(num => Math.sqrt(num));

// 36. Apply the `map` function to format an array of dates into a readable string format.
// const dates = [new Date(), new Date()];
// const formattedDates = dates.map(date => date.toDateString());

// 37. Use the `map` function to create a new array with the lengths of each string in an array of strings.
// const strings = ["apple", "banana", "cherry"];
// const lengths = strings.map(str => str.length);

// 38. Implement the `map` function to prepend a string to each element in an array of strings.
// const strings = ["one", "two", "three"];
// const prepended = strings.map(str => `Number ${str}`);

// 39. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.
// const numbers = [1, 2, 3, 4];
// const evens = numbers.map(num => num % 2 === 0);

// 40. Apply the `map` function to replace specific characters in each string of an array.
const strings = ["foo", "bar"];
const replaced = strings.map(str => str.replace('o', '0'));
