
let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//Завдання 1
function ex1(){
    let pole1 = inputs[0].value 
    let pole2 = inputs[1].value
    if(pole1.length > 0 && pole2 && password.length >= 6){
        results[0].textContent = "Дякуємо, дані передано"
    }
    else{
        results[0].textContent = "Вибачте, перевірте:  ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів."
    }
}

//Завдання 5
function ex5(){
    let name = inputs[2].value 
    let email = inputs[3].value
    let password = inputs[4].value
    if(name.length >= 3 && email.includes("@") && password.length >= 6){
        results[0].textContent = "Дякуємо, дані передано"
    }
    else{
        results[0].textContent = "Вибачте, перевірте:  ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів."
    }
}