let input: number | string;
const numbers: number[] = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) break;

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
}

if (!numbers.length) {
  console.log('Отменено пользователем!');
} else {
  for (let number of numbers) {
    total += number;
  }

  console.log(`Введенные цифры: '${numbers.join(', ')}'`);
  console.log(`Общая сумма чисел равна [${total}].`);
}

export {};
