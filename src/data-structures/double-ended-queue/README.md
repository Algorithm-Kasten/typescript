# Double-Ended Queue

Deque or Double Ended Queue is a type of queue in which insertion and removal of elements can either be performed from the front or the rear. Thus, it does not follow FIFO rule (First In First Out).

<a href="https://www.programiz.com/dsa/deque"><img src="https://cdn.programiz.com/sites/tutorial2program/files/deque.png" title="programiz.com" alt="Queue" /></a>

Using doubly linked list, every operations can be done in constant time.

|      | addFront | addRear | removeFront | removeRear | empty |
| :--: | :------: | :-----: | :---------: | :--------: | :---: |
| Time |   O(1)   |  O(1)   |    O(1)     |    O(1)    | O(1)  |

## Pseudocode for Basic Operations

### addFront

```text
addFront(front, rear, data)
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: new data is added to the front of the deque

    n ← new Node(value)

    IF (front == ø)
        front      ← n
        rear       ← n
        front.next ← rear
        rear.prev  ← front
    ELSE
        n.next          ← front
        front.next      ← n
        front           ← n
    END IF
END addFront
```

### addRear

```text
addRear(front, rear, data)
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: new data is added at the back of the deque

    n ← new Node(value)

    IF (rear == ø)
        front      ← n
        rear       ← n
        front.next ← rear
        rear.prev  ← front
    ELSE
        rear.next ← n
        n.prev    ← rear
        rear      ← n
    END IF
END addRear
```

### removeFront

```text
removeFront(front)
    Pre: front is the front(first) node in the deque
    Post: a node has been removed from the deque

    elem       ← front
    front      ← front.next
    front.prev ← ø
    return elem
END removeFront
```

### removeRear

```text
removeRear(front, rear, data)
    Pre: front is the front(first) node in the deque
         rear is the rear(last) node in the deque
         data is the new data we're going to add it to the deque
    Post: a node has been removed from the deque

    elem ← rear
    rear ← rear.prev
    return elem
END removeRear
```

### empty

```text
empty(front): boolean
    Pre: front is the front(first) node in the deque
    Post: returns true if deque is empty; otherwise false.

    return front == null
END empty
```

### getFront

```text
getFront(front): Node | ø
    Pre: front is the front(first) node in the deque
    Post: either ø or the front node has been returned

    return front
END getFront
```

### getRear

```text
getRear(rear)
    Pre: rear is the rear(last) node in the deque
    Post: either ø or the rear node has been returned

    return rear
END getRear
```
