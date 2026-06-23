// Challenge: Count Subsequences With Even Sum

// Input:
// arr = [1, 2, 3]

// Output:
// 4

// Because the subsequences with even sum are:

// []
// [2]
// [1,3]
// [1,2,3]

// Total = 4

let arr = [1, 2, 3];

function countSubseq(arr, sum, count, i) {
  if (i === arr.length) {
    if (sum % 2 === 0) {
      return 1;
    } else return 0;
  }

  return (
    countSubseq(arr, sum + arr[i], count + 1, i + 1) +
    countSubseq(arr, sum, count, i + 1)
  );
}

console.log(countSubseq(arr, 0, 0, 0));
