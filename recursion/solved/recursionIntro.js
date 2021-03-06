//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loopToZero(n) {
  if (n < 0 || typeof n !== "number") {
    return console.log("n must be a positive number.");
  }
  while (n >= 0) {
    console.log(n);
    --n;
  }
  console.log("done!");
}
// loopToZero(10);

//2. Next, try looping just like above except using recursion
function recurseToZero(n) {
  if (n < 0 || typeof n !== "number") {
    return console.log("n must be a positive number.");
  }
  if (n > 0) {
    console.log(n);
    return recurseToZero(--n);
  }
  console.log(n);
  console.log("done!");
}
// recurseToZero(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  if (typeof base !== "number" || typeof expo !== "number") {
    return "base and expo must be numbers";
  }

  let result = base;

  while (expo > 1) {
    result *= base;
    --expo;
  }
  console.log("result:", result);
}
// exponent(3, 3);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
  if (typeof base !== "number" || typeof expo !== "number") {
    return "base and expo must be numbers";
  }

  if (expo > 1) {
    return base * recursiveExponent(base, --expo);
  }
  return base;
}

// const exponentResult = recursiveExponent(3, 3);
// console.log("exponentResult:", exponentResult);

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  let newArr = [];
  let arrLen = arr.length;

  function multiply(arrLen) {
    if (arrLen > 0) {
      newArr[arrLen - 1] = arr[arrLen - 1] * num;
      return multiply(--arrLen);
    }
    return;
  }
  multiply(arrLen);
  return newArr;
}

// const testRM = recursiveMultiplier([1, 2, 3], 2);
// console.log("testRM:", testRM);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  let reversedArr = [];
  let arrLen = arr.length;

  function reverse(arrLen, i = 0) {
    if (arrLen > 0) {
      reversedArr[i] = arr[arrLen - 1];
      return reverse(--arrLen, ++i);
    }
  }
  reverse(arrLen);
  return reversedArr;
}

const reversed = recursiveReverse([1, 2, 4, 5, 6]);
console.log("reversed array:", reversed);
