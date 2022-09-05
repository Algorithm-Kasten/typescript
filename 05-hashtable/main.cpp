#include "closed_hashing.hpp"

int main()
{
    HashTable ht;
    ht.insert("Madelen", 20);
    ht.display();

    ht.insert("Madelen", 1);
    ht.display();
    ht.insert("Madelen", 2);
    ht.display();
    ht.insert("Madelen", 3);
    ht.display();
    ht.insert("Madelen", 4);
    ht.display();
    ht.insert("Madelen", 5);
    ht.display();
    ht.insert("Madelen", 6);
    ht.display();

    return 0;
}