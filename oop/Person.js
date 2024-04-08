const Person = {

    ///data properties
    //Key          Value
    firstName : "Alice",
    
  //accessor which is a getter
    get getName (){
        return this.firstName;
    },


    //set method
    set changeName(newName){//A parameter for re-assining or mapping new values
        this.firstName=newName;
     
    }

   
}
//this print is from the get method
console.log(Person);//this is just an object
console.log(Person.firstName);//accessing the data property
console.log(Person.getName)//accessing using getter method
//end of get method

//start of a set method
Person.changeName = "Alison";
console.log(Person.firstName);
//end of a set method