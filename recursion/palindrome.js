// Check Palindrome Using Recursion

// Input:
// "madam"

// Output:
// true

// Input:
// "hello"

// Output:
// false

let str = "hello";
let n = str.length;

let l = 0;
let r = n - 1;

function palindrome(str, n, l, r) {
  if (l >= r) {
    return true;
  }

  if (str[l] !== str[r]) {
    return false;
  }

  return palindrome(str, n - 1, l + 1, r - 1);
}

console.log(palindrome(str, n, l, r));
