let username = "Sthabile";
let message = "Hi, " + username ;
from = "Anonza"
text ="Welcome to absa please send me your account number"


function sendMessage(){
    let message = "Hi, " + username ;
    console.log(message);

}

sendMessage(); //always call/ Initialize the variable in order
//to get return values

function showMessage(){
    username = "Nonka";
    console.log(message, username);

}
showMessage()
console.log(message ,username);

function sendMsg(from, text){
from = "Anonz "
text ="Welcome to absa please send me your account number"
return from +  text

}

console.log(sendMsg());

