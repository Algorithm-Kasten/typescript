class Node 
    attr_accessor :left, :right
    attr_reader :data

    def initialize(data) 
        @left = @right = nil 
        @data = data 
    end 
end

class BinaryTree 
    def initialize(data)
        @root = Node.new(data)
    end 

    def inorder(node)
        return if node == nil

        inorder(node.left)
        print "#{node.data} "
        inorder(node.right)
    end
    
    def preorder(node)
        return if node == nil

        print "#{node.data} "
        preorder(node.left)
        preorder(node.right)
    end 
    
    def postorder(node)
        return if node == nil

        postorder(node.left)
        postorder(node.right)
        print "#{node.data} "
    end
end