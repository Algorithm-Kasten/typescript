import { ListNode, LinkedListNode } from '../linked-list/LinkedList';

export class QueueList<T> {
  front: ListNode<T>;
  rear: ListNode<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.front = new LinkedListNode(value);
      this.front.next = this.rear;
      this.rear = this.front;
    } else {
      this.front = null;
      this.rear = null;
    }
  }

  empty(): boolean {
    return this.front == null;
  }

  enqueue(value: T): void {
    let newNode = new LinkedListNode(value);

    if (null == this.front) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
    } else {
      this.rear!.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(): ListNode<T> {
    let frontNode = this.front;

    if (this.front) {
      this.front = this.front.next;
    }

    return frontNode;
  }

  getFront(): ListNode<T> {
    return this.front;
  }

  getRear(): ListNode<T> {
    return this.rear;
  }

  print(): void {
    if (this.front) {
      let curr: ListNode<T> = this.front;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
    console.log();
  }
}
