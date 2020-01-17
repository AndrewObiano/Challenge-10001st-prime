module.exports = function(n) {
  // do work here

  let index = 2;
  let counter = 0;

  // prime number checker
  function isPrime(num) {
    if (num <= 1) {
      // ignore 0 and 1
      return false;
    } else if (num <= 3) {
      // 2 and 3 are prime numbers
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      // 2 or 3 div
      return false;
    }

    let i = 5;
    while (i * i <= num) {
      // check every odd number not divisible by 3 up until sqrt
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  } // end of prime number checker

  while (counter < n) {
    if (isPrime(index)) {
      counter++;
    }
    index++;
  }
  return index - 1;
};
