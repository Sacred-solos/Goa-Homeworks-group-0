//foreach loop
// const myArray = [1,2,3,4,5,6];
// result = 0;
// myArray.forEach(function(value){
//   result += value
// })
// console.log(result);

//foreach manul

//function manualForEach(arr, func){
 //   for(let i = 0; i < arr.length; i++){
  //    func(arr[i]);
  //  }
 // }
  //const numberss = [1,2,3,4,5,6]
  //let sum = 0
  
 // manualForEach(numbers, function(value){
 //   sum += value
 // })
  
 // console.log(sum);
  

  
  function manualReduce(arr,func,startingValue){
    let result = startingValue
    for(let i = 0; i < arr.length; i++){
      result = func(result, arr[i])
    }
   return result
  }
  
  const numbers = [1,2,3]
  const resultt = manualReduce(numbers, function(result, nextElement){
    return result + nextElement
  }, 3)
  console.log(result);
  
  const strr = "hello".split("")
  const result = manualReduce(strr, function(result,nextElement){
    return result + nextElement
  }, "jsec6")
  console.log(result);