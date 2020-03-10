/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  let result = 1;

  if(n >= 0){
    let i=1;
    while (i<=n) {
    result *= i;
    i++;
    }
  } else {
  result = false;
  }
  return result;
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);
