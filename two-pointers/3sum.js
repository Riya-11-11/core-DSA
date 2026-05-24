// Given array:
// let nums = [-1,0,1,2,-1,-4];

// Find all unique triplets such that:
// a + b + c = 0

// Answer:
// [[-1,-1,2],[-1,0,1]]

let nums = [-1, 0, 1, 2, -1, -4];
let ans = [];
let l = 0;
let r = nums.length - 1;

nums.sort((a, b) => a - b);
console.log(nums);

for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }

  let l = i + 1;
  let r = nums.length - 1;

  while (l < r) {
    let sum = nums[i] + nums[l] + nums[r];
    if (sum < 0) {
      l++;
    } else if (sum > 0) {
      r--;
    } else {
      let triplet = [nums[i], nums[l], nums[r]];
      ans.push(triplet);
      l++;
      r--;
    }
  }
}

console.log(ans);
