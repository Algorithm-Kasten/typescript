export type ListNode<T> = CircularListNode<T> | null;

export class CircularListNode<T> {
  readonly value: T;
  next: ListNode<T>;

  /**
   * @param value - readonly T
   * @param next
   */
  constructor(value: T, next: ListNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

export class CircularList<T> {
  last: ListNode<T>;

  constructor() {
    this.last = null;
  }

  /**
   * @returns boolean
   */
  empty(): boolean {
    return null === this.last;
  }

  /**
   * @param value - T
   * @returns void
   */
  pushFront(value: T): void {
    let newNode = new CircularListNode<T>(value);

    if (null === this.last) {
      this.last = newNode;
      this.last.next = this.last;
    } else {
      newNode.next = this.last.next;
      this.last.next = newNode;
    }
  }

  /**
   * @param value - T
   * @returns void
   */
  pushBack(value: T): void {
    this.pushFront(value);
    this.last = this.last!.next;
  }

  /**
   * @returns ListNode<T>
   */
  popFront(): ListNode<T> {
    if (null === this.last) {
      console.error('List is empty.');
      return null;
    } else {
      let delNode: ListNode<T>;

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

  /**
   * @returns ListNode<T>
   */
  popBack(): ListNode<T> {
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

  /**
   * @returns ListNode<T> | undefined
   */
  front(): ListNode<T> | undefined {
    return this.last?.next;
  }

  /**
   * @returns ListNode<T>
   */
  back(): ListNode<T> {
    return this.last;
  }

  print(): void {
    if (this.empty()) {
      console.error('List is empty.');
    } else {
      let curr: ListNode<T> = this.last!.next;
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

let list = new CircularList<number>();
list.pushBack(1);
list.print();

list.pushBack(2);
list.print();

list.pushBack(3);
list.print();

list.pushFront(-1);
list.print();

list.pushBack(10);
list.print();

list.popBack();
list.print();

list.popBack();
list.print();
list.popBack();
list.print();
list.popBack();
list.print();
list.popBack();
list.print();
