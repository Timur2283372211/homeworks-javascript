let exercizes = document.querySelectorAll(".ex")

let age = 15
exercizes[0].textContent = "Мені " + age + " років."

let myname = "Тимур"
exercizes[1].textContent = "Мене звати " + myname + "."

let isStudent = true
exercizes[2].textContent = "Мене звати " + isStudent + "."

function task_alert(){
    alert("Дія небезпечна!")
}
function task_confirm(){
    let answer = confirm("Дія небезпечна!")
    if(answer){
        alert("Хто не ризикує - то й не п'є шампанського!")
    }
    else{
        document.writeln(answer)
    }
}
function task_prompt(){
    let answer = ("Введіть свій вік")
}