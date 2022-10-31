import { ListNode, LinkedListNode } from '../linked-list/LinkedList';

export class StackList<T> {
  top: ListNode<T>; // position

  constructor(value: T | null = null) {
    if (value) {
      this.top = new LinkedListNode(value);
    } else {
      this.top = null;
    }
  }

  /**
   * Returns true if stack is empty else false.
   * @returns boolean
   */
  empty(): boolean {
    return this.top === null;
  }

  /**
   * Add an element to the top of a stack.
   * @param val - T
   * @returns void
   */
  push(value: T): void {
    let newNode = new LinkedListNode(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   * Remove and return the top element in the stack. Returns _undefined_ if stack is empty.
   * @returns ListNode<T>
   */
  pop(): ListNode<T> {
    let poppedNode = this.top;

    if (this.top) {
      this.top = this.top.next;
    }

    return poppedNode;
  }

  /**
   * Get the value of the top element without removing it.
   * @returns ListNode<T>
   */
  peek(): ListNode<T> {
    if (this.top) {
      return this.top;
    } else {
      return null;
    }
  }
}
