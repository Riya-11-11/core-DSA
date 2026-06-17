// Reverse a String Using Recursion

// Input:
// str = "hello"

// Output:
// olleh

// Rules:
// No loops
// No .reverse()
// Use recursion only

let str = "hello";
let n = str.length;

function reverseStr(str, n) {
  if (n === 1) {
    return str[0];
  }

  return str[n - 1] + reverseStr(str, n - 1);
}

console.log(reverseStr(str, n));
