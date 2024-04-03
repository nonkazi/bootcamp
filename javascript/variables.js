let greetings = "Welcome to FS";
let times = 4;

//block scope
if(times > 5){
    let greetings = "Hi there instead";
    console.log(greetings)
}

//end of block scope
console.log("JS says " + times)
