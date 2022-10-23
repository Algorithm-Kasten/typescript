# Doubly Linked List

A **doubly linked list** is a linear collection of data elements in which the order of the element is determined not by its physical address in the memory, but by references (or links) that each element points to.

The structure of the element or a node in a doubly linked list consists of a data and two references: _previous_ and _next_. Having two references for _previous_ and _next_ allows for simpler insertion and removal of elements in any position in the list. Also, we can easily traverse the list in reverse order using the `previous`.

A drawback of doubly linked list is that it consumes more memory because of the extra information in the node.

## Pseudocode

### prepend

```text
prepend(head, tail, value) → void
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to insert
    Post: a new node has been inserted at the head of the list

    n      ← Node(value)
    n.next ← head

    IF head != ø
        head.prev ← n
    END IF

    IF tail == ø
        tail ← n
    END IF

    head ← n
END prepend
```

### append

```text
append(head, tail, value) → void
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to insert in the list
    Post: a new node has been inserted at the end of the list

    n      ← Node(value)
    n.prev ← tail

    IF tail != ø
        tail.next ← n
    END IF
    tail ← n

    IF head == ø
        head ← n
    END IF
END append
```

### delete

```text
delete(head, tail, value) → Node | ø
    Pre: head is the 1st node in the list
         tail is the last node in the list
         value is the value we're going to remove from the list
    Post: a node is removed from the list and returned; otherwise, return ø

    // FIND returns the node with a given value or ø
    deletedNode ← call FIND(value)

    IF deletedNode
        IF deletedNode.prev AND deletedNode.next
            deletedNode.prev.next ← deletedNode.next;
            deletedNode.next.prev ← deletedNode.prev;
            RETURN deletedNode;
        ELSIF deletedNode == head && deletedNode == tail
            head ← ø
            tail ← ø
        ELSIF deletedNode == head
            head       ← head.next
            head?.prev ← ø
        ELSIF deletedNode == tail
            tail       ← tail.prev
            tail?.next ← ø
        END IF
    END IF

    RETURN deletedNode
END delete
```

### Reverse Traversal

```text
reverseTraversal(tail)
    Pre: tail points to the last node in the list
    Post: a list has been traversed in reverse order

    n ← tail
    WHILE n != ø
        print n.value
        n ← n.prev
    END WHILE
END reverseTraversal
```

## Problems

Linked list related problems selected from [Leetcode](https://leetcode.com/tag/linked-list/).

|                                                         #                                                          | Problem                                           | Difficulty |
| :----------------------------------------------------------------------------------------------------------------: | :------------------------------------------------ | :--------: |
|                   <a href="https://leetcode.com/problems/add-two-numbers/" target="_blank">2</a>                   | Add Two Numbers                                   |   Medium   |
|          <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">19</a>          | Remove Nth Node From End of List                  |   Medium   |
|               <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">21</a>               | Merge Two Sorted Lists                            |    Easy    |
|                <a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank">23</a>                | Merge k Sorted Lists                              |    Hard    |
|         <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/" target="_blank">83</a>         | Remove Duplicates from Sorted List                |    Easy    |
|                 <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">141</a>                 | Linked List Cycle                                 |    Easy    |
|                     <a href="https://leetcode.com/problems/lru-cache/" target="_blank">146</a>                     | LRU Cache                                         |   Medium   |
|         <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">160</a>          | Intersection of Two Linked Lists                  |    Easy    |
|            <a href="https://leetcode.com/problems/remove-linked-list-elements/" target="_blank">203</a>            | Remove Linked List Elements                       |    Easy    |
|         <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">206</a>          | Reverse Linked List                               |    Easy    |
|              <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">234</a>               | Palindrome Linked List                            |    Easy    |
|           <a href="https://leetcode.com/problems/delete-node-in-a-linked-list/" target="_blank">237</a>            | Delete Node in a Linked List                      |    Easy    |
|              <a href="https://leetcode.com/problems/all-oone-data-structure/" target="_blank">432</a>              | All O`one Data Structure                          |    Hard    |
|             <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">876</a>             | Middle of the Linked List                         |    Easy    |
|                 <a href="https://leetcode.com/problems/design-skiplist/" target="_blank">1206</a>                  | Convert Binary Number in a Linked List to Integer |    Easy    |
| <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer" target="_blank">1290</a> | Design Skiplist                                   |    Hard    |
|          <a href="https://leetcode.com/problems/merge-in-between-linked-lists/" target="_blank">1669</a>           | Merge In Between Linked Lists                     |   Medium   |
|           <a href="https://leetcode.com/problems/merge-nodes-in-between-zeros" target="_blank">2181</a>            | Merge Nodes in Between Zeros                      |   Medium   |
