# Inorder Traverrsal

## Pseudocode

```text
inorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in inorder

    IF node == ø
        RETURN
    END IF

    inorder(node.left)
    print node.value
    inorder(node.right)
END
```

## Complexity

| Time | Space |
| :--: | :---: |
| O(V) | O(1)  |

## Problem

- https://leetcode.com/problems/binary-tree-inorder-traversal/
