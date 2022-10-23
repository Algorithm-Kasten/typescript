# Postorder Traverrsal

## Pseudocode

```text
postorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in postorder

    IF node == Ø
        RETURN
    END IF

    postorder(node.left)
    postorder(node.right)
    print node.value
END
```

## Complexity

| Time | Space |
| :--: | :---: |
| O(V) | O(1)  |

## Problem

- https://leetcode.com/problems/binary-tree-postorder-traversal/
