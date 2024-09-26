/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * @param {number} n
 * @return {number}
 */
// const fib = function (n, memo = {}) {
//   if (memo[n]) return memo[n];

//   if (n < 2) {
//     return n;
//   }

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

//   return memo[n];
// };

const fib = (n) => {
  if (n < 2) return n;

  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};

console.time();
console.log(fib(2000));
console.timeEnd();
