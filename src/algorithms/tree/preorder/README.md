# Preorder Traverrsal

## Pseudocode

```text
preorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in preorder

    IF node == Ø
        RETURN
    END IF

    print node.value
    preorder(node.left)
    preorder(node.right)
END
```

## Complexity

| Time | Space |
| :--: | :---: |
| O(V) | O(1)  |

## Problem

- https://leetcode.com/problems/binary-tree-preorder-traversal/
