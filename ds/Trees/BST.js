class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor(data = null) {
    this.root = new Node(data);
  }

  addChild(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }

    let curr = this.root;
    let added = false;

    while (!added) {
      if (val <= curr.data) {
        if (curr.left === null) {
          curr.left = new Node(val);
          added = true;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right === null) {
          curr.right = new Node(val);
          added = true;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  removeChild(val) {
    if (this.root === null) {
      return;
    }

    let curr = this.root;
    let found = false;
    let nodeToBeRemoved = null;
    let parent = null;

    while (!found) {
      if (curr === null) {
        return;
      }

      if (curr.data === val) {
        nodeToBeRemoved = curr;
        found = true;
      } else if (val < curr.data) {
        parent = curr;
        curr = curr.left;
      } else {
        parent = curr;
        curr = curr.right;
      }
    }

    // Node to be removed has no children
    if (nodeToBeRemoved.left === null && nodeToBeRemoved.right === null) {
      if (parent.left === nodeToBeRemoved) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Node to be removed has only a left child
    else if (nodeToBeRemoved.left !== null && nodeToBeRemoved.right === null) {
      if (parent.left === nodeToBeRemoved) {
        parent.left = nodeToBeRemoved.left;
      } else {
        parent.right = nodeToBeRemoved.left;
      }
    }
    // Node to be removed has only a right child
    else if (nodeToBeRemoved.left === null && nodeToBeRemoved.right !== null) {
      if (parent.left === nodeToBeRemoved) {
        parent.left = nodeToBeRemoved.right;
      } else {
        parent.right = nodeToBeRemoved.right;
      }
    }
    // Node to be removed has a left and right child
    else {
      if (parent.left === nodeToBeRemoved) {
        parent.left = nodeToBeRemoved.right;
      } else {
        parent.right = nodeToBeRemoved.right;
      }

      let curr = nodeToBeRemoved.right;
      let foundSpace = false;

      while (!foundSpace) {
        if (curr.left === null) {
          curr.left = nodeToBeRemoved.left;
          foundSpace = true;
        } else {
          curr = curr.left;
        }
      }
    }
  }
}

const tree = new BSTree(5);
tree.addChild(1);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
tree.addChild(6);
tree.addChild(7);
tree.addChild(8);
tree.addChild(9);
tree.addChild(10);

tree.removeChild(8);
tree.removeChild(3);

console.log(JSON.stringify(tree));
