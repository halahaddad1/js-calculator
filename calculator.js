const prompt = require('prompt');


const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const addition1 = { 
  num1:1,
  num2:2,
  operand: 'add'  
}
const subtraction1 = { 
  num1:5,
  num2:2,
  operand: 'subtract'  
}
const multiplication1 = {
  num1:3,
  num2:3,
  operand: 'multiply'
}
const division1 = {
  num1:3,
  num2:3,
  operand: 'divide'
}
const addition2 = { 
  num1:1,
  num2:2,
  operand: '+'  
}
const subtraction2 = { 
  num1:5,
  num2:2,
  operand: '-'  
}
const multiplication2 = {
  num1:3,
  num2:3,
  operand: '*'
}

const division2 = {
  num1:3,
  num2:3,
  operand: '/'
}

const erreneous1 = {
  num2:2,
  operand: '+'
}

const erreneous2 = {
  num1:5,
  num2:0,
  operand: '/'
}
const erreneous3 = {
  num1:"hotdog",
  num2:"elephant",
  operand:"add"
}


const add = function(object) {

  return ` ${object.num1} + ${object.num2} = ` + (object.num1 + object.num2);
}

const subtract =  function(object) {

  return ` ${object.num1} - ${object.num2} = ` + (object.num1 - object.num2);
}

const  multiply = function(object) {

  return ` ${object.num1} * ${object.num2} = ` + (object.num1 * object.num2);
}

const divide = function (object) {

  return ` ${object.num1} / ${object.num2} = ` + (object.num1 / object.num2);
}

const calculate = function(object) {
if ( isNaN(object.num1)|| isNaN(object.num2) ||
 !["+", "add","*","multiply","-","subtract","/","divide"].includes(object.operand)  
    ){
    console.log("wrong input! try again");
    } else { if (object.operand === '+' || object.operand === 'add'){
    return add(object);
    } else if (object.operand === '-' || object.operand === 'subtract'){
    return subtract(object);
    } else if (object.operand === '*' || object.operand === 'multiply'){
    return multiply(object);
    } else if (object.operand === '/' || object.operand === 'divide'){
      if (object.num2 === 0){
        return "Can't divide by zero! Try again!"
      } else {
      return divide(object);
      }
    }
  }
}

// console.log(calculate(addition1));
// console.log(calculate(subtraction1));
// console.log(calculate(multiplication1));
// console.log(calculate(division1));
// console.log(calculate(addition2));
// console.log(calculate(subtraction2));
// console.log(calculate(multiplication2));
// console.log(calculate(division2));
// console.log(calculate(erreneous1));
// console.log(calculate(erreneous2));
// console.log(calculate(erreneous3));



const calculateUserInput = function(error, promptInput) {
  console.log('These are the values you entered: ', promptInput);
  console.log("the result is: ", calculate(promptInput));
  console.log("Thank you for using the calculator!")
}  

// const moreCalcualtions = function(error, promptInput2) {
//   switch(promptInput2.response) {
//     case "yes":
//       console.log("Ok! let's keep going");
//       prompt.start();
//       console.log("Welcome to the Cli Calculator");
//       console.log("please enter two numbers, followed by an operation");
//       prompt.get(['num1','num2','operand'], calculateUserInput);
//       break;
//     case "no":
//       console.log("I am not Thank you for using the calculator!");
//       break;
//   }
// } 

prompt.start();
console.log("Welcome to the Cli Calculator");
console.log("please enter two numbers, followed by an operation");
prompt.get(['num1','num2','operand'], calculateUserInput);

