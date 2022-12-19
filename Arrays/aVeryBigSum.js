

function aVeryBigSum(ar){
  const initialValue = 0;
  const sum = ar.reduce((accum, currVal) => accum + currVal, initialValue)
  return sum
}

let ar = [100000001, 100000002, 100000003, 100000004, 100000005]
console.log(aVeryBigSum(ar))
