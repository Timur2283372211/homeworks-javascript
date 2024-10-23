let inputs = document.querySelectorAll("input");
let results = document.querySelectorAll(".result");

const mas = [];

//Завдання 6
function ex6() {
  do {
    mas.push(prompt());
    if(+ mas.at(-1) === NaN){
        mas.pop()
    }
  }
  while(mas[mas.length -1] != null)
    mas = mas.map(Number)
  results[0].textContent = "Сума всіх введених чисел = " + mas.reduce((suma, item) => suma + item)
}

