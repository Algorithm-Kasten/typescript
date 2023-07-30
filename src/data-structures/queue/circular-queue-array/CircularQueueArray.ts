export class CircularQueueArray<T> {
    capacity: number;
    front: number;
    rear: number;
    cq: Array<T | undefined>;
    
    constructor(size: number) {
        this.capacity = size;
        this.cq = new Array(size);
        this.front = -1;
        this.rear = -1;
        
        if(Object.seal) {
            this.cq.fill(undefined);
            Object.seal(this.cq);
        }
    }
    
    isEmpty(): boolean {
        return this.front == -1 && this.rear == -1;
    }
    
    isFull(): boolean {
        return (this.rear + 1) % this.capacity == this.front;
    }
    
    
    enqueue(item: T): void {
        if(this.isFull()) {
            throw new Error("Queue is full");
        } else if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.cq[this.rear] = item;
        } else {   
            this.rear = (this.rear + 1) % this.capacity;
            this.cq[this.rear] = item;
        }
    }
    
    dequeue(): T | undefined {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        } else if (this.front == this.rear) {
            const item = this.cq[this.front];
            this.cq[this.front] = undefined;
            this.front = -1;
            this.rear = -1;
            return item;
        } else {   
            const item = this.cq[this.front];
            this.cq[this.front] = undefined;
            this.front = (this.front + 1) % this.capacity;
            return item;
        }
    }
    
    getFront(): T | undefined {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        return this.cq[this.front];
    }
    
    getRear(): T | undefined {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        return this.cq[this.rear];
    }
    
    print(): void {
        let str = "";
        for(let i = 0; i < this.capacity; i++) {
            str += this.cq[i] + " ";
        }
        console.log(str);
    }
};