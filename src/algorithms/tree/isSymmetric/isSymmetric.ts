// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const q: (TreeNode | null)[] = [];
  q.push(root.left);
  q.push(root.right);

  while (q.length) {
    let left = q.shift();
    let right = q.shift();

    if (!left && right) return false;
    if (left && !right) return false;
    if (left && right) {
      if (left.val != right.val) return false;
      q.push(left.left);
      q.push(right.right);
      q.push(left.right);
      q.push(right.left);
    }
  }

  return true;
}
