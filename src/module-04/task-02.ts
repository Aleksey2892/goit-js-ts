type TItemsPushFn = (itemName: string) => void;
type TInvokeInventoryActionFn = (
  itemName: string,
  action: TItemsPushFn
) => void;

const inventory = {
  items: ['Knife', 'Gas mask'],

  add(itemName: string): void {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },

  remove(itemName: string): void {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item: string) => item !== itemName);
  },
};

const itemsPush: TItemsPushFn = inventory.add.bind(inventory);
const itemsRemove: TItemsPushFn = inventory.remove.bind(inventory);

const invokeInventoryAction: TInvokeInventoryActionFn = (itemName, action) => {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', itemsPush);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', itemsRemove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

export {};
