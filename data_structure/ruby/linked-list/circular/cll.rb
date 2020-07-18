# Circular Linked List

module CircularLinkedList
  class Singly
    class Node
      attr_accessor :data, :next     

      def initialize(data, _next=nil)
        @data = data
        @next = _next
      end
    end

    # constructor
    def initialize
      @last = nil
      @length = 0
    end

    # inserts a node at the end
    def insert(data)
      new_node = Node.new(data)

      if @last == nil
        @last = new_node
        @last.next = @last
      else
        new_node.next = @last.next
        @last.next = new_node
        @last = new_node
      end

      @length += 1
    end

    # inserts a node at 'index'
    def insert_at(index, data)
      if index < 0 or index > @length
        # out of bounds
        puts ".. cannot insert '#{data}' at index #{index}"
      elsif @length == 0 or index == @length
        # insert at the back
        insert(data)
      elsif index == 0
        # insert at the front
        new_node = Node.new(data)
        
        new_node.next = @last.next
        @last.next = new_node
        
        @length += 1
      else
        # insert in between
        new_node = Node.new(data)
        curr = get_node_at(index-1)

        new_node.next = curr.next
        curr.next = new_node
        @length += 1
      end
    end

    def get_node_at(index)
      return @last.next if index == 0
      return @last if index == @length

      curr = @last.next
      index.times do 
        curr = curr.next
      end

      return curr
    end

    def remove_last
      data = @last.data

      curr = get_node_at(@length-2)
      curr.next = @last.next
      @last = curr

      @length -= 1
      data
    end

    # removes a node at 'index' from the list  
    def remove_at(index)
      data = nil
      if index < 0 or index > @length
        puts "... cannot remove a node at index #{index}"
        return
      elsif @length == 1
        # remove the only node
        data = @last.data
        @last = nil
        @length = 0
      elsif index == 0
        # remove the head node
        data = @last.next.data
        @last.next = @last.next.next

        @length -= 1
      elsif index == @length-1
        # remove the last node
        data = remove_last
      else
        # remove a node in between nodes
        curr = get_node_at(index-1)
        data = curr.next.data
        curr.next = curr.next.next

        @length -= 1
      end

      return data
    end

    # search for 'data' and return its index or -1 
    def search(data)
      return 0 if @last.next.data == data
      return @length if @last.data == data

      curr = @last.next.next
      for i in 1...@length do
        return i if curr.data == data
        curr = curr.next
      end

      return -1
    end

    def empty?
      return @length == 0
    end

    def print_list
      if @last != nil
        curr = @last.next
        while curr != @last do
          print "#{curr.data} "
          curr = curr.next
        end
        puts curr.data
      else
        puts "list is empty.."
      end
    end

    def length
      @length
    end
  end

  class Doubly
    class Node
      attr_accessor :data, :prev, :next

      def initialize(data, prev=nil, _next=nil)
        @data = data
        @prev = prev
        @next = _next
      end
    end

    def initialize
      @head = nil
      @length = 0
    end

    # inserts a node at the end
    def insert(data)
      if @head == nil
        @head = Node.new(data)
        @head.prev = @head
        @head.next = @head
      else
        new_node = Node.new(data, @head.prev, @head)
        @head.prev.next = @head.prev = new_node
      end
      @length += 1
    end

    def insert_at(index, data)
      if index < 0 or index > @length
        # out of bounds
        puts ".. cannot insert '#{data}' at index #{index}"
      elsif @length == 0 or index == @length
        insert(data)
      elsif index == 0
        new_node = Node.new(data, @head.prev, @head)
        @head.prev.next = new_node
        @head.prev = new_node
        @head = new_node

        @length += 1
      else
        curr = get_node_at(index)
        new_node = Node.new(data, curr.prev, curr)
        curr.prev.next = curr.prev = new_node

        @length += 1
      end

    end

    def get_node_at(index)
      curr = @head
      index.times do
        curr = curr.next
      end

      curr
    end

    def remove_last
      data = @head.prev.data
        
      @head.prev.prev.next = @head
      @head.prev = @head.prev.prev

      @length -= 1
      data
    end

    def remove_at(index)
      data = nil

      if index < 0 or index >= @length
        puts "... cannot remove a node at index #{index}"
        return
      elsif @length == 1
        data = @head.data
        @head = nil
        @length = 0
      elsif index == 0
        data = @head.data
        @head.next.prev = @head.prev
        @head.prev.next = @head.next
        @head = @head.next

        @length -= 1
      elsif index == @length-1
        data = remove_last
      else
        curr = get_node_at(index)
        curr.prev.next = curr.next
        curr.next.prev = curr.prev

        @length -= 1
      end

      data
    end

    def search(data)
      return 0 if @head.data == data
      return @length if @head.prev.data == data

      curr = @head.next
      for i in 1...@length
        return i if curr.data == data
        curr = curr.next
      end
      
      return -1
    end

    def empty?
      return @length == 0
    end

    def print_list
      if @head != nil 
        print "#{@head.data} "
        curr = @head.next
        while curr != @head
          print "#{curr.data} "
          curr = curr.next
        end
        puts " ( len: #{@length} )"
      else
        puts "list is empty.."
      end
    end

    def length
      @length
    end
  end
end

#list = CircularLinkedList::Singly.new
list = CircularLinkedList::Doubly.new

puts "Insert at the back [1, 2, 3]"
list.insert(1)
list.print_list
list.insert(2)
list.print_list
list.insert(3)
list.print_list

puts "================================"

puts "Insert at the front [4, 5, 6]"
list.insert_at(0, 4)
list.print_list
list.insert_at(0, 5)
list.print_list
list.insert_at(0, 6)
list.print_list

puts "================================"

puts "Insert 10 at index 3"
list.insert_at(3, 10)
list.print_list
puts "Insert 20 at index 6"
list.insert_at(6, 20)
list.print_list
puts "Insert 30 at index 8"
list.insert_at(8, 30)
list.print_list

puts "================================"

puts "remove front"
puts "removed #{list.remove_at(0)}"
list.print_list

puts "removed #{list.remove_at(0)}"
list.print_list

puts "removed #{list.remove_at(0)}"
list.print_list

puts "================================"

puts "remove last"
puts "removed #{list.remove_last}"
list.print_list
puts "removed #{list.remove_last}"
list.print_list
puts "removed #{list.remove_last}"
list.print_list
puts "removed #{list.remove_last}"
list.print_list
puts "removed #{list.remove_last}"
list.print_list

puts "================================"

puts "insert 9 at the back"
list.insert(9)
list.print_list

puts "================================"

puts "insert 99 at the front"
list.insert_at(0, 99)
list.print_list

puts "================================"

puts "insert 999 at index 1"
list.insert_at(1, 999)
list.print_list

puts "================================"

puts "remove at index 2"
list.remove_at(2)
list.print_list

puts "================================"

while !list.empty? do
  puts "removed #{list.remove_at(0)}"
  list.print_list
end

puts "================================"

puts "insert 7 at index 1"
list.insert_at(1, 7)
list.print_list
puts "insert 7 at index 0"
list.insert_at(0, 7)
list.print_list

puts "insert 77 at index 1"
list.insert_at(1, 77)
list.print_list

puts "insert 5 at the back"
list.insert(5)
list.print_list

puts "================================"

while !list.empty? do
  puts "removed #{list.remove_at(0)}"
  list.print_list
end