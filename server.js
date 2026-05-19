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
 console.log(count);
 let max = count;

 for (let r = 1; r <= n-k; r++) {
    
    
 }

 