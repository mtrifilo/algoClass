/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

function bubbleSort(list) {
  // compare the first index with the second index
  // if the first index is larger than the second, swap the two values
  // compare the second index with the third index... and so on until the end
  // if a sort occured, loop again
  // else, the list is sorted! return the sorted list.

  let sorted = false;

  while (!sorted) {
    let sortOccurred = false;

    for (let i = 0; i < list.length; i++) {
      console.log("current index:", i);

      if (list[i] > list[i + 1]) {
        const temp = list[i];

        list[i] = list[i + 1];
        list[i + 1] = temp;

        console.log("swapped i with i + 1:", list[i], list[i + 1]);
        sortOccurred = true;
      }
    }
    if (!sortOccurred) {
      sorted = true;
    }
  }

  return list;
}

const unsortedList = [23, 43, 12, 14, 3, 32];

console.log("sorted:", bubbleSort(unsortedList));
