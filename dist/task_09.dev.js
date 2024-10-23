"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result");
var mas = []; //Завдання 6

function ex6() {
  do {
    mas.push(prompt());

    if (+mas.at(-1) === NaN) {
      mas.pop();
    }
  } while (mas[mas.length - 1] != null);

  mas = (_readOnlyError("mas"), mas.map(Number));
  results[0].textContent = "Сума всіх введених чисел = " + mas.reduce(function (suma, item) {
    return suma + item;
  });
}
//# sourceMappingURL=task_09.dev.js.map
