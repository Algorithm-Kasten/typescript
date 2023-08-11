import { Node, NodeType } from "../../node/list-node/Node";

interface ICircularLinkedList<T> {
  empty(): boolean;
  pushFront(value: T): void;
  pushBack(value: T): void;
  popFront(): NodeType<T>;
  popBack(): NodeType<T>;
  front(): NodeType<T>;
  back(): NodeType<T>;
}

export class CircularLinkedList<T> implements ICircularLinkedList<T> {
  last: NodeType<T>;

  constructor() {
    this.last = null;
  }

  empty(): boolean {
    return null === this.last;
  }

  pushFront(value: T): void {
    let newNode = new Node<T>(value);

    if (null === this.last) {
      this.last = newNode;
      this.last.next = this.last;
    } else {
      newNode.next = this.last.next;
      this.last.next = newNode;
    }
  }

  pushBack(value: T): void {
    this.pushFront(value);
    this.last = this.last!.next;
  }

  popFront(): NodeType<T> {
    if (null === this.last) {
      console.error('List is empty.');
      return null;
    } else {
      let delNode: NodeType<T>;

      if (this.last.next === this.last) {
        this.last = this.last.next = null;
        delNode = null;
      } else {
        delNode = this.last.next;
        this.last.next = delNode!.next;
      }
      return delNode;
    }
  }

  popBack(): NodeType<T> {
    if (null === this.last) {
      console.error('List is empty.');
      return null;
    } else {
      if (this.last === this.last.next) {
        this.last = this.last.next = null;
        return null;
      }

      let curr = this.last.next;

      while (curr && curr.next != this.last) {
        curr = curr.next;
      }

      curr!.next = this.last.next;
      this.last = curr;

      return curr;
    }
  }

  front(): NodeType<T> {
    return this.last?.next;
  }

  back(): NodeType<T> {
    return this.last;
  }

  print(): void {
    if (this.empty()) {
      console.error('List is empty.');
    } else {
      let curr: NodeType<T> = this.last!.next;
      let str: string = '';
      while (curr && curr != this.last) {
        str += `${curr.value} `;
        curr = curr.next;
      }

      str += `${curr!.value} `;
      console.log(str);
    }
  }
}