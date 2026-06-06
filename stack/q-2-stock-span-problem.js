// Given:
// prices = [100, 80, 60, 70, 60, 75, 85]

// Output:
// [1, 1, 1, 2, 1, 4, 6]

let prices = [100, 80, 60, 70, 60, 75, 85];

let stack = []; //previous high value tak jaana h
let ans = [];

for (let i = 0; i < prices.length; i++) {
  let curr = prices[i];

  while (stack.length > 0 && prices[stack[stack.length - 1]] <= curr) {
    stack.pop();
  }

  if (stack.length === 0) {
    ans[i] = i + 1;
  } else {
    ans[i] = i - stack[stack.length - 1];
  }

  stack.push(i);
}

console.log(ans);
