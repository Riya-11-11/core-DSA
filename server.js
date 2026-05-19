// Q1️⃣ Maximum Number of Vowels in Substring of Size K

// (Fixed window + counting)

// s = "abciiidef"
// k = 3

// Find:
// maximum number of vowels in any substring of length k

let s = "abciiidef";
let k = 3;
let count = 0;
let n = s.length;

for (let i = 0; i < k; i++) {
  let ch = s[i];

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    count++;
  }
}

let max = count;

for (let r = 1; r <= n - k; r++) {
  if (
    s[r - 1] === "a" ||
    s[r - 1] === "e" ||
    s[r - 1] === "i" ||
    s[r - 1] === "o" ||
    s[r - 1] === "u"
  ) {
    count--;
  }

  if (
    s[r + k - 1] === "a" ||
    s[r + k - 1] === "e" ||
    s[r + k - 1] === "i" ||
    s[r + k - 1] === "o" ||
    s[r + k - 1] === "u"
  ) {
    count++;
  }

  if (count > max) {
    max = count;
  }
}

console.log(max);
