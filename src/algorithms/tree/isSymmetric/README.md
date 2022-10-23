# Symmetric Tree

An algorithm to determine if a binary tree is symmetric.

![Tree](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

## Pseudocode

```text
isSymmetric(root) → boolean
  Pre: root is the root node of the tree
  Post: we have determined if the tree is symmetry or not

  q ← Queue{ root.left, root.right }

  WHILE q is not empty
    L ← q.pop
    R ← q.pop

    IF (L and R == Ø) or (R and L == Ø)
      RETURN false
    ELSIF L and R
      IF L.val != R.val
        RETURN false
      END IF

      q.push { L.left, R.right, L.right, R.left }
    END IF
  END WHILE

  RETURN true
END
```

## Complexity

| Time | Space |
| :--: | :---: |
| O(V) | O(V)  |

## Problem

- https://leetcode.com/problems/symmetric-tree/
