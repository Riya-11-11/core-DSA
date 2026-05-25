// Given:
// let nums = [0,1,0,3,12];

// Move all 0s to end
// Keep order of non-zero numbers

// Output:
// [1,3,12,0,0]

let nums = [0, 1, 0, 3, 12];
let l = 0;
let r = 0;

while (r < nums.length) {
  if (nums[r] === 0) {
    r++;
  } else {
    nums[l] = nums[r];
    l++;
    r++;
  }
}

while (l < nums.length) {
  nums[l] = 0;
  l++;
}

console.log(nums);
