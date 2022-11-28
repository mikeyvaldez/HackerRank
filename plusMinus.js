// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  10^-4 are acceptable.


// Example

// arr = [1,1,0,-1,-1]

// There are n = 5 elements two PromiseRejectionEvent, two negative, and one zero.  Theri ratios are 2/5 = 0.400000,
// 2/5 = 0.400000, and 1/5 0.200000. Results are printed as:

// 0.400000
// 0.400000
// 0.200000


function plusMinus(arr){


  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 1) positives++
    if(arr[i] < 0) negatives++
    if(arr[i] === 0) zeros++
  }

  console.log((positives / arr.length).toFixed(6))
  console.log((negatives / arr.length).toFixed(6))
  console.log((zeros / arr.length).toFixed(6))

}


const array = [1,1,0,-1,-1]

console.log(plusMinus(array))
