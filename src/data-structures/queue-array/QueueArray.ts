export class QueueArray<T> {
  size: number; // total capacity
  front: number;
  rear: number;
  queue: (T | undefined)[];

  constructor(size: number) {
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.queue = new Array<T>(size);

    if(Object.seal) {
      this.queue.fill(undefined);
      Object.seal(this);
    }
  }

  full(): boolean {
    return this.size === this.rear;
  }

  empty(): boolean {
    return this.front === this.rear;
  }

  enqueue(val: T): void {
    if (this.full()) {
      throw new Error('Queue is full');
    }

    this.queue[this.rear] = val;
    this.rear += 1;
  }

  dequeue(): T | undefined {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }

    let val = this.queue[this.front];
    this.front += 1;
    return val;
  }

  getFront(): T | undefined {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }

    return this.queue[this.front];
  }

  getRear(): T | undefined {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }

    return this.queue[this.rear - 1];
  }
}
