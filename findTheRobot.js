const findTheRobots = (grid, query) => {
  const robots = [];
  const visited = new Set();

  const hasTopBlocker = (row, col) => {
    return grid[row - query[1]]?.[col] === "X" || row - query[1] === -1;
  };

  const hasBottomBlocker = (row, col) => {
    return (
      grid[row + query[2]]?.[col] === "X" || row + query[2] === grid.length
    );
  };

  const hasLeftBlocker = (row, col) => {
    return grid[row]?.[col - query[0]] === "X" || col - query[0] === -1;
  };

  const hasRightBlocker = (row, col) => {
    return (
      grid[row]?.[col + query[3]] === "X" || col + query[3] === grid[0].length
    );
  };

  const validateRobot = (row, col) => {
    if (grid[row][col] !== "O") {
      return;
    }

    if (
      hasLeftBlocker(row, col) &&
      hasRightBlocker(row, col) &&
      hasTopBlocker(row, col) &&
      hasBottomBlocker(row, col)
    ) {
      robots.push([row, col]);
    }
  };

  const dfs = (row, col) => {
    const key = row + "," + col;
    if (visited.has(key)) {
      return;
    }

    if (row >= grid.length || col >= grid[0].length) {
      return;
    }

    validateRobot(row, col);

    visited.add(key);

    const directions = [
      [row + 1, col],
      [row, col + 1],
    ];

    for (let [i, j] of directions) {
      dfs(i, j);
    }
  };

  dfs(0, 0);

  return robots;
};

console.log(
  findTheRobots(
    [
      ["O", "E", "E", "E", "X"],
      ["E", "O", "X", "X", "X"],
      ["E", "E", "E", "E", "E"],
      ["X", "E", "O", "E", "E"],
      ["X", "E", "X", "E", "X"],
    ],
    [2, 2, 4, 1]
  )
);
