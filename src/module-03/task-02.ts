type TCountPropsFn = <T>(obj: { [key: string]: T }) => number;

const countProps: TCountPropsFn = (obj) => Object.values(obj).length;

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

export {};
