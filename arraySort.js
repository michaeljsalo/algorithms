function makeOrderedArray (n = 0) {
    const orderedArray = [];
    for (let i = 1; i <= n; i += 1) {
        orderedArray.push(i);
    }
    return orderedArray;

    // Silly way
    // return new Array(n).fill().map((value, index) => index + 1);
}

function makeRandomArray (n = 0) {
    const randomArray = [];
    for (let i = 0; i < n; i += 1) {
        randomArray.push(Math.floor(Math.random() * n) + 1);
    }
    return randomArray;

    // Max length: 16 digits
    // return String(Math.random()).slice(2, 2 + n).split('').map(Number);
}

// Mutates array for in place swap
function swapValues (array = [], index1 = 0, index2 = 0) {
    const value1 = array[index1]
    const value2 = array[index2];

    if (index1 === index2) {
        console.log(value1 + " stays in place")
    } else {
        array[index1] = value2;
        array[index2] = value1;
        console.log(value1 + " swaps with " + value2)
    }
}

// For each item of array, swap with one of the remaining values
function shuffleArray (array = []) {
    console.log(array)
    for (let index of array.keys()) {
        const swapIndex = index + Math.floor(Math.random() * (array.length - index));
        swapValues(array, index, swapIndex);
    }
    return array;
}

// Raw bubble sort double loop
function bubbleSort1 (array = []) {
    console.log(array)
    for (let pass = 0; pass < array.length; pass += 1) {
        for (let i = 0; i < array.length - 1; i += 1) {
            if (array[i] > array[i + 1]) {
                swapValues(array, i, i + 1);
            }
        }
    }
    return array;
}

// Bubble sort with optimizations
function bubbleSort2 (array = []) {
    console.log(array)
    let isSorted = false;
    let lastUnsorted = array.length - 1
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i += 1) {
            if (array[i] > array[i + 1]) {
                swapValues(array, i, i + 1);
                isSorted = false;
            }
        }
        lastUnsorted -= 1;
    }
    return array;
}

// Find minimum item and swap to beginning
function selectionSort1 (array = []) {
    console.log(array)
    for (let pass = 0; pass < array.length - 1; pass += 1) {
        let minIndex = pass;
        for (let i = pass + 1; i < array.length; i += 1) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
            }
        }
        swapValues(array, pass, minIndex);
    }
    return array;
}

// Find maximum item and swap to beginning
function selectionSort2 (array = []) {
    console.log(array)
    for (let pass = 0; pass < array.length - 1; pass += 1) {
        let maxIndex = pass;
        for (let i = pass + 1; i < array.length; i += 1) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        swapValues(array, pass, maxIndex);
    }
    return array;
}

// Find minimum item and swap to end
function selectionSort3 (array = []) {
    console.log(array)
    for (let pass = 0; pass < array.length - 1; pass += 1) {
        let minIndex = 0;
        for (let i = 0; i < array.length - pass; i += 1) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
            }
        }
        swapValues(array, array.length-pass-1, minIndex);
    }
    return array;
}

// Find maximum item and swap to end
function selectionSort4 (array = []) {
    console.log(array)
    for (let pass = 0; pass < array.length - 1; pass += 1) {
        let maxIndex = 0;
        for (let i = 0; i < array.length - pass; i += 1) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        swapValues(array, array.length-pass-1, maxIndex);
    }
    return array;
}

// Swap each item into place on left side of array
function insertionSort1 (array = []) {
    console.log(array)
    // For each item
    for (let i = 1; i < array.length; i += 1) {
        console.log('i', i)

        // Swap it backwards
        for (let j = i - 1; j >= 0; j -= 1) {
            console.log('j', j)
            if (array[j + 1] < array[j]) {
                swapValues(array, j + 1, j);
            } else {
                break;
            }
        }
    }
    return array;
}

// Shift each item into place on left side of array
function insertionSort2 (array = []) {
    console.log(array)
    // For each item
    for (let i = 1; i < array.length; i += 1) {
        let currentValue = array[i];

        // Shift it backwards
        let j = i - 1;
        for (j; j >= 0; j -= 1) {
            if (currentValue < array[j]) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }

        // Insert into sorted place
        // Even if it's same as starting place
        let newIndex = j + 1;
        array[newIndex] = currentValue;
        console.log('Insert ' + currentValue + ' at ' + newIndex)
    }
    return array;
}

function linearSearch (array = [], target = -1) {
    // Built in method
    // return array.indexOf(target);

    let result = -1;
    for (let index of array.keys()) {
        if (array[index] === target) {
            result = index;
            break;
        }
    }
    return result;
}

function binarySearch1 (array = [], target = -1) {
    let low = 0;
    let high = array.length - 1;
    let guess;
    while (true) {
        guess = Math.floor((low + high) / 2);
        console.log('guess', guess)

        // Base case: found it
        if (array[guess] === target) {
            return guess;
        }

        // Base case: didn't find it
        if (low >= high) {
            return -1;
        }

        // Recursive case: too low
        if (array[guess] < target) {
            low = guess + 1;
            continue;
        }

        // Recursive case: too high
        if (array[guess] > target) {
            high = guess - 1;
            continue;
        }
    }
}

function binarySearch2 (array = [], target = -1) {
    let low = 0;
    let high = array.length - 1;
    let guess;

    return function inner (low, high) {
        guess = Math.floor((low + high) / 2);
        console.log('guess', guess)

        // Base case: found it
        if (array[guess] === target) {
            return guess;
        }

        // Base case: didn't find it
        if (low >= high) {
            return -1;
        }

        // Recursive case: too low
        if (array[guess] < target) {
            low = guess + 1;
            return inner(low, high);
        }

        // Recursive case: too high
        if (array[guess] > target) {
            high = guess - 1;
            return inner(low, high);
        }
    } (low, high);
}


// console.log(makeOrderedArray(15))
// console.log(makeRandomArray(15))
// console.log(bubbleSort1(shuffleArray(makeOrderedArray(15))))
// console.log(bubbleSort2(shuffleArray(makeOrderedArray(15))))
// console.log(selectionSort1(shuffleArray(makeOrderedArray(15))))
// console.log(selectionSort2(shuffleArray(makeOrderedArray(15))))
// console.log(selectionSort3(shuffleArray(makeOrderedArray(15))))
// console.log(selectionSort4(shuffleArray(makeOrderedArray(15))))
// console.log(insertionSort1(shuffleArray(makeOrderedArray(15))))
// console.log(insertionSort2(shuffleArray(makeOrderedArray(15))))
// console.log(linearSearch(makeOrderedArray(100), 7))
// console.log(linearSearch(makeRandomArray(100), 7))
console.log(binarySearch1(makeOrderedArray(100), 7))
console.log(binarySearch1(makeOrderedArray(100), 77))
console.log(binarySearch2(makeOrderedArray(100), 7))
console.log(binarySearch2(makeOrderedArray(100), 77))
