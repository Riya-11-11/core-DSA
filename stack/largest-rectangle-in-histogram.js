let heights = [2, 1, 5, 6, 2, 3];

let stack = []; //storing index...

let right = [];
let left = [];

let ans = 0;

//right nearest smallest ---> NGE
for (let i = heights.length - 1; i > 0; i--) {
  let curr = heights[i];

  while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
    stack.pop();
  }

  if (stack.length === 0) {
    right[i] = heights.length; // because we will take -1 then our calculation will be complicated...as width = r-l-1
  } else {
    right[i] = stack[stack.length - 1];
  }

  stack.push(i);
}

//left nearest smallest ---> PSE
for (let i = 0; i < heights.length; i++) {
  let curr = heights[i];

  while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
    stack.pop();
  }

  if (stack.length === 0) {
    left[i] = heights.length; // because we will take -1 then our calculation will be complicated...as width = r-l-1
  } else {
    left[i] = stack[stack.length - 1];
  }

  stack.push(i);
}

//Actual code...
for (let i = 0; i < heights.length; i++) {
  let width = right[i] - left[i] - 1;
  let currArea = heights[i] * width;
  if (currArea > ans) {
    ans = currArea;
  }
}

console.log(ans);
