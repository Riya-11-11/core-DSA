// Find the maximum element in an array using recursion.

// Example:
// arr = [3, 8, 2, 10, 5]

// Output:
// 10

let arr = [3, 8, 2, 10, 5];
let n = arr.length;

function max(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return Math.max(arr[n - 1], max(arr, n - 1));
}

console.log(max(arr, n));
