/*

SET

Abstract data type
Stores unique values in no particular order
No mechanism for retrieving elements
Your set should be able to store any JavaScript primitive

*** Operations:

mySet.count()
=> integer value for the number of values present in set

mySet.add(value)
=> set object

mySet.delete(value)
=> true if value was present and removed
=> false if value was not present

mySet.has(value)
=> true/false

mySet.forEach(callbackFn)
=> no return value
calls callbackFn once for each value in the set

Note: ES6 has a Set data structure as part of the core language.

*** Additional Exercises:

Modify your set to take a max capacity and return a string if you try to add an element when there's no more room
mySet.add(value)
=> "Max capacity already reached. Remove element before adding a new one."

Make your set able to take objects, arrays, and functions as values in addition to just primitives.


 */

function Set(capacity) {
  // implement me...
  this._storage = [];
  this._count = 0;
}

Set.prototype.count = function() {
  // implement me...
  return this._count;
};
// Time complexity:

Set.prototype.add = function(value) {
  // implement me...
  if (this._storage.indexOf(value) < 0) {
    this._storage.push(value);
    ++this._count;
    return value;
  }
  return "error: value is already in the set";
};
// Time complexity:

Set.prototype.delete = function(value) {
  // implement me...
  const valueIndex = this._storage.indexOf(value);
  if (valueIndex < 0) {
    return false;
  }
  this._storage.splice(valueIndex, 1);
  --this._count;
  return true;
};
// Time complexity:

Set.prototype.has = function(value) {
  // implement me...
  if (this._storage.indexOf(value) !== -1) {
    return true;
  }
  return false;
};
// Time complexity:

Set.prototype.forEach = function(callback) {
  // implement me...
  this._storage.map(value => callback(value));
};
// Time complexity:

let testSet = new Set(3);

const testAdd = testSet.add("value");
console.log("testAdd:", testAdd);
console.log("testCount:", testSet.count());
console.log("testHas:", testSet.has("value"));

const testDelete = testSet.delete("value");
console.log("testDelete:", testDelete);

testSet.add(1);
testSet.add(2);
testSet.add(3);

testSet.forEach(value => {
  console.log("forEach: current value", value);
  return value;
});

/*
*** Exercises:

1. Implement the following set theory operations:

mySet.union(otherSet)
=> mySet with added values from otherSet
add any values from otherSet into mySet that are not yet there
ex: {1,2,3} union {2,3,4} => {1,2,3,4}

mySet.intersection(otherSet)
=> mySet with values removed that are not in otherSet
remove values from mySet that are not in otherSet
ex: {1,2,3} intersection {2,3,4} => {2,3}

mySet.difference(otherSet)
=> mySet with values removed that are in otherSet
remove values from mySet that are in otherSet
ex: {1,2,3} difference {2,3,4} => {1}

mySet.hasSubset(otherSet)
=> true/false depending on if otherSet is a subset of mySet
ex: {1,2,3} hasSubset {2,3,4} => false
ex: {1,2,3} hasSubset {2,3} => true


2*. Using a set, create a whitelist filter - given a list of whitelist items and a collection to be filtered, return an array with only the items from the collection that are on the whitelist:

whitelistFilter(collection <array>, whitelist <array>)
=> filtered collection <array> with only items from white list

3*. Now create a blacklist filter.

* exercises adapted from Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne

 */
