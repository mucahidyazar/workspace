// piece of data - val
// reference to nect node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("!");
// first.next.next.next = new Node("How");
// first.next.next.next.next = new Node("are");
// first.next.next.next.next.next = new Node("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head; //THIS.TAIL artik THIS.HEAD ile ayni. Bu yuzden asagidaki this.tail.next aslinda HEAD'i degistiriyor
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currrentHead = this.head;
    this.head = currrentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //Calismasi icin this.head'de en az 1 item olmasi gerekir
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > list.length) return null;
    if (!this.head) return undefined;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let next = this.get(index + 1);
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // references old list
      next = node.next;
      // updating new list using variable pass by reference of old list
      // same as this.head.next x i (counter)
      node.next = prev;
      // update variables for next run
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();

//PUSH
list.push("Hello");
list.push("there");
list.push("!");

list.push("I");
list.push("am");
list.push("Mucahid");

list.push("Nice");
list.push("to");
list.push("meet");
list.push("you");
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 10}

//POP
console.log(list.pop());
console.log(list.pop());
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 8}

//SHIFT
list.shift();
list.shift();
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 6}

//UNSHIFT
list.unshift("New Unshift");
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 3}

//GET
console.log(list.get(0)); //New unshift
console.log(list.get(1)); //I
console.log(list.get(2)); //I
console.log(list.get(3)); //am
console.log(list.get(4)); //Mucahid
console.log(list.get(5)); //Nice
console.log(list.get(6)); //to
console.log(list.get(7)); //null

//SET
list.set("Heyyyy", 0);
list.set("Hello World!", 1);
console.log(list.get(0)); //Heyyyy
console.log(list.get(1)); //Hello world

//INSERT
list.insert("New Insert Method", 1);
console.log(list.get(0)); //Heyyyy
console.log(list.get(1)); //New Insert Method

//REMOVE
list.remove(0); //SILINDIHeyyyySILINDI
list.remove(0); //SILINDINew Insert MethodSILINDI
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 6}

//REVERSE => Tersine cevirme 1->2->3->4->5 ken 5->4->3->2->1, yapmak
list.print(); //["I", "am", "Mucahid", "Nice", "to"]
list.reverse();
list.print(); //["to", "Nice", "Mucahid", "am", "I"]
console.log(list); //SinglyLinkedList {head: Node, tail: Node, length: 3}
