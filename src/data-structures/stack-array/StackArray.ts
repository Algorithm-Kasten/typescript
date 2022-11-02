export class StackArray<T> {
  size: number; // total capacity
  top: number; // position
  stack: T[];

  constructor(size: number) {
    this.size = size;
    this.top = 0;
    this.stack = new Array<T>(size);
  }

  full(): boolean {
    return this.size === this.top;
  }

  empty(): boolean {
    return this.top === 0;
  }

  push(val: T): void {
    if (this.full()) {
      console.error('Stack is full');
      return;
    }
    this.stack[this.top] = val;
    this.top += 1;
  }

  pop(): T | undefined {
    if (this.empty()) {
      console.error('Stack is empty');
      return undefined;
    }

    this.top -= 1;
    let val = this.stack[this.top];
    return val;
  }

  peek(): T | undefined {
    if (this.empty()) {
      console.error('Stack is empty');
      return undefined;
    }

    return this.stack[this.top - 1];
  }
}
