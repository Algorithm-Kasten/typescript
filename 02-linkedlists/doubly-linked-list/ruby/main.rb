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
        @head = Node.new(0)
        @tail = Node.new(0)
        @head.next = @tail 
        @tail.prev = @head
        @size = 0
    end 

    def push_front(value)
        new_node = Node.new(value)
        if self.empty? 
            new_node.prev = @head 
            new_node.next = @tail
            @head.next = new_node
            @tail.prev = new_node
            @size = 1
            return
        end 

        new_node.prev = @head
        new_node.next = @head.next
        @head.next.prev = new_node
        @head.next = new_node
        @size += 1
    end 

    def push_back(value)
        if self.empty?
            return push_front(value)
        end 

        new_node = Node.new(value)
        new_node.next = @tail 
        new_node.prev = @tail.prev
        @tail.prev.next = new_node
        @tail.prev = new_node

        @size += 1
    end 

    
    def pop_front
        if self.empty?
            puts "... the list is empty"
            return
        end 

        data = @head.next.data 
        @head.next = @head.next.next
        @size -= 1
        data
    end
    
    def pop_back
        if self.empty?
            puts "... the list is empty"
            return
        end 

        data = @tail.prev.data
        @tail.prev.prev.next = @tail
        @tail.prev = @tail.prev.prev
        @size -= 1
        data
    end
    
    # 1-based index
    def insertAt(position, value)
        if position == 1
            return push_front(value)
        elsif position == @size 
            return push_back(value)
        end 

        new_node = Node.new(value)
        curr = @head.next 

        (position-2).times do 
            curr = curr.next
        end 

        new_node.next = curr.next 
        curr.next = new_node
        @size += 1
    end 
    
    # 1-based index
    def deleteAt(position)
        if position == 1
            return pop_front
        elsif position == @size 
            return pop_back
        end 

        curr = @head.next
        (position-2).times do
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
        curr = @head.next 
        while curr != @tail
            nodes.push curr.data
            curr = curr.next
        end 
        nodes.join(" ")
    end
end