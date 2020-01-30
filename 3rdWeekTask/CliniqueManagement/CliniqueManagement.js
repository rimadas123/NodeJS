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
        this.firstname;
        this.lastname;
        this.id;
    }
    setFirstName(firstname) {
        this.firstname = firstname;
    }

    getFirstName() {
        return this.firstname
    }

    setLastName(lastname) {
        this.lastname = lastname;
    }

    getLastName() {
        return this.lastname;
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
        super(firstname,lastname,id);
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
    constructor(firstname,lastname,id){
        super(firstname,lastname,id);
        this.mobilenum;
        this.age;
    }

    setMobileNumber(mobilenum) {
        this.mobilenum = mobilenum;
    }

    getMobileNumber() {
        return this.mobilenum;
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