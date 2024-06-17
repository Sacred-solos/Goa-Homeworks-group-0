function Flight(flightId, flightStatus){
    this.flightId =  flightId
    this.flightStatus = flightStatus
  }
  
  let flight1 = new Flight("124223", "flying")
  let flight2 = new Flight("1232333", "landed")
  let flight3 = new Flight("1178982", "taking off")
  
  console.log(flight1);
  console.log(flight2);
  console.log(flight3);