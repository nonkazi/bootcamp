var greetings = "Hello FS Cohort"; //VARIABLE 1
let times = 5.1; //CONDITION FOR COMPARISON
//block scope
if(times > 5 && times ==5){
    greetings = "Hi there instead"; //VARIABLE 2
    console.log(greetings);
    
}
else{
    console.log(greetings)
}

var hello = "Welcom note"
if(times == 6 || times < 5){
    hello ="Welcome to javascript"
}
else{
    console.log(hello + " " + "value is false");
}

if(times!=5){
    console.log(greetings + " : " + "Gueswork");
}
else{
    console.log("i knew it !!!")
}
//end of block scope
console.log(greetings + " : " + hello)
