//Created by Jamie Van Winckel
function getResults() {
  var numberOfCorrectAnswers = 0;
  var pageOneValue = getCookie(pageOneResult);
  numberOfCorrectAnswers += finalResult(pageOneValue);
  document.getElementById("pageOneResultDiv").innerHTML = translateResult(pageOneValue);
  var pageTwoValue = getCookie(pageTwoResult);
  numberOfCorrectAnswers += finalResult(pageTwoValue);
  document.getElementById("pageTwoResultDiv").innerHTML = translateResult(pageTwoValue);
  var pageThreeValue = getCookie(pageThreeResult);
  numberOfCorrectAnswers += finalResult(pageThreeValue);
  document.getElementById("pageThreeResultDiv").innerHTML = translateResult(pageThreeValue);
  var finalAnswer = numberOfCorrectAnswers / 3;
  document.getElementById("finalScore").innerHTML = finalAnswer.toPrecision(3);
  
}
function finalResult(result) {
  if ( result == "true" ) {
    return 1;
  }
  else {
    return 0;
  }
}
function translateResult(result) {
  if ( result == "true" ) {
    return "Correct";
  }
  else {
    return "Incorrect";
  }
}
