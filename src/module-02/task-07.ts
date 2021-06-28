type TLogins = string[];

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let loginLength: number;

const isLoginValid = (login: string) => {
  let loginValid = false;
  loginLength = login.length;

  if (loginLength >= 4 && loginLength <= 16) {
    loginValid = true;
  }

  return loginValid;
};

const isLoginUnique = (allLogins: TLogins, login: string) => {
  let loginUnique = false;

  if (allLogins.includes(login) === false) {
    loginUnique = true;
  }

  return loginUnique;
};

const addLogin = (allLogins: TLogins, login: string) => {
  if (isLoginValid(login) === false) {
    return `Ошибка! Длина вашего логина: '${loginLength}' символ(ов). Логин должен быть от 4 до 16 символов.`;
  }

  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }

  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
  }

  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

export {};
