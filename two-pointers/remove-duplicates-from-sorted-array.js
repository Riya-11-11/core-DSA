// Another example:

// Input:
// [0,0,1,1,1,2,2,3,3,4]

// After removing duplicates:

// [0,1,2,3,4,_,_,_,_,_]

// Unique count:
// 5

// Answer:
// 5

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let l = 0;
let r = 1;

while (r < nums.length) {
  if (nums[l] === nums[r]) {
    r++;
  } else {
    nums[l + 1] = nums[r];
    l++;
    r++;
  }
}

console.log(l + 1);
