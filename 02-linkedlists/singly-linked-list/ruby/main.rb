class Node 
    attr_accessor :next
    attr_reader :data

    def initialize(value)
        @data = value
        @next = nil
    end
end

# no tail node
class SinglyLinkedList
    def initialize 
        @dummy_head = Node.new(0)
        @size = 0
    end 

    def push_front(value)
        new_node = Node.new(value)
        new_node.next = @dummy_head.next
        @dummy_head.next = new_node
        @size += 1
    end 

    def push_back(value)
        curr = @dummy_head
        while curr.next != nil 
            curr = curr.next 
        end 

        curr.next = Node.new(value)
        @size += 1
    end 

    
    def pop_front
        if self.empty?
            puts "... the list is empty"
            return
        end 

        data = @dummy_head.next.data 
        @dummy_head.next = @dummy_head.next.next
        @size -= 1
        data
    end
    
    def pop_back
        if self.empty?
            puts "... the list is empty"
            return
        elsif self.size == 1
            return pop_front
        end 

        curr = @dummy_head.next
        while curr.next.next 
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = nil 
        @size -= 1
        data
    end
    
    # 1-based index
    def insertAt(position, value)
        new_node = Node.new(value)
        curr = @dummy_head

        (position-1).times do 
            curr = curr.next
        end 

        new_node.next = curr.next 
        curr.next = new_node
        @size += 1
    end 
    
    # 1-based index
    def deleteAt(position)
        curr = @dummy_head
        (position-1).times do
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = curr.next.next
        @size -= 1
        data
    end

    def empty?
        @size == 0
    end 

    def size 
        return @size
    end 

    def printall
        nodes = []
        curr = @dummy_head.next
        while curr 
            nodes.push curr.data
            curr = curr.next
        end 
        nodes.join(" ")
    end
end