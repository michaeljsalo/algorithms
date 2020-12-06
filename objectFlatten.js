function flattenObject (nestedObject = {}) {
  const flatObject = {}

  // For each path through object, we will build a keyString.
  // For each leaf, we will output the keyString.
  // I don't know how many leaves until I find them all.

  // Therefore traverse it and find all the leaves.
  // Build a breadcrumb trail going forward.

  // This recursive function doesn't return anything.
  // At leaf case it mutates an object in outer scope.

  function traverseObject (subTree = {}, breadcrumb = []) {
    Object.keys(subTree).forEach(key => {
      const nextBreadcrumb = key ? breadcrumb.concat(key) : breadcrumb

      const value = subTree[key]
      if (typeof value === 'object' && value !== null) {
        traverseObject(value, nextBreadcrumb)
      } else {
        const keyString = nextBreadcrumb.join('.')
        flatObject[keyString] = value
      }
    })
  }
  traverseObject(nestedObject)

  return flatObject
}

const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
}

const dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: {
        '': '1'
      }
    }
  }
}

console.log(flattenObject(user))
console.log(flattenObject(dict))
