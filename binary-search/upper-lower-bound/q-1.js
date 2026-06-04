// nums = [1,2,4,4,4,6,8]
// target = 3

// Check:
// 1 >= 3 ? No
// 2 >= 3 ? No
// 4 >= 3 ? Yes

// First valid index:
// 2

// ✅ Lower Bound = 2

// Even though 3 is not present.

nums = [1, 2, 4, 4, 4, 6, 8];
target = 3;

let s = 0;
let e = nums.length - 1;

let ans;

while (s <= e) {
  let m = Math.floor((s + e) / 2);
  if (nums[m] >= target) {
    ans = m;
    e = m - 1;
  } else {
    s = m + 1;
  }
}

console.log(ans);
