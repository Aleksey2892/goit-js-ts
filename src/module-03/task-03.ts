type TFindBestEmployeeFn = (employees: { [key: string]: number }) => string;

const findBestEmployee: TFindBestEmployeeFn = (employees) => {
  let employeeTask: number = 0;
  let bestEmployee: string;

  for (const entry of Object.entries(employees)) {
    if (entry[1] > employeeTask) {
      bestEmployee = entry[0];
      employeeTask = entry[1];
    }
  }

  return `Самый продуктивный: ${bestEmployee}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

export {};
