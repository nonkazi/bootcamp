//lets create program that calculates positive numbers only
//if a user enters a negative number that number is skipped

let prompt = require('prompt-sync')();

//negetive numbers -> loop must terminate
//non numeric characters -->skip iteration

let sum = 0;
let num = 0;

while(num>=0){
    num = parseInt(prompt('Enter a number: '));
    sum += num;

    //accept input from user

    

    //continue condition NaN = not a number
    if(isNaN(num)){
        console.log("This is not a number");
        num=0;
        
        continue;
    }

    //display results
    
    console.log(`The sum is ${sum}`);


}


