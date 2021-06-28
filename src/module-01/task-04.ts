const pricePerDroid = 3000;
let credits = 23580;
let numberGoods: string | number;
let totalPrice: number;

numberGoods = Number(prompt('Сколько дроидов вы хотите купить?'));

if (!numberGoods || numberGoods === 0 || Number.isNaN(numberGoods)) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = numberGoods * pricePerDroid;
}

if (totalPrice >= credits) {
  console.log('Недостаточно средств на счету!');
} else if (numberGoods < 0) {
  console.log('Число не может быть отрицательным!');
}

if (numberGoods > 0 && totalPrice < credits) {
  credits -= totalPrice;
  console.log(
    `Вы купили ${numberGoods} дроид(ов), на счету осталось ${credits} кредитов.`
  );
}

export {};
