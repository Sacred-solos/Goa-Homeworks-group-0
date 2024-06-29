//1

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             resolve("Hello, World!")
//         },2000)
//     }
// })

//2

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             reject("Something went wrong!")
//         },3000)
//     }
// })

//3

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             resolve(5)
//         }).then(function(resolve,reject){
//             resolve(10)
//         })

//     }
// })

//4

// const newPromise = new Promise((resolve,reject) =>{
//     if(true){
//         resolve([1,2,3,4,5])
//     }
// });
// newPromise.then((hhh)=>{
//     for (let i = 0; i <5; i++) {
//         console.log(hhh[i])
//       }
// })

//5

// const newPromise = new Promise((resolve,reject) =>{
//     if(true){
//         resolve("Word")
//     }
// });
// newPromise.then((hhh)=>{
//         console.log(hhh.reverse())
//         console.log(hhh.toUpperCase())
//         console.log(hhh.toLowerCase())   
// })

//6

// const newPromise = new Promise((resolve,reject)=>{
//     if(true){

//     }
// }) ???

//7

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             resolve("word1")
//         }).then(function(resolve,reject){
//             resolve("word2")
//         })
//     }
// })

//8

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             resolve(new Date().toString())
//         },1000)
//     }
// })

//9

// const newPromise = new Promise ((resolve,reject) =>{
//     randomNum = Math.random()
//     if(randomNum>0.5){
//         setTimeout(()=>{
//             resolve("resolved")
//         })
//     }
//     else{
//         setTimeout(()=>{
//             reject("Rejected")
//         })
//     }
// })

//10

// const newPromise = new Promise ((resolve,reject) =>{
//     if(true){
//         setTimeout(()=>{
//             resolve(5)
//         });
//         newPromise.then((hhh)=>{
//             resolve(hhh*20)
//         })

//     }
// })

//11

fetch('https://fakestoreapi.com/products/2')
            .then(res=>res.json())
            .then(json=>console.log(json))