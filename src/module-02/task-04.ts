type TFormatStringFn = (string: string) => string;

const formatString: TFormatStringFn = (string) => {
  let format: string | string[] = string;

  if (format.length > 40) {
    format = string.split('');
    format.length = 40;
    format = format.join('');

    return `${format}...(trimmed).`;
  }

  return format;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка

export {};
