export class QueueArray<T> {
  size: number; // total capacity
  front: number;
  rear: number;
  queue: T[];

  constructor(size: number) {
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.queue = new Array<T>(size);
  }

  full(): boolean {
    return this.size === this.rear;
  }

  empty(): boolean {
    return this.front === this.rear;
  }

  enqueue(val: T): void {
    if (this.full()) {
      console.error('Queue is full');
      return;
    }
    this.queue[this.rear] = val;
    this.rear += 1;
  }

  dequeue(): T | undefined {
    if (this.empty()) {
      console.error('Queue is empty');
      return undefined;
    }

    let val = this.queue[this.front];
    this.front += 1;
    return val;
  }

  getFront(): T | undefined {
    if (this.empty()) {
      console.error('Queue is empty');
      return undefined;
    }

    return this.queue[this.front];
  }

  getRear(): T | undefined {
    if (this.empty()) {
      console.error('Queue is empty');
      return undefined;
    }

    return this.queue[this.rear - 1];
  }
}
