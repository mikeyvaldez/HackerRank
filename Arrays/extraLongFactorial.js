//EXTRA LONG FACTORIALS
// n! = n * (n-1) * (n-2) * (n-3) *......* (n-2) * (n-1)


// sample input
// 25

// sample output
// 15511210043330985984000000





function extraLongFactorial(n){
  let accum = BigInt(n)
  for(let i = n - 1; i > 1; i--){
    accum *= BigInt(i)
  }
  console.log(accum.toString())
}

console.log(extraLongFactorial(25))
