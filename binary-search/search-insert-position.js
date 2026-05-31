// Given sorted array:
// let nums = [1,3,5,6];
// let target = 5;

// Output:
// 2

let nums = [1, 3, 5, 6];
let target = 5;

let start = 0;
let end = nums.length - 1;
let mid = Math.floor((start + end) / 2);

while (start <= end) {
  if (target === nums[mid]) {
    console.log(mid);
    return;
  } else if (target > nums[mid]) {
    start = mid + 1;
    mid = Math.floor((start + end) / 2);
  } else {
    end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
}

console.log(start);


