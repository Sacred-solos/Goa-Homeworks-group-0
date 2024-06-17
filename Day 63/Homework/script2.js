

function phone(brand, model, price){
    this.brand = brand
   this.model = model
   this.price = price
  }
 let newPhone = new phone("xiaomi", "poco m6 pro", "300$")
 console.log(newPhone);
 

 function job(place, work, pay){
    this.place = place
   this.work = work
   this.pay = pay
  }
 let newJob = new job("spar", "employee", "0.01$")
 console.log(newJob);


 function body(weight, height, attractiveness){
    this.weight = weight
   this.height = height
   this.attractiveness = attractiveness
  }
 let newBody = new body("75kg", "190cm", "10/10")
 console.log(newBody);


 function item(shape,color){
    this.shape = shape
   this.color = color
  }
 let newItem = new item("Triangle","Red")
 console.log(newItem);


 function pencils(amount,color){
    this.color = amount
   this.color = color
  }
 let newPencils = new pencils("50","blue")
 console.log(newPencils);