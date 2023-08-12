import { Node, NodeType } from "../../node/list-node/Node";

export class CircularQueueLinkedList<T> {
  front: NodeType<T>;
  rear: NodeType<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.front = new Node(value);
      this.front.next = this.rear;
      this.rear = this.front;
    } else {
      this.front = null;
      this.rear = null;
    }
  }

  empty(): boolean {
    return this.front === null;
  }

  enqueue(value: T): void {
    let newNode = new Node(value);

    if (null === this.front) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
      this.rear.next = this.front;
    } else {
      newNode.next = this.front;
      this.rear!.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(): NodeType<T> {
    let frontNode = this.front;

    if (this.front === this.rear) {
      this.front = this.rear = null;
      return null;
    }

    if (this.front) {
      this.front = this.front.next;
      this.rear!.next = this.front;
    }

    return frontNode;
  }

  getFront(): NodeType<T> {
    return this.front;
  }

  getRear(): NodeType<T> {
    return this.rear;
  }

  print(): void {
    let curr: NodeType<T> = this.front;
    if (this.front) {
      while (curr && curr !== this.rear) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
    if (curr) console.log(curr.value);
  }
}
