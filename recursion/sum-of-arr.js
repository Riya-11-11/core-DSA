// Sum of Array Elements Using Recursion

// Given:
// arr = [3, 8, 2, 10, 5]

// Output:
// 28

// Because:
// 3 + 8 + 2 + 10 + 5 = 28

let arr = [3, 8, 2, 10, 5];
let n = arr.length;

function sumArr(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return arr[n - 1] + sumArr(arr, n - 1);
}

console.log(sumArr(arr, n));
