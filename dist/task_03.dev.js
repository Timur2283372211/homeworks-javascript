"use strict";

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result"); //Завдання 1

function ex1() {
  var name = inputs[0].value;
  var suma = +inputs[1].value;
  results[3].textContent = "\u0414\u044F\u043A\u0443\u0454\u043C\u043E, ".concat(name, "! \u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438 ").concat(suma, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
}
//# sourceMappingURL=task_03.dev.js.map
