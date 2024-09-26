function getNameById(id, callback) {
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

const batchInputs = (inputs, limit) => {
  const clone = [...inputs];
  const batches = [];
  while (clone.length) {
    batches.push(clone.splice(0, limit));
  }
  return batches;
};

const processBatchedInputs = (batches, iterateeFn) =>
  new Promise(async (resolve) => {
    const results = [];

    for (let batch of batches) {
      const res = await Promise.all(
        batch.map((input) => {
          return new Promise((resolve) => {
            iterateeFn(input, (result) => {
              resolve(result);
            });
          });
        })
      );
      results.push(...res);
    }

    resolve(results);
  });

function mapLimit(inputs, limit, iterateeFn, callback) {
  // break input
  const batches = batchInputs(inputs, limit);

  processBatchedInputs(batches, iterateeFn).then((results) => {
    callback(results);
  });
}
//example:
mapLimit([1, 2, 3, 4, 5, 6], 3, getNameById, (allResults) => {
  console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
