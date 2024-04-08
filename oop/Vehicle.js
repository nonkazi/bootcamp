class Vehicle{
    constructor(name, maker, engine){
this.name = name;
this.maker = maker;
this.engine = engine
    }//end of constructor

    getDetails(){
        return("VEhicle name: " + this.name)
    }

}


let sedan = new Vehicle('Atios','Toyota','1.4');

console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine);
console.log(sedan.getDetails());