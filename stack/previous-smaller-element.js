let arr = [3, 1, 0, 8, 6];

let ans = [];
let stack = [];

for (let i = 0; i < arr.length; i++) {
  let curr = arr[i];

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
