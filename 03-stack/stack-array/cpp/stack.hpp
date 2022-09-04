#pragma once

#include <iostream>
using std::cerr;
using std::endl;
using std::cout;

template <typename T>
class Stack {
private:
    int topPos;
    int capacity;
    int *stack;

public:
    Stack<T>() {
        topPos = 0;
        capacity = 32;
        stack = new int[32];
    }
    ~Stack<T>() {
        delete stack;
    }

    void push(T data);
    T pop();
    T top();
    bool isEmpty();
    bool isFull();
    int size();
    void print();
};


template <typename T>
void Stack<T>::push(T data) {
    if(isFull()) {
        cerr << "[Overflow] Stack is full..." << endl;
        return;
    }

    stack[topPos++] = data;
}


template <typename T>
T Stack<T>::pop() {
    if(isEmpty()) {
        cerr << "[Underflow] Stack is empty..." << endl;
        return -1;
    }

    --topPos;
    T data = stack[topPos];

    return data;
}

template <typename T>
T Stack<T>::top() {
    return stack[topPos-1];
}

template <typename T>
bool Stack<T>::isEmpty() {
    return topPos == 0;
}

template <typename T>
bool Stack<T>::isFull() {
    return topPos == capacity;
}

template <typename T>
int Stack<T>::size() {
    return topPos;
}

template <typename T>
void Stack<T>::print() {
    for(int i=0; i<topPos; ++i) {
        cout << stack[i] << " ";
    }
    cout << endl;
}