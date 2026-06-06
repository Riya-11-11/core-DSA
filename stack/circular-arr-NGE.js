let nums = [3, 6, 5, 4, 2];

let stack = [];
let ans = [];

let n = nums.length;

for (let i = 2 * n - 1; i >= 0; i--) {
  //2n---> as we are calculating in circular manner...for ex if break a rubber band and then we will two ends in straight that's like
  let curr = nums[i % n]; //for proper mapping

  while (stack.length > 0 && nums[stack[stack.length - 1]] <= curr) {
    stack.pop();
  }

  if (stack.length === 0) {
    ans[i % n] = -1;
  } else {
    ans[i % n] = nums[stack[stack.length - 1]];
  }

  stack.push(i % n);
}

console.log(ans);
