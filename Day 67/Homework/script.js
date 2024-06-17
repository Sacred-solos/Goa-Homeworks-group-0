// Real-time Clock:
// Create a digital clock that displays the current time, updating every second using setInterval.

// function digitalClock(){
//   setInterval(() =>{
//     const date = new Date();
//     const second = date.getSeconds();
//     console.log(second);
//   },1000)
// }
// digitalClock()


// Convert String to Kebab Case:
// Write a function that takes a string as input and converts it to kebab case. Kebab case is a naming convention where words are separated by hyphens ("-"). For example, "helloWorld" would be converted to "hello-world".

// function camelToCebab(input){

// let kebab = ''
// for (let i = 0; i < input.length; i++) { 
//   if (input[i] === input[i].toUpperCase()){
//     kebab += "-" + input[i].toLowerCase()
//   }else{
//     kebab += input[i]
//   }
// }

// if(kebab[0] === "-"){
//   kebab = kebab.substring(1);
// }
// return kebab
// }

// let input = prompt("Enter Word! (CamelCase) ");
// let kebabCase = camelToCebab(input);
// console.log(kebabCase);


// Countdown Timer:
// Write a function that takes a target date and displays a countdown timer that updates every second until reaching the target date, utilizing setInterval.

// function targetDate(){
//   const targetDay = 15;
//   setInterval(() =>{
//     const currentDate = new Date();
//     const currentDay = currentDate.getDay()

//     if(currentDay < targetDay){
//       console.log(currentDate.toLocaleDateString());
//     }else if(currentDay === targetDay){
//       console.log("Congrats");
//       clearInterval;
//     }
//   },1000)
// }

// targetDate()


// Get Day of the Week:
// Write a function that takes a date as input and returns the day of the week in full (e.g., "Monday", "Tuesday", etc.).

// const date = new Date();
// const arr = new Array(7);
// arr[0]="Sunday";
// arr[1]="Monday";
// arr[2]="Tuesday";
// arr[3]="Wednesday";
// arr[4]="Thursday";
// arr[5]="Friday";
// arr[6]="Saturday";
// let day = arr[date.getDay()];
// console.log(day);



// Get Current Date in Different Formats:
// Write a function that returns the current date in three different formats:
// dd/mm/yyyy
// mm/dd/yyyy
// yyyy-mm-dd



// Check if a Given Date Falls on a Leap Year:
// Write a function that takes a date as input and returns true if the year of the given date is a leap year, otherwise false.



// Calculate Difference in Days Between Two Dates:
// Write a function that takes two dates as input and returns the difference in days between them.

//let date1 = new Date("2024-3-25");
//let date2 = new Date("2024-3-20");
//let differenceInMs = date1.getTime() - date2.getTime();
//let differenceInDays = Math.abs(differenceInMs / (1000 * 60 * 60 * 24));
//console.log(differenceInDays); 


// Calculate Age in Years:
// Write a function that takes a birthdate as input and returns the age of a person in years, considering the current date.
let birthDate = new Date("2009-5-24");
let dateNow = new Date("2024-6-13");
let ageInMS = birthDate.getTime() - dateNow.getTime();
let ageInYears = Math.abs(ageInMS / (1000 * 60 * 60 * 24*30*12));
console.log(ageInYears); 
