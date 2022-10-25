type ListNode<Type> = LinkedListNode<Type> | null;

class LinkedListNode<Type> {
  readonly value: Type;
  next: ListNode<Type>;

  /**
   * @param value - readonly number
   * @param next
   */
  constructor(value: Type, next: ListNode<Type> = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<Type> {
  private count: number;
  head: ListNode<Type>;
  tail: ListNode<Type>;

  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * @returns number - a total number of nodes in the LinkedList
   */
  size(): number {
    return this.count;
  }

  /**
   * @returns boolean
   */
  empty(): boolean {
    return this.count === 0;
  }

  /**
   * @param index - number (1-based)
   * @returns ListNode
   */
  getNode(index: number): ListNode<Type> {
    let curr: ListNode<Type> = this.head;

    let i = 1;
    while (curr && i < index) {
      curr = curr.next;
      --index;
    }

    return curr;
  }

  /**
   * @param value - number
   * @returns void
   */
  prepend(value: Type): void {
    let newNode = new LinkedListNode<Type>(value, this.head);
    this.head = newNode;

    if (null === this.tail) {
      this.tail = newNode;
    }

    this.count += 1;
  }

  /**
   * @returns ListNode
   */
  deleteHead(): ListNode<Type> {
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
   * @param value - number
   * @returns void
   */
  append(value: Type): void {
    let newNode = new LinkedListNode<Type>(value);

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
   * @returns ListNode
   */
  deleteTail(): ListNode<Type> {
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
   * Returns the front item.
   * @returns ListNode
   */
  front(): ListNode<Type> {
    return this.head;
  }

  /**
   * Returns the last item.
   * @returns ListNode
   */
  back(): ListNode<Type> {
    return this.tail;
  }

  /**
   * @param value - number
   * @param index - number (0-based)
   */
  insert(value: Type, index: number): void {
    index = index < 0 ? 0 : index > this.count ? this.count : index;

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.count) {
      this.append(value);
    } else {
      let curr: ListNode<Type> = this.head;
      const newNode = new LinkedListNode<Type>(value);

      while (curr && index > 1) {
        curr = curr.next;
        --index;
      }

      newNode.next = curr!.next;
      curr!.next = newNode;
      this.count += 1;
    }
  }

  /**
   * Removes node at a given index.
   *
   * @param index - 0-based
   * @returns ListNode
   */
  erase(index: number): ListNode<Type> {
    if (index === 0) {
      return this.deleteHead();
    } else if (index === this.count - 1) {
      return this.deleteTail();
    } else {
      let deletedNode: ListNode<Type> = null;
      let curr: ListNode<Type> = this.head;

      for (let i = 1; curr && i < index; ++i) {
        curr = curr.next;
      }

      if (curr?.next) {
        deletedNode = curr.next;
        curr.next = curr.next.next;
      }

      this.count -= 1;
      return deletedNode;
    }
  }

  /**
   * Reverse the list
   */
  reverseIter(): void {
    let curr: ListNode<Type> = this.head;
    let prev: ListNode<Type> = null;
    let temp: ListNode<Type> = null;

    while (curr?.next) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    if (curr) curr.next = prev;

    this.tail = this.head;
    this.head = curr;
  }

  /**
   * Reverse the list
   * @params node - ListNode
   * @returns ListNode
   */
  reverseRecur(node: ListNode<Type> = this.head): ListNode<Type> {
    if (null === node) {
      return null;
    }
    if (null === node?.next) {
      this.head = node;
      return node;
    }

    let curr: ListNode<Type> = this.reverseRecur(node?.next);
    if (curr) curr.next = node;
    node.next = null;
    return node;
  }

  /**
   * @param value - number
   * @returns ListNode
   */
  removeValue(value: Type): ListNode<Type> {
    let deletedNode: ListNode<Type> = null;

    if (null === this.head) {
      return null;
    } else if (value === this.head.value) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr: ListNode<Type> = this.head;

      while (curr?.next) {
        if (curr.next.value === value) {
          deletedNode = curr.next;
          curr.next = curr.next.next;
          if (curr.next === this.tail) {
            this.tail = curr;
          }
        }

        curr = curr.next;
      }
    }

    this.count -= 1;
    return deletedNode;
  }

  /**
   * @param value - number
   * @returns ListNode
   */
  find(value: Type): ListNode<Type> {
    let curr: ListNode<Type> = this.head;

    while (curr) {
      if (curr.value === value) {
        return curr;
      }

      curr = curr.next;
    }
    return null;
  }

  print(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: ListNode<Type> = this.head;
    let str: string = '';

    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }

    console.log(str);
  }
}

let list = new LinkedList<string>();
list.append('A');
list.append('B');
list.append('C');
list.print();

let x = list.reverseRecur();
list.print();

console.log(x);
