function person(fname, lname){
    let firstname = fname;
    let lastname = lname;

    let getDetails_noAccess = function(){
        return (`First name is: ${firstname} and lastname is: 
        ${lastname}`)
    }

    this.getDetails_Access = function(){
        return (`First name is: ${firstname} and lastname is: 
        ${lastname}`)
    }
}//End of fuction
let person1 = new person("Alice", "Mudau");
console.log(person1.firstname);
console.log(person1.getDetails_noAccess);
console.log(person1.getDetails_Access());