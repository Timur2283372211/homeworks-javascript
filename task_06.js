let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//Завдання 1
function ex1() {
    let n = 0
    let arr = []
    let i = 0
    while(i < 10){
        n = n + 1
        arr.push(n)
        i++
    }
    results[0].textContent = arr
}

//Завдання 2
function ex2() {
    let arr2 = []
    for(let i = 0; i < 20; i+=2){
        arr2.push(i)
    }
    results[1].textContent = arr2
}

//Завдання 3
function ex3(){
    let arr = [];
    let n = 7;
    for(let i = 0; i < 11; i++){
        arr.push(n + ' * ' + i + " = " + n * i + " ");
    }
    results[2].textContent = arr;
}

//Завдання 4
function ex4(){
    let arr = [];
    let i = 0;
    while(i < 6){
        arr.push(i)
        i++
    }
    arr.shift()
    results[3].textContent = arr;
}

//Завдання 5
function ex5(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let allnumbers = [];
    for(let number of numbers){
        if(number == 7){
            break
    }
    allnumbers.push(number)
}
    results[4].textContent = allnumbers;
}

//Завдання 6
function ex6(){
    let n = inputs[0].value;
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let allnumbers = [];
    for(let number of numbers){
        if(number >= n){
            break
    }
        allnumbers.push(number)
}
    results[5].textContent = allnumbers;
}

//Завдання 7
function ex7(){
    let i = 1;
    let allnumbers = [];
    while(i <= 20){
        if(i % 3 === 0){
            i++;
            continue;
    }
        allnumbers.push(i)
        i++
}
    results[6].textContent = allnumbers;
}