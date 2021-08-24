const arg = process.argv.slice(2);
let timeArray = arg.sort((a,b) =>  a - b);
if (timeArray.length === 0) {
  console.log('Error. No number(s) in input. Please, provide number(s)');
  process.exit();
}
for (let i = 0; i < timeArray.length; i ++) {
  if (timeArray[i] < 0 || timeArray[i] === isNaN) {
    i++;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  },timeArray[i] * 1000);
}
