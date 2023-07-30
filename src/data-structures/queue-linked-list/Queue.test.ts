import { Queue } from "./Queue";

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

    test("getFront() returns 1", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.getFront().value).toBe(1);
    })

    test("getRear() returns 1", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.getRear().value).toBe(1);
    })

    test("getRear() returns 2", () => {
        const queue = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getRear().value).toBe(2);
    })
})