import process from "process";
import { LinkedList } from '../linked-list/LinkedList';

export class AdjacencyList {
    vertex: number;
    graph: LinkedList<number>[];
    constructor(v: number) {
        this.vertex = v;
        this.graph = new Array(v);
        for (let i = 0; i < v; ++i) {
            this.graph[i] = new LinkedList<number>();
        }
    }

    addEdge(u: number, v: number) {
        this.graph[u].append(v);
        this.graph[v].append(u);
    }

    removeEdge(u: number, v: number) {
        if (this.graph[u].size() > 0) {
            this.graph[u].removeValue(v);
            this.graph[v].removeValue(u);
        }
    }

    print() {
        for (let i = 0; i < this.vertex; ++i) {
            process.stdout.write(`${i}: `)
            this.graph[i].print();
        }
    }
}

let graph = new AdjacencyList(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 3);

graph.print();

console.log();
graph.removeEdge(1, 0);
graph.print();