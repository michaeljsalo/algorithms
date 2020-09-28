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
        .reduce((sum, char, index) => sum + (Number(char) * (2**index)), 0)
    return result
}

// Get a character to represent any integer from 0 to 36
function getDigitLetter (digit = 0) {
    digit = Math.floor(Number(digit))
    let result
    if (0 <= digit && digit <= 9) {
        result = String(digit)
    } else if (10 <= digit && digit <= 36) {
        result = String.fromCharCode(digit + 55)
    }
    return result
}

// Get a number value for any character from 0 to Z
function getDigitValue (digitChar = '0') {
    const digitCharCode = String(digitChar).trim().toUpperCase().charCodeAt(0)
    let result

    // Digit is a number
    if (48 <= digitCharCode && digitCharCode <= 57) {
        result = Number(digitChar)

    // Digit is a letter
    } else if (65 <= digitCharCode && digitCharCode <= 90) {
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
            sum + (getDigitValue(digit) * (radix**index)
        ), 0)
    return result
}

function getDigitAsString (number = 0, position = 0) {
    const numberString = String(number);
    position = parseInt(position, 10) || 0;

    // Simply get a character, counting from the beginning
    const digitChar = numberString.charAt(numberString.length-1 - position);

    // Or slice it out, counting from the start or the end
    const sliceStart  = numberString.length - position - 1;
    const sliceEnd    = numberString.length - position;
    const digitString = numberString.slice(sliceStart, sliceEnd);

    return digitChar;
}

function getDigitAsNumber (number = 0, position = 0, arity = 10) {
    const numberNumber = parseInt(number, arity);
    position = parseInt(position, 10) || 0;
    arity = parseInt(arity, 10) || 10;

    // Get a remainder, then divide down to one digit, then round down
    const digitRemainder = numberNumber % (Math.pow(arity, position+1));
    const digitDivided   = digitRemainder / (Math.pow(arity, position));
    const digitRounded   = Math.floor(digitDivided);

    // Format for display
    const digitArity     = digitRounded.toString(arity).toUpperCase();
    return digitArity;
}


const args = process.argv.slice(2);
const argNum      = args[0] || 0;
const argPosition = args[1] || 0;
const argArity    = args[2] || 10;

console.log(argNum + " rounds to " + roundNumber(argNum, 3))
console.log(argNum + " rounds to " + roundNumber(argNum, 2))
console.log(argNum + " rounds to " + roundNumber(argNum, 1))
console.log(argNum + " rounds to " + roundNumber(argNum, 0))
console.log(argNum + " rounds to " + roundNumber(argNum, -1))
console.log(argNum + " rounds to " + roundNumber(argNum, -2))

console.log(argNum + " to binary: " + decimalToBinary(argNum))
console.log(argNum + " to decimal: " + binaryToDecimal(argNum))

console.log(argNum + " to octal (via any): " + decimalToAny(argNum, 8))
console.log(argNum + " to decimal (via any): " + anyToDecimal(argNum, 8))
console.log(argNum + " to hex (via any): " + decimalToAny(argNum, 16))
console.log(argNum + " to decimal (via any): " + anyToDecimal(argNum, 16))

// console.log("The " + argPosition + " digit of " + argNum + " is " + getDigitAsString(argNum, argPosition, argArity));
// console.log("The " + argPosition + " digit of " + argNum + " is " + getDigitAsNumber(argNum, argPosition, argArity));
