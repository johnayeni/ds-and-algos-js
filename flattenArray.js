const flatten = (arr) => {
  const newArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  return newArray;
};

console.log(flatten([1, 2, 3, [3, 4, [5, 6]], 7]));
