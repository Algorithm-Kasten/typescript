const ListDNEError = new Error('list does not exist.');
const ListEmptyError = new Error('list is empty.');
const IndexOutOfBoundsError = new Error('index is out of bounds.');

export type ListNode<T> = LinkedListNode<T> | null;

export class LinkedListNode<T> {
  readonly item: T;
  next: ListNode<T>;
  
  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  sentinel: ListNode<T>;
  node_count: number;

  constructor(item: T) {
    this.sentinel = new LinkedListNode(item);
    this.node_count = 0;
  }

  size() {
    return this.node_count;
  }

  empty() {
    return this.node_count === 0;
  }

  // one-based index
  getNode(index: number) {
    if (index <= 0 || index > this.node_count) {
      throw IndexOutOfBoundsError;
    }

    let curr: ListNode<T> = this.sentinel;
    for (let i = 0; i < index; ++i) {
      if(curr) {
        curr = curr.next;
      }
    }

    return curr;
  }

  prepend(item: T) {
    if(null === this.sentinel) {
      this.sentinel = new LinkedListNode(item);
      this.sentinel.next = new LinkedListNode(item);
    } else { 
      let newNode = new LinkedListNode(item);
      newNode.next = this.sentinel.next;
      this.sentinel.next = newNode;
    }
    this.node_count += 1;
  }

  deleteHead() {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    if(this.sentinel.next) {
      this.sentinel.next = this.sentinel.next.next;
      this.node_count -= 1;
    }
  }

  deleteTail() {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    let curr = this.sentinel.next;

    while(curr && curr.next && curr.next.next) {
      curr = curr.next;
    }

    this.node_count -= 1;
    curr.next = null;
  }

  getFront() {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    return this.sentinel!.next?.item;
  }
  
  getBack() {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    let curr = this.sentinel.next;
    while(curr && curr.next) {
      curr = curr.next;
    }

    return curr?.item;
  }

  // one-based index
  insert(item: T, index: number) {
    if(this.empty()) {
      this.prepend(item);
      return;
    }

    if (index <= 0 || index > this.node_count + 1) {
      throw IndexOutOfBoundsError;
    }

    let curr: ListNode<T> = this.sentinel;

    while(curr && curr.next && index > 1) {
      curr = curr.next;
      index -= 1;
    }

    let newNode = new LinkedListNode(item);

    if(curr) {
      newNode.next = curr.next;
      curr.next = newNode;
    }

    this.node_count += 1;
  }
  
  // one-based index
  erase(index: number) {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    if(index <= 0 || index > this.node_count) {
      throw IndexOutOfBoundsError;
    }

    if(1 === index) {
      this.deleteHead();
      return;
    }

    if(this.node_count === index) {
      this.deleteTail();
      return;
    }

    let curr: ListNode<T> = this.sentinel;
    for(let i = 1; i < index; ++i) {
      if(curr) {
        curr = curr.next;
      }
    }

    if(curr && curr.next) {
      curr.next = curr.next.next;
      this.node_count -= 1;
    }
  }

  reverseIter(): void {
    if(null === this.sentinel) {
      throw ListDNEError;
    }

    let curr: ListNode<T> = this.sentinel.next;
    let prev: ListNode<T> = null;
    let temp: ListNode<T> = null;

    while (curr?.next) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    if (curr) curr.next = prev;

    this.sentinel.next = curr;
  }

  reverseRecur(node: ListNode<T> = this.sentinel!.next): ListNode<T> {
    if (null === node) {
      return null;
    }
    if (null === node?.next) {
      this.sentinel!.next = node;
      return node;
    }

    let curr: ListNode<T> = this.reverseRecur(node?.next);
    if (curr) curr.next = node;
    node.next = null;
    return node;
  }


  removeItem(item: T) {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    let curr: ListNode<T> = this.sentinel;

    while(curr && curr.next) {
      if(curr.next.item === item) {
        curr.next = curr.next.next;
        this.node_count -= 1;
        return;
      }
      curr = curr.next;
    }
  }

  find(item: T): ListNode<T> {
    if(null === this.sentinel) {
      throw ListDNEError;
    }
    
    if(null === this.sentinel.next) {
      throw ListEmptyError;
    }

    let curr: ListNode<T> = this.sentinel;
    while(curr) {
      if(curr.item === item) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }


  print() {
    if(this.sentinel) {
      let curr = this.sentinel.next;
      let str = '';
      while(curr) {
        str += `${curr.item} `;
        curr = curr.next;
      }

      console.log(str);
      console.log("Is empty?: " + this.empty());
      console.log("Node count: " + this.node_count);
      if(this.node_count > 0) {
        console.log(`front: ${this.getFront()}    back: ${this.getBack()}`);
      }
      console.log();
    }
  }
}