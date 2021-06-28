let input: number | string;
let total = 0;

while (true) {
  input = prompt('Введите произвольное число');

  if (!input) {
    console.log('Задача завершена пользователем!');
    break;
  }

  input = Number(input);

  if (!Number.isNaN(input)) {
    console.log(`Было введено: ${input}`);
    total += input;
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}

alert(`Общая сумма чисел равна ${total}`);

export {};
