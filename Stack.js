const LinkedList = require('./LinkedList');

class Stack extends LinkedList {
  constructor() {
    super();
  }
  push(value) {
    this.prepend(value);
  }
  pop() {
    return this.removeFirst();
  }
  peek() {
    if(this.head) {
      return this.head.value;
    }
    return undefined;
  }
}

module.exports = Stack;