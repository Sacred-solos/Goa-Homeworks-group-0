const userName = document.getElementById("name")
const lastName = document.getElementById("lastname")
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")
const repeatPassword = document.getElementById("rpassword")
const btn = document.getElementById("btn")
const rbtn = document.getElementById("rbtn")
const array = []
class Person{
  #password;
  constructor(name,lastname,email,password){
    this.name = name
    this.lastname = lastname
    this.email = email
    this.#password = password
  }

  set password(newPass){
    this.#password = newPass;
  }

  get password(){
      return this.#password
  }

}
btn.addEventListener("click", ()=>{
  const person = new Person(userName.value,lastName.value,userEmail.value,userPassword.value)
  array.push(person)
  console.log(array);
})