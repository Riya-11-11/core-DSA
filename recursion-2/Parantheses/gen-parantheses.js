// Input:
// n = 2

// Meaning:
// 2 opening brackets
// 2 closing brackets

// Output:
// (())
// ()()

// Not:
// ))((
// ())(
// (()(

// because they are invalid.

let n = 2;
let ans = [];

function genParantheses(ans, openCount, closeCount) {
  if (openCount === n && closeCount === n) {
    console.log(ans);
    return;
  }

  //include open
  if (openCount < n) {
    ans.push("(");
    genParantheses(ans, openCount + 1, closeCount);

    //backtrack
    ans.pop();
  }

  //include close
  if (closeCount < openCount) {
    ans.push(")");
    genParantheses(ans, openCount, closeCount + 1);

    //backtrack
    ans.pop();
  }
}

genParantheses(ans, 0, 0);
