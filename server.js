// Q1️⃣ Maximum Number of Vowels in Substring of Size K

// (Fixed window + counting)

// s = "abciiidef"
// k = 3

// Find:
// maximum number of vowels in any substring of length k

// let s = "abciiidef";
// let k = 3;
// let count = 0;
// let n = s.length;

// for (let i = 0; i < k; i++) {
//   let ch = s[i];

//   if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//     count++;
//   }
// }

// let max = count;

// for (let r = 1; r <= n - k; r++) {
//   if (
//     s[r - 1] === "a" ||
//     s[r - 1] === "e" ||
//     s[r - 1] === "i" ||
//     s[r - 1] === "o" ||
//     s[r - 1] === "u"
//   ) {
//     count--;
//   }

//   if (
//     s[r + k - 1] === "a" ||
//     s[r + k - 1] === "e" ||
//     s[r + k - 1] === "i" ||
//     s[r + k - 1] === "o" ||
//     s[r + k - 1] === "u"
//   ) {
//     count++;
//   }

//   if (count > max) {
//     max = count;
//   }
// }

// console.log(max);

// .
// .
// .
// .
// .
// .
// .
// .

// Q2️⃣ Longest Repeating Character Replacement (Concept only)

// Don’t code yet.

// Just think:

// s = "AABABBA"
// k = 1

let s = "AABABBA";
let k = 1;
let maxLength = 0;
let map = {};
let l = 0;

for (let r = 0; r < s.length; r++) {
  let ch = s[r];
  if (map[ch]) {
    map[ch]++;
  } else {
    map[ch] = 1;
  }

  let maxFreq = Math.max(...Object.values(map));

  while (r - l + 1 - maxFreq > k) {
    let leftChar = s[l];
    map[leftChar]--;
    l++;

    if (map[leftChar] === 0) {
      delete map[leftChar];
    }
  }

  let length = r - l + 1;
  if (length > maxLength) {
    maxLength = length;
  }
}

console.log(maxLength);
