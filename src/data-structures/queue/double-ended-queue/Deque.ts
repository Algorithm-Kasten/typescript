import { Node, NodeType } from "../../node/list-node/Node";

export class Deque<T> {
  front: NodeType<T>;
  rear: NodeType<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.front = new Node(value);
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
    let newNode = new Node(value);

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
    let newNode = new Node(value);

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

  removeFront(): NodeType<T> {
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

  removeRear(): NodeType<T> {
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

  getFront(): NodeType<T> {
    return this.front;
  }

  getRear(): NodeType<T> {
    return this.rear;
  }

  print(): void {
    let str = '';
    if (this.front) {
      let curr: NodeType<T> = this.front;
      while (curr) {
        str += `${curr.value} `;
        curr = curr.next;
      }
    }
    console.log(str);
  }
}
