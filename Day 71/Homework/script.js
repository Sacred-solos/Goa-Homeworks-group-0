let addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField")
let removeToDo = document.getElementById("removeToDo")

addToDoButton.addEventListener("click", function(){
  if(inputField.value !== ""){
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerHTML = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = ''
    paragraph.addEventListener("click", function(){
      paragraph.style.textDecoration = "line-through"
      paragraph.style.textDecorationColor = "red"
    })
    removeToDo.addEventListener("click", ()=>{
      toDoContainer.removeChild(paragraph)
    })
  }
})