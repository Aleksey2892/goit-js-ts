interface ITransaction {
  readonly sum: number;
  readonly act: string;
  readonly id: number;
}
interface IAccount {
  balance: number;
  transactions: ITransaction[];
  createTransaction: (amout: number, type: string) => ITransaction;
  deposit: (amout: number) => string;
  withdraw: (amout: number) => string;
  getBalance: () => string;
  getTransactionDetails: (id: number) => string | ITransaction;
  getTransactionTotal: (type: string) => string;
  counterId: () => number;
}

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let counter = 0;

const account: IAccount = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      sum: amount,
      act: type,
      id: this.counterId(),
    };
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return `Операция [+${amount}] прошла успешно. id транзакции: '${counter}'`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return `Снятие суммы [${amount}] не возможно :( Доступный баланс: ${this.balance}.`;
    }

    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    return `Операция [-${amount}] прошла успешно. id транзакции: '${counter}'`;
  },

  getBalance() {
    return `Баланс: [${this.balance}]`;
  },

  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      return id === trans.id ? trans : `Не нашли такой id: '${id}' :(`;
    }
  },

  getTransactionTotal(type) {
    let result = 0;

    for (const value of this.transactions) {
      if (type === value.act) result += value.sum;
    }

    return `Общая сумма '${type}' транзакций: [${result}]`;
  },

  counterId() {
    return (counter += 1);
  },
};

console.log(account.deposit(110));
console.log(account.withdraw(50));
console.log(account.deposit(120));
console.log(account.withdraw(90));
console.log(account.deposit(130));
console.table(account.transactions);
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));

export {};
