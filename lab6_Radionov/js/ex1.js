"use struct";

function addJsScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false; 
    document.body.appendChild(script);
}

let arrNumb = [],
    arrVul = [];

for (let i = 0; i < 12; i++) {
    arrNumb[i] = Math.floor(Math.random() * 100);

    if (arrNumb[i] % 5 == 0)
        arrVul.push(arrNumb[i]);
}

console.log("Завдання 1");
console.log("У автоматично згенерованому масиві із 12 цілих чисел знайти всі, які кратні 5 та вивести їх у рядок відсортованим за зростанням");
console.log("Введені дані: " + arrNumb);
if (arrVul.length > 1)
    console.log("Результат скрипта: " + arrVul.sort((a, b) => a - b));
else if (arrVul.length === 1)
    console.log("Результат скрипта: масив має одне значення " + arrVul);
else
    console.log("Результат скрипта: масив порожній");

for (let i = 2; i < 4; i++) {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }
    ask(
        'Подключати ' + i + ' скрипт?',
        function () { alert("Вы погодились."); addJsScript('./js/ex' + i + '.js') },
        function () { alert("Вы скасували виконання."); }
    );
}
