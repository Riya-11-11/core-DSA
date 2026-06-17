// Find the First Occurrence of a Character

// Input:
// str = "banana"
// ch = "a"

// Output:
// 1

let str = "banana";
let ch = "a";

// let idx = 0;

function firstOcc(str, idx) {
  if (idx === str.length) {
    //We checked every character and never found ch.
    return -1;
  }

  if (str[idx] === ch) {
    return idx;
  }

  return firstOcc(str, idx + 1);
}

console.log(firstOcc(str, 0));
