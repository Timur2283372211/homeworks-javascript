let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//Завдання 1
function ex1(){
    let temp = +inputs[0].value
    results[0].textContent = temp * 1.8 + 32 + "F"
}

//Завдання 2
function ex2(){
    let monthday = +inputs[1].value
    results[1].textContent = monthday * 24 + " hours"
    results[2].textContent = monthday * 24 * 60 + " minutes"
}

//Завдання 3
function ex3(){
    let playerenergy = +inputs[2].value
    let playerhalth = +inputs[3].value
    if(playerenergy > playerhalth){
        playerenergy = playerenergy - 10
    }
    else {
        playerhalth = playerhalth - 10
    }
    results[3].textContent = playerenergy + " energy " + playerhalth + " halth"
}

//Завдання 4
function ex4(){
    let suma = +inputs[4].value
    suma = suma - suma * 0.1
    results[7].textContent = suma + " зі знижкою"
}

//Завдання 5
function ex5(){
    let number = Math.random()*2
    results[5].textContent = "число " + number
    results[6].textContent = Math.floor(number)
}

//Завдання 6
function ex6(){
    let suma = +inputs[5].value
    suma = suma - suma * 0.1
    results[7].textContent = suma + " зі знижкою"
}

//Завдання 7
function ex7(){
    let stringnumber = String(inputs[6].value)
    results[8].textContent = parseFloat(stringnumber)
}

//Завдання 8
    function ex8(){
    let sqrtnumber = +inputs[7].value
    results[9].textContent = parseFloat(stringnumber)
}

//Завдання 9
function ex9(){
    let stringnumber2 = String(+ inputs[8].value)
    let number = + inputs[9].value
    results[10].textContent = parseFloat(stringnumber2)
    results[11].textContent = String(number)
}