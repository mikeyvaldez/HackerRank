// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are:
//     !@#$%^&*()-+

// She typed a random string of length n in the password field but wasn't sure if it was strong.
// Given the string she typed, can you find the minimum number
// of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:


/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */


function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  const regularExpressions = [/\d/, /[a-z]/, /[A-Z]/, /[!@#$^&*\(\)\-\+]/];

  let add = regularExpressions.length;

  for(const regexp of regularExpressions){
    if(regexp.test(password)) add--;
  }
  return add >= 6 - n ? add : 6 - n;
}

console.log(minimumNumber(6, 'm!k3yv'))
