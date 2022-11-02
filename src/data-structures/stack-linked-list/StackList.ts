import { ListNode, LinkedListNode } from '../linked-list/LinkedList';

export class StackList<T> {
  top: ListNode<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.top = new LinkedListNode(value);
    } else {
      this.top = null;
    }
  }

  empty(): boolean {
    return this.top === null;
  }

  push(value: T): void {
    let newNode = new LinkedListNode(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): ListNode<T> {
    let poppedNode = this.top;

    if (this.top) {
      this.top = this.top.next;
    }

    return poppedNode;
  }

  peek(): ListNode<T> {
    if (this.top) {
      return this.top;
    } else {
      return null;
    }
  }
}
