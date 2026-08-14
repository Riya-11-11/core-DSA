// Remove Duplicates from Sorted Array

// Given a sorted array:
// let nums = [1, 1, 2, 2, 3, 3, 4];

// Tumhe in-place duplicates remove karne hain.

// New array mat banana.

// Expected result conceptually:
// [1, 2, 3, 4, ...]

// But problem ka important part hai: unique elements ki count return karni hai.

// So expected output:
// 4

let nums = [1, 1, 2, 2, 3, 3, 4];

let l = 0;
let r = 1;

while (r < nums.length) {
  if (nums[l] === nums[r]) {
    r++; //skip
  } else {
    l++;
    nums[l] = nums[r]; //is se jo second one h wo overwrite ho jaayega
    r++;
  }
}

console.log(l + 1);
