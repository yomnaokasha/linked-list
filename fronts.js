class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  addFont(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return node;
  }
  removeFront() {
    if (this.head == null) {
      return null;
    }
    this.head = this.head.next;
    return this.head;
  }
  front() {
    if (this.head == null) {
      return null;
    }
    return this.head.value;
  }
  display() {
    let result = "[ ";
    let head = this.head;
    while (head != null) {
      result += head.value + ", ";
      head = head.next;
    }
    result += "]";
    return result;
  }
}

const list = new SLL();
list.addFont(6);
list.addFont(7);
list.addFont(8);
console.log(list.front());
// console.log(list.removeFront());
// console.log(list);
console.log(list.display());
