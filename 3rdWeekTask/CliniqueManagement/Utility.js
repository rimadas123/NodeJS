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
// const cliniqueObject1 = new clinique.Doctor;
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
                var ag = read.question("Enter your Age: ");
            }while(this.validAge(ag) == false)
            return ag;

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to read entire contents of the file
    * @param 
    * @returns bool
    */

   fileRead(filePath) {
        try {           
            let obj = fs.readFileSync(filePath, 'utf-8');
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
    * @description this method is to writes data to a file
    * @param 
    * @returns bool
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

    autoGenerateId(){
        try {
            do{
                var id = Math.random().toString(4).substr(2, 2);
            }while(id == false)
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
            this.fileWrite('Patient.json',storeAddress);

        } catch (error) {
            return error;
        }
    }

    listDoctor(jsonobject) { 
        try {
            console.log("**************Doctor list**************");
            for(let key in jsonobject){
                if(jsonobject.hasOwnProperty(key)){
                    let val = jsonobject[key];
                    console.log(`${key} Doctor's name: ${val.firstName} ${val.lastName} | ID: ${val.id} | Specialization: ${val.specialization} | Availiability: ${val.availiability}`);
                }
            }
        } catch (error) {
            return error;
        }
    }

    listPatient(jsonobject) { 
            try {
                console.log("**************Patient list**************");
                for(let key in jsonobject){
                    if(jsonobject.hasOwnProperty(key)){
                        let val = jsonobject[key];
                        console.log(`${key} Patient's name: ${val.firstName} ${val.lastName} | ID: ${val.id} | Mobile Number: ${val.mobilenumber} | Age: ${val.age}`);
                    }
                }                                
            } catch (error) {
                return error;
            }
    }

    Appointment(jsonobject) {
        try {
            var date = new Date();
            this.addAppointment(jsonobject);

            do{
                var appointment = read.question("Do you want to get appointment? yes or no");
                if(appointment !="yes" && appointment != "no")
                console.log("Invalid input");
            }while(appointment != "yes" && appointment != "no");

            if(appointment =="yes") {
                this.listDoctor(jsonobject);

                do{
                    var index = this.searchDoctor(jsonobject);
                }while (index == undefined)

                let appoint = jsonobject[index].firstName;
                console.log(appoint);
            }

        } catch (error) {
            return error;
        }
    }
    
    searchDoctorByName(jsonobject){
        try {
            let value = -1;
            let name = this.inputFirstName;

            for (let i = 0; i < jsonobject.length; i++) {
                if(name == jsonobject[i].firstName){
                    value = i;
                }
            }

            if(value === -1) {
                console.log("record not found");
                return;
            }

        } catch (error) {
            return error;
        }
    }

    searchDoctorByID(jsonobject){
        try {
            let value = -1;
            let validID = /^[0-9]+$/;

            do{
                var id = read.questionInt('Enter Doctor ID: ');
            }while(validID.match(id) == false)

            for (let i = 0; i < jsonobject.length; i++) {
                if(id == jsonobject[i].id) {
                    value = i;
                }
            }

            if(value === -1) {
                console.log("record not found");
                return;                
            }
        } catch (error) {
            return error;
        }
    }

    searchDoctorBySpecialization(jsonobject){
        try {
            let value = -1;

            do{
                var spec = read.question("Enter Specialization: ");
            }while(this.validName(spec) == false)

            for (let i = 0; i < jsonobject.length; i++) {
                if(spec == jsonobject[i].specialization){
                    value = i;
                }
            }

            if(value === -1){
                console.log("record not found");
            }
    
        } catch (error) {
            return error;
        }
    }    

    searchDoctorByAvailability(jsonobject){
        try {
            let value = -1;

        } catch (error) {
            return error;
        }
    }

    searchDoctor(jsonobject) {
        try {
            this.listDoctor(jsonobject);
            let ask = read.questionInt(`Enter 1 to search doctor by id \n Enter 2 to search doctor by name \n Enter 3 to search doctor by specialization \n Enter 4 to search doctor by timing availiability`)
            
            switch(ask){
                case 1:
                        this.searchDoctorByName(jsonobject);
                case 2:
                        this.searchDoctorByID(jsonobject);
                case 3:
                        this.searchDoctorBySpecialization(jsonobject);
            }

        } catch (error) {
            return error;
        }
    }

    /**
    * @description this method is used to save the data into the json file
    * @params 
    * @returns 
    */

    savePatientDetails(data) {
        let saved = this.fileWrite('Patient.json',data);
    }

    /**
    * @description this method is used to save the data into the json file
    * @params 
    * @returns 
    */

    saveDoctorDetails(data) {
        let saved = this.fileWrite('Doctor.json',data);
    }

}

module.exports = new Utility();