class Person{
    #id
    constructor(name,age,gender){
      this.name = name
      this.age = age
      this.gender = gender
    }
    greet(){
      console.log("helou", this.name);
    }
    get getName(){
      return this.name
    }
  
    get getGender(){
      return this.gender !== "male"
    }
  
    set setGender(gender){
      return this.gender = gender
    }
  }
  
  const newPerson = new Person("nika","15","male")
  console.log(newPerson);
  newPerson.greet()
  console.log(newPerson.name, newPerson.age, newPerson.gender);
  
  newPerson.name = "luka"
  newPerson.age =  "14"
  newPerson.gender = "autistic"
  console.log(newPerson.gender, newPerson.name, newPerson.age);
  
  const anotherPerson = new Person("human", "1", "male")
  const oneMorePerson = new Person("cashier", "43", "female")
  
  console.log(anotherPerson.getName);
  console.log(anotherPerson.getGender);
  console.log(oneMorePerson.getGender);
  
  oneMorePerson.setGender = "female"
  console.log(oneMorePerson.gender);