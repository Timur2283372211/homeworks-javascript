
let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//Завдання 1
function ex1(){
    let result = 5+5+'5'
    results[0].textContent = result
    results[1].textContent = typeof(result)
}

//Завдання 2
function ex2(){
    let email = inputs[0].value 
    if(email.includes("@")){
        results[2].textContent = "@ знайдено, довжина email = " + email.length + "символів"
    }
    else{
        results[2].textContent = "@ не знайдено, довжина email = " + email.length + "символів"
    }
}

//Завдання 3
function ex3(){
    let wordmy = "My "
    let wordname = "name "
    let wordis = "is "
    let fullname = wordmy + wordname + wordis + "Victor"
    results[4].textContent = fullname
}

//Завдання 4
function ex4(){
    let name = inputs[1].value 
    let suma = +inputs[2].value
    results[5].textContent = `Дякуємо, ${name}! До сплати ${suma} гривень`
}