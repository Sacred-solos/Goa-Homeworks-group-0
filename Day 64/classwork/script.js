function Human(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.GetInfo = function() {
      console.log(`your name is: ${this.name}, 
      your lastname is: ${this.lastname}, your age is: ${this.age}`)
    }
  }
  
  let nika = new Human("Nikolozi", "Popkhadze", 15)
  nika.GetInfo()