//sort the odd
function sortArray(array) {
    const oddNum = array.filter((x) => x % 2).sort((a,b)=> a-b);
    return array.map((x)=>x%2 ? oddNum.shift() :x);
}