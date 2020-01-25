/*
* @file: InventoryData.js
* @description: Create a JSON file having Inventory Details for Rice, Pulses and Wheats
*                with properties name, weight, price per kg.
*
* @author: Rima Das
* @version: 1.0
* @date: 13/1/2020
*/ 

let fs = require('fs');

class Inventory{
    constructor(){ 
        this.data = fs.readFileSync('Inventory.json', 'utf8');
        this.words = JSON.parse(this.data)
    
    }
    print() {
        let riceValue = this.words.rice;
        let pulseValue = this.words.pulses;
        let wheatValue = this.words.wheats;

        console.log(".................Rice....................");
        for(let key in riceValue) {
            if(riceValue.hasOwnProperty(key)) {
                let val = riceValue[key];
                console.log(`name of rice: ${val.name} , weight : ${val.weight} , pricePerKg : ${val.priceperkg}`);
                let total = val.weight + val.priceperkg;
                console.log(`total: ${total}`);
            }
        }
        console.log(".................Pulses....................");
        for(let key in pulseValue) {
            if(pulseValue.hasOwnProperty(key)) {
                let val = pulseValue[key];
                console.log(`name of pulses: ${val.name} , weight : ${val.weight} , pricePerKg : ${val.priceperkg}`);
                let total = val.weight + val.priceperkg;
                console.log(`total: ${total}`);
            }
        }

        console.log(".................Wheat....................");
        for(let key in wheatValue) {
            if(wheatValue.hasOwnProperty(key)) {
                let val = wheatValue[key];
                console.log(`name of wheat: ${val.name} , weight : ${val.weight} , pricePerKg : ${val.priceperkg}`);
                let total = val.weight + val.priceperkg;
                console.log(`total: ${total}`);
            }
        }
    }

}
let obj = new Inventory();
obj.print();

