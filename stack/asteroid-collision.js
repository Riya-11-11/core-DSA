let nums = [10, 2, -5];

let stack = [];

for (let i = 0; i < nums.length; i++) {
  let val = nums[i];
  let isAlive = true;

  while (
    isAlive &&
    stack.length > 0 &&
    stack[stack.length - 1] > 0 &&
    val < 0
  ) {
    let top = stack[stack.length - 1];
    if (top < -val) {
      stack.pop();
    } else if (top === -val) {
      stack.pop();
      isAlive = false;
    } else {
      isAlive = false;
    }
  }

  if (isAlive) {
    stack.push(val);
  }
}

// for (let i = 0; i < nums.length; i++) {
//   let val = nums[i];

//   if (val > 0) {
//     stack.push(val);
//   } else {
//     while (
//       stack.length != 0 &&
//       stack[stack.length - 1] > 0 &&
//       stack[stack.length - 1] < val * -1
//     ) {
//       stack.pop();
//     }
//   }
//   if (stack.length != 0 && stack[stack.length - 1] === val * -1) {
//     stack.pop();
//   } else if (stack.length === 0 && val < 0) {
//     stack.push(val);
//   }
// }

console.log(stack);
