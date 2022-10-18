type ListNode = LinkedListNode | null;

class LinkedListNode {
  readonly value: number;
  next: ListNode;

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

  prepend(value: number): void {
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (null === this.tail) {
      this.tail = newNode;
    }

    this.count += 1;
  }

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

  // pos: position -> 1-based index
  insert(value: number, pos: number): void {
    const index = pos < 0 ? 0 : pos > this.count ? this.count : pos;

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.count) {
      this.append(value);
    } else {
      let cnt = 1;
      let curr = this.head;
      const newNode = new LinkedListNode(value);

      while (curr) {
        if (cnt === index) break;
        curr = curr.next;
        cnt += 1;
      }

      newNode.next = curr!.next;
      curr!.next = newNode;
      this.count += 1;
    }
  }

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

    list.count -= 1;

    return deletedNode;
  }

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

    list.count -= 1;
    return deletedNode;
  }

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

  search(value: number): boolean {
    let curr: ListNode = this.head;

    while (curr) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.next;
    }
    return false;
  }

  empty(): boolean {
    return this.head === null;
  }

  print(): void {
    if (this.empty()) {
      console.error('list is empty');
      return;
    }
    let curr: ListNode = this.head;
    let str: string = '';

    while (curr && curr !== this.tail) {
      str += `${curr.value} `;
      curr = curr?.next;
    }

    str += `${curr?.value} `;
    console.log(str);
  }
}

let list: LinkedList = new LinkedList();

[1, 2, 3].forEach((x) => list.append(x));
list.print();

[4, 5, 6].forEach((x) => list.prepend(x));
list.print();

list.insert(17, 0);
list.print();

list.insert(17, 10);
list.print();

list.insert(123, 3);
list.print();

while (false === list.empty()) {
  list.delete(list.head!.value);
  list.print();
}

list.print();

list.append(1);
list.append(2);
list.prepend(-1);
list.prepend(-2);
list.print();

console.log(list.deleteHead()?.value);
console.log(list.deleteTail()?.value);
list.print();
console.log(list.deleteHead()?.value);
console.log(list.deleteTail()?.value);
list.print();
list.print();

list.append(1);
list.print();
list.append(100);
list.print();
