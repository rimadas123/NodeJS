/*
* @file: RegularExpression.js
* @description: Read in the following message: Hello <<name>>, We have your full
*               name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
*               Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
*               Use Regex to replace name, full name, Mobile#, and Date with proper value.
*
* @author: Rima Das
* @version: 1.0
* @date: 27/1/2020
*/
const util = require('./Utility');

class Regrex{
    constructor(){
       this.file = util.fileRead('Regrex.json');
    }

    /**
    * @description this method is for replacing the string with the user input
    * @param string, numbers
    * @returns string ,numbers
    */
    replaceData(name,fullname,mobilenum,date) {
        let data = this.file.str;
        console.log(data);
        data = data.replace('<<name>>',name);
         data = data.replace('<<full name>>',fullname);
         data = data.replace('xxxxxxxxxx',mobilenum);
         data = data.replace('dd/mm/yyyy',date);

        console.log(`${data}`)
    }
}

// create object of the class Regrex
let obj = new Regrex();
let firstname = util.inputFirstName();
let fullName = util.inputFullName();
let mobileNumber = util.inputMobileNum();
let date = new Date();
let format = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

obj.replaceData(firstname,fullName,mobileNumber,format);

module.exports = new Regrex();

