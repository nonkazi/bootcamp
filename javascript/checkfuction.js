let prompt = require("prompt-sync")();

//this program check user if is old enough to access site
function checkAge(age)
{
    
    if(age>=18)
    {
        return true;
    }
    else{
        return console.log("Do you have permission from parents?")

    }

    
}
let age = prompt("How old are you? ",18);

    if(checkAge(age)){
        console.log("access granted");
    }
    else{
        console.log("access denied");
    }

    function showMovie(){
       
       let i;
       
       

       for(i=200000;i > 0 ;i--){
        console.log("Access is granted");
        console.log("Playing a movie");
       }
        
    }
    showMovie()

    