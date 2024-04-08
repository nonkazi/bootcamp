let school ={
    name: "Lamula Secondary School",
    established: "1990",
    location: "Gauteng",
    learnes: 100,

//this is a function that fetches school properties and attributes
    displayInfo: function(){
        console.log(`The name of the school is ${school.name}\nlocated in ${school.location} established in ${school.established} \nand it has ${school.learnes} learners`
        );
    },//end of fuction

hardData: function() {
    console.log("The name of the school is "+ school.name + 
    "\n" + "located in "+ school.location + " established in " + school.established + "\n" + "and it has " + school.learnes + " learners"
    );
},
notationData: function(){
    console.log("The name of the school "+ school['name'])
}

}//end of project


//access function
school.displayInfo();
school.hardData();
school.notationData();