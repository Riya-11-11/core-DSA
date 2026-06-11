let queue1 = [];
let queue2 = [];

function pushElem(x) {
  while (queue1.length > 0) {
    let poppedVal = queue1.shift();
    queue2.push(poppedVal);
  }
  queue1.push(x);

  while (queue2.length > 0) {
    let popped = queue2.shift();
    queue1.push(popped);
  }
}

function popElem() {
  return queue1.shift();
}

function topElem() {
  return queue1[0];
}

pushElem(30);
pushElem(40);
pushElem(50);

popElem();

console.log(topElem());
console.log(queue1);
