// Next Smaller Element (NSE)

// Given:
// nums = [4, 8, 5, 2, 25];

// Output:
// [2, 5, 2, -1, -1]

nums = [4, 8, 5, 2, 25];

let stack = [];
let ans = [];

for (let i = nums.length - 1; i >= 0; i--) {
  let curr = nums[i];

  while (stack.length > 0 && stack[stack.length - 1] >= curr) {
    stack.pop();
  }

  if (stack.length === 0) {
    ans[i] = -1;
  } else {
    ans[i] = stack[stack.length - 1];
  }

  stack.push(curr);
}

console.log(ans);
