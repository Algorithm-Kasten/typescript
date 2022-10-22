# Linked Lists

A **singly linked list** is a linear collection of data elements. The order of the element is not given by their physical location in memory. Instead, each element points to the next node using the address.

The simplest form of the element in a linked list called node, composes of data and a reference to the next link. This structure allows for efficient insertion and removal of elements from any position in the linked list. A drawback of linked lists is that access time is linear.

## Pseudo-code

### access (get Nth node)

```rb
# position -> 1-based index (1,2,3,...)

def getNode(position)
    current = this.head

    for i=1 and i < position
        current = current.next
    end

    return current
end
```

### search

```rb
def search(value)
    current = this.head

    while(current.next != nil)
        if current.value === value
            return true
        end

        current = current.next
    end

    return false
end
```

### append

```rb
# insert at the end of the list

def append(value)
    newNode = new Node(value)

    if this.head == nil
        this.head = newNode
    else
        current = this.head
        while current.next != nil
            current = current.next
        end

        current.next = newNode
    end
end
```

### delete

```rb
def delete(value)
    if this.head == nil
        return nil
    end

    current = this.head
    while(current.next != nil)
        if current.next.value == value
            deletedNode = current.next
            current.next = current.next.next
            return deletedNode
        end
    end

    return nil
end
```

## Complexities

### Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

### Space Complexity

O(n)

## Problems

Linked list problems selected from [Leetcode](https://leetcode.com/tag/linked-list/).

|                                                         #                                                          | Problem                                           | Difficulty |                                                        Solution                                                         |
| :----------------------------------------------------------------------------------------------------------------: | :------------------------------------------------ | :--------: | :---------------------------------------------------------------------------------------------------------------------: |
|                   <a href="https://leetcode.com/problems/add-two-numbers/" target="_blank">2</a>                   | Add Two Numbers                                   |   Medium   |                                                                                                                         |
|          <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">19</a>          | Remove Nth Node From End of List                  |   Medium   |  <a href="https://github.com/gonexvii/leetcode/tree/main/19-remove-nth-node-from-end-of-list" target="_blank">Link</a>  |
|               <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">21</a>               | Merge Two Sorted Lists                            |    Easy    |       <a href="https://github.com/gonexvii/leetcode/tree/main/21-merge-two-sorted-lists" target="_blank">Link</a>       |
|                <a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank">23</a>                | Merge k Sorted Lists                              |    Hard    |                                                                                                                         |
|         <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/" target="_blank">83</a>         | Remove Duplicates from Sorted List                |    Easy    | <a href="https://github.com/gonexvii/leetcode/tree/main/83-remove-duplicates-from-sorted-list" target="_blank">Link</a> |
|                 <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">141</a>                 | Linked List Cycle                                 |    Easy    |         <a href="https://github.com/gonexvii/leetcode/tree/main/141-linked-list-cycle" target="_blank">Link</a>         |
|                     <a href="https://leetcode.com/problems/lru-cache/" target="_blank">146</a>                     | LRU Cache                                         |   Medium   |                                                                                                                         |
|         <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">160</a>          | Intersection of Two Linked Lists                  |    Easy    | <a href="https://github.com/gonexvii/leetcode/tree/main/160-intersection-of-two-linked-lists" target="_blank">Link</a>  |
|            <a href="https://leetcode.com/problems/remove-linked-list-elements/" target="_blank">203</a>            | Remove Linked List Elements                       |    Easy    |    <a href="https://github.com/gonexvii/leetcode/tree/main/203-remove-linked-list-elements" target="_blank">Link</a>    |
|         <a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">206</a>          | Reverse Linked List                               |    Easy    |        <a href="https://github.com/gonexvii/leetcode/tree/main/206-reverse-linked-list" target="_blank">Link</a>        |
|              <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">234</a>               | Palindrome Linked List                            |    Easy    |      <a href="https://github.com/gonexvii/leetcode/tree/main/234-palindrome-linked-list" target="_blank">Link</a>       |
|           <a href="https://leetcode.com/problems/delete-node-in-a-linked-list/" target="_blank">237</a>            | Delete Node in a Linked List                      |    Easy    |   <a href="https://github.com/gonexvii/leetcode/tree/main/237-delete-node-in-a-linked-list" target="_blank">Link</a>    |
|              <a href="https://leetcode.com/problems/all-oone-data-structure/" target="_blank">432</a>              | All O`one Data Structure                          |    Hard    |                                                                                                                         |
|             <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">876</a>             | Middle of the Linked List                         |    Easy    |     <a href="https://github.com/gonexvii/leetcode/tree/main/876-middle-of-the-linked-list" target="_blank">Link</a>     |
|                 <a href="https://leetcode.com/problems/design-skiplist/" target="_blank">1206</a>                  | Convert Binary Number in a Linked List to Integer |    Easy    |                                                                                                                         |
| <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer" target="_blank">1290</a> | Design Skiplist                                   |    Hard    |                                                                                                                         |
|          <a href="https://leetcode.com/problems/merge-in-between-linked-lists/" target="_blank">1669</a>           | Merge In Between Linked Lists                     |   Medium   |                                                                                                                         |
|           <a href="https://leetcode.com/problems/merge-nodes-in-between-zeros" target="_blank">2181</a>            | Merge Nodes in Between Zeros                      |   Medium   |                                                                                                                         |
