class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    let message;
    if (!this.root || !value) {
      message: "You can't search like this";
    }
    let current = this.root;
    while (current && !message) {
      if (value === current.value)
        message = { message: "You can't send the same value with ROOT" };
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        message = { message: "It's founded" };
      }
    }
    return message;
  }
}

var tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.root.right = new Node(15);
console.log(tree.root);
