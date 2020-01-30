/*
* @file: Utility.js
* @description: In this class various methods is being written for reusability of the code
*
* @author: Rima Das
* @version: 1.0
* @date: 30/1/2020
*/

const read = require('readline-sync');
const fs = require('fs');
const clinique = require('./CliniqueManagement');
const cliniqueObject1 = new clinique.Doctor;
const cliniqueObject2 = new clinique.Patient;

class Utility{

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
    * @description this method is to validate mobile number
    * @param numbers
    * @returns numbers
    */
   
   validMobileNum(mn) {
        try {
            let mobilenum = /^[6-9]\d{9}$/;
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
    * @description this method is to validate number
    * @param numbers
    * @returns numbers
    */

    validAge(ag) {
        try {
            let age = /^[1-9]+$/;
            if (ag.match(age)) {
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
    * @description this method is used to take input for last name
    * @returns string 
    */

    inputLastName(){
        try {
            do{
                var ln = read.question("Enter your last name(only alphabets): ");
            }while(this.validName(ln) == false)
            return ln;

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

    /**
    * @description this method is used to take input for number
    * @returns number
    */

   inputAge(){
        try {
            do{
                var ag = read.question("Enter your mobile number(only 10 digits): ");
            }while(this.validAge(ag) == false)
            return ag;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for number
    * @returns number
    */

   autoGenerateId(){
        try {
            do{
                var id = Math.random().toString(4).substr(2, 2);
            }while(this.validAge(id) == false)
            return id;

        } catch (error) {
            return error;
        }
    }

    addAppointment(jsonobject) { 
        try {
            let storeAddress = jsonobject;

            let fname = this.inputFirstName();
            cliniqueObject2.setFirstName(fname);

            let lname = this.inputLastName();
            cliniqueObject2.setLastName(lname);

            let id = this.autoGenerateId();
            cliniqueObject2.setId(id);

            let mob = this.inputMobileNum();
            cliniqueObject2.setMobileNumber(mob);

            let age = this.inputAge();
            cliniqueObject2.setAge(age);
            
            storeAddress.push(cliniqueObject2)
            this.fileWrite('AddressBook.json',storeAddress);

        } catch (error) {
            return error;
        }
    }

    addDoctor(jsonobject) { 
        try {
            let storeAddress = jsonobject;

            let fname = this.inputFirstName();
            cliniqueObject1.setFirstName(fname);

            let lname = this.inputLastName();
            cliniqueObject1.setLastName(lname);

            let id = this.autoGenerateId();
            cliniqueObject1.setId(id);

            let spec = this.inputMobileNum();
            cliniqueObject2.setMobileNumber(mob);

            let avail = this.inputAge();
            cliniqueObject2.setAge(age);
            
            storeAddress.push(cliniqueObject2)
            this.fileWrite('AddressBook.json',storeAddress);

        } catch (error) {
            return error;
        }
    }

}

module.exports = new Utility();