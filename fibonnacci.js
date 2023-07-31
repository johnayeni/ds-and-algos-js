/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};
