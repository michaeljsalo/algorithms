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
const argPosition = args[1] || 1;
const argArity    = args[2] || 10;

console.log("The " + argPosition + " digit of " + argNum + " is " + getDigitAsString(argNum, argPosition, argArity));
console.log("The " + argPosition + " digit of " + argNum + " is " + getDigitAsNumber(argNum, argPosition, argArity));
