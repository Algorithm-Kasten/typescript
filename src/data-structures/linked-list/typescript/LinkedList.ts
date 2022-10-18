type ListNode = LinkedListNode | null;

class LinkedListNode {
  readonly value: number;
  next: ListNode;

  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode;
  tail: ListNode;
  count: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  prepend(value: number): void {
    this.count += 1;
    let newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.head.next = this.tail;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  append(value: number): void {
    this.count += 1;
    let newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.head.next = this.tail;
      return;
    }

    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  // pos: position -> 1-based index
  insert(value: number, pos: number): void {
    if (this.head === null || pos <= 1) {
      this.prepend(value);
      return;
    }

    if (pos === this.count) {
      this.append(value);
      return;
    }

    this.count += 1;

    let curr: LinkedListNode = this.head;
    for (let i = 1; i < pos - 1; ++i) {
      if (curr?.next) curr = curr.next;
    }

    let newNode: LinkedListNode = new LinkedListNode(value);
    if (curr) {
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

  remove(value: number): void {
    if (this.head === null) {
      console.error('list is empty');
      return;
    }

    this.count -= 1;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.count === 0) {
        this.head = this.tail = null;
      }
      return;
    }

    let curr: ListNode = this.head;
    while (curr?.next) {
      if (curr.next.value === value) {
        curr.next = curr.next.next;
        if (curr.next === null) {
          this.tail = curr;
        }
        break;
      }

      curr = curr.next;
    }
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

  length(): number {
    return this.count;
  }

  print(): void {
    if (this.count === 0) {
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
list.append(3);
list.print();
list.append(4);
list.print();
list.append(5);
list.print();
list.prepend(1);
list.print();
list.prepend(2);
list.print();
list.prepend(3);
list.print();

list.insert(17, 1);
list.print();

list.insert(17, list.length());
list.print();

list.insert(77, 3);
list.print();

list.remove(77);
list.print();

list.remove(1);
list.print();
list.remove(1);
list.print();
list.remove(3);
list.remove(3);
list.print();

list.remove(17);
list.print();
list.remove(17);
list.print();

list.remove(2);
list.print();

list.remove(4);
list.print();
list.remove(5);
list.print();
