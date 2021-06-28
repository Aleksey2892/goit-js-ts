let cost: number;
let delivery: string;

delivery = prompt('Укажите в форме страну доставки');

if (!delivery) {
  console.log('Отменено пользователем!');
} else {
  delivery = delivery.toLowerCase();
}

switch (delivery) {
  case 'китай':
    delivery = 'Китай';
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    delivery = 'Чили';
    break;

  case 'австралия':
    cost = 170;
    delivery = 'Австралию';
    break;

  case 'индия':
    cost = 80;
    delivery = 'Индию';
    break;

  case 'ямайка':
    cost = 120;
    delivery = 'Ямайку';
    break;

  default:
    if (delivery) {
      alert(
        'В вашей стране доставка не доступна. Доставка возможна в: "Китай", "Чили", "Австралия", "Индия", "Ямайка"'
      );
    }
}

if (
  delivery === 'Китай' ||
  delivery === 'Австралию' ||
  delivery === 'Индию' ||
  delivery === 'Ямайку'
) {
  console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
}

export {};
