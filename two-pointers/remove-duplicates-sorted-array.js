// Given sorted array:
// let nums = [1,1,2];

// Remove duplicates in-place

// Final array should become:
// [1,2,_]

// Return count of unique values

// Output:
// 2

let nums = [1, 1, 2];
let l = 0;
let r = 1;

while (r <= nums.length - 1) {
  if (nums[l] === nums[r]) {
    r++;
  } else {
    nums[l + 1] = nums[r];
    l++;
    r++;
  }
}

console.log(l + 1);
