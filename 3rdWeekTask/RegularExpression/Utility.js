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

const fs = require('fs');
const read = require('readline-sync');

class Utility {

    /**
    * @description this method is to validate alphabets only
    * @param string
    * @returns string
    */

    validName(n) {
        try {
            let name = /^[a-zA-Z]+$/;
            if (n.match(name)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is to validate alphabets only
    * @param string
    * @returns string
    */
   
    validFullName(fn) {
        try {
            let name = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if (fn.match(name)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is to validate mobile number
    * @param numbers
    * @returns numbers
    */

    validMobileNum(mn) {
        try {
            let mobilenum = /^((\+)?(\d{2}[-])?(\d{10}){1})?(\d{11}){0,1}?$/;
            if (mn.match(mobilenum)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to read file
    * @param string, numbers
    * @returns string ,numbers
    */

    fileRead(filePath) {
        try {           
            let obj = fs.readFileSync(filePath, 'utf-8')
                if (obj) { 
                   let res = JSON.parse(obj);
                    return res;
                 }
                else {
                    return false;
                }
        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for first name
    * @returns string 
    */

    inputFirstName(){
        try {
            do{
                var fn = read.question("Enter your first name(only alphabets): ");
            }while(this.validName(fn) == false)
            return fn;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for full name
    * @returns string
    */

    inputFullName(){
        try {
            do{
                var fl = read.question("Enter your first name and last name(only alphabets): ");
            }while(this.validFullName(fl) == false)
            return fl;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for mobile number
    * @returns number
    */
   
    inputMobileNum(){
        try {
            do{
                var mn = read.question("Enter your mobile number(only 10 digits): ");
            }while(this.validMobileNum(mn) == false)
            return mn;

        } catch (error) {
            return error;
        }
    }

}
module.exports ={ Utility }
