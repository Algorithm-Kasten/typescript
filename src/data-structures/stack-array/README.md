# Stack Array

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

<a href="https://www.programiz.com/dsa/stack"><img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" title="programiz.com" alt="Stack Operations" /></a>

|      | push | pop  | peek | empty | full |
| :--: | :--: | :--: | :--: | :---: | :--: |
| Time | O(1) | O(1) | O(1) | O(1)  | O(1) |

## Pseudocode for Basic Operations

### push

```text
push(stack, top, value) → void
    Pre: stack is the stack array
         top is an index or a position of a new value to be inserted in stack
         value is the value to be inserted
    Post: new element is added at the top of the stack

    stack[top++] ← val
END
```

### pop

```text
pop(stack, top) → Type
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: top element has been removed from the stack

    val ← stack[--top]
    return val
END
```

### peek

```text
peek(stack, top) → Type | undefined
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns the top element in the stack

    return stack[top - 1]
END
```

### empty

```text
empty(stack, top) → boolean
    Pre: stack is the stack array
         top is an index or a position in stack
    Post: returns true if stack is empty; otherwise false;

    return top == 0
END
```

### full

```text
full(stack, top, size) → boolean
    Pre: stack is the stack array
         top is an index or a position in stack
         size is the array size (capacity)
    Post: returns true if stack is full; otherwise false;

    return top == size
END
```
