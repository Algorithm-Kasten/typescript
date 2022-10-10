#include <iostream>
#include <vector>
using namespace std;

class AdjacencyList {
  private:
    int v;
    vector<vector<int>> graph;

  public:
    AdjacencyList(int V) : v(V) {
      graph.resize(v);
    }
    ~AdjacencyList() = default;

    void insertEdge(int u, int v) {
      graph[u].push_back(v);
      graph[v].push_back(u);
    }

    void display() {
      for(int i=0; i<graph.size(); ++i) {
        if(graph[i].size() == 0) {continue;}

        cout << i << ": ";
        for(int j=0; j<graph[i].size(); ++j)
          cout << graph[i][j] << " - ";
        cout << endl;
      }
    }
};

int main() {
  const int V = 5;
  AdjacencyList am(V);

  am.insertEdge(0, 1);
  am.insertEdge(0, 2);
  am.insertEdge(0, 3);
  am.insertEdge(1, 2);
  am.insertEdge(2, 3);
  am.insertEdge(3, 4);

  am.display();

  return 0;
}