// Given:
// let str = "()[]{}";

// Output:
// true

// ) matches (
// ] matches [
// } matches {

let str = "()[]{}";
let stack = [];

for (let i = 0; i<str.length; i++) {
  let ch = str[i];
  let top = stack[stack.length - 1];

  if (ch === "(" || ch === "{" || ch === "[") {
    stack.push(ch);
  } else {
    //closing bracket

    if (stack.length === 0) {
      console.log(false);
      return;
    }

    if (
      (top === "(" && ch === ")") ||
      (top === "{" && ch === "}") ||
      (top === "[" && ch === "]")
    ) {
      stack.pop();
    } else {
      console.log(false);
      return;
    }
  }
}

console.log(stack.length === 0);
