/*
* @file: StockReport.js
* @description: Write a program to read in Stock Names, Number of Share, Share Price.
*               Print a Stock Report with total value of each Stock and the total value of Stock.
*
* @author: Rima Das
* @version: 1.0
* @date: 27/1/2020
*/

let file = require('../RegularExpression/Utility');

class Stock{
    constructor() {
       this.data = file.fileRead('Stock.json');
       this.read = JSON.parse(this.data);
    }

    readValue() {
        let num = this.read.stocks;
        let totalShares = 0;
        let totalPrice = 0;
        for(let key in num) {
            if(num.hasOwnProperty(key)) {
                var val = num[key];
                console.log(`Shares names: ${val.name}, Number Of Shares: ${val.NumberOfShares}, Share Price Of each Share: ${val.SharePrice}`);
                totalShares += val.NumberOfShares;
                totalPrice += val.SharePrice;
            }      
        } 
        console.log(`Total shares: ${totalShares}, Total Price: ${totalPrice}`);    
    }
    
}

let obj = new Stock();
obj.readValue();

