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
