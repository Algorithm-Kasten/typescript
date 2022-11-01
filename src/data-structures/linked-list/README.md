# Singly Linked List

A **singly linked list** is a linear collection of data elements. The order of the element is not given by their physical location in memory. Instead, each element points to the next node using the address.

The simplest form of the element in a linked list called node, composes of data and a reference to the next link. This structure allows for efficient insertion and removal of elements from any position in the linked list. A drawback of linked lists is that access time is linear.

## Pseudocode for Basic Operations

### Access

```text
getNode(head, i) → Node | Ø
    Pre: head is the 1st node in the list
         i is a 1-based index of the node in the list we're trying to get
    Post: ith node is returned from the list

    curr ← head
    i    ← 1

    WHILE i < pos
      curr ← curr.next
    END WHILE

    RETURN current
END getNode
```

### Search

```text
def search(head, value) → Node | Ø
    Pre: head is the 1st node in the list
         value is the value to search for
    Post: returns a node with the value; othewrise return Ø (null)

    current ← head

    WHILE current
        IF current.value == value
            RETURN current
        END IF

        current ← current.next
    END WHILE

    RETURN Ø
END search
```

### prepend

```text
prepend(head, value) → void
    Pre: head is the 1st node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n ← Node(value)

    IF this.head == Ø
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

    IF this.head == Ø
        this.head ← n
    ELSE
        current ← this.head
        WHILE current.next
            current ← current.next
        END

        current.next ← n
    END IF
END append
```

### delete

```text
delete(head, value) → Node | Ø
    Pre: head is the 1st node in the list
         value is the value we're going to remove from the list
    Post: a node has been removed from the list and returned; otherwise, return Ø (null)

    IF head == Ø
        RETURN Ø
    ELSIF head == value
        deletedNode ← head
        head        ← head.next
        RETURN deletedNode
    END

    current ← head
    WHILE current.next
        IF current.next.value == value
            deletedNode  ← current.next
            current.next ← current.next.next
            return deletedNode
        END
    END

    return Ø
END delete
```

## Complexities

### Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

### Space Complexity

O(n)

## Problems

Linked list related problems selected from [Leetcode](https://leetcode.com/tag/linked-list/).

| #                                                                                                                  | Problem                                           | Difficulty |
| :----------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ | :--------- |
| <a href="https://leetcode.com/problems/add-two-numbers/" target="_blank">2</a>                                     | Add Two Numbers                                   | Medium     |
| <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">19</a>                   | Remove Nth Node From End of List                  | Medium     |
| <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">21</a>                             | Merge Two Sorted Lists                            | Easy       |
| <a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank">23</a>                               | Merge k Sorted Lists                              | Hard       |
| <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/" target="_blank">83</a>                 | Remove Duplicates from Sorted List                | Easy       |
| <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">141</a>                                 | Linked List Cycle                                 | Easy       |
| <a href="https://leetcode.com/problems/lru-cache/" target="_blank">146</a>                                         | LRU Cache                                         | Medium     |
| <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">160</a>                  | Intersection of Two Linked Lists                  | Easy       |
| <a href="https://leetcode.com/problems/remove-linked-list-elements/" target="_blank">203</a>                       | Remove Linked List Elements                       | Easy       |
| <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">206</a>                  | Reverse Linked List                               | Easy       |
| <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">234</a>                            | Palindrome Linked List                            | Easy       |
| <a href="https://leetcode.com/problems/delete-node-in-a-linked-list/" target="_blank">237</a>                      | Delete Node in a Linked List                      | Easy       |
| <a href="https://leetcode.com/problems/all-oone-data-structure/" target="_blank">432</a>                           | All O`one Data Structure                          | Hard       |
| <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">876</a>                         | Middle of the Linked List                         | Easy       |
| <a href="https://leetcode.com/problems/design-skiplist/" target="_blank">1206</a>                                  | Convert Binary Number in a Linked List to Integer | Easy       |
| <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer" target="_blank">1290</a> | Design Skiplist                                   | Hard       |
| <a href="https://leetcode.com/problems/merge-in-between-linked-lists/" target="_blank">1669</a>                    | Merge In Between Linked Lists                     | Medium     |
| <a href="https://leetcode.com/problems/merge-nodes-in-between-zeros" target="_blank">2181</a>                      | Merge Nodes in Between Zeros                      | Medium     |
