interface IProduct {
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
}

type TCalcFn = (
  allProdcuts: IProduct[],
  productName: string
) => number | string;

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice: TCalcFn = (allProdcuts, productName) => {
  for (const key of allProdcuts) {
    if (key.name === productName) {
      return key.price * key.quantity;
    }
  }
  return `Такого продукта нет: '${productName}'`;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

export {};
