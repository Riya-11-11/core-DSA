// Check if an Array is Sorted

// Given:
// arr = [1, 2, 3, 4, 5]

// Output:
// true

// Given:
// arr = [1, 2, 5, 4, 6]

// Output:
// false

let arr = [1, 2, 3, 9, 5];
let n = arr.length;

function isSorted(arr, n) {
  if (n == 0 || n == 1) {
    return true;
  }

  return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1);
}

console.log(isSorted(arr, n));
