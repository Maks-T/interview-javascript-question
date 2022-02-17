class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertHead(value) {
    this.size++;

    const listNode = new ListNode(value);

    if (!this.tail) {
      this.tail = listNode;
      return this;
    }

    if (!this.head) {
      this.head = listNode;
      this.tail.next = listNode;
      return this;
    }

    this.head.next = listNode;

    this.head = listNode;

    return this;
  }

  insertTail(value) {
    this.size++;

    if (!this.tail) {
      const listNode = new ListNode(value);
      this.tail = listNode;
      return this;
    }

    const listNode = new ListNode(value, this.tail);

    this.tail = listNode;

    return this;
  }

  print() {
    let current = this.tail;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  getAt(index) {
    let curIndex = 0;

    let current = this.tail;

    while (current) {
      if (curIndex === index) return current.value;

      current = current.next;
      curIndex++;
    }

    return undefined;
  }

  removeTail() {
    this.tail = this.tail.next;
    this.size--;
  }

  removeHead() {
    let curIndex = 0;

    let current = this.tail;
    this.size--;
    while (current) {
      curIndex++;

      if (curIndex === this.size) {
        current.next = null;
        return;
      }

      current = current.next;
    }

    return false;
  }

  size() {
    return this.size;
  }
}

const linkedList = new LinkedList();

linkedList.insertHead('1');
linkedList.insertHead('2');

linkedList.insertTail('0');
linkedList.insertTail('-1');

linkedList.removeHead();
linkedList.removeHead();
linkedList.removeHead();
linkedList.removeHead();

linkedList.print();
