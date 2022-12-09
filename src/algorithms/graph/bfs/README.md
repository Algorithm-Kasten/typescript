## Breadth First Search

Breadth First Search (BFS) is an algorithm used to traverse a graph in a particular order.

For a tree data structure, BFS algorithm starts at the _root_ and explores all nodes at the present depth prior to moving on to the next layer.

![tree bfs](./tree-bfs.png)

For a graph, BFS can be performed from any node. From a passed node, it explores all adjacent nodes. Since a graph can have a cycle, we need to mark a node that has been _visited_ already, otherwise the algorithm will hang and we'll be stuck in an infinite loop.

![graph bfs](./graph-bfs.png)

## BFS Pseudocode

```text
bfs(graph, startingNode) → void
    Pre: 'graph' is an adjacency list
         'startingNode' is a starting node to perform BFS
    Post: we've successfully traversed a graph :p

    Q ← new Queue( startingNode )

    visited ← new Array( graph.vertices + 1 )
    visited[startingNode.value] ← true

    WHILE ( !Q.empty() )
        V ← Q.pop()
        print( V.value )

        FOR ( all neighbors U in V )
            IF ( visited[U.value] == false )
                visited[V.value] ← true
                Q.push( U )
            END IF
        END FOR
    END WHILE

    return false
END bfs
```