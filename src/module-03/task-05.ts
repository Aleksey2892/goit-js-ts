interface IProduct {
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
}

type TPropValuesFn = (
  allProducts: IProduct[],
  propName: string
) => (string | number)[];

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues: TPropValuesFn = (allProducts, propName) => {
  const requestValue: (number | string)[] = [];

  for (const product of allProducts) {
    if (product[propName]) requestValue.push(product[propName]);
  }

  return requestValue;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []

export {};
