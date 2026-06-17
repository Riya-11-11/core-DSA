// Check Palindrome Using Recursion

// Input:
// "madam"

// Output:
// true

// Input:
// "hello"

// Output:
// false

let str = "madam";

let l = 0;
let r = str.length - 1;

function palindrome(str, l, r) {
  if (l >= r) {
    return true;
  }

  if (str[l] !== str[r]) {
    return false;
  }

  return palindrome(str, l + 1, r - 1);
}

console.log(palindrome(str, l, r));
