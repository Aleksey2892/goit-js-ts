const checkForSpam = (message: string): boolean => {
  const string = message.toLowerCase();

  return string.includes('spam') || string.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

export {};
