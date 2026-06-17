// Count the number of occurrences of a character in a string using recursion

// Example:

// str = "banana"
// ch = "a"

// Output:
// 3

// No loops. Use recursion only.

let str = "banana";
let ch = "a";

let n = str.length;

function occurrence(str, n) {
  if (n === 1) {
    return str[0] === ch ? 1 : 0;
  }

  return (str[n - 1] === ch ? 1 : 0) + occurrence(str, n - 1);
}

console.log(occurrence(str, n));
