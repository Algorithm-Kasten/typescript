# Stack Array

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

![represent the LIFO principle by using push and pop operation](https://cdn.programiz.com/sites/tutorial2program/files/stack.png 'Stack operations')

|      | push | pop  | peek | empty |
| :--: | :--: | :--: | :--: | :---: |
| Time | O(1) | O(1) | O(1) | O(1)  |

## Pseudocode for Basic Operations

### push

```text
push(stack, top, value) → void
    Pre: stack is the stack array
         top is an index or a position of a new value to be inserted in stack
         value is the value to be inserted
    Post: new element is added at the top of the stack

    stack[top++] ← val;
END
```

### pop

```text
pop(stack, top) → Type
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: top element has been removed from the stack

    val ← stack[--top]
    RETURN val
END
```

### peek

```text
peek(stack, top) → Type | undefined
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns the top element in the stack

    RETURN stack[top - 1]
END
```

### empty

```text
empty(stack, top) → boolean
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns true if stack is empty; otherwise false;

    RETURN top === 0
END
```
