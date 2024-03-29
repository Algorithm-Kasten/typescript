import { TreeNode, TreeNodeType } from "../../node/tree-node/TreeNode";

export class Tree<T> {
    private root: TreeNodeType<T>;

    constructor() {
        this.root = null
    }


    /* insert the data in next available space */
    insertNode(data: T): void {
        const newNode = new TreeNode<T>(data);

        if(this.root === null) {
            this.root = newNode
        } else {
            let q = [this.root]

            while(q.length !== 0) {
                const curr = q.shift()

                if(curr.left === null) {
                    curr.left = newNode
                    return
                } else {
                    q.push(curr.left)
                }

                if(curr.mid === null) {
                    curr.mid = newNode 
                    return
                } else {
                    q.push(curr.mid)
                }

                if(curr.right === null) {
                    curr.right = newNode 
                    return
                } else {
                    q.push(curr.right)
                }
            }
        }
    }

    bfs(): void {
        let q = [this.root]

        while(q.length !== 0) {
            const curr = q.shift()
            
            process.stdout.write(`${curr.data} `)

            if(curr.left) q.push(curr.left)
            if(curr.mid) q.push(curr.mid)
            if(curr.right) q.push(curr.right)
        }
        console.log()
    }

    preorder(node: TreeNode<T> = this.root): void {
        if(node === null) return

        process.stdout.write(`${node.data} `)
        this.preorder(node.left)
        this.preorder(node.mid)
        this.preorder(node.right)
    }
    inorder(node: TreeNode<T> = this.root): void {
        if(node === null) return

        this.inorder(node.left)
        process.stdout.write(`${node.data} `)
        this.inorder(node.mid)
        this.inorder(node.right)
    }
    postorder(node: TreeNode<T> = this.root): void {
        if(node === null) return

        this.inorder(node.left)
        this.inorder(node.mid)
        this.inorder(node.right)
        process.stdout.write(`${node.data} `)
    }
}