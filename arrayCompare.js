// Compare values of two arrays
function compareArrays1 (array1, array2) {
  // Filter input to arrays only
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    return false
  }

  // Match all keys in both arrays
  for (const index of array1.keys()) {
    if (array1[index] !== array2[index]) {
      return false
    }
  }
  for (const index of array2.keys()) {
    if (array1[index] !== array2[index]) {
      return false
    }
  }

  // If no mismatch, arrays are equal
  return true
}

// Compare values of N arrays
function compareArrays2 (...arrays) {
  if (arrays.length < 2) {
    return false
  }

  for (const [arrayIndex, array] of arrays.entries()) {
    // Filter input to arrays only
    if (!(Array.isArray(array))) {
      return false
    }

    // Match all keys against last array
    if (arrayIndex > 0) {
      const lastArray = arrays[arrayIndex - 1]

      for (const index of array.keys()) {
        if (array[index] !== lastArray[index]) {
          return false
        }
      }
      for (const index of lastArray.keys()) {
        if (array[index] !== lastArray[index]) {
          return false
        }
      }
    }
  }

  // If no mismatch, arrays are equal
  return true
}

// Compare values of two arrays
// Order does not matter
// Duplicates do not matter
function compareSets1 (array1, array2) {
  // Filter input to arrays only
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    return false
  }

  // Transform arrays to sets
  const arraySet1 = new Set(array1)
  const arraySet2 = new Set(array2)

  // Match all values in both sets
  for (const value of arraySet1) {
    if (!arraySet2.has(value)) {
      return false
    }
  }
  for (const value of arraySet2) {
    if (!arraySet1.has(value)) {
      return false
    }
  }

  // If no mismatch, arrays are equal
  return true
}

// Compare values of N arrays
// Order does not matter
// Duplicates do not matter
function compareSets2 (...arrays) {
  if (arrays.length < 2) {
    return false
  }

  const setArray = []
  for (const [arrayIndex, array] of arrays.entries()) {
    // Filter input to arrays only
    if (!(Array.isArray(array))) {
      return false
    }

    // Transform array to set
    const arraySet = new Set(array)
    setArray[arrayIndex] = arraySet

    // Match all values against last set
    if (arrayIndex > 0) {
      const lastSet = setArray[arrayIndex - 1]

      for (const value of arraySet) {
        if (!lastSet.has(value)) {
          return false
        }
      }
      for (const value of lastSet) {
        if (!arraySet.has(value)) {
          return false
        }
      }
    }
  }

  // If no mismatch, arrays are equal
  return true
}

console.assert(compareArrays1([1, 2, 3], [1, 2, 3]) === true, 1)
console.assert(compareArrays1([1, 2, 3], [1, 2]) === false, 2)
console.assert(compareArrays1([1, 2], [1, 2, 3]) === false, 3)
console.assert(compareArrays1([1, 2, 4, 4], [1, 2, 3, 4]) === false, 4)
console.assert(compareArrays1([], []) === true, 5)
console.assert(compareArrays1(1, 1) === false, 6)
console.assert(compareArrays1([]) === false, 7)
console.assert(compareArrays1([], true) === false, 8)
console.assert(compareArrays1([], undefined) === false, 9)
console.assert(compareArrays1(null, []) === false, 10)
console.assert(compareArrays1([], 'string') === false, 11)
console.assert(compareArrays1([], {}) === false, 12)
console.assert(compareArrays1([1, 10, 2, 21], [1, 2, 10, 21]) === false, 13)
console.assert(compareArrays1([1, 10, 2, 21], [1, 2, 2, 10, 21]) === false, 14)

console.assert(compareArrays2([1, 2, 3], [1, 2, 3]) === true, 1)
console.assert(compareArrays2([1, 2, 3], [1, 2]) === false, 2)
console.assert(compareArrays2([1, 2], [1, 2, 3]) === false, 3)
console.assert(compareArrays2([1, 2, 4, 4], [1, 2, 3, 4]) === false, 4)
console.assert(compareArrays2([], []) === true, 5)
console.assert(compareArrays2(1, 1) === false, 6)
console.assert(compareArrays2([]) === false, 7)
console.assert(compareArrays2([], true) === false, 8)
console.assert(compareArrays2([], undefined) === false, 9)
console.assert(compareArrays2(null, []) === false, 10)
console.assert(compareArrays2([], 'string') === false, 11)
console.assert(compareArrays2([], {}) === false, 12)
console.assert(compareArrays2([1, 10, 2, 21], [1, 2, 10, 21]) === false, 13)
console.assert(compareArrays2([1, 10, 2, 21], [1, 2, 2, 10, 21]) === false, 14)
console.assert(compareArrays2([1, 2, 3], [1, 2, 3], [1, 2, 3]) === true, 15)
console.assert(compareArrays2([1, 2, 3], [1, 2, 3], [1, 2, 4]) === false, 16)

console.assert(compareSets1([1, 2, 3], [1, 2, 3]) === true, 1)
console.assert(compareSets1([1, 2, 3], [1, 2]) === false, 2)
console.assert(compareSets1([1, 2], [1, 2, 3]) === false, 3)
console.assert(compareSets1([1, 2, 4, 4], [1, 2, 3, 4]) === false, 4)
console.assert(compareSets1([], []) === true, 5)
console.assert(compareSets1(1, 1) === false, 6)
console.assert(compareSets1([]) === false, 7)
console.assert(compareSets1([], true) === false, 8)
console.assert(compareSets1([], undefined) === false, 9)
console.assert(compareSets1(null, []) === false, 10)
console.assert(compareSets1([], 'string') === false, 11)
console.assert(compareSets1([], {}) === false, 12)
console.assert(compareSets1([1, 10, 2, 21], [1, 2, 10, 21]) === true, 13)
console.assert(compareSets1([1, 10, 2, 21], [1, 2, 2, 10, 21]) === true, 14)

console.assert(compareSets2([1, 2, 3], [1, 2, 3]) === true, 1)
console.assert(compareSets2([1, 2, 3], [1, 2]) === false, 2)
console.assert(compareSets2([1, 2], [1, 2, 3]) === false, 3)
console.assert(compareSets2([1, 2, 4, 4], [1, 2, 3, 4]) === false, 4)
console.assert(compareSets2([], []) === true, 5)
console.assert(compareSets2(1, 1) === false, 6)
console.assert(compareSets2([]) === false, 7)
console.assert(compareSets2([], true) === false, 8)
console.assert(compareSets2([], undefined) === false, 9)
console.assert(compareSets2(null, []) === false, 10)
console.assert(compareSets2([], 'string') === false, 11)
console.assert(compareSets2([], {}) === false, 12)
console.assert(compareSets2([1, 10, 2, 21], [1, 2, 10, 21]) === true, 13)
console.assert(compareSets2([1, 10, 2, 21], [1, 2, 2, 10, 21]) === true, 14)
console.assert(compareSets2([1, 2, 3], [1, 2, 3], [1, 2, 3]) === true, 15)
console.assert(compareSets2([1, 2, 3], [1, 2, 3], [1, 2, 4]) === false, 16)
