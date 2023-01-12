class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let list = [];
    let head = this.head;

    while (this.head) {
      if (this.head.val === null) break;
      list.push(this.head.val);
      this.head = this.head.next;
    }
    this.head = head;
    console.log(list);
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      oldHead.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (!foundNode) return null;
    node.val = value;
    return node;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    var newNode = new Node(value);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    (nextNode.prev = prevNode), (prevNode.next = nextNode);
    (removedNode.prev = null), (removedNode.next = null);
    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(6);
list.push(7);
list.print(); //[1, 2, 3, 4, 6, 7]
console.log(list);

list.pop();
list.print(); //[1, 2, 3, 4, 6]
console.log(list);

list.shift();
list.print(); //[2, 3, 4, 6]
console.log(list);

list.unshift(1);
list.print(); //[1, 2, 3, 4, 6]
console.log(list);

console.log(list.get(1)); //2
console.log(list.get(4)); //6

list.set(7, 4); //(value, index)
console.log(list.get(4)); //7

list.print(); //[1, 2, 3, 4, 6]
list.insert(5, 4);
list.print(); //[1, 2, 3, 4, 5, 6]

list.remove(3);
list.print(); //[1, 2, 3, 5, 6]
