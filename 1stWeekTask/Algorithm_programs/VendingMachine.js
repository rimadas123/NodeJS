// Find the Fewest Notes to be returned for Vending Machine

const read = require('readline-sync');

let input = read.questionInt("Enter Amount: ");

let amount = input;

let arr = [1000,500,100,50,10,5,2,1];
let flag = 0;

for(i=0;i<arr.length;i++){
    if(input/arr[i]!=0){
        let notes =Math.floor(input / arr[i]);   
        flag = flag + notes;
        input = input % arr[i];
        }
    }

console.log(`Amount ${amount} req ${flag} to get minimum notes`);