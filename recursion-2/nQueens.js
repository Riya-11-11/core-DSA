//initializing our board as empty...
// console.log(board[0][1]); //row[0], col[1]

let board = [
  [".", ".", ".", "."],
  [".", ".", ".", "."],
  [".", ".", ".", "."],
  [".", ".", ".", "."],
];

let n = 4;

let ans = [];

//ISSAFE FUNCTION..........

function isSafe(board, row, col, n) {
  //horizontally
  for (let j = 0; j < n; j++) {
    if (board[row][j] === "Q") {
      return false;
    }
  }

  //vertically
  for (let i = 0; i < n; i++) {
    if (board[i][col] === "Q") {
      return false;
    }
  }

  //left diagonal;
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  //right diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  return true;
}

//RECURSION FUNCTION........

function nQueens(board, row, n, ans) {
  if (row === n) {
    ans.push(board.map((row) => [...row])); //deep copy
    return;
  }

  for (let j = 0; j < n; j++) {
    //j ---> col
    if (isSafe(board, row, j, n)) {
      //place Q
      board[row][j] = "Q";
      nQueens(board, row + 1, n, ans);

      //backtracking
      board[row][j] = ".";
    }
  }
}

nQueens(board, 0, n, ans);
console.log(ans);
