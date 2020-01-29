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

class Address {
    constructor(){
        this.address;
        this.city;
        this.state;
        this.zip;
    }

    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address;
    }
    setCity(city){
        this.city = city;
    }
    getCity(){
        return this.city;
    }
    setState(state){
        this.state = state;
    }
    getState(){
        return this.State;
    }
    setZipCode(zipcode){
        this.zip = zipcode;
    }
    getZipCode(){
        return this.zip;
    }

    getDetails() {
         return (`${this.address} ${this.city} ${this.state} ${this.zip}`);
    }
}

class Person extends Address {
    constructor(firstname,lastname,mobilenum,address,city,state,zip){
        super(address,city,state,zip);
        this.firstname;
        this.lastname;
        this.mobilenum;    
    }

    setFirstName(firstname) {
        this.firstname = firstname;
    }
    getFirstName(){
        return this.firstname;
    }
    setLastName(lastname) {
        this.lastname = lastname;
    }
    getLastName(){
        return this.lastname;
    }
    setMobileNum(mobilenum) {
        this.mobilenum = mobilenum;
    }
    getMobileNum(){
        return this.MobileNum;
    }

    getDetails() {
        return (`${this.firstname} ${this.lastname} ${this.mobilenum} ${super.getDetails()}`)
    }
    
}

module.exports = {
    Person
 }