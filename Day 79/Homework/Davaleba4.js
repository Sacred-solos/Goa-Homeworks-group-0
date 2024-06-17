let arr = ["as.png", "as.jpg", "as.exe"]
function checkEx(file){
  return file.includes(".jpg")
}
let result = arr.filter(checkEx)
console.log(result); 