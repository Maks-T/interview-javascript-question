class Stack {
  size = 0;
  storage = {};

  push(value) {
    let size = this.size++;
    this.storage[size] = value;
  }

  pop() {
    if (this.size === 0) return;
    this.size--;
    const value = this.storage[this.size];
    delete this.storage[this.size];

    return value;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  count() {
    return this.size;
  }
}

const stack = new Stack();

stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');
stack.push('6');
console.log(stack);
console.log('stack.peek()', stack.peek());
stack.push('7');
stack.push('8');
console.log('stack.peek()', stack.peek());
