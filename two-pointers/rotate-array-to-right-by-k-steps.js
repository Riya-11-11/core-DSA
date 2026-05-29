// Given:
// let nums = [1,2,3,4,5,6,7];
// let k = 3;

// Rotate array to right by k steps

// Output:
// [5,6,7,1,2,3,4]

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let l = 0;
let r = nums.length - 1;

let i = 0;
let j = k - 1;

let n = nums.length - 1;

while (l < r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
  l++;
  r--;
}

while (j > 0) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  j--;
  i++;
}

while (k < n) {
  let temp = nums[k];
  nums[k] = nums[n];
  nums[n] = temp;
  k++;
  n--;
}
console.log(nums);
