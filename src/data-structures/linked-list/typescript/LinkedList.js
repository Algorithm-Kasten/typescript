var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    LinkedList.prototype.prepend = function (value) {
        this.count += 1;
        var newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.head.next = this.tail;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    };
    LinkedList.prototype.append = function (value) {
        this.count += 1;
        var newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.head.next = this.tail;
            return;
        }
        if (this.tail)
            this.tail.next = newNode;
        this.tail = newNode;
    };
    // pos: position -> 1-based index
    LinkedList.prototype.insert = function (value, pos) {
        if (this.head === null || pos <= 1) {
            this.prepend(value);
            return;
        }
        if (pos === this.count) {
            this.append(value);
            return;
        }
        this.count += 1;
        var curr = this.head;
        for (var i = 1; i < pos - 1; ++i) {
            if (curr === null || curr === void 0 ? void 0 : curr.next)
                curr = curr.next;
        }
        var newNode = new LinkedListNode(value);
        if (curr) {
            newNode.next = curr.next;
            curr.next = newNode;
        }
    };
    LinkedList.prototype.remove = function (value) {
        if (this.head === null) {
            console.error('list is empty');
            return;
        }
        this.count -= 1;
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.count === 0) {
                this.head = this.tail = null;
            }
            return;
        }
        var curr = this.head;
        while (curr === null || curr === void 0 ? void 0 : curr.next) {
            if (curr.next.value === value) {
                curr.next = curr.next.next;
                if (curr.next === null) {
                    this.tail = curr;
                }
                break;
            }
            curr = curr.next;
        }
    };
    LinkedList.prototype.search = function (value) {
        var curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    };
    LinkedList.prototype.length = function () {
        return this.count;
    };
    LinkedList.prototype.print = function () {
        if (this.count === 0) {
            console.error('list is empty');
            return;
        }
        var curr = this.head;
        var str = '';
        while (curr && curr !== this.tail) {
            str += "".concat(curr.value, " ");
            curr = curr === null || curr === void 0 ? void 0 : curr.next;
        }
        str += "".concat(curr === null || curr === void 0 ? void 0 : curr.value, " ");
        console.log(str);
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append(3);
list.print();
list.append(4);
list.print();
list.append(5);
list.print();
list.prepend(1);
list.print();
list.prepend(2);
list.print();
list.prepend(3);
list.print();
list.insert(17, 1);
list.print();
list.insert(17, list.length());
list.print();
list.insert(77, 3);
list.print();
list.remove(77);
list.print();
list.remove(1);
list.print();
list.remove(1);
list.print();
list.remove(3);
list.remove(3);
list.print();
list.remove(17);
list.print();
list.remove(17);
list.print();
list.remove(2);
list.print();
list.remove(4);
list.print();
list.remove(5);
list.print();
