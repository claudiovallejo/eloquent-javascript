//  Exercise #1: Minimum
function min(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
//  Exercise #2: Recursion
function isEven(number) {
  var n = Math.abs(number);
  if (n > 2) {
    isEven(n - 2);
  } else if (n == 1) {
    console.log("The number is odd.");
  } else {
    console.log("The number is even.");
  }
}
//  Exercise #3: Bean Counting
function countBs(string) {
  var b = 0;
  for (var s = 0; s < string.length; s++) {
    if (string.charAt(s) === "B") {
      b += 1;
    }
  }
  console.log(b);
}
function countChar(string, letter) {
  var v = 0;
  for (var s = 0; s < string.length; s++) {
    if (string.charAt(s) === letter) {
      v += 1;
    }
  }
  console.log(v);
}
function countBs(string) {
  countChar(string, "B");
}
