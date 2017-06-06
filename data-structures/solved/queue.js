/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  this._storage = {};
  this._count = 0;
  this._capacity = capacity;
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  if (this._count + 1 > this._capacity) {
    return "failed to enqueue. Storage is at capacity";
  }
  this._storage[this._count++] = value;
  return this._count;
};
// Time complexity:

Queue.prototype.dequeue = function() {
  // implement me...
  if (this._count === 0) {
    return "Nothing to dequeue.";
  }
  const dequeued = this._storage[0];
  const oldStorage = Object.assign({}, this._storage);
  let newStorage = {};

  Object.keys(oldStorage).map((key, i) => {
    if (i > 0) {
      newStorage[i - 1] = oldStorage[i];
    }
  });
  --this._count;
  this._storage = newStorage;
  return dequeued;
};
// Time complexity:

Queue.prototype.peek = function() {
  // implement me...
  return this._storage[0];
};

Queue.prototype.count = function() {
  // implement me...
  return this._count;
};
// Time complexity:

const testQueue = new Queue(3);

const t1 = testQueue.enqueue("one");
console.log("t1:", t1);
console.log("count:", testQueue.count(), "\n");

const t2 = testQueue.enqueue("two");
console.log("t2:", t2);
console.log("count:", testQueue.count(), "\n");

const d1 = testQueue.dequeue();
console.log("d1:", d1);
console.log("count:", testQueue.count(), "\n");

console.log("peek:", testQueue.peek());
/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
