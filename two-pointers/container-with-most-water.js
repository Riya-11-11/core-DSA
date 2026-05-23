// let height = [1,8,6,2,5,4,8,3,7];
// Imagine vertical lines:

// height:
// 1 8 6 2 5 4 8 3 7

// Choose two lines that hold the maximum water.
// Water stored:

// width between lines × smaller height

// Example:
// Choose:

// 8               7
// |               |
// |               |--------->2 walls chosen.
// |_______________|

// Width:
// 8 - 1 = 7 ---> index difference is width.

// Smaller height:
// 7------>two walls that we have chose --->min(8,7).

// Area:
// 7 × 7 = 49

// Answer:
// 49

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let l = 0;
let r = height.length - 1;
let area = 0;

while (l < r) {
  let width = r - l;
  let minHeight = 0;

  if (height[l] < height[r]) {
    minHeight = height[l];
    l++;
  } else {
    minHeight = height[r];
    r--;
  }

  let curr_area = width * minHeight;
  if (curr_area > area) {
    area = curr_area;
  }
}

console.log(area);
