// Find Smallest Letter Greater Than Target
// letters = ['c','f','j']
// target = 'a'

// Output:
// 'c'

letters = ["c", "f", "j"];
target = "a";

let s = 0;
let e = letters.length - 1;
let ans;

while (s <= e) {
  let m = Math.floor((s + e) / 2);

  if (letters[m] > target) {
    ans = letters[m];
    e = m - 1; // search left for a smaller valid answer
  } else {
    s = m + 1; // need a larger letter
  }
}

console.log(ans);
