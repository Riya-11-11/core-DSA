//Given:
// nums = [4,5,6,7,0,1,2]

// Output:
// 0

nums = [4, 5, 6, 7, 0, 1, 2];

let min = Infinity;
let s = 0;
let e = nums.length - 1;

while (s <= e) {
  let m = Math.floor((e + s) / 2);
  if (nums[s] <= nums[m]) {
    //left half sorted
    min = Math.min(min, nums[s]);
    s = m + 1;
  } else {
    //right half sorted
    min = Math.min(min, nums[m]);
    e = m - 1;
  }
}

console.log(min);
