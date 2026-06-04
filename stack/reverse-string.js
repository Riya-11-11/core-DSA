// 🚀 First Stack Coding Problem
// Reverse a String Using a Stack

// Given:
// let str = "hello";

// Output:
// "olleh"

let str = "hello";

let stack = str.split("");
let ans = "";

for (let ch of str) {
  let reverse = stack.pop();
  ans += reverse;
}


console.log(ans);
