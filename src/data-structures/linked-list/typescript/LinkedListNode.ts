export default class LinkedListNode {
  value: number;
  next: LinkedListNode | null;

  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}
