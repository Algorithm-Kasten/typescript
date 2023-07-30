import { AdjacencyList } from "../../../data-structures/graph/adjacency-list/AdjacencyList";

const bfs = (startingNode: number): void => {
    let q: number[] = [startingNode];
    let visited: boolean[] = new Array(graph.vertex).fill(false);
    visited[startingNode] = true;

    while (q.length > 0) {
        let v: number = q.shift() || 0;
        process.stdout.write(`${v} `);

        let node = graph.list[v]?.getNode(1);
        while (node != null) {
            if (!visited[node.value]) {
                visited[node.value] = true;
                q.push(node.value);
            }
            node = node.next;
        }
    }
};

let graph = new AdjacencyList(4);
const IS_UNDIRECTED = false;
graph.addEdge(0, 1, IS_UNDIRECTED);
graph.addEdge(0, 2, IS_UNDIRECTED);
graph.addEdge(1, 2, IS_UNDIRECTED);
graph.addEdge(2, 0, IS_UNDIRECTED);
graph.addEdge(2, 3, IS_UNDIRECTED);
graph.addEdge(3, 3, IS_UNDIRECTED);

bfs(2); // 2 0 3 1