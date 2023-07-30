"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var TreeNode_1 = require("../tree-node/TreeNode");
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    /* insert the data in next available space */
    Tree.prototype.insertNode = function (data) {
        var newNode = new TreeNode_1.TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            var q = [this.root];
            while (q.length !== 0) {
                var curr = q.shift();
                if (curr.left === null) {
                    curr.left = newNode;
                    return;
                }
                else {
                    q.push(curr.left);
                }
                if (curr.mid === null) {
                    curr.mid = newNode;
                    return;
                }
                else {
                    q.push(curr.mid);
                }
                if (curr.right === null) {
                    curr.right = newNode;
                    return;
                }
                else {
                    q.push(curr.right);
                }
            }
        }
    };
    Tree.prototype.bfs = function () {
        var q = [this.root];
        while (q.length !== 0) {
            var curr = q.shift();
            process.stdout.write("".concat(curr.data, " "));
            if (curr.left)
                q.push(curr.left);
            if (curr.mid)
                q.push(curr.mid);
            if (curr.right)
                q.push(curr.right);
        }
        console.log();
    };
    Tree.prototype.preorder = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return;
        process.stdout.write("".concat(node.data, " "));
        this.preorder(node.left);
        this.preorder(node.mid);
        this.preorder(node.right);
    };
    Tree.prototype.inorder = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return;
        this.inorder(node.left);
        process.stdout.write("".concat(node.data, " "));
        this.inorder(node.mid);
        this.inorder(node.right);
    };
    Tree.prototype.postorder = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return;
        this.inorder(node.left);
        this.inorder(node.mid);
        this.inorder(node.right);
        process.stdout.write("".concat(node.data, " "));
    };
    return Tree;
}());
exports.Tree = Tree;
var tree = new Tree();
tree.insertNode('Cassie');
tree.bfs();
tree.insertNode('Coco');
tree.bfs();
tree.insertNode('Jii');
tree.bfs();
tree.insertNode('Noa');
tree.bfs();
tree.insertNode('A');
tree.insertNode('B');
tree.insertNode('C');
tree.insertNode('D');
tree.insertNode('E');
tree.insertNode('F');
tree.insertNode('G');
tree.insertNode('H');
tree.insertNode('I');
tree.bfs();
// tree.preorder()
tree.preorder();
console.log();
tree.inorder();
console.log();
tree.postorder();
console.log();
