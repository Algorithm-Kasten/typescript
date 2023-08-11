export type NodeType<T> = Node<T> | null;

export class Node<T> {
  next: NodeType<T> = null;
  prev: NodeType<T> = null;
  constructor(public readonly value: T) {}
}
