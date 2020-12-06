function chunkArray (array = [], chunkSize = array.length) {
  if (typeof chunkSize !== 'number' || chunkSize < 1) {
    throw new Error('Minimum chunk size is 1')
  }

  return array.reduce((chunkedArray, item, index) => {
    if (index % chunkSize === 0) {
      chunkedArray.push([])
    }
    chunkedArray[chunkedArray.length - 1].push(item)
    return chunkedArray
  }, [])
}

const array1 = [1, 2, 3, 4, 5, 6, 7]

console.log(array1)
console.log(chunkArray(array1))
// console.log(chunkArray(array1, 0))
console.log(chunkArray(array1, 1))
console.log(chunkArray(array1, 2))
console.log(chunkArray(array1, 3))
console.log(chunkArray(array1, 4))
console.log(chunkArray(array1, 5))
console.log(chunkArray(array1, 6))
console.log(chunkArray(array1, 7))
console.log(chunkArray(array1, 8))
