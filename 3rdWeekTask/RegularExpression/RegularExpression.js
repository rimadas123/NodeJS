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


class Regrex{
    constructor(name,fullname,mobilenum,date){
        this.name = name;
        this.fullname = fullname;
        this.mobilenum = mobilenum;
        this.date = date;
    }

    getDetails() {
        console.log(this.name +" " + this.fullname + " " + this.mobilenum + " " + this.date);
    }

}

module.exports = {
    Regrex
}


