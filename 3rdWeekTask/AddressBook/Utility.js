/*
* @file: AddressBook.js
* @description: The software to be designed is a program that can be used to maintain an address book. An address book
*             holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
*             phone number.
*
* @author: Rima Das
* @version: 1.0
* @date: 29/1/2020
*/
const read = require('readline-sync');
const fs = require('fs');
const person = require('./AddressBook');
let personObject = new person.Person;
let Book = [];

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
    * @description this method is to validate alphanumeric characters
    * @param string, numbers
    * @returns string,numbers
    */

    validAddress(n) {
        try {
            let address = /^[a-zA-Z0-9\s,'-]*$/;
            if (n.match(address)) {
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
    * @description this method is to validate pin code
    * @param numbers
    * @returns numbers
    */

    validZipCode(zp) {
        try {
            let zipcode = /^[1-9][0-9]{5}$/;
            if (zp.match(zipcode)) {
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
    * @description this method is to write file
    * @param string
    * @returns string,numbers
    */

    fileWrite(filePath,data) {
        try {
            
            let stringify = JSON.stringify(data);     
            let obj = fs.writeFileSync(filePath,stringify);

                if (obj) { 
                    console.log(obj);
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
    * @description this method is used to take input for address
    * @returns string ,number
    */

    inputAddress(){
        try {
            do{
                var ad = read.question("Enter your address:(alphanumeric characters) ");
            }while(this.validAddress(ad) == false)
            return ad;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for city
    * @returns string 
    */

    inputCity(){
        try {
            do{
                var cy = read.question("Enter your city: ");
            }while(this.validName(cy) == false)
            return cy;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for state
    * @returns string 
    */

    inputState(){
        try {
            do{
                var st = read.question("Enter your state: ");
            }while(this.validName(st) == false)
            return st;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for zip code
    * @returns numbers
    */

    inputZip(){
        try {
            do{
                var zp = read.question("Enter your zip code:(only numbers) ");
            }while(this.validZipCode(zp) == false)
            return zp;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to take input for all the properties and write it to the json file
    * @returns string ,numbers
    */

    addPerson(jsonobject) { 
        try {
            let storeAddress = jsonobject;

            let fname = this.inputFirstName();
            personObject.setFirstName(fname);

            let lname = this.inputLastName();
            personObject.setLastName(lname);

            let mnum = this.inputMobileNum();
            personObject.setMobileNum(mnum);

            let add = this.inputAddress();
            personObject.setAddress(add);

            let city = this.inputCity();
            personObject.setCity(city);
            
            let state = this.inputState();
            personObject.setState(state);
            
            let zip = this.inputZip();
            personObject.setZipCode(zip);
            
            storeAddress.push(personObject)
            this.fileWrite('AddressBook.json',storeAddress);

        } catch (error) {
            return error;
        }
    }

    editPerson(jsonObject) {
        try {
            let value = -1;
            let name = this.inputFirstName();

            for(let i=0;i<jsonObject.length;i++){
                // check whether the name is present or not
                if(name == jsonObject[i].firstname) {                    
                    value = i;
                }
            }

            if(value === -1) {
                console.log("record not found");
                return;
            }

            let ch = read.questionInt("Which information you want to edit: Enter 1 for address \n Enter 2 for city \n Enter 3 for state \n Enter 4 for zip \n Enter 5 for mobile number \t");

            switch(ch) {
                case 1: 
                        let address = this.inputAddress();
                        jsonObject[value].address = address;
                        this.save(jsonObject);
                        break;
                case 2: 
                        let city = this.inputCity();
                        jsonObject[value].city = city;
                        this.save(jsonObject);
                        break;
                case 3: 
                        let state = this.inputState();
                        jsonObject[value].state = state;
                        this.save(jsonObject);
                        break;
                case 4:
                        let zip = this.inputZip();
                        jsonObject[value].zip = zip;
                        this.save(jsonObject);
                        break;
                case 5:
                        let mobilenum = this.inputMobileNum();
                        jsonObject[value].mobilenum = mobilenum;
                        this.save(jsonObject);
                        break;
            }
            
        } catch (error) {
            return error;
        }
    }

    deletePerson(jsonObject) {
        try {
            let value = -1;
            let name = this.inputFirstName();

            for(let i=0;i<jsonObject.length;i++){
                // check whether the name is present or not
                if(name == jsonObject[i].firstname) {                    
                    value = i;
                }
            }

            if(value === -1) {
                console.log("record not found");
                return;
            }

            let ch = read.questionInt(`Enter 1 to delete \n Enter 2 to exit \t`);

            if(ch === 1){
                jsonObject.splice(value,1);
                this.save(jsonObject);
            } else {
                console.log("record not deleted");
                return;
            }

        } catch (error) {
            return error;
        }
    }

    sortByName(jsonObject) {
        try {
            for(let i = 0 ; i < jsonObject.length ; i++){
                for(let j = 0; j < jsonObject.length - 1 - i ; j++) {

                    if(jsonObject[j].firstname.localeCompare(jsonObject[j+1].firstname) > 0) {     

                        let temp = jsonObject[j];
                        jsonObject[j]= jsonObject[j+1];
                        jsonObject[j+1]= temp;                    
                    }
                }  
            }
            this.save(jsonObject);
            this.display(jsonObject);
            
        } catch (error) {
            return error;
        }
    }

    sortByZip(jsonObject) {
        try {
            for(let i = 0 ; i < jsonObject.length ; i++){
                for(let j = 0; j < jsonObject.length - 1 - i ; j++) {

                    if(jsonObject[j].zip > (jsonObject[j+1].zip) > 0) {     

                        let temp = jsonObject[j];
                        jsonObject[j]= jsonObject[j+1];
                        jsonObject[j+1]= temp;                    
                    }
                }
                
            }
            this.save(jsonObject);
            this.display(jsonObject);
            
        } catch (error) {
            return error;
        }
    }

    display(jsonObject) {
        try {
            console.log(`******************Address Book***************************`);
            for(let key in jsonObject) {
                if(jsonObject.hasOwnProperty(key)){
                    let val = jsonObject[key];
                    console.log(`${key} First Name: ${val.firstname}  |  Last Name: ${val.lastname}  |  Mobile Number: ${val.mobilenum}  |  Address: ${val.address}  |  City: ${val.city}  |  State: ${val.state}  |  Zip: ${val.zip}`);
                }
            }
        } catch (error) {
            return error;
        }
        
    }

    save(data) {
        let saved = this.fileWrite('AddressBook.json',data);
    }
}

module.exports = new Utility();