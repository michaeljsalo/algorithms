function isPalindrome1 (string = '') {
  // Filter input to clean string
  string = string.replace(/[^a-z]/gi, '').toLowerCase()

  return string === string.split('').reverse().join('')
}

function isPalindrome2 (string = '') {
  // Filter input to clean string
  string = string.replace(/[^a-z]/gi, '').toLowerCase()

  for (let c = 0; c < Math.ceil(string.length / 2); c += 1) {
    if (string[c] !== string[string.length - c - 1]) {
      return false
    }
  }

  return true
}

// Hash count of letters approach
function isAnagram1 (stringA = '', stringB = '') {
  // Filter input to clean strings
  stringA = stringA.replace(/[^a-z]/gi, '').toLowerCase()
  stringB = stringB.replace(/[^a-z]/gi, '').toLowerCase()

  if (stringA === stringB) {
    return true
  }
  if (stringA.length !== stringB.length) {
    return false
  }

  // Count up string A
  const letters = {}
  for (const letter of stringA) {
    letters[letter] = (letters[letter] || 0) + 1
  }

  // Count down string B
  for (const letter of stringB) {
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

// Array count of letters approach
// Assumes 26 letters - no special characters
function isAnagram2 (stringA = '', stringB = '') {
  // Filter input to clean strings
  stringA = stringA.replace(/[^a-z]/gi, '').toLowerCase()
  stringB = stringB.replace(/[^a-z]/gi, '').toLowerCase()

  if (stringA === stringB) {
    return true
  }
  if (stringA.length !== stringB.length) {
    return false
  }

  // Count up string A
  const lettersA = new Array(26).fill(0)
  for (const letter of stringA) {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    lettersA[index] = lettersA[index] + 1
  }

  // Count up string B
  const lettersB = new Array(26).fill(0)
  for (const letter of stringB) {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    lettersB[index] = lettersB[index] + 1
  }

  return lettersA.join() === lettersB.join()
}

console.log('\nisPalindrome1')
console.log(isPalindrome1('a'))
console.log(isPalindrome1('abc'))
console.log(isPalindrome1('marram'))
console.log(isPalindrome1('racecar'))
console.log(isPalindrome1('taco cat'))
console.log(isPalindrome1('A man, a plan, a canal, Panama!'))

console.log('\nisPalindrome2')
console.log(isPalindrome2('a'))
console.log(isPalindrome2('abc'))
console.log(isPalindrome2('marram'))
console.log(isPalindrome2('racecar'))
console.log(isPalindrome2('taco cat'))
console.log(isPalindrome2('A man, a plan, a canal, Panama!'))

console.log('\nisAnagram1')
console.log(isAnagram1('a', 'b'))
console.log(isAnagram1('hello', 'aloha'))
console.log(isAnagram1('elbow', 'below'))
console.log(isAnagram1('cinema', 'iceman'))
console.log(isAnagram1('Dormitory', 'dirty room##'))
console.log(isAnagram1('School master', 'The classroom'))
console.log(isAnagram1('Conversation', 'Voices rant on'))
console.log(isAnagram1('A gentleman', 'Elegant man'))
console.log(isAnagram1('The Morse Code', 'Here come dots'))
console.log(isAnagram1('The Morse Code', 'Here comes dots'))

console.log('\nisAnagram2')
console.log(isAnagram2('a', 'b'))
console.log(isAnagram2('hello', 'aloha'))
console.log(isAnagram2('elbow', 'below'))
console.log(isAnagram2('cinema', 'iceman'))
console.log(isAnagram2('Dormitory', 'dirty room##'))
console.log(isAnagram2('School master', 'The classroom'))
console.log(isAnagram2('Conversation', 'Voices rant on'))
console.log(isAnagram2('A gentleman', 'Elegant man'))
console.log(isAnagram2('The Morse Code', 'Here come dots'))
console.log(isAnagram2('The Morse Code', 'Here comes dots'))
