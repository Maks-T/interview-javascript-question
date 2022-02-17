class Queue {
  oldestIndex = 1;
  newestIndex = 1;
  storage = {};

  enqueue(value) {
    this.storage[this.newestIndex] = value;
    this.newestIndex++;
  }

  dequeue() {
    if (this.newestIndex === this.oldestIndex) return;

    const deletedValue = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;

    return deletedValue;
  }

  size() {
    return this.newestIndex - this.oldestIndex;
  }
}

const queue = new Queue();

queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
queue.enqueue('4');
queue.enqueue('5');
queue.enqueue('6');

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');

console.log(queue);
