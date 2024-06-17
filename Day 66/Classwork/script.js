// const number = [1,2,3,4,5,6,7]
// for(let i = 0; i < number.length; i++){
//   if(number[i] % 2 === 0){
//     console.log(`${number[i]} is Even`);
//   }else{
//     console.log(`${number[i]} is Odd`);
//   }
// }

// const c1 = []
// const c2 = [2,4,5,6,7,10,23,42]
// for(let i = 0; i < c2.length; i++){
//   if(c2[i] % 2 === 0){
//     c1.push(c2[i])
//   }else{
//     console.log(`${c2[i]} number is odd`);
//   }
// }
// console.log(c1);


//needle in a haystack
// const haystack = ["haystack","haystack","haystack","haystack","haystack","haystack","needle"] 
// for(let i = 0; i < haystack.length; i++){
//   if(haystack[i] === "needle"){ 
//     console.log(`Found the needle at position ${[i]}`); 
//   }
// }

// //remove vowels
// let word = "Nika Keshelava"
// let newword = ''
// for(let i = 0; i < word.length; i++){
//   if("aeiouAEIOU".includes(word[i])){
//     newword += ""
//   }else{
//     newword += word[i]
//   }
// }
// console.log(newword);

// const myArray = []
// for(let i = 0; i < 10; i++){
//   const userInput = prompt("Enter number")
//   myArray.push(userInput)
// }

// sum = 0
// for(let i = 0; i < myArray.length; i++){
//   sum += Number(myArray[i])
// }
// console.log(sum);

// mulSum = 1
// for(let i = 0; i < myArray.length; i++){
//   mulSum *= Number(myArray[i])
// }
// console.log(mult_sum);

// sqrts = []
// for(let i = 0; i < myArray.length; i++){
//   sqrts.push(Math.sqrt(myArray[i]))
// }
// console.log(sqrts);


function Ticket(name, age, ticketNumber) {
    this.name = name;
    this.age = age;
    this.ticketNumber = ticketNumber;
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let tickets = prompt("How many tickets do you want to buy?");
  let ticketArray = [];
  
  for (let i = 0; i < Number(tickets); i++) {
    let name = prompt("Enter passenger name");
    let age = prompt("Enter passenger age");
    let ticket = new Ticket(name, age, getRandomInt(200));
    ticketArray.push(ticket);
  }
  console.log(ticketArray);