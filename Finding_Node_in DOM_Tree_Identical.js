//1st Approach - Iteratively
function getPath(root, node) {
  const path = [];

  // going from bottom to top
  while (node !== root) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    // finding the index of the current node wrt its parent
    const nodeIndex = children.indexOf(node);
    path.push(nodeIndex);
    node = parent;
  }

  return path;
}

//Now, I have the path from rootA to nodeA. But in reverse order. 
//Let's write the function to iterate over a given path from rootB to reach nodeB.

function getNodeFromPath(node, path) {
    const pathToWalk = [...path];
  
    while (pathToWalk.length > 0) {
      // using pop, we made up for the reverse order of path
      node = node.children[pathToWalk.pop()];
    }
  
    return node;
}


//2nd Approach Iteratively
function getPath(node, rootA) {
    const path = [];
    let currentNode = node;

    while (currentNode !== rootA) {
        const parent = currentNode.parentElement;
        const index = [...parent.children].indexOf(currentNode);
        path.unshift(index);
        currentNode = parent;
    }

    return path;
}

function getNodeFromPath(rootB, path) {
    return path.reduce((node, index) => node.children[index], rootB);
}

//I got the path in the top-down order, that's why I used unshift instead of push,
//and then I reduced that path until its last item to find the correspondent node from root B.


//Now, doing this recursively would be:

function findNode(nodeA, nodeB, targetNode) {
    for (let index = 0; index < nodeA.childElementCount; index++) {
        const currentNode = nodeA.children[index];

        if (currentNode === targetNode) {
            return nodeB.children[index];
        }

        if (currentNode.childElementCount) {
            return findNode(currentNode, nodeB.children[index], targetNode);
        }
    }
}

// The idea is to go from the top until finding the node from root A. 
// Once that is done, return the node from root B at the same position, 
// otherwise, loop its children (if any) using the same function (recursively).

// The recursive solution is probably more performant because:

// it loops through the tree once, while the interactive solution has to go twice. 
// First to find the path, then to find the node from the path itself
// it doesn't create new arrays like the interactive one does, to get the path 
// and also to find the index of the node from the children when getting the path
// I'm not sure how to express that complexity in terms of the Big O notation, 
// my guess is that the recursive solution is O(n) where n is the length of root A's tree. 
// Maybe the interactive solution would be expressed in the same way, although we are looping it twice.

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Facebook DOM Traversal</title>
</head>
<body>
  <div id="rootA">
    <div>
      <div></div>
    </div>
    
    <div></div>
      
    
    <div>
      <div>
        <div id="nodeA"></div>
        <div></div>
      </div>
    </div>
  </div>
    
  <div id="rootB">
    <div>
      <div></div>
    </div>
    
    <div></div>
    
    <div>
      <div>
        <div id="nodeB"></div>
        <div></div>
      </div>
    </div>
  </div>
</body>
</html>

const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getPath(root, node) {
  const path = [];
  
  while (node !== root) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    const nodeIndex = children.indexOf(node);
    path.push(nodeIndex);
    node = parent;
  }
  
  return path;
}

function getNodeFromPath(node, path) {
  const toWalk = [...path];
  
  while (toWalk.length > 0) {
    node = node.children[toWalk.pop()];
  }
  
  return node;
}

function getSymmetricNode(rootA, rootB, nodeA) {
  const pathToNode = getPath(rootA, nodeA);
  return getNodeFromPath(rootB, pathToNode);
}


const targetNode = getSymmetricNode(rootA, rootB, nodeA);

console.log(nodeB === targetNode);