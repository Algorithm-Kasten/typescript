#include <vector>
#include <list>
using namespace std;

class HashTable {
private:
    int prime;
    vector<list<int>> table;
    
    int hash(int key) {
        return key % prime;
    }
    
    list<int>::iterator search(int key) {
        int h = hash(key);
        return find(table[h].begin(), table[h].end(), key);
    }
    
public:
    /** Initialize your data structure here. */
    HashTable() : prime(10007), table(prime) {}
    
    void add(int key) {
        int h = hash(key);
        if(!contains(key))
            table[h].push_back(key);
    }
    
    void remove(int key) {
        int h = hash(key);
        auto it = search(key);
        if (it != table[h].end())
            table[h].erase(it);
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        int h = hash(key);
        return search(key) != table[h].end();
    }
;