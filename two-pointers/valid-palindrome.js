// Given string:

// let s = "A man, a plan, a canal: Panama";

// Ignore:
// spaces
// commas
// symbols
// uppercase/lowercase

// Check:
// Is it palindrome?

// "amanaplanacanalpanama"
// reversed -> same

// Answer:
// true

let s = "A man, a plan, a canal: Panama";
let string = s.toLowerCase();
let l = 0;
let r = string.length - 1;
let isPalindrome = true;

while (l < r) {
  if (!/[a-z0-9]/.test(string[l])) {
    l++;
    continue;
  }

  if (!/[a-z0-9]/.test(string[r])) {
    r--;
    continue;
  }

  if (string[l] !== string[r]) {
    isPalindrome = false;
    break;
  }

  //   if (string[l] === string[r]) {
  //     isPalindrome = true;
  //     l++;
  //     r--;
  //   }

  l++;
  r--;
}

console.log(isPalindrome);
