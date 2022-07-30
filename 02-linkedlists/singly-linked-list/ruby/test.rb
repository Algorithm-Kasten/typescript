require "./main.rb"

RSpec.describe SinglyLinkedList do
    it 'initialize' do 
        list = SinglyLinkedList.new 
        expect(list.size).to eq 0
    end 

    it 'push_front and push_back' do 
        list = SinglyLinkedList.new 
        list.push_back(1)
        expect(list.printall).to eq "1"
        list.push_front(2)
        expect(list.printall).to eq "2 1"
        list.push_back(3)
        expect(list.printall).to eq "2 1 3"
        list.push_front(4)
        expect(list.printall).to eq "4 2 1 3"
        list.push_back(5)
        expect(list.printall).to eq "4 2 1 3 5"
        list.push_front(6)
        expect(list.printall).to eq "6 4 2 1 3 5"
    end 

    it 'insert in between nodes' do
        list = SinglyLinkedList.new 
        list.push_back(1)
        list.push_back(2)
        list.push_back(3)
        list.push_back(4)
        list.push_back(5)
        expect(list.printall).to eq "1 2 3 4 5"
        expect(list.size).to eq 5
        
        list.insertAt(1, 17)
        expect(list.printall).to eq "17 1 2 3 4 5"
        list.insertAt(3, 71)
        expect(list.printall).to eq "17 1 71 2 3 4 5"
        list.insertAt(7, 10)
        expect(list.printall).to eq "17 1 71 2 3 4 5 10"
        list.insertAt(1, 0)
        expect(list.printall).to eq "0 17 1 71 2 3 4 5 10"
        expect(list.size).to eq 9
    end

    it 'delete front and back' do
        list = SinglyLinkedList.new 
        list.push_back(1)
        list.push_front(2)
        list.push_back(3)
        list.push_front(4)
        list.push_back(5)
        list.push_front(6)
        expect(list.printall).to eq "6 4 2 1 3 5"
        
        expect(list.pop_back).to eq 5
        expect(list.printall).to eq "6 4 2 1 3"

        expect(list.pop_back).to eq 3
        expect(list.printall).to eq "6 4 2 1"

        expect(list.pop_front).to eq 6
        expect(list.printall).to eq "4 2 1"

        expect(list.pop_front).to eq 4
        expect(list.printall).to eq "2 1"

        expect(list.pop_back).to eq 1
        expect(list.printall).to eq "2"

        expect(list.pop_back).to eq 2
        expect(list.printall).to eq ""
    end

    it 'delete in between nodes' do 
        list = SinglyLinkedList.new 
        list.push_back(1)
        list.push_front(2)
        list.push_back(3)
        list.push_front(4)
        list.push_back(5)
        list.push_front(6)
        expect(list.printall).to eq "6 4 2 1 3 5"
        expect(list.size).to eq 6


        expect(list.deleteAt(1)).to eq 6
        expect(list.printall).to eq "4 2 1 3 5"
        expect(list.size).to eq 5

        expect(list.deleteAt(2)).to eq 2
        expect(list.printall).to eq "4 1 3 5"
        expect(list.size).to eq 4

        expect(list.deleteAt(3)).to eq 3
        expect(list.printall).to eq "4 1 5"
        expect(list.size).to eq 3

        expect(list.deleteAt(2)).to eq 1
        expect(list.printall).to eq "4 5"
        expect(list.size).to eq 2

        expect(list.deleteAt(1)).to eq 4
        expect(list.printall).to eq "5"
        expect(list.size).to eq 1

        expect(list.deleteAt(1)).to eq 5
        expect(list.printall).to eq ""
        expect(list.size).to eq 0
    end 

    it 'empty check' do 
        list = SinglyLinkedList.new 
        expect(list.empty?).to eq true

        list.push_front(5);
        expect(list.empty?).to eq false
        list.pop_front
        expect(list.empty?).to eq true
    end
end  