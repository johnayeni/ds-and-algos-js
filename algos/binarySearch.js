function binarySearch(list, item) {
  const sortedList = list.sort((a, b) => a - b);

  let low = 0;
  let high = list.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedList[mid];
    if (guess === item) {
      return true;
    }

    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 8], 7));
