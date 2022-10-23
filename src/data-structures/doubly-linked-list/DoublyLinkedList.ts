type ListNode = DoublyLinkedListNode | null;

class DoublyLinkedListNode {
  readonly value: number;
  prev: ListNode;
  next: ListNode;

  /**
   * @param value - readonly number
   * @param prev - DoublyLinkedListNode | null
   * @param next - DoublyLinkedListNode | null
   */
  constructor(value: number, prev: ListNode = null, next: ListNode = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  private count: number;
  head: ListNode;
  tail: ListNode;

  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * @param value - number
   * @return void
   */
  prepend(value: number): void {
    let newNode = new DoublyLinkedListNode(value, null, this.head);
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;

    if (null === this.tail) {
      this.tail = newNode;
    }

    this.count += 1;
  }

  /**
   * @param value - number
   * @return void
   */
  append(value: number): void {
    let newNode = new DoublyLinkedListNode(value, this.tail);

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (null === this.head) {
      this.head = newNode;
    }

    this.count += 1;
  }

  /**
   * @param value - number
   * @param pos - number (1-based index)
   * @return void
   */
  insert(value: number, pos: number): void {
    if (this.head === null) {
      this.prepend(value);
      return;
    }

    pos = pos < 1 ? 1 : pos > this.count ? this.count + 1 : pos;

    if (pos === 1) {
      this.prepend(value);
    } else if (pos === this.count + 1) {
      this.append(value);
    } else {
      let curr: ListNode = this.head;
      while (curr && pos > 2) {
        curr = curr.next;
        --pos;
      }

      let newNode = new DoublyLinkedListNode(value, curr, curr?.next);
      curr!.next!.prev = newNode;
      curr!.next = newNode;
      this.count += 1;
    }
  }

  /**
   * @param value - number
   * @return ListNode - DoublyLinkedListNode | null
   */
  delete(value: number): ListNode {
    let deletedNode: ListNode = this.find(value);

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
        if (this.head) this.head.prev = null;
      } else if (deletedNode === this.tail) {
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
      }
    }

    return deletedNode;
  }

  /**
   * @return ListNode - DoublyLinkedListNode | null
   */
  deleteHead(): ListNode {
    if (this.head === null) {
      return null;
    }

    let deletedNode: ListNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    this.head = this.head.next;
    if (this.head) this.head.prev = null;

    this.count -= 1;
    return deletedNode;
  }

  /**
   * @return ListNode - DoublyLinkedListNode | null
   */
  deleteTail(): ListNode {
    if (this.tail === null) {
      return null;
    }

    let deletedNode: ListNode = null;

    if (this.head === this.tail) {
      deletedNode = this.tail;
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    deletedNode = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;

    this.count -= 1;
    return deletedNode;
  }

  /**
   * @param value - number
   * @return ListNode - DoublyLinkedListNode | null
   */
  find(value: number): ListNode {
    let curr: ListNode = this.head;

    while (curr) {
      if (curr.value === value) {
        return curr;
      }

      curr = curr.next;
    }
    return null;
  }

  /**
   * @return boolean
   */
  empty(): boolean {
    return this.head === null;
  }

  /**
   * @return void
   */
  print(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: ListNode = this.head;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }

    console.log(str);
  }

  /**
   * @return void
   */
  printReverse(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: ListNode = this.tail;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.prev;
    }

    console.log(str);
  }
}
