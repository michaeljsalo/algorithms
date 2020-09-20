function isPalindrome1 (string = '') {
  // Filter input to clean string
  string = string.replace(/[^a-z]/gi, '').toLowerCase()

  return string === string.split('').reverse().join('');
}

function isPalindrome2 (string = '') {
  // Filter input to clean string
  string = string.replace(/[^a-z]/gi, '').toLowerCase()

  for (let c = 0; c < Math.ceil(string.length / 2); c += 1) {
    if (string[c] !== string[string.length - c - 1]) {
      return false;
    }
  }

  return true;
}


console.log(isPalindrome1('a'))
console.log(isPalindrome1('abc'))
console.log(isPalindrome1('marram'))
console.log(isPalindrome1('racecar'))
console.log(isPalindrome1('taco cat'))
console.log(isPalindrome1('A man, a plan, a canal, Panama!'))

console.log(isPalindrome2('a'))
console.log(isPalindrome2('abc'))
console.log(isPalindrome2('marram'))
console.log(isPalindrome2('racecar'))
console.log(isPalindrome2('taco cat'))
console.log(isPalindrome2('A man, a plan, a canal, Panama!'))
