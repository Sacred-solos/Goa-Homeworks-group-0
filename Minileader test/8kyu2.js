//Holiday VIII - Duty free
function dutyFree(normPrice, discount, hol){
    const moneySaved = normPrice * discount / 100
    return hol/moneySaved | 0;
  }