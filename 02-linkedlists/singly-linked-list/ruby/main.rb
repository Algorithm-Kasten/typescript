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
        @head = nil
        @size = 0
    end 

    def push_front(value)
        if @head == nil 
            @head = Node.new(value)
            @size = 1
            return
        end

        new_node = Node.new(value)
        new_node.next = @head
        @head = new_node
        @size += 1
    end 

    def push_back(value)
        if @head == nil 
            @head = Node.new(value)
            @size = 1
            return
        end 

        curr = @head
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

        data = @head.data 
        @head = @head.next
        @size -= 1
        data
    end
    
    def pop_back
        if self.empty?
            puts "... the list is empty"
            return
        elsif @head.next == nil 
            return pop_front
        end 

        curr = @head 
        while curr.next and curr.next.next 
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = nil 
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
        curr = @head 

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

        curr = @head 
        (position-2).times do
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = curr.next.next
        @size -= 1
        data
    end

    def empty?
        @head == nil
    end 

    def size 
        return @size
    end 

    def printall
        nodes = []
        curr = @head 
        while curr 
            nodes.push curr.data
            curr = curr.next
        end 
        nodes.join(" ")
    end
end