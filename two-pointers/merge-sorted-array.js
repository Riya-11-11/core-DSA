// nums1 has extra space at end

// let nums1 = [1,2,3,0,0,0];
// let m = 3;

// let nums2 = [2,5,6];
// let n = 3;

// Merge nums2 into nums1

// Output:
// [1,2,2,3,5,6]

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let nums2 = [2, 5, 6];
let n = 3;

let idx = nums1.length - 1;

let p1 = m - 1;
let p2 = n - 1;

while (p2 >= 0) {
  if (nums1[p1] <= nums2[p2]) {
    nums1[idx] = nums2[p2];
    p2--;
    idx--;
  } else {
    nums1[idx] = nums1[p1];
    p1--;
    idx--;
  }
}

console.log(nums1);
