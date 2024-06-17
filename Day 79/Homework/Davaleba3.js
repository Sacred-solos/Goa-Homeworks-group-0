let students = [
  {
    saba: 15,
     gio: 14,
   nika: 20,
    luka: 4,
  }
 ]

 let passScore = 14

 function checkPassed(){
  if (passScore > Object.values(students)){
    console.log("passed");
  }
 }

 let result = students.filter(checkPassed)
console.log(result);