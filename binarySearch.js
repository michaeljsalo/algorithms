function binarySearch (arr = [], needle) {
  let lo = 0
  let hi = arr.length - 1
  let mid

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2)

    // Found it
    if (arr[mid] === needle) {
      return true

      // Too high
    } else if (arr[mid] > needle) {
      hi = mid - 1

      // Too low
    } else if (arr[mid] < needle) {
      lo = mid + 1
    }
  }

  // Didn't find it
  return false
}

function binarySearchRecursive (arr = [], needle, lo = 0, hi = arr.length - 1) {
  const mid = lo + Math.floor((hi - lo) / 2)

  // Base case: found it
  if (arr[mid] === needle) {
    return true
  }

  // Base case: didn't find it
  if (lo >= hi) {
    return false
  }

  // Recursive case: search lower
  if (arr[mid] > needle) {
    return binarySearchRecursive(arr, needle, lo, mid - 1)
  }

  // Recursive case: search higher
  if (arr[mid] < needle) {
    return binarySearchRecursive(arr, needle, mid + 1, hi)
  }
}

function binarySearchClosure (arr = [], needle) {
  const lo = 0
  const hi = arr.length - 1

  return (function binarySearchInner (lo, hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    // Base case: found it
    if (arr[mid] === needle) {
      return true
    }

    // Base case: didn't find it
    if (lo >= hi) {
      return false
    }

    // Recursive case: search lower
    if (arr[mid] > needle) {
      return binarySearchInner(lo, mid - 1)
    }

    // Recursive case: search higher
    if (arr[mid] < needle) {
      return binarySearchInner(mid + 1, hi)
    }
  }(lo, hi))
}

const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
console.log(arr)

console.log('\nbinarySearch')
console.log('-10: ' + binarySearch(arr, -10))
console.log('0: ' + binarySearch(arr, 0))
console.log('1: ' + binarySearch(arr, 1))
console.log('5: ' + binarySearch(arr, 5))
console.log('5.5: ' + binarySearch(arr, 5.5))
console.log('6: ' + binarySearch(arr, 6))
console.log('7: ' + binarySearch(arr, 7))
console.log('35: ' + binarySearch(arr, 35))
console.log('36: ' + binarySearch(arr, 36))
console.log('37: ' + binarySearch(arr, 37))
console.log('100: ' + binarySearch(arr, 100))

console.log('\nbinarySearchRecursive')
console.log('5: ' + binarySearchRecursive(arr, 5))
console.log('6: ' + binarySearchRecursive(arr, 6))
console.log('7: ' + binarySearchRecursive(arr, 7))

console.log('\nbinarySearchClosure')
console.log('5: ' + binarySearchClosure(arr, 5))
console.log('6: ' + binarySearchClosure(arr, 6))
console.log('7: ' + binarySearchClosure(arr, 7))
