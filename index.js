const readlineSync = require('readline-sync');
const chalk = require('chalk');

var nameInput = readlineSync.question("Please enter your name\n")
console.log(chalk.bgYellow(`\nHello ${nameInput}`))
var userInput = readlineSync.question("Please enter your birth year in the format:" +  chalk.cyan("  YYYY")+ "\n")

var inpYear = parseInt(userInput)

var len_of_year = userInput.length

console.log('____________________________________')

function leapyearEval(inpYear){
  if (inpYear % 4 === 0){
    if (inpYear % 100 === 0){
      if (inpYear % 400 === 0){
        console.log(chalk.green('\nYour birthday is in a Leap year!'));
        smASK()
      }else{
        console.log(chalk.bgYellow('\nYour birthday is not in a Leap year!'));
      }
    }else{
      console.log(chalk.green('\nYour birthday is in a Leap year!'));
      smASK()
    }
  }else{
    console.log(chalk.bgYellow('\nYour birthday is not in a Leap year!'));
  }
}

function smASK(){
  console.log(chalk.bgMagenta("\nWould you like to share this info to the Social media?"));
}


function checkInput(inpYear){
  if (typeof inpYear === "number" && len_of_year === 4) {
    leapyearEval(inpYear);
  } else{
    console.log(chalk.bgRed('\nPlease enter a valid Input'));
  }
}

checkInput(inpYear)































