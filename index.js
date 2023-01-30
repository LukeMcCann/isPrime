'use strict';

function isPrime(n) {
    if (n < 2) { return false; }
    if (n != Math.round(n)) { return false; }

    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(n); i++) {
       if (n % i == 0) {isPrime = false}
    }

    return isPrime;
 }

function primeNumbersBelow(n) {
    const primeNumbers = [];

    while (n > 0) {
        if (isPrime(n)) {
            primeNumbers.push(n);
        }
        n--;
    }

    return primeNumbers;
}

module.exports = {
    isPrime,
    primeNumbersBelow,
};