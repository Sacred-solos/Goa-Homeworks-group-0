
// const d = new Date()

// const year = d.getFullYear()
// const month = d.getMonth()
// const day = d.getDate()
// const dayOfWeek = d.getDay()
// const hour = d.getHours()
// const minutes = d.getMinutes()
// const seconds = d.getSeconds()

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayOfWeek);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// d.setFullYear(1998);
// d.setMonth(0);
// d.setDate(1);
// d.setHours(2);
// d.setMinutes(6);
// d.setSeconds(20);

// console.log(d);

// const date1 = new Date("2023-12-31")
// const date2 = new Date("2023-01-01")
// if(date2 < date1){
//   console.log("happy new year");
// }

// setInterval(() =>{
//   console.log("nikolozi");
// }, 0)


//დავალება2: დავითვალოთ წამების, წუთების და საათების რაოდენობა ჩვენს პროგრამაში, setinterval-ით 

// setInterval(() => {
//   const date = new Date();
//   console.log(date.toString());
// }, 1000);

//დავალება3: გვექნება თავიდანვე წამების რაოდენობა 60 და წუთების რაოდენობა 5. როდესაც წუთების რაოდენობა გახდება 0, გავთიშოთ ალგორითმი





// function showTime() {
//   const currentDate = new Date();
//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const seconds = currentDate.getSeconds();
//   console.log('წამები: ' + seconds);
//   console.log('წუთები: ' + minutes);
//   console.log('საათები: ' + hours);
// }

// setInterval(showTime, 1000); 


let seconds = 60
let minutes = 5

const timer = setInterval(() => {
  seconds--
  if(seconds == 0){
    minutes--
    seconds = 60
  }
  if(minutes == 0){
    clearInterval(timer)
  }
}, 1000);