const parentDiv = document.getElementById("parent")
const child = document.getElementById("child")

parentDiv.addEventListener("click", function(){
  parentDiv.style.background = "green"
  child.style.background = "red"
}, true)

child.addEventListener("click", function(){
  parentDiv.style.background = "green"
  child.style.background = "lightgreen"
})