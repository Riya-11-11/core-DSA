// Implement Queue Using Array

// Perform these operations:

// enqueue(10)
// enqueue(20)
// enqueue(30)

// dequeue()

// enqueue(40)

// front()
// rear()

// Expected:
// Queue = [20,30,40]

// front = 20
// rear = 40

// Create functions:

// enqueue(x)
// dequeue()
// front()
// rear()

// using an array.

let queue = [];

function enqueue(x) {
  return queue.push(x);
}

function dequeue() {
  return queue.shift();
}

function front() {
  console.log(queue[0]);
}

function rear() {
  console.log(queue[queue.length - 1]);
}

enqueue(10);
enqueue(20);
enqueue(30);

dequeue();

enqueue(40);

front();
rear();

console.log(queue);
