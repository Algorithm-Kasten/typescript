# Stack Linked List

Stack is a linear data structure that follows a particular order (Last-In, Last-Out; LIFO) in which operations are performed.

<a href="https://www.programiz.com/dsa/stack"><img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" title="programiz.com" alt="Stack Operations" /></a>

|      | push | pop  | peek | empty |
| :--: | :--: | :--: | :--: | :---: |
| Time | O(1) | O(1) | O(1) | O(1)  |

## Pseudocode for Basic Operations

### push

```text
push(top, value) → void
    Pre: top is the top node of the stack
         value is the value we're going to push it to the stack
    Post: new data is pushed to the stack

    n      ← new Node(value)
    n.next ← top
    top    ← n
END
```

### pop

```text
pop(top) → Node | null
    Pre: top is the top node of the stack
    Post: removes the top node from the stack; returns ø if failed

    n   ← top

    IF top AND top.next
        top ← top.next
    END IF

    RETURN n
END
```

### peek

```text
peek(top) → Node | ø
    Pre: top is the top node on the stack;
    Post: returns the top node on the stack; returns ø if stack is empty;

    IF top
        RETURN top.value
    ELSE
        RETURN ø
    END
END
```

### empty

```text
empty(top) → boolean
    Pre: top is the top node on the stack;
    Post: returns true if stack is empty; otherwise false;

    RETURN top == ø
END
```
