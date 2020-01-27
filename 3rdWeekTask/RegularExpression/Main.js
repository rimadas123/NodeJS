
let regFile = require('./RegularExpression');
let validInput = require('./Utility');
let fs = require('fs');
let read = require('readline-sync');
// let data = fs.readFileSync('Regrex.json', 'utf8');
// let words = JSON.parse(this.data);


let fname = read.question("Enter your name: ");
if(validInput(this.name) !== fname){ 
    console.log("Enter a valid name");
}

let flName = read.question("Enter your full name: ");
if(validInput(fullname) !== flName){
    console.log("Enter your full name");
}

let mNum = read.questionInt("Enter your mobile number: ");
if(validInput(mobilenum) !== mNum){
    console.log("Enter 10 digit number");
}

let dat = read.question("Enter a date: ");
if(validInput(date) !== dat){
    console.log("Enter date in dd-mm-yyyy format");
}


let obj = new regFile(fname,flName,mNum,dat);
obj.getDetails();

