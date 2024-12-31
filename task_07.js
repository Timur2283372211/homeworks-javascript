let results = document.querySelectorAll(".result")


// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
function ex1(){
let numbers = [1, 2, 3];
numbers[1] = 10;
results[0].textContent = numbers;
}

// 2. Створити масив із трьох рядків. Додати до масиву ще один рядок.
function ex2(){
let strings = ["рядок1", "рядок2", "рядок3"];
strings.push("новийРядок");
results[1].textContent = strings;
}

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
function ex3(){
let nums = [5, 10, 15, 20];
let sum = nums.reduce((total, num) => total + num, 0);
results[2].textContent = sum;
}

// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
function ex4(){
let fiveNumbers = [1, 2, 3, 4, 5];
let exit = [];
for (let i = 0; i < fiveNumbers.length; i++) {
  exit.push(fiveNumbers[i]);
}
results[3].textContent = exit;
}

// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок масиву, який містить більше 5-ти символів.
function ex5(){
let fiveStrings = ["hello", "world", "JavaScript", "short", "example"];
let exit = [];
fiveStrings.forEach((str) => {
  if (str.length > 5) {
    exit.push(str);
  }
});
results[4].textContent = exit;
}

// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
function ex6(){
let tenNumbers = [3, 45, 67, 12, 89, 34, 23, 90, 56, 78];
let maxNumber = Math.max(...tenNumbers);
results[5].textContent = maxNumber;
}

// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
function ex7(){
let tenMoreNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
let exit = [];
tenMoreNumbers.forEach((num) => {
  if (num % 2 === 0) {
    exit.push(num);
  }
});
results[6].textContent = exit;
}