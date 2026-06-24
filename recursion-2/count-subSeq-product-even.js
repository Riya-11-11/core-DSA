// Count Subsequences Whose Product is Even

// Input:
// arr = [1, 2, 3]

// Output:
// 4

// Because:
// [2]
// [1,2]
// [2,3]
// [1,2,3]

// have an even product.

let arr = [1, 2, 3];

function countSubseq(arr, product, count, i) {
  if (i === arr.length) {
    if (product % 2 === 0) {
      return 1;
    } else return 0;
  }

  return (
    countSubseq(arr, product * arr[i], count + 1, i + 1) +
    countSubseq(arr, product, count + 1, i + 1)
  );
}

console.log(countSubseq(arr, 1, 0, 0));
