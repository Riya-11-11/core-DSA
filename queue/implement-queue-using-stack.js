let stack1 = []; //behaves like queue
let stack2 = []; //using as a helper

function enqueue(x) {
  while (stack1.length > 0) {
    let poppedVal = stack1.pop();
    stack2.push(poppedVal);
  }

  stack1.push(x);

  while (stack2.length > 0) {
    let popped = stack2.pop();
    stack1.push(popped);
  }
}

function dequeue() {
  return stack1.pop();
}

enqueue(10);
enqueue(20);
enqueue(30);

dequeue();

enqueue(40);
dequeue();

console.log(stack1);
