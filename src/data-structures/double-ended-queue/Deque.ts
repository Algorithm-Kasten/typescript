import {
  ListNode,
  DoublyLinkedListNode,
} from '../doubly-linked-list/DoublyLinkedList';

export class Deque<T> {
  front: ListNode<T>;
  rear: ListNode<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.front = new DoublyLinkedListNode(value);
      this.rear = this.front;
      this.front.next = this.rear;
      this.rear.prev = this.front;
    } else {
      this.front = null;
      this.rear = null;
    }
  }

  empty(): boolean {
    return null === this.front;
  }

  addFront(value: T): void {
    let newNode = new DoublyLinkedListNode(value);

    if (null == this.front) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
      this.rear.prev = this.front;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
  }

  addRear(value: T): void {
    let newNode = new DoublyLinkedListNode(value);

    if (null == this.rear) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
      this.rear.prev = this.front;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }
  }

  removeFront(): ListNode<T> {
    let node = this.front;

    if (this.front) {
      this.front = this.front.next;
      if (this.front) {
        this.front.prev = null;
      } else {
        this.front = this.rear = null;
      }
    }

    return node;
  }

  removeRear(): ListNode<T> {
    let node = this.rear;

    if (this.rear) {
      this.rear = this.rear.prev;
      if (this.rear) {
        this.rear.next = null;
      } else {
        this.front = this.rear = null;
      }
    }

    return node;
  }

  getFront(): ListNode<T> {
    return this.front;
  }

  getRear(): ListNode<T> {
    return this.rear;
  }

  print(): void {
    let str = '';
    if (this.front) {
      let curr: ListNode<T> = this.front;
      while (curr) {
        str += `${curr.value} `;
        curr = curr.next;
      }
    }
    console.log(str);
  }
}
