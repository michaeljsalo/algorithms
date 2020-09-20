const binaryTree = {
    data: 'a',
    left: {
        data: 'b',
        left: {
            data: 'c',
            left: {
                data: 'd',
            },
        },
        right: {
            data: 'e',
        },
    },
    right: {
        data: 'f',
    },
};

// Recursive traversal
function traverseTree1 (tree = {}) {
    if (tree && Object.keys(tree).length) {
        console.log(tree.data);
        traverseTree1(tree.left);
        traverseTree1(tree.right);
    }
}

// Iterative traversal
function traverseTree2 (tree = {}) {
    const treeStack = [];
    treeStack.push(tree);

    let subtree;
    while (treeStack.length) {
        subtree = treeStack.pop();
        if (subtree && Object.keys(subtree).length) {
            console.log(subtree.data);
            treeStack.push(subtree.right);
            treeStack.push(subtree.left);
        }
    }
}

// Recursive search
function searchTree1 (tree = {}, needle = '') {
    if (tree && Object.keys(tree).length) {

        // Base case: found it
        if (tree.data === needle) {
            return true;
        }

        // Recursive case: check branches
        return searchTree1(tree.left, needle) || searchTree1(tree.right, needle);
    }

    // Base case: not found
    return false;
}

// Iterative search
function searchTree2 (tree = {}, needle = '') {
    const treeStack = [];
    treeStack.push(tree);

    let subtree;
    while (treeStack.length) {
        subtree = treeStack.pop();

        if (subtree && Object.keys(subtree).length) {
            // Found it
            if (subtree.data === needle) {
                return true;
            }

            // Keep searching
            treeStack.push(subtree.right);
            treeStack.push(subtree.left);
        }
    }

    // Didn't find it
    return false;
}

// Save a count in closure
function countTreeNodes1 (tree = {}) {
    let count = 0;

    (function inner (subtree) {
        if (subtree && Object.keys(subtree).length) {
            count += 1;
            inner(subtree.left);
            inner(subtree.right);
        }
    }(tree));

    return count;
}

// Accumulate a count and return at base case
function countTreeNodes2 (tree = {}, count = 0) {
    if (tree && Object.keys(tree).length) {
        return 1 + countTreeNodes2(tree.left, count) + countTreeNodes2(tree.right, count);
    } else {
        return count;
    }
}

// Build a count with return values
function countTreeNodes3 (tree = {}) {
    if (tree && Object.keys(tree).length) {
        return 1 + countTreeNodes3(tree.left) + countTreeNodes3(tree.right);
    } else {
        return 0;
    }
}

// Save a count in closure
function countTreeLeaves1 (tree = {}) {
    let count = 0;

    (function inner (subtree) {
        if (subtree && subtree.data) {
            if (subtree.left || subtree.right) {
                inner(subtree.left);
                inner(subtree.right);
            } else {
                count += 1;
            }
        }
    }(tree));

    return count;
}

// Build a count with return values
function countTreeLeaves2 (tree = {}) {
    if (tree && tree.data) {
        if (tree.left || tree.right) {
            return countTreeLeaves2(tree.left) + countTreeLeaves2(tree.right);
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}

function traverseTreeHeight (tree = {}, height = 0) {
    if (tree && Object.keys(tree).length) {
        height += 1;
        console.log(tree.data, height);
        traverseTreeHeight(tree.left, height);
        traverseTreeHeight(tree.right, height);
    }
}

// Build a result forward
function getTreeHeight1 (tree = {}, height = 0) {
    if (tree && Object.keys(tree).length) {

        // Each node adds one to height
        height += 1;

        // Recursive case: follow branches
        const leftHeight = getTreeHeight1(tree.left, height);
        const rightHeight = getTreeHeight1(tree.right, height);
        return Math.max(height, leftHeight, rightHeight);
    }

    // Base case: leaf node
    return height;
}

// Return a result backward
function getTreeHeight2 (tree = {}) {
    if (tree && Object.keys(tree).length) {

        // Recursive case: follow branches
        const leftHeight = getTreeHeight2(tree.left);
        const rightHeight = getTreeHeight2(tree.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Base case: leaf node
    return 0;
}


console.log(JSON.stringify(binaryTree))
traverseTree1(binaryTree);
traverseTree2(binaryTree);
console.log(searchTree1(binaryTree, 'c'))
console.log(searchTree1(binaryTree, 'f'))
console.log(searchTree1(binaryTree, 'g'))
console.log(searchTree2(binaryTree, 'c'))
console.log(searchTree2(binaryTree, 'f'))
console.log(searchTree2(binaryTree, 'g'))
console.log(countTreeNodes1(binaryTree))
console.log(countTreeNodes2(binaryTree))
console.log(countTreeNodes3(binaryTree))
console.log(countTreeLeaves1(binaryTree))
console.log(countTreeLeaves2(binaryTree))
traverseTreeHeight(binaryTree)
console.log(getTreeHeight1(binaryTree))
console.log(getTreeHeight2(binaryTree))
