// Find the Minimum Element in an Array Using Recursion
// arr = [7, 2, 9, 1, 5]

// Output:
// 1

// Try it without any hints.

let arr = [7, 2, 9, 1, 5];
let n = arr.length;

function minElem(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return Math.min(arr[n - 1], minElem(arr, n - 1));
}

console.log(minElem(arr, n));
