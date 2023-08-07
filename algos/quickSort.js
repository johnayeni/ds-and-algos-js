function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const less = [];
  const greater = [];

  arr.forEach((num, index) => {
    if (index !== pivotIndex) {
      if (num <= pivot) {
        less.push(num);
      } else {
        greater.push(num);
      }
    }
  });

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([4, 2, 16, 16, 1, 32, 8]));
