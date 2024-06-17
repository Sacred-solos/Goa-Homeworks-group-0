// Assign:

// 1. Create an object person, with properties: name and age. Use Object.assign to create a new object employee with additional property - position.

// let person = {
//   name: "nika",
//   age: 15
// }

// let employee = Object.assign({}, person, {position: "programmer"})
// console.log(employee);

// 2. Merge two objects obj1 and obj2 into a new object using Object.assign.

// let obj1 = {
//   name: "luka",
//   skill: "wrestling",
//   point: 20
// }

// let obj2 = {
//   name: "mate",
//   skill: "developer"
// }

// let newObj = Object.assign({}, obj1, obj2)
// console.log(newObj);

// 3. Copy properties from multiple source objects into a single target object using Object.assign.

// let object1 = {
//   name: "spar cashier",
//   skill: "working"
// }

// let object2 = {
//   age: 25,
//   point: 50
// }

// let object3 = {
//   color: "cyan",
// } 

// let newObject = Object.assign({}, object1, object2, object3)
// console.log(newObject);

// 4. Use Object.assign to clone an object original.

// let bestObject = {
//   color: "red",
//   skill: "developer"
// }
// let copyObject = Object.assign({}, bestObject)
// console.log(copyObject);

// 5. Merge properties of an object source into another object target using Object.assign.

// let object1 = {
//   name: "cashier",
//   skill: "working"
// }

// let object2 = {
//   age: 18,
//   point: 50
// }

// Object.assign(object1, object2)
// console.log(object1);


// 6. Merge arrays of objects into a single object using Object.assign.

// let arrOne = [{name: "cashier",skill: "working"}, {color: "green"}]
// let arrTwo = [{age: 14, role: "mafia"}, {iq: 130}]
// let newObject = Object.assign({}, ...arrOne, ...arrTwo)
// console.log(newObject);


// 7. Use Object.assign to update properties of an existing object with new values.

// let myObject = {
//   name: "nika"
// }
// Object.assign(myObject, {age: 15})
// console.log(myObject);

// -----------------------------------------