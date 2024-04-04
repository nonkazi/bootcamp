
let courses = ["Javascript", "Java", "Angular", "React"]//Pre defined array
courses.length  = 10;

courses[4] = "Typescript";
courses[5] = "Vue";
console.log("Number of courses available: " +  courses);
console.log(typeof courses);

//injection multiple valus into a single array
courses.push(["C++", "Flutter", "C#", "Python"])
console.log(courses)
//check if an array is method

console.log(`Array is a method ${courses instanceof Array}`);





let faculty = courses.toString();

console.log(faculty)
console.log(typeof faculty)
console.log(faculty.toUpperCase())