# BinarySearch

Binary search algorithm greatly reduces the number of operations done on comparison by halving the range of the list to search for in every iteration.

In order to perform binary search, the list must be sorted.

The algorithm compares the target with a middle element in the list. If mid-value is greater than the target, we ignore every element greater than the mid-value because it's guaranteed that the target is smaller than the middle value. And vice versa for the case of middle element being smaller than the target.

By repeating these steps, we can halve the search range in every iteration which makes it very efficient to look up the data in a large dataset. For example, it only takes 30 iterations to find a value in a list with 10 billion data.

## Complexity

|  Time   | Space |
| :-----: | :---: |
| O(logN) | O(1)  |

## Pseudocode

```text
BinarySearch(arr, len, value) → number
    Pre: arr is a sorted array
         len is the total size
         value is the target value to look for in the array
    Post: we know the index of the value in the list; -1 if DNE

    low  ← 0
    high ← n-1

    WHILE low <= high
        mid ← low + ((high - low) / 2)

        IF arr[mid] == value
            RETURN mid
        ELSIF arr[mid] < value
            low ← mid + 1
        ELSE
            high ← mid - 1
        END IF
    END WHILE

    RETURN -1
END BinarySearch
```
