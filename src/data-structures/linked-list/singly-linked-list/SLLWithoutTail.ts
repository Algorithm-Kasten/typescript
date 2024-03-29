/* Singly Linked List without using a tail poniter */
import { Node, NodeType } from "../../node/list-node/Node";

interface ILinkedList<T> {
  size(): number;
  isEmpty(): boolean;
  pushFront(data: T): void;
  pushBack(data: T): void;
  popFront(): NodeType<T>;
  popBack(): NodeType<T>;
  getFront(): T | null;
  getBack(): T | null;
  reverse(): void;
  insert(index: number, data: T): void;
  traverse(): void;
}

export class SinglyLinkedList<T> implements ILinkedList<T> {
  private length = 0;
  private head: NodeType<T> = null;

  /* O(1) */
  size() {
    return this.length;
  }

  /* O(1) */
  isEmpty() {
    return this.length === 0;
  }

  /* O(1) */
  pushFront(data: T) {
    const newNode = new Node<T>(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  /* O(n), n = number of nodes */
  pushBack(data: T) {
    const newNode = new Node<T>(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr && curr.next != null) {
        curr = curr.next;
      }
      if (curr) curr.next = newNode;
    }

    this.length += 1;
  }

  /* O(1) */
  popFront(): NodeType<T> {
    if (this.isEmpty()) return null;

    const removedNode = this.head;
    this.head = this.head && this.head.next;

    this.length -= 1;
    return removedNode;
  }

  /* O(n), n = number of nodes */
  popBack(): NodeType<T> {
    if (this.isEmpty()) return null;
    let nodeTBDel: NodeType<T> = null;

    if (this.length === 1) {
      nodeTBDel = this.head;
      this.head = null;
      this.length = 0;
      return nodeTBDel;
    }

    let curr = this.head;
    let prev: NodeType<T> = null;

    while (curr && curr.next) {
      prev = curr;
      curr = curr.next;
    }

    if (prev) {
      nodeTBDel = prev.next;
      prev.next = null;
      this.length -= 1;
      return nodeTBDel;
    }

    return null;
  }

  /* O(1) */
  getFront(): T | null {
    if (this.head) return this.head.value;

    return null;
  }

  /* O(n), n = number of nodes */
  getBack(): T | null {
    if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      return curr.value;
    }
    return null;
  }

  /* O(n), n = number of nodes*/
  reverse() {
    let curr = this.head;
    let prev: NodeType<T> = null;
    let next: NodeType<T> = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  /* O(n), n = number of nodes */
  insert(index: number, data: T) {
    if (index < 0 || index > this.length) {
      console.error("Error: invalid index.");
      return;
    }
    if (index === 0) return this.pushFront(data);
    if (index === this.length) return this.pushBack(data);

    let curr = this.head;
    while (curr && index - 1) {
      curr = curr.next;
      --index;
    }

    if (curr) {
      const newNode = new Node<T>(data);
      newNode.next = curr.next;
      curr.next = newNode;
      this.length += 1;
    }
  }

  /* O(n), n = number of nodes */
  traverse() {
    let curr = this.head;
    let str = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }

    console.log(`${str} (${this.length})`);
  }
}
