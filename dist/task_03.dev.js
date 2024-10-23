"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result"); //Завдання 1

function ex1() {
  var result = 5 + 5 + '5';
  results[0].textContent = result;
  results[1].textContent = _typeof(result);
} //Завдання 2


function ex2() {
  var email = inputs[0].value;
  results[2].textContent = "n";
  results[3].textContent = "n";
} //Завдання 3


function ex3() {
  var wordmy = "My ";
  var wordname = "name ";
  var wordis = "is ";
  var fullname = wordmy + wordname + wordis + "Victor";
  results[4].textContent = fullname;
} //Завдання 4


function ex4() {
  var name = inputs[1].value;
  var suma = +inputs[2].value;
  results[5].textContent = "\u0414\u044F\u043A\u0443\u0454\u043C\u043E, ".concat(name, "! \u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438 ").concat(suma, " \u0433\u0440\u0438\u0432\u0435\u043D\u044C");
}
//# sourceMappingURL=task_03.dev.js.map
