let arr = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];

let stack = [];

for (let i = 0; i < arr.length; i++) {
  stack.push(i);
}

while (stack.length > 1) {
  let i = stack.pop();
  let j = stack.pop();

  if (arr[i][j] === 1) {
    stack.push(j);
  } else {
    stack.push(i);
  }
}

let celeb = stack.pop();

for (let i = 0; i < arr.length; i++) {
  if (i !== celeb && (arr[i][celeb] === 0 || arr[celeb][i] === 1)) {
    console.log(-1);
    return;
  }
}

console.log(celeb);


//DIDN'T UNDERSTAND PROPERLY!!!