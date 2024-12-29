"use strict";

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
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var Array = [];
  var n = 0;

  for (var i = 0; i < 10; i++) {
    if (arr[i] == 7) {
      break;
    }

    Array.push(n += 2);
  }

  results[4].textContent = Array;
}
//# sourceMappingURL=task_06.dev.js.map
