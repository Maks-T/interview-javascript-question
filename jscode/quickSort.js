const array = [2, 1, -1, 5, 100, 2];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const left = [];
  const right = [];
  const equal = [];

  const pivot = arr[Math.floor(Math.random() * arr.length)];

  arr.forEach((el) => {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  });

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort(array));
