# Singly Linked List

A **singly linked list** is a linear collection of data elements. The order of the element is not given by their physical location in memory. Instead, each element points to the next node using the address.

The simplest form of the element in a linked list called node, composes of data and a reference to the next link. This structure allows for efficient insertion and removal of elements from any position in the linked list. A drawback of linked lists is that access time is linear.

## Pseudocode for Basic Operations

### Access

```text
getNode(head, i) -> Node | NULL
    Pre: head is the 1st node in the list
         i is a 1-based index of the node in the list we're trying to get
    Post: ith node is returned from the list

    curr = head
    i    = 1

    WHILE (i < pos)
      curr = curr.next
    END WHILE

    return current
END getNode
```

### Search

```text
def search(head, value) -> Node | NULL
    Pre: head is the 1st node in the list
         value is the value to search for
    Post: returns a node with the value; othewrise return NULL (null)

    current = head

    WHILE (current)
        IF (current.value == value)
            return current
        END IF

        current = current.next
    END WHILE

    return NULL
END search
```

### pushFront

```text
def pushFront(head, value) -> void
    Pre: head is the 1st node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n = Node(value)

    IF (haed == NULL)
        haed = n
    ELSE
        n.next = head
        head   = n
    END IF
end pushFront
```

### pushBack

```text
def pushBack(tail, value)
    Pre: tail is the last node in the list
         value is the value we're going to insert in the list
    Post: a new node has been inserted at the end of the list

    new_node = Node(value)

    IF (tail == NULL)
        head = new_node
        tail = new_node
        head.next = tail
    ELSE
        tail.next = new_node
        new_node = tail
    END IF
END pushBack
```

### popFront

```text
def popFront(head)
    Pre: head is the 1st node in the list
    Post: the first node has been removed from the list

    curr = head
    head = head.next
    curr = NULL
END popFront
```

### popBack

```text
def popBack(head, tail)
    Pre: head is the first node in the list,
         tail is the last node in the list
    Post: the last node has been removed from the list

    curr = head

    WHILE curr && curr.next != tail
        curr = curr.next
    END WHILE

    curr.next = NULL
    tail = curr
END popBack
```

## Complexities

### Time Complexity

| Access | Search |     Insertion     |     Deletion      |
| :----: | :----: | :---------------: | :---------------: |
|  O(n)  |  O(n)  | Acess time + O(1) | Acess time + O(1) |

### Space Complexity

O(n)
