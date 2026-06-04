// let str = "abbaca";

// Process:
// ab → push
// b next to b → remove both
// aca

// Result:
// "ca"

let str = "abbaca";
let stack = [];

for (const ch of str) {
  let top = stack[stack.length - 1];
  if (top === ch) {
    stack.pop();
  } else {
    stack.push(ch);
  }
}

// console.log(stack);
let ans = stack.join("");
console.log(ans);
