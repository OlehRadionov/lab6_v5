"use struct";

let numb = prompt("Enter number", "");

if (isNaN(numb) || typeof(numb) == 'undefined' || numb == '' || numb == null) {
    console.log("Завдання 3");
    console.log("Функція func приймає 2 параметра: число і анонімну функцію, яка підносить число до квадрату. Піднесіть число до 4-тої ступені за допомогою func.");
    console.log("Резльтат скрипта: Error");
}
else {
    function func(num, f) {
        return f(f(num));
    }

    const square = function (num) {
        return num ** 2;
    };

    const result = func(numb, square);

    console.log("Завдання 3");
    console.log("Функція func приймає 2 параметра: число і анонімну функцію, яка підносить число до квадрату. Піднесіть число до 4-тої ступені за допомогою func.");
    console.log("Введені дані: " + numb);
    console.log("Резльтат скрипта: " + result);
}