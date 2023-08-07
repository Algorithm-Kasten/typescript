export type TreeNodeType<T> = TreeNode<T> | null;

export class TreeNode<T> {
    left: TreeNodeType<T> = null;
    mid: TreeNodeType<T> = null;
    right: TreeNodeType<T> = null;
    constructor(public data: T) {}
}