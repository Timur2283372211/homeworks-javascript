"use strict";

var exercizes = document.querySelectorAll(".ex");
var age = 15;
exercizes[0].textContent = "Мені " + age + " років.";
var myname = "Тимур";
exercizes[1].textContent = "Мене звати " + myname + ".";
var isStudent = true;
exercizes[2].textContent = "Мене звати " + isStudent + ".";

function task_alert() {
  alert("Дія небезпечна!");
}

function task_confirm() {
  var answer = confirm("Дія небезпечна!");

  if (answer) {
    alert("Хто не ризикує - то й не п'є шампанського!");
  } else {
    document.writeln(answer);
  }
}

function task_prompt() {
  var answer = "Введіть свій вік";
}
//# sourceMappingURL=task_01.dev.js.map
