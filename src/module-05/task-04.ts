class StringBuilder {
  _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str: string) {
    this._value = this._value + str;
  }

  prepend(str: string) {
    this._value = str + this._value;
  }

  pad(str: string) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

export {};
