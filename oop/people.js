let people = {
    gender: 'male'
}


let person = Object(people);

person.name = 'John';
person.age = 22;
person.nationality = 'SA';

//Now we use the key (from attributes to get all properties of the person)
for(let key in person){
    console.log(key)
    console.log(person[key])
}