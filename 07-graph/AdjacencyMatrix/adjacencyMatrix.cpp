#include <iostream>
using namespace std;

class AdjacencyMatrix {
  private:
    int v;
    bool **graph;

  public:
    AdjacencyMatrix(int V) : v(V) {
      graph = new bool *[v];
      for(int i=0; i<v; ++i)
        graph[i] = new bool[v];
    }

    ~AdjacencyMatrix() {
      for(int i=0; i<v; ++i)
        delete[] graph[i];

      delete graph;
    }

    void insertEdge(int u, int v) {
      graph[u][v] = 1;
      graph[v][u] = 1;
    }

    void display() {
      for(int i=0; i<v; ++i) {
        for(int j=0; j<v; ++j)
            cout << graph[i][j] << ' ';
        cout << endl;
      }
    }
};

int main() {
  const int V = 5;
  AdjacencyMatrix am(V);

  am.insertEdge(0, 1);
  am.insertEdge(0, 2);
  am.insertEdge(0, 3);
  am.insertEdge(1, 2);
  am.insertEdge(2, 3);
  am.insertEdge(3, 4);

  am.display();

  return 0;
}