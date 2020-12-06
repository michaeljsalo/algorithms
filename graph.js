// Graph work in progress

// Possible graph structures:
// Graph as object of arrays
// Graph as object of objects
// Graph as object of sets
// Graph as set of sets

class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (value) {
    this.adjacencyList[value] = new Set()
  }

  removeVertex (value) {
    // Remove edges first
    // Filter every set of edges

    delete this.adjacencyList[value]
  }

  addEdge (value1, value2) {
    this.adjacencyList[value1].add(value2)
    this.adjacencyList[value2].add(value1)
  }

  removeEdge (value1, value2) {
    this.adjacencyList[value1].delete(value2)
    this.adjacencyList[value2].delete(value1)
  }
}
