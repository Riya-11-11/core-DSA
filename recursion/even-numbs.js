// Next Challenge

// Try this one:
// Count how many even numbers are present in an array using recursion.

// Example:
// arr = [2, 5, 8, 7, 10]

// Output:
// 3

// Because:
// 2, 8, 10
// are even.

// No loops. No global variables.

let arr = [2, 5, 8, 7, 10];
let n = arr.length;

function evenNum(arr, n) {
  if (n === 1) {
    return arr[0] % 2 === 0 ? 1 : 0;
  }

  return (arr[n - 1] % 2 === 0 ? 1 : 0) + evenNum(arr, n - 1);
}

console.log(evenNum(arr, n));
