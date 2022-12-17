// ROTATE LEFT

//sample input
// [1, 2, 3, 4, 5]

//sample output
// [5, 1, 2, 3, 4]

function rotateLeft(d, arr){

  let i = 0
  while(i < d){
    let element = arr.shift();

    arr.push(element)
    i++
  }
  return arr
}

let arr = [1, 2, 3, 4, 5];
let d = 4;

console.log(rotateLeft(d, arr))
