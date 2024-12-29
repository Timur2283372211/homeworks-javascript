"use strict";

var drinkSelect = document.getElementById("drink-select");
var messageDiv = document.getElementById("message");
var operation = document.getElementById("operation-select");
var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result");
var exitresultDiv = document.querySelector(".exitresult"); //Завдання 1

drinkSelect.addEventListener("change", function () {
  var message = "";

  switch (this.value) {
    case "coffee":
      message = "Ви обрали каву. Гарного дня!";
      break;

    case "tea":
      message = "Ви обрали чай. Насолоджуйтеся моментом!";
      break;

    case "juice":
      message = "Ви обрали сік. Будьте здорові!";
      break;

    default:
      message = "";
  }

  messageDiv.textContent = message;
}); //Завдання 2

function ex2() {
  var day = inputs[0].value;

  switch (inputs[0].value) {
    case "Monday":
      results[0].textContent = "Це робочий день.";
      break;

    case "Tuesday":
      results[0].textContent = "Це робочий день.";
      break;

    case "Wednesday":
      results[0].textContent = "Це робочий день.";
      break;

    case "Thursday":
      results[0].textContent = "Це робочий день.";
      break;

    case "Friday":
      results[0].textContent = "Це робочий день.";
      break;

    case "Saturday":
      results[0].textContent = "Це вихідні.";
      break;

    case "Sunday":
      results[0].textContent = "Це вихідні.";
      break;

    default:
      results[0].textContent = "Це не день тижня!";
  }
} //Завдання 3


function ex3() {
  var numberMonth = inputs[1].value;
  numberMonth == 1 ? results[1].textContent = "Січень" : numberMonth == 2 ? results[1].textContent = "Лютий" : numberMonth == 3 ? results[1].textContent = "Березень" : numberMonth == 4 ? results[1].textContent = "Квітень" : numberMonth == 5 ? results[1].textContent = "Травень" : numberMonth == 6 ? results[1].textContent = "Червень" : numberMonth == 7 ? results[1].textContent = "Липень" : numberMonth == 8 ? results[1].textContent = "Серпень" : numberMonth == 9 ? results[1].textContent = "Вересень" : numberMonth == 10 ? results[1].textContent = "Жовтень" : numberMonth == 11 ? results[1].textContent = "Листопад" : numberMonth == 12 ? results[1].textContent = "Грудень" : results[1].textContent = "Це не номер місяця!";
} //Завдання 4


function ex4() {
  var Month = inputs[2].value;
  Month == "Січень" ? results[2].textContent = 7 : Month == "Лютий" ? results[2].textContent = 6 : Month == "Березень" ? results[2].textContent = 8 : Month == "Квітень" ? results[2].textContent = 11 : Month == "Травень" ? results[2].textContent = 10 : Month == "Червень" ? results[2].textContent = 12 : Month == "Липень" ? results[2].textContent = 19 : Month == "Серпень" ? results[2].textContent = 25 : Month == "Вересень" ? results[2].textContent = 33 : Month == "Жовтень" ? results[2].textContent = 2 : Month == "Листопад" ? results[2].textContent = 5 : Month == "Грудень" ? results[2].textContent = 4 : results[2].textContent = "Це не місяць!";
} //Завдання 5


function ex5() {
  var color = inputs[3].value;
  color == "зелений" ? results[3].textContent = "йти" : color == "жовтий" ? results[3].textContent = "чекати" : results[3].textContent = "стоп!";
} //Завдання 6


operation.addEventListener("change", function () {
  var numberOne = +inputs[4].value;
  var numberTwo = +inputs[5].value;
  var exitresult;

  switch (this.value) {
    case "+":
      exitresult = numberOne + numberTwo;
      break;

    case "-":
      exitresult = numberOne - numberTwo;
      break;

    case "/":
      if (numberTwo == 0) {
        exitresult = "Error!";
      } else {
        exitresult = numberOne / numberTwo;
      }

      break;

    case "*":
      exitresult = numberOne * numberTwo;
      break;

    default:
      exitresult = "";
  }

  exitresultDiv.textContent = exitresult;
});
//# sourceMappingURL=task_05.dev.js.map
