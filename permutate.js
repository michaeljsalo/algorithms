// Length is set
// Order matters
// Items can repeat
function permutate1 (chars = '') {
  const permutations = [];

  (function inner (prefix = '') {
    // Base case: String is complete
    if (prefix.length === chars.length) {
      permutations.push(prefix)
      return
    }

    // Recursive case: More chars to add
    for (const char of chars) {
      inner(prefix + char)
    }
  }())

  return permutations
}

// Length is set
// Order matters
// Items are unique
function permutate2 (chars = '') {
  const permutations = [];

  (function inner (prefix = '', remain = '') {
    // Base case: String is complete
    if (prefix.length === chars.length) {
      permutations.push(prefix)
      return
    }

    // Recursive case: More chars to add
    for (let index = 0; index < remain.length; index += 1) {
      const nextRemain = remain.slice(0, index) + remain.slice(index + 1)
      inner(prefix + remain[index], nextRemain)
    }
  }('', chars))

  return permutations
}

// Length is three chars
// Order matters
// Items can repeat
function permutateLoop1 (chars = 'aaa') {
  const threeChars = chars.slice(0, 3)
  const permutations = []

  for (const charA of threeChars) {
    for (const charB of threeChars) {
      for (const charC of threeChars) {
        const permutation = charA + charB + charC
        permutations.push(permutation)
      }
    }
  }
  return permutations
}

// Length is three chars
// Order matters
// Items are unique
function permutateLoop2 (chars = 'aaa') {
  const permutations = []
  const remain3 = chars.slice(0, 3)

  for (let a = 0; a < remain3.length; a += 1) {
    const remain2 = remain3.slice(0, a) + remain3.slice(a + 1)

    for (let b = 0; b < remain2.length; b += 1) {
      const remain1 = remain2.slice(0, b) + remain2.slice(b + 1)

      for (let c = 0; c < remain1.length; c += 1) {
        const permutation = remain3[a] + remain2[b] + remain1[c]
        permutations.push(permutation)
      }
    }
  }
  return permutations
}

// console.log(permutate1());
// console.log(permutate2());
// console.log(permutate1('A'));
// console.log(permutate2('A'));
// console.log(permutate1('AB'));
// console.log(permutate2('AB'));
console.log(permutate1('ABC'))
console.log(permutate2('ABC'))
console.log(permutateLoop1('ABC'))
console.log(permutateLoop2('ABC'))
