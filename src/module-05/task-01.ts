interface IAccount {
  login: string;
  email: string;
}
interface IAccountWithInfo extends IAccount {
  getInfo: () => void;
}

type TAccountFn = (obj: IAccount) => void;

const Account: TAccountFn = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango: IAccountWithInfo = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly: IAccountWithInfo = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

export {};
