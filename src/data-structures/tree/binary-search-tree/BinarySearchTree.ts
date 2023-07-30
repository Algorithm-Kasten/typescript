type BSTNode<T> = BinarySearchTreeNode<T> | null | undefined;

export class BinarySearchTreeNode<T> {
  value: T;
  left: BSTNode<T>;
  right: BSTNode<T>;

  /**
   *
   * @param value T
   * @param left BinarySearchTreeNode<T> | null | undefined;
   * @param right BinarySearchTreeNode<T> | null | undefined;
   */
  constructor(value: T, left: BSTNode<T> = null, right: BSTNode<T> = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BST<T> {
  root: BSTNode<T>;

  /**
   * @param value T | null
   */
  constructor(value: T | null = null) {
    if (null === value) this.root = null;
    else this.root = new BinarySearchTreeNode<T>(value);
  }

  /**
   * @param value
   */
  insert(value: T): void {
    this.root = this.insertHelper(value, this.root);
  }

  /**
   *
   * @param value T
   * @param node BinarySearchTreeNode<T> | null | undefined;
   * @returns BinarySearchTreeNode<T> | null | undefined;
   */
  private insertHelper(value: T, node: BSTNode<T> = this.root): BSTNode<T> {
    if (null === node) {
      return new BinarySearchTreeNode<T>(value);
    }

    if (node && value < node.value) {
      node.left = this.insertHelper(value, node.left);
    } else if (node && value >= node.value) {
      node.right = this.insertHelper(value, node.right);
    }

    return node;
  }

  /**
   *
   * @param value T
   * @param node BinarySearchTreeNode<T> | null | undefined;
   * @returns boolean
   */
  search(value: T, node: BSTNode<T> = this.root): boolean {
    if (!node) {
      return false;
    } else {
      if (value === node.value) return true;

      if (value < node.value) {
        return this.search(value, node.left);
      } else {
        return this.search(value, node.right);
      }
    }
  }

  /**
   * @param node BinarySearchTreeNode<T> | null | undefined;
   */
  preorder(node: BSTNode<T> = this.root) {
    if (null === node) return;
    console.log(node?.value);
    this.preorder(node?.left);
    this.preorder(node?.right);
  }

  /**
   * @param node BinarySearchTreeNode<T> | null | undefined;
   */
  inorder(node: BSTNode<T> = this.root) {
    if (null === node) return;

    this.inorder(node?.left);
    console.log(node?.value);
    this.inorder(node?.right);
  }

  /**
   * @param node BinarySearchTreeNode<T> | null | undefined;
   */
  postorder(node: BSTNode<T> = this.root) {
    if (null === node) return;

    this.postorder(node?.left);
    this.postorder(node?.right);
    console.log(node?.value);
  }
}
