//დავალება: შექმენით მეთოდი სახელად manualMap, რომლესაც გადაეცემა სია და ფუნქცია. მან უნდა დააბრუნო ახალი სია ისე, რომ ყველა რიცხვი ააკვადრატოს


// const manualMap = function(arr, subFunc){
//   const result = [];
  
//   for(let i = 0; i < arr.length; i++){
//       result.push(subFunc(arr[i]))
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = manualMap(numbers, function(num){
//   return num * num
// });

// console.log(newNumbers)


//2

// const manualFilter = function(arr, func){
//   const newArr = []
  
//   for(let i = 0; i < arr.length; i++){
//       if(func(arr[i])){
//           newArr.push(arr[i])
//       }
//   }
  
//   return newArr;
// }

// const students = [{name: "Luka", grade: 70}, {name: "Nika", grade: 63}, {name: "Gio", grade: 65}]

// const whoPassed = manualFilter(students, function(studentObj){
//   return studentObj.grade >= 60;
// })




const mapp = function(arr,subFunc){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      newArr.push(subFunc(arr[i]))
    }
    console.log(newArr);
  }
  
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const isEven = num => num % 2 === 0;
  
  mapp(arr,isEven)