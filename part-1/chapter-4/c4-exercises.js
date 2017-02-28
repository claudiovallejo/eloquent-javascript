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
  for (var i = array[array.length - 1]; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  console.log(list);
}

function listToArray(list) {
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  console.log(array);
}

function prepend(element, list) {
  var newList = { value: element, rest: list };
  console.log(newList);
}
