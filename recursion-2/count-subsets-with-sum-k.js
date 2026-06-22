// For subsequences:

// [2,1] ❌

// For subsets:

// {1,2} and {2,1}

// A subset has no order.
// A subsequence has order.

// Challenge: Count Subsets With Sum = K

// Input:
// arr = [1, 2, 1]
// k = 2

// Output:
// 2

// Because:
// [1,1]
// [2]

let arr = [1, 2, 1];
let k = 2;

function countSubsets(arr, sum, i) {
  if (i === arr.length) {
    if (sum === k) {
      return 1;
    } else return 0;
  }

  return countSubsets(arr, sum + arr[i], i + 1) + countSubsets(arr, sum, i + 1);
}

console.log(countSubsets(arr, 0, 0));
