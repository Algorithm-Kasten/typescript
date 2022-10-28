type ListNode<T> = DoublyLinkedListNode<T> | null;

class DoublyLinkedListNode<T> {
  value: T;
  prev: ListNode<T>;
  next: ListNode<T>;

  /**
   * @param value - Type
   * @param prev - DoublyLinkedListNode | null
   * @param next - DoublyLinkedListNode | null
   */
  constructor(value: T, prev: ListNode<T> = null, next: ListNode<T> = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList<T> {
  private count: number;
  head: ListNode<T>;
  tail: ListNode<T>;

  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * @param value - Type
   * @return void
   */
  prepend(value: T): void {
    let newNode = new DoublyLinkedListNode<T>(value, null, this.head);
    this.head = newNode;

    if (null === this.tail) {
      newNode.next = this.tail;
      this.tail = newNode;
      this.tail.next = null;
      this.tail.prev = this.head;
    }

    this.count += 1;
  }

  /**
   * @param value - Type
   * @return void
   */
  append(value: T): void {
    let newNode = new DoublyLinkedListNode<T>(value, this.tail);
    this.tail && (this.tail.next = newNode);
    this.tail = newNode;

    if (null === this.head) {
      this.head = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }

    this.count += 1;
  }

  /**
   * @param value - Type
   * @param index - number (1-based index)
   * @return void
   */
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
      let curr: ListNode<T> = this.head;
      while (curr && index > 1) {
        curr = curr.next;
        --index;
      }

      let newNode = new DoublyLinkedListNode<T>(value, curr, curr?.next);
      if (curr && curr.next) {
        curr.next.prev = newNode;
        curr.next = newNode;
      }
      this.count += 1;
    }
  }

  /**
   * @param value - T
   * @return ListNode - DoublyLinkedListNode | null
   */
  removeValue(value: T): ListNode<T> {
    let deletedNode: ListNode<T> = this.find(value);

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

  /**
   * @return ListNode - DoublyLinkedListNode | null
   */
  deleteHead(): ListNode<T> {
    if (this.head === null) {
      return null;
    }

    let deletedNode: ListNode<T> = this.head;

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

  /**
   * @return ListNode - DoublyLinkedListNode | null
   */
  deleteTail(): ListNode<T> {
    if (this.tail === null) {
      return null;
    }

    let deletedNode: ListNode<T> = null;

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

  /**
   * @param index - number (0-based)
   * @returns ListNode
   */
  erase(index: number): ListNode<T> {
    let deletedNode = null;

    if (0 === index) {
      return this.deleteHead();
    }
    if (this.count - 1 === index) {
      return this.deleteTail();
    }

    let curr: ListNode<T> = this.head;
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

  /**
   * Reverses the list
   */
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

  /**
   * @param value - Type
   * @return ListNode - DoublyLinkedListNode | null
   */
  find(value: T): ListNode<T> {
    let curr: ListNode<T> = this.head;

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
    let curr: ListNode<T> = this.head;
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
    let curr: ListNode<T> = this.tail;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.prev;
    }

    console.log(str);
  }
}

let list = new DoublyLinkedList<string>();
list.prepend('abc');
list.prepend('def');
list.printReverse();
list.print();
