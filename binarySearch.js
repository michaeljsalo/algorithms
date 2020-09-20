// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 5
// Output : Element found!

// Input : arr[] = {1, 3, 5, 7, 8, 9}
//         x = 6
// Output : Element not found!


function binarySearch(arr = [], needle = -1, lowIndex = 0, highIndex = arr.length-1) {
	// console.log(lowIndex + ' - ' + highIndex)

	let midIndex = Math.floor((lowIndex + highIndex) / 2);

	// Base case: found it
	if (arr[midIndex] === needle) {
		return true;
	}

	// Base case: not found
	if (lowIndex >= highIndex) {
		return false;
	}

	// Recursive case: go lower
	if (arr[midIndex] > needle) {
		return binarySearch(arr, needle, lowIndex, midIndex - 1);
	}

	// Recursive case: go higher
	if (arr[midIndex] < needle) {
		return binarySearch(arr, needle, midIndex + 1, highIndex);
	}
}

function binarySearchClosure(arr = [], needle = -1) {
	let lowIndex = 0;
	let highIndex = arr.length - 1;

	return (function binarySearchInner(lowIndex, highIndex) {
		// console.log(lowIndex + ' - ' + highIndex)

		let midIndex = Math.floor((lowIndex + highIndex) / 2);

		// Base case: found it
		if (arr[midIndex] === needle) {
			return true;
		}

		// Base case: not found
		if (lowIndex >= highIndex) {
			return false;
		}

		// Recursive case: go lower
		if (arr[midIndex] > needle) {
			return binarySearchInner(lowIndex, midIndex - 1);
		}

		// Recursive case: go higher
		if (arr[midIndex] < needle) {
			return binarySearchInner(midIndex + 1, highIndex);
		}
	}(lowIndex, highIndex));
}

function binarySearchLoop(arr = [], needle = -1, lowIndex = 0, highIndex = arr.length-1) {
	// console.log(lowIndex + ' - ' + highIndex)

	let midIndex;
	while (true) {
		midIndex = Math.floor((lowIndex + highIndex) / 2);

		// Base case: found it
		if (arr[midIndex] === needle) {
			return true;
		}

		// Base case: not found
		if (lowIndex >= highIndex) {
			return false;
		}

		// Recursive case: go lower
		if (arr[midIndex] > needle) {
			highIndex = midIndex - 1;
			continue;
		}

		// Recursive case: go higher
		if (arr[midIndex] < needle) {
			lowIndex = midIndex + 1;
			continue;
		}
	}
}


const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

console.log(arr)
console.log('-10: ' + binarySearch(arr, -10))
console.log('0: ' + binarySearch(arr, 0))
console.log('1: ' + binarySearch(arr, 1))
console.log('5: ' + binarySearch(arr, 5))
console.log('5.5: ' + binarySearch(arr, 5.5))
console.log('6: ' + binarySearch(arr, 6))
console.log('7: ' + binarySearch(arr, 7))
console.log('35: ' + binarySearch(arr, 35))
console.log('36: ' + binarySearch(arr, 36))
console.log('37: ' + binarySearch(arr, 37))
console.log('100: ' + binarySearch(arr, 100))

// console.log('5: ' + binarySearchClosure(arr, 5))
// console.log('6: ' + binarySearchClosure(arr, 6))
// console.log('7: ' + binarySearchClosure(arr, 7))

// console.log('5: ' + binarySearchLoop(arr, 5))
// console.log('6: ' + binarySearchLoop(arr, 6))
// console.log('7: ' + binarySearchLoop(arr, 7))
