"use strict";

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result"); //Завдання 1

function ex1() {
  var n = 0;
  var arr = [];
  var i = 0;

  while (i < 10) {
    n = n + 1;
    arr.push(n);
    i++;
  }

  results[0].textContent = arr;
} //Завдання 2


function ex2() {
  var arr2 = [];

  for (var i = 0; i < 20; i += 2) {
    arr2.push(i);
  }

  results[1].textContent = arr2;
} //Завдання 3


function ex3() {
  var arr = [];
  var n = 7;

  for (var i = 0; i < 11; i++) {
    arr.push(n + ' * ' + i + " = " + n * i + " ");
  }

  results[2].textContent = arr;
} //Завдання 4


function ex4() {
  var arr = [];
  var i = 0;

  while (i < 6) {
    arr.push(i);
    i++;
  }

  arr.shift();
  results[3].textContent = arr;
} //Завдання 5


function ex5() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var allnumbers = [];

  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var number = _numbers[_i];

    if (number == 7) {
      break;
    }

    allnumbers.push(number);
  }

  results[4].textContent = allnumbers;
} //Завдання 6


function ex6() {
  var n = inputs[0].value;
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var allnumbers = [];

  for (var _i2 = 0, _numbers2 = numbers; _i2 < _numbers2.length; _i2++) {
    var number = _numbers2[_i2];

    if (number >= n) {
      break;
    }

    allnumbers.push(number);
  }

  results[5].textContent = allnumbers;
} //Завдання 7


function ex7() {
  var i = 1;
  var allnumbers = [];

  while (i <= 20) {
    if (i % 3 === 0) {
      i++;
      continue;
    }

    allnumbers.push(i);
    i++;
  }

  results[6].textContent = allnumbers;
}
//# sourceMappingURL=task_06.dev.js.map
