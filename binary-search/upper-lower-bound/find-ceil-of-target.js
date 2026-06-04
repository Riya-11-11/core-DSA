// Find Ceil of Target

// nums = [1,2,4,6,10]
// target = 5

// Output:
// 6

// Ceil = smallest value >= target

nums = [1, 2, 4, 6, 10];
target = 5;

let s = 0;
let e = nums.length - 1;

let ceil;

while (s <= e) {
  let m = Math.floor((s + e) / 2);

  if (nums[m] >= target) {
    ceil = nums[m];
    e = m - 1;
  } else {
    s = m + 1;
  }
}

console.log(ceil);
