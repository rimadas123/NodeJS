/*
* @file: InventoryData.js
* @description: Read in the following message: Hello <<name>>, We have your full
*               name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
*               Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
*               Use Regex to replace name, full name, Mobile#, and Date with proper value.
*
* @author: Rima Das
* @version: 1.0
* @date: 13/1/2020
*/

let fs = require('fs');
let read = require('readline-sync');

class Regrex{
    constructor(name,fullname,mobilenum,date){
        this.data = fs.readFileSync('Inventory.json', 'utf8');
        this.words = JSON.parse(this.data);
        this.name = name;
        this.fullname = fullname;
        this.mobilenum = mobilenum;
        this.date = date;
    }

    reg(){
        this.name = /^[a-zA-Z ]{2,30}$/;
        this.fullname = /^[a-zA-Z]+ [a-zA-Z]+$/;
        this.mobilenum = /^((\+)?(\d{2}[-])?(\d{10}){1})?(\d{11}){0,1}?$/;
        this.date = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/;        
    }

    getDetails() {
        console.log(this.name +" " + this.fullname + " " + this.mobilenum + " " + this.date);
    }

}

let obj = new Regrex("rima","rima das","91-1234566789","27-1-2020");
obj.getDetails();
obj.reg();
