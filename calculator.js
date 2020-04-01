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





console.log(add(addition1));
console.log(subtract(subtraction1));
console.log(multiply(multiplication1));
console.log(divide(division1));

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
    return divide(object);
    }
  }

}

console.log(calculate(addition1));
console.log(calculate(subtraction1));
console.log(calculate(multiplication1));
console.log(calculate(division1));




