// Given heights:
// let height = [0,1,0,2,1,0,1,3,2,1,2,1];

// Return total trapped rain water

// Answer:
// 6

//         |
//     |~~~|
// |~~~||~||
// ------------

// water =
// min(left tallest wall,
//     right tallest wall)
// -
// current height

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let l = 0;
let r = height.length - 1;

let maxLeft = height[l];
let maxRight = height[r];

let water = 0;

while (l < r) {
  if (maxLeft < maxRight) {
    l++;
    if (height[l] >= maxLeft) {
      maxLeft = height[l];
    } else {
      water += maxLeft - height[l];
    }
  } else {
    r--;
    if (height[r] >= maxRight) {
      maxRight = height[r];
    } else {
      water += maxRight - height[r];
    }
  }
}
console.log(water);
