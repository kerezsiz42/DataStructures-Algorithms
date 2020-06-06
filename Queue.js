const LinkedList = require('./LinkedList');

class Queue extends LinkedList {
  constructor() {
    super();
  }
  enqueue(value) {
    this.append(value);
  }
  dequeue() {
    return this.removeFirst();
  }
  peek() {
    if(this.head) {
      return this.head.value;
    }
    return undefined;
  }
}

module.exports = Queue;