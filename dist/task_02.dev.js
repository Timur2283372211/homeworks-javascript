"use strict";

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result"); //Завдання 1

function ex1() {
  var temp = +inputs[0].value;
  results[0].textContent = temp * 1.8 + 32 + "F";
} //Завдання 2


function ex2() {
  var monthday = +inputs[1].value;
  results[1].textContent = monthday * 24 + " hours";
  results[2].textContent = monthday * 24 * 60 + " minutes";
} //Завдання 3


function ex3() {
  var playerenergy = +inputs[2].value;
  var playerhalth = +inputs[3].value;

  if (playerenergy > playerhalth) {
    playerenergy = playerenergy - 10;
  } else {
    playerhalth = playerhalth - 10;
  }

  results[3].textContent = playerenergy + " energy " + playerhalth + " halth";
} //Завдання 4


function ex4() {
  var suma = +inputs[4].value;
  suma = suma - suma * 0.1;
  results[7].textContent = suma + " зі знижкою";
} //Завдання 5


function ex5() {
  var number = Math.random() * 2;
  results[5].textContent = "число " + number;
  results[6].textContent = Math.floor(number);
} //Завдання 6


function ex6() {
  var suma = +inputs[5].value;
  suma = suma - suma * 0.1;
  results[7].textContent = suma + " зі знижкою";
} //Завдання 7


function ex7() {
  var stringnumber = String(inputs[6].value);
  results[8].textContent = parseFloat(stringnumber);
} //Завдання 8


function ex8() {
  var sqrtnumber = +inputs[7].value;
  results[9].textContent = parseFloat(stringnumber);
} //Завдання 9


function ex9() {
  var stringnumber2 = String(+inputs[8].value);
  var number = +inputs[9].value;
  results[10].textContent = parseFloat(stringnumber2);
  results[11].textContent = String(number);
}
//# sourceMappingURL=task_02.dev.js.map
