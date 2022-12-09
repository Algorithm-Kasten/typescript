import { AdjacencyList } from "../../../data-structures/adjacency-list/AdjacencyList";

const bfs = (startingNode: number, target: number): boolean => {
    let q: number[] = [startingNode];
    let visited: boolean[] = new Array(graph.vertex).fill(false);

    while (q.length !== 0) {
        let v: number = q.shift() || 0;

        let node = graph.list[v]?.getNode(1);
        while (node != null) {
            if (visited[node.value] !== true) {
                if (node.value === target) {
                    return true;
                }

                q.push(node.value);
                visited[node.value] = true;
            }
            node = node.next;
        }

    }

    return false;
};

let graph = new AdjacencyList(4);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 3);
graph.addEdge(2, 1);
graph.addEdge(2, 0);
graph.addEdge(3, 0);
graph.addEdge(3, 2);


const NODE_TO_FIND = 3;
let doesExist = bfs(0, NODE_TO_FIND);

if(doesExist) {
    console.log(`${NODE_TO_FIND} exists in the graph.`);
} else {
    console.log(`${NODE_TO_FIND} does not exist.`);
}