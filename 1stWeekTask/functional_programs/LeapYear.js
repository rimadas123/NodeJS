// determine whether it is a leap year 

var readlineSync = require('readline-sync');

var leapyear = readlineSync.question("Enter year: ");

if(leapyear.length==4){
    if(leapyear%4==0){
        console.log("it is a leap year");
    }
    else{
        console.log("It is not a leap year");
    }
}
else{
    console.log("wrong input... enter minimum 4 numbers!!");
}