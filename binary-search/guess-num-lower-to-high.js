// Binary Search #11 — Guess Number Lower or Higher

// Imagine:
// // n = 10
// // pick = 6

// You don't know the picked number.

// You can only ask:

// Is my guess too high?
// Is my guess too low?
// Is it correct?

// This is basically pure binary search.

n = 10;
pick = 6;

let s = 1;
let e = n;

while (s <= e) {
  let m = Math.floor((s + e) / 2);
  if (pick === m) {
    console.log("Correct!!! " + m);
    return;
  }
  if (pick > m) {
    console.log("guess is too low " + m); //middle is guess number.
    s = m + 1;
  } else {
    console.log("guess is too high " + m);
    e = m - 1;
  }
}
