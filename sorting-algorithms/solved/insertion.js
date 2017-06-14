/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

function insertionSort (arr) {

  for (let i = 1; i < arr.length; i++) {

    for (let j = i; j > 0; j--) {

      if (arr[j] < arr[j - 1]) {
        const temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }

  }
  return arr
}

const sorted = insertionSort ([3, 2, 8, 4, 1, 9, 33, 5])

console.log(sorted)