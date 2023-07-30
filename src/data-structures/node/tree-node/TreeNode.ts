export type TreeNodeType<T> = TreeNode<T> | null;

export class TreeNode<T> {
    left: TreeNode<T> = null;
    mid: TreeNode<T> = null;
    right: TreeNode<T> = null;
    constructor(public data: T) {}
}