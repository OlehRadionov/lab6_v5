"use struct";

function countNumbers(str) {
  let count = 0;
  const words = str.split(" "); // 

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (/^[1-9][0-9]*$/.test(word) && !/^0[1-9]/.test(word)) {
      count++;
    }
  }

  return count;
}

const input = prompt("Введіть текст з числами", "");

if(input == null || typeof(input) == 'undefined' || input == '')
{
  console.log("Завдання 2");
  console.log("З клавіатури вводиться текстовий рядок. Написати функцію, яка розраховує кількість чисел у рядку (числом вважається послідовність символів, яка починається із цифри 1 - 9, у своєму записі містить знаки 0 - 9 і крапку  та відокремлена пропусками).");
  console.log("Резльтат скрипта: Error");
}
else{
  const numCount = countNumbers(input);

  console.log("Завдання 2");
  console.log("З клавіатури вводиться текстовий рядок. Написати функцію, яка розраховує кількість чисел у рядку (числом вважається послідовність символів, яка починається із цифри 1 - 9, у своєму записі містить знаки 0 - 9 і крапку  та відокремлена пропусками).");
  console.log("Введені дані: " + input);
  console.log("Резльтат скрипта: " + numCount);
}