const friends = ["Mango", "Poly", "kivi", "ajax"];

let string = "";

let inputs = document.querySelectorAll("input");
let results = document.querySelectorAll(".result");
let buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", ex8);
buttons[1].addEventListener("click", join8);
buttons[1].addEventListener("click", forEach8);

//Завдання 8
function ex8() {
    string = "";
  console.log("Привіт!1");
  function ex8_inner(arr) {
    for (let i = 0; i < arr.length; i++) {
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
      for (let i = 0; i < arr.length; i++) {
        arr.forEach(element =>{
        string += element + " "
        results[0].textContent = " forEach() " + string;
    });

      }
    }
    forEach8_inner(friends);
  }