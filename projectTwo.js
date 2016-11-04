//Created by Jamie Van Winckel
var pageOneResult = "pageOneResult";
var pageTwoResult = "pageTwoResult";
var pageThreeResult = "pageThreeResult";

function letterToNumber(letterIn) {
  var letter = letterIn.toUpperCase();
  var numberOut;
  switch (letter) {
    case "A":
      numberOut = "1";
      break;
    case "B":
      numberOut = "2";
      break;
    case "C":
      numberOut = "3";
      break;
    case "D":
      numberOut = "4";
      break;
    case "E":
      numberOut = "5";
      break;
    case "F":
      numberOut = "6";
      break;
    case "G":
      numberOut = "7";
      break;
    case "H":
      numberOut = "8";
      break;
    case "I":
      numberOut = "9";
      break;
    case "J":
      numberOut = "10";
      break;
    case "K":
      numberOut = "11";
      break;
    case "L":
      numberOut = "12";
      break;
    case "M":
      numberOut = "13";
      break;
    case "N":
      numberOut = "14";
      break;
    case "O":
      numberOut = "15";
      break;
    case "P":
      numberOut = "16";
      break;
    case "Q":
      numberOut = "17";
      break;
    case "R":
      numberOut = "18";
      break;
    case "S":
      numberOut = "19";
      break;
    case "T":
      numberOut = "20";
      break;
    case "U":
      numberOut = "21";
      break;
    case "V":
      numberOut = "22";
      break;
    case "W":
      numberOut = "23";
      break;
    case "X":
      numberOut = "24";
      break;
    case "Y":
      numberOut = "25";
      break;
    case "Z":
      numberOut = "26";
      break;
    default:
      numberOut = "";
      break;
  }
  return numberOut;
}
function lettersToNumbers(lettersIn) {
  var letter1 = lettersIn.substr(0,1);
  var letter2 = lettersIn.substr(1,1);
  var letter3 = lettersIn.substr(2,1);
  var number1 = letterToNumber(letter1);
  var number2 = letterToNumber(letter2);
  var number3 = letterToNumber(letter3);
  var numberAll = number1 + number2 + number3;
  return numberAll;
}
function lettersToNumbersAsIntegers(lettersIn) {
  var numberString = lettersToNumbers(lettersIn);
  var myNumber = parseInt(numberString);
  return myNumber;
}
