// Find Peak Element
// let nums = [1,2,3,1];

// Output:
// 2

// Because:
// nums[2] = 3

// and:

// 3 > 2
// 3 > 1

// So 3 is a peak.
//MOUNTAIN ARRAY..........
//START || END ----> !peak

let nums = [1, 2, 3, 1];

let s = 0;
let e = nums.length - 1;

while (s < e) {
  let m = Math.floor((s + e) / 2);

  if (nums[m] < nums[m + 1]) {
    s = m + 1; //right side check
  } else {
    e = m; // peak is at mid or left side
  }
}

console.log(s);

//FOR MOUNTAIN ARRAY
// let s = 1;
// let e = nums.length - 2;

// while (s < e) {
//   let m = Math.floor((s + e) / 2);
//   if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
//     console.log(m);
//     return;
//   } else if (nums[m - 1] < nums[m]) {
//     //mid lying in increasing order
//     s = m + 1; //search right side
//   } else {
//     //mid lying in descresing
//     //  order
//     // e = m - 1; //search left side
//     e = m - 1;
//   }
// }
