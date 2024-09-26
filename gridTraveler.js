const gridTraveler = (rows, columns, memo = {}) => {
  const key = `${rows},${columns}`;

  if (key in memo) {
    return memo[key];
  }

  if (rows === 0 || columns === 0) {
    return 0;
  }

  if (rows === 1 && columns === 1) {
    return 1;
  }

  memo[key] =
    gridTraveler(rows - 1, columns, memo) +
    gridTraveler(rows, columns - 1, memo);

  return memo[key];
};

console.log(gridTraveler(500, 500));
