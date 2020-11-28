function binarySearch (arr = [], target) {
  let lo = 0
  let hi = arr.length - 1
  let mid

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2)

    // Found it
    if (arr[mid] === target) {
      return mid

      // Too high
    } else if (arr[mid] > target) {
      hi = mid - 1

      // Too low
    } else if (arr[mid] < target) {
      lo = mid + 1
    }
  }

  // Didn't find it
  return -1
}

function binarySearchRecursive (arr = [], target, lo = 0, hi = arr.length - 1) {
  const mid = lo + Math.floor((hi - lo) / 2)

  // Base case: found it
  if (arr[mid] === target) {
    return mid
  }

  // Base case: didn't find it
  if (lo >= hi) {
    return -1
  }

  // Recursive case: search lower
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, lo, mid - 1)
  }

  // Recursive case: search higher
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, hi)
  }
}

function binarySearchClosure (arr = [], target) {
  const lo = 0
  const hi = arr.length - 1

  return (function binarySearchInner (lo, hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    // Base case: found it
    if (arr[mid] === target) {
      return mid
    }

    // Base case: didn't find it
    if (lo >= hi) {
      return -1
    }

    // Recursive case: search lower
    if (arr[mid] > target) {
      return binarySearchInner(lo, mid - 1)
    }

    // Recursive case: search higher
    if (arr[mid] < target) {
      return binarySearchInner(mid + 1, hi)
    }
  }(lo, hi))
}

function binarySearchFirst (arr = [], target) {
  let lo = 0
  let hi = arr.length - 1
  let mid
  let result = -1

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2)

    // Found a match
    if (arr[mid] === target) {
      result = mid
    }

    // Too high or same
    if (arr[mid] >= target) {
      hi = mid - 1

      // Too low
    } else if (arr[mid] < target) {
      lo = mid + 1
    }
  }

  // Return best match
  return result
}

function binarySearchLast (arr = [], target) {
  let lo = 0
  let hi = arr.length - 1
  let mid
  let result = -1

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2)

    // Found a match
    if (arr[mid] === target) {
      result = mid
    }

    // Too high
    if (arr[mid] > target) {
      hi = mid - 1

    // Too low or same
    } else if (arr[mid] <= target) {
      lo = mid + 1
    }
  }

  // Return best match
  return result
}

// Find where to insert a given target
// If the value already exists, insert after it
function binarySearchInsert (arr = [], target) {
  let lo = 0
  let hi = arr.length - 1
  let mid

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2)

    // Too high
    if (arr[mid] > target) {
      hi = mid - 1

    // Too low or same
    } else if (arr[mid] <= target) {
      lo = mid + 1
    }
  }

  // Go with the higher index that we landed on
  return Math.max(lo, hi)
}

const arr = [1, 3, 3, 5, 7, 11, 11, 11, 13, 17, 19, 23, 29, 31, 33, 33, 33, 37, 41, 43, 47, 53, 59]
console.log(arr)

console.log('\nbinarySearch')
console.log('1: ' + binarySearch(arr, 1))
console.log('2: ' + binarySearch(arr, 2))
console.log('3: ' + binarySearch(arr, 3))
console.log('11: ' + binarySearch(arr, 11))
console.log('33: ' + binarySearch(arr, 33))

console.log('\nbinarySearchRecursive')
console.log('1: ' + binarySearchRecursive(arr, 1))
console.log('2: ' + binarySearchRecursive(arr, 2))
console.log('3: ' + binarySearchRecursive(arr, 3))
console.log('11: ' + binarySearchFirst(arr, 11))
console.log('33: ' + binarySearchFirst(arr, 33))

console.log('\nbinarySearchClosure')
console.log('1: ' + binarySearchClosure(arr, 1))
console.log('2: ' + binarySearchClosure(arr, 2))
console.log('3: ' + binarySearchClosure(arr, 3))
console.log('11: ' + binarySearchFirst(arr, 11))
console.log('33: ' + binarySearchFirst(arr, 33))

console.log('\nbinarySearchFirst')
console.log('1: ' + binarySearchFirst(arr, 1))
console.log('2: ' + binarySearchFirst(arr, 2))
console.log('3: ' + binarySearchFirst(arr, 3))
console.log('11: ' + binarySearchFirst(arr, 11))
console.log('33: ' + binarySearchFirst(arr, 33))

console.log('\nbinarySearchLast')
console.log('1: ' + binarySearchLast(arr, 1))
console.log('2: ' + binarySearchLast(arr, 2))
console.log('3: ' + binarySearchLast(arr, 3))
console.log('11: ' + binarySearchLast(arr, 11))
console.log('33: ' + binarySearchLast(arr, 33))

console.log('\nbinarySearchInsert')
console.log('1: ' + binarySearchInsert(arr, 1))
console.log('2: ' + binarySearchInsert(arr, 2))
console.log('3: ' + binarySearchInsert(arr, 3))
console.log('11: ' + binarySearchInsert(arr, 11))
console.log('33: ' + binarySearchInsert(arr, 33))
