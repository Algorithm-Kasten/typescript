# Circular Linked List

A **Circular Linked List** is a linked list where last node is connected to the first node creating a never-ending list.

![Circular Queue](../circular-queue/circular-queue.svg)

The basic structure of the node is same as a singly linked list (unless one implements with a doubly linked list). A node contains a reference to the next node and a data.

## Pseudocode for Basic Operations

### pushFront

```text
pushFront(last, value) -> void
    Pre: last is the last node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n = Node(value)

    IF (last == NULL)
        last      = n
        last.next = last
    ELSE
        n.next    = last.next
        last.next = n
    END IF
end pushFront
```

### pushBack

```text
pushBack(last, value) -> void
    Pre: last is the last node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the back of the list

    n = Node(value)

    IF (last == NULL)
        last      = n
        last.next = last
    ELSE
        n.next    = last.next
        last.next = n
        last      = last.next
    END IF
end pushBack
```

### popFront

```text
popFront(last) -> Node | NULL
    Pre: last is the last node in the list
    Post: a first node has been removed from the list

    del       = last.next
    last.next = del.next

    return del
end popFront
```

### pop_back

```text
popBack(last) -> Node | NULL
    Pre: last is the last node in the list
    Post: a last node has been removed from the list

    curr = last.next;
    WHILE (curr.next != last)
        curr = curr.next
    END WHILE

    curr.next = last.next
    last      = curr

    return curr
end popBack
```

### front

```text
front(last) -> Node | NULL
    Pre: last is the last node in the list
    Post: first node of the list is returned

    return last.next
end front
```

### back

```text
back(last) -> Node | NULL
    Pre: last is the last node in the list
    Post: last node of the list is returned

    return last
end back
```

## Complexity

| Space | pushFront | pushBack | popFront | popBack |
| :---: | :-------: | :------: | :------: | :-----: |
| O(n)  |   O(1)    |   O(1)   |   O(1)   |  O(n)   |
