function factorialLoop (n = 0) {
  let result = 1
  for (n; n > 0; n -= 1) {
    result *= n
  }
  return result
}

function factorialRecursion (n = 0) {
  if (n <= 0) {
    return 1
  }
  return n * factorialRecursion(n - 1)
}

for (let i = -1; i < 10; i += 1) {
  console.log(i + ': ' + factorialLoop(i))
}
for (let i = -1; i < 10; i += 1) {
  console.log(i + ': ' + factorialRecursion(i))
}
