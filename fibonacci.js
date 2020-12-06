// Careful about how the sequence begins.
// 1 1 2 3 or 0 1 1 2 3

// Best approach:
// Call the 0th element 0
// Call the 1st element 1
// This means n is n at first

// After n of 77, results exceed safe integer range.

// O(n) time, O(n) space

function fibonacciArray (n = 0) {
  const sequence = [0, 1]
  for (let i = 2; i <= n; i += 1) {
    prev2 = sequence[sequence.length - 2]
    prev1 = sequence[sequence.length - 1]
    sequence.push(prev2 + prev1)
  }
  return sequence
  // return sequence[n];
}

// O(n) time, O(1) space
function fibonacciLoop (n = 0) {
  let fib, prev1, prev2
  for (let i = 0; i <= n; i += 1) {
    if (i < 2) {
      fib = i
      prev1 = i
      prev2 = 0
    } else if (i >= 2) {
      fib = prev2 + prev1
      prev2 = prev1
      prev1 = fib
    }
  }
  return fib
}

// O(2^n) time, O(n) space
function fibonacciRecursion (n = 0) {
  if (n < 2) {
    return n
  } else {
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
  }
}

// O(n) time, O(n) space
// Sums up in reverse order
function fibonacciRecursionSingle (n = 0, a = 1, b = 0) {
  if (n < 2) {
    return a
  } else {
    return fibonacciRecursionSingle(n - 1, a + b, a)
  }
}

// O(n) time, O(n) space
function fibonacciCacheA (n = 0) {
  if (fibonacciCacheA[n]) {
    result = fibonacciCacheA[n]
  } else {
    if (n < 2) {
      result = n
    } else {
      result = fibonacciCacheA(n - 1) + fibonacciCacheA(n - 2)
    }
    fibonacciCacheA[n] = result
  }
  return result
}
fibonacciCacheA.cache = {}

// O(n) time, O(n) space
function fibonacciCacheB (n = 0) {
  if (!fibonacciCacheB[n]) {
    if (n < 2) {
      fibonacciCacheB[n] = n
    } else {
      fibonacciCacheB[n] = fibonacciCacheB(n - 1) + fibonacciCacheB(n - 2)
    }
  }
  return fibonacciCacheB[n]
}
fibonacciCacheB.cache = {}

// O(n) time, O(n) space
function fibonacciCacheC (n = 0) {
  if (!fibonacciCacheC[n]) {
    fibonacciCacheC[n] = (n < 2) ? n : fibonacciCacheC(n - 1) + fibonacciCacheC(n - 2)
  }
  return fibonacciCacheC[n]
}
fibonacciCacheC.cache = {}

// O(n) time, O(n) space
function fibonacciMemoA (n = 0) {
  const memo = {}

  return (function fibonacciInner (n) {
    if (memo[n]) {
      result = memo[n]
    } else {
      if (n < 2) {
        result = n
      } else {
        result = fibonacciInner(n - 1) + fibonacciInner(n - 2)
      }
      memo[n] = result
    }
    return result
  }(n))
}

// O(n) time, O(n) space
function fibonacciMemoB (n = 0) {
  const memo = {}

  return (function fibonacciInner (n) {
    if (!memo[n]) {
      if (n < 2) {
        memo[n] = n
      } else {
        memo[n] = fibonacciInner(n - 1) + fibonacciInner(n - 2)
      }
    }
    return memo[n]
  }(n))
}

// O(n) time, O(n) space
function fibonacciMemoC (n = 0) {
  const memo = {}

  return (function fibonacciInner (n) {
    if (!memo[n]) {
      memo[n] = (n < 2) ? n : fibonacciInner(n - 1) + fibonacciInner(n - 2)
    }
    return memo[n]
  }(n))
}

function * fibonacciGenerator (n = 50) {
  let fib, prev1, prev2
  for (let i = 0; i <= n; i += 1) {
    if (i < 2) {
      fib = i
      prev1 = i
      prev2 = 0
    } else if (i >= 2) {
      fib = prev2 + prev1
      prev2 = prev1
      prev1 = fib
    }
    yield fib
  }
}

console.log(fibonacciArray(2))
console.log(fibonacciArray(5))
console.log(fibonacciArray(22))
console.log(fibonacciLoop(10))
console.log(fibonacciLoop(11))
console.log(fibonacciLoop(12))
console.log(fibonacciRecursion(10))
console.log(fibonacciRecursion(11))
console.log(fibonacciRecursion(12))
console.log(fibonacciRecursionSingle(10))
console.log(fibonacciRecursionSingle(11))
console.log(fibonacciRecursionSingle(12))
console.log(fibonacciCacheA(5))
console.log(fibonacciCacheA(6))
console.log(fibonacciCacheA(7))
console.log(fibonacciCacheB(5))
console.log(fibonacciCacheB(6))
console.log(fibonacciCacheB(7))
console.log(fibonacciCacheC(5))
console.log(fibonacciCacheC(6))
console.log(fibonacciCacheC(7))
console.log(fibonacciMemoA(5))
console.log(fibonacciMemoA(6))
console.log(fibonacciMemoA(7))
console.log(fibonacciMemoA(22))

const gen = fibonacciGenerator()
for (let i = 0; i <= 55; i += 1) {
  console.log(gen.next())
}
