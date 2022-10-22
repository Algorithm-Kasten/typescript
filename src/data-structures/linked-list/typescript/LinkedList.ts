type ListNode = LinkedListNode | null;

export default class LinkedListNode {
  readonly value: number;
  next: ListNode;

  /**
   * @param value - readonly number
   * @param next - LinkedListNode | null
   */
  constructor(value: number, next: ListNode = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
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
    let newNode = new LinkedListNode(value, this.head);
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
    let newNode = new LinkedListNode(value);

    if (null === this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.count += 1;
  }

  /**
   * @param value - number
   * @param pos - number (0-based index)
   * @return void
   */
  insert(value: number, pos: number): void {
    const index = pos < 0 ? 0 : pos > this.count ? this.count : pos;

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.count) {
      this.append(value);
    } else {
      let curr: ListNode = this.head;
      const newNode = new LinkedListNode(value);

      while (curr && pos > 1) {
        curr = curr.next;
        --pos;
      }

      newNode.next = curr!.next;
      curr!.next = newNode;
      this.count += 1;
    }
  }

  /**
   * @param value - number
   * @return ListNode - LinkedListNode | null
   */
  delete(value: number): ListNode {
    if (null === this.head) return null;

    let deletedNode: ListNode = null;

    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;

      while (curr.next) {
        if (curr.next.value === value) {
          deletedNode = curr.next;
          curr.next = curr.next.next;
        } else {
          curr = curr.next;
        }
      }

      if (this.tail?.value === value) {
        this.tail = curr;
      }
    }

    this.count -= 1;

    return deletedNode;
  }

  /**
   * @return ListNode - LinkedListNode | null
   */
  deleteHead(): ListNode {
    if (this.head === null) {
      return null;
    }

    let deletedNode = this.head;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.count -= 1;
    return deletedNode;
  }

  /**
   * @return ListNode - LinkedListNode | null
   */
  deleteTail(): ListNode {
    if (this.head === null) {
      return null;
    }

    let deletedNode = this.head;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      while (curr.next) {
        if (null === curr.next.next) {
          deletedNode = curr.next;
          curr.next = null;
        } else {
          curr = curr.next;
        }
      }
      this.tail = curr;
    }

    this.count -= 1;
    return deletedNode;
  }

  /**
   * @param value - number
   * @return ListNode - LinkedListNode | null
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
}
