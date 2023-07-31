class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push(new Node(value));
  }

  removeNode(value) {
    this.nodes = this.nodes.filter((node) => node.value !== value);
    this.nodes.forEach((node) => {
      node.edges = node.edges.filter((edge) => edge.value !== value);
    });
  }

  getNode(value) {
    return this.nodes.find((node) => node.value === value);
  }

  addEdge(value1, value2) {
    const node1 = this.nodes.find((node) => node.value === value1);
    const node2 = this.nodes.find((node) => node.value === value2);

    node1.edges.push(node2);

    if (!this.directed) {
      node2.edges.push(node1);
    }
  }
}
