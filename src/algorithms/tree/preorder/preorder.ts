type TreeNode<T> = BSTNode<T> | null | undefined;

export class BSTNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(value: T, left: TreeNode<T> = null, right: TreeNode<T> = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BST<T> {
  root: TreeNode<T>;

  constructor(value: T | null = null) {
    if (null === value) this.root = null;
    else this.root = new BSTNode<T>(value);
  }

  insert(value: T): void {
    this.root = this.insertHelper(value, this.root);
  }

  insertHelper(value: T, node: TreeNode<T> = this.root): TreeNode<T> {
    if (null === node) {
      return new BSTNode<T>(value);
    }

    if (node && value < node.value) {
      node.left = this.insertHelper(value, node.left);
    } else if (node && value >= node.value) {
      node.right = this.insertHelper(value, node.right);
    }

    return node;
  }

  preorder(node: TreeNode<T> = this.root): void {
    if (null === node) return;

    process.stdout.write(`${node?.value} `);
    this.preorder(node?.left);
    this.preorder(node?.right);
  }

  preorderIter(): void {
    if (!this.root) return;
    else {
      let stack: TreeNode<T>[] = [this.root];

      while (stack.length > 0) {
        let curr = stack.pop();
        process.stdout.write(`${curr?.value} `);

        if (curr && curr.right) stack.push(curr.right);
        if (curr && curr.left) stack.push(curr.left);
      }
    }
  }
}

let bst = new BST<number>();
bst.insert(5);
bst.insert(2);
bst.insert(20);
bst.insert(-5);
bst.insert(-7);
bst.insert(-3);
bst.insert(10);
bst.insert(12);
bst.insert(30);
bst.insert(35);
bst.insert(32);
bst.insert(33);

console.log('preorder:');
bst.preorder();
console.log();
bst.preorderIter();
console.log();
