class person {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    addAddress(address){
        this.address = address;
    }

    getDetails(){
        console.log(`name of the person ${this.name}
        \nresiding at ${this.address}`)
    }

}

let person1 = new person('Bob', 10);
person1.addAddress('Limpopo');

//Abstraction

person1.getDetails();