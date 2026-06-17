// Check if a String Contains a Character

// Input:
// str = "banana"
// ch = "n"

// Output:
// true

// Input:
// str = "banana"
// ch = "x"

// Output:
// false

// No loops.
// No .includes().

// Use recursion only.

let str = "banana";
let ch = "n";

let n = str.length;
function containCh(str, n) {
  if (n === 1) {
    return str[0] === ch;
  }

  if (str[n - 1] === ch) {
    return true;
  } else {
    return containCh(str, n - 1);
  }
}

console.log(containCh(str, n));
