class Node {
	constructor(value) {
		this.value = value,
		this.next = null
	}
}

class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0
  }
  isEmpty() {
    if(this.length) {
      return false;
    } else {
      return true;
    }
  }
  append(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  print() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }
    if(index <= 0) {
      return this.prepend(value);
    }
    const currentNode = this.traverseToIndex(index - 1);
    const node = new Node(value);
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    if(index < 0 || index > this.length - 1) {
      return undefined;
    }
    let currentNode = this.head;
    while(index != 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }
  removeLast() {
    if(this.isEmpty()) {
      return undefined;
    }
    if(this.length == 1) {
      this.tail = null;
    }
    const valueOfNodeToBeRemoved = this.head.value;
    this.head = this.head.next;
    this.length--;
    return valueOfNodeToBeRemoved;
  }
  removeFirst() {
    if(this.isEmpty()) {
      return undefined;
    }
    if(this.length == 1) {
      this.tail = null;
    }
    const valueOfNodeToBeRemoved = this.head.value;
    this.head = this.head.next;
    this.length--;
    return valueOfNodeToBeRemoved;
  }
  remove(index) {
    if(index == 0) {
      return this.removeFirst();
    }
    if(index >= this.length || index < 0) {
      return undefined;
    }
    const currentNode = this.traverseToIndex(index - 1);
    const valueOfNodeToBeRemoved = currentNode.next.value;
    currentNode.next = currentNode.next.next;
    this.length--;
    return valueOfNodeToBeRemoved;
  }
  reverse() {
    if(this.length == 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }
    this.tail.next = null;
    this.head = first;
    return this;
  }
}

module.exports = LinkedList;