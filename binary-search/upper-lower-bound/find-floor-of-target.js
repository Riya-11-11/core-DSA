// nums = [1,2,4,6,10]
// target = 5

// Output:
// 4

// Find Floor of Target

// Remember:
// Floor = largest value <= target

nums = [1, 2, 4, 6, 10];
target = 5;

let s = -0;
let e = nums.length - 1;

let floor;

while (s <= e) {
  let m = Math.floor((s + e) / 2);

  if (nums[m] <= target) {
    floor = nums[m];
    s = m + 1;
  } else {
    e = m - 1;
  }
}

console.log(floor);
