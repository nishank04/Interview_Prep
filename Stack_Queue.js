//Stack

class Stack {
 constructor() {
   this.stack = [];
 }
 push(item) {
   this.stack.push(item);
 }
 pop() {
   this.stack.pop();
 }
}

//Queue
function Queue() {
  this.queue = {};
  this.tail = 0;
  this.head = 0;
}

// Add an element to the end of the queue.
Queue.prototype.enqueue = function(element) {
  this.queue[this.tail++] = element;
}

// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
  if (this.tail === this.head)
      return undefined

  var element = this.queue[this.head];
  delete element;
  return element;
}