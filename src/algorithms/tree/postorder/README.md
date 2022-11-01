# Postorder Traverrsal

![BST](../inorder/bst-example.svg)

Postorder: `-7 -3 -5 2 12 10 33 32 35 30 20 5`

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
| O(V) | O(h)  |

- `V` - total number of vertices
- `h` - tree height

## Problem

- https://leetcode.com/problems/binary-tree-postorder-traversal/
