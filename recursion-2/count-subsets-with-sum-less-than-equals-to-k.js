// Now try:

// arr = [1, 2, 1];
// k = 2;

// but instead of counting all subsets with sum = K,

// count subsets with sum ≤ K

// Expected answer:

// Subsets:
// []
// [1]
// [2]
// [1]
// [1,1]

// Total:
// 5

// Notice:
// sum == k

// becomes:
// sum <= k

// But think carefully:

let arr = [1, 2, 1];
let k = 2;

function countSubsets(arr, sum, i) {
  if (sum > k) {
    return 0;
  }

  if (i === arr.length) {
    return 1;
  }

  return countSubsets(arr, sum + arr[i], i + 1) + countSubsets(arr, sum, i + 1);
}

console.log(countSubsets(arr, 0, 0));
