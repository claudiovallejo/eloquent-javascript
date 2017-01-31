//  Exercise 1
var $js1 = document.getElementsByClassName('js-1')[0];
var sampleA = "<p>min(2, 4) => " + min(2, 4) + "</p>";
var sampleB = "<p>min(100, 200) => " + min(100, 200) + "</p>";
$js1.innerHTML += sampleA + sampleB;
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//  Exercise 2
var $js2 = document.getElementsByClassName('js-2')[0];
var sampleC = "<p>isEven(15) => " + isEven(15) + "</p>";
var sampleD = "<p>isEven(122) => " + isEven(122) + "</p>";
$js2.innerHTML += sampleC + sampleD;
function isEven(n) {
  if (Math.abs(n) > 1) { return isEven(n - 2); }
  if (n == 1) { return false; }
  if (n == 0) { return true; }
}
//  Exercise 3a
var $js3a = document.getElementsByClassName('js-3a')[0];
var sampleE = "<p>countBs(\"Bernardo\") => " + countBs("Bernardo") + "</p>";
$js3a.innerHTML += sampleE;
//  Exercise 3b
var $js3b = document.getElementsByClassName('js-3b')[0];
var sampleG = "<p>countChar(\"corpus cristi\", \"c\") => " + countChar("corpus christi", "c") + "</p>";
$js3b.innerHTML += sampleG;
function countChar(string, character) {
  var total = 0;
  for (var l = 0; l < string.length; l++) {
    if (string.charAt(l) === character) {
      total++;
    }
  }
  return total;
}
//  Exercise 3c
var $js3c = document.getElementsByClassName('js-3c')[0];
var sampleH = "<p>countBs(\"Boom & Bust\") => " + countBs("Boom & Bust") + "</p>";
var codeH = "<p>function countBs(string) {\n\treturn countChar(string, \"B\");\n}</p>"
$js3c.innerHTML += codeH + sampleH;
function countBs(string) {
  return countChar(string, "B");
}
