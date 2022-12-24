// STAIRCASE

// the function accepts an integer n as a parameter


function staircase(n){
  for(let i = 0; i < n; i++){
    let results = ''
    for(let j = 0; j < n; j++){
      if(j < (n-1-i)){
        results += ' '
      } else {
        results += '#'
      }
    }
    console.log(results)
  }

}

let n = 6
console.log(staircase(n))
