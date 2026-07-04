// Generate all valid parentheses (n = 3)
// Output:
// ((()))
// (()())
// (())()
// ()(())
// ()()()

// 👉 Same problem you were practicing — but bigger input.

let n = 3;
let ans = [];

function genValidParantheses(openCount,closeCount,ans) {
    if (openCount===n && closeCount===n) {
        console.log(ans.join(""));
        return;
    }

    if (openCount<n) {
        ans.push("(");
        genValidParantheses(openCount+1, closeCount, ans);

        //backtrack
        ans.pop();
    }

    if (closeCount<openCount) {
        ans.push(")");
        genValidParantheses(openCount,closeCount+1, ans);

        //backtrack
        ans.pop();
    }
}

genValidParantheses(0,0,ans)