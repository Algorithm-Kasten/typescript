import process from "process";

export class AdjacencyMatrix {
    vertex: number;
    graph: number[][] | null[][];
    constructor(v: number) {
        this.vertex = v;
        this.graph = new Array(v);
        for (let i = 0; i < v; ++i) {
            this.graph[i] = new Array(v).fill(null);
        }
    }

    addEdge(u: number, v: number) {
        this.graph[u][v] = 1;
        this.graph[v][u] = 1;
    }

    removeEdge(u: number, v: number) {
        this.graph[u][v] = null;
        this.graph[v][u] = null;
    }

    print() {
        for (let i = 0; i < this.vertex; ++i) {
            process.stdout.write(`${i}: `);
            for (let j = 0; j < this.vertex; ++j) {
                if (this.graph[i][j]) {
                    process.stdout.write(`${j} → `);
                }
            }
            console.log();
        }
    }
}

let graph = new AdjacencyMatrix(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 3);

graph.print();

console.log();
graph.removeEdge(1, 0);
graph.print();