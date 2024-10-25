"use strict";

var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result"); //Завдання 1

function ex1() {
  var pole1 = inputs[0].value;
  var pole2 = inputs[1].value;

  if (pole1.length > 0 && pole2.length > 0) {
    results[0].textContent = "Обидва поля заповнені";
  } else {
    results[0].textContent = "Не всі поля заповнені";
  }
} //Завдання 2


function ex2() {
  var pole3 = +inputs[2].value;
  var pole4 = +inputs[3].value;
  var sumapole = pole3 + pole4;

  if (sumapole > 10) {
    results[1].textContent = "Сума більша за 10";
  } else {
    results[1].textContent = "Сума менша або дорівнює 10";
  }
} //Завдання 3


function ex3() {
  var pole5 = inputs[4].value;

  if (pole5.includes("JavaScript")) {
    results[2].textContent = "Текст містить слово JavaScript";
  } else {
    results[2].textContent = "Текст не містить слово JavaScript";
  }
} //Завдання 4


function ex4() {
  var pole6 = inputs[5].value;

  if (pole6 > 10 && pole6 < 20) {
    results[3].textContent = "Число входить в діапазон від 10 до 20";
  } else {
    results[3].textContent = "Число не входить в діапазон від 10 до 20";
  }
} //Завдання 5


function ex5() {
  var name = inputs[6].value;
  var email = inputs[7].value;
  var password = inputs[8].value;

  if (name.length >= 3 && email.includes("@") && password.length >= 6) {
    results[4].textContent = "Дякуємо, дані передано";
  } else {
    results[4].textContent = "Вибачте, перевірте:  ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.";
  }
}
//# sourceMappingURL=task_04.dev.js.map
