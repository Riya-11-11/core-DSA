// 1. Generate All Valid Parentheses (not count)
// Problem:

// Instead of returning 2, return all strings:

// For n = 2:
// (()) 
// ()()

// 👉 Pattern test:
// same rules as your function
// but instead of count, you build a string

let n=2;
let ans = [];

function genAllParantheses(openCount, closeCount, ans) {
    if (openCount===n && closeCount===n) {
        console.log(ans);
        return;
    }
    if (openCount<n) {
        ans.push("(");
        genAllParantheses(openCount+1, closeCount, ans);

        //backtrack
        ans.pop();
    }

    if (closeCount<openCount) {
        ans.push(")");
        genAllParantheses(openCount, closeCount+1, ans);

        //backtrack
        ans.pop();
    }
}

genAllParantheses(0,0,ans);
