const parentDiv = document.getElementById("parent")
const child1 = document.getElementById("child1")
const child2 = document.getElementById("child1")
const child3 = document.getElementById("child1")
const child4 = document.getElementById("child1")


child1.addEventListener("click", function(){
  console.log(parentDiv)
})
child2.addEventListener("click", function(){
  console.log(parentDiv,child1)
})
child3.addEventListener("click", function(){
  console.log(parentDiv,child1,child2)
})
child4.addEventListener("click", function(){
  console.log(parentDiv,child1,child2,child3)
})