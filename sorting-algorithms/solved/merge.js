/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. 
Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided 
  (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: 
  [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. 
  This means that the initial subarrays are naturally occurring sorted sequences. 
  How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

/**
 * merge
 * 
 * Merges two sorted arrays into a single sorted array.
 * The first time this gets called from mergeSort, 
 * L and R will each be an array with a length of 1.
 */

function merge(L, R) {
  let output = [];

  while (L.length && R.length) {
    if (L[0] < R[0]) {
      output.push(L.shift());
    } else {
      output.push(R.shift());
    }
  }
  output = output.concat(L.slice()).concat(R.slice());
  return output;
}

/**
 * mergeSort
 *
 * Sorts a list recursively by dividing it into smaller halves down to 
 * single numbers, and then merging the sorted halves together.
 */

function mergeSort(list) {
  if (list.length < 2) {
    return list;
  }
  const listMiddle = Math.floor(list.length / 2);
  const left = list.slice(0, listMiddle);
  const right = list.slice(listMiddle, list.length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const list = [43, 66, 820, 1, 8, 22, 88, 12, 2, 33, 5];

const sortedList = mergeSort(list);

console.log(sortedList);
