//  Exercise #1
var $js1 = document.getElementsByClassName('js-1')[0];
var hash = "🔺";
for (var i = 0; i < 7; i++) {
  var $div = "<p style=\"margin: 0; padding: 0; line-height: 1rem;\">" + hash + "</p>";
  $js1.innerHTML += $div;
  hash += "🔺";
}
//  Exercise #2
var $js2 = document.getElementsByClassName('js-2')[0];
var print = "";
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    print += "Fizz";
  } else if (i % 5 === 0) {
    print += "Buzz";
  } else {
    print += i;
  }
  print += " ";
}
$js2.innerHTML += print;
//  Exercise #3
var result = "";
var size = 8;
var symbolA = "◻️"
var symbolB = "◼️"
var $js3 = document.getElementsByClassName('js-3')[0];
for (var i = 0; i < size; i++) {
  var string = "<p style=\"margin: 0; padding: 0; line-height: 1rem;\">";
  for (var e = 0; e < size; e++) {
    if ((i + e) % 2 === 0) {
      string += symbolA;
    } else {
      string += symbolB;
    }
  }
  string += "</p>";
  result += string;
}
$js3.innerHTML += result;
