// REVERSE AN ARRAY OF INTEGERS

// sample array
// [1, 4, 3, 2]

// sample output
// [2, 3, 4, 1]

function reverseArrayOfIntegers(array){
  let newArray = [];
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}

let array = [1, 4, 3, 2]

console.log(reverseArrayOfIntegers(array))
