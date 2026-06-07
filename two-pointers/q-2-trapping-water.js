let heights = [4, 2, 0, 3, 2, 5];

let l = 0;
let r = heights.length - 1;

let lMax = 0;
let rMax = 0;

let ans = 0;

while (l < r) {
  lMax = Math.max(lMax, heights[l]);
  rMax = Math.max(rMax, heights[r]);

  if (lMax < rMax) {
    //left is the min boundary
    ans += lMax - heights[l];
    l++;
  } else {
    //right is the min boundary
    ans += rMax - heights[r];
    r--;
  }
}
console.log(ans);
