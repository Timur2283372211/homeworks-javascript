let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//Завдання 1
function ex1(){
    let pole1 = inputs[0].value 
    let pole2 = inputs[1].value
    if(pole1.length > 0 && pole2.length > 0){
        results[0].textContent = "Обидва поля заповнені"
    }
    else{
        results[0].textContent = "Не всі поля заповнені"
    }
}

//Завдання 2
function ex2(){
    let pole3 = + inputs[2].value 
    let pole4 = + inputs[3].value
    let sumapole = pole3 + pole4 
    if(sumapole > 10){
        results[1].textContent = "Сума більша за 10"
    }
    else{
        results[1].textContent = "Сума менша або дорівнює 10"
    }
}

//Завдання 3
function ex3(){
    let pole5 = inputs[4].value  
    if(pole5.includes("JavaScript")){
        results[2].textContent = "Текст містить слово JavaScript"
    }
    else{
        results[2].textContent = "Текст не містить слово JavaScript"
    }
}

//Завдання 4
function ex4(){
    let pole6 = inputs[5].value  
    if(pole6 > 10 && pole6 < 20){
        results[3].textContent = "Число входить в діапазон від 10 до 20"
    }
    else{
        results[3].textContent = "Число не входить в діапазон від 10 до 20"
    }
}

//Завдання 5
function ex5(){
    let name = inputs[6].value 
    let email = inputs[7].value
    let password = inputs[8].value
    if(name.length >= 3 && email.includes("@") && password.length >= 6){
        results[4].textContent = "Дякуємо, дані передано"
    }
    else{
        results[4].textContent = "Вибачте, перевірте:  ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів."
    }
}