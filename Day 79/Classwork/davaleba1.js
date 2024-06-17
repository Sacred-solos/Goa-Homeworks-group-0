let types = [2,2.14,12,5,"stringggs","aeresoad",true]
function filt(num){
  if(num == parseInt(num)){
    return num
  }
}
let result = types.filter(filt)
console.log(result);