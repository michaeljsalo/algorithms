function isAnagram (stringA = '', stringB = '') {
  let letter
  const letters = {}

  // Filter input to clean strings
  stringA = stringA.replace(/[^a-z]/gi, '').toLowerCase()
  stringB = stringB.replace(/[^a-z]/gi, '').toLowerCase()

  if (stringA.length !== stringB.length) {
    return false;
  }

  // Count up string A
  for (letter of stringA) {
    letters[letter] = (letters[letter] || 0) + 1
  }

  // Count down string B
  for (letter of stringB) {
    letters[letter] = (letters[letter] || 0) - 1
    if (letters[letter] < 0) {
      return false
    }
  }

  // If we reach this point,
  // letters will be all zeros,
  // and it's an anagram.
  return true
}


console.log(isAnagram('a', 'b'))
console.log(isAnagram('elbow', 'below'))
console.log(isAnagram('cinema', 'iceman'))
console.log(isAnagram('Dormitory', 'dirty room##'))
console.log(isAnagram('hello', 'aloha'))
