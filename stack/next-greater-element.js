// Given:
// // nums = [2,1,3]

// Output:
// [3,3,-1]

nums = [2, 1, 3];

let stack = [];
let ans = [];

for (i = nums.length - 1; i >= 0; i--) {
  let curr = nums[i];
  let top = stack[stack.length - 1];

  while (stack.length > 0 && top <= curr) {
    stack.pop();
    top = stack[stack.length - 1];
  }

  if (stack.length === 0) {
    ans[i] = -1;
  } else {
    ans[i] = top;
  }

  stack.push(curr);
}
console.log(ans);
