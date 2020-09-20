// Hash map key string to any value
// Overwrite on collision
class HashTable1 {
    constructor (size = 100) {
        this._storage = [];
        this._storageSize = size;
    }

    // Hash a key string to an index number
    _hashFunction (key) {
        let sum = 0;
        for (let i = 0; i < key.length; i += 1) {
            sum += key.charCodeAt(i) * 3;
        }
        return sum % this._storageSize;
    }

    insert (key, value) {
        const index = this._hashFunction(key);
        this._storage[index] = value;
        return value;
    }

    remove (key) {
        const index = this._hashFunction(key);
        const value = this._storage[index];
        delete this._storage[index];
        return value;
    }

    retrieve (key) {
        const index = this._hashFunction(key);
        const value = this._storage[index];
        return value;
    }
}

// Hash map key string to any value
// Build array of collisions
// class HashTable2

// Hash map key string to any value
// Build linked list of collisions
// class HashTable3


const hashTable1 = new HashTable1(100);
console.log(hashTable1._storage)

hashTable1.insert('a', 'apple');
hashTable1.insert('b', 'banana');
hashTable1.insert('c', 'cherry');
console.log(hashTable1.retrieve('a'))
console.log(hashTable1.retrieve('b'))
console.log(hashTable1.retrieve('c'))
console.log(hashTable1.retrieve('d'))
console.log(hashTable1._storage)

hashTable1.remove('a');
hashTable1.remove('b');
hashTable1.remove('d');
console.log(hashTable1.retrieve('a'))
console.log(hashTable1.retrieve('b'))
console.log(hashTable1.retrieve('c'))
console.log(hashTable1.retrieve('d'))

console.log(hashTable1._storage)
