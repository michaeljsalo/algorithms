const naryTree = {
    data: 'a',
    children: [
        {
            data: 'b',
            children: [
                {
                    data: 'c',
                    children: [
                        {
                            data: 'd',
                        }
                    ],
                },
                {
                    data: 'e',
                },
            ],
        },
        {
            data: 'f',
        },
        {
            data: 'g',
        },
    ],
};

// Recursive traversal
function traverseTree1 (tree = {}) {
    if (tree && Object.keys(tree).length) {
        console.log(tree.data);
        if (tree.children && tree.children.length) {
            tree.children.forEach(child => {
                traverseTree1(child);
            });
        }
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
            if (subtree.children && subtree.children.length) {
                subtree.children.slice().reverse().forEach(child => {
                    treeStack.push(child);
                });
            }
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
        if (tree.children && tree.children.length) {
            return tree.children.some(child => searchTree1(child, needle));
        }
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
            if (subtree.children && subtree.children.length) {
                subtree.children.slice().reverse().forEach(child => treeStack.push(child));
            }
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
            (subtree.children || []).forEach(child => inner(child));
        }
    }(tree));

    return count;
}

// Accumulate a count and return at base case
function countTreeNodes2 (tree = {}, count = 0) {
    if (tree && Object.keys(tree).length) {
        return 1 + (tree.children || []).reduce((count, child) => count + countTreeNodes2(child, count), 0);
    } else {
        return count;
    }
}

// Build a count with return values
function countTreeNodes3 (tree = {}) {
    if (tree && Object.keys(tree).length) {
        return 1 + (tree.children || []).reduce((count, child) => count + countTreeNodes3(child), 0);
    } else {
        return 0;
    }
}

// Save a count in closure
function countTreeLeaves1 (tree = {}) {
    let count = 0;

    (function inner (subtree) {
        if (subtree && subtree.data) {
            if (subtree.children && subtree.children.length) {
                subtree.children.forEach(child => inner(child));
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
        if (tree.children && tree.children.length) {
            return tree.children.reduce((count, child) => count + countTreeLeaves2(child), 0);
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
        if (tree.children && tree.children.length) {
            tree.children.forEach(child => traverseTreeHeight(child, height));
        }
    }
}

// Build a result forward
function getTreeHeight1 (tree = {}, height = 0) {
    if (tree && Object.keys(tree).length) {

        // Each node adds one to height
        height += 1;

        // Recursive case: follow branches
        const childHeight = [];
        if (tree.children && tree.children.length) {
            tree.children.forEach((child, index) => {
                childHeight[index] = getTreeHeight1(child, height);
            });
        }
        return Math.max(height, ...childHeight);
    }

    // Base case: leaf node
    return height;
}

// Return a result backward
function getTreeHeight2 (tree = {}) {
    if (tree && Object.keys(tree).length) {

        // Recursive case: follow branches
        const childHeight = [];
        if (tree.children && tree.children.length) {
            tree.children.forEach((child, index) => {
                childHeight[index] = getTreeHeight2(child);
            });
        }
        return 1 + Math.max(0, ...childHeight);
    }

    // Base case: leaf node
    return 0;
}


console.log(JSON.stringify(naryTree))
traverseTree1(naryTree);
traverseTree2(naryTree);
console.log(searchTree1(naryTree, 'c'))
console.log(searchTree1(naryTree, 'f'))
console.log(searchTree1(naryTree, 'g'))
console.log(searchTree1(naryTree, 'z'))
console.log(searchTree2(naryTree, 'c'))
console.log(searchTree2(naryTree, 'f'))
console.log(searchTree2(naryTree, 'g'))
console.log(searchTree2(naryTree, 'z'))
console.log(countTreeNodes1(naryTree))
console.log(countTreeNodes2(naryTree))
console.log(countTreeNodes3(naryTree))
console.log(countTreeLeaves1(naryTree))
console.log(countTreeLeaves2(naryTree))
traverseTreeHeight(naryTree)
console.log(getTreeHeight1(naryTree))
console.log(getTreeHeight2(naryTree))
