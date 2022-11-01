# Inorder Traverrsal

![BST](./bst-example.svg)

Inorder: `-7 -5 -3 2 5 10 12 20 30 32 33 35`

## Pseudocode

```text
inorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in inorder

    IF node == Ø
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
| O(V) | O(h)  |

- `V` - total number of vertices
- `h` - tree height

## Problem

- https://leetcode.com/problems/binary-tree-inorder-traversal/
