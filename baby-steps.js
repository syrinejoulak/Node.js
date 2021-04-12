const numbers = process.argv.splice(2);
console.log(numbers);

const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + parseInt(currentValue);
}, 0);

console.log(sum);
