"use strict";

var friends = ["Mango", "Poly", "kivi", "ajax"];
var string = "";
var inputs = document.querySelectorAll("input");
var results = document.querySelectorAll(".result");
var buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", ex8);
buttons[1].addEventListener("click", join8);
buttons[1].addEventListener("click", forEach8); //Завдання 8

function ex8() {
  string = "";
  console.log("Привіт!1");

  function ex8_inner(arr) {
    for (var i = 0; i < arr.length; i++) {
      string += arr[i] + " ";
    }

    results[0].textContent = "for " + string.trim();
  }

  ex8_inner(friends);
}

function join8() {
  string = "";
  console.log("Привіт!2");

  function join8_inner(arr) {
    results[0].textContent = "join() " + arr.join(" ");
  }

  join8_inner(friends);
}

function forEach8() {
  string = "";
  console.log("Привіт!3");

  function forEach8_inner(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr.forEach(function (element) {
        string += element + " ";
        results[0].textContent = " forEach() " + string;
      });
    }
  }

  forEach8_inner(friends);
}
//# sourceMappingURL=task_08.dev.js.map
