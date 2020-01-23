/*
* @file: HashingFunction.js
* @description: Calculate monthly payment
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 14/1/2020
*/
function monthlyPayment(){
    try {
        const read = require('readline-sync');
        const input = require('./Utility');

        do{
            var year = read.question("How many years to pay off: ");      
                       
        }while( input.yearValid(year) == false)

        var principal = read.question("Enter loan amount: ");
        var rateOfInterest = read.question("Rate of interest between 10% to 13%: ");   
        const result = input.monthlyPayment(year,principal,rateOfInterest); 
        
        console.log("Monthly payment u need to do to repay the loan amount: ",result);
        return [year,principal,rateOfInterest,result];
        
    } catch (error) {
        return error;
    }
    
}

module.exports = monthlyPayment();
