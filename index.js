const chalk = require("chalk")
const validator = require("validator")


console.log(chalk.blue.inverse('Hello world!'));
console.log(chalk.yellow("nihal"));
const val = validator.isEmail("nihal@gamil.com")
console.log(val ? chalk.green.inverse(val) : chalk.red.inverse(val));
console.log(chalk.yellow("hello"));