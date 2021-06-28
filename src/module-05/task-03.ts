type TItems = string[];

class Storage {
  items: TItems;

  constructor(items: TItems) {
    this.items = items;
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  getItems() {
    return this.items;
  }

  removeItem(itemName: string) {
    this.items.forEach((item, index) => {
      if (item.includes(itemName)) this.items.splice(index, 1);
    });
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

export {};
