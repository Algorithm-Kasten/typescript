class Node 
    attr_accessor :left, :right 
    attr_reader :val 

    def initialize(val)
        @val = val
    end 
end

class BST 
    def initialize(val = nil)
        if val 
            @root = Node.new(val)
            @root.left = @root.right = nil
            @size = 1
        else 
            @root = nil 
            @size = 0
        end
    end

    def insert(val)
        @root = insertUtil(@root, val)
        @size += 1
    end

    def get_node_count
        @size
    end

    # returns true if val exists in bst
    def find(val)
        findUtil(@root, val)
    end

    # root = height 1
    def get_height
    end
    
    def get_min
        getMinUtil(@root)
    end

    def get_max
        getMaxUtil(@root)
    end 

    def is_bst
    end

    # returns the smallest value in the right subtree of a given node
    def get_successor(node)
    end

    def delete_value(val)
    end

    def delete_tree
    end

    # print from min to max
    def inorder 
        inorderUtil(@root)
        puts
    end

    private
    def insertUtil(node, val)
        if node == nil 
            node = Node.new(val)
        elsif val <= node.val 
            node.left = insertUtil(node.left, val)
        else 
            node.right = insertUtil(node.right, val)
        end

        node
    end

    def inorderUtil(node) 
        return if node == nil

        inorderUtil(node.left)
        print "#{node.val} "
        inorderUtil(node.right)
    end

    def getMinUtil(node)
        return if node == nil
        if node.left
           getMinUtil(node.left)
        else
            return node.val
        end 
    end

    def getMaxUtil(node)
        return if node == nil
        if node.right
           getMaxUtil(node.right)
        else
            return node.val
        end 
    end

    def findUtil(node, val) 
        return false if node == nil 
        return true if node.val == val 

        if node.val < val 
            findUtil(node.right, val)
        else 
            findUtil(node.left, val)
        end
    end 
end 

RAND = 100
n = 10

bst = BST.new

n.times do 
    bst.insert(rand(RAND))
    bst.inorder 
    puts "min: #{bst.get_min}    max: #{bst.get_max}"
end 

puts 

n.times do
    x = rand(RAND)
    puts "is #{x} in the tree? #{bst.find(x)}"
end 

puts bst.get_node_count