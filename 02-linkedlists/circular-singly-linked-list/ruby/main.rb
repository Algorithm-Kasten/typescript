class Node 
    attr_accessor :next
    attr_reader :data

    def initialize(value)
        @data = value
        @next = nil
    end
end

class CircularSinglyLinkedList
    def initialize 
        @head = nil
        @tail = nil
        @size = 0
    end 

    def push_front(value)
        @size += 1
        new_node = Node.new(value)

        if @head == nil 
            @head = new_node
            @tail = @head
            @tail.next = @head
            return
        end

        new_node.next = @head
        @head = new_node
        @tail.next = @head
    end 

    def push_back(value)
        return push_front(value) if @head == nil 

        new_node = Node.new(value)
        new_node.next = @head
        @tail.next = new_node
        @tail = new_node
        @size += 1
    end 

    
    def pop_front
        return if self.empty?
        if @size == 1
            data = @head.data
            @head = @tail = nil
            @size = 0
            return data
        end

        data = @head.data 
        @head = @head.next
        @tail.next = @head
        @size -= 1
        data
    end
    
    def pop_back
        return if self.empty?
        return pop_front if @size == 1

        curr = @head
        while curr.next != @tail
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = @head 
        @tail = curr
        @size -= 1
        data
    end
    
    # 1-based index
    def insertAt(position, value)
        return push_front(value) if position == 1
        return push_back(value) if position == @size+1

        curr = @head
        
        (position-2).times do 
            curr = curr.next
        end 
        
        new_node = Node.new(value)
        new_node.next = curr.next 
        curr.next = new_node
        @size += 1
    end 
    
    # 1-based index
    def deleteAt(position)
        return pop_front if position == 1
        return pop_back if position == @size+1

        curr = @head
        (position-2).times do
            curr = curr.next 
        end 

        data = curr.next.data
        curr.next = curr.next.next
        @size -= 1
        data
    end

    def reverse 
        prev = @tail
        curr = @head
    
        while curr != @tail
            nxt = curr.next
            curr.next = prev
            prev = curr;
            curr = nxt;
        end

        curr.next = prev 
        prev = curr
        @tail = @head
        @head = prev
    end 
    
    def front
        return nil if self.empty? 
        return @head.data
    end
    
    def back 
        return nil if self.empty? 
        return @tail.data
    end 
    
    def empty?
        @size == 0
    end 

    def size 
        return @size
    end 

    def printall
        return "" if @size == 0
        nodes = []
        curr = @head
        while curr.next != @head
            nodes.push curr.data
            curr = curr.next
        end 
        nodes.push curr.data
        nodes.join(" ")
    end
end