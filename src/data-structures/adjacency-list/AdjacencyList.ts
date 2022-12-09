import { LinkedList } from '../linked-list/LinkedList';

export class AdjacencyList {
    vertex: number;
    list: LinkedList<number>[];
    constructor(v: number) {
        this.vertex = v;
        this.list = new Array(v);
        for (let i = 0; i < v; ++i) {
            this.list[i] = new LinkedList<number>();
        }
    }

    addEdge(u: number, v: number) {
        this.list[u].append(v);
        this.list[v].append(u);
    }

    removeEdge(u: number, v: number) {
        if (this.list[u].size() > 0) {
            this.list[u].removeValue(v);
            this.list[v].removeValue(u);
        }
    }

    print() {
        for (let i = 0; i < this.vertex; ++i) {
            process.stdout.write(`${i}: `)
            this.list[i].print();
        }
    }
}