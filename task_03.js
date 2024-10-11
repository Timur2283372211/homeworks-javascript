
let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//Завдання 1
function ex1(){
    let name = inputs[0].value 
    let suma = +inputs[1].value
    results[3].textContent = `Дякуємо, ${name}! До сплати ${suma} гривень`
}