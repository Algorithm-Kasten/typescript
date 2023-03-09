export class StackDynamicArary<T> {
    stack: T[];

    constructor() {
        this.stack = new Array<T>();
    }

    push(target: T): void {
        this.stack.unshift(target);
    }

    pop(): T | undefined {
        if (this.empty()) return undefined;

        let value = this.stack.shift();
        return value;
    }

    peek(): T | undefined {
        if (this.empty()) return undefined;

        return this.stack[0];
    }

    empty(): boolean {
        return this.stack.length === 0;
    }

    print(): void {
        console.dir(this.stack);
    }
}
