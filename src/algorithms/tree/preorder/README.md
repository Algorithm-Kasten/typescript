# Preorder Traversal

![BST](../inorder/bst-example.svg)

Preorder: `5 2 -5 -7 -3 20 10 12 30 35 32 33`

## Pseudocode

### Recursive

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

### Iterative

```text
preorder(root) → void
    Pre: root is the root node of the tree
    Post: we have traversed the list in preorder

    IF node == Ø
        RETURN
    END IF

    stack ← new Stack
    curr  ← root

    WHILE (curr) OR (stack IS NOT empty)
        WHILE curr
            stack.push(curr)
            PRINT curr
            curr ← curr.left
        END WHILE

        curr ← stack.top
        stack.pop
        curr ← curr.right
    END WHILE
END
```

## Complexity

| Time | Space |
| :--: | :---: |
| O(V) | O(h)  |

- `V` - total number of vertices
- `h` - tree height

## Problem

- https://leetcode.com/problems/binary-tree-preorder-traversal/
