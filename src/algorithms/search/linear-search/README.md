# LinearSearch

Linear search algorithm looks for the value in the list by checking every element one by one. The order of the data does not affect the performance of the algorithm.

## Complexity

| time | space |
| :--: | :---: |
| O(N) | O(1)  |

## Pseudocode

```text
LinearSearch(T[] arr, int len, T value) → number
    Pre: arr is the array of type T
         len is the total size
         value is the value we'll look for from the list
    Post: we know the exact position of the value in the list; -1 if not in the list.

    i ← 0
    WHILE (i < len)
        IF (arr[i] == value)
            return i
        END IF

        i ← i + 1
    END WHILE

    return -1
END LinearSearch
```
