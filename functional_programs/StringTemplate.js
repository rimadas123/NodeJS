// get input from the user

var readlineSync = require('readline-sync');

var a = readlineSync.question("Enter your name ");

if(a.length >= 3)
{
    console.log("Hello " + a +" good morning");
}
else
{
    console.log("Please enter minimum 3 characters");
}

