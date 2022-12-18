// SPARSE ARRAYS



function matchingStrings(stringList, queries){
  let results = []

  let i = 0;
  while(i < queries.length){
    let query = queries[i];
    let count = 0;
    for(let j = 0; j < stringList.length; j++){
      let string = stringList[j]
      if(query === string) count++;
    }
    results.push(count)
    i++
  }
  return results
}

// SAMPLE INPUT 1
let stringList = ['def', 'de', 'fgh'];
let queries = ['de', 'lmn', 'fgh'];

//SAMPLE OUTPUT 1
// 1
// 0
// 1

// SAMPLE INPUT 2
// let stringList = ['aba', 'baba', 'aba', 'xzxb'];
// let queries = ['aba', 'xzxb', 'ab'];

//SAMPLE OUTPUT 2
// 2
// 1
// 0

// SAMPLE INPUT 3
// let stringList = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
// let queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

//SAMPLE OUTPUT 3
// 1
// 3
// 4
// 3
// 2


console.log(matchingStrings(stringList, queries))
