// Math.round always rounds to nearest integer
// This function rounds to any decimal place
function roundNumber (number = 0, decimalPlaces = 0) {
  const factor = 10 ** decimalPlaces
  const result = Math.round(number * factor) / factor
  return result
}

function decimalToBinary (number = 0) {
  let result = ''
  let quotient = Math.floor(Number(number))
  while (quotient) {
    result = (quotient % 2) + result
    quotient = Math.floor(quotient / 2)
  }
  return result
}

function binaryToDecimal (binaryString = '0') {
  // Validate the binary string
  binaryString = String(binaryString)
  const binaryDigitsCount = (binaryString.match(/[01]/g) || []).length
  if (binaryString.length !== binaryDigitsCount) {
    return NaN
  }

  const result = Array.from(String(binaryString))
    .reverse()
    .reduce((sum, char, index) => sum + (Number(char) * (2 ** index)), 0)
  return result
}

// Get a character to represent any integer from 0 to 35
// 10: A
// 35: Z
function getDigitLetter (digit = 0) {
  digit = Math.floor(Number(digit))
  let result

  // Digit is in decimal range
  if (digit >= 0 && digit <= 9) {
    result = String(digit)

    // Digit is in letter range
  } else if (digit >= 10 && digit <= 35) {
    result = String.fromCharCode(digit + 55)

    // Digit is unknown
  } else {
    result = '?'
  }

  return result
}

// Get a number value for any character from 0 to Z
// A: 10
// Z: 35
function getDigitValue (digitChar = '0') {
  const digitCharCode = String(digitChar).trim().toUpperCase().charCodeAt(0)
  let result

  // Digit is a number
  if (digitCharCode >= 48 && digitCharCode <= 57) {
    result = Number(digitChar)

    // Digit is a letter
  } else if (digitCharCode >= 65 && digitCharCode <= 90) {
    result = digitCharCode - 55

    // Digit is unknown
  } else {
    result = NaN
  }

  return result
}

function decimalToAny (number = 0, radix = 10) {
  const digits = []
  let quotient = Math.floor(Number(number))
  while (quotient) {
    digits.push(quotient % radix)
    quotient = Math.floor(quotient / radix)
  }
  const result = digits
    .reverse()
    .map(digit => getDigitLetter(digit))
    .join('')
  return result
}

function anyToDecimal (digitString = '0', radix = 10) {
  const result = Array.from(String(digitString))
    .reverse()
    .reduce((sum, digit, index) =>
      sum + (getDigitValue(digit) * (radix ** index)
      ), 0)
  return result
}

function countDigits (num = 0, base = 10) {
  let digits = 0
  let quotient = num
  while (quotient) {
    quotient = Math.floor(quotient / base)
    digits += 1
  }
  return digits
}

// Return all digits as an array of strings
// Has to be strings to support all bases
function getDigits (num = 0, base = 10) {
  const digits = []
  let quotient = num
  while (quotient) {
    const digit = quotient % base
    quotient = Math.floor(quotient / base)
    const digitLetter = decimalToAny(digit, base)
    digits.push(digitLetter)
  }
  return digits
}

function isNumberPalindrome (num = 0, base = 10) {
  const digits = getDigits(num, base)
  let low = 0
  let high = digits.length - 1
  while (low < high) {
    if (digits[low] !== digits[high]) {
      return false
    }
    low += 1
    high -= 1
  }
  return true
}

const args = process.argv.slice(2)
const argNum = args[0] || 0
const argBase = args[1] || 10

console.log(argNum + ' rounds to ' + roundNumber(argNum, 3))
console.log(argNum + ' rounds to ' + roundNumber(argNum, 2))
console.log(argNum + ' rounds to ' + roundNumber(argNum, 1))
console.log(argNum + ' rounds to ' + roundNumber(argNum, 0))
console.log(argNum + ' rounds to ' + roundNumber(argNum, -1))
console.log(argNum + ' rounds to ' + roundNumber(argNum, -2))

console.log(argNum + ' to binary: ' + decimalToBinary(argNum))
console.log(argNum + ' to decimal: ' + binaryToDecimal(argNum))

console.log(argNum + ' to binary (via any): ' + decimalToAny(argNum, 2))
console.log(argNum + ' to decimal (via any): ' + anyToDecimal(argNum, 2))
console.log(argNum + ' to octal (via any): ' + decimalToAny(argNum, 8))
console.log(argNum + ' to decimal (via any): ' + anyToDecimal(argNum, 8))
console.log(argNum + ' to hex (via any): ' + decimalToAny(argNum, 16))
console.log(argNum + ' to decimal (via any): ' + anyToDecimal(argNum, 16))

console.log(argNum + ' has ' + countDigits(argNum, argBase) + ' digits in base ' + argBase)
console.log(argNum + ' has digits: ' + JSON.stringify(getDigits(argNum, argBase)))
console.log(argNum + ' is a palindrome: ' + isNumberPalindrome(argNum, argBase))
