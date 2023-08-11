import { Node, NodeType } from "../../node/list-node/Node";

interface IDoublyLinkedList<T> {
  empty(): boolean;
  prepend(value: T): void;
  append(value: T): void;
  insert(value: T, index: number): void;
  deleteHead(): NodeType<T>;
  deleteTail(): NodeType<T>;
  removeValue(value: T): NodeType<T>;
  erase(index: number): NodeType<T>;
  reverse(): void;
  find(value: T): NodeType<T>;
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private count: number;
  head: NodeType<T>;
  tail: NodeType<T>;

  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(value: T): void {
    let newNode = new Node<T>(value);

    if (null === this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.count += 1;
  }

  append(value: T): void {
    let newNode = new Node<T>(value);

    if (null === this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.count += 1;
  }

  insert(value: T, index: number): void {
    if (this.head === null) {
      this.prepend(value);
      return;
    }

    index = index < 0 ? 0 : index > this.count ? this.count : index;

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.count) {
      this.append(value);
    } else {
      let curr: NodeType<T> = this.head;
      while (curr && index > 1) {
        curr = curr.next;
        --index;
      }

      let newNode = new Node<T>(value);
      newNode.prev = curr;
      newNode.next = curr.next;

      if (curr && curr.next) {
        curr.next.prev = newNode;
        curr.next = newNode;
      }
      this.count += 1;
    }
  }

  removeValue(value: T): NodeType<T> {
    let deletedNode: NodeType<T> = this.find(value);

    if (deletedNode) {
      if (deletedNode.prev && deletedNode.next) {
        deletedNode.prev.next = deletedNode.next;
        deletedNode.next.prev = deletedNode.prev;
        this.count -= 1;
      } else if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (deletedNode === this.head) {
        this.head = this.head.next;
        this.head && (this.head.prev = null);
      } else if (deletedNode === this.tail) {
        this.tail = this.tail.prev;
        this.tail && (this.tail.next = null);
      }
    }

    return deletedNode;
  }

  deleteHead(): NodeType<T> {
    if (this.head === null) {
      return null;
    }

    let deletedNode: NodeType<T> = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    this.head = this.head.next;
    this.head && (this.head.prev = null);

    this.count -= 1;
    return deletedNode;
  }

  deleteTail(): NodeType<T> {
    if (this.tail === null) {
      return null;
    }

    let deletedNode: NodeType<T> = null;

    if (this.head === this.tail) {
      deletedNode = this.tail;
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    deletedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail && (this.tail.next = null);

    this.count -= 1;
    return deletedNode;
  }

  erase(index: number): NodeType<T> {
    let deletedNode = null;

    if (0 === index) {
      return this.deleteHead();
    }
    if (this.count - 1 === index) {
      return this.deleteTail();
    }

    let curr: NodeType<T> = this.head;
    while (curr && index > 0) {
      curr = curr.next;
      --index;
    }

    deletedNode = curr;
    if (curr && curr.prev && curr.next) {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }

    return deletedNode;
  }

  reverse(): void {
    let currHead = this.head;
    let currTail = this.tail;

    while (currHead !== currTail) {
      if (currHead && currTail) {
        [currHead.value, currTail.value] = [currTail.value, currHead.value];
      }

      currHead && (currHead = currHead.next);
      currTail && (currTail = currTail.prev);
    }
  }

  find(value: T): NodeType<T> {
    let curr: NodeType<T> = this.head;

    while (curr) {
      if (curr.value === value) {
        return curr;
      }

      curr = curr.next;
    }
    return null;
  }

  empty(): boolean {
    return this.head === null;
  }

  print(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: NodeType<T> = this.head;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }

    console.log(str);
  }

  printReverse(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: NodeType<T> = this.tail;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.prev;
    }

    console.log(str);
  }
}