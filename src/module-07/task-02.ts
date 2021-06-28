type TItems = string[];

// data
const ingredients: TItems = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// refs
const ingredientsDomRef = document.querySelector('.js-ingredients');

// fn
const createItem = (text: string) => {
  const elementLi = document.createElement('li');
  elementLi.textContent = text;
  return elementLi;
};

const createList = (items: TItems) => items.map((item) => createItem(item));

const addListToDom = (domRef, items: TItems) => {
  domRef.append(...createList(items));
};

// call fn
addListToDom(ingredientsDomRef, ingredients);
