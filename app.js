const chalk = require('chalk');
const getNotes = require('./notes.js');

// console.log(getNotes());

const greenMsg = msg => {
  console.log(chalk.green(msg));
};

const redMsg = msg => {
  return chalk.inverse.bold.red(msg);
};

// console.log(chalk.green('I am a success'));
greenMsg('I am a success');
console.log(redMsg('I am a failure'));
console.log(chalk.dim('I am meh'));
