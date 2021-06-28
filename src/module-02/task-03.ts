type TFindFn = (str: string) => string;

const findLongestWord: TFindFn = (string) => {
  const words = string.split(' ');

  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `The longest word of string: '${longestWord}'`;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

export {};
