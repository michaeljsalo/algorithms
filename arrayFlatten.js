// Approach 1: Flatten by spread operator
function flattenArray1 (array = []) {
  const flatArray = []
  array.forEach(value => {
    if (Array.isArray(value)) {
      flatArray.push(...flattenArray1(value))
    } else {
      flatArray.push(value)
    }
  })
  return flatArray
}

// Approach 2: Flatten by apply method
function flattenArray2 (array = []) {
  const flatArray = []
  array.forEach(value => {
    if (Array.isArray(value)) {
      [].push.apply(flatArray, flattenArray2(value))
    } else {
      flatArray.push(value)
    }
  })
  return flatArray
}

// Approach 3: Let concat do magic flattening
function flattenArray3 (array = []) {
  let flatArray = []
  array.forEach(value => {
    if (Array.isArray(value)) {
      flatArray = flatArray.concat(flattenArray3(value))
    } else {
      flatArray = flatArray.concat(value)
    }
  })
  return flatArray
}

// Approach 4: Reduce array to flat array
function flattenArray4 (array = []) {
  return array.reduce((flatArray, value) => {
    if (Array.isArray(value)) {
      return flatArray.concat(flattenArray4(value))
    } else {
      return flatArray.concat(value)
    }
  }, [])
}

// Approach 5: Streamline it
function flattenArray5 (array = []) {
  return array.reduce((flatArray, value) => {
    return Array.isArray(value)
      ? flatArray.concat(flattenArray5(value))
      : flatArray.concat(value)
  }, [])
}

const shallowNestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const deepNestedArray = [1, [2, [3, [4, 5], [6], [7]]]]

console.log([].concat(...shallowNestedArray))
console.log([].concat(...deepNestedArray))

console.log([].concat.apply([], shallowNestedArray))
console.log([].concat.apply([], deepNestedArray))

// console.log(shallowNestedArray.flat(1))
// console.log(deepNestedArray.flat())

console.log(flattenArray1(deepNestedArray))
console.log(flattenArray2(deepNestedArray))
console.log(flattenArray3(deepNestedArray))
console.log(flattenArray4(deepNestedArray))
console.log(flattenArray5(deepNestedArray))
