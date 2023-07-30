import { AdjacencyList } from "../../../data-structures/graph/adjacency-list/AdjacencyList";

const dfs = (startingNode: number): void => {
    let stack: number[] = [startingNode];
    let visited: boolean[] = new Array(graph.vertex).fill(false);
    visited[startingNode] = true;

    while (stack.length > 0) {
        let v: number = stack.pop() || 0;
        process.stdout.write(`${v} `);

        let node = graph.list[v]?.getNode(1);
        while (node != null) {
            if (!visited[node.value]) {
                visited[node.value] = true;
                stack.push(node.value);
            }
            node = node.next;
        }
    }
};

let graph = new AdjacencyList(6);
const IS_UNDIRECTED = false;
graph.addEdge(1, 2, IS_UNDIRECTED);
graph.addEdge(1, 3, IS_UNDIRECTED);
graph.addEdge(2, 4, IS_UNDIRECTED);
graph.addEdge(2, 5, IS_UNDIRECTED);

console.dir(graph.list[1]);

dfs(1);