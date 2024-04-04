//calculator using switch

//we need thi library module to accept the user input
const prompt = require('prompt-sync')()


let results;

//accept th operator input
const operator = prompt('Enter operator (+,-,* or /)  ');

//accept an operand input

const num1 = parseFloat(prompt('Enter number 1: '));
const num2 = parseFloat(prompt('Enter number 2: '));

switch(operator) {
    case '+':
        results = num1 + num2;
        console.log(`${num1} + ${num2} = ${results}`);
        break;

    case '-':
        results = num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`);
        break;

    case '*':
        results = num1 * num2;
        console.log(`${num1} * ${num2} = ${results}`);
        break;

        
    case '/':
        results = num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`);
        break;
        default:


}
