//Created by Jamie Van Winckel
//MAKE NEW FUNCTION FOR PAGE TWO THAT TAKES THE NUMBERS (THAT WERE JUST CHANGED FROM LETTERS) SO THAT IT CHANGES FROM STRINGS TO NUMBERS
//parseInt <-converts strings to integers
function sampleAnswers() {
  var e1n1Value = document.getElementById("e1n1").innerHTML;
  var e1n2Value = document.getElementById("e1n2").innerHTML;
  var e1n3Value = lettersToNumbersAsIntegers(e1n1Value) - lettersToNumbersAsIntegers(e1n2Value);
  document.getElementById("e1n3").innerHTML = e1n3Value;
  var e2n1Value = document.getElementById("e2n1").innerHTML;
  var e2n2Value = document.getElementById("e2n2").innerHTML;
  var e2n3Value = lettersToNumbersAsIntegers(e2n1Value) - lettersToNumbersAsIntegers(e2n2Value);
  document.getElementById("e2n3").innerHTML = e2n3Value;
  var e3n1Value = document.getElementById("e3n1").innerHTML;
  var e3n2Value = document.getElementById("e3n2").innerHTML;
  var e3n3Value = lettersToNumbersAsIntegers(e3n1Value) - lettersToNumbersAsIntegers(e3n2Value);
  document.getElementById("e3n3").innerHTML = e3n3Value;
  var e4n1Value = document.getElementById("e4n1").innerHTML;
  var e4n2Value = document.getElementById("e4n2").innerHTML;
  var e4n3Value = lettersToNumbersAsIntegers(e4n1Value) - lettersToNumbersAsIntegers(e4n2Value);
  document.getElementById("e4n3").innerHTML = e4n3Value;
  var e5n1Value = document.getElementById("e5n1").innerHTML;
  var e5n2Value = document.getElementById("e5n2").innerHTML;
  var e5n3Value = lettersToNumbersAsIntegers(e5n1Value) - lettersToNumbersAsIntegers(e5n2Value);
  document.getElementById("e5n3").innerHTML = e5n3Value;
}
function checkAnswer() {
  var theirAnswer = document.getElementById("e6n3").value;
  if (isNaN( theirAnswer )) {
    document.getElementById("userMessage").innerHTML = "Please Enter Numbers";
  }
  else {
    var e6n1Value = document.getElementById("e6n1").innerHTML;
    var e6n2Value = document.getElementById("e6n2").innerHTML;
    var finalAnswer = lettersToNumbersAsIntegers(e6n1Value) - lettersToNumbersAsIntegers(e6n2Value);

    if ( finalAnswer == theirAnswer ) {
      document.getElementById("userMessage").innerHTML = "Correct";
      setCookie(pageTwoResult, true, 1);
    }
    else {
      document.getElementById("userMessage").innerHTML = "Incorrect";
      setCookie(pageTwoResult, false, 1);
    }
  }
}
