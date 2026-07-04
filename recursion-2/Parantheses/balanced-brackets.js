// 2. Balanced Brackets (General case)
// Problem:
// Check if a string is valid:

// "(()())" → true
// "(()" → false
// ")(" → false

// Pattern:
// stack OR open/close counter logic

let str = "()()}";
let ans = [];

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch === "(" || ch === "{" || ch === "[") {
    ans.push(ch);
  } else {
    //closing-bracket

    if (ans.length === 0) {
      console.log(false);
      return;
    }

    let top = ans[ans.length - 1];

    if (
      (top === "(" && ch === ")") ||
      (top === "{" && ch === "}") ||
      (top === "[" && ch === "]")
    ) {
      ans.pop();
    } else {
      console.log(false);
      return;
    }
  }
}

console.log(ans.length === 0);
