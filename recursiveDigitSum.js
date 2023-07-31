function getSum(s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    sum += parseInt(s[i], 10);
  }

  return sum;
}

function superDigit(n, k) {
  const initialSum = getSum(n) * k;

  return getSuperDigit(String(initialSum));
}

function getSuperDigit(n) {
  if (n.length === 1) {
    return parseInt(n, 10);
  }

  let sum = getSum(n);

  return getSuperDigit(String(sum));
}
