import { Queue } from "./QueueArray";

describe("Queue", () => {
    test("Queue is Empty", () => {
        const queue = new Queue<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    test("Queue is NOT empty", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    })

    test("queue is full", () => {
        const queue = new Queue<number>(4);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.isFull()).toBe(true);
    })

    test("queue is NOT full", () => {
        const queue = new Queue<number>(4);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.isFull()).toBe(false);
    })

    test("getFront() returns 1", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.getFront()).toBe(1);
    })

    test("getRear() returns 1", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.getRear()).toBe(1);
    })

    test("getRear() returns 2", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getRear()).toBe(2);
    })
})