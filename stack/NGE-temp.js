// Daily Temperatures

// Given:
// temps = [73,74,75,71,69,72,76,73]

// Output:
// [1,1,4,2,1,1,0,0]

// 73 → wait 1 day → 74

// Answer:
// 1

let temps = [73, 74, 75, 71, 69, 72, 76, 73];

let stack = [];
let ans = [];

for (let i = temps.length - 1; i >= 0; i--) {
  let curr = temps[i];

  while (stack.length > 0 && temps[stack[stack.length - 1]] <= curr) {
    stack.pop();
  }

  if (stack.length === 0) {
    ans[i] = 0;
  } else {
    ans[i] = stack[stack.length - 1]-i; //no. of days
  }

  stack.push(i);
}

console.log(ans);
