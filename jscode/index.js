const array = [1, 2, 3, 4, 5];

function binarySort(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let pos = -1;

  while (found === false && start <= end) {
    middle = Math.floor((end + start) / 2);
    console.log('middle = ', middle);
    if (arr[middle] === item) {
      found = true;
      pos = middle;
      return pos;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return pos;
}

console.log(binarySort(array, 1));
