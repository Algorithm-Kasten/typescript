class Node 
    attr_accessor :next, :prev
    attr_reader :data

    def initialize(value)
        @next = @prev = nil
        @data = value
    end
end

class DoublyLinkedList
    def initialize 
        @dummy_head = Node.new(0)
        @dummy_tail = Node.new(0)
        @dummy_head.next = @dummy_tail 
        @dummy_tail.prev = @dummy_head
        @size = 0
    end 

    def push_front(value)
        new_node = Node.new(value)

        new_node.prev = @dummy_head
        new_node.next = @dummy_head.next
        @dummy_head.next.prev = new_node
        @dummy_head.next = new_node

        @size += 1
    end 

    def push_back(value)
        new_node = Node.new(value)

        new_node.next = @dummy_tail 
        new_node.prev = @dummy_tail.prev
        @dummy_tail.prev.next = new_node
        @dummy_tail.prev = new_node

        @size += 1
    end 

    def pop_front
        return if self.empty?

        data = @dummy_head.next.data 
        @dummy_head.next = @dummy_head.next.next
        @size -= 1
        data
    end
    
    def pop_back
        return if self.empty?

        data = @dummy_tail.prev.data
        @dummy_tail.prev.prev.next = @dummy_tail
        @dummy_tail.prev = @dummy_tail.prev.prev
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
        return "" if self.empty?
        nodes = []
        curr = @dummy_head.next 
        while curr != @dummy_tail
            nodes.push curr.data
            curr = curr.next
        end 
        nodes.join(" ")
    end
end