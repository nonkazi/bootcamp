var mark = 67;
const passMark = 50;

if(mark < passMark){
    console.log("Sorry you failed with " + mark );
}
else if ( mark >= 50 && mark < 75)
{
    console.log("Good job you passed with " + mark);

}

else if( mark >= 75 && mark < 100){
    console.log("Congratulations you passed with a dinstionction of " + mark)
}

else {
    console.log("Undefined marks")
}

