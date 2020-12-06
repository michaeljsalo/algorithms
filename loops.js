function iterativeLoop (n = 0) {
  for (n; n > 0; n -= 1) {
    console.log('Iterative loop ' + n)
    // console.trace()
  }
  console.log('Hit base case')
}

function recursiveLoop (n = 0) {
  if (n <= 0) {
    console.log('Hit base case')
    return
  }
  console.log('Recursive loop ' + n)
  // console.trace()
  recursiveLoop(n - 1)
}

function timeoutLoop (n = 0) {
  if (n <= 0) {
    console.log('Hit base case')
    return
  }
  console.log('Async loop ' + n)
  // console.trace()
  setTimeout(() => timeoutLoop(n - 1), 0)
}

// Browser only
function rafLoop (n = 0) {
  if (n <= 0) {
    console.log('Hit base case')
    return
  }
  console.log('RAF loop ' + n)
  // console.trace()
  window.requestAnimationFrame(() => rafLoop(n - 1))
}

iterativeLoop(10)
recursiveLoop(10)
timeoutLoop(10)
// rafLoop(10)
