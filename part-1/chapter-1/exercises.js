//  Exercise #1
var $js1 = document.getElementsByClassName('js-1')[0];
var hash = "Δ";
for (var i = 0; i < 7; i++) {
  var $div = "<p>" + hash + "</p>";
  $js1.innerHTML += $div;
  hash += "Δ";
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
