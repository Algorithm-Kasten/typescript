export class StackArray<T> {
  size: number; // total capacity
  top: number; // position
  stack: T[];

  /**
   *
   * @param size - default array size
   */
  constructor(size: number) {
    this.size = size;
    this.top = 0;
    this.stack = new Array<T>(size);
  }

  /**
   * Returns true if stack is full else false.
   * @returns boolean
   */
  full(): boolean {
    return this.size === this.top;
  }

  /**
   * Returns true if stack is empty else false.
   * @returns boolean
   */
  empty(): boolean {
    return this.top === 0;
  }

  /**
   * Add an element to the top of a stack.
   * @param val - T
   * @returns void
   */
  push(val: T): void {
    if (this.full()) {
      console.error('Stack is full');
      return;
    }
    this.stack[this.top] = val;
    this.top += 1;
  }

  /**
   * Remove and return the top element in the stack. Returns _undefined_ if stack is empty.
   * @returns T | undefined
   */
  pop(): T | undefined {
    if (this.empty()) {
      console.error('Stack is empty');
      return undefined;
    }

    this.top -= 1;
    let val = this.stack[this.top];
    return val;
  }

  /**
   * Get the value of the top element without removing it.
   * @returns T | undefined
   */
  peek(): T | undefined {
    if (this.empty()) {
      console.error('Stack is empty');
      return undefined;
    }

    return this.stack[this.top - 1];
  }
}
