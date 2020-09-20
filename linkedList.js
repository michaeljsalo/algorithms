class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    isHead (node) {
        return node === this.head;
    }

    isTail (node) {
        return node.next === null;
    }

    contains (value) {
        if (this.head) {
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    getNodeByPosition (position = 0) {
        if (this.head) {
            let current = this.head;
            let index = 0;
            while (current) {
                if (index === position) {
                    return current;
                }
                current = current.next;
                index += 1;
            }
        }
        return null;
    }

    getNodeByValue (value) {
        if (this.head) {
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    return current;
                }
                current = current.next;
            }
        }
        return null;
    }

    getPositionByValue (value) {
        if (this.head) {
            let current = this.head;
            let index = 0;
            while (current) {
                if (current.value === value) {
                    return index;
                }
                current = current.next;
                index += 1;
            }
        }
        return -1;
    }

    getValueByPosition (position = 0) {
        if (this.head) {
            let current = this.head;
            let index = 0;
            while (current) {
                if (index === position) {
                    return current.value;
                }
                current = current.next;
                index += 1;
            }
        }
        return undefined;
    }

    getTail () {
        if (this.head) {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            return tail;
        }
        return null;
    }

    append (value) {
        if (this.head) {
            const tail = this.getTail();
            tail.next = new Node(value);
        } else {
            this.head = new Node(value);
        }
    }

    insertValueAtPosition (value, position = 0) {

        // If list is populated
        if (this.head) {
            let prev = null;
            let current = this.head;
            let index = 0;

            // Traverse the list
            while (current) {

                // If position is found
                if (index === position) {

                    // Create the node to be inserted
                    let newNode = new Node(value);

                    // If inserting at head position
                    if (position === 0) {
                        this.head = newNode;
                        this.head.next = current;

                    // If inserting at tail position
                    } else if (current.next === null) {
                        current.next = newNode;

                    // If inserting in the middle
                    } else {
                        prev.next = newNode;
                        newNode.next = current;
                    }
                    return;
                }
                prev = current;
                current = current.next;
                index += 1;
            }

            // If position is not found
            // Append at tail
            prev.next = new Node(value);

        // If list is empty
        } else {
            // Insert at head
            this.head = new Node(value);
        }
    }

    remove (node) {
        // Find node in list
        // Keep reference to prev and next
        // Link prev and next
        // Delete the node

        // Special cases:
        // If not found, do nothing
        // If head and tail, clear list
        // If head, update the head
        // If tail, set next to null

        let isFound = false;
        let prev = null;
        let current = this.head;
        while (current) {
            if (current === node) {
                isFound = true;
                break;
            }
            prev = current;
            current = current.next;
        }

        if (isFound) {
            const isHead = prev === null;
            const isTail = current.next === null;
            console.log(isFound, isHead, isTail)

            if (isHead && isTail) {
                this.head = null;
            } else if (isHead) {
                this.head = current.next;
            } else if (isTail) {
                prev.next = null;
            } else {
                prev.next = current.next;
            }

            current === null;
            node === null;
        }
    }

    removeTail () {
        this.remove(getTail());
    }

    // Loop through with three pointers:
    // prev, current, next
    // Repeatedly set current.next to prev
    // Update head reference at the end
    reverse () {
        let prev = null;
        let current = this.head;
        let next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
};


const myList = new LinkedList();
console.log(JSON.stringify(myList))
console.log(myList.contains('A'))

myList.append('A');
myList.append('B');
myList.append('C');
console.log(JSON.stringify(myList))
myList.reverse();
console.log(JSON.stringify(myList))
myList.reverse();
console.log(JSON.stringify(myList))

console.log(myList.contains('A'))
console.log(myList.contains('B'))
console.log(myList.contains('C'))
console.log(myList.contains('D'))

myList.remove(myList.getTail());
console.log(JSON.stringify(myList))

myList.remove(myList.head);
console.log(JSON.stringify(myList))

myList.remove(myList.head);
console.log(JSON.stringify(myList))

myList.remove(myList.head);
console.log(JSON.stringify(myList))

myList.append('X');
myList.append('Y');
myList.append('Z');
console.log(JSON.stringify(myList))

myList.insertValueAtPosition('INSERT1', 1);
myList.insertValueAtPosition('INSERT2', 1);
myList.insertValueAtPosition('INSERT3', 100);
console.log(JSON.stringify(myList))
