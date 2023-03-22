# Singly Linked List

A **singly linked list** is a linear collection of data elements. The order of the element is not given by their physical location in memory. Instead, each element points to the next node using the address.

The simplest form of the element in a linked list called node, composes of data and a reference to the next link. This structure allows for efficient insertion and removal of elements from any position in the linked list. A drawback of linked lists is that access time is linear.

## Pseudocode for Basic Operations

### Access

```text
getNode(head, i) → Node | ø
    Pre: head is the 1st node in the list
         i is a 1-based index of the node in the list we're trying to get
    Post: ith node is returned from the list

    curr ← head
    i    ← 1

    WHILE (i < pos)
      curr ← curr.next
    END WHILE

    return current
END getNode
```

### Search

```text
def search(head, value) → Node | ø
    Pre: head is the 1st node in the list
         value is the value to search for
    Post: returns a node with the value; othewrise return ø (null)

    current ← head

    WHILE (current)
        IF (current.value == value)
            return current
        END IF

        current ← current.next
    END WHILE

    return ø
END search
```

### prepend

```text
prepend(head, value) → void
    Pre: head is the 1st node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n ← Node(value)

    IF (this.head == ø)
        this.head ← n
    ELSE
        n.next ← head
        head   ← n
    END IF
end prepend
```

### append

```text
append(head, value)
    Pre: head is the 1st node in the list
         value is the value we're going to insert in the list
    Post: a new node has been inserted at the end of the list

    n ← Node(value)

    IF (this.head == ø)
        this.head ← n
    ELSE
        current ← this.head
        WHILE (current.next)
            current ← current.next
        END

        current.next ← n
    END IF
END append
```

### delete

```text
delete(head, value) → Node | ø
    Pre: head is the 1st node in the list
         value is the value we're going to remove from the list
    Post: a node has been removed from the list and returned; otherwise, return ø (null)

    IF (head == ø)
        return ø
    ELSE IF (head == value)
        deletedNode ← head
        head        ← head.next
        return deletedNode
    END

    current ← head
    WHILE (current.next)
        IF (current.next.value == value)
            deletedNode  ← current.next
            current.next ← current.next.next
            return deletedNode
        END
    END

    return ø
END delete
```

## Complexities

### Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   Acess time + O(1)    |  Acess time + O(1)   |

### Space Complexity

O(n)

## Problems

Linked list related problems selected from [Leetcode](https://leetcode.com/tag/linked-list/).

|       #       | Problem                                           | Difficulty |
| :-----------: | :------------------------------------------------ | :--------- |
|    [2][i2]    | Add Two Numbers                                   | Medium     |
|   [19][i19]   | Remove Nth Node From End of List                  | Medium     |
|   [21][i21]   | Merge Two Sorted Lists                            | Easy       |
|   [23][i23]   | Merge k Sorted Lists                              | Hard       |
|   [83][i83]   | Remove Duplicates from Sorted List                | Easy       |
|  [141][i141]  | Linked List Cycle                                 | Easy       |
|  [146][i146]  | LRU Cache                                         | Medium     |
|  [160][i160]  | Intersection of Two Linked Lists                  | Easy       |
|  [203][i203]  | Remove Linked List Elements                       | Easy       |
|  [206][i206]  | Reverse Linked List                               | Easy       |
|  [234][i234]  | Palindrome Linked List                            | Easy       |
|  [237][i237]  | Delete Node in a Linked List                      | Easy       |
|  [432][i432]  | All O`one Data Structure                          | Hard       |
|  [876][i876]  | Middle of the Linked List                         | Easy       |
| [1206][i1206] | Convert Binary Number in a Linked List to Integer | Easy       |
| [1290][i1290] | Design Skiplist                                   | Hard       |
| [1669][i1669] | Merge In Between Linked Lists                     | Medium     |
| [2181][i2181] | Merge Nodes in Between Zeros                      | Medium     |

[i2]: https://leetcode.com/problems/add-two-numbers/
[i19]: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
[i21]: https://leetcode.com/problems/merge-two-sorted-lists/
[i23]: https://leetcode.com/problems/merge-k-sorted-lists/
[i83]: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
[i141]: https://leetcode.com/problems/linked-list-cycle/
[i146]: https://leetcode.com/problems/lru-cache/
[i160]: https://leetcode.com/problems/intersection-of-two-linked-lists/
[i203]: https://leetcode.com/problems/remove-linked-list-elements/
[i206]: https://leetcode.com/problems/reverse-linked-list/
[i234]: https://leetcode.com/problems/palindrome-linked-list/
[i237]: https://leetcode.com/problems/delete-node-in-a-linked-list/
[i432]: https://leetcode.com/problems/all-oone-data-structure/
[i876]: https://leetcode.com/problems/middle-of-the-linked-list/
[i1206]: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
[i1290]: https://leetcode.com/problems/design-skiplist/
[i1669]: https://leetcode.com/problems/merge-in-between-linked-lists/
[i2181]: https://leetcode.com/problems/merge-nodes-in-between-zeros/
