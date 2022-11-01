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

  postorder(node: TreeNode<T> = this.root) {
    if (null === node) return;

    this.postorder(node?.left);
    this.postorder(node?.right);
    process.stdout.write(`${node?.value} `);
  }

  postorderIter(): void {
    if (!this.root) return;
    else {
      let stack1: TreeNode<T>[] = [this.root];
      let stack2: TreeNode<T>[] = [];
      let curr: TreeNode<T>;

      while (stack1.length > 0) {
        curr = stack1.pop();
        stack2.push(curr);

        if (curr && curr.left) stack1.push(curr.left);
        if (curr && curr.right) stack1.push(curr.right);
      }

      while (stack2.length > 0) {
        curr = stack2.pop();
        process.stdout.write(`${curr?.value} `);
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

console.log('postorder:');
bst.postorder();
console.log();
bst.postorderIter();
console.log();
