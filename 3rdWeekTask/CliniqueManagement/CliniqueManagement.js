/*
* @file: AddressBook.js
* @description: This programme is used to manage a list of Doctors associated with the Clinique and list of patients who use the
*               clinique.
*
* @author: Rima Das
* @version: 1.0
* @date: 30/1/2020
*/

class CommmonDetails{
    constructor(){
        this.firstName;
        this.lastName;
        this.id;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getFirstName() {
        return this.firstName
    }

    setLastName(lastName) {
        this.lastNfiboame = lastName;
    }

    getLastName() {
        return this.lastName;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

class Doctor extends CommmonDetails{
    constructor(firstname,lastname,id){
        super(firstName,lastName,id);
        this.specialization;
        this.availiability;
    }

    setSpecializtion(specialize) {
        this.specialization = specialize;
    }

    getSpecializtion() {
        return this.specialization;
    }

    setAvailiablity(availiability){
        this.availiability = availiability;
    }

    getAvailiability() {
        return this.availiability;
    }
}

class Patient extends CommmonDetails {
    constructor(firstName,lastName,id){
        super(firstName,lastName,id);
        this.mobilenumber;
        this.age;
    }

    setMobileNumber(mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    getMobileNumber() {
        return this.mobilenumber;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

module.exports = {
    Patient,
    Doctor
}