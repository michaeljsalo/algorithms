function makeOrderedArray (n = 0) {
  const orderedArray = []
  for (let i = 1; i <= n; i += 1) {
    orderedArray.push(i)
  }
  return orderedArray

  // Silly way
  // return new Array(n).fill().map((value, index) => index + 1);
}

function makeRandomArray (n = 0) {
  const randomArray = []
  for (let i = 0; i < n; i += 1) {
    randomArray.push(Math.floor(Math.random() * n) + 1)
  }
  return randomArray

  // Max length: 16 digits
  // return String(Math.random()).slice(2, 2 + n).split('').map(Number);
}

// Mutates array for in place swap
function swapValues (array = [], index1 = 0, index2 = 0) {
  const value1 = array[index1]
  const value2 = array[index2]

  if (index1 === index2) {
    console.log(index1 + ': ' + value1 + ' stays in place')
  } else {
    array[index1] = value2
    array[index2] = value1
    console.log(index1 + ': ' + value1 + ' swaps with ' + index2 + ': ' + value2)
  }
}

// Fisher-Yates shuffle
// For each item of array, swap with one of the remaining items
function shuffleArray (array = []) {
  console.log(array)
  for (const index of array.keys()) {
    const swapIndex = index + Math.floor(Math.random() * (array.length - index))
    swapValues(array, index, swapIndex)
  }
  return array
}

// Raw bubble sort double loop
function bubbleSort1 (array = []) {
  console.log(array)
  for (let pass = 0; pass < array.length; pass += 1) {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        swapValues(array, i, i + 1)
      }
    }
  }
  return array
}

// Bubble sort with optimizations
function bubbleSort2 (array = []) {
  console.log(array)
  let isSorted = false
  let lastUnsorted = array.length - 1
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < lastUnsorted; i += 1) {
      if (array[i] > array[i + 1]) {
        swapValues(array, i, i + 1)
        isSorted = false
      }
    }
    lastUnsorted -= 1
  }
  return array
}

// Find minimum item and swap to beginning
function selectionSort1 (array = []) {
  console.log(array)
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    swapValues(array, i, minIndex)
  }
  return array
}

// Find maximum item and swap to beginning
function selectionSort2 (array = []) {
  console.log(array)
  for (let i = 0; i < array.length - 1; i += 1) {
    let maxIndex = i
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j
      }
    }
    swapValues(array, i, maxIndex)
  }
  return array
}

// Find minimum item and swap to end
function selectionSort3 (array = []) {
  console.log(array)
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = 0
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    swapValues(array, array.length - i - 1, minIndex)
  }
  return array
}

// Find maximum item and swap to end
function selectionSort4 (array = []) {
  console.log(array)
  for (let i = 0; i < array.length - 1; i += 1) {
    let maxIndex = 0
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j
      }
    }
    swapValues(array, array.length - i - 1, maxIndex)
  }
  return array
}

// Swap each item into place on left side of array
function insertionSort1 (array = []) {
  console.log(array)
  // For each item
  for (let i = 1; i < array.length; i += 1) {
    // Swap it backwards
    for (let j = i; j >= 1; j -= 1) {
      if (array[j] < array[j - 1]) {
        swapValues(array, j, j - 1)
      } else {
        break
      }
    }
  }
  return array
}

// Shift each item into place on left side of array
function insertionSort2 (array = []) {
  console.log(array)
  // For each item
  for (let i = 1; i < array.length; i += 1) {
    const iValue = array[i]

    // Shift elements forwards
    let j
    for (j = i; j >= 1; j -= 1) {
      if (iValue < array[j - 1]) {
        array[j] = array[j - 1]
      } else {
        break
      }
    }

    // Insert into sorted place once
    // Even if it's same as starting place
    array[j] = iValue
    console.log('Insert ' + iValue + ' at ' + j)
  }
  return array
}

// QuickSort optimized for simplicity
// Not optimized for time and space
function quickSort (array = []) {
  // Base case: array of length 1 or 0
  if (array.length < 2) {
    return array
  }

  // Recursive case: subarray to sort

  // Choose last item as the pivot
  const pivotIndex = array.length - 1
  const pivotValue = array[pivotIndex]
  console.log('Pivot is ' + pivotValue + ' at ' + pivotIndex)

  // Take advantage of filter to sort around pivot
  const lowArray = array.filter(item => item < pivotValue)
  const pivotArray = array.filter(item => item === pivotValue)
  const highArray = array.filter(item => item > pivotValue)

  // Concatenate sorted subarrays
  return [...quickSort(lowArray), ...pivotArray, ...quickSort(highArray)]
}

function linearSearch (array = [], target = -1) {
  // Built in method
  // return array.indexOf(target);

  let result = -1
  for (const index of array.keys()) {
    if (array[index] === target) {
      result = index
      break
    }
  }
  return result
}

function binarySearch1 (array = [], target = -1) {
  let low = 0
  let high = array.length - 1
  let guess
  while (true) {
    guess = Math.floor((low + high) / 2)
    console.log('guess', guess)

    // Base case: found it
    if (array[guess] === target) {
      return guess
    }

    // Base case: didn't find it
    if (low >= high) {
      return -1
    }

    // Recursive case: too low
    if (array[guess] < target) {
      low = guess + 1
      continue
    }

    // Recursive case: too high
    if (array[guess] > target) {
      high = guess - 1
      continue
    }
  }
}

function binarySearch2 (array = [], target = -1) {
  const low = 0
  const high = array.length - 1
  let guess

  return (function inner (low, high) {
    guess = Math.floor((low + high) / 2)
    console.log('guess', guess)

    // Base case: found it
    if (array[guess] === target) {
      return guess
    }

    // Base case: didn't find it
    if (low >= high) {
      return -1
    }

    // Recursive case: too low
    if (array[guess] < target) {
      low = guess + 1
      return inner(low, high)
    }

    // Recursive case: too high
    if (array[guess] > target) {
      high = guess - 1
      return inner(low, high)
    }
  }(low, high))
}

console.clear()

const orderedArray = makeOrderedArray(100)
console.log(orderedArray)

const randomArray = makeRandomArray(100)
console.log(randomArray)

// const shuffledArray = shuffleArray(orderedArray)
// console.log(shuffledArray)

// console.log(bubbleSort1(randomArray))
// console.log(bubbleSort2(randomArray))

// console.log(selectionSort1(randomArray))
// console.log(selectionSort2(randomArray))
// console.log(selectionSort3(randomArray))
// console.log(selectionSort4(randomArray))

// console.log(insertionSort1(randomArray))
// console.log(insertionSort2(randomArray))

console.log(quickSort(randomArray))

// console.log(linearSearch(orderedArray, 7))
// console.log(linearSearch(randomArray, 7))

// console.log(binarySearch1(orderedArray, 7))
// console.log(binarySearch1(orderedArray, 77))
// console.log(binarySearch2(orderedArray, 7))
// console.log(binarySearch2(orderedArray, 77))
