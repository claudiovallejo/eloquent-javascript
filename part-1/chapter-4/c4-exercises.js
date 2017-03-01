//  Exercise #1: The Sum of a Range
function range(start, end) {
  var list = [];
  for (start; start <= end; start++) {
    list.push(start);
  }
  return list;
}

function sum(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) {
    total += list[i];
  }
  console.log(total);
}

function range(start, end, step = 1) {
  var list = [];
  if (start > end) {
    for (start; start >= end; start += step) {
      list.push(start);
    }
  } else {
    for (start; start <= end; start += step) {
      list.push(start);
    }
  }
  console.log(list);
}
//  Exercise #2: Reversing and Array
function reverseArray(array) {
  var newArray = [];
  var n = array.length - 1;
  for (n; n >= 0; n--) {
    newArray.push(array[n]);
  }
  console.log(newArray);
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var a = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = a;
  }
  console.log(array)
}
//  Exercise #3: A List
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = { value: array[i], rest: list };
  return list;
}

function listToArray(list) {
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value
  else
    return nth(list.rest, n - 1);
}
//  Exercise #4: Deep Comparison
function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;

}
