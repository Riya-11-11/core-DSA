// Given:
// let nums = [4,5,6,7,0,1,2];
// let target = 0;

// Output:
// 4

// Rules
// Array was originally sorted.
// Then rotated.
// Return the index of target.
// If target doesn't exist:
// return -1;

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

let s = 0;
let e = nums.length - 1;

while (s <= e) {
  let m = Math.floor((s + e) / 2);

  if (nums[m] === target) {
    console.log(m);
    return;
  }

  if (nums[s] <= nums[m]) {
    //left half is sorted...
    if (nums[s] <= target && target <= nums[m]) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  } else {
    //right half is sorted...
    if (nums[m] <= target && target <= nums[e]) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
}
return console.log(-1);
