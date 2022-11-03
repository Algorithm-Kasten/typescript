# Inorder Traversal

![BST](./inorder.jpg)

Inorder: `1 5 7 10 15 20 30 35`

## Pseudocode

### Recursive

```text
inorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in inorder

    IF (node == ø)
        return
    END IF

    inorder(node.left)
    print node.value
    inorder(node.right)
END
```

### Iterative

```text
inorder(root) → void
    Pre: root is the root node of the tree
    Post: we have traversed the list in preorder

    IF (node == ø)
        return
    END IF

    stack ← new Stack
    curr  ← root

    WHILE ((curr) || (stack != empty))
        WHILE (curr)
            stack.push(curr)
            curr ← curr.left
        END WHILE

        curr ← stack.top
        stack.pop
        print curr
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

- https://leetcode.com/problems/binary-tree-inorder-traversal/
