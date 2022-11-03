# Queue Array

Queue is a linear data structure that follows a particular order (First-In, First-Out) in which operations are performed.

<a href="https://www.programiz.com/dsa/queue"><img src="https://cdn.programiz.com/sites/tutorial2program/files/queue.png" title="programiz.com" alt="Queue" /></a>

In programming, the term **enqueue** refers to adding an item to the queue and **dequeue** for removing an item from the queue.

|      | enqueue | dequeue | empty | full |
| :--: | :-----: | :-----: | :---: | :--: |
| Time |  O(1)   |  O(1)   | O(1)  | O(1) |

## Pseudocode for Basic Operations

### enqueue

```text
push(queue<T>, front, rear, value) → void
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
         value is the value we're going to enqueue
    Post: new element is added to the queue

    queue[rear++] ← value
END
```

### dequeue

```text
dequeue(queue<T>, front, rear) → T
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
    Post: front element has been removed from the queue

    elem ← queue[front++];
    return elem
END
```

### empty

```text
empty(queue<T>, front, rear) → boolean
    Pre: queue is the queue array
         rear index tracks the most recently added element (last element in queue array)
         front index tracks the first element
    Post: returns true if queue is empty; otherwise false;

    return front === rear
END
```

### full

```text
full(queue<T>, size, rear) → boolean
    Pre: queue is the queue array
         size is the array size
         rear index tracks the most recently added element (last element in queue array)
    Post: returns true if queue is empty; otherwise false;

    return rear === size
END
```
